import React, { Component } from 'react';
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import './profile.css'
import profile_icon from '../../images/profile-icon.svg';
import profile_img from '../../images/profile-img.svg';
import curriculum from '../../documents/curriculum.pdf';

class Profile extends Component {
    state = [
        {
            name: 'INTERESSES',
            itens: ['Bioinformática', 'Desenvolvimento Web', 'Design de Games', 'Teste de Software']
        },

        {
            name: 'IDIOMAS',
            itens: ['Português(Nativo)', 'Inglês(Avançado)', 'Japonês(Básico)']
        },

        {
            name: 'FORMAÇÃO',
            itens: ['2013/Anglo - Ensino Médio']
        },

        {
            name: 'ATIVIDADES',
            itens: ['Graduando em Engenharia de Software']
        }
    ]

    showDetails = () => {
        const state = this.state;
        
        const listNames = state.map((item) =>
            <ul>{item.name}
                {
                    item.itens.map((li)=>
                        <li>{li}</li>
                    )
                }
            </ul>
        );
        return (
            <Col xs={12} md={4}>{listNames}</Col>
        );
    }

    render() {
        return (
            <div id="profile">

                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <h1>Perfil<img id="profile_icon" src={profile_icon} /></h1>

                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={12} md={4}>
                            <img id="profile_img" src={profile_img} />
                            <ButtonToolbar>
                                <Button id="curriculum_btn" bsSize="large" href={curriculum} target="_blank">Meu currículo</Button>
                            </ButtonToolbar>
                        </Col>
                        <Col xsHidden md={4}>
                            <p id="description">Olá, meu nome é Lucas Tarumoto, nasci no Japão e atualmente moro no Brasil</p>
                        </Col>
                        {this.showDetails()}
                    </Row>
                </Grid>
            </div>
        );
    }

}
export default Profile;