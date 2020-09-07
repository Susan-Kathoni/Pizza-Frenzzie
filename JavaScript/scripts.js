$(document).ready(function () {
    function Pizza(flavour, size, toppings, crust) {
        this.flavour = flavour;
        this.toppings = toppings;
        this.crust = crust;
        this.size = size;
    }
    Pizza.prototype.getPizzaPrice = function () {
        return this.getCrustPrice() + this.getToppingPrice() + this.getFlavourPrice();
      };  
})
//---------------------------Price:flavour--------------------->
Pizza.prototype.getFlavourPrice = function () {
    if (this.size === "regular") {
        if (this.flavour === "beef-pepporoni") {
            return 300;
        } else if (this.flavour === "cheese-pizza") {
            return 500;
        } else if (this.fllavour === "chicken-hawaiian") {
            return 400;
        } else if (this.flavour === "macon-bbq") {
            return 480;
        } else if (this.flavour === "meat-deluxe") {
            return 350;
        } else {
            return 320;
        }
    } else if (this.size === "medium") {
        if (this.flavour === "beef-pepporoni") {
            return 500;
        } else if (this.flavour === "cheese-pizza") {
            return 750;
        } else if (this.fllavour === "chicken-hawaiian") {
            return 550;
        } else if (this.flavour === "macon-bbq") {
            return 560;
        } else if (this.flavour === "meat-deluxe") {
            return 480;
        } else {
            return 400;
        }
    } else if (this.size === "large") {
        if (this.flavour === "beef-pepporoni") {
            return 650;
        } else if (this.flavour === "cheese-pizza") {
            return 900;
        } else if (this.fllavour === "chicken-hawaiian") {
            return 700;
        } else if (this.flavour === "macon-bbq") {
            return 650;
        } else if (this.flavour === "meat-deluxe") {
            return 530;
        } else {
            return 500;
        }
    } else if (this.size === "etra-large") {
        if (this.flavour === "beef-pepporoni") {
            return 800;
        } else if (this.flavour === "cheese-pizza") {
            return 1100;
        } else if (this.fllavour === "chicken-hawaiian") {
            return 850;
        } else if (this.flavour === "macon-bbq") {
            return 770;
        } else if (this.flavour === "meat-deluxe") {
            return 650;
        } else {
            return 680;
        }
    }
};
