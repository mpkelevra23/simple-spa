import React, {Component} from 'react';
import NewsCard from '../NewsCard';

class NewsList extends Component {

    componentDidMount() {
        if (!this.props.newsList) {
            this.props.loadNewsList()
        }
    }

    render() {
        const {newsList} = this.props;
        return (
            <div>

                <h3>Список всех новостей:</h3>
                {!newsList ? null : newsList.map(news => (
                    <NewsCard key={news.id} {...news} />
                ))}
            </div>
        )
    }
}

export default NewsList;