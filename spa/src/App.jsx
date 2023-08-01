import React, {Component} from 'react';
import {Router, Route, Switch, Link} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import {apiUrl, apiRoutes} from './apiConfig';

import MainPage from './components/MainPage';
import NewsList from './components/News/NewsList';
import NewsPage from './components/News/NewsPage';
import BuildersList from './components/Builders/BuildersList';
import BuilderPage from './components/Builders/BuilderPage';
import './App.css';

const browserHistory = createBrowserHistory();

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newsList: null,
            buildersList: null,
        };
    }

    loadNewsList = () => {
        fetch(apiUrl + '/news?offset=0&limit=12')
            .then(res => res.json())
            .then(res => this.setState({newsList: res.data}))
            .catch(error => {
                alert('Ошибка при получении списка пользователей');
                console.error(error);
            });
    }

    loadBuildersList = () => {
        fetch(apiUrl + '/builders?limit=100&offset=0')
            .then(res => res.json())
            .then(res => this.setState({buildersList: res.data}))
            .catch(error => {
                alert('Ошибка при получении списка застройщиков');
                console.error(error);
            });
    }

    renderSingleNews = ({match}) => {
        const {id: currentNewsId} = match.params;

        if (!this.state.newsList) {
            return <p>Новости ещё не загрузились</p>;
        }

        const newsData = this.state.newsList.find(
            news => Number(news.id) === Number(currentNewsId)
        );

        return <NewsPage newsData={newsData}/>
    }

    // renderSingleBuilder = ({match}) => {
    //     const {id: currentBuilderId} = match.params;
    //
    //     if (!this.state.buildersList) {
    //         return <p>Застройщики ещё не загрузились</p>;
    //     }
    //
    //     const builderData = this.state.buildersList.find(
    //         builder => Number(builder.id) === Number(currentBuilderId)
    //     );
    //
    //     return <BuilderPage builderData={builderData}/>
    // }

    render() {
        const {newsList, buildersList} = this.state;

        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <Router history={browserHistory}>
                    <div className="App-body">

                        <nav className="App-nav-bar">
                            <Link className="App-nav-item" to='/'>Главная</Link>
                            <Link className="App-nav-item" to={apiRoutes.builders}>Застройщики</Link>
                            <Link className="App-nav-item" to={apiRoutes.news}>Новости</Link>
                        </nav>

                        <Switch>

                            <Route exact path='/'>
                                <MainPage/>
                            </Route>

                            <Route exact path={apiRoutes.news}>
                                <NewsList loadNewsList={this.loadNewsList}
                                          newsList={newsList}/>
                            </Route>

                            <Route exact path={apiRoutes.news + '/:id'} component={this.renderSingleNews}/>

                            <Route exact path={apiRoutes.builders}>
                                <BuildersList loadBuildersList={this.loadBuildersList}
                                              buildersList={buildersList}/>
                            </Route>

                            <Route exact path={apiRoutes.builders}>
                                <BuildersList loadBuildersList={this.loadBuildersList}
                                              buildersList={buildersList}/>
                            </Route>
                            <Route exact path={apiRoutes.builders + '/:id'} component={BuilderPage}/>

                        </Switch>

                    </div>
                </Router>

            </div>
        );
    }
}

export default App;
