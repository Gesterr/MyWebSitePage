function CamelCase(){
    var input = document.getElementById('input').value;
    
    let s = input.split('');
    let arr = '';
    for(let i = 0; i < s.length; i++){
    if(i % 2 !== 0){ arr += s[i].toLowerCase();}
    else {arr += s[i].toUpperCase();}
    }

    document.querySelector('.outer-text').innerHTML = arr;
}