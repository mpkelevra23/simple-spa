import React, {Component} from 'react';
import BuilderCard from '../BuilderCard';

class BuildersList extends Component {

    componentDidMount() {
        if (!this.props.buildersList) {
            this.props.loadBuildersList();
        }
    }

    render() {
        const {buildersList} = this.props;
        return (
            <div>
                <h3>Список всех застройщиков:</h3>
                {!buildersList ? null : buildersList.map(builder => (
                    <BuilderCard key={builder.id} {...builder} />
                ))}
            </div>
        )
    }
}

export default BuildersList;