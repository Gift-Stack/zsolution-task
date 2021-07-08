import { useReducer } from 'react';
import axios from 'axios';
import FoodContext from './foodContext';
import FoodReducer from './foodReducer';
import { GET_FOODS } from './types';

const FoodState = ({ children }) => {
    const initialState = {
        loading: true,
        foods: null,
    };

    const [state, dispatch] = useReducer(FoodReducer, initialState);

    const api = 'https://asm-dev-api.herokuapp.com/api/v1/food';

    // Get foods
    const getFoods = async () => {
        try {
            const res = await axios.get(api, { params: { _limit: 6 } });

            dispatch({ type: GET_FOODS, payload: res.data.data.meals });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <FoodContext.Provider
            value={{
                loading: state.loading,
                foods: state.foods,
                getFoods,
            }}
        >
            {children}
        </FoodContext.Provider>
    );
};

export default FoodState;
