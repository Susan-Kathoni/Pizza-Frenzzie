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
    if (this.size === "large") {
      if (this.getFlavourPrice === "chicken tikka") {
        return 1200;
      } else if (this.type === "peri peri") {
        return 1300;
      } else {
        return 1100;
      }
    } else if (this.size === "medium") {
      if (this.type === "chicken tikka") {
        return 850;
      } else if (this.type === "peri peri") {
        return 950;
      } else {
        return 750;
      }
    } else {
      if (this.type === "chicken tikka") {
        return 600;
      } else if (this.type === "peri peri") {
        return 650;
      } else {
        return 550;
      }
    }
  };
