function readingTime() {
    const text = document.getElementById("quarto-document-content").innerText;
    const wpm = 500;
    var words = text.replace(/[a-zA-Z \n。，、？「」!！\s・/—….<>]/g, "");
    words = words.trim().split("").length;
    const time = Math.ceil(words / wpm);
    
    document.getElementById("time").innerText = time;
  }


  readingTime();