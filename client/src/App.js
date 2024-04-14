import { Provider } from 'react-redux';
import './App.css';
import Comp from './Components/Comp';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Comp />
      </div>
    </Provider>
  );
}

export default App;
