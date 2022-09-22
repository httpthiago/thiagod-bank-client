import "./input.css"
import CpfIcon from "../../img/icone-input.png";
import PasswordIcon from "../../img/icone-pwd.png";
import { useState } from "react";
function cpfMask (cpf) {
    return cpf
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

function Input(props) {
    const [cpf, setCpf] = useState("");
    switch (props.inputType) {
        case "cpf":
            return (
                <div className="generic-input">
                    <img src={CpfIcon} alt="" />
                    <input type="text" placeholder={props.inputPlaceholder} value={cpf} onChange={e => setCpf(cpfMask(e.target.value)) }
                    name={props.name}
                    autoComplete="off"/>
                </div>
                
            );
        case "password": 
            return (
                <div className="generic-input">
                    <img src={PasswordIcon} alt="" />
                    <input type={props.inputType} placeholder={props.inputPlaceholder}>
                    </input>
                </div>
                
            );
        default: 
            return (
                <input type="text"></input>
            );
    }    
}

export default Input;