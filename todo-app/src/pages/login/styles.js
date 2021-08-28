import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 60px;
    justify-content: center;
    width: 80vw;
    // min-height: 100%;
    height: 80%;
    padding: 0;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.25);
    border-radius: 10px 10px 10px 10px;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;

        button{
            border-radius: 30px;
            width: 100px;
            height: 35px;
            border: 0;
            font-weight: bold;
        }
        
    }
    
    #right-div{
        background-color: #42C4CA;
        flex-grow: 7;
        color: #f0f0f0;
        border-radius: 10px 0 0 10px;
        
        h2{
            font-size: 30px;
            margin: 0;
            margin-bottom: 15px;
        }
        span {
            text-align: center;
            font-size: 20px;
            font-weight: lighter;
            margin-bottom: 50px;
        }
        button{
            background-color: #FAFAFA;
            color: #42C4CA;
        }
        button:hover{
            background-color: #42C4CA;
            color: #FAFAFA;
            border: #42C4CA;
            border: solid 1px #FAFAFA;
            transition: 0.3s;
        }
    }
    #left-div{
        background-color: #fafafa;
        flex-grow: 6;
        border-radius: 0 10px 10px 0;
        
        span {
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
        form{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            width: 100%;
            align-items: center;
            height: 30%;
            input{
                background-color: #F0F0F0;
                border: 0;
                outline: 0;
                border-radius: 5px;
                height: 30px;
                width: 50%;
                padding: 0 5px 0 5px;
                font-size: 14px;
            }
            button{
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
    }
    
    
    `
    
    