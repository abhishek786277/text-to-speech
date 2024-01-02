let speech = new SpeechSynthesisUtterance();
let button = document.querySelector("button")
let text = document.querySelector("textarea")
let voice = window.speechSynthesis
let selectvoice = document.querySelector("select")
let voicechange = []


button.addEventListener("click",()=>{
    speech.text = text.value;
    voice.speak(speech)
})

voice.onvoiceschanged = function() {
    voicechange = voice.getVoices();
    voicechange.forEach((voices,i)=>{
        // console.log(voices,"+",i)
        selectvoice.innerHTML += `<option>${voices.name}</option> `;
        // selectvoice.options = new 
        })
    }

    selectvoice.addEventListener("change",()=>{
        const givenVoice = voicechange.find(voice =>{
            if (selectvoice.value === voice.name){
            speech.voice = voice;    

        }
    })
    
})





