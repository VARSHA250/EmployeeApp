import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Container, Col, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    const [userData, setUserData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:3001/users');
        setUserData(result.data);
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
    }

    return (
        <Container>
            <Form className="mt-3" style={{backgroundColor:"white",padding:"25px",alignContent:"center"}} >
                <Row >
                    <Col xs={5} style= {{marginLeft: '270px'}} >
                        <Form.Control value= {search} onChange={(e) => setSearch(e.target.value)}placeholder="Search" />
                    </Col>
                    <Col>
                        <Link to= "/create"><Button variant="info">Add Employee</Button></Link>
                    </Col>                           
                    
                </Row>
            </Form>
            <Table style={{textAlign:"center"}} striped bordered hover className="mt-3">
                <thead>
                    <tr style={{backgroundColor:"lightgreen"}}>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.filter(item => {
                        const first_name = item.first_name.toLowerCase().includes(search.toLowerCase())
                        const last_name = item.last_name.toLowerCase().includes(search.toLowerCase())
                        const email = item.email.toLowerCase().includes(search.toLowerCase())
                        return first_name || last_name || email
                    }).map((item, index) => {
                        return(
                            <tr>
                                <th>{index + 1}</th>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Button style= {{margin: '10px'}} variant="danger" onClick= {() => handleDelete(item.id)}>Delete</Button>
                                    <Link to= {`/update/${item.id}`}>
                                        <Button style= {{margin: '10px'}} variant="btn btn-primary">Edit</Button>
                                    </Link>
                                    
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    );
}

export default Home;
