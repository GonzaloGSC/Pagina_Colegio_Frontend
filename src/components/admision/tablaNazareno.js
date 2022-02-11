import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import dateFormat from 'dateformat';


function createData(name, inicio, termino) {
  return { name, inicio, termino};
}

class Tabla extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      año: '',
      fecha_1_1: '',
      fecha_1_2: '',
      fecha_2_1: '',
      fecha_2_2: '',
      fecha_3_1: '',
      fecha_3_2: '',
      fecha_4_1: '',
      fecha_4_2: '',
      fechas: [],
      OC:[],
    }
  }

  componentDidMount(){
    fetch('https://escuelasespeciales.cl/tabla_postulacion/list?id_colegio=2')
        .then(response => response.json())
        .then(data => this.setState({OC:data}));
  }

  
  render(){

    const {OC} = this.state

    this.state.fecha_1_1 = OC.map(item=>item.fecha_1_1)
    const fecha_1_1 = this.state.fecha_1_1[0]
    this.state.fecha_1_2 = OC.map(item=>item.fecha_1_2)
    const fecha_1_2 = this.state.fecha_1_2[0]
    this.state.fecha_2_1 = OC.map(item=>item.fecha_2_1)
    const fecha_2_1 = this.state.fecha_2_1[0]
    this.state.fecha_2_2 = OC.map(item=>item.fecha_2_2)
    const fecha_2_2 = this.state.fecha_2_2[0]
    this.state.fecha_3_1 = OC.map(item=>item.fecha_3_1)
    const fecha_3_1 = this.state.fecha_3_1[0]
    this.state.fecha_3_2 = OC.map(item=>item.fecha_3_2)
    const fecha_3_2 = this.state.fecha_3_2[0]
    this.state.fecha_4_1 = OC.map(item=>item.fecha_4_1)
    const fecha_4_1 = this.state.fecha_4_1[0]
    this.state.fecha_4_2 = OC.map(item=>item.fecha_4_2)
    const fecha_4_2 = this.state.fecha_4_2[0]

    this.state.año = OC.map(item=>item.titulo)
    const año1 = this.state.año[0]

    var fecha1_1 = dateFormat(fecha_1_1, "UTC:dd/mm/yyyy")
    var fecha1_2 = dateFormat(fecha_1_2, "UTC:dd/mm/yyyy")
    var fecha2_1 = dateFormat(fecha_2_1, "UTC:dd/mm/yyyy")
    var fecha2_2 = dateFormat(fecha_2_2, "UTC:dd/mm/yyyy")
    var fecha3_1 = dateFormat(fecha_3_1, "UTC:dd/mm/yyyy")
    var fecha3_2 = dateFormat(fecha_3_2, "UTC:dd/mm/yyyy")
    var fecha4_1 = dateFormat(fecha_4_1, "UTC:dd/mm/yyyy")
    var fecha4_2 = dateFormat(fecha_4_2, "UTC:dd/mm/yyyy")


    const rows = [
      createData('Preinscripción', fecha1_1, fecha1_2),
      createData('Proceso 1', fecha2_1, fecha2_2),
      createData('Proceso 2', fecha3_1, fecha3_2),
      createData('Proceso 3', fecha4_1, fecha4_2),
    ];
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell id={this.props.color1}>Admisión año {año1}</TableCell>
            <TableCell id={this.props.color1} align="left">Inicio</TableCell>
            <TableCell id={this.props.color1} align="left">Término</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell id={this.props.color2} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.inicio}</TableCell>
              <TableCell align="left">{row.termino}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )};
}

export default Tabla