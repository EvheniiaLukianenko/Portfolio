import './App.css';
import Header from './components/header/Header';
import MainPart from './components/main-part/MainPart';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal'
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const mapStateToProps = (state) => {
    return {
        list: state.list,
        item: state.item,
        modal: state.modal,
    }
};

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/">
            <Header/>
            <MainPart/>
            <Footer/>
            <Modal/>
          </Route>
      </Router> 
    </div>
  );
}

// export default App;
export default connect(mapStateToProps)(App);
