// # Instructions :
// >*En utilisant la methode getElementsByTagName*
// ### 1. Stock tous les titres h1 dans une variable et affiche le contenu de cette variable dans un console.log 
// ### 2. Après avoir récupéré tous les paragraphes, stock chaque sous titre h3 dans des variables différentes et affiches leur contenu dans un console.log différent
// ### 3. Après avoir récupéré tous les paragraphe, stock le second paragraphe et affiche dans un console.log
// ### 4. Après avoir récupéré tous les li, stock le 3eme li et affiche le dans un console.log
//  -->


// 1.
var h1 = document.getElementsByTagName("h1");
console.log(h1);

// 2.
var h3 = document.getElementsByTagName("h3")[0];
console.log(h3);
var h3_b = document.getElementsByTagName("h3")[1];
console.log(h3_b);
var h3_c = document.getElementsByTagName("h3")[2];
console.log(h3_c);

// 3.
var p = document.getElementsByTagName("p")[1];
console.log(p);

// 4.
var li = document.getElementsByTagName("li")[2];
console.log(li);