$(document).ready(function() {
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
    greeting = "Hi!";
    name = "Andrew";
    message = " ";
  }
  function setTextContentById(getId, setMsg) {
    // Get the element that has an id of greeting
    var el = document.getElementById(getId);
    // Replace the content of that element with the personalized welcome message
    el.textContent = setMsg;
  }
  initiateVars();
  setTextContentById("greeting", welcome);
  setTextContentById("userSign", sign);

  // Replace the content of that element with the personalized welcome message

  // Get the element that has an id of userSign then update its contents
  var elSign = document.getElementById("userSign");
  elSign.textContent = sign;

  // Get the element that has an id of tiles then update its contents
  var elTiles = document.getElementById("tiles");
  elTiles.textContent = tiles;

  // Get the element that has an id of subTotal then update its contents
  var elSubTotal = document.getElementById("subTotal");
  elSubTotal.textContent = "$" + subTotal;

  // Get the element that has an id of shipping then update its contents
  var elShipping = document.getElementById("shipping");
  elShipping.textContent = "$" + shipping;

  // Get the element that has an id of grandTotal then update its contents
  var elGrandTotal = document.getElementById("grandTotal");
  elGrandTotal.textContent = "$" + grandTotal;

  // Note: textContent does not work in IE8 or earlier - see explanation on website
});