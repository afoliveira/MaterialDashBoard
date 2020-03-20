import React, { useState, Component } from "react";
import CustomTable from 'components/CustomTable/Table';

class ListagemGestaoPessoas extends Component {
  
  render() {
    return ([
      <CustomTable url="gestao_pessoas" title="Gestão de Pessoas" />,
      <CustomTable url="estado_civils" title="Estado Civil" />
    ]);
  }
}

export default ListagemGestaoPessoas;