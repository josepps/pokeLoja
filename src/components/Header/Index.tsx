import { Link } from "react-router-dom";

import { AiOutlineSearch } from 'react-icons/ai';

import { HeaderStyle } from "./Header.Style";

function Header() {
    return (
        <HeaderStyle>
            <div className="containerHeader">
                <Link to="/">
                    <h2>PokeLoja</h2>
                </Link>
                <div className="containerInputHeader">
                    <input type="text" placeholder="Digite o que você procura"/>
                    <button><AiOutlineSearch /></button>
                </div>
            </div>
            <nav className="navHeader">

            </nav>
        </HeaderStyle>
    )
}

export default Header