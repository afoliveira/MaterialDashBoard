import React, { useState, Component } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button";
import CardBody from "components/Card/CardBody.js";
import axios from "axios";

class ListagemGestaoPessoas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Lista: []
      }
    }
  
  createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  componentDidMount() {
    
    axios.get("http://192.168.15.12:3001/gestao_pessoas") // Mudar o endpoint para o endereço da sua API
    .then(result => {
      const Lista = result.data;
      this.setState({ Lista });
    });


  }

  render() {
    const {Lista} = this.state;
    const classes = makeStyles(this.state.styles);
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            </CardHeader>
            <CardBody>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Sobrenome</TableCell>
                    <TableCell>Data de Nascimento</TableCell>
                    <TableCell>Data de Cadastro</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Lista.map(row => (
                    <TableRow key={row.gpe_id_gpe}>
                      <TableCell>{row.gpe_id_gpe}</TableCell>
                      <TableCell>{row.gpe_nom_pessoa}</TableCell>
                      <TableCell>{row.gpe_nom_sobre_pessoa}</TableCell>
                      <TableCell>{row.gpe_dat_nascimento}</TableCell>
                      <TableCell>{row.gpe_dat_cadastro}</TableCell>
                      <TableCell>
                        <Button color="info">Editar</Button>
                        <Button color="danger">Apagar</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default ListagemGestaoPessoas;