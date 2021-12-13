function getResult() {
    return document.getElementById('result').innerText
}

function showResult(number) {
    document.getElementById('result').innerText = number;
}


let number = document.getElementsByClassName('button');
for(let  i=0; i<number.length; i++){
    number[i].addEventListener('click', function (){
        let result = getResult()
            result = result + this.id;
        alert(result)
            showResult(result);
    })
}