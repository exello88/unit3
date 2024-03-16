function showArr(arr, out) {
    arr.forEach((element) => {
        out.textContent += ' ' + element;
    });
}
//Task1
const btn1 = document.querySelector('.b-1');
function f1() {
    const out1 = document.querySelector('.out-1');
    let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
    let a1_res = [];
    a1.forEach((element) => {
        a1_res[a1_res.length] = element * 2;
    });
    showArr(a1_res, out1);
}
btn1.addEventListener('click', () => {
    f1();
});
//Task2
const btn2 = document.querySelector('.b-2');
function t2() {
    const out2 = document.querySelector('.out-2');
    let a2 = [2, 3, 4, 5, 10, 11, 12];
    let a2_res = [];
    a2.forEach((element) => {
        a2_res[a2_res.length] = element / 2;
    });
    showArr(a2_res, out2);
}
btn2.addEventListener('click', () => {
    t2();
});
//Task3
const btn3 = document.querySelector('.b-3');
function t3() {
    const out3 = document.querySelector('.out-3');
    let a3 = [2, 'hello', 3, 'hi', 4, 'Mazai'];
    let a3_res = [];
    a3.forEach((element) => {
        if (element === +element) {
            a3_res[a3_res.length] = element;
        }
    });
    showArr(a3_res, out3);
}
btn3.addEventListener('click', () => {
    t3();
});
//Task4
const btn4 = document.querySelector('.b-4');
function t4() {
    const out4 = document.querySelector('.out-4');
    let a4 = document.querySelectorAll('.task-4');
    let a4_res = [];
    a4.forEach((element) => {
        a4_res[a4_res.length] = element.getAttribute('data');
    });
    showArr(a4_res, out4);
}
btn4.addEventListener('click', () => {
    t4();
});
//Task5
const out5 = document.querySelector('.out-5');
let a5 = document.querySelectorAll('.task-5');
let a5_res = [];
a5.forEach((element) => {
    element.addEventListener('click', () => {
        a5_res[a5_res.length] = element.getAttribute('data');
        showArr(a5_res, out5);
    });
});
//Task6
const btn6 = document.querySelector('.b-6');
function t6() {
    const out6 = document.querySelector('.out-6');
    let str6 = 'helloworld';
    let a6_res = [];
    for (let i = 0; i < str6.length; i++) {
        a6_res[i] = str6[i];
    }
    showArr(a6_res, out6);
}
btn6.addEventListener('click', () => {
    t6();
});
//Task7
const btn7 = document.querySelector('.b-7');
function t7() {
    const out7 = document.querySelector('.out-7');
    let str7 = 'hello world hi maza';
    let a7_res = str7.split(' ');
    showArr(a7_res, out7);
}
btn7.addEventListener('click', () => {
    t7();
});
//Task8
const btn8 = document.querySelector('.b-8');
function t8() {
    const out8 = document.querySelector('.out-8');
    let a8 = [1, 2, 66, 77, 15];
    let str8 = a8.join('-');
    out8.textContent = str8;
}
btn8.addEventListener('click', () => {
    t8();
});
//Task9
const btn9 = document.querySelector('.b-9');
function t9() {
    const out9 = document.querySelector('.out-9');
    let a9 = [['hi', 'mahai'], ['test', 'best']];
    let str9 = a9.join('-');
    out9.textContent = str9;
}
btn9.addEventListener('click', () => {
    t9();
});
//Task10
const btn10 = document.querySelector('.b-10');
function t10() {
    const out10 = document.querySelector('.out-10');
    let a10 = { name: 'ivan', age: 15, sex: 1, id: 45 };
    let a10_arr = Object.entries(a10);
    let a10_res = a10_arr.map((element) => element.join('='));
    out10.textContent = a10_res.join('&');
}
btn10.addEventListener('click', () => {
    t10();
});