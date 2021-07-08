import Spinner from '../spinner/spinner.svg';
const Loading = () => {
    return (
        <div
            className='d-flex align-items-center justify-content-center'
            style={{ height: '100vh' }}
        >
            <img src={Spinner} alt='Loading...' />
        </div>
    );
};

export default Loading;
