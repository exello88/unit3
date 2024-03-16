function showArr(arr) {
    arr.forEach((element) => {
        console.log(element);
    });
}
//Task1
const btn1 = document.querySelector('.b-1');
function f1() {
    let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
    let a1_res = [];
    a1_res = a1.map((element) => element * 2);
    showArr(a1_res);
}
btn1.addEventListener('click', () => {
    f1();
});
//Task2
const btn2 = document.querySelector('.b-2');
function t2() {
    let a2 = [2, 3, 4, 5, 10, 11, 12]
    let a2_res = [];
    a2_res = a2.map((element) => element * element);
    showArr(a2_res);
}
btn2.addEventListener('click', () => {
    t2();
});
//Task3
const btn3 = document.querySelector('.b-3');
function t3() {
    let a3 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
    let a3_res = [];
    a3_res = a3.map((element) => +element);
    showArr(a3_res);
}
btn3.addEventListener('click', () => {
    t3();
});
//Task4
const btn4 = document.querySelector('.b-4');
function t4() {
    let a4 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11, 'gf'];
    let a4_res = [];
    a4_res = a4.filter((element) => element === +element);
    return a4_res;
}
btn4.addEventListener('click', () => {
    let a4_res = [];
    a4_res = t4();
    showArr(a4_res);
});
//Task5
const btn5 = document.querySelector('.b-5');
function t5() {
    let a5 = [3, 14, 15, 92, '6']
    let a5_res = [];
    a5_res = a5.filter((element) => element === +element);
    a5_res = a5_res.filter((element) => element % 2 === 0);
    return a5_res;
}
btn5.addEventListener('click', () => {
    let a5_res = [];
    a5_res = t5();
    showArr(a5_res);
});
//Task6
const btn6 = document.querySelector('.b-6');
function t6() {
    let a6 = [3, 14, 15, 92, "6", "5", "hello", 32];
    let a6_res = [];
    a6_res = a6.filter((element) => element === +element);
    a6_res = a6_res.filter((element) => element > 14);
    return a6_res;
}
btn6.addEventListener('click', () => {
    let a6_res = [];
    a6_res = t6();
    showArr(a6_res);
});
//Task7
const btn7 = document.querySelector('.b-7');
function t7() {
    let a7 = ['Alto`s Adventure', 'Angry Birds 2', 'Anno 2205', 'Assassin`s Creed Chronicles'];
    let a7_res = [];
    a7_res = a7.map((element) => element.toLowerCase());
    return a7_res;
}
btn7.addEventListener('click', () => {
    let a7_res = [];
    a7_res = t7();
    showArr(a7_res);
});
//Task7
const btn8 = document.querySelector('.b-8');
function t8() {
    let a8 = [3, 14, 15, 92, 7, 32, 59];
    let a8_res = [];
    for (let i = 0; i < a8.length; i++) {
        if(a8[i]%2===0){
            a8_res[a8_res.length] = i;
        }
    }
    return a8_res;
}
btn8.addEventListener('click', () => {
    let a8_res = [];
    a8_res = t8();
    showArr(a8_res);
});
//Task9
const btn9 = document.querySelector('.b-9');
function t9() {
    let a9 = ['Quantum Break', 'Gears of War 4', 'Mass Effect: Andromeda', 'Far Cry Primal'];
    let n =0;
    a9.forEach((element) =>{
        a9[n]=element.toLowerCase();
        n++;
    } );
    return a9;
}
btn9.addEventListener('click', () => {
    let a9 = [];
    a9 = t9();
    showArr(a9);
});
//Task10
const btn10 = document.querySelector('.b-10');
function t10() {
    let a10 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
    let n =0;
    a10.forEach((element) =>{
        if(element<0){
            a10[n] = 0;
        }
        n++;
    } );
    return a10;
}
btn10.addEventListener('click', () => {
    let a10 = [];
    a10 = t10();
    showArr(a10);
});
//Task11
const btn11 = document.querySelector('.b-11');
function t11() {
    let a11 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
    let a11_res = [];
    a11_res = a11.filter((element,index) => index%2 === 0);
    return a11_res;
}
btn11.addEventListener('click', () => {
    let a11_res = [];
    a11_res = t11();
    showArr(a11_res);
});
//Task12
const btn12 = document.querySelector('.b-12');
function t12() {
    let a12 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
    return Array.isArray(a12);
}
btn12.addEventListener('click', () => {
    let a12_res;
    a12_res = t12();
    console.log(a12_res);
});
//Task13
const btn13 = document.querySelector('.b-13');
function t13() {
    let a13 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
    let a13_num=13;
    return a13.includes(a13_num);
}
btn13.addEventListener('click', () => {
    let a13_res;
    a13_res = t13();
    console.log(a13_res);
});
//Task14
const btn14 = document.querySelector('.b-14');
function t14() {
    let a14 = ['c', 'C', 'd', 'e', 'E'];
    let a14_num='D';
    let a14_str = a14.join('');
    return a14_str.includes(a14_num.toLowerCase());
}
btn14.addEventListener('click', () => {
    let a14_res;
    a14_res = t14();
    console.log(a14_res);
});
//Task15
const btn15 = document.querySelector('.b-15');
function t15() {
    let a15 = ['c', '654321', '123456', '', ' '];
    let a15_res = [];
    a15_res = a15.filter((element) => element.length === 6);
    return a15_res;
}
btn15.addEventListener('click', () => {
    let a15_res = [];
    a15_res = t15();
    showArr(a15_res);
});