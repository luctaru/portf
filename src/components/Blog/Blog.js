import React, { Component } from 'react';
import { Grid, Row, Col, Button, ButtonToolbar} from 'react-bootstrap';
import './blog.css'
import blog_icon from '../../images/blog-icon.svg';
import no_man_sky_img from '../../images/no-mans-sky-art.svg';
import bioinfo_img from '../../images/bioinfo-img.svg';
import tableless_logo from '../../images/tableless_logo.svg';
import udemy_logo from '../../images/udemy-logo.svg'

class Blog extends Component {

    state = [
        {
            link: 'https://br.ign.com/no-mans-sky/5935/news/ign-first-como-funciona-o-universo-infinito-de-no-mans-sky',
            desc: 'Como funciona o universo infinito de No Mans Sky',
            img: no_man_sky_img
        },

        {
            link: 'https://www.ufrgs.br/bioinfo/o-que-e-bioinformatica/',
            desc: 'O que é Bioinformática?',
            img: bioinfo_img
        },

        {
            link: 'https://tableless.com.br/',
            desc: 'Ótimo site de notícias para desenvolvedores!',
            img: tableless_logo
        },
        {
            link: 'https://www.udemy.com/',
            desc: 'Para aprender muito mais!',
            img: udemy_logo
        }
    ]

    showPosts = () => {
        const state = this.state;
        const listItems = state.map((item) =>
            <Col xs={12} md={4}>
                <div className="post_container">
                    <img className="post_img" src={item.img} />
                    <p className="post_desc">{item.desc}</p>
                    <ButtonToolbar>
                        <Button className ="post_btn" bsSize="large" href={item.link} target="_blank">Acesse aqui!</Button>
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
            <div id="blog">

                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <h1>Blog<img id="blog_icon" src={blog_icon} /></h1>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <h2>Veja alguns posts sobre tecnologia que eu tenho interesses</h2>
                        </Col>
                    </Row>
                    {this.showPosts()}
                </Grid>
            </div>
        );
    }

}
export default Blog;