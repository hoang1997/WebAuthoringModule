//shows the accordion function 
function showAccordion ()
{
    var acc = document.getElementsByClassName("tab");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){                
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
    }
}
}

//called when the small nav button is clicked
function openSmallNav() {
    document.getElementById("mySidenav").style.display = "block";
}

//when the cross is clicked the small navigation dissappears 
function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
}

//shows the floating basket
function showBasket (){
    
    //making variables for the popup basket area, the button to open it, and the button to close it.
    var popup = document.getElementById('myBasket');

    var open = document.getElementById("basket-btn");

    var close = document.getElementsByClassName("close")[0];

    // when the button is clicked the popup shows up
    open.onclick = function() {
        popup.style.display = "block";
    }
    
    //when the cross is clicked the popup dissappears
    close.onclick = function() {
        popup.style.display = "none";
    }

    //when the window is clicked an if statement sees if the pop up basket is open, if it is then it makes it dissappear.
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
}

//making arrays for the different car images
var astonMartinVantageImages = [
    "resources/img/product_cars/Aston_Martin_Vantage/aston-martin-vantage.jpg",
    "resources/img/product_cars/Aston_Martin_Vantage/aston-martin-vantage_brown.png",
    "resources/img/product_cars/Aston_Martin_Vantage/aston-martin-vantage_green.png",
    "resources/img/product_cars/Aston_Martin_Vantage/aston-martin-vantage_grey.png",
    "resources/img/product_cars/Aston_Martin_Vantage/aston-martin-vantage_lightblue.png",
    "resources/img/product_cars/Aston_Martin_Vantage/aston-martin-vantage_midnightblue.png",
    "resources/img/product_cars/Aston_Martin_Vantage/aston-martin-vantage_pink.png"];

var chevCorvImages = [
    "resources/img/product_cars/Chevrolet_Corvette/chevrolet_corvette.jpg",
     "resources/img/product_cars/Chevrolet_Corvette/chevrolet_corvette_bronze.png",
     "resources/img/product_cars/Chevrolet_Corvette/chevrolet_corvette_green.png",
     "resources/img/product_cars/Chevrolet_Corvette/chevrolet_corvette_grey.png",
     "resources/img/product_cars/Chevrolet_Corvette/chevrolet_corvette_lightblue.png",
     "resources/img/product_cars/Chevrolet_Corvette/chevrolet_corvette_red.png",
     "resources/img/product_cars/Chevrolet_Corvette/chevrolet_corvette_silverblue.png"];

var jagImages = [
    "resources/img/product_cars/Jaguar_F-Type/jaguar_f-type.jpg",
    "resources/img/product_cars/Jaguar_F-Type/jaguar_f-type_babyblue.png",
    "resources/img/product_cars/Jaguar_F-Type/jaguar_f-type_babypink.png",
    "resources/img/product_cars/Jaguar_F-Type/jaguar_f-type_green.png",
    "resources/img/product_cars/Jaguar_F-Type/jaguar_f-type_maroon.png",
    "resources/img/product_cars/Jaguar_F-Type/jaguar_f-type_pink.png",
    "resources/img/product_cars/Jaguar_F-Type/jaguar_f-type_purple.png"];

var lotusEvoraImages = [
    "resources/img/product_cars/Lotus_Evora/lotus_evora_400.jpg",
    "resources/img/product_cars/Lotus_Evora/lotus_evora_400_babyblue.png",
    "resources/img/product_cars/Lotus_Evora/lotus_evora_400_blue.png",
    "resources/img/product_cars/Lotus_Evora/lotus_evora_400_brightgreen.png",
    "resources/img/product_cars/Lotus_Evora/lotus_evora_400_grey.png",
    "resources/img/product_cars/Lotus_Evora/lotus_evora_400_mattpurple.png",
    "resources/img/product_cars/Lotus_Evora/lotus_evora_400_pink.png",
    "resources/img/product_cars/Lotus_Evora/lotus_evora_400_red.png"];

var mazdaImages = [
    "resources/img/product_cars/Mazda/mazda-mx-5-miata.jpg",
    "resources/img/product_cars/Mazda/mazda-mx-5-miata_blue.png",
    "resources/img/product_cars/Mazda/mazda-mx-5-miata_green.png",
    "resources/img/product_cars/Mazda/mazda-mx-5-miata_orange.png",
    "resources/img/product_cars/Mazda/mazda-mx-5-miata_purple.png",
    "resources/img/product_cars/Mazda/mazda-mx-5-miata-rosegold.png"];

var mercedesImages = [
    "resources/img/product_cars/AMG/mercedes-AMG-SLC43.jpg",
    "resources/img/product_cars/AMG/mercedes-AMG-SLC43_brown.png",
    "resources/img/product_cars/AMG/mercedes-AMG-SLC43_green.png",
    "resources/img/product_cars/AMG/mercedes-AMG-SLC43_pink.png"];

var chevCamaroImages = [
    "resources/img/product_cars/Camaro/chevrolet-camaro.jpg",
    "resources/img/product_cars/Camaro/chevrolet-camaro_brown.png",
    "resources/img/product_cars/Camaro/chevrolet-camaro_green.png",
    "resources/img/product_cars/Camaro/chevrolet-camaro_grey.png",
    "resources/img/product_cars/Camaro/chevrolet-camaro_maroon.png",
    "resources/img/product_cars/Camaro/chevrolet-camaro_purple.png"];

var astonMartinVanqImages = [
    "resources/img/product_cars/Aston_Martin_Vanquish/aston-martin-vanquish.jpg",
    "resources/img/product_cars/Aston_Martin_Vanquish/aston-martin-vanquish_blue.png",
    "resources/img/product_cars/Aston_Martin_Vanquish/aston-martin-vanquish_green.png",
    "resources/img/product_cars/Aston_Martin_Vanquish/aston-martin-vanquish_purple.png"];

var fordImages = [
    "resources/img/product_cars/Ford_Mustang/ford-mustang.jpg",
    "resources/img/product_cars/Ford_Mustang/ford-mustang_blue.png",
    "resources/img/product_cars/Ford_Mustang/ford-mustang_cherry-red.png",
    "resources/img/product_cars/Ford_Mustang/ford-mustang_green.png",
    "resources/img/product_cars/Ford_Mustang/ford-mustang_grey.png",
    "resources/img/product_cars/Ford_Mustang/ford-mustang_pink.png",
    "resources/img/product_cars/Ford_Mustang/ford-mustang_purple.png"];

//making array for different wheel images
var wheelImages = [
    "resources/img/wheels_images/SC-8_silver_machine.jpg",
    "resources/img/wheels_images/SF01_brush_face_silver.jpg",
    "resources/img/wheels_images/SF01_brush_titanium_wheel.jpg",
    "resources/img/wheels_images/SF02_brush_titanium.jpg",
    "resources/img/wheels_images/SF03_gloss_black.jpg"]; 

//making array for different wheel names
var wheelNames = [
    "SC-8 Silver Machine Wheel",
    "SF01 Brush Face Silver Wheel", 
    "SF01 Brush Titanium Wheel", 
    "SF02 Brush Titanium Wheel", 
    "SF03 Gloss Black"];

//making an index for the arrays
var indexCarNum=0;

var indexWheelNum=0;


//function to show next car image.
function nextCarImage() {
    //
    var arrayName = sessionStorage.getItem("data-array");

    var array = JSON.parse(sessionStorage.getItem(arrayName));
    
    var currentCarImage = document.getElementById("carImage");
    
    indexCarNum++;
    
    if(indexCarNum >= array.length){
        indexCarNum=0;
    }
    
    currentCarImage.src = array[indexCarNum];
    
    console.log(indexCarNum);
}

function lastCarImage() {
    var arrayName = sessionStorage.getItem("data-array");

    var array = JSON.parse(sessionStorage.getItem(arrayName));
    
    var currentCarImage = document.getElementById("carImage");
    
    indexCarNum--;
    
    if(indexCarNum >= array.length){
        indexCarNum=0;
    } 
    
    else if (indexCarNum < 0) {
        indexCarNum=0;
    }
    
    currentCarImage.src = array[indexCarNum];
    
    console.log(indexCarNum);
}

function nextWheelImage() {
    
    var currentImage = document.getElementById('wheel-img');
    var currentName = document.getElementById('wheelName')
    
    indexWheelNum++;
    
    if(indexWheelNum >= wheelImages.length){
        indexWheelNum=0;
    }
    
    currentImage.src = wheelImages[indexWheelNum];
    
    currentName.innerHTML = wheelNames[indexWheelNum];
    console.log(indexWheelNum);
}

function lastWheelImage() {
    
    var currentImage = document.getElementById('wheel-img');
    
    indexWheelNum--;
    
    if(indexWheelNum >= wheelImages.length){
        indexWheelNum=0;
    } 
    
    else if(indexWheelNum<0) {
        indexWheelNum=0;
    }
    
    currentImage.src = wheelImages[indexWheelNum];
    
    console.log(indexWheelNum)
}

function savedItems(){
    //getting the car array name
    var arrayName = sessionStorage.getItem("data-array");
    
    //getting the array of the car image source 
    var array = JSON.parse(sessionStorage.getItem(arrayName));
    
    //making wheel name array into a variable
    var wheelNameArray = wheelNames;
    
    //retrieving the transmission and engine values from the edit car page 
    var transmissionSelection = document.getElementById("transmission").value;
    var engineSelection = document.getElementById("engine").value;
    
    //storing the index numbers and the transmission and engine values in local storage
    localStorage.setItem("chosenCar", indexCarNum);
    localStorage.setItem("chosenWheel",indexWheelNum);
    localStorage.setItem("chosenTrans", transmissionSelection);
    localStorage.setItem("chosenEng", engineSelection);
    
    //getting info from local storage and saving it into a several variables
    var savedCar = localStorage.getItem("chosenCar");
    var savedWheel = localStorage.getItem("chosenWheel");
    var savedTrans = localStorage.getItem("chosenTrans");
    var savedEng = localStorage.getItem("chosenEng"); 
    var savedName = localStorage.getItem("localStoredName");
    var savedPrice = localStorage.getItem("localStoredPrice");
    
    //replacing data for the locally stored data. 
    document.getElementById("carImageArea").src=array[savedCar];
    document.getElementById("wheelImageArea").src=wheelImages[savedWheel];
    document.getElementById("wheelNameBasketArea").innerHTML="Chosen Wheel: " + wheelNames[savedWheel];
    document.getElementById("transBasketArea").innerHTML="Transmission: " + savedTrans;
    document.getElementById("engBasketArea").innerHTML="Engine Size: " + savedEng;
    document.getElementById("nameBasketArea").innerHTML="Chosen Car: " + savedName;
    document.getElementById("priceBasketArea").innerHTML="Total Cost: " + savedPrice;
    
    document.getElementById("carImageArea2").src=array[savedCar];
    document.getElementById("wheelImageArea2").src=wheelImages[savedWheel];
    document.getElementById("wheelNameBasketArea2").innerHTML="Chosen Wheel: " + wheelNames[savedWheel];
    document.getElementById("transBasketArea2").innerHTML="Transmission: " + savedTrans;
    document.getElementById("engBasketArea2").innerHTML="Engine Size: " + savedEng;
    document.getElementById("nameBasketArea2").innerHTML="Chosen Car: " + savedName;
    document.getElementById("priceBasketArea2").innerHTML="Total Cost: " + savedPrice;
    
    console.log(savedCar);
}

//function that saves information on which car is chosen. 
function customiseButton (id){
    //making variable for the parent div of the button
    var container = document.getElementById(id).parentElement;
    
    //getting information from inside the parent div, for example the image, car name, car price
    var imageSource = container.querySelector(".car-image").src;
    
    var carName = container.querySelector(".car_name").textContent;
    
    var carPrice = container.querySelector(".product-price").textContent;
    //getting the name of the array for a specific car(data-array attribute has different values depending on the car chosen)
    var imageArray = container.querySelector(".car-image").getAttribute("data-array");
    
    console.log(imageSource);
    
    console.log(carName);
    
    console.log(carPrice);
    
    //storing the name of the array for a specific car 
    sessionStorage.setItem('data-array', imageArray);
    
    //storing data into session storage
    sessionStorage.setItem('imageSrc',imageSource);
    
    sessionStorage.setItem('nameOfCar', carName);
    
    sessionStorage.setItem('price', carPrice);
    
    //storing image arrays by using JSON 
    sessionStorage.setItem('astonMartinVantArray', JSON.stringify(astonMartinVantageImages));
    
    sessionStorage.setItem('chevCorvArray', JSON.stringify(chevCorvImages));
     
    sessionStorage.setItem('jagArray', JSON.stringify(jagImages));
      
    sessionStorage.setItem('lotusEvoraArray', JSON.stringify(lotusEvoraImages));
       
    sessionStorage.setItem('mazdaArray', JSON.stringify(mazdaImages));
        
    sessionStorage.setItem('mercedesArray', JSON.stringify(mercedesImages));
         
    sessionStorage.setItem('chevCamaroArray', JSON.stringify(chevCamaroImages));
    
    sessionStorage.setItem('astonMartinVanqArray', JSON.stringify(astonMartinVanqImages));
    
    sessionStorage.setItem('fordArray', JSON.stringify(fordImages));

}
//making an empty array
var basket = [];

//function called when the buy now button gets clicked 
function buyNowButton (id) { 
    //getting the chosen items into variables from local storage
    var savedCar = localStorage.getItem("chosenCar");
    var savedWheel = localStorage.getItem("chosenWheel");
    var savedTrans = localStorage.getItem("chosenTrans");
    var savedEng = localStorage.getItem("chosenEng"); 
    var savedName = localStorage.getItem("localStoredName");
    var savedPrice = localStorage.getItem("localStoredPrice");
    //pusing an array of data from the chosen items into the empty basket
    basket.push({savedCar, savedWheel, savedTrans, savedEng, savedName, savedPrice});
    
    //turing the array into strings so i can parse it through local storage. 
    var array = JSON.stringify(basket);
    console.log(array);
    localStorage.setItem("products", array);
}

