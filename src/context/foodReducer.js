import { GET_FOODS, GET_ALL_FOODS } from './types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case GET_FOODS:
        case GET_ALL_FOODS:
            return {
                ...state,
                foods: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
