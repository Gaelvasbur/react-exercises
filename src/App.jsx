import ColorFlipper from './components/01_ColorFlipper';
import ClickCounter from './components/02_ClickCounter';
import DynamicList from './components/03_DynamicList';
import RealTimeSearchFilter from './components/04_RealTimeSearchFilter';
import SimpleCalculator from './components/05_SimpleCalculator';
import Timer from './components/06_Timer';
import RandomPasswordGenerator from './components/07_RandomPasswordGenerator';
import WordAndCharacterCounter from './components/08_WordAndCharacterCounter';
import TodoListWithLocalStorage from './components/09_ToDoListWithLocalStorage';

function App() {
  return (
    <div>
      <h1>React Exercises - Conquer Blocks</h1>

      <div className="exercises-container">
        
        <div className="exercise-card">
          <h2>Exercise 1: Color Flipper</h2>
          <div className="component-wrapper">
            <ColorFlipper />
          </div>
        </div>

        <div className="exercise-card">
          <h2>Exercise 2: Click Counter</h2>
          <div className="component-wrapper">
            <ClickCounter />
          </div>
        </div>

        <div className="exercise-card">
          <h2>Exercise 3: Dynamic List</h2>
          <div className="component-wrapper">
            <DynamicList />
          </div>
        </div>

        <div className="exercise-card">
          <h2>Exercise 4: Real-Time Search Filter</h2>
          <div className="component-wrapper">
            <RealTimeSearchFilter />
          </div>
        </div>

        <div className="exercise-card">
          <h2>Exercise 5: Simple Calculator</h2>
          <div className="component-wrapper">
            <SimpleCalculator />
          </div>
        </div>

        <div className="exercise-card">
          <h2>Exercise 6: Timer with Play, Pause & Reset</h2>
          <div className="component-wrapper">
            <Timer />
          </div>
        </div>

        <div className="exercise-card">
          <h2>Exercise 7: Random Password Generator</h2>
          <div className="component-wrapper">
            <RandomPasswordGenerator />
          </div>
        </div>

        <div className="exercise-card">
          <h2>Exercise 8: Word and Character Counter</h2>
          <div className="component-wrapper">
            <WordAndCharacterCounter />
          </div>
        </div>

        <div className="exercise-card">
          <h2>Exercise 9: To-Do List with LocalStorage</h2>
          <div className="component-wrapper">
            <TodoListWithLocalStorage
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;


