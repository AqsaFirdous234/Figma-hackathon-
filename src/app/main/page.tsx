import Image from "next/image";
import Picture from "../data/picture.jpeg"
export default function Main(){
    return(
        <div className="main">
            <div className="Picture">
                <Image
                    src={Picture}
                    alt="Profile Picture"
                    width={1400}
                    height={200}
                />
            </div>
            <div className="error">
                <h1 className="errors">404 Error</h1>
                <div className="error-div">
                <h1 className="home-heading">Home {'>'} </h1>
                <h1 className="home">404</h1>
                </div>
            </div>
            <div className="wrong">
                <h1 className="heading2">
                    404
                </h1>
                <h1 className="something-wrong">
                    Opps! Look likes Something going wrong
                </h1>
           <p className="paragraph">
            Page Cannot be Found! we'll have it figured out in no time.
           </p>
           <p className="paragraph"> Mean whlie, cheek out these fresh ideas:</p>
            </div>
            <button className="Go-home"> Go to home</button>
        </div>
    )
}