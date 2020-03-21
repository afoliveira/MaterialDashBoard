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
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CardBody from "components/Card/CardBody.js";
import axios from "axios";

import "./Table.css";
class CustomTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Labels: [],
            Lista: []
            }
    }

    async deleteItem(id) {

        if (window.confirm(`Tem certeza que quer apagar ?`)) {
            await fetch(`http://192.168.15.12:3001/${this.props.url}/${id}`, {method: 'DELETE'});
            this.loadItem(this.props.url);
        }
    }
    
    componentDidMount() {
        this.loadItem(this.props.url);
    }

    async createItem() {
        axios.post(`http://192.168.15.12:3001/${this.props.url}`, {
            "gestao_pessoa": {
                "gpe_nom_pessoa": "Fred",
                "gpe_nom_sobre_pessoa": "Kruger",
                "gpe_dat_nascimento": "16/07/1990",
            }
        })
        .then( response => {
            console.log(response);
            this.loadItem(this.props.url);
        });
    }

    async loadItem(url) {
        axios.get(`http://192.168.15.12:3001/${url}`) // Mudar o endpoint para o endereço da sua API
        .then(result => {
        this.setState({ Lista: result.data });
        this.setState({ Labels: Object.keys(this.state.Lista[0]) });
        });
    }

    render() {
        const {Labels} = this.state;
        const {Lista} = this.state;    
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card className="card-test table-responsive">
                        <CardHeader className="d-flex" color="gray" >
                            <h4>{this.props.title}</h4>
                            <Button color="primary" size="sm">Cadastrar</Button>
                        </CardHeader>
                        <CardBody>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        {Labels.map(name => (
                                            <TableCell>{name}</TableCell>
                                        ))}
                                            <TableCell className="options"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Lista.map(row => (
                                        
                                        <TableRow id={(Object.values(row))[0]}>
                                            {Labels.map(key => (
                                                <TableCell>{row[key]}</TableCell>
                                            ))}
                                            <TableCell className="options">
                                                <IconButton className="btn-options" onClick={ () => { }}>
                                                    <EditIcon className="btn-edit" />
                                                </IconButton>
                                                <IconButton className="btn-options" onClick={ () => { this.deleteItem((Object.values(row))[0]) }}>
                                                    <DeleteIcon className="btn-delete" />
                                                </IconButton>
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

export default CustomTable;