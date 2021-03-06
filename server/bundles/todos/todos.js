require('./todos.css');

import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';

import Todos from '../../../client/components/todos';
import Todo from '../../../client/components/todo';
import {addTodo} from '../../../client/actions';
import {todoApp} from '../../../client/reducers';


const store = createStore(todoApp);

function render() {
    ReactDom.render(
        <Todos store={store}/>,
        document.getElementById('root')
    );
}
render();
store.subscribe(render);

fetch('/api/todos' + window.location.search)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.todos.forEach(todo => {
            store.dispatch(addTodo(todo));
        });
    });
