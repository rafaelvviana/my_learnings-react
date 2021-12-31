import { Container, Typography } from "@mui/material";
import { Component } from "react/cjs/react.production.min";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro";
import '@fontsource/roboto/400.css';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth='sm'>
        <Typography variant='h3' component="h1" align='center'>Formulário de Cadastro</Typography>        
        <FormularioCadastro 
          aoEnviar={aoEnviarForm} 
          validarCpf={validarCpf}
        />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCpf(cpf) {
  if(cpf.length !== 11) {
    return {valid:false, texto:"CPF deve ter 11 dígitos"}
  } else {
    return {valido:true, texto:""}
  }
}

export default App;
