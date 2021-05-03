import './App.css';
import HelloComponent from './hello';
import ButtonComponent from './buttoncomp';
import TextComponent from './textcomp';

function App() {
  return (
    <div className="App">
      <HelloComponent />
      <TextComponent message="TODO List" />
      <ButtonComponent />
    </div>
  );
}

export default App;
