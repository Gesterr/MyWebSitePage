
const check ={};
// Приравниваем const к элементам HTML по их data-value
const ElementUSD = document.querySelector('[data-value="USD"]');
const ElementEUR = document.querySelector('[data-value="EUR"]');
const ElementJPY = document.querySelector('[data-value="JPY"]');
const ElementRUB = document.querySelector('[data-value="RUB"]');

const input = document.querySelector("#left");//input
const result = document.querySelector("#right");//input
const right_select = document.querySelector("#right-valutes");//select
const left_select = document.querySelector("#left-valutes");//select


// Просто вызов функции
getCurrencies ();

async function getCurrencies (){
    // Получает API данные
    const result = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    // Преобразуем их в json;
    const data = await result.json();
    // Преобразуем в js
    const resultData = await data;
    // Чтобы было проще, создаём переменную в которую вкладываем три валюты
    check.JPY = resultData.Valute.JPY;
    check.USD = resultData.Valute.USD;
    check.EUR = resultData.Valute.EUR;

    console.log(check)
    // Заменяем текст HTML на курс валюты
    ElementUSD.textContent = check.USD.Value.toFixed(2);
    ElementJPY.textContent = check.JPY.Value.toFixed(2);
    ElementEUR.textContent = check.EUR.Value.toFixed(2);
    // Взависимости от предыдущего курса, цвет изменяется
    if (check.USD.Value > check.USD.Previous){
        ElementUSD.classList.add('up');
    } else{
        ElementUSD.classList.add('down');
    }
    if (check.EUR.Value > check.EUR.Previous){
        ElementEUR.classList.add('up');
    } else{
        ElementEUR.classList.add('down');
    }
    if (check.JPY.Value > check.JPY.Previous){
        ElementJPY.classList.add('up');
    } else{
        ElementJPY.classList.add('down');
    }
}
//При изменении числа изменяется и курс справа
input.oninput = function(){
    //Взависимости от выбранно левой и правой валюты происходит рассчёт
    switch(left_select.value){
        case 'USD':
            if(right_select.value == 'USD'){
                result.value = input.value;
            } 
            else if(right_select.value == 'EUR'){
                result.value = (parseFloat(input.value * check[left_select.value].Value) /  check[right_select.value].Value).toFixed(2);
            } 
            else if(right_select.value == 'JPY'){
                result.value = (parseFloat(input.value * check[left_select.value].Value) /  check[right_select.value].Value).toFixed(2);
            } 
            else if(right_select.value == 'RUB'){
                result.value = (parseFloat(input.value) * check[left_select.value].Value).toFixed(2);
            }
        break;
        case 'JPY':
            if(right_select.value == 'USD'){
                result.value = (parseFloat(((input.value)*(check.JPY.Value))/100) /  check[right_select.value].Value).toFixed(2);
            } 
            else if(right_select.value == 'EUR'){
                result.value = (parseFloat(((input.value)*(check.JPY.Value))/100) /  check[right_select.value].Value).toFixed(2);
                
            } 
            else if(right_select.value == 'JPY'){
                result.value = input.value;
            } 
            else if(right_select.value == 'RUB'){
                result.value = (parseFloat(((input.value)*(check.JPY.Value))/100)).toFixed(2);
            }
        break;
        case 'EUR':
            if(right_select.value == 'USD'){
                result.value = (parseFloat(input.value * check[left_select.value].Value) /  check[right_select.value].Value).toFixed(2);
            } 
            else if(right_select.value == 'EUR'){
                 result.value = input.value;
            } 
            else if(right_select.value == 'JPY'){
                result.value = (parseFloat(input.value * check[left_select.value].Value) /  check[right_select.value].Value).toFixed(2);
            } 
            else if(right_select.value == 'RUB'){
                result.value = (parseFloat(input.value) / check[left_select.value].Value).toFixed(2);
            }
        break;
        case 'RUB':
            if(right_select.value == 'USD'){
                result.value = parseFloat(input.value /  check[right_select.value].Value).toFixed(2);
            } 
            else if(right_select.value == 'EUR'){
                result.value = parseFloat(input.value /  check[right_select.value].Value).toFixed(2);
                
            } 
            else if(right_select.value == 'JPY'){
                result.value = parseFloat((input.value*100)/(check.JPY.Value)).toFixed(2);
            } 
            else if(right_select.value == 'RUB'){
                result.value = input.value;
            }
        break;
    }
    // result.value = (parseFloat(input.value) / check[right_select.value].Value).toFixed(2);
}
// Это нужно, если человек при таком же значении просто меняет валюту
right_select.oninput = function(){
    switch(left_select.value){
        case 'USD':
            if(right_select.value == 'USD'){
                result.value = input.value;
            } 
            else if(right_select.value == 'EUR'){
                result.value = (parseFloat(input.value * check[left_select.value].Value) /  check[right_select.value].Value).toFixed(2);
            } 
            else if(right_select.value == 'JPY'){
                result.value = (parseFloat(input.value * check[left_select.value].Value) /  check[right_select.value].Value).toFixed(2);
            } 
            else if(right_select.value == 'RUB'){
                result.value = (parseFloat(input.value) / check[left_select.value].Value).toFixed(2);
            }
        break;
        case 'JPY':
            if(right_select.value == 'USD'){
                result.value = (parseFloat(((input.value)*(check.JPY.Value))/100) /  check[right_select.value].Value).toFixed(2);
            } 
            else if(right_select.value == 'EUR'){
                result.value = (parseFloat(((input.value)*(check.JPY.Value))/100) /  check[right_select.value].Value).toFixed(2);
                
            } 
            else if(right_select.value == 'JPY'){
                result.value = input.value;
            } 
            else if(right_select.value == 'RUB'){
                result.value = (parseFloat(((input.value)*(check.JPY.Value))/100)).toFixed(2);
            }
        break;
        case 'EUR':
            if(right_select.value == 'USD'){
                result.value = (parseFloat(input.value * check[left_select.value].Value) /  check[right_select.value].Value).toFixed(2);
            } 
            else if(right_select.value == 'EUR'){
                result.value = input.value;
            } 
            else if(right_select.value == 'JPY'){
                result.value = (parseFloat(input.value * check[left_select.value].Value) /  check[right_select.value].Value).toFixed(2);
            } 
            else if(right_select.value == 'RUB'){
                result.value = (parseFloat(input.value) * check[left_select.value].Value).toFixed(2);
            }
        break;
        case 'RUB':
            if(right_select.value == 'USD'){
                result.value = parseFloat(input.value /  check[right_select.value].Value).toFixed(2);
            } 
            else if(right_select.value == 'EUR'){
                result.value = parseFloat(input.value /  check[right_select.value].Value).toFixed(2);
                
            } 
            else if(right_select.value == 'JPY'){
                result.value = parseFloat((input.value*100)/(check.JPY.Value)).toFixed(2);
            } 
            else if(right_select.value == 'RUB'){
                result.value = input.value;
            }
        break;
    
    }   
}

left_select.oninput = function(){
    switch(left_select.value){
        case 'USD':
            if(right_select.value == 'USD'){
                result.value = input.value;
            } 
            else if(right_select.value == 'EUR'){
                result.value = (parseFloat(input.value * check[left_select.value].Value) /  check[right_select.value].Value).toFixed(2);
            } 
            else if(right_select.value == 'JPY'){
                result.value = (parseFloat(input.value * check[left_select.value].Value) /  check[right_select.value].Value).toFixed(2);
            } 
            else if(right_select.value == 'RUB'){
                result.value = (parseFloat(input.value) * check[left_select.value].Value).toFixed(2);
            }
        break;
        case 'JPY':
            if(right_select.value == 'USD'){
                result.value = (parseFloat(((input.value)*(check.JPY.Value))/100) /  check[right_select.value].Value).toFixed(2);
            } 
            else if(right_select.value == 'EUR'){
                result.value = (parseFloat(((input.value)*(check.JPY.Value))/100) /  check[right_select.value].Value).toFixed(2);
                
            } 
            else if(right_select.value == 'JPY'){
                result.value = input.value;
            } 
            else if(right_select.value == 'RUB'){
                result.value = (parseFloat(((input.value)*(check.JPY.Value))/100)).toFixed(2);
            }
        break;
        case 'EUR':
            if(right_select.value == 'USD'){
                result.value = (parseFloat(input.value * check[left_select.value].Value) /  check[right_select.value].Value).toFixed(2);
            } 
            else if(right_select.value == 'EUR'){
                result.value = input.value;
            } 
            else if(right_select.value == 'JPY'){
                result.value = (parseFloat(input.value * check[left_select.value].Value) /  check[right_select.value].Value).toFixed(2);
            } 
            else if(right_select.value == 'RUB'){
                result.value = (parseFloat(input.value) * check[left_select.value].Value).toFixed(2);
            }
        break;
        case 'RUB':
            if(right_select.value == 'USD'){
                result.value = parseFloat(input.value /  check[right_select.value].Value).toFixed(2);
            } 
            else if(right_select.value == 'EUR'){
                result.value = parseFloat(input.value /  check[right_select.value].Value).toFixed(2);
                
            } 
            else if(right_select.value == 'JPY'){
                result.value = parseFloat((input.value*100)/(check.JPY.Value)).toFixed(2);
            } 
            else if(right_select.value == 'RUB'){
                result.value = input.value;
            }
        break;
    
    }   
}
