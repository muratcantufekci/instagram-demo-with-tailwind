import { Link } from "react-router-dom";
import { logout } from "../firebase";
import Search from "./Search";

const Header = () => {
    return(
        <header className=" bg-white border-b border-gray-300">
            <div className="flex items-center justify-between h-[60px] container mx-auto">
                <Link to='/'>
                    <img className="h-[29px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png " />
                </Link>

                <Search/>

                <nav>
                    <button onClick={logout}>Logout</button>
                </nav>
            </div>
        </header>
    )
}
export default Header;