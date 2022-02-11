/**BASIC */
//Exam1
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}
// console.log(getRndInteger(1, 10))

//Exam2
function getRandom(min, max) {
    let init = []
    for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * (max - min)) + min;
        init.push(random);

    }
    return init;
}
//console.log(getRandom(1,100))

//Exam3
// let myArray=[1,2,3,4,5]; 
// let newArray=myArray.filter(function(item){
//     return item %2 !== 0;
// });
///console.log(newArray);

// //Exam4
// let array=[1,2,3,4,5]; 
// function double_item(array){
//   return array * 2;
// }
// let newArray=array.map(double_item);
// console.log(newArray);


//Exam 5

function countElement(array, x) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == x) //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
            count++;
    }
    //console.log("Phần tử " + x + " : " + count);
}
let array = [1, 3, 4, 5, 1, 3, 1]
let newArray = array.reduce(function (accumulator, element) {
    if (accumulator.indexOf(element) === -1) {
        accumulator.push(element)
    }
    return accumulator
}, [])
for (let i = 0; i < newArray.length; i++) {
    countElement(array, newArray[i]);
}

/**ADVANCE */
//Exam1
function getRandomMark(start, end, step) {
    let n = (end - start) / step;
    let r = Math.floor(Math.random() * n + 1);
    return start + step * r;
}
var result = getRandomMark(6, 10, 0.5)
// // console.log(result);

// //Exam2
// function generateStudentMark(name) {
//   student = {
//     name: name,
//     marks: {
//       literature: getRandomMark(1, 10, 0.5),
//       maths: getRandomMark(1, 10, 0.5),
//       chemistry: getRandomMark(1, 10, 0.5),
//       history: getRandomMark(1, 10, 0.5),
//       biology: getRandomMark(1, 10, 0.5),
//     }
//   }
//   return student;
// }
//console.log(generateStudentMark('Hoa'));

//Exam3
// let students = [
//   generateStudentMark('Hoa'),
//   generateStudentMark('Lan'),
//   generateStudentMark('Hồng'),
//   generateStudentMark('Huệ'),
//   generateStudentMark('Đào'),

// ]
//console.log(students)
//Exam 4
function avengerMarks(students) {
    let listStudents = [];
    let object = {};
    for (let item of students) {
        object = {
            name: item.name,
            avengerMarks: avengerStudents(item.name)
        }
        listStudents.push(object);
    }
    return listStudents;
}
function avengerStudents(name) {
    let count = 0; 
    let total = 0;
    for (let item of students) {
        if (item.name == name) {
            for (let property in item.marks) {
                total += item.marks[property];
                count++;

            }
            total += item.marks.maths + item.marks.literature;
        }
    }
    return total / (count + 2);
}
//console.log(students)
//console.log(avengerMarks(students));

function avengerStudent(list) {
    let listStudents = [];
    for (let item of list) {
        if (item.avengerMarks >= 8) {
            listStudents.push(item);
        }
    }
    return listStudents;
}
//console.log(avengerStudent(avengerMarks(students)));

function bonusStudents(students) {
    let listStudents = [];
    let object = {};
    for (let item of students) {
        let bonus = 0;
        for (let property in item.marks) {
            if (item.marks[property] === 8) {
                bonus += 1000000;
            }
            else if (item.marks[property] === 9) {
                bonus += 2000000;
            }
            else if (item.marks[property] === 10) {
                bonus += 5000000;
            }

        }
        object = {
            name: item.name,
            bonus: bonus
        }
        listStudents.push(object);
    }
    return listStudents;
}
//console.log(bonusStudents(students));

//Exam7
function deepObject() {
    const student = {
        marks: {
            literature: getRandomMark(1, 10, 0.5),
            maths: getRandomMark(1, 10, 0.5),
            chemistry: getRandomMark(1, 10, 0.5),
            history: getRandomMark(1, 10, 0.5),
            biology: getRandomMark(1, 10, 0.5),
        }
    }
    const deepClone = JSON.parse(JSON.stringify(student));
    student.marks.maths = 'ffvf';
    console.log(student);
    console.log(deepClone);
}
//deepObject();

//Shallow copy nhiệm vụ của nó chỉ copy những giá trị nông nghĩa là nó chỉ sao chép các giá trị đối tượng bình thường
// nhưng các giá trị lồng nhau vẫn sử dụng reference đến một đối tượng ban đầu.
//deep copy giống như clone shallow nhưng các giá trị reference trong object gốc không thay trong object clone.
//Sự hạn chế khi dùng deep copy trong JSON
//sử dụng deep copy JSON.parse() và JSON.stringify() đó là đôi khi bị miss những tham số của bạn, nếu tham số đó bạn gán underfined hoặc NaN...

//EXam8:
// Hàm kiểm tra một giá trị là object
// function isObject(obj) {
//   return obj != null && typeof obj === "object";
// }
// // Hàm so sánh sâu
// function isDeepEqual(obj1, obj2) {
//   const keys1 = Object.keys(obj1); // trả về mảng các thuộc tính của obj1
//   const keys2 = Object.keys(obj2); // trả về mảng các thuộc tính của obj2
//   // nếu số lượng keys khác nhau thì chắc chắn khác nhau
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (const key of keys1) {
//     const val1 = obj1[key];
//     const val2 = obj2[key];
//     // kiểm tra xem hai giá trị có cùng là object hay không
//     const areObjects = isObject(val1) && isObject(val2);
//     // nếu cùng là object thì phải gọi đệ quy để so sánh 2 object
//     if (areObjects && !isDeepEqual(val1, val2)) {
//       return false;
//     }
//     // nếu không cùng là object thì so sánh giá trị
//     if (!areObjects && val1 !== val2) {
//       return false;
//     }
//   }
//   return true;
// }
// let point1 = { x: 1, y: 2, metadata: { type: "point" } };
// let point2 = { x: 1, y: 2, metadata: { type: "point" } };
//console.log(isDeepEqual(point1, point2));

//So sánh 2 mảng
const array1 = [1, 2, 3]
const array2 = [1, 2, 3]
const sameArray = JSON.stringify(array1) === JSON.stringify(array2);
    //console.log(sameArray)