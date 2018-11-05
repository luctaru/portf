import React, { Component } from 'react';
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import './portfolio.css'
import book_icon from '../../images/book-icon.svg';
import gear_icon from '../../images/gear-icon.svg';

class Portfolio extends Component {

    state = [
        {
            name: 'T01',
            desc: 'Replicação do site Geovanna Garcia',
            link: 'https://github.com/luctaru/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/t01/lucas-tarumoto'
        },

        {
            name: 'TA01',
            desc: 'Criação de currículo em HTML e CSS',
            link: 'https://github.com/luctaru/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/ta01/lucas-tarumoto'
        },

        {
            name: 'TA05',
            desc: 'Resolução de exercícios',
            link: 'https://github.com/luctaru/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/ta05/lucas-tarumoto'
        },

        {
            name: 'TA07',
            desc: 'Exercício de SVG',
            link: 'https://github.com/luctaru/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/ta07/lucas-tarumoto'
        }
    ]

    showWorks = () => {
        const state = this.state;
        const listItems = state.map((item) =>
            <Col xs={12} md={4}>
                <div className="post_container">
                <img className="port_img" src={gear_icon} />
                    <p className="post_desc">{item.name}</p>
                    <p className="post_desc">{item.desc}</p>
                    <ButtonToolbar>
                        <Button className ="port_btn" bsSize="large" href={item.link} target="_blank">Acesse aqui!</Button>
                    </ButtonToolbar>
                </div>
            </Col>
        );
        return (
            <Row className="show-grid">{listItems}</Row>
        );
    }

    render() {
        return (
            <div id="portfolio">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <h1 id="portfolio_title">Portfólio<img id="book_icon" src={book_icon}/></h1>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <h2 id="portfolio_desc">Trabalhos realizados na disciplina de Programação Web</h2>
                        </Col>
                    </Row>
                    {this.showWorks()}
                </Grid>
            </div>
        );
    }

}
export default Portfolio;