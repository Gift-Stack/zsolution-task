const FoodItem = ({ food }) => {
    const { strMealThumb, title, ratings, price, description, strMeal } = food;

    // console.log(strMealThumb, title, ratings, price, description, strMeal);
    return (
        <div className='col'>
            <div
                className='card'
                style={{
                    borderTopRightRadius: '20px',
                    borderBottomLeftRadius: '20px',
                    borderTopLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    // width: 220,
                }}
            >
                <img
                    src={strMealThumb}
                    className='card-img-top img-fluid'
                    alt='...'
                    style={{
                        borderTopRightRadius: '20px',
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: '20px',
                    }}
                />
                <div className='py-3 px-2'>
                    <div
                        className='d-flex justify-content-between'
                        // style={{ lineHeight: 0 }}
                    >
                        <h5 className='card-title'>
                            <strong>{title}</strong>
                        </h5>
                        <p>
                            <strong>{price}</strong>
                        </p>
                    </div>
                    <p
                        className=''
                        style={{ fontSize: 'small', marginTop: '-15px' }}
                    >
                        {strMeal}
                    </p>
                    <p
                        className='card-text text-truncate'
                        style={{ fontSize: 'small' }}
                    >
                        {description}
                    </p>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='icons px-3'>
                        <i
                            className='bi bi-star-fill'
                            style={{
                                color: `${
                                    ratings === 1 ||
                                    ratings === 2 ||
                                    ratings === 3 ||
                                    ratings === 4 ||
                                    ratings === 5
                                        ? '#FFA500'
                                        : 'lightgrey'
                                }`,
                                fontSize: 'small',
                            }}
                        ></i>
                        <i
                            className='bi bi-star-fill'
                            style={{
                                color: `${
                                    ratings === 2 ||
                                    ratings === 3 ||
                                    ratings === 4 ||
                                    ratings === 5
                                        ? '#FFA500'
                                        : 'lightgrey'
                                }`,
                                fontSize: 'small',
                            }}
                        ></i>
                        <i
                            className='bi bi-star-fill'
                            style={{
                                color: `${
                                    ratings === 3 ||
                                    ratings === 4 ||
                                    ratings === 5
                                        ? '#FFA500'
                                        : 'lightgrey'
                                }`,
                                fontSize: 'small',
                            }}
                        ></i>
                        <i
                            className='bi bi-star-fill'
                            style={{
                                color: `${
                                    ratings === 4 || ratings === 5
                                        ? '#FFA500'
                                        : 'lightgrey'
                                }`,
                                fontSize: 'small',
                            }}
                        ></i>
                        <i
                            className='bi bi-star-fill'
                            style={{
                                color: `${
                                    ratings === 5 ? '#FFA500' : 'lightgrey'
                                }`,
                                fontSize: 'small',
                            }}
                        ></i>
                    </div>
                    <a
                        href='#h'
                        className='btn'
                        style={{
                            background: '#FFA500',
                            borderTopRightRadius: 0,
                            borderTopLeftRadius: '10px',
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                        }}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='30'
                            height='30'
                            fill='white'
                            className='bi bi-plus'
                            viewBox='0 0 16 16'
                        >
                            <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
