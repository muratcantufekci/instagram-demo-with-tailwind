import { Link, NavLink } from "react-router-dom";
import { logout } from "../firebase";
import Icon from "./Icon";
import Search from "./Search";

const Header = () => {
    return(
        <header className=" bg-white border-b border-gray-300">
            <div className="flex items-center justify-between h-[60px] container mx-auto">
                <Link to='/'>
                    <img className="h-[29px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png " />
                </Link>

                <Search/>

                <nav className="flex items-center gap-x-6">
                    <NavLink to="/">
                        <Icon name='home' size={24}/>
                    </NavLink>
                    <NavLink to="/">
                        <Icon name='direct' size={24}/>
                    </NavLink>
                    <NavLink to="/">
                        <Icon name='new' size={24}/>
                    </NavLink>
                    <NavLink to="/">
                        <Icon name='explore' size={24}/>
                    </NavLink>
                    <NavLink to="/">
                        <Icon name='heart' size={24}/> 
                    </NavLink>
                    <button onClick={logout}>
                        <img src="/no-avatar.jpeg" className="w-6 h-6 rounded-full" />
                    </button>
                </nav>
            </div>
        </header>
    )
}
export default Header;