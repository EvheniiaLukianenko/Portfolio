import './App.css';
import Header from './components/header/Header';
import MainPart from './components/main-part/MainPart';
import Footer from './components/footer/Footer';
<<<<<<< HEAD
import Modal from './components/modal/Modal';
=======
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        listData: state.listData,
        item: state.item,
    }
};
>>>>>>> a314b2fec1db587fca1e489b15fef15cf5fd9d60

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

// export default App;
export default connect(mapStateToProps)(App);
