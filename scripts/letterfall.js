const allowedChars = new Set(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);

document.addEventListener('keydown', function(event){
    const newLetter = document.createElement("img");
    newLetter.classList.add("letter");

    if(!allowedChars.has(event.key.toUpperCase())){
        return;
    }
    newLetter.src = "./resources/"+event.key.toUpperCase()+".png";
    
    newLetter.style.top = '-100px';
    newLetter.style.left = Math.random()*(window.innerWidth-150)+50 + 'px';

    document.body.appendChild(newLetter);
    draggable(newLetter);
    fall(newLetter);
} );

function fall(letter){
    
    const interval = setInterval(() => {
        letter.style.top = (parseInt(letter.style.top) + 1) + 'px';
        if(parseInt(letter.style.top) > window.innerHeight) {
            clearInterval(interval);
            document.body.removeChild(letter);
        }
    }, 10);
    letter.addEventListener("mousedown", ()=>{
        
        clearInterval(interval)
        
    });

}