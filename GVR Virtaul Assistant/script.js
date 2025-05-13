let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

// function speak(text) {
//     const utterance = new SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(utterance);
//   }

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("salam")){
        speak("waalikumassalam")
    }
    else if(message.includes("who are you")){
        speak("i am google virtual assistant ,created by Faijaan Sir")
    }
    else if(message.includes("who is sfq")){
        speak("sfq is the short form of sheikh faijaan qureshi to know morw about sheikh faijaan qureshi visit this website")
        window.open("https:sfqinfo.netlify.app/","_blank")
    }

    else if(message.includes("how are you")){
        speak("alhamdulillah i am fine")
    }
   
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open maps")){
        speak("opening google maps...")
        window.open("https://maps.google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("open linkedin")){
        speak("opening linkedin..")
        window.open("https://www.linkedin.com/in/")
    }
    else if(message.includes("open linkedin")){
        speak("opening linkedin..")
        window.open("https://www.linkedin.com/in/")
    }
    else if(message.includes("open spotify")){
        speak("opening spotify..")
        window.open("https://open.spotify.com")
    }
    else if(message.includes("open meesho")){
        speak("opening meesho..")
        window.open("https://www.meesho.com")
    }
    else if(message.includes("open amazon")){
        speak("opening amzon..")
        window.open("https://www.amazon.in")
    }
    else if(message.includes("open flipkart")){
        speak("opening flipkart..")
        window.open("https://www.flipkart.com")
    } 
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on google regarding" + message.replace("google","") || message.replace("google","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("google","")}`,"_blank")
    }
}
// Scroll Reval
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration:2000,
    delay:200

});
//  Image Animation ,heading ,content ANIMATION
ScrollReveal().reveal('.logo ,.header  ', { origin:'top'});
ScrollReveal().reveal('.logo ,.header', { origin:'bottom'});
ScrollReveal().reveal('.logo ', { origin:'left'});
ScrollReveal().reveal('.logo ' , { origin:'right'});
