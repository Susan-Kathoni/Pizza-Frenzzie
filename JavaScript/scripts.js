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


