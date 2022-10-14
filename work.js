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