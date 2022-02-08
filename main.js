/**BASIC */
//Exam1
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}
// console.log(getRndInteger(1, 10))

//Exam2
function getElementFromArray(init) {
    let ramdom = Math.floor(Math.random() * init.length);
    console.log(init[ramdom]);
}
var array = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'];
// getElementFromArray(array);

//Exam3
//Tao ham kiem tra so chan va le trong js
// function check_odd_even(n){
//     //flag=1 =>so le
//     //flag=0 =>so chan

//     let flag = 1;
//     if(n % 2 == 0) flag = 0;
//     return flag;
// }

// let array = [1, 2, 3, 4, 5];

// //khai bao mang nhan ket qua
// let odd_array = [];
// let even_array = [];

// for (let i = 0; i < array.length; i++){
//     if (check_odd_even(array[i]) == 0)  even_array.push(array[i]);
//     else  odd_array.push(array[i])
// }
// console.log(odd_array);

//Exam4

// let array = [1,2,3,4,5,6,7];
// let double_array = [];
// for (let i = 0; i < array.length; i++){
//    double_array.push(array[i]*2);
// }
//console.log(double_array);

//Exam 5
/*Tạo hàm đếm số lần xuất hiện của một phần tử trong mảng JavaScript*/
// function count_element_in_array(array , x){
//    let count = 0;
//    for(let i = 0; i< array.length; i++){
//       if(array[i]==x) //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
//       count++;
//    }
//    console.log("Phần tử "+ x +" : " + count);
// }
// let array=[1, 3, 4, 5, 1, 3, 1]

// /*Xóa phần tử trùng nhau và lấy các phần tử duy nhất*/
// let arrayWithNoDuplicates= array.reduce(function(accumulator, element){
//    if(accumulator.indexOf(element) === -1){
//       accumulator.push(element)
//    }
//    return accumulator
// },[]) 
// /*đếm số lầm xuất hiện của các phần tử duy nhất */
// for(let i=0; i<arrayWithNoDuplicates.length; i++){
//   count_element_in_array(array, arrayWithNoDuplicates[i]);
// }

/**ADVANCE */
//Exam1
function getRandomMark(start, end, step) {
    let n = (end - start) / step;
    let r = Math.floor(Math.random() * n + 1);
    return start + step * r;
}
var result = getRandomMark(6, 10, 0.5)
// // console.log(result);

//Exam2
function generateStudentMark(name) {
    student = {
        name: name,
        mark: {
            literature: getRandomMark(1, 10, 0.5),
            maths: getRandomMark(1, 10, 0.5),
            chemistry: getRandomMark(1, 10, 0.5),
            history: getRandomMark(1, 10, 0.5),
            biology: getRandomMark(1, 10, 0.5),
        }
    }
    return student;
}
// console.log(generateStudentMark('Hoa'));

//Exam3
let students = [
    {
        name: 'Lan',
        marks: {
            literature: 6,
            maths: 7,
            chemistry: 8,
            history: 7,
            biology: 9,
        }
    },
    {
        name: 'Hoa',
        marks: {
            literature: 6,
            maths: 7,
            chemistry: 10,
            history: 10,
            biology: 9,
            english: 10
        }
    },
    {
        name: 'Hồng',
        marks: {
            literature: 9,
            maths: 10,
            chemistry: 8,
            history: 7
        }
    },
    {
        name: 'Huệ',
        marks: {
            literature: 8,
            maths: 7,
            chemistry: 10,
            history: 10,
            biology: 10,
        }
    },
    {
        name: 'An',
        marks: {
            literature: 7,
            maths: 9,
            chemistry: 10,
            history: 8,
            biology: 8,
            geography: 10
        }
    }
];

function AvengerMarks(students) {
    var ListStudents = [];
    var object = {};
    for (var item of students) {
        object = {
            name: item.name,
            Avengermarks: Avenger(item.name)
        }
        ListStudents.push(object);
    }
    return ListStudents;
}

//tính điểm trung bình của 1 sv
function Avenger(name) {
    let count = 0; //dem so attribute
    var total = 0;
    for (var item of students) {
        if (item.name == name) {
            for (var property in item.marks) {
                total += item.marks[property];
                count++;
            }
        }
    }
    for (var item of students) {
        if (item.name == name) {
            total += item.marks.maths + item.marks.literature;
        }
    }
    return total / (count + 2);
}
console.log(AvengerMarks(students));

function Cau5(list) {
    var ListStudents = [];
    for (var item of list) {
        if (item.Avengermarks >= 8) {
            ListStudents.push(item);
        }
    }
    return ListStudents;
}
// //console.log(Cau5(AvengerMarks(students)));

function Cau6(students) {
    var ListStudents = [];
    var object = {};
    for (var item of students) {
        var tienThuong = 0;
        for (var property in item.marks) {
            if (item.marks[property] === 8) {
                tienThuong += 1000000;
            }
            else if (item.marks[property] === 9) {
                tienThuong += 2000000;
            }
            else if (item.marks[property] === 10) {
                tienThuong += 5000000;
            }

        }
        object = {
            name: item.name,
            Thuong: tienThuong
        }
        ListStudents.push(object);
    }
    return ListStudents;
}
console.log(Cau6(students));

//Exam7
function cau7() {
    const deepClone = JSON.parse(JSON.stringify(students));
    console.log(deepClone);
    console.log(students);
}
//cau7();

//EXam8:so sánh sâu duyệt tất cả các cấp của object (trường hợp object lồng nhau).
// Hàm kiểm tra một giá trị là object
function isObject(obj) {
    return obj != null && typeof obj === "object";
}
// Hàm so sánh sâu
function isDeepEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1); // trả về mảng các thuộc tính của obj1
    const keys2 = Object.keys(obj2); // trả về mảng các thuộc tính của obj2
    // nếu số lượng keys khác nhau thì chắc chắn khác nhau
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = obj1[key];
        const val2 = obj2[key];
        // kiểm tra xem hai giá trị có cùng là object hay không
        const areObjects = isObject(val1) && isObject(val2);
        // nếu cùng là object thì phải gọi đệ quy để so sánh 2 object
        if (areObjects && !isDeepEqual(val1, val2)) {
            return false;
        }
        // nếu không cùng là object thì so sánh giá trị
        if (!areObjects && val1 !== val2) {
            return false;
        }
    }
    return true;
}
let point1 = { x: 1, y: 2, metadata: { type: "point" } };
let point2 = { x: 1, y: 2, metadata: { type: "point" } };
// console.log(isDeepEqual(point1, point2));
