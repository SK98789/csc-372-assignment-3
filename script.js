/*
  Name: Sadie Korzekwa
  Date: 09.26.2025
  CSC 372-01

  This is the script.js page for my blog post. It adds the favorites functionality to the base
  index.html page, and it creates a running total at the end of the favorites list.

*/



var dishes = document.querySelectorAll(".dish_card");
var favorites = [];
var favoriteCards = [];
var total = 0.00;

//Create favorites button for each card and add an event listener
//For button clicking
for(let i = 0; i < dishes.length; i++){
    let favoritesButton = document.createElement("button");
    favoritesButton.textContent = "Add to Favorites  \u{2665}";
    dishes[i].appendChild(favoritesButton);


    let pricePara = document.createElement("p");
    priceParaContent = document.createTextNode(dishes[i].dataset.price);
    pricePara.appendChild(priceParaContent);
    let dishTitle = dishes[i].querySelector("figure");
    dishes[i].insertBefore(pricePara, dishTitle);

    favoritesButton.addEventListener('click', function () {
        //If favorites is already selected
        if(dishes[i].classList.contains("selected_dish_card")){
            dishes[i].classList.remove("selected_dish_card");
            favoritesButton.textContent = "Add to Favorites  \u{2665}";

            favoritesSummary.removeChild(favorites[i]);
            //Update running total
            total -= Number(dishes[i].dataset.price);
            updateTotal();

            

        }
        else{
            dishes[i].classList.add("selected_dish_card");
            favoritesSummary.insertBefore(favorites[i], totalPrice);
            favoritesButton.textContent = "In Favorites  \u{2665}";
            //Update running total
            total += Number(dishes[i].dataset.price);
            updateTotal();

        }
    });
    //For each dish, create a row to add to the favorites
    //section on selection
    createFavoriteCard(dishes[i]);
}
//Create the favorites box and append it to main
var favoritesSummary = document.createElement('div');
var title = document.createElement('h2');
title.appendChild(document.createTextNode("Favorites"));
favoritesSummary.appendChild(title);

document.querySelector("main").appendChild(favoritesSummary);

//Create the running total box to sit below the favorites
var totalPrice = document.createElement("div");
totalPrice.id = "favorites_total";
let label = document.createElement("p");
let text = document.createTextNode("Total: ");
label.appendChild(text);

let totalHolder = document.createElement("p");
var textPrice = document.createTextNode(total);
totalHolder.appendChild(textPrice);

totalPrice.appendChild(label);
totalPrice.appendChild(totalHolder);

favoritesSummary.appendChild(totalPrice);

//Handled the rounding for the running total
function updateTotal(){
    if(total.toFixed(2) < 0.005){
        total = 0;
    }
    textPrice.data = total.toFixed(2);
}

//Create a row containing the dish name and price
function createFavoriteCard(dish){
    let dishCard = document.createElement("div");
    dishCard.classList.add("favorites_item")
    let name = document.createElement("p");
    let textName = document.createTextNode(dish.dataset.name);
    name.appendChild(textName);

    let price = document.createElement("p");
    let textPrice = document.createTextNode(dish.dataset.price + "");
    price.appendChild(textPrice);

    dishCard.appendChild(name);
    dishCard.appendChild(price);
    favorites.push(dishCard);

}