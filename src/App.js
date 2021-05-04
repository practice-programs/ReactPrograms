import './App.css';
import HelloComponent from './hello';
import ButtonComponent from './buttoncomp';
import TextComponent from './textcomp';
import MaterialComponent from './materialui';

function App() {
  return (
    <div className="App">
      {/* <HelloComponent />
      <TextComponent message="TODO List" />
      <ButtonComponent /> */}
      <MaterialComponent />
    </div>
  );
}

export default App;
