import Menu from "../src/components/commons/Menu"
import Footer from "../src/components/commons/Footer"
import { Button } from "../src/components/commons/Button"
import Text from "../src/components/foundation/Text"
import { Grid } from "../src/components/foundation/layout/Grid"
import { Box } from "../src/components/foundation/layout/Box"

export default function Home() {
  return (
    <Box 
      flex={1}
      display='flex'
      flexWrap='wrap'
      flexDirection='column'
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Menu/>

      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px'
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
              textAlign="center"
              textAlign={{
                  xs: 'center',
                  md: 'left'
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              style={{
                textAlign: 'left'
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </Text>

            <Button
              margin={{
                xs: 'auto',
                md: 'initial'
              }}
              display="block"
              variant="primary.main"
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
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <Footer/>
    </Box> 
  )
}
