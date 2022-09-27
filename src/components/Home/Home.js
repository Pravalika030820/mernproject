import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import {NavLink} from 'react-router-dom'
// import watch from '../../images/watch.svg'

function Home() {
  return (
    <div className='home'>
      
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~Sep+2022~FreshDrip_Simpl_Desktop-.jpg/fmt/jpg/fmt/png"
          alt="First slide"
        ></img>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~Sep+2022~Cricket~VK-Banner-Desktop.jpg/fmt/jpg/fmt/png"
          alt="Second slide"
        ></img>


      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~Sep+2022~BFC-Updated-Desktop-v2.jpg/fmt/jpg/fmt/png"
          alt="Third slide"
        ></img>

      </Carousel.Item>
    </Carousel>


{/* horizontal card 1 */}

<div className="card mt-4">
    <div className="card-body p-4">
        <div className="row">
            <div className="col-sm-5">
                <img src="https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~July2022~MCFC~Man-City-HP-Desktop-Banner.jpg/fmt/jpg/fmt/png" className="w-100" alt=""></img>
            </div>
            <div className="col-sm-7">
                <div className="content">
                    <h1 className="text-secondary"> PLAY FOREVER 2022/23</h1>
                    <div className="bn me-auto">
                    <button className="btn btn-dark">SHOP FOR ADULTS</button>
                    <button className="btn btn-dark">SHOP FOR KIDS</button>
                    </div>
        </div>
    </div>
    </div>               
    </div>
    </div>

    {/* <!--grid of cards 1--> */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            <div className="col">
                <div className="card mt-5  "> 
                    
                    <div className="card-body">
                        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/376151/01/sv01/fnd/IND/fmt/png/Fuse-2.0-Men's-Training-Shoes" className="w-100" alt=""></img> 
                        <h5> Fuse 2.0 Men's Training Shoes</h5>
                        <p className="text-secondary" ><i>
                        Additional 5% off on prepaid orders</i>
                        </p> 
                        <h6> ₹7999 &nbsp; <s> ₹9999</s>  </h6>
                        <div className="bn me-auto">
                        <button className="btn btn-dark but ">Add to Cart</button>  
                        </div>                  
                    </div>                          
                </div>
                </div>


                <div className="col">
                <div className="card mt-5 rounded-shadow-lg"> 
                    
                    <div className="card-body">
                        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/195201/22/sv01/fnd/IND/fmt/png/Flyer-Flex-Unisex-Running-Shoes" className="w-100" alt=""></img>
                        <h5> Flyer Flex Unisex Running Shoes</h5>
                        <p className="text-secondary"><i>
                        Additional 5% off on prepaid orders</i></p> 
                            <h6> ₹8999 &nbsp; <s> ₹9599</s>  </h6>
                            <div className="bn me-auto">
                            <button className="btn btn-dark but ">Add to Cart</button> 
                            </div>                     
                    </div>
                    </div>       
                </div>


                <div className="col">
                <div className="card mt-5 rounded-shadow-lg"> 
                    
                    <div className="card-body">
                        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/386545/03/sv01/fnd/IND/fmt/png/Slipstream-Mid-Heritage-Men's-Sneakers" className="w-100" alt=""></img> 
                        <h5> Slipstream- Mid Heritage Men's Sneakers</h5>
                        <p className="text-secondary"><i>
                        Additional 5% off on prepaid orders</i></p> 
                            <h6> ₹9999 &nbsp; <s> ₹10999</s>  </h6>  
                            <div className="bn me-auto">
                            <button className="btn btn-dark but">Add to Cart</button> 
                            </div>                    
                    </div>        
                </div>
                </div>


                <div className="col">
                <div className="card mt-5 rounded-shadow-lg"> 
                    
                    <div className="card-body">
                        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377028/07/sv01/fnd/IND/fmt/png/Transport-Running-Shoes" className="w-100" alt=""></img>
                         <h5> Transport Running Shoes</h5>
                        <p className="text-secondary"><i>
                        Additional 5% off on prepaid orders</i></p><br></br>
                            <h6> ₹2599 &nbsp; <s> ₹3599</s>  </h6> 
                            <div className="bn me-auto">
                            <button className="btn btn-dark but">Add to Cart</button>
                            </div>                      
                    </div>       
                </div>
                </div>
            </div>



     {/* horizontal card 2 */}

<div className="card mt-4">
    <div className="card-body p-4">
        <div className="row">
            <div className="col-sm-5">
                <img src="https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~Aug+2022~AW22+Launch~Back-to-School-Desktop_Update-.jpg/fmt/jpg/fmt/png" className="w-100" alt=""></img>
            </div>
            <div className="col-sm-7">
                <div className="content text-center">
                    <h1 className="text-secondary"> BACK TO SCHOOL</h1>
                    <h3>ADDITIONAL 10% OFF ON ALL KIDS STYLE</h3>
                    <div className="bn">
                    <button className="btn btn-dark but">VIEW COLLECTIONS </button><br></br>
                    </div>
                    <h5>LIMITED PERIOD OFFER</h5>
                    <p className="text-secondary">Discounts will be auto applied on checkout</p>
                    
        </div>
    </div>
    </div>               
    </div>
    </div>




    
    {/* <!-- footer --> */}
          <div className="container-fluid m-5">
          <div className="footer">

         {/* <!-- column-1 --> */}
        <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-4">
          <div className="col sm-6">
            <ul>
              
              <li><NavLink to="#">Contact Us</NavLink></li><br/>
              <li><NavLink to="#">FAQ</NavLink> </li><br/>
              <li><NavLink to="#">My Account</NavLink></li><br/>
              <li><NavLink to="#">Track Order</NavLink>  </li>
            </ul>
          </div>


        {/* <!-- column-2 --> */}
        <div className="col sm-6 ">
          <ul>
            <li><NavLink to="#">Return Policy</NavLink></li><br/>
            <li><NavLink to="#">Privacy Policy</NavLink></li><br/>
            <li><NavLink to="#">Terms & Conditions</NavLink></li><br/>
          </ul>
          </div>
          
{/*          
          <img src={watch} className="col sm-6 col-md-6 me-auto">
            
          </img> */}
          

      </div>
    </div>
    </div>





  
    </div>
  )
}

export default Home