
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    var newArr = circles.map(function(element) {
        return `
            <div style="width:${element.radius}px;height:${element.radius}px;border:1px solid ${element.color};border-radius:${element.radius}px;background-color:${element.color};"></div>`;
    });
    return `<div class="text-center mt-5">${newArr.join("")}</div>`;
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}