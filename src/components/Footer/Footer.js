import React, { Component } from 'react';
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import './footer.css'


class Footer extends Component {
    state = {
        name: 'Lucas Tarumoto',
        email: 'lucastarumoto@gmail.com',
        number: '(XX)XXXX-XXXX'
    }

    /*showFooter = () =>{
        const foot = this.state;

        const listItems = foot.
        );

        return(
            <Col xs={12} md={12}>{listItems}</Col>
        );
    }
    */

    render() {
        return (
            <div id="footer">
                <Grid>
                    <Row className="show-grid">
                    <Col xs={12} md={12}>
                            <p>Lucas Tarumoto</p>
                            <p>lucastarumoto@gmail.com</p>
                            <p>(XX)XXXX-XXXX</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}
export default Footer;