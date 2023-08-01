import React from 'react';
import {Link} from 'react-router-dom';

import {apiRoutes} from '../../../apiConfig';

const BuilderCard = (props) => (
    <Link className="App-link" to={apiRoutes.builders + '/' + props.id}>
        <div className="App-label-news-card">
            <h3>{props.name}</h3>
            <img src={props.logoUrl} alt={props.name}/>
        </div>
    </Link>
);

export default BuilderCard;