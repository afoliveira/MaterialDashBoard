import React, { useState, Component } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import axios from "axios";

class ListagemGestaoPessoas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Lista: [],
      item: [],
      Dados: [],
      styles: {
        cardCategoryWhite: {
          "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
          },
          "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
          }
        },
        cardTitleWhite: {
          color: "#FFFFFF",
          marginTop: "0px",
          minHeight: "auto",
          fontWeight: "300",
          fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
          marginBottom: "3px",
          textDecoration: "none",
          "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
          }
        }
      }
    };
  }

  componentDidMount() {
    debugger;
    axios
      .get("http://localhost:8000/api/gestao-pessoas/todos", {})
      .then(result => {
        //access the results here....
        this.setState({ Lista: result.data });
        this.setState({ Dados: this.state.Lista });
        console.log(result.data);
      });
    //this.state.Lista.forEach(function(item, index){
    // console.log(item);
    //});
  }

  render() {
    //const classes = useStyles();
    const classes = makeStyles(this.state.styles);
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Simple Table</h4>
              <p className={classes.cardCategoryWhite}>
                Here is a subtitle for this table
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={[
                  "Id",
                  "Nome",
                  "Sobrenome",
                  "Nascimento",
                  "Cadastro"
                ]}
                tableData={this.state.Dados}
                // tableData={[
                //   ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                //   ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                //   ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                //   ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                //   ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                //   ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                // ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default ListagemGestaoPessoas;

/*const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

function Dados() { 
    axios.get('http://localhost:8000/api/gestao-pessoas/todos', {  })
    .then((result) => {
      //access the results here....
      const Data = result.data; 
      //this.setState({Lista: result.data});
      console.log(Data);
    });
}

/*export default function TableList(Data) {
}*/
