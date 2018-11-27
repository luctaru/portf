import React, { Component, Fragment } from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import Blog from './components/Blog/Blog'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Axios from 'axios';

class App extends Component {


        state = {
            perfil: [],
            interesses: [],
            idiomas: [],
            formacao: [],
            atividades: [],
            habilidades: [],
            portfolio: [],
            info: [],
            links: []
        };

    componentDidMount(){
        console.log('component');
        this.loadPerf();
        this.loadInt();
        this.loadIdio();
        this.loadForm();
        this.loadAtiv();
        this.loadHabil();   
        this.loadPortf();
        this.loadInfo();
        this.loadLink();
    }

    loadPerf = () =>{
        Axios.get('http://localhost:4000/perfil')
          .then(res =>{
            const perf = res.data;
            this.setState({perfil:perf})
          })
          .catch((err) =>{
              console.log(err);
          })

    }

    loadInt = () =>{
        Axios.get('http://localhost:4000/interesses')
          .then(res =>{
            const int = res.data;
            this.setState({interesses:int})
          })
          .catch((err) =>{
              console.log(err);
          })

    }

    loadIdio = () =>{
        Axios.get('http://localhost:4000/idiomas')
          .then(res =>{
            const idio = res.data;
            this.setState({idiomas:idio})
          })
          .catch((err) =>{
              console.log(err);
          })

    }

    loadForm = () =>{
        Axios.get('http://localhost:4000/formacao')
          .then(res =>{
            const form = res.data;
            this.setState({formacao:form})
          })
          .catch((err) =>{
              console.log(err);
          })

    }

    loadAtiv = () =>{
        Axios.get('http://localhost:4000/atividades')
          .then(res =>{
            const ativ = res.data;
            this.setState({atividades:ativ})
          })
          .catch((err) =>{
              console.log(err);
          })

    }

    loadHabil = () =>{
        Axios.get('http://localhost:4000/habil')
          .then(res =>{
            const habil = res.data;
            this.setState({habilidades:habil})
          })
          .catch((err) =>{
              console.log(err);
          })

    }

    loadPortf = () =>{
        Axios.get('http://localhost:4000/portfolio')
          .then(res =>{
            const portf = res.data;
            console.log('loadPortf');

            console.log(portf);
            this.setState({portfolio:portf})
          })
          .catch((err) =>{
              console.log(err);
          })

    }

    loadInfo = () =>{
       Axios.get('http://localhost:4000/info')
          .then(res =>{
            const info = res.data;
            this.setState({info:info})
          })
          .catch((err) =>{
              console.log(err);
          })

    }

    loadLink = () =>{
        Axios.get('http://localhost:4000/links')
           .then(res =>{
             const link = res.data;
             this.setState({links:link})
           })
           .catch((err) =>{
               console.log(err);
           })
 
     }

    render() {
        console.log('render app')
        console.log(this.state.portfolio)

        return (
            <Fragment>
                <Header />
                <Profile prof={[this.state.interesses, this.state.idiomas, this.state.formacao, this.state.atividades, this.state.perfil]}/>
                <Skills skill={this.state.habilidades}/>
                <Blog /> 
                <Portfolio portf={this.state.portfolio}/>          
                <About info={this.state.info}/>
                <Contact link={this.state.links}/>
                <Footer />
            </Fragment>
        );
    }
}

export default App;
