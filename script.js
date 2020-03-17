
  // Create variables for the welcome message
  var greeting = "[not initialized]";
  var name = "[not initialized]";
  var message = "[not initialized]";
  // Concatenate the three variables above to create the welcome message
  var welcome = greeting + name + message;

  // Create variables to hold details about the sign
  var sign = "[not initialized]";
  var tiles = sign.length;
  var subTotal = tiles * 5;
  var shipping = 7;
  var grandTotal = subTotal + shipping;

  // Get the element that has an id of greeting

  function initiateVars() {
    greeting = "Hi! ";
    name = " Andrew ";
    message = " Thank you for ordering ";
    welcome = greeting + name + message;
    sign = "Montague House";
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;

  }
  function setTextContentById(getId, setMsg) {
    // Get the element that has an id of greeting
    var el = document.getElementById(getId);
    // Replace the content of that element with the personalized welcome message
    el.textContent = setMsg;
  }
  function payNow(){
    initiateVars();
    setTextContentById("greeting", welcome);
    setTextContentById("userSign", sign);
    setTextContentById("tiles", tiles);
    var elSubTotal = document.getElementById("subTotal");
    elSubTotal.textContent = "$ " + subTotal;
    var elShipping = document.getElementById("shipping");
    elShipping.textContent = "$ " + shipping;
    var elGrandTotal = document.getElementById("grandTotal");
    elGrandTotal.textContent = "$ " + grandTotal;
  }
  initiateVars();
  setTextContentById("greeting", welcome);
  setTextContentById("userSign", sign);

  function resetVars() {
    event.preventDefault();
    greeting = "[not initialized]";
    name = "[not initialized]";
    message = "[not initialized]";
    welcome = greeting + name + message;
  
    sign = "[not initialized]";
    tiles = "[not initialized]";
    subTotal = "[not initialized]";
    shipping = "[not initialized]";
    grandTotal = "[not initialized]";
  
    setTextContentById("greeting", welcome);
    setTextContentById("userSign", sign);
    setTextContentById("tiles", tiles);
    setTextContentById("subTotal", subTotal);
    setTextContentById("shipping", shipping);
    setTextContentById("grandTotal", grandTotal);
  }


  // Replace the content of that element with the personalized welcome message

  // Get the element that has an id of userSign then update its contents
 

  // Get the element that has an id of tiles then update its contents
  var elTiles = document.getElementById("tiles");
  elTiles.textContent = tiles;

  // Get the element that has an id of subTotal then update its contents
  var elSubTotal = document.getElementById("subTotal");
  elSubTotal.textContent = "$ " + subTotal;

  // Get the element that has an id of shipping then update its contents
  var elShipping = document.getElementById("shipping");
  elShipping.textContent = "$ " + shipping;

  // Get the element that has an id of grandTotal then update its contents
  var elGrandTotal = document.getElementById("grandTotal");
  elGrandTotal.textContent = "$ " + grandTotal;

  // Note: textContent does not work in IE8 or earlier - see explanation on website
