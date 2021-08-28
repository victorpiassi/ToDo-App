import React from "react"
import { Container } from "./styles"

function Login (props){    

    function handleLogin(e) {
        e.preventDefault()
        console.log(e)
        if (e.target[0].value === "victorpiassi" & e.target[1].value === "todoapp"){
            props.setSession(true)
        }
        else{
            e.target[1].value = ""
        }
    }

    return(
        <Container>
            <div id="right-div">
                <h2>Bem Vindo!</h2>
                <span>Para utilizar nossas funcionalidades de <br/> listagem de tarefas, registre-se.</span>
                <button>Registre-se</button>
            </div>
            <div id="left-div">
                <span>
                    <h3>ToDo App</h3>
                    <span>Anote e conclua :)</span>
                </span>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Usuário" name="username"></input>
                    <input type="password" placeholder="Senha" name="password"></input>
                    <button>Entrar</button>
                </form>
            </div>
        </Container>
    )
}

export default Login
