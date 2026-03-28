import * as S from "./Projects.style";
import discordoIMG from "../../assets/projects/project_discordo.png";
import checkIMG from "../../assets/projects/project_check-list.png";
import energiasIMG from "../../assets/projects/project_energias-renovaveis.png";

export const Projects = () => {
  return (
    <>
      <S.Body>
        <S.Title>Projetos</S.Title>
        <S.Text>
          Nos projetos, o Backend está hospedado no plano gratuito do Render.
          Por economia de recursos, o servidor entra em repouso após um período
          de inatividade. Caso o carregamento inicial demore cerca de 30
          segundos, é apenas o sistema "acordando" para processar sua
          requisição. Após esse início, a navegação segue em tempo real.
          Agradeço a paciência!
        </S.Text>
        <S.ProjectWrapper>
          <S.DisplayBox>
            <S.Image $ImageProps={discordoIMG}></S.Image>
            <S.Detail>
              Projeto desenvolvido para o estudo de tecnologias modernas como
              React, Node.js, TypeORM e MySQL. Trata-se de um chat em tempo real
              que utiliza WebSockets para garantir a troca de mensagens
              instantânea, onde cada contato possui seu próprio histórico de
              conversas individualizado.
            </S.Detail>
            <S.Networks>
              <S.Button
                href="https://discordo-cliente.vercel.app"
                target="_blank"
              >
                Visualizar Site
              </S.Button>
              <S.Button
                href="https://github.com/FlavioGomesSoares2007/discordo_cliente"
                target="_blank"
              >
                GitHub do Front
              </S.Button>
              <S.Button
                href="https://github.com/FlavioGomesSoares2007/discordo_api"
                target="_blank"
              >
                GitHub do Back
              </S.Button>
            </S.Networks>
          </S.DisplayBox>
          <S.DisplayBox>
            <S.Image $ImageProps={checkIMG}></S.Image>
            <S.Detail>
              Um projeto de aprendizado prático focado no funcionamento do
              ambiente Full Stack. Utilizei React, Node.js e TypeORM para
              entender como os dados fluem do frontend até o banco de dados
              MySQL. Embora o design seja minimalista, o real foco foi me
              familiarizar com o ambiente de desenvolvimento.
            </S.Detail>
            <S.Networks>
              <S.Button
                href="https://check-list-cliente.onrender.com"
                target="_blank"
              >
                Visualizar Site
              </S.Button>
              <S.Button
                href="https://github.com/FlavioGomesSoares2007/check_list_cliente"
                target="_blank"
              >
                GitHub do Front
              </S.Button>
              <S.Button
                href="https://github.com/FlavioGomesSoares2007/check_list_api"
                target="_blank"
              >
                GitHub do Back
              </S.Button>
            </S.Networks>
          </S.DisplayBox>

          <S.DisplayBox>
            <S.Image $ImageProps={energiasIMG}></S.Image>
            <S.Detail>
              Um site informativo desenvolvido para um trabalho de Geografia,
              focado na apresentação de fontes de energia limpa. O projeto foi
              construído utilizando apenas HTML5 e CSS3, servindo como base para
              consolidar o aprendizado em estruturação de tags e estilização
              básica de layouts.
            </S.Detail>
            <S.Networks>
              <S.Button
                href="https://flaviogomessoares2007.github.io/energias_renovaveis/"
                target="_blank"
              >
                Visualizar Site
              </S.Button>
              <S.Button
                href="https://github.com/FlavioGomesSoares2007/energias_renovaveis"
                target="_blank"
              >
                GitHub do Front
              </S.Button>
            </S.Networks>
          </S.DisplayBox>
        </S.ProjectWrapper>
      </S.Body>
    </>
  );
};
