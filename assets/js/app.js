"user strict";
let categorie="";
let accesimg = "./assets/img/films/";
// ageREQUEST
let yourAge = document.getElementById('yourAge');
let popup = document.getElementById('popup');
function ok(){
    yourAge.style.display = "none";
    popup.style.display = "none";
    setCookie("age", "ok", 365);
}
function nook(){
    window.location = "http://disneychannel.fr.disney.be/";
}
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
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
  addBoxe2 : function(){
    console.log('Ajout du boxe 2');
    let boxe2 = document.getElementById('boxe2');

    for (var i = 0; i <= 11; i++) {
      boxe2.innerHTML += "<div class=\"film filterDiv "+app.db.data[i]['categorie']+"\">" +
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

      for (var i = 13; i < app.db.data.length; i++) {
        boxe22.innerHTML += "<div class=\"film filterDiv "+app.db.data[i]['categorie']+"\">" +
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
    filterSelection("all");
  }
}

app.db.data = [
	{
		"title"       : "Batman",
    "desc"        : "Lego Batman, le film est un film d'animation américano-australo-danois réalisé par Chris McKay, sorti en 2017. Il s'agit d'un film dérivé de La Grande Aventure Lego centré sur le personnage de Batman.",
		"annee"       : 2017,
		"categorie"		: "Comedie",
    "linkimg"     : "batmanmovie-2017-comedie.jpg",
		"linkyoutube" : "https://www.youtube.com/embed/dvJaSmunY7Y",
    "realisateur" : "Chris McKay",
    "acteurs"     : "With Will Arnett, Michael Cera, Rosario Dawson, Ralph Fiennes"
	},
  {
		"title"       : "Hostel",
    "desc"        : "Hostel, ou L'Auberge au Québec, est un film d'horreur américain écrit et réalisé par Eli Roth, sorti en 2006. Il s'agit du premier film de la série de films Hostel.",
		"annee"       : 2005,
		"categorie"		: "Thriller",
    "linkimg"     : "hostel-2005-thriller.jpg",
		"linkyoutube" : "https://www.youtube.com/embed/cVBdQiUHhZI",
    "realisateur" : "Eli Roth",
    "acteurs"     : "Carter McMullen. Thomas Kretschmann. Rôle : Flemming. John Hensley. Rôle : Justin. Sarah Habel. Rôle : Kendra. Barry Livingston."
	},
  {
		"title"       : "Inception",
    "desc"        : "Inception, ou Origine au Québec et au Nouveau-Brunswick, est un thriller de science-fiction américano-britannique écrit, réalisé et produit par Christopher Nolan, et sorti en 2010.",
		"annee"       : 2010,
		"categorie"		: "Science-fiction",
    "linkimg"     : "inception-2010-scifi.jpg",
		"linkyoutube" : "https://www.youtube.com/embed/PQvoKjade9k",
    "realisateur" : "Christopher Nolan",
    "acteurs"     : "Leonardo DiCaprio, Ellen Page, Cillian Murphy, Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Tom Hardy."
	},
  {
		"title"       : "Intouchables",
    "desc"        : "« Intouchables » c'est ce nom, c'est un film français sorti au 2012. Il parle de deux hommes de deux différent univers avec différent goût de vie, qui sont tout opposé pourtant ils sont réunis par l'amour et l'amitié.",
		"annee"       : 2011,
		"categorie"		: "Comedie",
    "linkimg"     : "intouchables-2011-comedie.jpg",
		"linkyoutube" : "https://www.youtube.com/embed/cXu2MhWYUuE",
    "realisateur" : "Olivier Nakache, Éric Toledano",
    "acteurs"     : "François Cluzet, Omar Sy"
	},
  {
		"title"       : "Le Patient Anglais",
    "desc"        : "Le Patient anglais est un film d'Anthony Minghella inspiré du roman L'Homme flambé de Michael Ondaatje et sorti en 1996.",
		"annee"       : 1996,
		"categorie"		: "Dramatique",
    "linkimg"     : "lepatientanglais-1996-dramatique.jpg",
		"linkyoutube" : "https://www.youtube.com/embed/FguRZAv_LS4",
    "realisateur" : "Anthony Minghella",
    "acteurs"     : "Ralph Fiennes, Kristin Scott Thomas, Willem Dafoe, Juliette Binoche, Colin Firth, Naveen Andrews."
	},
  {
		"title"       : "Les Deux Tours",
    "desc"        : "Le Seigneur des anneaux : Les Deux Tours est un film américano-néo-zélandais réalisé par Peter Jackson, sorti en 2002. Il est basé sur le deuxième tome du roman Le Seigneur des anneaux, de l'écrivain britannique J. R. R. Tolkien.",
		"annee"       : 2002,
		"categorie"		: "Aventure",
    "linkimg"     : "lesdeuxtours-2002-aventure.jpg",
		"linkyoutube" : "https://www.youtube.com/embed/c9blKqmyeV4",
    "realisateur" : "Peter Jackson",
    "acteurs"     : "Elijah Wood, Viggo Mortensen, Orlando Bloom"
	},
  {
		"title"       : "Seven",
    "desc"        : "Seven ou Sept au Québec est un thriller américain de David Fincher sorti en 1995. Le scénario est écrit par Andrew Kevin Walker et distribué par New Line Cinema. Wikipédia",
		"annee"       : 1995,
		"categorie"		: "Thriller",
    "linkimg"     : "seven-1995-thriller.jpg",
		"linkyoutube" : "https://www.youtube.com/embed/4IYMRiHAyB8",
    "realisateur" : "David Fincher",
    "acteurs"     : "Brad Pitt, Morgan Freeman"
	},
  {
		"title"       : "Shutter Island",
    "desc"        : "Shutter Island est un thriller psychologique américain de Martin Scorsese, sorti en février 2010. C'est l'adaptation du roman Shutter Island de Dennis Lehane.",
		"annee"       : 2010,
		"categorie"		: "Thriller",
    "linkimg"     : "shutterisland-2010-thriller.jpg",
		"linkyoutube" : "https://www.youtube.com/embed/inAFW2CluQ4",
    "realisateur" : "Martin Scorsese",
    "acteurs"     : "Leonardo DiCaprio, Mark Ruffalo"
	},
  {
		"title"       : "Star Wars Empire",
    "desc"        : "L'Empire contre-attaque est un film américain de science-fiction de type space opera sorti en 1980, co-écrit par George Lucas et Lawrence Kasdan, et réalisé par Irvin Kershner.",
		"annee"       : 1980,
		"categorie"		: "Science-fiction",
    "linkimg"     : "starwarsempire-1980-scifi.jpg",
		"linkyoutube" : "https://www.youtube.com/embed/JNwNXF9Y6kY",
    "realisateur" : "George Lucas, Lawrence Kasdan",
    "acteurs"     : "John Leguizamo, Denise Richards, Isabella Rossellini, Peter Sarsgaard"
	},
  {
		"title"       : "Survive Style 5",
    "desc"        : "Survive Style 5+ est un film japonais réalisé par Gen Sekiguchi, sorti le 7 août 2004.",
		"annee"       : 2004,
		"categorie"		: "Comedie",
    "linkimg"     : "Survivestyle5-2004-comedie.jpg",
		"linkyoutube" : "https://www.youtube.com/embed/LEH7nDkiPEk",
    "realisateur" : "Gen Sekiguchi",
    "acteurs"     : "Tadanobu Asano, Reika Hashimoto"
	},
  {
		"title"       : "Swiss Army Man",
    "desc"        : "Swiss Army Man est un film dramatique américain écrit et réalisé par Dan Kwan et Daniel Scheinert et sorti en 2016.",
		"annee"       : 2016,
		"categorie"		: "Comedie",
    "linkimg"     : "swissarmyman-2016-comedie.jpg",
		"linkyoutube" : "https://www.youtube.com/embed/yrK1f4TsQfM",
    "realisateur" : "Daniel Kwan, Daniel Scheinert",
    "acteurs"     : "Paul Dano, Daniel Radcliffe"
	},
  {
		"title"       : "The Fall",
    "desc"        : "The Fall est un film américano-britannico-indien réalisé par Tarsem Singh, sorti en 2006, Inspiré du scénario écrit par Valeri Petrov pour le film bulgare Yo Ho Ho réalisé par Zako Heskija en 1981.",
		"annee"       : 2006,
		"categorie"		: "Dramatique",
    "linkimg"     : "thefall-2006-dramatique.jpg",
		"linkyoutube" : "https://www.youtube.com/embed/IwsYyRc9j4g",
    "realisateur" : "Tarsem Singh",
    "acteurs"     : "Lee Pace, Catinca Untaru"
	},
  {
		"title"       : "What We Do In The Shadows",
    "desc"        : "Vampires en toute intimité est une comédie horrifique néo-zélandaise filmée sous la forme du documentaire dont la première projection a eu lieu en janvier 2014 au festival du film de Sundance.",
		"annee"       : 2014,
		"categorie"		: "Comedie",
    "linkimg"     : "WhatWeDoInTheShadows-2014-comedie.jpg",
		"linkyoutube" : "https://www.youtube.com/embed/IAZEWtyhpes",
    "realisateur" : "Taika Waititi, Jemaine Clement",
    "acteurs"     : "Jemaine Clement, Taika Waititi"
	},
  {
		"title"       : "Zoolander",
    "desc"        : "Zoolander est un film australo-germano-américain réalisé par Ben Stiller, sorti en 2001.",
		"annee"       : 2001,
		"categorie"		: "Comedie",
    "linkimg"     : "zoolander-2001-comedie.jpg",
		"linkyoutube" : "https://www.youtube.com/embed/k_s4gnrYkUA",
    "realisateur" : "Ben Stiller",
    "acteurs"     : "Ben Stiller, Owen Wilson"
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
$(document).ready(function(){

  $("#upbody").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  $("#ouicookie").click(function() {
    $("#cookiespop").hide(1000);
    setCookie("username", "user", 365);
    console.log(getCookie(user));
  });
  $("#noncookie").click(function() {
    $("#cookiespop").hide(1000);
  });

  $(".film").click(function() {
    var cefilm = $(this).index();
    console.log(cefilm);
    openBoxeClickFilm(cefilm);
  });
});

function openBoxeClickFilm(idfilm){
  let dividfilm = document.getElementById('filminfomodal');
  dividfilm.innerHTML = "<div class=\"form-group\"><iframe width=\"420\" height=\"315\" src=\"" + app.db.data[idfilm]['linkyoutube'] +"\" frameborder=\"0\" allowfullscreen></iframe> </div>"+
  "<div class=\"form-group\"><label for=\"usr\">Titre :</label> "+ app.db.data[idfilm]['title'] +"</div>"+
    "<div class=\"form-group\"><label for=\"usr\">Description :</label></br>"+ app.db.data[idfilm]['desc'] +"</div>"+
      "<div class=\"form-group\"><label for=\"usr\">Réalisateur(s) :</label> "+ app.db.data[idfilm]['realisateur'] +"</div>"+
        "<div class=\"form-group\"><label for=\"usr\">Acteurs :</label> "+ app.db.data[idfilm]['acteurs'] +"</div>";
  $("#openboxeinfo").modal();

}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {

    var user = getCookie("username");
    var userr = getCookie("age");
    if (user != "") {
        $("#cookiespop").hide();
    } else {
        $("#cookiespop").show();
    }

    if (userr == "ok")
      {ok();}
}
