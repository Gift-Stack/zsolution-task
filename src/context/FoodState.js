import { useReducer } from 'react';
import axios from 'axios';
import FoodContext from './foodContext';
import FoodReducer from './foodReducer';
import { GET_FOODS, GET_ALL_FOODS } from './types';

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
            const res = await axios.get(api);
            const fewFoods = res.data.data.meals.slice(0, 6);

            dispatch({ type: GET_FOODS, payload: fewFoods });
        } catch (error) {
            console.error(error);
        }
    };

    // Get all foods
    const getAllFoods = async () => {
        try {
            const res = await axios.get(api);

            dispatch({ type: GET_ALL_FOODS, payload: res.data.data.meals });
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
                getAllFoods,
            }}
        >
            {children}
        </FoodContext.Provider>
    );
};

export default FoodState;
