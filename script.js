
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
function dollarSignConCat() {
  var elSubTotal = document.getElementById("subTotal");
  elSubTotal.textContent = "$ " + subTotal;
  var elShipping = document.getElementById("shipping");
  elShipping.textContent = "$ " + shipping;
  var elGrandTotal = document.getElementById("grandTotal");
  elGrandTotal.textContent = "$ " + grandTotal;
}
function payNow() {
  initiateVars();
  setTextContentById("greeting", welcome);
  setTextContentById("userSign", sign);
  setTextContentById("tiles", tiles);
  dollarSignConCat();
}
initiateVars();
setTextContentById("greeting", welcome);
setTextContentById("userSign", sign);
setTextContentById("tiles", tiles);
dollarSignConCat();

function resetVars() {
  event.preventDefault();
  greeting = " ";
  name = " ";
  message = " ";
  welcome = greeting + name + message;

  sign = " ";
  tiles = " ";
  subTotal = "$ ";
  shipping = "$ ";
  grandTotal = "$ ";

  setTextContentById("greeting", welcome);
  setTextContentById("userSign", sign);
  setTextContentById("tiles", tiles);
  setTextContentById("subTotal", subTotal);
  setTextContentById("shipping", shipping);
  setTextContentById("grandTotal", grandTotal);
}

  // Note: textContent does not work in IE8 or earlier - see explanation on website
