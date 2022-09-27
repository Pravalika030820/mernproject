import axios from "axios";
import { useEffect, useState } from "react";


function Product() {

    let [products,setProducts]=useState([])

    useEffect(()=>{
      let token=localStorage.getItem("token")
        axios.get("http://localhost:4000/product/get-products",{headers:{Authorization:token}})

        .then(res=>{
          if(res.data.message=="products")
          {
              setProducts(res.data.payload)}
          else{
              alert(res.data.message)
          }
      })
      
    },[])

  return (
    <div>
    {products.length!==0 && (

<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-4'>
    {
        products.map((productObj)=>(
            <div className='col'>
                <div className='card card-body'>
                    <h2>{productObj.productName}</h2>
                    <h4>{productObj.price}</h4>
                    
                </div>
            </div>
        ))}        
    
</div>
        )}
</div>
)
}


export default Product
