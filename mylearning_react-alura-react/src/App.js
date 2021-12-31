import { Container, Typography } from "@mui/material";
import { Component } from "react/cjs/react.production.min";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro";
import "@fontsource/roboto/400.css";
import { validarCpf, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./components/FormularioCadastro/contexts/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCpf, senha: validarSenha, nome: validarSenha }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
