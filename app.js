gsap.from('.wrapper', {opacity: 0, delay: .5, duration: .5});


const UPPERCASE_LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const LOWERCASE_LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["%", "^", "(", ")", "{", "}", "[", "]", ">", "<", "/", "?", "#", "$", "@", "!", "&", "*", "\"\"", ".", "~", "="];



const uppercasebox = document.querySelector("#uppercasebox");
const lowercasebox = document.querySelector("#lowercasebox");
const numberbox = document.querySelector("#numberbox");
const symbolbox = document.querySelector("#symbolbox");
const passwordHolder = document.querySelector(".password-holder");
const sliderValue = document.querySelector(".slider-value");
const generatePasswordButton = document.querySelector(".generate-password-button");
const slider = document.querySelector(".slider");
const copyButton = document.querySelector(".copy")
const level1 = document.querySelectorAll(".level-box")[0];
const level2 = document.querySelectorAll(".level-box")[1];
const level3 = document.querySelectorAll(".level-box")[2];
const level4 = document.querySelectorAll(".level-box")[3];
const levelParagraph = document.querySelector(".level-paragraph");
const toast = document.querySelector('.toast')


uppercasebox.checked = true;
lowercasebox.checked = true;



sliderValue.textContent = slider.value;
let passwordSize = slider.value;
slider.oninput = function(){


    passwordSize = this.value;
    sliderValue.textContent = this.value;
    if(passwordSize < 10){ 
        levelParagraph.style.color = "red";

        levelParagraph.textContent = "WEAK";

        level1.style.backgroundColor = "yellow";
        level1.style.borderColor = "yellow";
        level2.style.backgroundColor = "inherit";
        level2.style.borderColor = "white";
        level3.style.backgroundColor = "inherit";
        level3.style.borderColor = "white";
        level4.style.backgroundColor = "inherit";
        level4.style.borderColor = "white";
        
     }  else if (passwordSize >= 10 && passwordSize < 15){
        
        levelParagraph.style.color = "lightyellow";
        levelParagraph.textContent = "MEDIUM";

        level1.style.backgroundColor = "yellow";
        level1.style.borderColor = "yellow";
        level2.style.backgroundColor = "yellow";
        level2.style.borderColor = "yellow";
        level3.style.backgroundColor = "inherit";
        level3.style.borderColor = "white";
        level4.style.backgroundColor = "inherit";
        level4.style.borderColor = "white";

     } else if(passwordSize >= 15){
        
        levelParagraph.style.color = "green";
        levelParagraph.textContent = "STRONG";
        level1.style.backgroundColor = "yellow";
        level1.style.borderColor = "yellow";
        level2.style.backgroundColor = "yellow";
        level2.style.borderColor = "yellow";
        level3.style.backgroundColor = "yellow";
        level3.style.borderColor = "yellow";
        level4.style.backgroundColor = "yellow";
        level4.style.borderColor = "yellow";
    }
}


function randomNumberGenerator(value){


    return Math.floor(Math.random() * value);



}


copyButton.addEventListener('click', async () => {


    await navigator.clipboard.writeText(passwordHolder.textContent)
    

    toast.style.display = "block";

    setTimeout(() => {

        
        toast.style.display = "none"
    }, 1000)
    
    
    
    

    
})





function randomPasswordGenerator(){
    
    let stringTogether = [];
    
    if(uppercasebox.checked){
        
        
        stringTogether = stringTogether.concat(UPPERCASE_LETTERS);
        
    }
    if(lowercasebox.checked){
        

        stringTogether = stringTogether.concat(LOWERCASE_LETTERS);
    }

    if(numberbox.checked){
        

        stringTogether = stringTogether.concat(numbers);
    }

    if(symbolbox.checked){
        
        stringTogether = stringTogether.concat(symbols);
    }

    

    let password = "";

    

    if(stringTogether.length > 0){


        for(let i = 0; i < passwordSize; i++){
      

            password += stringTogether[randomNumberGenerator(stringTogether.length)]?.toString();
            
        }
    
    }
    

    return password
}




generatePasswordButton.addEventListener("click", () => {

     if(randomPasswordGenerator()){

        passwordHolder.textContent = randomPasswordGenerator()
       
     }
     
    
})






