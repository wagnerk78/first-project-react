import styled from 'styled-components'

import { FaFileExcel, FaRocket, FaTrashAlt } from "react-icons/fa";

export const Container = styled.div`
background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
export const ToDoList = styled.div`
background: white;
padding: 30px 20px;
border-radius: 5px;

ul {
    padding: 0;
    margin-top: 60px;
}
`

export const Input = styled.input`
border: 2px solid rgba(209, 211, 212, 0.4);
border-radius: 5px;
margin-right: 40px;
height: 40px;
width: 340px;
`
export const Button = styled.button`
background: #8052EC;
border-radius: 5px;
border: none;
width: 130px;
height: 40px;
font-weight: 900;
font-size: 17px;
line-height: 2px;
color: white;
cursor: pointer;

&:active {
    opacity: 0.5;
}

&:hover {
    opacity: 0.8;
}

&:placeholder-shown {
    color: red;
}

`
export const ListItem = styled.div`
background: ${props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
border-radius: 5px;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
padding: 0px 20px;
width: 500px;
font-size: 20px;

li {
    list-style: none;
}
`

export const Trash = styled(FaTrashAlt)`
cursor: pointer;
color: #8052EC;
`
export const Rocket = styled(FaRocket)`
cursor: pointer;
color: #8052EC;
`

export const Text =styled.text`
color: #8052EC;
display:grid;
text-align: center;
font-size: 23px;

`