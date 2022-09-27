import React from 'react'
import './Aboutus.css'
import {GrFacebook} from 'react-icons/gr';
import {GrInstagram} from 'react-icons/gr';
import {ImTwitter} from 'react-icons/im';
import {FaPinterestSquare} from 'react-icons/fa';
import {BsYoutube} from 'react-icons/bs';


function Aboutus() {
  return (
    <div className="about">
    <h1>About Us</h1>
    <p>Ours is an Indian multinational corporation that designs and manufactures athletic and casual footwear, apparel and accessories, which is headquartered in Chennai, TamilNadu, India. Elevate Shoes is the first largest sportswear manufacturer in the world. The company was founded in 2017 by Akash Gupta.</p>
    <h3>Sponsorships</h3>
    <hr></hr>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Guanti_da_portiere.jpg/327px-Guanti_da_portiere.jpg" className="w-25" alt=""></img>
    <p>International footballers Neymar, Gianluigi Buffon, Sergio Agüero, Antoine Griezmann, Marco Reus, Raphael Varane, Luis Suárez, David Silva, Vincent Kompany, Jonas Hofmann.</p>
    <p>In Formula 1, Elevate Shoes equips the teams of Mercedes AMG Petronas, Scuderia Ferrari, Red Bull Racing and Alfa Romeo. In addition, Elevate Shoes also sponsors BMW and Porsche in all of their Motorsports activities. In NASCAR Elevate Shoes equips Team Penske with fire suits, gloves, and shoes.</p>
    <p>In May 2019, English newspaper The Guardian stated that Elevate Shoes was the "world's first major company to put a value on its environmental impact" and that Elevate Shoes "has made a commitment that within four years, half its international collections will be manufactured according to its internal sustainability standard, by using more sustainable materials such as recycled polyester, as well as ensuring its suppliers develop more sustainable materials and products."
Elevate Shoes is also known for boosting positive environmental practices in its supply chain through financial incentives. The supply chain finance scheme implemented links the sustainability performance of key suppliers to the costs at which they can access finance. We won "Innovation Award" in Supply Chain Finance in 2021.</p>
<br></br><h3>Our Pillars</h3>
<hr></hr>


    {/* <!--grid of cards 1--> */}
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
            <div class="col">
                <div class="card mt-5  "> 
                    
                    <div class="card-body">
                        <img src="https://media.istockphoto.com/photos/confidence-that-supports-success-picture-id638979322?k=20&m=638979322&s=612x612&w=0&h=mrjOb6YnX8mTlXDiYJa76gIIQnd8c6Cnus8cKmfRVdA=" className="pic"   alt=""></img> <h5> Akash Gupta</h5>
                        <p class="text-secondary text-center" ><i>
                        Chief executive Officer</i>
                        </p> 
                        
                 
                    </div>                          
                </div>
                </div>


                <div class="col">
                <div class="card mt-5 rounded-shadow-lg"> 
                    
                    <div class="card-body">
                        <img src="https://thumbs.dreamstime.com/b/gorgeous-indian-woman-wear-formal-posing-cafe-210894525.jpg" className="w-75"  alt=""></img> <h5> Kalpana Shri</h5>
                        <p class="text-secondary text-center"><i>
                        Chief Financial Officer</i></p> 
                            
                   
                    </div>
                    </div>       
                </div>


                <div class="col">
                <div class="card mt-5 rounded-shadow-lg"> 
                    
                    <div class="card-body">
                        <img src="https://media.istockphoto.com/photos/portrait-of-mature-business-men-wearing-suit-standing-against-gray-picture-id1325164545?k=20&m=1325164545&s=612x612&w=0&h=vxGbZP1TB-NwTa0nevbnMOmatdwrwdr497muWs1Gct4=" className="w-75"  alt=""></img> <h5> Vikas Hari</h5>
                        <p class="text-secondary text-center"><i>
                        Global Operations Head</i></p> 
                             
                    
                    </div>        
                </div>
                </div>



            </div>

            <h3>Contact Us</h3>
            <p>  <GrFacebook/> www.facebook.com/ElevateShoesOfficial</p>
            <p> <GrInstagram/> www.instagram.com/ElevateShoesOff</p>
            <p> <ImTwitter/>www.instagram.com/ElevateShoesIndia</p>
            <p><FaPinterestSquare/>www.twitter.com/ElevateShoes</p>
            <p><BsYoutube/>www.youtube.com/ElevateShoes</p>
    </div>
  )
}

export default Aboutus