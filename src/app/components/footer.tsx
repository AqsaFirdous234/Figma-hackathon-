import Image from "next/image"
import Watch from "../data/Watch.png"
import Picture1 from "../data/Component 71.png"
import Picture2 from "../data/Component 72.png"
import Picture3 from "../data/Component 73.png"
import Icon from  "../data/Sociali icon (1).png"
export default function Footer(){
    return(
        <div className="footer">
          <div className="left-container">
          <h1 className="heading4"> 
                Still You Need Our Support ?
            </h1>
            <p className="para">
                Don’t wait, make a smart & logical quote here. It's pretty easy.
            </p>
          </div>
          <div className="right-container">
            <input type="text" placeholder="Enter your Email" />
            <button>subscribe Now</button>
          </div>
          <hr color="yellow" />
          <div className="About-footer">
            <h1>About us</h1>
            <p>Orperate client  and leisure travelers hasbeen   <br />
                replying on Groundlink for dependablesafe, and  professional   <br /> 
                professional chauffeured careservice in majaor <br />
                cities acroos World.
            </p> 
            <Image src={Watch} alt="Watch" width={60}/>
            <p className="Timming">Opening House <br />
             Mon - Sat(8 - 6) <br />
             Ssunday-Closed
            </p>
          </div>
          <div className="Useful">
            <h1>Useful Links</h1>
            <br />
            <ul>
              <li><a href="#">About</a></li><br />
              <li><a href="#">News</a></li><br />
              <li><a href="#">Painers</a></li><br />
              <li><a href="#">Teams</a></li><br />
              <li><a href="#">Menu</a></li><br />
              <li><a href="#">Contact</a></li><br />
            </ul>
          </div>
          <div className="help">
            <h1>Help ?</h1> <br />
            <ul>
                <li>FAQ</li><br />
                <li>Team & Condition</li><br />
                <li>Regording</li><br />
                <li>Documentation</li><br />
                <li>Support & Policy</li><br />
                <li>Privacy</li><br />
            </ul>
          </div>
          <div className="image">
            <h1>Resent Post</h1>
            <div className="picture1">
            <Image src={Picture1} alt="Picture" />
            </div>
            <div className="picture2">
              <Image src={Picture2} alt="Picture" />
            </div>
             <div className="picture3">
             <Image src={Picture3} alt="Picture" />
             </div>
          </div>
          <div className="Aqsa">
       <div className="copy"> <p> Copyright &copy; {new Date().getFullYear()} Ayeman. All rights reserved.</p></div>
         <div className="picture4">
          <Image src={Icon} alt="icon" />
         </div>
        </div>
      
        </div>
    )
}