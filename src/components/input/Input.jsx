import "./input.css"
import CpfIcon from "../../img/icone-input.png";
import PasswordIcon from "../../img/icone-pwd.png";
import EmailIcon from "../../img/icon-email.png";
import BirthdayIcon from "../../img/icon-dob.png";
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
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    switch (props.inputType) {
        case "cpf":
            return (
                <div className="generic-input">
                    <input type="text" placeholder={props.inputPlaceholder} value={cpf} onChange={e => setCpf(cpfMask(e.target.value)) }
                    name={props.name}
                    autoComplete="off"/>
                    <img src={CpfIcon} alt="" />
                </div>
                
            );
        case "password": 
            return (
                <div className="generic-input">
                    <input type={props.inputType} 
                           placeholder={props.inputPlaceholder} 
                           value={password} 
                           onChange={e => setPassword(e.target.value)}
                           name={props.name}/>
                    <img src={PasswordIcon} alt="" />
                </div>
                
            );
        case "email": 
            return (
                <div className="generic-input">
                    <input type="email" 
                           placeholder={props.inputPlaceholder}
                           name={props.name}
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                    />
                    <img src={EmailIcon} alt="" />
                </div>
                
            );  
        case "birthday": 
        return (
            <div className="generic-input">
                <input type="date" 
                       placeholder={props.inputPlaceholder}
                       name={props.name}
                       value={birthday}
                       onChange={e => setBirthday(e.target.value)}/>
                <img src={BirthdayIcon} alt="" />
            </div>
            
        ); 
        default: 
            return (
                <div className="generic-input">
                    <input type={props.inputType} 
                           placeholder={props.inputPlaceholder}
                           name={props.name}
                           value={name}
                           onChange={e => setName(e.target.value)}/>
                    <img src={CpfIcon} alt="" />
                </div>
            );
    }    
}

export default Input;