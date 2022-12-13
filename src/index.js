const init = () => {
  // Adding an event listener to the form
const inputForm = document.querySelector('form');

//A callback function to add the event
inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(event);
    // console.log(event.target.children[1].value);
    // Accessing an input from a user
    const input = document.querySelector('input#searchByID');

    console.log(input.value);

    // The fetch function
    let baseUrl = `http://localhost:3000/movies/${input.value}`;
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        //We have a section with the id #movieDetails
        
        //Display the retrieved data on the page
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        // Changing the contents of our title and summary
        title.innerText = data.title;
        summary.innerText = data.summary;

    })
});
}

document.addEventListener('DOMContentLoaded', init);

