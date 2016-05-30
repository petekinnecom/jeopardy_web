// Load voices if possible
window.speechSynthesis && (window.speechSynthesis.onvoiceschanged = () => {})

export const cancel = () => {
  if (!window.speechSynthesis) {
    return
  }

  window.speechSynthesis.cancel()
}

export const speak = (text) => {
  if (!window.speechSynthesis){
    return
  }

  window.speechSynthesis.cancel()
  const voice = window.speechSynthesis.getVoices().filter((voice)=>{
    return voice.name == "Google US English"
  })[0]

  var msg = new window.SpeechSynthesisUtterance();
  msg.text = text;
  msg.volume = parseFloat(1);
  msg.rate = parseFloat(1);
  msg.pitch = parseFloat(1);
  msg.voice = voice

  window.speechSynthesis.speak(msg);
}
