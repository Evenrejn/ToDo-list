import React from 'react';
import PostListItem from '../post-list-item';
// import { ListGroup } from 'reactstrap';

import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li className="list-group-item">
                <PostListItem {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleLiked={() => onToggleLiked(id)}
                onToggleImportant={() => onToggleImportant(id)}/>
            </li>
        )
    });
    
    return (
        <ul className="app-list">
            {elements}
        </ul>
    )
}

export default PostList;