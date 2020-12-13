import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class chat extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Footer />
            </Container>
        )
    }
}
export default Chat;