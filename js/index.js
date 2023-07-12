document.addEventListener('DOMContentLoaded', function() {

    let arrayListText = new Array();

    const txtAreaEncrypter = document.getElementById('txtAreaEncrypter');
    txtAreaEncrypter.focus();

    const ul = document.getElementById('reception')

    const printListText = () => {
        
        arrayListText.forEach(element => {
            const li = document.createElement('li');
            li.textContent = element;
            li.className = "cursor-pointer";
            ul.appendChild(li);
            li.addEventListener('click', function(){
                txtAreaEncrypter.value = li.textContent;
            })
        })        

    }

    const encrypt = () => {
        if(arrayListText.length <= 0) {
            ul.innerHTML = "";
        }
        const textSplit = txtAreaEncrypter.value.split('');
        const textEncrypt = convert(textSplit);
        arrayListText = [];
        arrayListText.push(textEncrypt);
        printListText();
        txtAreaEncrypter.value = "";
        txtAreaEncrypter.focus();
    }

    document.getElementById('encrypt').addEventListener('click', encrypt);

    txtAreaEncrypter.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            encrypt();
        } 
    });

    const decrypt = () => {
        const textSplit = txtAreaEncrypter.value.split('');
        const textDecrypt = unConvert(textSplit);
        arrayListText = [];
        arrayListText.push(textDecrypt);
        printListText();
        txtAreaEncrypter.value = "";
        txtAreaEncrypter.focus();
    }

    document.getElementById('decrypt').addEventListener('click', decrypt);

    const convert = (arrayText) => {
        const arrayNoConvert =  arrayText.map(element => {
            switch(element){
                case 'e': 
                    return 'enter';
                case 'i': 
                    return 'imes';
                case 'a': 
                    return 'ai';
                case 'o': 
                    return 'ober'
                case 'u':
                    return 'ufat'
                default: 
                    return element;
            }
        })
        return arrayNoConvert.join('')
    }

    const unConvert = (arrayText) => {
        let text = arrayText.join('');
        for(let i = 0; i < arrayText.length; i++) {
            if(text.includes('enter')) text = text.replace("enter", "e");
            if(text.includes('imes')) text = text.replace("imes", "i");
            if(text.includes('ai')) text = text.replace("ai", "a");
            if(text.includes('ober')) text = text.replace("ober", "o");
            if(text.includes('ufat')) text = text.replace("ufat", "u");
        }
        return text;
    }
});


/**
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/