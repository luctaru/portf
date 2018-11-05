import React, { Component } from 'react';
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import './about.css'
import about_icon from '../../images/about-icon.svg';
import profile_img from '../../images/profile-img.svg';
import curriculum from '../../documents/curriculum.pdf';

class About extends Component {
    state = [
        {
            name: 'BIOGRAFIA',
            desc: 'Nascido no Japão, vivi poucos anos lá e acabei me mudando para o Brasil quando jovem. Realizei o Ensino Médio no Colégio Prisma de Pirapózinho. Iniciei minha vida universitária em 2014 na UFSJ de Ouro Branco em Minas Gerais, porém acabei desistindo por não ter afinidade com o curso. Em seguida iniciei em 2016 na UTFPR de Cornélio Procópio no curso de Engenharia de Software onde estou até hoje na graduação.'
        },

        {
            name: 'PROFISSÃO',
            desc: 'Foi por acaso que acabei entrando em contato com a profissão. Na época do vestibular não sabia que caminho seguir, primeiramente acabei fazendo Engenharia de Bioprocessos, em seguida queria fazer Engenharia Eletrônica, contudo minha nota do ENEM não era alta o suficiente e para não perder tempo entrei em Engenharia de Software. Por ironia do destino o curso me agradou muito e hoje estou aqui!'
        }
    ]

    showDetails = () => {
        const state = this.state;
        
        const listItems = state.map((item) =>
            <Col xs={12} md={6}>
                <div className="details_container">
                    <p className="post_desc">{item.name}</p>
                    <p className="post_desc">{item.desc}</p>
                </div>
            </Col>
        );
        return (
            <Row className="show-grid">{listItems}</Row>
        );
    }

    render() {
        return (
            <div id="about">

                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <h1>Mais Informações  <img id="about_icon" src={about_icon} /></h1>
                        </Col>
                    </Row>
                    {this.showDetails()}
                </Grid>
            </div>
        );
    }

}
export default About;