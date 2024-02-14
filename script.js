const story = {
    start: {
        text: "Raccoon Tarc sets out to find her Valentine. Where does she start?",
        choices: [
            {text: "Explore the forest", next: "forest"},
            {text: "Visit the town", next: "town"}
        ]
    },
    forest: {
        text: "Raccoon Tarc finds The Loose Man reading about Mongolian mythology. 'Fascinating, isn't it?' he muses. 'But I can only think of 10 things at a time, and this book takes up all my brain space!'",
        choices: [
            {text: "Laugh and continue", next: "lake"}
        ]
    },
    town: {
        text: "In the town, a wise owl tells Raccoon Tarc that The Loose Man was last seen by the lake, reading a hefty tome.",
        choices: [
            {text: "Head to the lake", next: "lake"}
        ]
    },
    lake: {
        text: "At the lake, The Loose Man, now free from his book, turns to Raccoon Tarc with a hopeful smile. 'Raccoon Tarc, will you be my Valentine?'",
        choices: [
            {text: "Yes", next: "endYes"},
            {text: "No", next: "endNo", id: "noButton"}
        ]
    },
    endYes: {
        text: "'Hooray!' exclaims The Loose Man. 'Let's make every day an adventure!'",
        choices: []
    },
    endNo: {
        text: "'Oh, that's okay,' The Loose Man says, 'I'm glad we had this adventure together.'",
        choices: []
    }
};

function displayScene(scene) {
    const sceneText = document.getElementById("story");
    sceneText.innerHTML = `<p>${story[scene].text}</p>`;

    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    story[scene].choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.id = choice.id || "";
        button.addEventListener("click", () => displayScene(choice.next));
        choicesContainer.appendChild(button);
    });

    if (scene === "lake") {
        document.getElementById("noButton").addEventListener("mouseover", function(event) {
            const newX = Math.random() * (window.innerWidth - this.clientWidth);
            const newY = Math.random() * (window.innerHeight - this.clientHeight);
            this.style.position = "absolute";
            this.style.left = `${newX}px`;
            this.style.top = `${newY}px`;
        });
    }
}

document.addEventListener("DOMContentLoaded", () => displayScene('start'));
