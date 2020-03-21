import React, { useState, Component } from "react";
import CustomTable from 'components/CustomTable/Table.js';

class ListagemGestaoPessoas extends Component {
  
  render() {
    return ([
      <CustomTable url="tipo_documentos" title="Tipo de Documento" />,
      <CustomTable url="gestao_pessoas" title="Gestão de Pessoas" />,
      <CustomTable url="estado_civils" title="Estado Civil" />
    ]);
  }
}

export default ListagemGestaoPessoas;