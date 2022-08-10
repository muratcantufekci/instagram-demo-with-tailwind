import { useEffect } from "react";
import { logout } from "../firebase";

const Logout = () => {
    useEffect(() => {
        logout()
    })
    return null
}
export default Logout;