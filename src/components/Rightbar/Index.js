import React from 'react';
import Searchbar from './Searchbar';
import '../../asset/css/index.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Index( {todos , deleteTodo} ) {
    return (
        <div className='rightbar'>
            <Searchbar />
            {todos.map(todos => 
                <div>
                <Card className='all_task_card'>
                <form action="" autoComplete="off">
                    <CardContent>
                        <Typography className='all_task_title' color="textSecondary" gutterBottom>
                        Title: {todos.title}
                        </Typography>
                        <Typography className='all__task' color="textSecondary" gutterBottom>
                        {todos.task}
                        </Typography>
                        <CardActions>
                            <DeleteIcon className='Task-delete-btn' onClick={deleteTodo.bind(todos.id)}/>
                            <EditIcon className='Task-edit-btn'/>
                        </CardActions>
                    </CardContent>
                </form>
            </Card>
                </div>
            )}
        </div>
    )
}

export default Index
