import React from 'react'
import {Navbar,Container} from "react-bootstrap"

function Navbars() {
    return (
        <div>
            <Container>
                <Navbar expand="lg" style={{backgroundColor:"black",textAlign:"center"}}>
                    <Container>
                        <Navbar.Brand style={{color:"white",ontWeight:"600",fontSize:"30px", padding:"20px",marginLeft: '500px'}} >Employee Details</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
        </div>
    )
}

export default Navbars
