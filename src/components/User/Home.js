import React from 'react'
import Sidebar from '../Sidebar';
import Feed from '../Feed';
import Index from '../Rightbar/Index';
import fire from '../../todo_firebase';

class Home extends React.Component {
    // adding toods
    state = {
        todos: [
          // { id: 1, title: 'get haircut', completed: false },
          // { id: 2, title: 'learn react', completed: false },
          // { id: 3, title: 'learn redux', completed: false }
        ]
      }
  
      componentDidMount = () =>{
        // adding toods
        const previousTodos = this.state.todos;        
        fire.database().ref('todos').on('child_added', snap => {
          previousTodos.push({
            id: snap.key,
            title: snap.val().title,
            task: snap.val().task
          })
          this.setState({
            todos: previousTodos
          })
        })
        // deleteing todos
        fire.database().ref('todos').on('child_removed', snap => {
          for (var i = 0; i < previousTodos.length; i++) {
            if (previousTodos[i].id === snap.key) {
              previousTodos.splice(i, 1);
            }
          }
          this.setState({
            todos: previousTodos
          })
        })
      }
        deleteTodo = (id) => { 
        fire.database().ref('todos').child(id).remove();
      }
       addTodo = (title , task) => {
        fire.database().ref('todos').push().set({ title: title , task:task })
      }
      render(){
    return (
        <div className="App">
            <Sidebar />
            <Feed addTodo={this.addTodo}/>
            <Index todos={this.state.todos} deleteTodo={this.deleteTodo}/>
       </div>
    )}
}

export default Home;