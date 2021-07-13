let baseURL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

let logo = document.getElementById('ronLogo');
let quoteContainer = document.querySelector('.quoteContainer');
logo.addEventListener('click', fetchQuote);

async function fetchQuote() {
    let response = await fetch(baseURL);
    let json = await response.json();

    displayQuote(json);

    let logoContainer = document.getElementById('genQuote');
    logoContainer.removeChild(logo);
}

let displayQuote = json => {
    console.log(json);

    let quote = document.createElement('h1');
    quote.className = 'quote';
    quote.innerText = `"${json[0]}"`;
    quote.style = 'font-family: pinewood; color: #3a2718; font-weight: inherit';

    let quoteBy = document.createElement('p');
    quoteBy.id = 'quoteBy';
    quoteBy.innerText = '- Ron Swanson';
    quoteBy.style = 'font-size: 3rem; font-family: billionDreams; color: #3a2718';

    console.log(json[0].length);
    if (json[0].length >= 50 && json[0].length <= 150) {
        quote.style.fontSize = '5rem';
    } else if (json[0].length < 50) {
        quote.style.fontSize = '7rem';
    } else {
        quote.style.fontSize = '3.5rem';
    }

    let button = document.createElement('button');
    button.innerText = 'Another Please';
    button.className = 'reset';
    button.style = 'margin: 0; margin-top: 4em';

    quoteContainer.appendChild(quote);
    quoteContainer.appendChild(quoteBy);
    quoteContainer.appendChild(button);

    button.addEventListener('click', () => {
        quoteContainer.removeChild(quote);
        quoteContainer.removeChild(quoteBy);
        quoteContainer.removeChild(button);

        fetchQuote();
    })
}