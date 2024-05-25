import { useNavigate } from 'react-router-dom';

import './App.css';

function App() {

  const navigate = useNavigate();
  //hook ekk use kala

  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome To Hani World</h1>
       <button onClick={()=> navigate('/users')} className="user-button">Users</button>
      </header>
    </div>
  );
}

export default App;

