
function renderNametags(nametags) {
    var arr = [];
    for (var i = 0; i < nametags.length; i++) {
        arr.push(`<div>${nametags[i]}</div>`);
    };
    return `<div class="text-center mt-5">${arr.join(" ")}</div>`;
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}