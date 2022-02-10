import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";

//Callback prop
function addTask(name){
  alert(name);
}


function App(props) {
//Create a new data list
const taskList = props.tasks?.map(task => (
  <Todo 
    id={props.id} 
    name={props.name} 
    completed={props.completed}
    />)
    );

  return (  
    <div className="todoapp stack-large">
      <h1>BLL Incidence Reporting</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;