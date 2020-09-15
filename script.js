function Auto(merk, bouwjaar) {

    let brand = merk;
    let year = bouwjaar;

    this.getBrand = function () {
        return brand;
    }
   
    this.getYear = function () {
        return year;
    }
   
    this.showDetails = function () {
        console.log('Automerk: ' + brand + ' bouwjaar: ' + bouwjaar);
    }
   
}

function Voorraad(item, aantal) {
    let artikel = item;
    let voorraad = aantal;

    this.verhoogVoorraad = function () {
        voorraad = voorraad + 1;
    }
    this.verhoogVoorraadMeer = function (aantal) {
        voorraad = voorraad + aantal;
    }
    this.verlaagVoorraadMeer = function (aantal) {
        voorraad = voorraad - aantal;
    }
}