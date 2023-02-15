import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Grant"} lastName={"Brown"} age={21} hairColor={"Brown"} />
      <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} />
      <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Black"} />
      <PersonCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Black"} />
    </div>
  );
}

export default App;