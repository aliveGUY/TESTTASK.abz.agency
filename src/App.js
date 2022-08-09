import './App.css';
import './components/Header.css';
import './components/Headline.css';
import './components/Team.css';
import './components/Form.css';
import Header from './components/Header';
import Headline from './components/Headline';
import Team from './components/Team';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <Headline />
      <Team />
      <Form />
    </div>
  );
}

export default App;
