
let ratingModal = document.getElementById('rating-modal');
let ratingBtn = document.getElementById('rating-btn');
let ratingOpt = document.getElementById('rating-opt');
let feedbackValue = document.getElementById('feedback-value');
let answer;


ratingOpt.addEventListener('change', () => {
    answer = document.querySelector('input[name="rating"]:checked');
});

ratingBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let triggerModal = ratingBtn.dataset.modal;
    let feedbackModal = document.getElementById(triggerModal);

    feedbackValue.innerHTML = answer.value;
    ratingBtn.setAttribute('disabled', true);
    feedbackModal.classList.toggle('show');
    ratingModal.classList.toggle('show');
});

