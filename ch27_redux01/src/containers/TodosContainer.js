// 할 일 관련 데이터를 받는 컨테이너 컴포넌트

import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleTodo } from '../modules/todos'
import Todos from '../components/Todos';

function TodosContainer() {

    // 스토어 데이터 조회
    const todos = useSelector(state => state.todos);

    // 디스패치 가져오기
    const dispatch = useDispatch();

    // 이벤트함수 제작
    const onCreate = text => dispatch(addTodo(text));
    const onToggle = useCallback(id => dispatch(toggleTodo[id]), [dispatch]);

    return (
        <div>
            <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
        </div>
    );
}

export default TodosContainer;