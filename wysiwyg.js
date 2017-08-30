console.log("Comedians");

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
  image: "https://www.thefamouspeople.com/profiles/images/buster-keaton-3.jpg",
  lifespan: {
    birth: 1895,
    death: 1966
  }
}
];



var textBox = document.getElementById("text-holder");
var comedianContainer = document.getElementById("comedian-container");
var counter = 0;
var outputEl = document.getElementById("outputEl");
for (; counter < 5; counter++) {

function comedianString(){
  console.log("WHOAH");
	var domString = '';
	for (var i = 0; i < comedianArray.length; i++) {
  	domString+=`<div class="person-container" id="person-${counter}">`;
  	domString+=			`<header>`;
    domString+=         `<h4>${comedianArray[i].title}, ${comedianArray[i].name}</h4>`;
    domString+=      `</header>`;
  	domString+=      `<section>`;
    domString+=        `<img src='${comedianArray[i].image}'>`;
    domString+=			    `<p class="bio">${comedianArray[i].bio}</p>`;
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
  comedianContainer.innerHTML = string;
}
}

comedianString();












