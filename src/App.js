import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Routing from './routes/Routing';

function App() {
  return (
    <>
      <Routing />
      <Footer />
    </>
  );
}

export default App;
