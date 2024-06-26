document.addEventListener('DOMContentLoaded', () => {
    console.log("OpenUI site loaded");

    // Scroll to sections smoothly
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle FAQ answers
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const faqAnswer = faqItem.querySelector('.faq-answer');
            faqItem.classList.toggle('active');
            if (faqItem.classList.contains('active')) {
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
                faqAnswer.style.opacity = '1';
            } else {
                faqAnswer.style.maxHeight = null;
                faqAnswer.style.opacity = '0';
            }
        });
    });
});

function showThankYouMessage() {
    const message = document.getElementById('thank-you-message');
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 3000);
}
