import React, { Component } from 'react';
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import './portfolio.css'
import book_icon from '../../images/book-icon.svg';
import gear_icon from '../../images/gear-icon.svg';


class Portfolio extends Component {

    constructor(props) {
        super(props);
        console.log('Portfolio constructor')
        console.log(props)
    }


    render() {
        console.log('Render Portfolio 1')
        console.log(this.props.portf)
        //if(this.props){
        if (this.props.portf === undefined) {
            return (<h1>Carregando</h1>);
        }
        else {
            return (
                <div id="portfolio">
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={8}>
                                <h1 id="portfolio_title">Portfólio<img id="book_icon" src={book_icon} /></h1>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={12} md={12}>
                                <h2 id="portfolio_desc">Trabalhos realizados na disciplina de Programação Web</h2>
                            </Col>
                        </Row>
                        <Row>{this.props.portf.map(e =>
                            <Col xs={12} md={4}>
                                <div className="post_container">
                                    <img className="port_img" src={gear_icon} />
                                    <p className="post_desc">{e.title}</p>
                                    <p className="post_desc">{e.desc}</p>
                                    <ButtonToolbar>
                                        <Button className="port_btn" bsSize="large" href={e.link} target="_blank">Acesse aqui!</Button>
                                    </ButtonToolbar>
                                </div>
                            </Col>
                        )}</Row>
                    </Grid>
                </div>
            );
        }

        //} else{

        // console.log('passou no if')
        //console.log(this.props)
        //  return(<h1>Carregando</h1>);
        //}
    }

}
export default Portfolio;