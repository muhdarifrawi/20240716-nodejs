let newDiv = document.createElement("div");

newDiv.setAttribute("id","container")

document.body.appendChild(newDiv);

let divContainer = document.getElementById("container");
// divContainer.style.height = "10vw";
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

function validateUsername(){
    let username = document.getElementById("username");
    let usernameLength = username.value.length;
    let usernameAlert = document.getElementById("username-alert");
    usernameAlert.innerText = "";
    // console.log(usernameLength);

    if(usernameLength > 12){
        // console.log("username too long");
        usernameAlert.innerText += "Username too long";
        usernameAlert.style.color = "red";
    }
    else{
        // console.log("username okay");
        usernameAlert.innerText += "Username okay";
        usernameAlert.style.color = "green";
    }
}

let formSubmitBtn = document.getElementById("form-submission");
// formSubmitBtn.addEventListener("click", validateUsername);

function validateUsernameByChange(){
    // console.log(this.value)
    let usernameLength = this.value.length;
    let usernameAlert = document.getElementById("username-alert");
    usernameAlert.innerText = "";
    // console.log(usernameLength);

    if(usernameLength > 12){
        // console.log("username too long");
        usernameAlert.innerText += "Username too long";
        usernameAlert.style.color = "red";
    }
    else{
        // console.log("username okay");
        usernameAlert.innerText += "Username okay";
        usernameAlert.style.color = "green";
    }
}

let username = document.getElementById("username");
username.addEventListener("change", validateUsernameByChange)

