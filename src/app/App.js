import './App.css';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
      hello
      <Outlet/>
    </div>
  );
}

export default App;
