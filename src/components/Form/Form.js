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
import { Container } from "../../globalStyles";

const Form = () => {
  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Registre-se</FormTitle>
            <FormWrapper
              action="https://formsubmit.co/saintseiyagranultimate@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://chat.whatsapp.com/KiShRjXtQsZKBqs32zXQQ4"
              />
              <input type="hidden" name="_template" value="table"></input>
              <FormRow>
                <FormLabel>Possui experiência com RPG?</FormLabel>
                <select id="experiencia" name="experiencia">
                  <option value="sim">Sim</option>
                  <option value="não">Não</option>
                </select>
              </FormRow>
              <FormRow>
                <FormLabel>Conehce cavaleiros do zodiaco?</FormLabel>
                <select id="conheceCDZ" name="conheceCDZ">
                  <option value="sim">Sim</option>
                  <option value="não">Não</option>
                </select>

                <FormInput
                  type="text"
                  name="Nome"
                  placeholder="Seu Nome"
                ></FormInput>
                <FormInput
                  type="email"
                  name="E-mail"
                  placeholder="Seu e-mail"
                  required
                ></FormInput>
                <FormInput
                  type="tel"
                  name="telefone"
                  placeholder="Seu número de telefone "
                  required
                ></FormInput>

                <FormLabel>Escolha seu Reino</FormLabel>
                <select id="reino" name="reino">
                  <option value="Santuário">Santuário</option>
                  <option value="Submundo">Submundo</option>
                </select>

                <FormInput
                  type="text"
                  name="nomePersonagem"
                  placeholder="Nome do seu Personagem"
                  required
                ></FormInput>

                <FormInput
                  type="number"
                  name="idadePersonagem"
                  placeholder="Idade do seu Personagem"
                  required
                ></FormInput>

                <FormLabel>Escolha o continente do seu Personagem</FormLabel>
                <select id="continente" name="continente">
                  <option value="América">América</option>
                  <option value="Africa">Africa</option>
                  <option value="Europa">Europa</option>
                  <option value="Ásia">Asia</option>
                  <option value="Oceania">Oceania</option>
                  <option value="Antartida">Antartida</option>
                </select>

                <FormInput
                  type="text"
                  name="mestre"
                  placeholder="Nome do seu Mestre (Não obrigatorio)"
                ></FormInput>

                <FormLabel>Escolha o signo do seu Personagem</FormLabel>
                <select id="signo" name="signo">
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
              <FormButton type="submit">Enviar</FormButton>
            </FormWrapper>
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default Form;
