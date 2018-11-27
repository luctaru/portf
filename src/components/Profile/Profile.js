import React, { Component, Fragment } from 'react';

import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import './profile.css'
import profile_icon from '../../images/profile-icon.svg';
import profile_img from '../../images/profile-img.svg';
import curriculum from '../../documents/curriculum.pdf';

class Profile extends Component {

    constructor(props) {
        super(props);
    }

    showInt = () => {
        const list = this.props.prof[0].map(e =>
            <li>{e}</li>
        );
        console.log(list)
        return (
            <ul>Interesses{list}</ul>
        );
    }

    showIdio = () => {
        const list = this.props.prof[1].map(e =>
            <li>{e}</li>
        );
        console.log(list)
        return (
            <ul>Idiomas{list}</ul>
        );
    }

    showForm = () => {
        const list = this.props.prof[2].map(e =>
            <li>{e}</li>
        );
        console.log(list)
        return (
            <ul>Formação{list}</ul>
        );
    }

    showAtiv = () => {
        const list = this.props.prof[3].map(e =>
            <li>{e}</li>
        );
        console.log(list)
        return (
            <ul>Atividades{list}</ul>
        );
    }

    showMini = () => {
        console.log('MINI')
        console.log(this.props.prof[4])
        const desc = this.props.prof[4].map(element => <p id="description">{element.minibio}</p>);
        console.log(desc)
        return (
            <Col xsHidden md={4}>
                {desc}
            </Col>
        );

    }

    showPhotoCurri = () => {
        //const str = '../../images/';
        const part = this.props.prof[4].slice(0, 1);
        const item = part.map(e =>
            <Fragment>
                <img id="profile_img" src={require(`../../images/${e.foto}`)} />
                <ButtonToolbar>
                    <Button id="curriculum_btn" bsSize="large" href={require(`../../documents/${e.curri}`)} target="_blank">Meu currículo</Button>
                </ButtonToolbar>
            </Fragment>
        );
        console.log('FOTO')
        console.log(item)
        return (
            <Col xs={12} md={4}>
                {item}
            </Col>
        );
    }

    render() {
        if (this.props.prof === undefined) {
            return (<h1>Carregando</h1>);
        }
        else {
            return (
                <div id="profile">

                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={8}>
                                <h1>Perfil<img id="profile_icon" src={profile_icon} /></h1>
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            {this.showPhotoCurri()}
                            {this.showMini()}
                            <Col xs={12} md={4}>
                                {this.showInt()}
                                {this.showIdio()}
                                {this.showForm()}
                                {this.showAtiv()}
                            </Col>

                        </Row>
                    </Grid>
                </div>
            );
        }
    }

}
export default Profile;