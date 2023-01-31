import { FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaShoppingCart } from "react-icons/fa";
import Produto from "./components/produto/produto";
import Logo from "./img/logo.png"
import './app.css';

export default function App() {
  return (
    <div className="body">
      <div className="container_body">
        <section className="contatos">
          <img src={Logo} className="logo"/>
          <div className="icons">
            <a href="https://wa.me/5517992302270" target='_blank'><FaWhatsapp/></a>
            <a href="https://www.instagram.com/drogarias.shalom.popular/" target='_blank'><FaInstagram/></a>
            <a href="https://www.facebook.com/DrogariasShalom" target='_blank'><FaFacebook/></a>
            <a href="https://www.farmashalom.com.br/" target='_blank'><FaShoppingCart/></a>
          </div>
        </section>

        <section className="produto">
          <Produto/>
        </section>
      </div>
    </div>
  );
}