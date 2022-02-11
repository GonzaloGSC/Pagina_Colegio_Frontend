import React, { Component } from 'react'

export class Año extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          año: '',
          OC:[],
        }
      }

      componentDidMount(){
        fetch('https://escuelasespeciales.cl/tabla_postulacion/list?id_colegio=3')
            .then(response => response.json())
            .then(data => this.setState({OC:data}));
      }

    render() {

        const {OC} = this.state

        this.state.año = OC.map(item=>item.titulo)
        const año1 = this.state.año[0]

        console.log("asd",año1)

        return (
            <h1>
                {año1}
            </h1>
        )
    }
}

export default Año
