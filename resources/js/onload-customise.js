    var carName = document.getElementById('carName');
    
    var imageSrc = document.getElementById('carImage')
    
    var priceOfCar = document.getElementById('priceOfCar')
    
    var storedName = sessionStorage.getItem('nameOfCar');
    
    var storedImage = sessionStorage.getItem('imageSrc');
    
    var storedPrice = sessionStorage.getItem('price');

    localStorage.setItem("localStoredName",storedName);
    
    localStorage.setItem("localStoredPrice",storedPrice);

    localStorage.setItem("localStoredImage",storedImage);
    
window.onload = function editItemsOnload(){
    carName.innerHTML = storedName;
    
    imageSrc.src=storedImage;
    
    priceOfCar.innerHTML = storedPrice;

}


