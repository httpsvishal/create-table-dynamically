
const main = document.querySelector("main");
const form = document.querySelector("form");
let reset = document.createElement("button");
let heading = document.getElementsByClassName("heading");
reset.innerText = "Reset";

const handleSubmit = (e) => {
    e.preventDefault();

    const rows = document.getElementById("rows").value;
    const columns = document.getElementById("columns").value;
    
    let table = document.createElement("table");
    table.setAttribute("border","1");

    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            let column = document.createElement("td");
            column.style.padding = "25px";
            row.append(column);
        }
        console.log(row);
        table.append(row);
    }

    
    heading[0].innerText = "Here is your Table !!";
    main.append(table);
    form.remove();
    main.append(reset);
}

const handleReset = (e)=>{
    const table = document.querySelector("table");
    
heading[0].innerText = "Dynamically Generate Your Table";
    e.preventDefault();
    table.remove();
    reset.remove();
    main.append(form);
}

form.addEventListener("submit", handleSubmit);

reset.addEventListener("click",handleReset);

