const body = document.querySelector("body"),
    footer = document.querySelector("footer"),
    quote = footer.querySelector(".js-quote"),
    author = footer.querySelector(".js-author");

const IMAGES = 8;

const quotArray = [
    {
        quote: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder"
    },
    {
        quote: "Do not try to be original, just try to be good.",
        author: "Paul Rand"
    },
    {
        quote: "Do not be afraid to give up the good to go for the great.",
        author: "John D. Rockerfeller"
    },
    {
        quote: "Wake the f**k up samurai. We have a city to burn.",
        author: "Johnny Silverhand"
    },
    {
        quote: "Our greatest weakness lies in giving up.",
        author: "Thomas Edison"
    },
    {
        quote: "If you really want to do something, you'll find a way.",
        author: "Jim Rohn"
    },
    {
        quote: "The only thing worse than starting something and failing is not starting something.",
        author: "Seth Gobin"
    },
    {
        quote: "I don't like my appearance.",
        author: "Won Bin"
    }
]

function writeQuote(imgNumber) {
    quote.innerText = quotArray[imgNumber].quote;
    author.innerText = `- ${quotArray[imgNumber].author} -`;
}

function paintBG(imgNumber) {
    const image = new Image();
    image.src = `./images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandomNum(input) {
    const number = Math.floor(Math.random() * input);
    return number;
}

function init() {
    const randomNumber = genRandomNum(IMAGES);
    paintBG(randomNumber);
    writeQuote(randomNumber);
}

init();