import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Card, Button, Icon } from 'semantic-ui-react';

class Departments extends React.Component {
    state = { departments: [], };

    componentDidMount() {
        axios.get('/api/departments')
            .then(res => this.setState({ departments: res.data }));
            // .catch(err => {
            //     console.log(err.response);
            // })
    }

    renderDepartments = () => {
        return this.state.departments.map( d => (
            <Card>
                <Card.Content>
                    <Card.Header>{d.name}</Card.Header>
                    <Card.Description>{d.description}</Card.Description>
                </Card.Content>
                <Card.Content textAlign="center">
                    <Link to={`/departments/${d.id}`}>
                        <Button color="blue">View</Button>
                    </Link>
                </Card.Content>
            </Card>
        ))
    }
    render() {
        return (
            <div>
                <h1>Departments</h1>
                <br />
                <Link to='departments/new'>
                    <Button icon color="orange">
                        <Icon name="add" /> Add Dept
                    </Button>
                </Link>
                <br />
                <Card.Group itemsPerRow={3}>
                    {this.renderDepartments()}
                </Card.Group>
            </div>
        )
    }
}
export default Departments;