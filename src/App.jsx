import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import { Home, Header, Orders } from './components/Routes';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
