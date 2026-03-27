import * as S from "./AboutMe.style";

export const AboutMe = () => {
  return (
    <>
      <S.Body>
        <S.Title>
          Sobre <S.YellowTitle>mim</S.YellowTitle>
        </S.Title>

        <S.Text>
          Meu nome é Flávio Gomes Soares. Estudo programação desde 2025, e ao
          longo desse período, desenvolvi habilidades que vão do design ao banco
          de dados. Tenho experiência com Figma para prototipagem, além de
          tecnologias como HTML, CSS, JavaScript, TypeScript, Node.js, TypeORM,
          React e MySQL.
        </S.Text>
        <S.Image></S.Image>
        <S.Networks>
          <S.Button
            href="https://github.com/FlavioGomesSoares2007"
            target="_blank"
          >
            <S.Github></S.Github> <S.Span>Github</S.Span>
          </S.Button>
          <S.Button
            href="https://www.linkedin.com/in/flávio-gomes-soares-b8804b390"
            target="_blank"
          >
            <S.Linkedin></S.Linkedin>
            <S.Span>Linkedin</S.Span>
          </S.Button>
          <S.Button href="https://wa.me/5584987214248" target="_blank">
            <S.Whatsapp></S.Whatsapp>
            <S.Span>Whatsapp</S.Span>
          </S.Button>
        </S.Networks>
      </S.Body>
    </>
  );
};
