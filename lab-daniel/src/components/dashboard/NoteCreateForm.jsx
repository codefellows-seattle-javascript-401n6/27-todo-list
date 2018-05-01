import React from 'react';
import uuidv1 from 'uuid/v1';

class NoteCreateForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: uuidv1(),
            title: '',
            editing: false,
            content: '',
            completed: false
        }
        this.updateGoal = this.updateGoal.bind(this);
        this.updateDetail = this.updateDetail.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
    }
    updateGoal(ev) {
        let setTitle = ev.target.value;
        console.log('User title: ', setTitle);
        this.setState({title: setTitle});

    }

    updateDetail(ev) {
        let setDetail = ev.target.value;
        this.setState({content: setDetail});
        console.log('User detail: ', setDetail);
    }

    handleSubmit(ev) {
        ev.preventDefault();
        let newId = uuidv1()
        this.setState({id: newId});
        this.props.newGoalFunc(this.state);
    }

      
    render() {
        return (
            <div>
                <p>Add a new goal</p>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.updateGoal} type="text" placeholder="Type goal here"/>
                    <input onChange={this.updateDetail} type="text" placeholder="Details about goal..."/>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default NoteCreateForm;