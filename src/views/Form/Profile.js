import React from "react";

//componentes @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

//componentes core
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import GridItem from "components/Grid/GridItem.js";
  import GridContainer from "components/Grid/GridContainer.js";
  import CustomInput from "components/CustomInput/CustomInput.js";
  import Button from "components/CustomButtons/Button.js";
  import Card from "components/Card/Card.js";
  import CardHeader from "components/Card/CardHeader.js";
  import CardBody from "components/Card/CardBody.js";
  import CardFooter from "components/Card/CardFooter.js";
import { card } from "assets/jss/material-dashboard-react";

  const styles = {
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    }
  };
  
  const useStyles = makeStyles(styles);

  export default function Profile(){
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Pessoa</h4>
                            <p className={classes.cardCategoryWhite}>Cadastro de cidadão</p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                
                                <GridItem xs={12} sm={12} md={5}>
                                    <CustomInput
                                        labelText="Nome"
                                        id="nome"
                                        formControlProps={{
                                        fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="RG/CPF"
                                        id="documento"
                                        formControlProps={{
                                        fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                    <CustomInput
                                        labelText="Sexo"
                                        id="sexo"
                                        formControlProps={{
                                        fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="E-mail"
                                        id="email"
                                        formControlProps={{
                                        fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                    <CustomInput
                                        labelText="Telefone"
                                        id="telefone"
                                        formControlProps={{
                                        fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                    <CustomInput
                                        labelText="Celular"
                                        id="telefone"
                                        formControlProps={{
                                        fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={3}>
                                    <CustomInput
                                        labelText="CEP"
                                        id="cep"
                                        formControlProps={{
                                        fullWidth: true
                                        }}
                                    />
                                    </GridItem>
                                <GridItem xs={12} sm={12} md={5}>
                                    <CustomInput
                                        labelText="Logradouro"
                                        id="logradouro"
                                        formControlProps={{
                                        fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Complemento"
                                        id="complemento"
                                        formControlProps={{
                                        fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={4}>
                                <CustomInput
                                        labelText="Complemento"
                                        id="complemento"
                                        formControlProps={{
                                        fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Nome da Mãe"
                                        id="fil-nom"
                                        formControlProps={{
                                        fullWidth: true
                                        }}
                                    />
                                    </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Nome do Pai"
                                        id="fil-nom-pai"
                                        formControlProps={{
                                        fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
  }