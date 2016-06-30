// Задача 1. Возведение числа в степень

console.log('TASK 1.');

var num = prompt('Enter integer number: ', '');
var exponent = prompt('Enter exponent: ', '');
var numberInExponent = pow();

console.log('Entered number:', num);
console.log('Entered exponent:', exponent);
console.log('RESULT = ', numberInExponent);
console.log('_________________________________');

function pow() {
    var result, convertExp;
    var numExp = 1;

    // Проверяем, евляются ли число и степень числом; не введено ли пустое значение;
    if (isNaN(num / 2) || isNaN(exponent / 2) || (num =='') || (exponent == '')) {
        return result = 'ATTENTION! You entered not integer number! Please, reload this page and enter correct number.';
    } else {
        if (exponent === 0) {
            numExp = 1;
        } else if (exponent < 0) {
            convertExp = Math.abs(exponent);
            for (var i = 1; i <= convertExp; i++) {
                numExp = numExp * num;
            }
            numExp = 1 / numExp;
          } else {
                for (var i = 1; i <= exponent; i++) {
                numExp = numExp * num;
                }
            }
        }

    return result = numExp;    
}

// Задача 2. Поиск совпадений введенного имени с именами в массиве

console.log('TASK2.');

var enteredName, nameOutput, message;
var arr = [];

inputName();

enteredName = prompt('Введите Ваше имя: ', '');

nameOutput = checkName(enteredName);

console.log('Введенные имена: ', arr);
console.log('Ваше имя: ', nameOutput);

alert(message);

function inputName() {
    for (var i = 0; i <= 4; i++) {
    arr[i] = prompt('Введите 5 имен: ', '');
    }
}
    
function checkName (name) {   
    var name, nameChecked, proverka;
 
    for (var j = 0; j <= 4; j++) {
        
        if ((arr[j] == name) && (arr[j] != '')) {            
            nameChecked = arr[j];
            message = arr[j] + ', Вы успешно вошли';
            proverka = true;
            break;
        } else if (proverka != true) {
                message = 'ОШИБКА! Введенное имя не совпадает с существующими именами, либо введено пустое имя!';
                nameChecked = name;
                }
    }

    return nameChecked;
}


