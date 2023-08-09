import {NoDataImg} from "../../../../photo";

import './NoData.css';
const NoData = () => {
    return (
        <div className='no-data-box'>
            <h1>
                <span style={{fontWeight: '700', color: 'var(--text-primary)'}}>Whoops!!</span> Looks like there is no data.
            </h1>
            <h3>
                We couldn't found any data, please add another item or try again.
            </h3>
            <img src={NoDataImg} alt={'no-data'}/>
        </div>
    );
}
export default NoData;