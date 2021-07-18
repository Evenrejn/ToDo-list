import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

    const data = [
        {label: "Going to learn React", important: true, id: "ethtt"},
        {label: "That is so good!", important: false, id: "yii"},
        {label: "I need a coffee...", important: false, id: "dhd"}
    ];

    return (
    <div className="app">
        <AppHeader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>  
        <PostList posts={data}/>
        <PostAddForm/>
    </div>
    )
}

export default App;