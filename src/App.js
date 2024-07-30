import React from "react";


import Dinner from "./dinner";

function App() {
  return    ( <div >
              <Dinner  mainDish="Chiken Biryani"  sweetDish="Kheer"  drinks="Cold-Drinks" />
              <Dinner  mainDish="Chiken Karhai"  sweetDish="Halwa"  drinks="Juice" />
             
            </div>
  );
}

export default App;
