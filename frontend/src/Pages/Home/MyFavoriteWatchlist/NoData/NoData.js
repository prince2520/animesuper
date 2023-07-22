import {NoDataImg} from "../../../../photo";

import './NoData.css';
const NoData = () => {
    return (
        <div className='no-data-box'>
            <h1>
                <span style={{fontWeight: '700', color: '#F6764D'}}>Whoops!!</span> Looks like there is no data.
            </h1>
            <h3 style={{color: '#636262', fontWeight: '300'}}>
                We couldn't found any data, please add another item or try again.
            </h3>
            <img src={NoDataImg} alt={'no-data'}/>
        </div>
    );
}
export default NoData;