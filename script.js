var size = 10;
var growthPerSecond = 0;
var growthCost = 10;
var multiCost = 100;
var multiplier = 1.5;
setInterval(function() {
  size += growthPerSecond;
	
  document.getElementById("number").innerText = size;
}, 1000);


function buyGrowth() { 
   if (size >= growthCost) {
      size -= growthCost;
      document.getElementById("number").innerText = size;
      growthPerSecond ++;
      document.getElementById("growthSpeed").innerText = growthPerSecond;
      growthCost = Math.floor(growthCost * 1.15);
      document.getElementById("growthPurchase").innerText = growthCost;
   } else {
     alert("You're too small!!!");
    }  
	
}

function buyMulti() { 
   if (size >= multiCost) {
      size -= multiCost;
      document.getElementById("number").innerText = size;
      multiplier = Math.floor(growthPerSecond * multiplier);
      document.getElementById("multiplier").innerText = multiplier;
      multiCost = Math.floor(multiCost * 1.2);
      document.getElementById("multiCost").innerText = multicost;
   } else {
     alert("You're too small!!!");
    }  
	
}
