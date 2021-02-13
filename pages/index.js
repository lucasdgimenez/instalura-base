import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Text = styled.p`
  font-size: 20px;
  color: black;
`

function Button() {
  return <button>Cadastrar</button>
}

export default function Home() {
  return <div>
  <Title>My page</Title>
  <Text>Bla bla</Text>
  <Button/>
  </div> 
}
