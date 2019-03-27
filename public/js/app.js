const popular = document.getElementById('popular');

popular.addEventListener('click', (e) => {
    fetch('local:3000/discover/popular').then(response => {
        console.log(response.json());
    });
});