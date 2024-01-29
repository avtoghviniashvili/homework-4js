//N1
let arr = [5, 25, 89, 120, 3];

arr.push('javascript', 'pyton');

arr.unshift('html', 'css');

arr.shift();

arr.pop()

console.log(arr);

console.log(arr.length);

console.log('');


//N2
let fruits = ['ფორთოხალი', 'ბანანი', 'მსხალი'];

console.log(fruits.length);

fruits.push('ვაშლი', 'ანანასი');

fruits.unshift('საზამთრო');

console.log(fruits.length);

fruits.splice(2, 0, 'მანგო');

fruits.shift()

fruits.pop();

console.log(fruits);

console.log(fruits.length);

console.log('');


//N3
let arr3 = [1, 2, 3, 4, 5];

let splice = ['a', 'b', 'c'];

arr3.splice(3, 0, 'a', 'b', 'c');

console.log(arr3);

console.log('');


//N4
let arr4 = [1, 2, 3, 4, 5];

let sum = 0;

arr4.forEach((element) => {
    sum += element
});

console.log(sum);

console.log('');


//N5
let arr5 = [2, 15, 10, 24];

let remove = arr5.length / 2;

arr5.splice(remove, 1)

console.log(arr5);

console.log('');


//N6
let arr6 = [12, 25, 3, 6, 8, 14, 7, 23];

let divide = arr6.map((num) => {
    return num / 3;
});

console.log(divide);

console.log('');


//N7
let languages = ['html', 'css', 'javascript', 'python', 'php'];

let symbols = languages.filter((Symbol) => {
    return Symbol.length > 3;
});

console.log(symbols);

console.log('');


//N8
let city = ['madrid', 'rome', 'milan', 'berlin'];

let cities = city.filter((element) => {
    return element.includes('n' && 'm');
});

console.log(cities);

console.log('');


//N9
let array1 = [1, 2];
let array2 = [3, 4];
let array3 = [5, 6];

let concat = array1.concat(array2, array3);

console.log(concat);

console.log('');


//N10
let arr10 = [-1, -2, -3, 4];

let possitive = arr10.some((num) => {
    return sum > 0;
});

console.log(possitive);

console.log('');


//N11
let arr11 = [23, 45, 32, 5, 87, 7, 3, 98];

let sort = arr11.sort((a, b) => {
    return b - a
})

console.log(sort);


//N12
function getinfo() {
    let nameuser = 'anna';
    console.log(nameuser);//აქ დაიბეჭდება anna

    function userinfo() {
        let info = `user name is ${nameuser}`;
        console.log(info);// აქ დაიბეჭდება user name is anna
    }
    userinfo();
    console.log(info);// აქ დაინეჭდება undefined, იმიტომ რომ info ცვლადი ეკუთნის userinfo ფუნქციას და ფუნქციის გარეთ მასთან წვდომა არგვაქვს
}


console.log(nameuser);// აქ დაიბეჭდება undefined,იმიტომ რომ nameuser ცვლადი ეკუთვნის getinfo ფუნქციას და მისგარეთ მასთან წვდომა არ გვაქვს. 
getinfo();


