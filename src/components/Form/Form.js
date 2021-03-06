import {
  FormColumn,
  FormWrapper,
  FormSection,
  FormRow,
  FormButton,
  FormInput,
  FormTitle,
  FormLabel,
} from "./FormStyles";

import { useState } from "react";
import { Container } from "../../globalStyles";

const Form = () => {
  const [data, setData] = useState({
    Nome: "",
    telefone: "",
    Idade: "",
    conheceCDZ: "",
    experiencia: "",
    nomePersonagem: "",
    idadePersonagem: "",
    signo: "",
    continente: "",
    mestre: "",
    reino: "",
    Email: "",
  });

  const {
    Nome,
    telefone,
    Idade,
    conheceCDZ,
    experiencia,
    nomePersonagem,
    idadePersonagem,
    signo,
    continente,
    mestre,
    reino,
    Email,
  } = data;

  const handleCHange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch(
        "https://v1.nocodeapi.com/pedrohbs/google_sheets/nIFufKLpghzmUbjN?tabId=FichasNovas",
        {
          method: "POST",
          
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              "",
              new Date().toLocaleString(),
              Nome,
              telefone,
              Idade,
              conheceCDZ,
              experiencia,
              nomePersonagem,
              "",
              "",
              "",
              "",
              idadePersonagem,
              signo,
              continente,
              "",
              mestre,
              "",
              reino,
              "",
              "",
              "",
              "",
              Email,
            ],
          ]),
        }
      );
      await response.json();
      setData({
        ...data,
              Nome,
              telefone,
              Idade,
              conheceCDZ,
              experiencia,
              nomePersonagem,
              idadePersonagem,
              signo,
              continente,
              mestre,
              reino,
              Email,
      });
      document.location.href="https://chat.whatsapp.com/KiShRjXtQsZKBqs32zXQQ4";
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Registre-se</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              <FormRow>
                <FormLabel>Possui experi??ncia com RPG's?</FormLabel>
                <select
                  id="experiencia"
                  name="experiencia"
                  required
                  value={experiencia}
                  onChange={handleCHange}
                >
                  <option value="N??oEscolheu">------</option>
                  <option value="sim">Sim</option>
                  <option value="n??o">N??o</option>
                </select>
              </FormRow>
              <FormRow>
                <FormLabel>Conhece cavaleiros do zod??aco?</FormLabel>
                <select
                  id="conheceCDZ"
                  name="conheceCDZ"
                  required
                  value={conheceCDZ}
                  onChange={handleCHange}
                >
                  <option value="N??o Escolheu">------</option>
                  <option value="sim">Sim</option>
                  <option value="n??o">N??o</option>
                </select>

                <FormInput
                  type="text"
                  name="Nome"
                  placeholder="Seu Nome"
                  value={Nome}
                  required
                  onChange={handleCHange}
                ></FormInput>
                <FormInput
                  type="number"
                  name="Idade"
                  placeholder="Sua idade"
                  value={Idade}
                  required
                  onChange={handleCHange}
                ></FormInput>
                <FormInput
                  type="email"
                  name="Email"
                  placeholder="Seu e-mail"
                  required
                  value={Email}
                  onChange={handleCHange}
                ></FormInput>
                <FormInput
                  type="tel"
                  name="telefone"
                  placeholder="Seu n??mero de telefone "
                  required
                  value={telefone}
                  onChange={handleCHange}
                ></FormInput>

                <FormLabel>Escolha seu Reino</FormLabel>
                <select
                  id="reino"
                  name="reino"
                  value={reino}
                  required
                  onChange={handleCHange}
                >
                  <option value="N??o Escolheu">------</option>
                  <option value="Santu??rio">Santu??rio</option>
                  <option value="Submundo">Submundo</option>
                  <option value="Asgard">Asgard</option>
                  <option value="Atl??ntida">Atl??ntida</option>
                </select>

                <FormInput
                  type="text"
                  name="nomePersonagem"
                  placeholder="Nome do seu Personagem"
                  required
                  value={nomePersonagem}
                  onChange={handleCHange}
                ></FormInput>

                <FormInput
                  type="number"
                  name="idadePersonagem"
                  placeholder="Idade do seu Personagem"
                  required
                  value={idadePersonagem}
                  onChange={handleCHange}
                ></FormInput>

                <FormLabel>Escolha o continente do seu Personagem</FormLabel>
                <select
                  id="continente"
                  name="continente"
                  value={continente}
                  required
                  onChange={handleCHange}
                >
                  <option value="N??o Escolheu">------</option>
                  <option value="Am??rica">Am??rica</option>
                  <option value="Africa">??frica</option>
                  <option value="Europa">Europa</option>
                  <option value="??sia">??sia</option>
                  <option value="Oceania">Oceania</option>
                  <option value="Antartida">Ant??rtida</option>
                </select>

                <FormInput
                  type="text"
                  name="mestre"
                  placeholder="Nome do seu Mestre (N??o obrigat??rio)"
                  value={mestre}
                  onChange={handleCHange}
                ></FormInput>

                <FormLabel>Escolha o signo do seu Personagem</FormLabel>
                <select
                  id="signo"
                  name="signo"
                  value={signo}
                  required
                  onChange={handleCHange}
                >
                  <option value="N??o Escolheu">------</option>
                  <option value="??ries">??ries</option>
                  <option value="Touro">Touro</option>
                  <option value="G??meos">G??meos</option>
                  <option value="C??ncer">C??ncer</option>
                  <option value="Le??o">Le??o</option>
                  <option value="Virgem">Virgem</option>
                  <option value="Libra">Libra</option>
                  <option value="Escorpi??o">Escorpi??o</option>
                  <option value="Sagit??rio">Sagit??rio</option>
                  <option value="Capric??rnio">Capric??rnio</option>
                  <option value="Aqu??rio">Aqu??rio</option>
                  <option value="Peixes">Peixes</option>
                </select>
              </FormRow>
              <FormButton type="submit" name="submit">
                Enviar
              </FormButton>
            </FormWrapper>
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default Form;
