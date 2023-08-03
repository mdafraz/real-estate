import './app.css';
import Filter from './components/Filter';
import PropertyList from './components/PropertyList';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Filter />
      <div className="pt-5 p-8">
        <PropertyList />
      </div>
    </div>
  );
}
export default App;
