
function renderNametags(nametags) {
    var arr = [];
    for (var i = 0; i < nametags.length; i++) {
        let html = `
            <div class="nametag">
                <div class="nametag-header">Hello, my name is</div>
                <div class="nametag-body">
                    <h1>${nametags[i]}</h1>
                </div>
            </div>
        `;
        
        
        arr.push(html);
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