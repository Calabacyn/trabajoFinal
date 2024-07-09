document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'd96c3dc58ee2d5ad9aaddc1edc92b1d4';
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1`;

    function fetchMovies(apiUrl) {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const track = document.querySelector('.carousel-track');
                data.results.forEach(movie => {
                    const div = document.createElement('div');
                    div.className = 'carousel-item';
                    div.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"><p>${movie.title}</p>`;
                    track.appendChild(div);
                });
            })
            .catch(error => console.error(`Error fetching data from API:`, error));
    }

    fetchMovies(apiUrl);

    // Agregar event listeners para los botones del carrusel
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', function() {
        const track = document.querySelector('.carousel-track');
        track.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', function() {
        const track = document.querySelector('.carousel-track');
        track.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
});