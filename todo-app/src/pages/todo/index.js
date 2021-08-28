import React, {useState} from "react"
import { Container, ToDoItem, ToDoInput } from "./styles"
import close from "../../assets/close.png"

function ToDo(){

    function handleCreateTodo(e){
        e.preventDefault()
        const description = e.target[0].value
        if (description.trim() !== ""){
            
            e.target[0].value = ""
            setTodoData([...todo, {description: description, checked: false}])
            setInputStatus("success")
        }
        else{
            setInputStatus("error")
        }

        console.log(inputStatus, e.target[0].status)
    }
    
    const [inputStatus, setInputStatus] = useState()
    const [todo, setTodoData] = useState([
        {
            description: "Passear com o cachorro.",
            checked: false
        }
    ])

    return(
        <Container>
            <div>
                <span id="logo">
                    <h3>ToDo App</h3>
                    <span>Anote e conclua :)</span>
                </span>
            </div>
            <div id="list">
                {(todo) ? todo.map((task, i) => {
                    return(
                        <div className="todo" key={i}>
                            <ToDoItem checked={task.checked}>{task.description}</ToDoItem>
                            <p>
                                <input type="checkbox" 
                                    onChange={(e) => {
                                            task.checked = !task.checked
                                            setTodoData([...todo])
                                        }}
                                    checked={task.checked}>
                                </input>

                                <img src={close} alt="close" 
                                    onClick={(e) => {
                                        setTodoData(todo.filter((filtered, filtered_i) => filtered_i !== i))
                                    }
                                }/>
                            </p>
                        </div>
                    )
                }) : <div></div>}
            </div>
            <form onSubmit={handleCreateTodo}>
                <ToDoInput placeholder="Adicionar uma tarefa" status={inputStatus}></ToDoInput>
                <button>Enviar</button>
            </form>
        </Container>
    )
}

export default ToDo