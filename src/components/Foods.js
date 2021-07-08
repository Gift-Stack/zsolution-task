import { useContext, useEffect } from 'react';

import FoodContext from '../context/foodContext';
import FoodItem from './FoodItem';
import Loading from './Loading';

const Foods = () => {
    const { getFoods, foods, loading } = useContext(FoodContext);
    useEffect(() => {
        getFoods();
        //eslint-disable-next-line
    }, []);

    return (
        <div className='container'>
            {!loading ? (
                <div className='container my-2'>
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-4'>
                        {foods.map(food => (
                            <div>
                                <FoodItem key={food.id} food={food} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default Foods;
