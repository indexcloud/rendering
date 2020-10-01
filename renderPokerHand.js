
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    return `
        <div class="text-center mt-5">
            ${pokerHand.map(element => `<img src="cards/${element.value}${element.suit}.png">
            </img>`)}
        </div>
    `
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}