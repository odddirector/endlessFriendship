const cammel = document.querySelector("#cammel");

appendEndless();

function appendEndless() {
    for (let index = 0; index < 200; index++) {
        const br = document.createElement("br");
        cammel.append(br);
        cammel.append(`        | |   | |   | | \\   || | | | \\    ||   /| | | || || |`);
    }
}

window.onscroll = function() {
    // append every 100 pixels
    if(window.scrollY % 100 == 0) {
        appendEndless();
    }
}