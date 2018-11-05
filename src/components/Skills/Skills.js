import React, { Component } from 'react';
import './skills.css'
import wrench_icon from '../../images/wrench-icon.svg';
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';

class Skills extends Component {

    state = {
        skills: ['HTML5', 'CSS3', 'C++', 'Java', 'JavaScript', 'React JS', 'JQuery', 'Ajax', 'UML',
            'MySQL', 'PostgreSQL', 'Bootstrap', 'GULP', 'SASS', 'GIT', 'SVG', 'Python', 'NPM',
        'Windows', 'Linux', 'XML']
    }

    showSkills = () => {
        const skills = this.state.skills;
        const listItems = skills.map((item) =>
            <li className="skills_topic">{item} </li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }

    render() {
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
export default Skills;