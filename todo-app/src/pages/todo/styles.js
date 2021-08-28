import styled, {css} from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-top: 60px;
    width: 50vw;
    min-height: 30%;
    background-color: #FAFAFA;
    padding: 20px 0;
    margin: auto;
    div{
        display: flex;
        flex-direction: column;
        width: 100%;
        
        #logo{
            margin-left: 20px;
            h3{
                color: #42C4CA;
                font-size: 26px;
                margin: 0 0 -5px 0;
            }
            span{
                color: #606060;
                margin-left: 20px;
                font-size: 13px;
                font-weight: bold;
            }
        }
        
    }
    
    #list{
        color: #fafafa;
        margin: 20px;
        .todo{
            width: 100%;
            min-height: 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            background-color: #42C4CA;
            margin: 1px 0 1px 0;
            padding: 3px 0 3px 0;
            
            span{
                margin-left: 15px;
                max-width: 85%;

            }
            p{
                display:flex;
                justify-content: space-between;
                align-items: center;
                min-width: 45px;
                margin-right: 15px;

                input{
                    width: 14px;
                    height: 14px;
                }

                img{
                    width: 14px;
                    height: 14px;
                    cursor: pointer;
                }
            }
        }
    }
    
    form{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;

        button{
            border-radius: 30px;
            width: 70px;
            height: 35px;
            border: 0;
            font-weight: bold;
            background-color: #42C4CA;
            color: #FAFAFA;
        }
        button:hover{
            background-color: #FAFAFA;
            color: #42C4CA;
            border: solid 1px #42C4CA;
            transition: 0.3s;
            
        }

    }

`

export const ToDoItem = styled.span`
    ${props => props.checked && css`
        text-decoration: line-through;
        color: #F0F0F085;
    `}
`

const handleColor = status => {
    switch (status) {
        case "success":
            return "1px solid #66AA66";
        case "error":
            return "1px solid #DD6666";
        default:
            return "0";
    }
};

export const ToDoInput = styled.input`
    background-color: #F0F0F0;
    outline: 0;
    border-radius: 5px;
    height: 35px;
    width: 80%;
    padding: 0 5px 0 5px;
    font-size: 14px;
    border: ${props => handleColor(props.status)}
`