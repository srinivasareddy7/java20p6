const jokeElement = document.getElementById('joke');
const jokeButton = document.getElementById('new-joke');

async function fetchJoke() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        jokeElement.textContent = data.value;
    } catch (error) {
        jokeElement.textContent = 'Oops! Could not fetch a joke.';
    }
}

// Fetch a joke when the button is clicked
jokeButton.addEventListener('click', fetchJoke);

// Fetch a joke on page load
fetchJoke();
