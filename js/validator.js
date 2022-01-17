    let selectorRules={}
    function Validate(inputElement,rule){
        let errorElement= inputElement.parentElement.querySelector('.form-message')
        let errorMessage
        //lấy ra các rules của selector
        let rules= selectorRules[rule.selector]
        //lặp qua từng rule và check.Nếu có lỗi thì dừng việc ktra
        for(let i=0; i<rules.length;i++){
            errorMessage=rules[i](inputElement.value)
            if(errorMessage) break
        }
        if(errorMessage){
            errorElement.innerText= errorMessage
            inputElement.parentElement.classList.add('invalid')
        }
        else{
            errorElement.innerText= ' '
            inputElement.parentElement.classList.remove('invalid')
        }
        return !errorMessage
    }
function Validator(options){
    var formElement = document.querySelector(options.form) 
    if(formElement){
        formElement.onsubmit= function(e){
            e.preventDefault()
            var isFormValid=true
            options.rules.forEach(function(rule){
                var inputElement= formElement.querySelector(rule.selector)
                var isValid=Validate(inputElement,rule)
                if(!isValid){
                    isFormValid=false
                }          
            })
            if(isFormValid){
                if(typeof options.onsubmit === 'function'){
                    var enableInputs= formElement.querySelectorAll('[name]')
                    var formValues= Array.from(enableInputs).reduce(function(values,input){
                        values[input.name]=input.value
                        return values
                    },{})
                    options.onsubmit(formValues)
                }
                else{
                    formElement.submit()
                }
            }
        }
       //lặp qua mỗi rule và xử lý(lắng nghe sự kiện blur, input)
        options.rules.forEach(function(rule){
           //lưu lại các rule cho mỗi input
           if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
           }
           else{
               selectorRules[rule.selector]=[rule.test]
           }
           let inputElement= formElement.querySelector(rule.selector)
           if(inputElement){
               //xử lý trg hợp blur khỏi input
               inputElement.onblur= ()=>{
                    Validate(inputElement,rule)                
               }
               //xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput= ()=>{   
                        var errorElement=inputElement.parentElement.querySelector('.form-message')
                        errorElement.innerText=''
                        inputElement.parentElement.classList.remove('invalid') 
                }    
             }      
       })
    }
}
//định nghĩa các rule
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này'
        }
    };
}
Validator.specialCharacters = function(selector){
    return{
        selector: selector,
        test: function(value){
            const regex=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
            return !regex.test(value) ? undefined : 'Vui lòng không nhập ký tự đặc biệt'
        }
    };
}
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined :  'Trường này phải là email'
        }
    };
}
Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`
        }
    };
}
Validator.maxLength = function (selector, max) {
    return {
        selector: selector,
        test: function (value) {
            return value.length <=max ? undefined : `Vui lòng nhập k quá ${max} kí tự`
        }
    };
}
Validator.hasLowerUpperCase=function(selector){
    return{
        selector: selector,
        test: function(value){
            const regex=/^(?=.*[a-z])(?=.*[A-Z])/
            return regex.test(value) ? undefined : 'Vui lòng nhập ít nhất 1 chữ hoa và 1 chữ thường'
        }
    };
}
Validator.isConfirmed= function(selector, getConfirmValue){
    return{
        selector:selector,
        test: function(value){
            return value === getConfirmValue() ? undefined : 'Gía trị nhập vào không chính xác'
        }
    }
}
