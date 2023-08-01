import React from 'react';

const NewsPage = (props) => {
    const {title, imageUrl, createdAt, text} = props.newsData;

    const formattedDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const createMarkup = () => {
        return {__html: text};
    };

    return (
        <div>
            <h2>{title}</h2>
            <img src={imageUrl} alt={title}/>
            <h5>дата публикации: {formattedDate(createdAt)}</h5>
            <p dangerouslySetInnerHTML={createMarkup()}/>
        </div>
    );
};

export default NewsPage;
