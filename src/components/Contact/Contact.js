import React, { Component } from 'react';
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import './contact.css'
import phone_icon from '../../images/phone-icon.svg';
import github_icon from '../../images/github-icon.svg';
import facebook_icon from '../../images/facebook-icon.svg';

class Contact extends Component {

    constructor(props) {
        super(props);
    }

    showLink1 = () => {
        console.log('LINKS')
        const part = this.props.link.slice(0, 1);
        console.log(part)
        const list = part.map(e =>
            <a href={e.name}><img id="github_icon" src={require(`../../images/${e.icon}`)} /></a>
        );
        //console.log(list)
        return (
            <Col id="git_col" xs={12} md={6}>
                {list}
                <h3>GitHub</h3>
            </Col>
        );
    }

    showLink2 = () => {
        console.log('LINKS')
        const part = this.props.link.slice(1, 2);
        console.log(part)
        const list = part.map(e =>
            <a href={e.name}><img id="facebook_icon" src={require(`../../images/${e.icon}`)} /></a>
        );
        //console.log(list)
        return (
            <Col id="fb_col" xs={12} md={6}>
                {list}
                <h3>Facebook</h3>
            </Col>
        );
    }

    render() {
        if (this.props.link === undefined) {
            return (<h1>Carregando</h1>);
        }
        else {
            return (
                <div id="contact">
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={8}>
                                <h1>Contato  <img id="phone_icon" src={phone_icon} /></h1>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={12} md={12}>
                                <h2>Entre em contato</h2>
                                <form id="form" method="POST" action="https://formspree.io/YOUREMAILHERE">
                                    <input type="text" name="text" placeholder="Seu Nome" />
                                    <input type="email" name="email" placeholder="Seu email" />
                                    <input type="text" name="text" placeholder="Assunto" />
                                    <textarea name="message" placeholder="Mensagem"></textarea>
                                    <button id="submit_btn" type="submit">Enviar</button>
                                </form>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={12} md={12}>
                                <h2>Também estou aqui!</h2>
                            </Col>
                        </Row>
                        <Row id="social_row" className="show-grid">
                            {this.showLink1()}
                            {this.showLink2()}
                        </Row>
                    </Grid>
                </div>
            );
        }

    }

}
export default Contact;