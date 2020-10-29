//instantiate variables
var totalItems = document.getElementById("totalItems");
var loMein = document.getElementById("loMein");
var rice = document.getElementById("rice");
var generalTsoChicken = document.getElementById("generalTsoChicken");
var teryakiBeef = document.getElementById("teryakiBeef");
var LOMEIN_PRICE = 5.00;
var RICE_PRICE = 4.00;
var GENERALTSOCHICKEN_PRICE = 7.00;
var TERYAKIBEEF_PRICE = 8.00;


// This function loops through each menu item, collects the sum of
// items ordered, and displays it in HTML element, 'totalItems'
function calculateItems() {
    var arr = document.getElementsByName('wokItem');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    totalItems.innerHTML = tot;
}

// This function collects the sum of the number of items ordered
// and displays it in HTML element, 'subTotal'
function addTotal() {
	var subtotal = document.getElementById("subTotal");
	subtotal.innerHTML = (loMein.value * LOMEIN_PRICE) + (rice.value * RICE_PRICE) +
					   (generalTsoChicken.value * GENERALTSOCHICKEN_PRICE) +
					   (teryakiBeef.value * TERYAKIBEEF_PRICE);
}

// This function adds the item prices to the subtotal variable
function calculateLoMein() {
    addTotal();
    calculateItems();
}
// This function adds the item prices to the subtotal variable
function calculateRice() {
    addTotal();
    calculateItems();
}
// This function adds the item prices to the subtotal variable
function calculateGeneralTsoChicken() {
    addTotal();
    calculateItems();
}
// This function adds the item prices to the subtotal variable
function calculateTeryakiBeef() {
    addTotal();
    calculateItems();
}
/* This function creates event listeners for when the fields are incremented, then
invoking the parameterized function to update the subtotal */
function createEventListeners() {
    loMein.addEventListener("change", calculateLoMein, false);
    rice.addEventListener("change", calculateRice, false);
    generalTsoChicken.addEventListener("change", calculateGeneralTsoChicken, false);
    teryakiBeef.addEventListener("change", calculateTeryakiBeef, false);
}

/* An event listener method is used on the window object to run the createEventListeners
function when the window loads */
window.addEventListener("load", createEventListeners, false);