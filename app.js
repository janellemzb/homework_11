// Задание 1

let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let button1 = document.getElementById('avr')
let result = document.getElementById('result')

button1.onclick = function () {
    let num11 = parseFloat(num1.value);
    let num22 = parseFloat(num2.value);
    result.textContent = 'Среднее число: ' + (num11 + num22) / 2;
}

// Задание 2

let number1 = document.getElementById('number1')
let number2 = document.getElementById('number2')
let button2 = document.getElementById('divide')
let resl = document.getElementById('res')

button2.onclick = function () {
    let num111 = parseFloat(number1.value);
    let num222 = parseFloat(number2.value);
    resl.textContent = 'Result: ' + (num111 % num222)
}

//Задание 3

//ничего не поняла Т.Т



// Задание 4/1

let answer = document.getElementById('result2')
let button3 = document.getElementById('find')

function max () {
    let n1 = parseFloat(num3.value)
    let n2 = parseFloat(num4.value)
    if (n1 > n2) {
        answer.textContent = 'Большее число ' + n1
    } else if (n1 < n2) {
        answer.textContent = 'Большее число ' + n2
    } else if (n1 == n2) {
        answer.textContent = 'Числа равны'
    }
}

button3.addEventListener('click' , max)

// Задание 4/2

let button4 = document.getElementById('leap')
let yearResult = document.getElementById('leapyear')

function set () {
    let n3 = parseFloat(num5.value)
    if (n3 %= 4) {
        yearResult.textContent = 'Год НЕ високосный'
    } else {
        yearResult.textContent = 'Год високосный'
    }
}
button4.addEventListener('click' , set)


// Задание 4/3

let ans = document.getElementById('result3')
let button5 = document.getElementById('findmax')

button5.onclick = function () {
    let n6 = parseFloat(num6.value)
    let n7 = parseFloat(num7.value)
    let n8 = parseFloat(num8.value)
    let findMax = Math.max(n6, n7, n8)
    ans.textContent = 'Max is: ' + findMax
}

// Задание 4/4

let answ = document.getElementById('result4')
let button6 = document.getElementById('findmin')

button6.onclick = function () {
    let n9 = parseFloat(num9.value)
    let n10 = parseFloat(num10.value)
    let n11 = parseFloat(num11.value)
    let findMin = Math.min(n9, n10, n11)
    answ.textContent = 'Min is: '+ findMin
}


// Задание 5

let button7 = document.getElementById('finddx');
let findX = document.getElementById('xx');

function S() {
    let a = parseFloat(anum.value);
    let b = parseFloat(bnum.value);
    if (a !== 0) {
        let x = -b / a;
        return x; 
    } else {
        console.log('Уравнение не линейное если а=0');
        return null; 
    }
}

button7.onclick = function N() {
    let result = S()
    if (result !== null) {
        if (result >= 1) {
            findX.textContent = 'X = 1';
        } else if (result <= 1) {
            findX.textContent = 'X = -1';
        }
    }
};

// Задание 6

let button8 = document.getElementById('countcash')
let outc = document.getElementById('change')

function count () {
    let ca = parseFloat(cash.value)
    let cb = parseFloat(coin.value)
    let ga = parseFloat(givencash.value)
    let gb = parseFloat(givencoin.value)
    let cashcount = ca - ga 
    let coincount = cb - gb
    outc.textContent = 'Сдача: ' + cashcount+ '.' + coincount
}










