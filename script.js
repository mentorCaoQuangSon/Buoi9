//Mang - Array


/*
----Mutable ways: làm thay đổi mảng gốc.--------
pop() -  xoá phần tử cuối cùng ra khỏi mảng -- arr.pop();
shift() - xoá phần tử đầu tiên ra khỏi mảng -- arr.shift();
splice() để loại bỏ phần tử của Array Javascript -- arr.splice(start, n)

push() - Them phan tu vao vi tri cuoi cung
splice() - để them phần tử của Array Javascript -- arr.splice(start, n, itemjoin)

reverse() - Đảo Ngược mảng
sort() - Sắp xếp mảng
concat() - gắn nhiều mảng lại với nhau
*/

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// plants.splice(0, 0, "cold");
// console.log(plants);

// tạo function kiem tra so nguyen to
// let arr = [2, 8, 9, 13, 15];

// function kiemtraSNT(a) {
//     let flag = true;
//     if (a < 2) {
//         flag = false;
//     } else {
//         for (let i = 2; i < a; i++) {
//             if (a % i == 0) {
//                 flag = false;
//                 break;
//             }
//         }
//     }
//     return flag;
// }

// function inSNT(a) {
//     for (let i = 0; i < a.length; i++) {
//         if (kiemtraSNT(a[i])) {
//             console.log(a[i]);
//         }
//     }
// }
// inSNT(arr);
//---Bai Tap---
// Toan Tu 3 ngoi
// let a = 3;
// let b = 2;
// let d = 6;
// min = a;
// let c = b < min ? b : d < min ? d : a;

// function timMin(a, b) {
//     return (a < b ? a : b);
// }

// console.log(timMin(5, 6));
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
// );

function intPut() {
    console.log("Hay Nhap Input Name la: Admin");
    let inputName = prompt("Nhap ten dang nhap");
    if (inputName.length > 0 && inputName == 'Admin') {
        let inputPass = prompt("Nhap mk dang nhap");
    } else if (inputName.length == 0) {
        alert("Canceled")
    } else {
        alert("Tôi không biết bạn")
    }
}
intPut();