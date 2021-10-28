const sides = document.querySelectorAll(".side-input");
const checkAreaBtn = document.querySelector("#check-area-btn");
const outputEl = document.querySelector("#output");

function calculateProductOfSides(Base, Height) {
    const productOfSides = Base * Height;
    return productOfSides;
}

function calculateArea() {
    const productOfSides = calculateProductOfSides(Number(sides[0].value), Number(sides[1].value));
    const areaOfTriangle = (1/2 * productOfSides);
    outputEl.innerText = "The area of the triangle is " + areaOfTriangle + " " +  "cm²";
}

checkAreaBtn.addEventListener("click", calculateArea);