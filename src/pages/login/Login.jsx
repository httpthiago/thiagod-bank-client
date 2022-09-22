import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="container">
            <div className="left-side-layout">
                <div className="left-side-content">
                    <h1 className="logo-thiagodbank">
                        THIA<span className="left-side-blue-text">GOD</span> <br />
                        BANK
                    </h1>
                    <p className="bank-description">O banco onde todos saem <span className="left-side-blue-text">ganhando</span> </p>
                </div>
            </div>
            <div className="right-side-layout">
                <form className="login-form">
                    <div className="input-group">
                        <Input inputType="cpf" inputPlaceholder="CPF" name="cpf"/>
                        <Input inputType="password" inputPlaceholder="Senha"/>
                    </div>
                    <div className="button-group">
                        <Button value="Entrar" type="submit"/>
                        <Link to="/abrir-conta"><Button value="Abrir conta" type="button"/></Link> 
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export default Login;