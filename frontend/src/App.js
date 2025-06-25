import './App.css';
import Dashboard from './layout/Dashboard';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Dashboard />

      <Footer />
    </div>
  );
}
export const API_BASE_URL="http://18.118.194.157/:8080";
export default App;
