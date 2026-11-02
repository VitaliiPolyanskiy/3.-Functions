function sum(a: number, b: number): number {
    return a + b;
}

let result = sum(10, 20);
console.log(result);

let summa = function (a:any, b: number) {
    return a + b;
}

result = summa(true, 40);
console.log(result);

function add(a: number, b: number): void {
    console.log((a + b));
}
add(10, 20);

function mult(a: number, b?: number, c?: number) {
    let result = a;
    if (b)
        result *= b;
    if (c != undefined)
        result *= c;
    console.log(result);
}
mult(10, 20, 30);
mult(10, 20);
mult(10);

function multiplication(a: number, b: number = 2, c: number = 3) {
    let result = a;
    result *= b;
    result *= c;
    console.log(result);
}
multiplication(10, 20, 30);
multiplication(10, 20);
multiplication(10);

let n: number = 3; // глобальна змінна
square();
// помилка компіляції: змінна res не оголошена
//console.log("Квадрат числа " + n + " дорівнює " + res);

function square() {
    let res = 0;
    res = n * n; // глобальна змінна n
    console.log("Квадрат числа " + n + " дорівнює " + res);
    let m = 10; // локальна змінна m
    res = m * m; // локальна змінна m
    console.log("Квадрат числа " + m + " дорівнює " + res);
}

function sumOfNumbers(firstNumber: number, ...numberArray: number[]): number {

    let result = firstNumber;
    for (let i = 0; i < numberArray.length; i++) {
        result += numberArray[i];
    }
    return result;
}

result = sumOfNumbers(10, 20, 30);
console.log(result);

result = sumOfNumbers(1, 2, 3, 4, 5);
console.log(result);

function addition(x: string, y: string): string
function addition(x: number, y: number): number;
function addition(x: boolean, y: boolean): boolean;
function addition(x: any, y: any): any {
    return x + y;
}

let result1 = addition(7, 8);
console.log(result1);
let result2 = addition("7", "8");
console.log(result2);
let result3 = addition(true, false);
console.log(result3);