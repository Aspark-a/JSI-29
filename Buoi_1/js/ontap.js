// es6: 2015 ESMAScript6
// 1. let, const, var
// for (var index =0; index < 5, index++) {
//     console.log(index)
// }
// console.log("out" + index)

// const pi = {name: "abc"};
// pi.name = "gfh";
// console.log(pi);
// const a = 2;
//a += 10 // error

// 2. template literals '${var}' 
// const a = "abc";
// console.log(`It is: ${a}`);
// console.log(`This is special symbol: \${}`);

// // multi lines
// const m = "line\nline\nline\n"
// const n = `line
// line
// line...`
// console.log(m)
// console .log(n)

// 3. arrow functions
// declaration function - named function
// function messages (messages) {
//     console.log(messages);
//     return messages;
// }

// expression (anonymous) function
// const mess = function (m) {
//     // console.log(m);
//     return messages;
// };

//arrow function
// const message_a = (m) => m;

// arrow function khong viet duoc cho context
// const course = {
//     name: "JS",
//     getName: function() {
//         return this.name; // context
//     },
//     getNameArrowFunc: () => this.name,
// }

// console.log(course.getName())
// console.log(course.getNameArrowFunc())

// Default parameter values
// function sum (a, b) {
//     if (!a || !b) {
//         return "Need to add params"
//     }
//     return a + b; 
// }

// console.log(sum(1, 2));

// function sum_d (a=0, b=0) {
//     return a + b;
// }

// const sum_a = (a=0, b=0) => a + b;
// console.log(sum_a());

// 5. array functions
var data = [
    { course: "a", name: "abc", price: 123 },
    { course: "b", name: "def", price: 12 },
    { course: "c", name: "gih", price: 1 },
    { course: "d", name: "lmn", price: 87 },
    { course: "e", name: "opq", price: 140 },
    { course: "f", name: "rsu", price: 200 },
    { course: "g", name: "xyz", price: 50 },
  ];
  const list = new Array(100);
// foreach
for (let index = 0; index < array.length; index++) {
    console.log(list[index]);
    
}

// kiem tra value khac undefined => thuc hien code
list.forEach(element => {
    console.log("foreach: "+ element);
})

// every() ----------------------------
// return true neu tat ca element deu thoa dieu kien
// some() -----------------------------
// return true neu mot hoac nhieu element deu thoa dieu kien
// find() -----------------------------
// kiem tra co phan tu hay khong => return element
function checkCourseName(course){
    if (course.course === "c") {
        return true;
    }
}
const item = data.find((element, index) => element.course === "c");
console.log(item);

// filter()-----------------------------
// return new list (cac item thoa dieu kien)
const items = data.filter((element, index) => element.price > 150);
console.log(items);

