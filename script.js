var container = document.getElementById('container');

function createGrid(x){
    for(var rows = 0; rows < x; rows++){
        for(var cols = 0; cols < x; cols++){
            var grid = document.createElement('div');
            grid.classList.add('grid');
            container.appendChild(grid);
            console.log("created");
            grid.style.width = 960/x + "px";
            grid.style.height = 960/x + "px";
        };
    };

   
};

createGrid(16);

const pixel = document.getElementsByClassName('grid');

onmouseover = (event) =>{
    if(event.target.closest('.grid')){
    event.target.classList.add('dark');
    console.log("jelllo");
    }
}

const button = document.getElementById('newGrid');

button.onclick = () =>{
    var size = prompt("What is the dimension of grid you want to create??");
    var k = parseInt(size);
    console.log(k);
    container.replaceChildren();
    createGrid(k);
}



