"user strict";
let categorie="";
let accesimg = "./assets/img/films/";

let app = {
  db : {
    data : []
  },
  addBoxe1 : function(){
    console.log('Ajout du boxe 1');
    let boxe1 = document.getElementById('boxe1');
    for (var i = 0; i < 6; i++) {
      boxe1.innerHTML += "<div class=\"film\">" +
      "<img src=\"" + accesimg + app.db.data[i]['linkimg'] + "\" width=\"150px\"> <br>" +
      "<div class=\"gris marginOne\">" + app.db.data[i]['title'] + "</div>" +

          "<div style=\"float:left\" class=\"gris\">"+
          app.db.data[i]['annee'] +
          "</div>" +
          "<div style=\"float:right\">"+
          app.db.data[i]['categorie'] +
          "</div>" +
      "</div>";

    }
  },
  addCategories : function(){
    console.log('Ajout des catégories au boxe 2');
    let categories = document.getElementById('categories');
    let tab=[];
    for (var i = 0; i < 10; i++) {
        let cat = app.db.data[i]['categorie'];
        if (tab.indexOf(cat) > -1) {}
        else { tab.push(cat);}
        console.log(tab[i]);
    }

    for (var i = 0; i < tab.length; i++) {
      categories.innerHTML += "<div class=\"cat\">" +
          tab[i] +
      "</div>";
    }
  },
  addBoxe2 : function(){
    console.log('Ajout du boxe 2');
    let boxe2 = document.getElementById('boxe2');

    for (var i = 0; i < 12; i++) {
      boxe2.innerHTML += "<div class=\"film\">" +
      "<img src=\"" + accesimg + app.db.data[i]['linkimg'] + "\" width=\"150px\"> <br>" +
      "<div class=\"gris marginOne\">" + app.db.data[i]['title'] + "</div>" +

          "<div style=\"float:left\" class=\"gris\">"+
          app.db.data[i]['annee'] +
          "</div>" +
          "<div style=\"float:right\">"+
          app.db.data[i]['categorie'] +
          "</div>" +
      "</div>";
    }
      console.log('Ajout du boxe 2-2');
      let boxe22 = document.getElementById('boxe22');

      for (var i = 10; i < app.db.data.length; i++) {
        boxe22.innerHTML += "<div class=\"film\">" +
        "<img src=\"" + accesimg + app.db.data[i]['linkimg'] + "\" width=\"150px\"> <br>" +
        "<div class=\"gris marginOne\">" + app.db.data[i]['title'] + "</div>" +

            "<div style=\"float:left\" class=\"gris\">"+
            app.db.data[i]['annee'] +
            "</div>" +
            "<div style=\"float:right\">"+
            app.db.data[i]['categorie'] +
            "</div>" +
        "</div>";

    }
  },
  start : function(){
    app.addBoxe1();
    app.addBoxe2();
    app.addCategories();

  }
}

app.db.data = [
	{
		"title"       : "Batman",
    "desc"        : "test",
		"annee"       : 2017,
		"categorie"		: "Comedie",
    "linkimg"     : "batmanmovie-2017-comedie.jpg",
		"linkyoutube" : ""
	},
  {
		"title"       : "Hostel",
    "desc"        : "",
		"annee"       : 2005,
		"categorie"		: "Thriller",
    "linkimg"     : "hostel-2005-thriller.jpg",
		"linkyoutube" : ""
	},
  {
		"title"       : "Inception",
    "desc"        : "",
		"annee"       : 2010,
		"categorie"		: "Science-fiction",
    "linkimg"     : "inception-2010-scifi.jpg",
		"linkyoutube" : ""
	},
  {
		"title"       : "Intouchables",
    "desc"        : "",
		"annee"       : 2011,
		"categorie"		: "Comedie",
    "linkimg"     : "intouchables-2011-comedie.jpg",
		"linkyoutube" : ""
	},
  {
		"title"       : "Le Patient Anglais",
    "desc"        : "",
		"annee"       : 1996,
		"categorie"		: "Dramatique",
    "linkimg"     : "lepatientanglais-1996-dramatique.jpg",
		"linkyoutube" : ""
	},
  {
		"title"       : "Les Deux Tours",
    "desc"        : "",
		"annee"       : 2002,
		"categorie"		: "Aventure",
    "linkimg"     : "lesdeuxtours-2002-aventure.jpg",
		"linkyoutube" : ""
	},
  {
		"title"       : "Seven",
    "desc"        : "",
		"annee"       : 1995,
		"categorie"		: "Thriller",
    "linkimg"     : "seven-1995-thriller.jpg",
		"linkyoutube" : ""
	},
  {
		"title"       : "Shutter Island",
    "desc"        : "",
		"annee"       : 2010,
		"categorie"		: "Thriller",
    "linkimg"     : "shutterisland-2010-thriller.jpg",
		"linkyoutube" : ""
	},
  {
		"title"       : "Star Wars Empire",
    "desc"        : "",
		"annee"       : 1980,
		"categorie"		: "Science-fiction",
    "linkimg"     : "starwarsempire-1980-scifi.jpg",
		"linkyoutube" : ""
	},
  {
		"title"       : "Survive Style 5",
    "desc"        : "",
		"annee"       : 2004,
		"categorie"		: "Comedie",
    "linkimg"     : "Survivestyle5-2004-comedie.jpg",
		"linkyoutube" : ""
	},
  {
		"title"       : "Swiss Army Man",
    "desc"        : "",
		"annee"       : 2016,
		"categorie"		: "Comedie",
    "linkimg"     : "swissarmyman-2016-comedie.jpg",
		"linkyoutube" : ""
	},
  {
		"title"       : "The Fall",
    "desc"        : "",
		"annee"       : 2006,
		"categorie"		: "Dramatique",
    "linkimg"     : "thefall-2006-dramatique.jpg",
		"linkyoutube" : ""
	},
  {
		"title"       : "What We Do In The Shadows",
    "desc"        : "",
		"annee"       : 2014,
		"categorie"		: "Comedie",
    "linkimg"     : "WhatWeDoInTheShadows-2014-comedie.jpg",
		"linkyoutube" : ""
	},
  {
		"title"       : "Zoolander",
    "desc"        : "",
		"annee"       : 2001,
		"categorie"		: "Comedie",
    "linkimg"     : "zoolander-2001-comedie.jpg",
		"linkyoutube" : ""
	}
]
app.start();
/*JQUERY CODE*/
function openBoxe22(){
  $(document).ready(function(){
    $("#boxe22").toggle(500);
    $("#plusdefilm").toggle();
    $("#moinsdefilm").toggle();

  });
}

/*slider*/
