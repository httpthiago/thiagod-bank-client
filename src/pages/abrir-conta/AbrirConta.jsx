import "./abrir-conta.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

function AbrirConta() {
  return (
    <div className="open-acc-container">
      <div className="info-group">
        <Link style={{textDecoration: "none"}} to="/">
        <h1 className="logo-thiagodbank">
                          THIA<span className="left-side-blue-text">GOD</span> <br />
                          BANK
                      </h1>

        </Link>
        <p className="info-description"> Abra sua <span className="left-side-blue-text">conta</span> </p>
      </div>
      <form className="open-acc-form" action="">
        <div className="open-acc-input-group">
          <Input inputType="text" inputPlaceholder="Nome" name="nome"/>
          <Input inputType="cpf" inputPlaceholder="CPF" name="cpf"/>
        </div>
        <div className="open-acc-input-group">
          <Input inputType="birthday" inputPlaceholder="Nascimento" name="nascimento"/>
          <Input inputType="email" inputPlaceholder="Email" name="email"/>
        </div>
        <div className="open-acc-input-group">
          <Input inputType="password" inputPlaceholder="Senha" name="senha"/>
          <Input inputType="password" inputPlaceholder="Confirme sua senha" name="senhaConfirmar"/>
        </div>
        <Button type="submit" value="Abrir conta"/>
      </form>
    </div>
  );
}

export default AbrirConta;