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

var wheelImages = [
    "resources/img/wheels_images/SC-8_silver_machine.jpg",
    "resources/img/wheels_images/SF01_brush_face_silver.jpg",
    "resources/img/wheels_images/SF01_brush_titanium_wheel.jpg",
    "resources/img/wheels_images/SF02_brush_titanium.jpg",
    "resources/img/wheels_images/SF03_gloss_black.jpg"]; 

var wheelNames = [
    "SC-8 Silver Machine Wheel",
    "SF01 Brush Face Silver Wheel", 
    "SF01 Brush Titanium Wheel", 
    "SF02 Brush Titanium Wheel", 
    "SF03 Gloss Black"];

var arrayName = sessionStorage.getItem("data-array");

var array = JSON.parse(sessionStorage.getItem(arrayName));

window.onload = function checkoutOnload(){

if(localStorage && localStorage.getItem("localStoredName")) {
        
        var arrayName = sessionStorage.getItem("data-array");

        var array = JSON.parse(sessionStorage.getItem(arrayName));
    
        var items = localStorage.getItem('products');
    
        items = JSON.parse(items);
        
        for(var i = 0; i < items.length; i++)
        {
            var checkoutCarName = items[i].savedName;
            var checkoutPrice = items[i].savedPrice;
            var checkoutCarImage = items[i].savedCar;
            var checkoutCarEng = items[i].savedEng;
            var checkoutCarTrans = items[i].savedTrans;
            var checkoutWheel = items[i].savedWheel;
            
            document.getElementById("checkoutCarBasket").src = array[checkoutCarImage];
            document.getElementById("checkoutNameBasket").innerHTML = checkoutCarName;
            document.getElementById("checkoutTransBasket").innerHTML = checkoutCarTrans;
            document.getElementById("checkoutEngBasket").innerHTML = checkoutCarEng;
            document.getElementById("checkoutPriceBasket").innerHTML = checkoutPrice;
            document.getElementById("checkoutWheelNameBasket").innerHTML = wheelNames[checkoutWheel];
            
             document.getElementById("checkoutCarBasket2").src = array[checkoutCarImage];
            document.getElementById("checkoutNameBasket2").innerHTML = checkoutCarName;
            document.getElementById("checkoutTransBasket2").innerHTML = checkoutCarTrans;
            document.getElementById("checkoutEngBasket2").innerHTML = checkoutCarEng;
            document.getElementById("checkoutPriceBasket2").innerHTML = checkoutPrice;
            document.getElementById("checkoutWheelNameBasket2").innerHTML = wheelNames[checkoutWheel];
            
        }

          
          console.log(checkoutCarName);
}
    
    
}

function finishBtn(){
     alert("Thank You For Your Order");
}
