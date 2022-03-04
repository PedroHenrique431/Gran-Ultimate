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
                <FormLabel>Possui experiência com RPG's?</FormLabel>
                <select
                  id="experiencia"
                  name="experiencia"
                  required
                  value={experiencia}
                  onChange={handleCHange}
                >
                  <option value="NãoEscolheu">------</option>
                  <option value="sim">Sim</option>
                  <option value="não">Não</option>
                </select>
              </FormRow>
              <FormRow>
                <FormLabel>Conhece cavaleiros do zodíaco?</FormLabel>
                <select
                  id="conheceCDZ"
                  name="conheceCDZ"
                  required
                  value={conheceCDZ}
                  onChange={handleCHange}
                >
                  <option value="Não Escolheu">------</option>
                  <option value="sim">Sim</option>
                  <option value="não">Não</option>
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
                  placeholder="Seu número de telefone "
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
                  <option value="Não Escolheu">------</option>
                  <option value="Santuário">Santuário</option>
                  <option value="Submundo">Submundo</option>
                  <option value="Santuário">Asgard</option>
                  <option value="Submundo">Atlântida</option>
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
                  <option value="Não Escolheu">------</option>
                  <option value="América">América</option>
                  <option value="Africa">África</option>
                  <option value="Europa">Europa</option>
                  <option value="Ásia">Ásia</option>
                  <option value="Oceania">Oceania</option>
                  <option value="Antartida">Antártida</option>
                </select>

                <FormInput
                  type="text"
                  name="mestre"
                  placeholder="Nome do seu Mestre (Não obrigatório)"
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
                  <option value="Não Escolheu">------</option>
                  <option value="Áries">Áries</option>
                  <option value="Touro">Touro</option>
                  <option value="Gêmeos">Gêmeos</option>
                  <option value="Câncer">Câncer</option>
                  <option value="Leão">Leão</option>
                  <option value="Virgem">Virgem</option>
                  <option value="Libra">Libra</option>
                  <option value="Escorpião">Escorpião</option>
                  <option value="Sagitário">Sagitário</option>
                  <option value="Capricórnio">Capricórnio</option>
                  <option value="Aquário">Aquário</option>
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
