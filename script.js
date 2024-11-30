
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