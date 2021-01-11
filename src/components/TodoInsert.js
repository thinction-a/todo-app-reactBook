import React from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoStyles.scss';

const TodoInsert = () => {
    return (
        <div className="TodoInsertWrapper">
            <form className="TodoInsert">
                <input placeholder="할 일을 입력하세요." />
                <button type="submit">
                    <MdAdd />
                </button>
            </form>
        </div>
    );
};

export default TodoInsert;