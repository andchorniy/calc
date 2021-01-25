const resultRef = document.querySelector('.result');
const previewRef = document.querySelector('.preview');
const allButtonRef = document.querySelectorAll('.button-calc'); 
const buttonToResultRef = document.querySelector('.button-result');

const allButton = Array.from(allButtonRef)

allButton.map((button) => { 
    button.addEventListener('click', getInputNumber)
})


let preview = previewRef.textContent

function getInputNumber(event) { 
    if (event.target.textContent === 'x') {
        preview += "*"
    }
    if (event.target.textContent === '+/-') {
        if (preview.split('')[0] === '-') { 
           preview = preview.split('').slice(1).join('')
            return previewRef.textContent = preview
        } else {
            
            preview = `-${preview}`
            return previewRef.textContent = preview
        }
    }
    if (event.target.textContent === "C") { 
       preview = preview.split('').slice(0, preview.split('').length - 1).join('')
        
    }
    else {
        preview += event.target.textContent
    }

    return previewRef.textContent = preview
}

buttonToResultRef.addEventListener('click', getResult)

function getResult() { 
    preview = +preview
    console.log(preview);
}




