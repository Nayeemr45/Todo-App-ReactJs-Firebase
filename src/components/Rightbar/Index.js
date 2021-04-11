import React from 'react';
import Searchbar from './Searchbar';
import '../../asset/css/index.css';
import Todo from './Todo';

 function  Index( { todos , deleteTodo } ) {
   console.log("1st-todo" , todos);
    return (
        <div className='rightbar'>
            <Searchbar />
            {todos.map(todo => (
                <Todo 
                todo={todo}
                key={todo.id}
                deleteTodo={deleteTodo}
                />
            ))}
        </div>
    )
}

export default Index
