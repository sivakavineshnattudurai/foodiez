document.getElementById('search').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    const recipesCards = document.querySelectorAll('.recipes-card');

    recipesCards.forEach(card => {
        const recipesName = card.querySelector('h3').textContent.toLowerCase();
        const recipesCuisine = card.querySelector('p').textContent.toLowerCase();

        if (recipesName.includes(query) || recipesCuisine.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

function openrecipes(page) {
    window.location.href = page;
}

/document.getElementById('reviewForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const reviewsContainer = document.querySelector('.reviews');

    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `
        <h3>${name}</h3>
        <p>${review}</p>
    `;

    reviewsContainer.appendChild(reviewElement);

    document.getElementById('reviewForm').reset();
});

document.getElementById('signinForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    if (!email.endsWith('@gmail.com')) {
        alert('Please use a Gmail address');
        event.preventDefault();
    }
});
