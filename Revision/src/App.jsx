// import { useState } from 'react'
// import Form from"./Components/Form";
import Provider  from "./Components/Provider";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
function App(){
  return(
    <div>
      {/* <Form/> */}
      <Provider>
        <Navbar/>
        <Products/>
        <Cart/>
      </Provider>
    </div>
  )
}



export default App
