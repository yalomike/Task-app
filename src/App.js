import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <div className="app-task">
        <div className="freecodecamp-logo-container">
          <h1>MICHAEL YALOVETZKY</h1>
          <h4>REACT TASK PROJECT</h4>
        </div>
      </div>
      <div className="principal-list-task">
        <h2>My tasks </h2>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
