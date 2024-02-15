const story = {
    start: {
        text: "Raccoon Tarc embarks on a whimsical journey, one where she has to have an adventure, but make choices -- almost as if she is choosing her own adventure. As she reaches a crossroads, she must decide where to go...",
        img: "images/start.jpg.jpg",
        choices: [
            {text: "Venture deeper into the forest", next: "forest"},
            {text: "Head towards the twinkling town", next: "town"}
        ]
    },
    forest: {
        text: "The forest, almost guiding Raccoon Tarc along the path, winds and reveals a beautiful clearing with a book in the center.",
        img: "images/forest.jpg.jpg",
        choices: [
            {text: "Examine the book", next: "book"},
            {text: "Continue on her path", next: "lake"}
        ]
    },
    town: {
        text: "The town sparkles under the moonlight, its streets bustling with festivities of Valentines day. Raccoon Tarc, using her nocturnal vision, spies a wizened looking fellow, who beckons her over.",
        img: "images/town.jpg.jpg",
        choices: [
            {text: "Approach the figure", next: "figure"},
            {text: "Explore the town square", next: "square"}
        ]
    },
    book: {
        text: "The book whispers tales of a legendary figure known as 'The Loose Man', a wanderer of realms, whose heart seeks a true companion. Raccoon Tarc feels a strange connection.",
        img: "images/book.jpg.jpg",
        choices: [
            {text: "Seek out The Loose Man", next: "lake"}
        ]
    },
    figure: {
        text: "The fellow, an emissary of a more powerful fellow gifts Tarc a luminescent flower. 'The Loose Man awaits by the mirror lake,' they whisper, teleporting away.",
        img: "images/figure.jpg.jpg",
        choices: [
            {text: "Go to the mirror lake", next: "lake"}
        ]
    },
    square: {
        text: "The town square, filled with dancing animals of all kinds, is almost alive with joy. Amidst the laughter, a bard turtle sings of a love lost by the lake, stirring Raccoon Tarc's heart.",
        img: "images/square.jpg.jpg",
        choices: [
            {text: "Follow the song's trail", next: "lake"}
        ]
    },
    lake: {
        text: "As Raccoon Tarc approaches the lake, she spots The Loose Man reading about Mongolian mythology. 'Fascinating, isn't it?' he muses. 'But I can only think of 10 things at a time, and this book takes up all my brain space!' When he spots Raccoon Tarc, he is befuddled by her beauty. 'Will you be my Valentine!' he cries out, astonished that such a powerful Procyon would visit him.",
        img: "images/lake.jpg.jpg",
        choices: [
            {text: "Yes, with all my heart", next: "endYes"},
            {text: "I cherish our friendship", next: "endNo"}
        ]
    },
    endYes: {
        text: "'Hooray!' exclaims The Loose Man. 'Let's make every day an adventure! A Choose Your Own Adventure!'",
        img: "", // Assuming no image here; add path if necessary
        choices: []
    },
    endNo: {
        text: "Though not as lovers, Tarc and The Loose Man vowed to wander the realms together, their bond unbreakable, their adventures endless.",
        img: "", // Assuming no image here; add path if necessary
        choices: []
    }
};

function displayScene(scene) {
    const sceneText = document.getElementById("story");
    const sceneImage = document.getElementById("scene-image");
    sceneText.innerHTML = `<p>${story[scene].text}</p>`;
    sceneImage.src = story[scene].img;
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    story[scene].choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.addEventListener("click", () => displayScene(choice.next));
        if (choice.text === "I cherish our friendship") {
            button.addEventListener("mouseover", () => {
                const newX = Math.random()
button.addEventListener("mouseover", () => {
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;
    button.style.position = "absolute";
    button.style.left = newX + "px";
    button.style.top = newY + "px";
});
