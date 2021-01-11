import React from 'react';
import './TodoStyles.scss'

const TodoTemplate = ({children}) => {
    return (
        <div className="TodoTemplateWrapper">
            <div className="TodoTemplate">
            <div className="app-title">일정관리</div>
            <div className="content">{children}</div>
        </div>
        </div>
    );
};

export default TodoTemplate;