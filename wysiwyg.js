var comedianArray = [
{
  title: "Comedian",
  name: "Steven Wright",
  bio: "An American stand-up comedian known for his distinctly lethargic voice and slow, deadpan delivery of ironic, philosophical, and sometimes nonsense jokes, paraprosdokians, non sequiturs, anti-humor, and one-liners with contrived situations.",
  image: "https://en.wikipedia.org/wiki/Steven_Wright#/media/File:Steven_Wright_1994.jpg",
  lifespan: {
    birth: 1955,
    death: "Still alive"
  }
},

{
  title: "Comedian",
  name: "Aziz Ansari",
  bio: "An American actor, comedian & filmmaker best known for his role as Tom Haverford on the NBC series Parks and Recreation (2009–2015) and as creator, writer and star of the Netflix series Master of None, which debuted in 2015.",
  image: "https://en.wikipedia.org/wiki/Aziz_Ansari#/media/File:Aziz_Ansari_2012_Shankbone.JPG",
  lifespan: {
    birth: 1983,
    death: "Still alive"
  }
},

{
  title: "Comedian",
  name: "Buster Keaton",
  bio: "An American actor, comedian, film director, producer, screenwriter, and stunt performer. He was best known for his silent films, in which his trademark was physical comedy with a consistently stoic, deadpan expression, earning him the nickname, The Great Stone Face.",
  image: "https://en.wikipedia.org/wiki/Buster_Keaton#/media/File:Busterkeaton_edit.jpg",
  lifespan: {
    birth: 1895,
    death: 1966
  }
}];

var textBox = document.getElementById("text-holder");
var comedianDiv = document.getElementById("comedian-container");

function buildPersonString() {
	var personString = "";
	for(var i=0; i<comedianArray.length; i++); {
	personString+=`<div id="comedian-container">`;
	personString+=		`<person>`;
	personString+=			`<header>${comedianArray[i].title}, ${comedianArray.name}</header>`;
	personString+=			`<section>${comedianArray[i].bio}, ${comedianArray.image}</section>`;
	personString+=		`</person>`;
	personString+=	`</div>`;
	
}
}











