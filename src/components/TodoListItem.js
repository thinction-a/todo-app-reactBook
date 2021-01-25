import React from 'react';
import styled from 'styled-components';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoStyles.scss';

const TodoListItems = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    &:nth-child(even) {
        background: #f8f9fa;
    }
    & + & {
        border-top: 1px solid #dee2e6;
    }
`;

const Checkbox = styled.div`
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    svg {
        font-size: 1.5rem;
    }
    .text {
        margin-left: .5rem;
        flex: 1;
    }
    &.checked {
        svg {
            color: #22b8cf;
        }
        .text {
            color: #adb5bd;
            text-decoration: line-through;
        }
    }
`;

const Remove = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
        color: #ff8787;
    }
`;

const TodoListItem = ({todo, onRemove, onToggle}) => {

    const { id, text, checked } = todo;

    return (
        <TodoListItems>
            <Checkbox className={cn('Checkbox', { checked })} onClick={() => onToggle(id)}>
                {
                    checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />
                }
                <div className="text">{text}</div>
            </Checkbox>
            <Remove
                onClick={() => onRemove(id)}
            >
                <MdRemoveCircleOutline />
            </Remove>
        </TodoListItems>
    );
};

export default React.memo(TodoListItem);