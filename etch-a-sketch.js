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
    // First delete old grid, if any.
    if (container.hasChildNodes) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    let counter = 0;
    while (counter < numberRows) {
        myRow = makeRow(numberRows, CSSClass);
        myRow.setAttribute("id", `Row-${counter}`);
        container.appendChild(myRow);
        counter++;
    }
}

function getGridValue () {
    const range = document.getElementById("myRange");
    return value = range.value;
}

// Create the grid

makeGrid(getGridValue(), "grid");

// Create new grid on slider changes

const slider = document.getElementById("myRange");
slider.addEventListener(
    "change", function () {
        makeGrid(getGridValue(), "grid");
    }
);

// Drawing event handlers

const gridDivs = document.querySelectorAll("div.grid");
gridDivs.forEach(gridDiv => gridDiv.addEventListener(
    'mousemove', function (e) {
        if (e.buttons == 1) {
            gridDiv.classList.add("trace");
        }
    })
);
// Prevent dragging action
gridDivs.forEach(gridDiv => gridDiv.addEventListener(
        "dragstart", function (e) {
            e.preventDefault();
        }
    )
);