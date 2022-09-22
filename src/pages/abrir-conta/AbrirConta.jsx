import "./abrir-conta.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

function AbrirConta() {
  return (
    <div className="open-acc-container">
      <div className="info-group">
      <h1 className="logo-thiagodbank">
                        THIA<span className="left-side-blue-text">GOD</span> <br />
                        BANK
                    </h1>
                    <p className="info-description"> Abra sua<span className="left-side-blue-text">conta</span> </p>
      </div>
      <form className="open-acc-form" action="">
        <div className="open-acc-input-group">
          <Input inputType="text" inputPlaceholder="Nome"/>
          <Input inputType="cpf" inputPlaceholder="CPF"/>
        </div>
        <div className="open-acc-input-group">
          <Input inputType="birthday" inputPlaceholder="Nascimento"/>
          <Input inputType="email" inputPlaceholder="Email"/>
        </div>
        <div className="open-acc-input-group">
          <Input inputType="password" inputPlaceholder="Senha"/>
          <Input inputType="password" inputPlaceholder="Confirme sua senha"/>
        </div>
        <Button type="submit" value="Abrir conta"/>
      </form>
    </div>
  );
}

export default AbrirConta;