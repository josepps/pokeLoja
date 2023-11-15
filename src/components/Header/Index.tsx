import { Link } from "react-router-dom";

import { AiOutlineSearch } from 'react-icons/ai';
import { TiMessages } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { GoClock } from "react-icons/go";

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
                <div className="containerContatoHeader">
                    <span><TiMessages /></span>
                    <p>Contatos <span><IoIosArrowDown /></span></p>
                    <div className="popUpContatoHeader">
                        <h5>Fale conosco</h5>
                        <a href="#"><p><span><FiPhone /></span>(81)99999-9999</p></a>
                        <h5>Whatsapp</h5>
                        <a href="#"><p><span><FaWhatsapp /></span>(81)99999-9999</p></a>
                        <h5>Email</h5>
                        <a href="#"><p><span><MdOutlineEmail /></span>PokeLoja@email.com</p></a>
                        <h5>Horário de atendimento</h5>
                        <p><span><GoClock /></span>Seg a Sex das 9h às 17h</p>
                    </div>
                </div>
            </div>
            <nav className="navHeader">

            </nav>
        </HeaderStyle>
    )
}

export default Header