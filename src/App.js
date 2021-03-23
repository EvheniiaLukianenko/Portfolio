import './App.css';
import Header from './components/header/Header';
import MainPart from './components/main-part/MainPart';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPart/>
      <Footer/>
      <Modal/>
    </div>
  );
}

export default App;
