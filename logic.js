
/*  -    PROBLEM SOLVING
    create a etch-a-sketch - basically a 16xx16 grid where the user will pass
    the mouse over it and turn it into a black square, painting it

    First - create the grid - DONE
    Second - create the mouse event where it will turn the square black - DONE
    Third - add new colors, code refactor - DONE 
    forth - new ui and logic to reset the grid paint - DONE
 */

//global-section
const MainContainerDiv = document.querySelector(".MainContainer");


//board switch
let ExistingBoard = false;

let Color = "black";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};


function MouseoverIt(element){
  element.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`;
};

function Board(size){
  let screen = document.querySelector(".container");
    for(let i = 0; i < size;i++)
      {
        let column = document.createElement("div");
        column.classList.add("column");

        for(let j = 1;j <= size;j++)
          {
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.border = "2px solid black";
            row.setAttribute("style","height: 2px; width: 2px;padding: 1em;border: 1px solid black;")
            column.appendChild(row)
            
            //Event being set on every new created row div
            row.addEventListener("mouseover", function() {
              MouseoverIt(row);
          });

          }
          screen.appendChild(column);
      }
};
// the problem here is to update and clear,


function UpdateBoard(size){

  if(size == null || size >= 10000)
    {
      console.log("Creating a default size board");
      size = 256;
    }

    if(ExistingBoard == true)
      {
        let ContainerDiv = document.querySelector(".container");
        ContainerDiv.remove();
        ExistingBoard = false;

      };

      //creating new container

      const CreateNewContainerDiv = document.createElement("div");
      CreateNewContainerDiv.setAttribute("class","container");
      MainContainerDiv.appendChild(CreateNewContainerDiv);
      let NewContainerDiv = document.querySelector(".container");
    
      NewContainerDiv.setAttribute("style","height: auto; flex: 1 0 auto; display: flex;");

      //setting result
      let  SquaredResult = Math.sqrt(size);
      console.log(parseInt(SquaredResult));
      Board(SquaredResult);
      ExistingBoard = true;
};


//play button
const CreatePlayButton = document.createElement("button");
CreatePlayButton.setAttribute("id","playbutton");
MainContainerDiv.appendChild(CreatePlayButton);

CreatePlayButton.textContent = "PLAY";
const PlayButton = document.querySelector("#playbutton");

//grid button
const CreateButton = document.createElement("button");
CreateButton.setAttribute("id","userinput");

MainContainerDiv.appendChild(CreateButton);
CreateButton.textContent = "INSERT SQUARES";
const InsertGrid = document.querySelector("#userinput");


//event handler

PlayButton.addEventListener("click", () =>{
  UpdateBoard();
  console.log("Testing after function call");
});


InsertGrid.addEventListener("click",() =>{
  let userinp = prompt("Insert new grid size:");
  UpdateBoard(userinp);
});
