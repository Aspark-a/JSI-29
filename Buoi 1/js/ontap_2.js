// spread operator -----------------------------
let list_1 = [1, 2, 3, 4, 5];
// problem
// let list_2 = list_1;
// list_2.pop();
// console.log(list_1);
// console.log(list_2); // ca 2 list deu bi anh huong (xoa mat so 5)

// clone lai list
// let list_3 = [...list_1];
// list_3.pop();
// console.log(list_1);
// console.log(list_3);

// gop list
// let list_4 = [5, 4, 3, 2, 1];
// let list_5 = [...list_1, ...list_4];
// let list_6 = list_1.concat(list_4);
// console.log(list_1);
// console.log(list_5);
// console.log(list_6);

// gop obj
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const obj3 = { ...obj1, ...obj2, a: 5 };
// console.log(obj3);


// Rest parameters (catlist/ object) ---------------------------------------
const arr_r = [1, 2, 3, 4, 5, 6];
const obj_r = [
    { a: 1, b: 10 },
    { a: 2, b: 9 },
    { a: 3, b: 4 },
    { a: 6, b:9 },
]
// destructuring (object/ array)
var [m, n, o, p] = obj_r;
console.table({ m, n, o, p}); 
// lay phan con lai - last
// array -------- 
var [first_item, sec_time, ...last_items] = arr_r;
console.log(last_items);

// object -------
var ovj_rest = {
    a: 1,
    b: 2,
    c: 3,
};

var [a, ...last] = obj_rest;
console.log(last);

// cat object + them phan tu cho object moi
// doi ten thuoc tinh
var {a: parentA, b: { childrenB}, ...last} = obj_rest;

console.log(parentA, childrenB);