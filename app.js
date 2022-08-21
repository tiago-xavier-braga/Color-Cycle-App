var verificationColorInput = 0;
var verificationStartInput = 0;
var color = [];
 
function selectColor(){
    if(verificationStartInput == 0){
        for(let i = 0; i <= verificationColorInput - 1; i++){
            let inputColor = document.getElementById(`inputColor${i}`).value;
            color.push(inputColor);

            document.getElementById(`inputText${i}`).value = inputColor;

            document.getElementById(`inputColor${i}`).disabled = true;
            document.getElementById(`inputText${i}`).disabled = true;
        }
        for(let j = 0; j <= verificationColorInput - 1; j++){
            const sheet = new CSSStyleSheet();

            if(verificationColorInput == 2){
            sheet.insertRule(`
                @keyframes colorchange{
                    0%{background-color: ${color[0]};}
                    100%{background-color: ${color[1]}}
                }`);
            }
            if(verificationColorInput == 3){
            sheet.insertRule(`
                @keyframes colorchange{
                    0%{background-color: ${color[0]};}
                    66%{background-color: ${color[1]};}
                    100%{background-color: ${color[2]};}
                }`);
            } else{
            sheet.insertRule(`
                @keyframes colorchange{
                    0%{background-color: ${color[0]};}
                    33%{background-color: ${color[1]};}
                    66%{background-color: ${color[2]};}
                    100%{background-color: ${color[3]};}
                }`);
            }

            document.adoptedStyleSheets = [sheet];
        }
        document.getElementById('colorPreview').className = 'color-preview on';
        document.getElementById('startButton').innerHTML = 'Stop';
    verificationStartInput = 1;
    } else {
        for(let i = 0; i <= verificationColorInput - 1; i++){
            document.getElementById(`inputColor${i}`).disabled = false;
            document.getElementById(`inputText${i}`).disabled = false;
            document.getElementById('startButton').innerHTML = 'Start';
            document.getElementById('colorPreview').className = 'color-preview';

            color = [];

            verificationStartInput = 0;
        }
    }
}

function deleteInput(id){
    document.getElementById(`content${id}`).innerHTML = '';
    color.pop(id);
    verificationColorInput--;
}

function newColorButton(){
    const colorInput = document.getElementById('colorInput');
    if(verificationColorInput < 4){
        let renderHtml = `
        <div class="content-input" id="content${verificationColorInput}">
            <input type="color" class="input-color-picker" value="#3A6EA5" id="inputColor${verificationColorInput}">
            <input type="text" class="input-text" value="#3A6EA5" id="inputText${verificationColorInput}">  
            <button class="delete" onClick="deleteInput(${verificationColorInput})">X</button>
        </div>
        `;
        colorInput.innerHTML += renderHtml;
        verificationColorInput++;
        if(verificationColorInput == 4){
            document.getElementById('newColor').style.display = 'none';
        }
    }
}


