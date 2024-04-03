import { useContext } from "react";
import { FN_Context } from "../../context/FullNameContext";

import "./header.css";
import { DarkModeContext } from "../../context/DarkModeContext";
import NavLinkByRahib from "../NaviLinkByRahib";

function Header() {
    const { ad } = useContext(FN_Context)
    const [emoji, handleModeChange] = useContext(DarkModeContext)
    return <nav>
        <p style={{ margin: 0 }}>Xos gelifsen, {ad}</p>
        <button onClick={handleModeChange}>{emoji}</button>
        <NavLinkByRahib title="Home" to="/" />
        <NavLinkByRahib title="About" to="/about" />
        <NavLinkByRahib title="calculator" to="/calculator" />
        <NavLinkByRahib title="Users" to="/users" />
    </nav>
}

export default Header;