import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';

function App() {
  return (
    <div className='App'>
      <main>
        <Home />
        <Footer />
      </main>
    </div>
  );
}

export default App;
