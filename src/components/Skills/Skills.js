import React, { Component } from 'react';
import './skills.css'
import wrench_icon from '../../images/wrench-icon.svg';
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';

class Skills extends Component {

    constructor(props) {
        super(props);
    }

    showSkills = () => {
        const listItems = this.props.skill.map(e =>
            <li class="skills_topic">{e}</li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }

    render() {
        if (this.props.skill === undefined) {
            return (<h1>Carregando</h1>);
        }
        else{
            return (
                <div id="skills">
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={8}>
                                <h1>Habilidades<img id="wrench_icon" src={wrench_icon} /></h1>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={12} md={8}>
                                {this.showSkills()}
                            </Col>
                        </Row>
                    </Grid>
                </div>
            );
        }
    }

}
export default Skills;