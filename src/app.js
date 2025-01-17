import React, { useState, useEffect } from "react";

const App = () => {
    const [usuario, setUsuario] = useState("");
    const [count, setCount] = useState(0); //crido para usar no useEfect
    const [usuarios, setUsuarios] = useState(["Matheus", "Lucas", "Vinicius"]);

    const handAddUseer = () => { //eu quero que meu handAddUseer /  e colocamos no botao
        setUsuarios([...usuarios, usuario]); // setUsuarios ele vai ter o valor atual
        //os 3 pontinhos significa copiar o valor atual e adicionar o novo usuario
        setUsuario(""); //assim que adicionar o campo fica vazio
    }

    useEffect (() => { //ele é uma função que no primeiro parametro ele recebe uma função
        setCount(usuarios.length)// faz com que toda vez que usuarios for atualizada ele vai contar
    },[usuarios])// e no segundo parametro ele vai receber um array de dependencia
    
    return (       
        <div className="App">
            <h1>Nosso fomulario!</h1>
            <h2>Total de usuarios: {count}</h2>
            <div>
                <input value={usuario} onChange={(event) => setUsuario(event.target.value)} />

                <button onClick={handAddUseer}>Adicionar</button> 
            </div>
            <hr />

            {usuarios.map((item) => ( // abriu com()
                <p>{item}</p>
            ))}
        </div>
    );
};

export default App;