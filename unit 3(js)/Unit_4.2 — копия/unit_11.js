function showArr(arr, out) {
    arr.forEach((element) => {
        out.textContent = out.textContent + element + ' ';
    });
}
//TASK 1
const btn1 = document.querySelector('.b-1');
btn1.addEventListener('click', () => {
    let d1 = [33, 'best', 66, 'best'];
    const out1 = document.querySelector('.out-1');
    const i1 = document.querySelector('.i-1');
    d1[d1.length] = i1.value;
    showArr(d1, out1);
})
//TASK 2
const btn2 = document.querySelector('.b-2');
function f2() {
    let d2 = [33, 'best', 66, 'best'];
    const out2 = document.querySelector('.out-2');
    d2.pop();
    showArr(d2, out2);
}
btn2.addEventListener('click', () => {
    f2();
})
//TASK 3
const btn3 = document.querySelector('.b-3');
function f3() {
    let d3 = [33, 'best', 66, 'best'];
    const out3 = document.querySelector('.out-3');
    d3.shift();
    showArr(d3, out3);
}
btn3.addEventListener('click', () => {
    f3();
})
//TASK 4
const btn4 = document.querySelector('.b-4');
function f4() {
    let d4 = [33, 'best', 66, 'best'];
    const out4 = document.querySelector('.out-4');
    const i4 = document.querySelector('.i-4');
    d4.push(i4.value);
    showArr(d4, out4);
}
btn4.addEventListener('click', () => {
    f4();
})
//TASK 5
const btn5 = document.querySelector('.b-5');
function f5() {
    let d5 = [33, 'best', 66, 'best'];
    const out5 = document.querySelector('.out-5');
    const i5 = document.querySelector('.i-5');
    d5.unshift(i5.value);
    showArr(d5, out5);
}
btn5.addEventListener('click', () => {
    f5();
})
//TASK 6
const btn6 = document.querySelector('.b-6');
    let d6 = ['test', 5, 12];
function f6() {
    const out6 = document.querySelector('.out-6');
    const i6 = document.querySelector('.i-6');
    d6[d6.length] = i6.value;
    showArr(d6, out6);
}
btn6.addEventListener('click', () => {
    f6();
})
//TASK 7
const btn7 = document.querySelector('.b-7');
function f7() {
    let d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
    const out7 = document.querySelector('.out-7');
    d7.splice(d7.length - 1, 1);
    showArr(d7, out7);
}
btn7.addEventListener('click', () => {
    f7();
})
//TASK 8
const btn8 = document.querySelector('.b-8');
function unshift(arr, i, out) {
    let arr2 = [i];
    for (let i = 0; i < arr.length; i++) {
        arr2[i + 1] = arr[i];
    }
    showArr(arr2, out);
}
function f8() {
    let d8 = [2, '4', 12, 67, 'hello'];
    const out8 = document.querySelector('.out-8');
    const i8 = document.querySelector('.i-8');
    unshift(d8, i8.value, out8)
}
btn8.addEventListener('click', () => {
    f8();
})
//TASK 9
const btn9 = document.querySelector('.b-9');
function shift(arr, out) {
    let arr2 = new Array();
    for (let i = 1; i < arr.length; i++) {
        arr2[i - 1] = arr[i];
    }
    showArr(arr2, out);
}
function f9() {
    let d9 = [100, 200, 300, 400, 700, 121];
    const out9 = document.querySelector('.out-9');
    shift(d9, out9)
}
btn9.addEventListener('click', () => {
    f9();
})
//TASK 10
const btn10 = document.querySelector('.b-10');
function f10() {
    let d10 = [3, 14, 15, 92, 6];
    const out10 = document.querySelector('.out-10');
    d10.reverse();
    showArr(d10, out10);
}
btn10.addEventListener('click', () => {
    f10();
})
//TASK 11
const btn11 = document.querySelector('.b-11');
function f11() {
    let d11 = [2, 3, 4, 5, 6, 7];
    const out11 = document.querySelector('.out-11');
    const i11 = document.querySelector('.i-11');
    out11.textContent = d11.indexOf(+i11.value);
}
btn11.addEventListener('click', () => {
    f11();
})
//TASK 12
const btn12 = document.querySelector('.b-12');
function f12() {
    let d12 = [6, 62, 60, 70, 1, 5];
    let matchFound = false;
    const out12 = document.querySelector('.out-12');
    const i12 = document.querySelector('.i-12');
    for (let i = 0; i < d12.length; i++) {
        if (d12[i] === +i12.value) {
            matchFound = true;
            out12.textContent = i;
        }
    }
    if (!matchFound) {
        out12.textContent = -1;
    }
}
btn12.addEventListener('click', () => {
    f12();
})
//TASK 13
function MYreverse(arr) {
    const out13 = document.querySelector('.out-13');
    let n = 0
    let arr2 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr2[n] = arr[i];
        n++;
    }
    showArr(arr2, out13);
}
const btn13 = document.querySelector('.b-13');
function f13() {
    let d13 = [6, 0, 22, 1, 4, 76];
    MYreverse(d13);
}
btn13.addEventListener('click', () => {
    f13();
})
//TASK 14
const btn14 = document.querySelector('.b-14');
function f14() {
    let d14 = [];
    const out14 = document.querySelector('.out-14');
    const i14 = document.querySelector('.i-14');
    for (let i = 0; i < +i14.value; i++) {
        d14[i] = 1;
    }
    showArr(d14, out14);
}
btn14.addEventListener('click', () => {
    f14();
})
//TASK 15
const btn15 = document.querySelector('.b-15');
function f15() {
    let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
    const out15 = document.querySelector('.out-15');
    const i15 = document.querySelector('.i-15');
    let check;
    check = d15.indexOf(+i15.value);
    if (check === -1) {
        d15[d15.length] = +i15.value;
    }
    showArr(d15, out15);
}
btn15.addEventListener('click', () => {
    f15();
})
//TASK 16
const btn16 = document.querySelector('.b-16');
function f16() {
    let d16 = [];
    let d161 = [5, 6, 7, 8, 9];
    let d162 = [23, 24, 56, 87];
    const out16 = document.querySelector('.out-16');
    d16 = d161.concat(d162);
    showArr(d16, out16);
}
btn16.addEventListener('click', () => {
    f16();
})
//TASK 16
const btn17 = document.querySelector('.b-17');
function contact(d1, d2) {
    let d = [];
    let i;
    for (i = 0; i < d1.length; i++) {
        d[i] = d1[i];
    }
    for (let j = 0; j < d2.length; j++) {
        d[i] = d2[j];
        i++;
    }
    return d;
}
function f17() {
    let d17 = [];
    let d171 = ['a', 'b', 'c', 'd'];
    let d172 = [1, 2, 3, 4, 5];
    const out17 = document.querySelector('.out-17');
    d17 = contact(d171, d172);
    showArr(d17, out17);
}
btn17.addEventListener('click', () => {
    f17();
})
//TASK 18
const btn18 = document.querySelector('.b-18');
function f18() {
    let d18 = ['b', 'c', '45', 'e', 'z', 'y'];
    const out18 = document.querySelector('.out-18');
    const i18 = document.querySelector('.i-18');
    out18.textContent = d18.includes(i18.value);
}
btn18.addEventListener('click', () => {
    f18();
})
//TASK 19
const btn19 = document.querySelector('.b-19');
function f19() {
    let d19 = ['Your','payment','method','will','automatically','be','charged','in','advance','every' ];
    const out19 = document.querySelector('.out-19');
    let n = d19[0].length;
    for (let i = 1; i < d19.length; i++) {
        if (d19[i].length > n) {
            n=d19[i].length;
            out19.textContent = d19[i];
        }
    }
}
btn19.addEventListener('click', () => {
    f19();
})
//TASK 20
const btn20 = document.querySelector('.b-20');
function f20() {
    let d20 = [4,5,6,7,8,9,10];
    const out20 = document.querySelector('.out-20');
    out20.textContent = d20.join('');
}
btn20.addEventListener('click', () => {
    f20();
})

