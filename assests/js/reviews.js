$("#NTSsubmit").on("click", function(event){
    event.preventDefault()
    console.log("buttonHit")
})

//Object
let coffeeShop = [
  {name:"KickButt", comments:"expensive", rating:"5 stars"},
  {name:"Mozart's Coffee Roasters", comments:"Needs dark roast!", rating:"3 starts"}
];

//Array
var arrayOfCoffeeShops = [];

//Object
var coffeeShop2 = {name: "", comments: "", rating: "" };

function getUserValues() {
    var x = document.getElementById("userEntryBox");
    var shopName = document.getElementById("shop-name").value;
    var noteToSelf = document.getElementById("NTS").value;
    var ratingsStars = document.getElementById("stars").value;


    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value ; //+ "<br>"
      
    }

    coffeeShop.name = shopName;
    coffeeShop.comments = noteToSelf;
    coffeeShop.rating = ratingsStars;

    
    // Display some data from the object:
    //arrayOfCoffeeShops.push(coffeeShop.name);

    /*arrayOfCoffeeShops.push(coffeeShop);*/
    //coffeeShop.push({name: "All coffee shops", comments: "all comments", rating:"4 stars" })
    coffeeShop.push({name: shopName, comments: noteToSelf, rating: ratingsStars});
    console.log(coffeeShop);
    document.getElementById("arrayTest").innerHTML = ("Name: " + coffeeShop.name + " - comments: " + coffeeShop.comments + " - ratings: " + coffeeShop.rating);//arrayOfCoffeeShops;

    //arrayOfCoffeeShops.forEach(poop);
    //coffeeShop.call(arrayDisplay);
    // coffeeShop.forEach(arrayDisplay);

    //This for loop loops through the array.
    var text2 = "";
    for(i=0; i<coffeeShop.length; i++) {
      text2 += coffeeShop[i].name + " - " + coffeeShop[i].comments + " - " + coffeeShop[i].rating + "<br>";

        //document.write(arrayOfCoffeeShops[i].name + ", " + arrayOfCoffeeShops[i].comments)
        //console.log("*****: " + arrayOfCoffeeShops[i].name + ", " + arrayOfCoffeeShops[i].comments)
      }
      document.getElementById("arrayTest2").innerHTML = text2;  

    //function arrayDisplay() {
        
    //}
  }

//DONE - **shopName** + inside of this onclick^, get the value of the input for the name ()
//DONE - **noteToSelf** + get the value for the input for the NTS
//DONE = **coffeeshop** **coffee.shop.name** ---- put these "name of shop" and nts" into an object
//DONE = push that object^ into an array (array because there are multiple shops that have notes) *each coffee shop will only have one note
// = Show all of the array. A For Loop. 

//store this array^ into localstorage

//when the page loads, if there is an array in localstorage, then the array will = that array, otherwise it will = an empty array
//dynamically create html for each item in the array
//for each item(shop) in the array, make a box and .append it to another box in reviews.html

//getting into localstorage, JSON.stringify. and getting out of local storage, JSON.parse.
