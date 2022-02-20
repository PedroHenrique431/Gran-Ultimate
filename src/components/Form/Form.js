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
              action="https://formsubmit.co/cff3b84938f5937a17cdfeb3be84be5f"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://portfolio-pedrohbs.herokuapp.com/"
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
                  placeholder="Seu número de telefone  (xx) xxxxx-xxxx "
				  pattern="([0-9]{2})[0-9]{4}-[0-9]{4}"
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
                  type="phone"
                  name="E-mail"
                  placeholder="Nome do seu Mestre (Não obrigatorio)"
                ></FormInput>

                <FormLabel>Escolha o signo do seu Personagem</FormLabel>
                <select id="signo" name="signo">
                  <option value="América">Áries</option>
                  <option value="Africa">Touro</option>
                  <option value="Europa">Gêmeos</option>
                  <option value="Ásia">Câncer</option>
				  <option value="Oceania">Leão</option>
				  <option value="Antartida">Virgem</option>
				  <option value="América">Libra</option>
                  <option value="Africa">Escorpião</option>
                  <option value="Europa">Sagitário</option>
                  <option value="Ásia">Capricórnio</option>
				  <option value="Oceania">Aquário</option>
				  <option value="Antartida">Peixes</option>
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
