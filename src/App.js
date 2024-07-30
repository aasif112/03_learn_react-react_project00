import React from "react";


import Dinner from "./dinner";

// Component Manue is Parent of Component Dinner 
function Manue() {
  return    ( <div >
              <Dinner day="Monday" mainDish="Chiken Biryani"  sweetDish="Kheer"  drinks="Cold-Drinks" />
              <Dinner day="Friday" mainDish="Chiken Karhai"  sweetDish="Halwa"  drinks="Juice" />
              <Dinner day="Sunday" mainDish="Nan - Paya"  sweetDish="Jalebi"  drinks="Tea" />
             
            </div>
  );
}

export default Manue;
