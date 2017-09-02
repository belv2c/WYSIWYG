console.log("Comedians");

//Creates an array of my favorite comedians
var comedianArray = [
{
  title: "Comedian",
  name: "Steven Wright",
  bio: "An American stand-up comedian known for his distinctly lethargic voice and slow, deadpan delivery of ironic, philosophical, and sometimes nonsense jokes, paraprosdokians, non sequiturs, anti-humor, and one-liners with contrived situations.",
  image: "http://nofilmschool.com/sites/default/files/uploads/2014/07/Stephen-Wright.jpg",
  lifespan: {
    birth: 1955,
    death: "Still alive"
  }
},

{
  title: "Comedian",
  name: "Aziz Ansari",
  bio: "An American actor, comedian & filmmaker best known for his role as Tom Haverford on the NBC series Parks and Recreation (2009–2015) and as creator, writer and star of the Netflix series Master of None, which debuted in 2015.",
  image: "http://www.summitcomedy.com/wp-content/uploads/2017/05/aziz-ansari.png",
  lifespan: {
    birth: 1983,
    death: "Still alive"
  }
},

{
  title: "Comedian",
  name: "Buster Keaton",
  bio: "An American actor, comedian, film director, producer, screenwriter, and stunt performer. He was best known for his silent films, in which his trademark was physical comedy with a consistently stoic, deadpan expression, earning him the nickname, The Great Stone Face.",
  image: "http://americancinemathequecalendar.com/sites/default/files/stills_events_390_240/buster_keaton390_3.jpg?1424385076",
  lifespan: {
    birth: 1895,
    death: 1966
  }
}
];

//Defining variables
var inputContainer = document.getElementById("input");
var bioContainer = document.getElementsByClassName("bio-input");
var personHeader = document.getElementsByClassName("header-container");
var textBox = document.getElementById("text-holder");


//Now outputEl will have elements in it
var counter = 0;
var outputEl = document.getElementById("output-element");
for (counter; counter < 5; counter++) {

//Domstring building the structure of each comedian container
function comedianString(){
  console.log("WHOAH");
	var domString = '';
	for (var i = 0; i < comedianArray.length; i++) {
  	domString+=`<div class="person-container" id="person-${counter}">`;
  	domString+=			`<header class="header-container">`;
    domString+=         `<h4>${comedianArray[i].title}, ${comedianArray[i].name}</h4>`;
    domString+=      `</header>`;
  	domString+=      `<section>`;
    domString+=        `<img src='${comedianArray[i].image}'>`;
    domString+=			    `<p class="bio">${comedianArray[i].bio}</p>`;
    domString+=          `<p class="bio-input"></p>`;
    domString+=     `</section>`;
    domString+=     `<footer>`;
    domString+=         `<h3>Birth: ${comedianArray[i].lifespan.birth}</h6>`;
    domString+=         `<h3>Death: ${comedianArray[i].lifespan.death}</h6>`;
    domString+=     `</footer>`;
  	domString+=	`</div>`;
	  }
    writeToDom(domString);
}


function writeToDom(string){
  outputEl.innerHTML = string;
  }
}

//Prints comedianString function
comedianString();

//Storing the person container div into containerEl variable
var containerEl = document.getElementsByClassName("person-container");

//Creates a global variable 
var selectedCard;

//Event listeners are created
for (var j = 0; j < containerEl.length; j++) {
  containerEl[j].addEventListener("click", setSelectedCard);
}

//Looping through length of containerEl and triggering the CSS border element
function newBorder(){
  for (var j = 0; j < containerEl.length; j++) {
    containerEl[j].classList.remove("border");
  }
    selectedCard.classList.add("border");
}

//Targets each element within the person-container div 
function setSelectedCard(event){
  console.log(event);
  if (event.target.classList.contains("person-container")){
    selectedCard = event.target;
  } else if (event.target.parentNode.classList.contains("person-container")){
    selectedCard = event.target.parentNode;
  } else if (event.target.parentNode.parentNode.classList.contains("person-container")){
    selectedCard = event.target.parentNode.parentNode;  
  }
  //Calls the newBorder function - when you click on an element the border around each container changes
  newBorder(); 

  //Adds focus listener to the inputContainer
  inputContainer.focus();
}

input.addEventListener("keyup", typeBio);

//Function targets the bio element of each container, loops through the container elements, and mirrors the input into the bio section
function typeBio(event){
  var newBio = selectedCard.childNodes[1].childNodes[1];
  for (var k = 0; k < containerEl.length; k++) {
    if (containerEl[k].classList.contains("border")) {
      newBio.innerHTML = `<p>${input.value}</p>`;
    }
  }
  //If the user presses enter, the bio paragraph reverts to blank
  if (event.keyCode === 13) {
    input.value = "";
  }
}










