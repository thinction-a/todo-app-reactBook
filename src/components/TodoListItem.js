import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoStyles.scss';

const TodoListItem = ({ todo }) => {
    const { text, checked } = todo;
    
    return (
        <div className="TodoListItemWrapper">
            <div className="TodoListItem">
                <div className={cn('checkbox', { checked })}>
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
                    <div className="text">{text}</div>
                </div>
                <div className="remove">
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    );
};

export default TodoListItem;