let count = 0;

function cc(card) {
    // Only change code below this line


    return card === /[^2-6]/g ? count++ :
        card === /[^7-9]/g ? 
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');