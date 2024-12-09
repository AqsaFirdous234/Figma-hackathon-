import { IoSearch } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { TbShoppingBag } from "react-icons/tb";
export default function Header(){
    return(
        <div className="header">
        <h1 className="food">Food</h1><h1 className="tuck">tuck</h1>
           <div className="navbar">
            <ul>
                <li className="home">Home</li>
                <li>Menu</li>
                <li>Blog</li>
                <li>Pages</li>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
            </ul>
           </div>
           <div className="icon">
           <IoSearch  size={25}/>
           <RiContactsLine size={25}/>
           <TbShoppingBag size={25} />
           </div>
        </div>
    )
}