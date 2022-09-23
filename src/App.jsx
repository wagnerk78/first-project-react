import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



import { Container, ToDoList, Input, Button, ListItem, Trash, Rocket, Text} from './styles'

function App() {

  const [list, setlist] = useState([]);
  const [task, settask] = useState('');

  function valueInput(event) {
    settask(event.target.value)
  }

  function addTask() {
    if (task) {
    setlist([...list, { id: uuidv4(), task, finished: false }])
  }
}


  function finishedTask(id) {
  
    const newList = list.map( item =>
      item.id === id ? {...item, finished: !item.finished} : item
      )
      setlist(newList)
  }

  function deleteTask(id) {

    const newlist2 = list.filter ( item =>
      item.id !== id 
      )

      setlist(newlist2)

  }



  return (
    <Container>
      <ToDoList>
        <Input onChange={valueInput} placeholder="O que temos para fazer ?" />
        <Button onClick={addTask}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (
            list.map(item => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Rocket onClick={() => finishedTask(item.id)} />
                <li> {item.task}</li>
                <Trash onClick={() => deleteTask(item.id)} />
              </ListItem>
            )))
            : ( <Text> Não há a nada a fazer aqui!</Text>)
          }
        </ul>


      </ToDoList>
    </Container>
  )
}

export default App
