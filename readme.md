<p align = "center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ<br>
РОССИЙСКОЙ ФЕДЕРАЦИИ<br>
ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ<br>
ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ<br>
«САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>
<br><br><br><br><br><br>
<p align = "center">Институт естественных наук и техносферной безопасности<br>Кафедра информатики<br>Коньков Никита Алексеевич</p>
<br><br><br>
<p align = "center">Лабораторная работа №4<br>«Основы языка <strong>JavaScript</strong>»<br>01.03.02 Прикладная математика и информатика</p>
<br><br><br><br><br><br><br><br><br><br><br><br>
<p align = "right">Научный руководитель<br>
Соболев Евгений Игоревич</p>
<br><br><br>
<p align = "center">г. Южно-Сахалинск<br>2022 г.</p>
<br><br><br><br><br><br><br><br><br><br><br><br>

<h1 align = "center">Введение</h1>

<p> <b>HTML</b> (или же HyperText Markup Language) - стандартизированный язык разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора. </p>
<p> <b>JavaScript</b> – мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript (стандарт ECMA-262).JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.</p>
<h1 align = "center">Цели и задачи</h1>
<p>1. Напишите код, выполнив задание из каждого пункта отдельной строкой:</p>
<ul>
<li>Создайте пустой объект user.</li>
<li>Добавьте свойство name со значением John.</li>
<li>Добавьте свойство surname со значением Smith.</li>
<li>Измените значение свойства name на Pete.</li>
<li>Удалите свойство name из объекта.</li>
</ul>

<p>2. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false. Должно работать так:</p>

```js
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
```

<p>3. Можно ли изменить объект, объявленный с помощью const? Как вы думаете?</p>

```js
const user = {
  name: "John"
};
// это будет работать?
user.name = "Pete";
```

<p>4. У нас есть объект, в котором хранятся зарплаты нашей команды:</p>

```js
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```

<p>Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.</p>

<p>5. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.</p>
<p>Например:</p>

```js
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
```
<p>Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.</p>

<p>6. Что выведет следующий код?</p>

```js
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?
```

<p>7. Давайте произведём 5 операций с массивом.</p>

<ul>
<li>Создайте массив styles с элементами «Джаз» и «Блюз».</li>
<li>Добавьте «Рок-н-ролл» в конец.</li>
<li>Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.</li>
<li>Удалите первый элемент массива и покажите его.</li>
<li>Вставьте «Рэп» и «Регги» в начало массива.</li>
<li>Массив по ходу выполнения операций:</li>
</ul>
<p>Джаз, Блюз<br>
Джаз, Блюз, Рок-н-ролл<br>
Джаз, Классика, Рок-н-ролл<br>
Классика, Рок-н-ролл<br>
Рэп, Регги, Классика, Рок-н-ролл<br>
</p>
<br>

<p>8. Каков результат? Почему?</p>

```js
let arr = ["a", "b"];
arr.push(function() {
  alert( this );
})
arr[2](); // ?
```

<p>9. Напишите функцию sumInput(), которая:</p>

<ul>
<li>Просит пользователя ввести значения, используя prompt и сохраняет их в массив.</li>
<li>Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».</li>
<li>Подсчитывает и возвращает сумму элементов массива.</li>
</ul>

<p>10. На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].</p>
<p>Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.</p>
<p>Функция getMaxSubSum(arr) должна возвращать эту сумму.</p>
<p>Например:</p>
<p>getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)</p>
<p>getMaxSubSum([2, -1, 2, 3, -9]) = 6</p>
<p>getMaxSubSum([-1, 2, 3, -9, 11]) = 11</p>
<p>getMaxSubSum([-2, -1, 1, 2]) = 3</p>
<p>getMaxSubSum([100, -9, 2, -3, 5]) = 100</p>
<p>getMaxSubSum([1, 2, 3]) = 6 (берём все)</p>
<p>Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:</p>
<p>getMaxSubSum([-1, -2, -3]) = 0</p>
<p>Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.</p>

<p>11. Удалить в массиве все числа, которые повторяются более двух раз. </p>

<p>12.Введите одномерный целочисленный массив. Найдите наибольший нечетный элемент. Далее трижды осуществите циклический сдвиг влево элементов, стоящих справа от найденного максимума, и один раз сдвиг элементов вправо, стоящих слева от найденного максимума.</p>

<p>13. Найдите сумму отрицательных элементов массива.</p>

<p>14. Найдите произведение элементов массива с нечетными номерами.</p>

<p>15. Найдите сумму элементов массива между двумя первыми нулями. Если двух нулей нет в массиве, то выведите ноль.</p>

<p>16. Найдите наибольший элемент массива.</p>

<p>17. Найдите наименьший четный элемент массива. Если такого нет, то выведите первый элемент</p>

<p>18. Преобразовать массив так, чтобы сначала шли нулевые элементы, а затем все остальные.</p>

<p>19. Найдите сумму номеров минимального и максимального элементов. </p>

<p> 20. Найдите минимальный по модулю элемент массива.</p>

<p>21. Заполнить массив из 10 элементов случайными числами в интервале [-10..10] и сделать реверс отдельно для 1-ой и 2-ой половин массива.</p>

<p>22. Заполнить массив из 12 элементов случайными числами в интервале [-12..12] и выполнить циклический сдвиг ВПРАВО на 4 элемента.</p>

<p>23. <a href = "https://www.codewars.com/kata/javascript-mathematician"> Javascript Mathematician </a></p>
<p>24. <a href = "https://www.codewars.com/kata/javascript-from-the-inside-number-1-map">Javascript from the Inside #1 : Map</a></p>
<p>25. <a href = "https://www.codewars.com/kata/javascript-from-the-inside-number-2-filter">Javascript from the Inside #2 : Filter</a></p>
<p>26. <a href = "https://www.codewars.com/kata/power-bind"> Power .bind()</a></p>
<p>27. <a href = "https://www.codewars.com/kata/closures-and-scopes">Closures and Scopes</a></p>
<p>28. <a href = "https://www.codewars.com/kata/can-you-keep-a-secret">Can you keep a secret?</a></p>
<h1 align = "center">Решение</h1>  

```js
module.exports.getZad1 = function()
{
    console.log("Задание 1");
    console.log("----------------------------------------");
    let user = {};
    user.name = "John";
    console.log(user.name)
    user.surname = "Smith";
    user.name = "Pete";
    console.log(user.name);
    delete user.name;
    console.log(user.name);
    console.log("----------------------------------------");
}

function isEmpty(a)
{
    for(let x in a)
        return false;
    return true;
}

module.exports.getZad2 = function()
{
    console.log("Задание 2");
    console.log("----------------------------------------");
    let schedule = {};
    console.log(isEmpty(schedule));
    schedule["8:30"] = "get up";
    console.log( isEmpty(schedule));
    console.log("----------------------------------------");
}

module.exports.getZad3 = function()
{
    console.log("Задание 3");
    console.log("----------------------------------------");
    const user = {
        name: "John"
      };
    user.name = "Pete";    
    console.log(user.name);  
    console.log("----------------------------------------");
}

module.exports.getZad4 = function()
{
    console.log("Задание 4");
    console.log("----------------------------------------");
    let sum = 0;
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
      }
    for(let x of Object.values(salaries))
      sum += x;
    console.log(sum);

    sum = 0;
    salaries = {};
    for(let x of Object.values(salaries))
    sum += x;
    console.log(sum);
    console.log("----------------------------------------");
}

function multiplyNumeric(a)
{
    for(let x in a){
        if(typeof a[x] == "number")
        a[x] *= 2;
    }
}

module.exports.getZad5 = function()
{
    console.log("Задание 5");
    console.log("----------------------------------------");
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
      };
    console.log(menu.width + " " + menu.height + " " + menu.title);
    multiplyNumeric(menu);
    console.log(menu.width + " " + menu.height + " " + menu.title);
    console.log("----------------------------------------");
}

module.exports.getZad6 = function()
{
    console.log("Задание 6");
    console.log("----------------------------------------");
    let fruits = ["Яблоки", "Груша", "Апельсин"];
    let shoppingCart = fruits;
    shoppingCart.push("Банан");
    console.log(fruits.length);
    console.log("----------------------------------------");
}

module.exports.getZad7 = function(n)
{
    console.log("Задание 7");
    console.log("----------------------------------------");
    let arr = ["Jazz","Blues"];
    console.log(arr);
    arr.push("Rock'n'Roll");
    console.log(arr);
    let middle = (arr.length % 2) + Math.floor(arr.length / 2);
    arr[middle - 1] = "Classic";
    console.log(arr);
    console.log(arr.shift());
    console.log(arr);
    arr.unshift("Rap", "Raggy");
    console.log(arr);
    console.log("----------------------------------------");
}

module.exports.getZad8 = function()
{
    console.log("Задание 8");
    console.log("----------------------------------------");
    let arr = ["a", "b"];
    arr.push(function() {
        console.log( this );
    })
    console.log(arr[2]());
    console.log("----------------------------------------");
}

function sumInput(a){
    let sum = 0;
    while(true)
    {
        let num = prompt("Введите значение элемента массива")
        if(num == "" || num == null){
            alert("Массив сформирован");
            break;
        }
        a.push(Number(num));
    }

    for(let x of a)
        sum += x;
    return (sum)
}

module.exports.getZad9 = function()
{
    console.log("Задание 9");
    console.log("----------------------------------------");
    let arr = [];
    let res = sumInput(arr);
    console.log(res);
    console.log("----------------------------------------");
}

function getMaxSubSum(a)
{
    let max = 0;
    let curr = 0;

    for(let i = 0; i < a.length; i++)
    {
        curr = 0;
        for(let j = i; j < a.length; j++)
        {
            curr += a[j];
            if(max < curr)
                max = curr;
        }
    }
    return max;
}

module.exports.getZad10 = function()
{
    console.log("Задание 10");
    console.log("----------------------------------------");
    let arr = [1, -2, 3, 4, -9, 6];
    console.log(arr);
    console.log(getMaxSubSum(arr));
    arr = [-1, -2, -3];
    console.log(arr);
    console.log(getMaxSubSum(arr));
    console.log("----------------------------------------");
}

module.exports.getZad11 = function(n)
{
    console.log("Задание 11");
    console.log("----------------------------------------");
    let arr = [1, -2, 3, 3, -9, 3];
    console.log(arr);
    let count, toDel;
    for(let i = 0; i < arr.length; i++){
        count = 1;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] == arr[i])
                count++;
        }
        if(count > 2)
        {
            toDel = arr[i];
            for(let j = i; j < arr.length; j++){
                if(arr[j] == toDel){
                    for(let a = j + 1; a < arr.length; a++){
                        arr[a - 1] = arr[a]
                    }
                    j--;
                    arr.length--;
                }
            }
            i--;
        }
    }
    console.log(arr);
    console.log("----------------------------------------");
}

module.exports.getZad12 = function()
{
    console.log("Задание 12");
    console.log("----------------------------------------");
    let arr = [1, -2, 3, 29, -9, 6];
    console.log(arr);
    let max = arr[0];
    let indmax = -1;
    for(let i = 0; i < arr.length; i++){
        if(i % 2 != 0){
            if(arr[i] > max){
                max = arr[i];
                indmax = i;
            }
        }
    }
    console.log(max);
    if(indmax != arr.length - 1){
        for(let i = 0; i < 3; i++)
        {
            let temp = arr[indmax + 1];
            for(let j = indmax + 1; j < arr.length - 1; j++)
                arr[j] = arr[j + 1];
            arr[arr.length - 1] = temp;
        }
    }
    if(indmax != 0){
        let temp = arr[indmax - 1];
        for(let i = indmax - 1; i > 0; i--)
            arr[i] = arr[i - 1]
        arr[0] = temp;
    }
    console.log(arr);
    console.log("----------------------------------------");
}

module.exports.getZad13 = function()
{
    console.log("Задание 13");
    console.log("----------------------------------------");
    let arr = [1, -2, 3, 4, -9, 6];
    console.log(arr);
    let sum = 0;
    for(let x of arr)
    {
        if(x < 0)
            sum += x;
    }
    console.log(sum);
    console.log("----------------------------------------");
}

module.exports.getZad14 = function()
{
    console.log("Задание 14");
    console.log("----------------------------------------");
    let arr = [1, -2, 3, 4, -9, 6];
    console.log(arr);
    let res = 1;
    for(let i = 0; i < arr.length; i++)
    {
        if(i % 2 != 0)
        res *= arr[i]
    }
    console.log(res);
    console.log("----------------------------------------");
}

module.exports.getZad15 = function()
{
    console.log("Задание 15");
    console.log("----------------------------------------");
    let arr = [1, 0, 3, 29, 0, 6];
    console.log(arr);
    let sum = 0;
    let countZero = 0;
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] == 0){
            countZero++;
            for(let j = i + 1; j < arr.length; j++){
                if(arr[j] == 0){
                    countZero++;
                    j = arr.length - 1;
                    i = arr.length - 2;
                }
                else
                    sum += arr[j]
            }

        }
    }

    if(countZero > 1){
        console.log(sum);
    }
    else{
        console.log(0);
    }
    console.log("----------------------------------------");
}

module.exports.getZad16 = function()
{
    console.log("Задание 16");
    console.log("----------------------------------------");
    let arr = [1, -2, 3, 29, -9, 6];
    console.log(arr);
    let max = arr[0];
    let indmax = -1;
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > max)
            max = arr[i];
    }
    console.log(max);
    console.log("----------------------------------------");
}

module.exports.getZad17 = function()
{
    console.log("Задание 17");
    console.log("----------------------------------------");
    let arr = [1, -2, 2, 29, -9, 6];
    console.log(arr);
    let currcount = 1;
    let minch = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(i % 2 == 0){
            if(arr[i] < minch){
                minch = arr[i];
                currcount = 1;
            }
            else if(arr[i] == minch)
                currcount++;
        }
    }
    if(currcount > 1)
        console.log(arr[0]);
    else
        console.log(minch);
    console.log("----------------------------------------");
}

module.exports.getZad18 = function()
{
    console.log("Задание 18");
    console.log("----------------------------------------");
    let arr = [1, -2, 0, 29, -9, 0, 25, 0];
    console.log(arr);
    let countZero = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0)
        {
            let temp = arr[countZero];
            arr[countZero] = 0;
            for(let j = i; j > countZero; j--){
                arr[j] = arr[j - 1];
            }
            arr[countZero + 1] = temp;
            countZero++;
        }
    }
    console.log(arr);
    console.log("----------------------------------------");
}

module.exports.getZad19 = function()
{
    console.log("Задание 19");
    console.log("----------------------------------------");
    let arr = [1, -2, 2, 29, -9, 6];
    console.log(arr);
    let min = arr[0];
    let max = arr[0];
    let indmax = 0;
    let indmin = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            indmax = i;
        }

        if(arr[i] < min){
            min = arr[i];
            indmin = i;
        }
    }
    console.log(indmax + indmin);
    console.log("----------------------------------------");
}

module.exports.getZad20 = function()
{
    console.log("Задание 20");
    console.log("----------------------------------------");
    let arr = [8, -2, 2, 29, 1, 6];
    console.log(arr);
    let min = arr[0];
    let minind = 0;
    for(let i = 0; i < arr.length; i++){
        if(Math.abs(arr[i]) < Math.abs(min)){
            min = Math.abs(arr[i]);
            minind = i;
        }
    }
    min = arr[minind];
    console.log(min);
    console.log("----------------------------------------");
}

module.exports.getZad21 = function()
{
    console.log("Задание 21");
    console.log("----------------------------------------");
    let arr = [];
    let a = 0;
    for(let i = 0; i < 10; i++){
        arr.unshift(Math.floor(Math.random() * 20) - 10)
    }
    let first = arr.length / 2
    console.log(arr);

    for(let i = 0; i < first; i++){
        if(i >= (first / 2 / 2))
            continue;
        else{
            let temp = arr[i];
            arr[i] = arr[first - i - 1]
            arr[first - i - 1] = temp;
        }
    }

    for(let i = first; i < arr.length; i++){
        if(i >= (arr.length - (first / 2)))
            continue;
        else{
            let temp = arr[i];
            arr[i] = arr[arr.length - a - 1]
            arr[arr.length - a - 1] = temp;
        }
        a++;
    }

    console.log(arr);
    console.log("----------------------------------------");
}

module.exports.getZad22 = function()
{
    console.log("Задание 22");
    console.log("----------------------------------------");
    let arr = [];
    for(let i = 0; i < 12; i++){
        arr.unshift(Math.floor(Math.random() * 24) - 12)
    }
    console.log(arr);
    for(let i = 0; i < 4; i++){
        let temp = arr[arr.length - 1];
        for(let j = arr.length - 1; j > 0; j--){
            arr[j] = arr[j - 1];
        }
        arr[0] = temp;
    }
    console.log(arr);
    console.log("----------------------------------------");
}
```

<p align = "center">CODEWARS</p>

<p>23. Javascript Mathematician</p>

```js
const calculate = function(a)
{
  var sum = 0;
  for(let i = 0; i < arguments.length; i++)
    sum += arguments[i]
  return function(b)
  {
    for(let i = 0; i < arguments.length; i++)
      sum += arguments[i]
    return sum;
  }
}
```

<p>24. Javascript from the Inside #1 : Map</p>

```js
Array.prototype.map = function(callbfun, context){
  let arr = [];
  arr.length = this.length;
  
  for(let i = 0; i < this.length; i++){
    if(i in this){
      arr[i] = callbfun.call(context, this[i], i , this);
    }
  }
  return arr;
}
```

<p>25. Javascript from the Inside #2: Filter</p>

```js
Array.prototype.filter = function(predfun, context){
  let arr = [];
  for(let i = 0; i < this.length; i++){
    if((i in this) && (predfun.call(context, this[i], i , this)))
      arr.push(this[i])
    }
  return arr;
  }
```

<p>26. Power .bind()</p>

```js
Function.prototype.bind = function(ctx) {
     return (x = ctx) => this.apply(x,[x]);
}
```

<p>27. Closures and Scopes</p>

```js
function createFunctions(n) {
  let callbacks = [];
  for (let i = 0; i < n; i++) {
    callbacks.push(function() {
      return i;
    });
  }
  return callbacks;
}
```

<p>28. Can you keep a secret?</p>

```js
function createSecretHolder(secret) {
  
  return{
    getSecret: function() 
    {
      return secret;
    },
  
    setSecret: function(toSet)
    {
      secret = toSet;
    }
  }
  
}
```

<h1 align = "center">Вывод</h1>
Опираясь на материал с сайта w3school, лекции, а также с использованием сторонних материалов, Я решил продолжаю познавать всё более сложные задачи на codewars и выполняю другие задания, представленные в лабораторных работах.