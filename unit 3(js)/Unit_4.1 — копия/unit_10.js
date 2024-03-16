//TASK 1
const btn1 = document.querySelector('.b-1');
btn1.addEventListener('click', () => {
    let arr1 = ['str', 1, true];
    const out1 = document.querySelector('.out-1');
    arr1.forEach((element) => {
        out1.textContent = out1.textContent + ' ' + element;
    });
})

//TASK 2
const btn2 = document.querySelector('.b-2');
btn2.addEventListener('click', () => {
    let arr2 = ['str2', 2, false];
    const out2 = document.querySelector('.out-2');
    arr2.forEach((element) => {
        out2.textContent = out2.textContent + ' ' + element;
    });
})

//TASK 3
const btn3 = document.querySelector('.b-3');
btn3.addEventListener('click', () => {
    let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const out3 = document.querySelector('.out-3');
    out3.textContent = arr3.length;
})

//TASK 4
const btn4 = document.querySelector('.b-4');
btn4.addEventListener('click', () => {
    let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const out4 = document.querySelector('.out-4');
    out4.textContent = arr4[0] + ' ' + arr4[3] + ' ' + arr4[8];
})

//TASK 5
const btn5 = document.querySelector('.b-5');
btn5.addEventListener('click', () => {
    let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const out5 = document.querySelector('.out-5');
    out5.textContent = arr5[0] + arr5[2] + arr5[3];
})

//TASK 6
const btn6 = document.querySelector('.b-6');
btn6.addEventListener('click', () => {
    let arr6 = ['Леша', 'Близнецы', '2-е', 'Июня'];
    const out6 = document.querySelector('.out-6');
    arr6.forEach((element) => {
        out6.textContent = out6.textContent + ' ' + element;
    });
})

//TASK 7
const btn7 = document.querySelector('.b-7');
btn7.addEventListener('click', () => {
    let arr7 = [0, 1, 2, 3, 4, 'italy', 'turkey', 'vietnam'];
    const out7 = document.querySelector('.out-7');
    arr7.forEach((element) => {
        out7.textContent = out7.textContent + ' ' + element;
    });
})

//TASK 8
const btn8 = document.querySelector('.b-8');
btn8.addEventListener('click', () => {
    let arr8 = [0, 1, 2, 3.14, 17, 5443, 5];
    const out8 = document.querySelector('.out-8');
    const out81 = document.querySelector('.out-8-1');
    arr8.forEach((element) => {
        out8.textContent = out8.textContent + ' ' + element;
    });
    out81.textContent = arr8.length;
})

//TASK 9
const btn9 = document.querySelector('.b-9');
btn9.addEventListener('click', () => {
    let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const out9 = document.querySelector('.out-9');
    out9.textContent = arr9[arr9.length - 1];
})

//TASK 10
const btn10 = document.querySelector('.b-10');
btn10.addEventListener('click', () => {
    let arr10 = [100, 200, 300, 400, 700, 121];
    const out10 = document.querySelector('.out-10');
    out10.textContent = arr10[1] + arr10[arr10.length - 1];
})

//TASK 11
const btn11 = document.querySelector('.b-11');
btn11.addEventListener('click', () => {
    let arr11 = [2, 3, 4, 5, 6, 7];
    const out11 = document.querySelector('.out-11');
    const temp = arr11[2];
    arr11[2] = arr11[4];
    arr11[4] = temp;
    arr11.forEach((element) => {
        out11.textContent = out11.textContent + ' ' + element;
    });
})

//TASK 12
const btn12 = document.querySelector('.b-12');
btn12.addEventListener('click', () => {
    let arr12 = ['test', 'west', 'list', 'class', 'best'];
    const out12 = document.querySelector('.out-12');
    const temp = arr12[0];
    arr12[0] = arr12[arr12.length - 1];
    arr12[arr12.length - 1] = temp;
    arr12.forEach((element) => {
        out12.textContent = out12.textContent + ' ' + element;
    });
})

//TASK 13
const btn13 = document.querySelector('.b-13');
btn13.addEventListener('click', () => {
    let arr13 = ['test', 'west', 'list', 'class', 'best'];
    const out13 = document.querySelector('.out-13');
    let n = 0;
    arr13.forEach((element) => {
        out13.textContent = out13.textContent + n + ' ' + element + ' ';
        n++;
    });
})

//TASK 14
const btn14 = document.querySelector('.b-14');
btn14.addEventListener('click', () => {
    let arr14 = [1, 2, 3, 'hello', 66];
    const out14 = document.querySelector('.out-14');
    for (let i = arr14.length - 1; i >= 0; i--) {
        out14.textContent = out14.textContent + ' ' + arr14[i];
    }
})

//TASK 15
const btn15 = document.querySelector('.b-15');
btn15.addEventListener('click', () => {
    let arr15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
    const out15 = document.querySelector('.out-15');
    arr15.forEach((element) => {
        if (element > 0)
            out15.textContent = out15.textContent + element + ' ';
    });
})

//TASK 16
const btn16 = document.querySelector('.b-16');
btn16.addEventListener('click', () => {
    ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
    ar16_odd = [];
    ar16_even = [];
    let nOdd = 0;
    let nEven = 0;
    const out161 = document.querySelector('.out-16-even');
    const out162 = document.querySelector('.out-16-odd');
    ar16.forEach((element) => {
        if (element % 2 == 0) {
            ar16_odd[nOdd] = element;
            out161.textContent = out161.textContent + ar16_odd[nOdd] + ' ';
            nOdd++;
        }
        else {
            ar16_even[nEven] = element;
            out162.textContent = out162.textContent + ar16_even[nEven] + ' ';
            nEven++;
        }

    });
})

//TASK 17
const btn17 = document.querySelector('.b-17');
btn17.addEventListener('click', () => {
    let arr17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
    const out17 = document.querySelector('.out-17');
    let n = 0;
    arr17.forEach((element) => {
        if (element > 3)
            n++;
    });
    out17.textContent = n;
})

//TASK 18
const btn18 = document.querySelector('.b-18');
btn18.addEventListener('click', () => {
    let arr18 = [15, 24, 13, 78, 21, 4, 45, 67];
    const out18 = document.querySelector('.out-18');
    let max = arr18[0];
    arr18.forEach((element) => {
        if (element > max)
            max = element;
    });
    out18.textContent = max;
})

//TASK 19
const btn19 = document.querySelector('.b-19');
btn19.addEventListener('click', () => {
    let arr19 = [15, 424, 313, 78, 241, 4, 45, 67];
    const out19 = document.querySelector('.out-19');
    let min = arr19[0];
    let minN = 0;
    for (let i = 1; i < arr19.length; i++)
        if (arr19[i] < min) {
            minN = i;
            min = arr19[i];
        }
    out19.textContent = minN;
})

//TASK 20
const btn20 = document.querySelector('.b-20');
btn20.addEventListener('click', () => {
    let arr20 = [4,5,6,7,8,9,10];
    const out20 = document.querySelector('.out-20');
    let sum = 0;
    arr20.forEach((element) => {
        sum = sum + element;
    })
    out20.textContent = sum;
})