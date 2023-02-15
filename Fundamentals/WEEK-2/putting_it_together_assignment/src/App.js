import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Grant"} lastName={"Brown"} initialAge={21} hairColor={"Brown"} />
      <PersonCard firstName={"John"} lastName={"Smith"} initialAge={88} hairColor={"Brown"} />
      <PersonCard firstName={"Millard"} lastName={"Fillmore"} initialAge={50} hairColor={"Black"} />
      <PersonCard firstName={"Maria"} lastName={"Smith"} initialAge={62} hairColor={"Black"} />
    </div>
  );
}

export default App;