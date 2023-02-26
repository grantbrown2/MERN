import './App.css';
import Tabs from './components/Tabs';

function App() {
  const items = [ //information for each tab state
    {
      label: "Tab 1",
      content: "Tab 1 content is showing here."
    },
    {
      label: "Tab 2",
      content: "Tab 2 content is showing here."
    },
    {
      label: "Tab 3",
      content: "Tab 3 content is showing here."
    },
  ];
  return (
    <div className='container'>
      <Tabs items={items}/>
    </div>
  );
}

export default App;
