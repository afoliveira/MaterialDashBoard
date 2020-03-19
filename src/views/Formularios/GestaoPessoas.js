//import React from "react"; -- original//
import React, { useState, Component } from "react";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
// componente data //
import DatePicker1 from "components/Date/DatePicker1.js";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { useHistory } from "react-router-dom";
import axios from "axios";
import avatar from "assets/img/faces/marc.jpg";

class GestaoPessoas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gpe_id_gpe: null,
      gpe_nom_pessoa: "",
      gpe_dat_nascimento: "",
      gpe_dat_cadastro: "",
      gpe_nom_sobre_pessoa: "",
      operacao: "inserir",
      vazia: null,
      opcao: false,
      isOpen: false,
      styles: {
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
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Listagem = this.Listagem.bind(this);
  }

  Listagem() {
    const { history } = this.props;
    history.push("/meus/forms/lista-gestao-pessoas");
  }

  onChange = e => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    console.log("entrei");
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDateChange = e => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    console.log("entrei");
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(event) {
    const { history } = this.props;
    event.preventDefault();
    const {
      gpe_id_gpe,
      gpe_nom_pessoa,
      gpe_dat_cadastro,
      gpe_dat_nascimento,
      gpe_nom_sobre_pessoa,
      operacao
    } = this.state;
    axios
      .post("http://localhost:8000/api/gestao-pessoas/novo", {
        gpe_id_gpe,
        gpe_nom_pessoa,
        gpe_dat_cadastro,
        gpe_dat_nascimento,
        gpe_nom_sobre_pessoa,
        operacao
      })
      .then(result => {
        //access the results here....
        console.log(result.data.resp);
        //history.push('/meus/forms/lista-gestao-pessoas')
        this.setState({ isOpen: true });
      });
  }

  componentDidMount() {
    //evento on load
    debugger;
    const {
      match: { params }
    } = this.props;
    params ? this.setState({ vazia: false }) : this.setState({ vazia: true });
    if (this.state.vazia == false) {
      return;
    }
    //axios.get(`http://localhost:8000/api/gestao-pessoas/limite/${params.id}`)
    axios
      .get(`http://localhost:8000/api/gestao-pessoas/limite/4`)
      .then(result => {
        console.log(result);
        this.setState({ gpe_id_gpe: result.data[0].id });
        this.setState({ gpe_nom_pessoa: result.data[0].nome });
        const data_nasc = result.data[0].nascimento;
        this.setState({ gpe_dat_nascimento: data_nasc.substr(0, 10) });
        const data_cad = result.data[0].nascimento;
        this.setState({ gpe_dat_cadastro: data_nasc.substr(0, 10) });
        this.setState({ gpe_nom_sobre_pessoa: result.data[0].sobrenome });
        this.setState({ operacao: "atualizar" });
      });
  }

  render() {
    const classes = makeStyles(this.state.styles);
    // const [selectedDate, handleDateChange] = useState(new Date());
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>
                  Editar perfil de Pessoa
                </h4>
                <p className={classes.cardCategoryWhite}>Complete o perfil</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  {/* <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Company (disabled)"
                      id="company-disabled"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: true
                      }}
                    />
                  </GridItem> */}
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Nome da Pessoa"
                      id="gpe_nom_pessoa"
                      name="gpe_nom_pessoa"
                      value="teste"
                      onChange={this.onChange}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Sobrenome da Pessoa"
                      id="gpe_nom_sobre_pessoa"
                      name="gpe_nom_sobre_pessoa"
                      onChange={this.onChange}
                      value={this.state.gpe_nom_sobre_pessoa}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      id="date"
                      label="Data de Nascimento"
                      type="date"
                      name="gpe_dat_nascimento"
                      defaultValue="2017-05-24"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      id="date"
                      label="data de Cadastro"
                      type="date"
                      name="gpe_dat_cadastro"
                      defaultValue="2017-05-24"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={this.handleSubmit}>
                  Salvar Dados
                </Button>
                <Button color="info" onClick={this.Listagem}>
                  Listar Pessoas
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                <h4 className={classes.cardTitle}>Alec Thompson</h4>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button color="primary" round>
                  Follow
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default GestaoPessoas;
