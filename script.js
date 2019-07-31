const defaultText = document.querySelector('p').innerHTML;
let text = document.querySelector('p').innerHTML;
let btn = document.querySelector('button');
let wrd = '';


// Find matching words in text
function findMatch(word, str){
    let arr = [];

    for(let i=0; i < str.length-word.length+1; i++){
        let aimWord=''
            j=i
        for(let i=0; i<word.length; i++){
            aimWord += str[i+j];
        }
        if (aimWord == word){
            arr.push(i);
        }
    }
    return (arr)
}


//Highlight the matching words

btn.addEventListener('click', function(){
    text = defaultText
    wrd = document.querySelector('input').value;

    if (wrd === '' || wrd === ' '){
        return alert("input is empty")
    }
    
    let arr = findMatch(wrd.toLowerCase(), text.toLowerCase());
    console.log(arr);

    for (let index = 0; index < arr.length; index++) {
        var openMark = "<mark>";
        var closeMark = "</mark>";
    
        var position = arr[index]+(13*index);// +13 because <mark></mark> is 13 characters long
        var output = [text.slice(0, position), openMark, wrd, closeMark , text.slice(position+wrd.length)].join("");
        
        text = output;
    }

    document.querySelector("p").innerHTML = text;
});

