"use strict";
exports.__esModule = true;
var age;
age = 50;
var name1;
name1 = 'Max';
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var anything;
anything = -20;
anything = 'Text';
anything = {};
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
var person;
person = ['Max', 21];
var status;
(function (status) {
    status[status["LOADING"] = 0] = "LOADING";
    status[status["READY"] = 1] = "READY";
})(status || (status = {}));
var numOrStr;
numOrStr = 10;
numOrStr = 'qwe';
var isEnable;
isEnable = 'enable';
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
showMessage('message');
calc(2, 3);
customError();
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
console.log(page1);
