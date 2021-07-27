import { useEffect, useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
// import CeoDetails from './CeoDetails';
import CeoDetails from './CeoDetailsAsync';

import StyledList from './StyledList';


const CeoList = () => {
    const [ceos, setCeos] = useState([]);
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const ceos = await _fetchData();
            setCeos(ceos);
        })();
    }, [setCeos]);

    const _fetchData = async () => {
        const url ='http://127.0.0.1:3000';
        const response = await fetch(url).then(response => response.json());
        console.log('response from API is: ', response);
        return response; 
    }

    return (
        <>
            {!!ceos.length ? (
                <>
                    <Route exact path='/'>
                        <StyledList>
                            {ceos.map((ceo, index) => (
                                <li key={index}>
                                    <Link to={`/${ceo.slug}`}>
                                        {ceo.name}
                                    </Link>
                                </li>
                            ))}
                        </StyledList>
                    </Route>
                    <Route path='/:ceo_slug'>
                        {/* <CeoDetails CeoList={ceos} /> */}
                        <CeoDetails />
                        <button type='button' onClick={() => history.goBack()}>Go Home</button>
                    </Route>
                </>
            ) : (
                <p>Loading CEOs from api...</p>
            )}
        </>
    )
}

export default CeoList;