import React from 'react';
import "../../style/_aboutus.scss"

const aboutus = () => {
    return (
        
        <div className="about-link">
            
            <div className="aboutus1">
                <caption>
                    <h1 style={{
                        width:"300px"
                    }}>ABOUT US</h1>
                </caption>
            </div>
                <hr></hr>
    <table>
           <tr>
                 <th> <div className= "gorail" ><h2><p>GoRails Mission</p></h2></div>  
                       
                       <div className= "content">
                            
                        <p> To provide assistance to meet </p>
                        <p> immediate transportation needs </p>
                        <p> and contribute to durable solution.</p>
                         </div>                
                </th>
                    
                    <th>
                      <div className= "gorail" ><h2><p>GoRails Vision</p></h2></div>  
                       <div className= "content">

                        <p> Right Respected</p>
                        <p> People Protected</p>
                        <p> Goods Protected</p>
                       </div>
                    </th>
            </tr>
               
             <tr>
                  <th>
                    <div className= "gorail" ><h2><p>GoRails Passion</p></h2></div>
                        <div className= "content">
                        <p> Safety and Delivery of persons </p>
                        <p> and good to their various destinantion. </p>
                     </div>
                  </th>
                        
                 <th>
                       <div className= "gorail" ><h2><p>GoRails Value</p></h2></div> 
                        <div className= "content">
                        <ul>
                            <li> Dedication</li>
                            <li> Innovation</li>
                            <li> Efficiency</li>
                        </ul>
                       </div>    
                 </th>
             </tr>

            </table>
            <hr></hr>
            <h3>FAQ</h3>
            <hr></hr>
            <h3>Contact Info</h3>
        </div>
    )
}

export default aboutus;
