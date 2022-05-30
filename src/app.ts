let age: number;
age = 50;
let name1: string;
name1 = 'Max';
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;

let anything: any;
anything = -20;
anything = 'Text';
anything = {};

let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

let person: [string, number];
person = ['Max', 21];

enum statusBtn {
  LOADING,
  READY,
}

let numOrStr: number | string;
numOrStr = 10;
numOrStr = 'qwe';

let isEnable: 'enable' | 'disable';
isEnable = 'enable';

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// function customError(): never {
//   throw new Error('Error');
// }

showMessage('message');
calc(2, 3);
// customError();

type DataType = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: string; // Date
    updateAt: string; // Date
  };
};

const page1: DataType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  },
};

const page2: DataType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};
