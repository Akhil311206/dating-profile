function showResponse(isYes) {
    const responseMessage = document.getElementById("response-message");
    const contactSection = document.getElementById("contact-section");
  
    if (isYes) {
      responseMessage.innerHTML = 
        "I would love to meet someone who shares my thoughts and dreams.<br><br>" +
        "Would you do me the honor of joining me for an enchanting evening? ❤️";
      
      contactSection.style.display = "block";
    } else {
        var text = "Thank you for taking the time to read my profile – congratulations on knowing exactly what your heart desires. I wish you all the best finding your perfect match. 💕";
        responseMessage.innerHTML = text.replace("desires.", "desires.<br>");
        
      contactSection.style.display = "none";
    }
  }
  