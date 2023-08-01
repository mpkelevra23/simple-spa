import React, {Component} from 'react';
import {apiRoutes, apiUrl} from '../../../apiConfig';

class BuildersPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            response: null
        };
    }

    componentDidMount() {
        this.fetchBuilderData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.fetchBuilderData();
        }
    }

    fetchBuilderData = () => {
        const {match} = this.props;
        const {id} = match.params;

        fetch(apiUrl + apiRoutes.builders + '/' + id)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Ошибка при загрузке данных: ${res.status}`);
                }
                return res.json();
            })
            .then(
                (result) => {
                    this.setState({
                        response: result
                    });
                }
            );
    };

    render() {
        const {response} = this.state;

        let content;

        if (!response) {
            content = <div>Loading...</div>;
        } else if (response.status === 200 && response.data) {
            const {data} = response;
            content = (
                <div>
                    <h1>{data.name}</h1>
                    <img src={data.logoUrl} alt={data.name}/>
                    <h2>Список ЖК</h2>
                    {data.houses.map((house) => (
                        <div key={house.id}>
                            <h3>{house.name}</h3>
                            <img src={house.backgroundImageUrl} alt={house.name}/>
                        </div>
                    ))}
                </div>
            );
        } else {
            content = <div>Error code: {response.code}</div>;
        }
        return content;
    }
}

export default BuildersPage;
