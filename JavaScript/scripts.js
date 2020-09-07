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

//---------------------------Price:flavour--------------------->
Pizza.prototype.getFlavourPrice = function () {
    if (this.size === "regular") {
        if (this.flavour === "beef-pepporoni") {
            return 300;
        } else if (this.flavour === "cheese-pizza") {
            return 500;
        } else if (this.flavour === "chicken-hawaiian") {
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
    } else if (this.size === "extra-large") {
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
//----------------------------------Price for toppings---------------------->
Pizza.prototype.getToppingPrice = function () {
    if (this.size === "regular") {
        if (this.topping === "peppers") {
            return 20;
        } else if (this.topping === "black-olives") {
            return 110;
        } else if (this.topping === "pineapple") {
            return 70;
        } else if (this.topping === "sweet-onions") {
            return 20;
        } else {
            return 90;
        }
    } else if (this.size === "medium") {
        if (this.topping === "peppers") {
            return 35;
        } else if (this.topping === "black-olives") {
            return 140;
        } else if (this.topping === "pineapple") {
            return 90;
        } else if (this.topping === "sweet-onions") {
            return 40;
        } else {
            return 130;
        }
    } else if (this.size === "large") {
        if (this.topping === "peppers") {
            return 50;
        } else if (this.topping === "black-olives") {
            return 180;
        } else if (this.topping === "pineapple") {
            return 110;
        } else if (this.topping === "sweet-onions") {
            return 60;
        } else {
            return 170;
        }
    } if (this.size === "extra-large") {
        if (this.topping === "peppers") {
            return 60;
        } else if (this.topping === "black-olives") {
            return 210;
        } else if (this.topping === "pineapple") {
            return 140;
        } else if (this.topping === "sweet-onions") {
            return 80;
        } else {
            return 200;
        }
    }
};
//-------------------------------Price:crust------------------>
Pizza.prototype.getCrustPrice = function () {
    if (this.crust === "thin") {
        if (this.size === "regular")
            return 50;
    } else if (this.size === "medium") {
        return 80;
    } else if (this.size === "large") {
        return 100;
    } else {
        return 120;
    }
    if (this.crust === "thick") {
        if (this.size === "regular")
            return 60;
    } else if (this.size === "medium") {
        return 90;
    } else if (this.size === "large") {
        return 110;
    } else {
        return 130;
    }
    if (this.crust === "double") {
        if (this.size === "regular") {
            return 70;
        } else if (this.size === "medium") {
            return 100;
        } else if (this.size === "large") {
            return 120;
        } else {
            return 140;
        }
    }
};
//-------------------------- customer's order---------------->
var customerName = "";
var totalCost = 0;
var pizzasOrdered = [];
var subCounty = "";
var landmark = "";
var contactNumber = "";

$("#checkout").click(function (e) {
    e.preventDefault();
    console.log("click",$("#flavour").val()) 
    var flavourSelected = $("#flavour").val();
    var sizeSelected = $("#size").val();
    var toppingSelected = $("#topping").val();
    var crustSelected = $("#crust").val();

    var newPizza = new Pizza(
        flavourSelected,
        sizeSelected,
        toppingSelected,
        crustSelected
    );

    pizzasOrdered.push(newPizza);
    $("#flavour").val("");
    $("#size").val("");
    $("#topping").val("");
    $("#crust").val("");

    totalCost = 0;

    for (let i = 0; i < pizzasOrdered.length; i++) {
        totalCost += pizzasOrdered[i].getPizzaPrice();
    }
    console.log(newPizza)
    console.log(newPizza.flavour)
    console.log(newPizza.getFlavourPrice())
    $("#bill-summary").append(
        "<tr>" +
        '<th scope="row">' +
        newPizza.flavour +
        " -" +
        newPizza.getFlavourPrice() +
        "</th>" +
        "<td>" +
        newPizza.toppings +
        " - " +
        newPizza.getToppingPrice() +
        "</td>" +
        "<td>" +
        newPizza.crust +
        " - " +
        newPizza.getCrustPrice() +
        "</td>" +
        "<td>" +
        newPizza.size +
        "</td>" +
        "<td>" +
        newPizza.getPizzaPrice() +
        "</td>" +
        "</tr>"
    );

    if (pizzasOrdered.length > 0) {
        $("#form-title").empty();
        $("#form-title").append("Add Another Order");
    }

    $("#total-amount").fadeIn();
    $("#checkout").fadeIn();
    $("#orders-div").fadeIn();

    $("#total-amount").empty();
    $("#total-amount").append(totalCost);
    $(".total-amount").show();
});

$("#checkout").click(function () {
    $(".checkout-options").show();
});

$("#checkout-form").submit(function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var deliveryOption = $("#delivery-option").val();
    customerName = name;
    console.log(name);
    console.log(deliveryOption);
    $("#name").val("");
    $("#delivery-option").val("");
    $(".checkout-options").hide();
    if (deliveryOption === "deliver") {
        $(".location").show();
        $(".delivery-cost").show();
        $("#delivery-amount").append(200);
        totalCost += 200;
        $("#total-amount").empty();
        $("#total-amount").append(totalCost);
    } else {
        alert(customerName + ": Your total bill is Ksh. " + totalCost + ". Your order will be ready for collection in the next 2 hours");
    }
});

$("#location-form").submit(function (e) {
e.preventDefault();
var estateEntered = $("#estate").val();
var houseNumberEntered = $("#house-number").val();
estate = estateEntered;
houseNumber = houseNumberEntered;
$(".location").hide();
alert(customerName + ": Your total bill is Ksh. " + totalCost + ". Your order will be delivered to " + subcounty + ", " + houseNumber + " in the next 2 hours");
});
})