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


// The drawing event handlers


function addGridEventHandlers (CSSClass) {
    const gridDivs = document.querySelectorAll(`div.${CSSClass}`);
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
}


// Create the grid


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
    // Add the event handlers to every div
    addGridEventHandlers(CSSClass);
    // Create UI
    printGridSize();
    activateClearButton();
}


// Get grid size from web page


function getGridValue () {
    const range = document.getElementById("myRange");
    return value = range.value;
}

// UI functions

function printGridSize () {
    const size = getGridValue();
    const sizeDiv = document.getElementById("gridSize");
    // delete existing par
    if (sizeDiv.hasChildNodes) {
        sizeDiv.removeChild(sizeDiv.firstChild);
    }
    const sizePar = document.createElement("p");
    sizePar.textContent = `Pick your grid size (current value is ${size}):`;
    sizeDiv.appendChild(sizePar);
}

function activateClearButton () {
    const clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", function () {
        const traceDivs = document.querySelectorAll("div.trace");
        traceDivs.forEach(traceDiv => traceDiv.classList.remove("trace"));
    });
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