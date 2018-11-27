import React, { Component } from 'react';
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import './about.css'
import about_icon from '../../images/about-icon.svg';
import profile_img from '../../images/profile-img.svg';
import curriculum from '../../documents/curriculum.pdf';

class About extends Component {
    constructor(props) {
        super(props);
    }

    showDetails = () => {      
        const listBio = this.props.info.map((item) =>
            <Col xs={12} md={6}>
                <div className="details_container">
                    <p className="post_desc">BIOGRAFIA</p>
                    <p className="post_desc">{item.bio}</p>
                </div>
            </Col>
        );
        const listDesc = this.props.info.map((item) =>
            <Col xs={12} md={6}>
                <div className="details_container">
                    <p className="post_desc">PROFISSÃO</p>
                    <p className="post_desc">{item.desc}</p>
                </div>
            </Col>
        );
        return (
            <Row className="show-grid">{listBio}{listDesc}</Row>
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