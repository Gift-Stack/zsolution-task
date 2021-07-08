import { useContext, useEffect, useState } from 'react';

import FoodContext from '../context/foodContext';
import FoodItem from './FoodItem';
import Loading from './Loading';

const Foods = () => {
    const [learnMore, setLearnMore] = useState(false);
    const { getFoods, getAllFoods, foods, loading } = useContext(FoodContext);
    // const sliceFoods = foods && foods.splice(0, 5);

    const handleLearnMore = () => {
        setLearnMore(true);
    };
    useEffect(() => {
        getFoods();
        //eslint-disable-next-line
    }, []);
    useEffect(() => {
        learnMore && getAllFoods();
        // eslint-disable-next-line
    }, [learnMore]);

    return (
        <div className='container'>
            {!loading ? (
                <div className='container my-2'>
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-4 gx-n5'>
                        {foods.map(food => (
                            <div
                                className='px-sm-5 d-flex justify-content-center'
                                // style={{ maxWidth: 260 }}
                            >
                                <FoodItem key={food.id} food={food} />
                            </div>
                        ))}
                    </div>
                    <div className='d-flex justify-content-center my-5'>
                        <p
                            className='btn btn-primary badge-pill'
                            onClick={handleLearnMore}
                            style={{
                                display: `${learnMore && 'none'}`,
                                background: '#FFA500',
                                border: '#FFA500',
                                borderRadius: 50,
                                fontSize: 'small',
                            }}
                        >
                            Learn more
                        </p>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default Foods;
