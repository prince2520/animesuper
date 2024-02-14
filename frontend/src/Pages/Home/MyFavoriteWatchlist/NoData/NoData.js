import {NoDataImg} from "../../../../photo";

import '../NoData/NoData.css';

const NoData = () => {
    return (
        <div className='no-data-box'>
            <h3>
                <span style={{fontWeight: '700', color: 'var(--text-primary)'}}>Whoops!!</span> Looks like there is no data.
            </h3>
            <h4>
                We couldn't found any data, please add another item or try again.
            </h4>
            <img src={NoDataImg} alt={'no-data'}/>
        </div>
    );
}
export default NoData;