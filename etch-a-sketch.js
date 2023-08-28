// Grid creation functions


function makeDiv (CSSClass) {
    const myDiv = document.createElement("div");
    myDiv.classList.add(CSSClass);
    return myDiv;
}


function makeRow (numberRows, CSSClass) {
    const myRow = document.createElement("div");
    let counter = 0;
    while (counter < numberRows) {
        myDiv = makeDiv(CSSClass);
        myRow.appendChild(myDiv);
        counter++;
    }
    return myRow;
}


function makeGrid (numberRows, CSSClass) {
    const container = document.getElementById("container");
    let counter = 0;
    while (counter < numberRows) {
        myRow = makeRow(numberRows, CSSClass);
        myRow.setAttribute("id", `Row-${counter}`);
        container.appendChild(myRow);
        counter++;
    }
}

// Create the grid

makeGrid(16, "grid");

// Event handlers

const gridDivs = document.querySelectorAll("div.grid");
gridDivs.forEach(gridDiv => gridDiv.addEventListener(
    'mousemove', function (e) {
        if (e.button == 0){ // werkt niet
            gridDiv.classList.add("trace");
        }
    })
);