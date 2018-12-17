import React from 'react';
import axios from 'axios';
import { Form, } from "semantic-ui-react";

class DepartmentForm extends React.Component {
    state = { name: "", description: "", };

 ///unncessary to do componentDidMount bc we're not reusing this form YET
    componentDidMount() {
    //     const {match: {params: {id}}} = this.props;
        if (this.props.edit)
        axios.get(`/api/departments/${this.props.match.params.id}`)
        .then( res => this.setState({  ...res.data })
    //         const { name, description } = ;
    //         this.setState({name, description});
        )
    }

    handleChange = (e) => {
        const { target: {name, value, }} = e;
        this.setState({ [name]: value,});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.edit) {
            axios.put(`/api/departments/${this.props.match.params.id}`, {...this.state})
            .then(res => this.props.history.push(`/departments/${res.data.id}`))
        } else {
        axios.post(`/api/departments`, {...this.state })
            .then( res => this.props.history.push(`/departments/${res.data.id}`))
        // const department = {...this.state}
        // const {id} = this.props.match.params;
        // if (this.props.match.params.id) {
        //     axios.put(`/api/departments/${id}`, department)
        //     .then( res => {
        //         this.props.history.push('/departments/${id}')
        //     })
        //     const department = {...this.state};
            axios.post('/api/departments', {...this.state})
            .then(res => this.props.history.push('/departments/${res.data.id}'))
        }
    }

    render() {  
        const { name, description } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Input 
                    name="name"
                    placeholder="Name"
                    label="Name"
                    value={name}
                    onChange={this.handleChange}
                    required 
                />
                <Form.Input
                    name="description"
                    placeholder="Description"
                    label="Description"
                    value={description}
                    onChange={this.handleChange}
                    required
                />
              <Form.Button color="blue" inverted >Submit</Form.Button>
            </Form>
        )
    }
}    


export default DepartmentForm;