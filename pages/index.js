import React from 'react';
import { Button } from '../src/components/commons/Button';
import Text from '../src/components/foundation/Text';
import { Grid } from '../src/components/foundation/layout/Grid';
import WebsitePageWrapper, { WebsitePageContext } from '../src/components/wrappers/WebsitePage';

function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    <Grid.Container
      marginTop={{
        xs: '32px',
        md: '75px',
      }}
    >
      <Grid.Row>
        <Grid.Col
          offset={{ ms: 0, md: 1 }}
          value={{ xs: 12, md: 5 }}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          flexDirection="column"
        >
          <Text
            variant="title"
            tag="h1"
            color="tertiary.main"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
          >
            Compartilhe momentos e conecte-se com amigos
          </Text>
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            style={{
              textAlign: 'left',
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
          </Text>

          <Button
            margin={{
              xs: 'auto',
              md: 'initial',
            }}
            display="block"
            variant="primary.main"
            onClick={() => {
              websitePageContext.toggleModalCadastro();
            }}
          >
            Cadastrar
          </Button>
        </Grid.Col>

        <Grid.Col
          value={{ xs: 12, md: 6 }}
        >
          <img
            style={{ display: 'block', margin: 'auto' }}
            src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            alt="Imagem de fundo"
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

export default function Home() {
  return (
    <WebsitePageWrapper>
      <HomeScreen />
    </WebsitePageWrapper>
  );
}