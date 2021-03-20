import React from 'react'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';


function Todo( { todo , deleteTodo }) {

    return (
        <div>
            <Card className='all_task_card'>
                <form action="" autoComplete="off">
                    <CardContent>
                        <Typography className='all_task_title' color="textSecondary" gutterBottom>
                        Title: {todo.title}
                        </Typography>
                        <Typography className='all__task' color="textSecondary" gutterBottom>
                        {todo.task}
                        </Typography>
                        <CardActions>
                            <DeleteIcon className='Task-delete-btn' 
                                    onClick={deleteTodo.bind(this, todo.id)}
                            />
                            <DoneIcon className='Task-done-btn'/>
                        </CardActions>
                    </CardContent>
                </form>
            </Card>
        </div>
    )
}

export default Todo
