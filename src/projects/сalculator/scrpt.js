
document.getElementById("numberArea").disabled=true;
document.getElementById("result").disabled=true;

let numArea = [];
let RealnumArea = 0;

document.getElementById('numberArea').value=numArea.join('');

function check(clickedId){
    // Эта кнопка отвечает за удаление всего в Input
    if(clickedId === "delete"){
        numArea = [];
        document.getElementById('numberArea').value=numArea.join('');
    } 
    // Эта кнопка отвечает за выполнение матиматической операции типа "="
    else if(clickedId === "="){
        if(numArea[numArea.length-1] === "-"||numArea[numArea.length-1] === "+"||numArea[numArea.length-1] === "*"||numArea[numArea.length-1] === "/"){
            alert('В конце указан математический знак, а не цифра');
        } else{
            RealnumArea = numArea.join('')
            document.getElementById('result').value = eval(RealnumArea);
        }
    }
    // Эти кнопки отвечают за математическое действие
    else if(clickedId === "*" || clickedId === "-" || clickedId === "+" || clickedId=== "/"){
        if(numArea[numArea.length-1] === "-"||numArea[numArea.length-1] === "+"||numArea[numArea.length-1] === "*"||numArea[numArea.length-1] === "/"){
            alert("ОШИБКА! Два подряд математических знака")
        } else{
            numArea.push(clickedId);
            document.getElementById('numberArea').value=numArea.join('');
        }
    }
    // Эта кнопка отвечает за удаление последней цифры
    else if(clickedId === "back"){
        if(numArea.length == 0){
            alert('Нечего удалять');
        }else{
            numArea.pop();
            document.getElementById('numberArea').value=numArea.join('');
        }
    }
    else if(clickedId === '.'){
        if(numArea[numArea.length-1] === '.' || numArea.length === 0 || numArea[numArea.length-1] === "-"||numArea[numArea.length-1] === "+"||numArea[numArea.length-1] === "*"||numArea[numArea.length-1] === "/"){
            alert('Не может быть две точки, или не может быть установленна в начале или после математической операции');
        } else{
            numArea.push(clickedId);
            document.getElementById('numberArea').value=numArea.join('');
        }
    }
    // Эти кнопки отвечают за добавления цифр в массив
    else{
        if(clickedId === "0"){
            if(numArea.length === 0){
                alert('Нельзя начинать с нуля!')
            } else if(numArea[numArea.length-1] === "-"||numArea[numArea.length-1] === "+"||numArea[numArea.length-1] === "*"||numArea[numArea.length-1] === "/"){
                alert('Нельзя начинать с нуля!')
            } else{
                numArea.push(clickedId);
        document.getElementById('numberArea').value=numArea.join('');
            }
        } else{
            numArea.push(clickedId);
        document.getElementById('numberArea').value=numArea.join('');
        }
    }
    
}