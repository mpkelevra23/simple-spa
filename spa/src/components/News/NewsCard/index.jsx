import React from 'react';
import {Link} from 'react-router-dom';

import {apiRoutes} from '../../../apiConfig';

const NewsCard = (props) => {
    const {title, text, id} = props;

    const createMarkup = () => {
        return {__html: text};
    };

    return (
        <div className="App-label-news-card">
            <h3>
                <Link className="App-link" to={apiRoutes.news + '/' + id}>
                    {title}
                </Link>
            </h3>
            <h5 dangerouslySetInnerHTML={createMarkup()}/>
        </div>
    );
};

export default NewsCard;
