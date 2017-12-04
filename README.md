# allez-cine

Vendredi: nous avons crée un trello avec un post-it par tâche spécifique. de la construction de la strucure html à la fonction js d'apparition des filtres. sans rentrer toutefoi dans les détails d'exécution. Nous leurs avons attribué une couleur par techno nécessaire. html css js - bootstrap jquery.

Jonathan
--------
* Création de la structure du template (dimensions header, corps, footer). J'ai ensuite incorporé bootstrap css/js. <br />
* J'ai créé une base de donnée JSON comportant tous les films et leurs détails. Par la suite, j'ai créé un grand objet "app" qui contient toutes les fonctions et données.
* En commençant par le header, j'ai créé la barre de recherche et un bouton login (ouvrant un modal lorsqu'on clique dessus avec les inputs demandés), tout cela à l'aide de bootstrap.
* J'ai inclu une librairie pour le slide en effectuant quelques modifications (couleurs, tailles).
* Appels à la base de donnée JSON : je fais apparaître les films et les infos par des boucles. Je crée également un filtre (menu) pour trier les films par genre. J'ajoute également le bouton "plus de films" et "moins de films".
* J'ajoute le "contact US" ainsi que les boutons "social media" et le formulaire de contact.
* Je crée le footer.
* Je crée également un "box" qui demander l'acceptation ou non des cookies (avec cookies engregistrés dans le navigateur).
* Je termine par faire quelques modifications du site web en général pour le côté responsive.


Elisa
-----
Absente lundi, je ne participet pas à la construction de la structure de base du projet. 
**barre de navigation**: Par la suite j'ai participé à la création du script pour la __barre de navigation__. Je ne m'étais pas rendue compte mais j'utilisais la version 4 de bootstrap alors que le reste du site était en bootstrap 3.7 et j'ai donc mis énormement de temps à réussir à le faire fonctionner mais le script de bootstrap 4 entra en conflit avec d'autres éléments du site et au final on a du le refaire en bootstrap 3.7.
**demande d'age à l'entrée du site**: Par la suite j'ai crée le message d'acceuil qui __demande l'age de la personne__ et la redirige vers un site disney s'il a en dessous de 16ans. Pour cela j'ai utilisé des boutons et l'objet app crée par Jonathan où j'ai inclu une fonction qui redirige au click la personne. 
**shop movies**: Finalement j'ai crée la srtucture du __shop movies__. En utilisant l'objet app j'ai réussi à faire apparaitre les différentes affiches de films. aussi faire apparaitre les information ainsi que le lien youtube. Par contre je ne parvenais pas à céer la focntion qui fait que le bon trailer+info s'affiche en fonction de l'affiche. C'est jonathan qui l'a crée en Jquery. 

Au final j'aurai appris à utiliser bootstrap et à jouer un peu avec un objet app en js strict.

