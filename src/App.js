import './App.css';
import FoodState from './context/FoodState';

import Foods from './components/Foods';

function App() {
    return (
        <FoodState>
            <div className=''>
                <Foods />
            </div>
        </FoodState>
    );
}

export default App;
