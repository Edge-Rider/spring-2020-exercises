/**
 * load top 10 movies from an API endpoint
 * and render them as <li>s in a <ul>
 */
const loadMovies = () => {
    
    fetch('http://www.cbp-exercises.test/day26-php-oop-data-modelling/top10movies.php')
    .then(response => response.json())
    .then(data => {
        
        // find the list in the document
        let list = document.getElementById('top10movies');

        // clear the list (we don't want 3 clicks to produce 30 items)
        list.innerHTML = '';

        // for each of the strings that we got in the JSON
        data.forEach(movie_name => {

            // create a list item containing the string
            let item = document.createElement('li');
            item.innerHTML = movie_name;

            // append the list item to the list
            list.appendChild(item);
        })

    })
}


let button = document.getElementById('load_movies');

button.addEventListener('click', event => {
    loadMovies();
})