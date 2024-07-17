let newDiv = document.createElement("div");

newDiv.setAttribute("id","container")

document.body.appendChild(newDiv);

let divContainer = document.getElementById("container");
divContainer.style.height = "50vw";
divContainer.style.backgroundColor="Violet";

function clickEvent(){
    alert("hi there");
}

function mouseOverEvent(){
    divContainer.style.backgroundColor = "red";
}

function mouseOutEvent(){
    divContainer.style.backgroundColor = "blue";
}

// divContainer.addEventListener("click", function(){alert("hi")});
divContainer.addEventListener("click", clickEvent);
divContainer.addEventListener("mouseover",mouseOverEvent);
divContainer.addEventListener("mouseout",mouseOutEvent)


// .innerHTML
// .innerText

let sampleBox = document.getElementById("sampleBox");

for(i=0;i<3;i++){
    sampleBox.innerHTML+="<p>helo</p>";
}

let arraySample = ["Arif", "Cat", "Dog"];

for(i=0;i<arraySample.length;i++){
    sampleBox.innerHTML+=`<p>hello ${arraySample[i]}</p>`;
}

