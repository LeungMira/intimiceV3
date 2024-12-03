
function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}


function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  }
  const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        question.classList.toggle('active');
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
        } else {
          answer.style.display = 'block';
        }
      });
    });
    
    document.addEventListener('DOMContentLoaded', () => {
      const cards = document.querySelectorAll('.card');
      let currentIndex = 0;
  
      function updateActiveCard() {
        // Remove 'active' class from all cards
        cards.forEach((card) => card.classList.remove('active'));
  
        // Add 'active' class to the current card
        cards[currentIndex].classList.add('active');
  
        // Move to the next card (loop back to the start if needed)
        currentIndex = (currentIndex + 1) % cards.length;
      }
  
      // Call the function every 3 seconds
      setInterval(updateActiveCard, 3000);
  
      // Initialize the first card as active
      updateActiveCard();
    });