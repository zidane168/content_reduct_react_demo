import { useStore, actions } from './store';
import { useRef } from 'react'

function App() {
  const [state, dispatch] = useStore();
  const { todoInput,  todos } = state;

  console.warn('todoInput: ', todoInput)

  const nameRef = useRef();

  const handleAdd = () => {
      dispatch(actions.addTodo(todoInput))
      dispatch(actions.setTodo(''))
      nameRef.current.focus()
  }

  const handleDelete = (index) => {

       // alert('do uo want to delete?')
        dispatch(actions.deleteTodo(index))

  }

  return (
    <div>
      <input 
        ref = { nameRef }
        value = { todoInput }
        onChange={ (e) => { dispatch(actions.setTodo(e.target.value)) } }
      />

      <button
        onClick={ handleAdd }
      > 
        Add
      </button>

      {
        todos.map( (todo, index) => (
            <li key={ index }> { todo } 
            
                <span onClick={ () => handleDelete(index) }> &times; </span>
            </li>
        ) )
      }
      
    </div>
  );
}

export default App;
