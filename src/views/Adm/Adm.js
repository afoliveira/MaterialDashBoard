import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
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
