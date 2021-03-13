import React, { Component } from 'react'
import '../asset/css/feed.css'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class Feed extends Component {
    state = {
        title: '',
        task: ''
    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleChange2 = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title , this.state.task);
        this.setState({
            title: '',
            task: ''
        })
    }
    render(){
    return (
        <div className='feed'>
            <div className='feed__header'>
                <h2>New Task</h2>
            </div>
            <div className='todo__taskbar'>
            <Card className='card'>
                <form action="" onSubmit={this.handleSubmit} autoComplete="off">
                    <CardContent>
                        <Typography className='title' color="textSecondary" gutterBottom>
                        Title :<textarea placeholder="Write your title.." type="text" rows="2" cols="70" onChange={this.handleChange} required value={this.state.title}/>
                        </Typography>
                        <Typography className='todo__task' color="textSecondary" gutterBottom>
                        <textarea placeholder="Write your task.." type="text" rows="10" cols="75" onChange={this.handleChange2} required value={this.state.task} />
                        </Typography>
                        
                    </CardContent>
                    <CardActions >
                    <Button type="submit" className='card__btn' variant="outlined">Add</Button>
                    </CardActions>
                </form>
            </Card>
            </div>
            
        </div>
    )
}
}
export default Feed
