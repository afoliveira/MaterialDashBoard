import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Adm() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <Card>
          <CardHeader color="danger">
            <h4 className={classes.cardTitleWhite}>Administrativo</h4>
            <p className={classes.cardCategoryWhite}>
              Cadastro de Tabelas base
            </p>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={3}>
                <Card chart>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Tipo de Endereço</h4>
                    <p>Tipo de endereço do usuário</p>
                    <Button color="primary">Acessar</Button>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card chart>
                  <CardBody>
                    <h4 className={classes.cardTitle}>
                      Tipo de Subunidade de Endereço
                    </h4>
                    <p>Tipo de endereço do usuário</p>
                    <Button color="primary">Acessar</Button>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card chart>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Sexo</h4>
                    <p>Tipo de endereço do usuário</p>
                    <Button color="primary">Acessar</Button>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card chart>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Estado Civil</h4>
                    <p>Tipo de endereço do usuário</p>
                    <Button color="primary">Acessar</Button>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card chart>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Filiação</h4>
                    <p>Tipo de endereço do usuário</p>
                    <Button color="primary">Acessar</Button>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card chart>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Órgão Emissor</h4>
                    <p>Tipo de endereço do usuário</p>
                    <Button color="primary">Acessar</Button>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card chart>
                  <CardBody>
                    <h4 className={classes.cardTitle}>País</h4>
                    <p>Tipo de endereço do usuário</p>
                    <Button color="primary">Acessar</Button>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card chart>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Estado</h4>
                    <p>Tipo de endereço do usuário</p>
                    <Button color="primary">Acessar</Button>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card chart>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Município</h4>
                    <p>Tipo de endereço do usuário</p>
                    <Button color="primary">Acessar</Button>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card chart>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Bairro</h4>
                    <p>Tipo de endereço do usuário</p>
                    <Button color="primary">Acessar</Button>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card chart>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Logradouro</h4>
                    <p>Tipo de endereço do usuário</p>
                    <Button color="primary">Acessar</Button>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridContainer>
    </div>
  );
}
