/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);

  const [userInfo, setUserInfo] = useState({
    user: 'testeuser',
    name: 'Lucas Dias',
  });

  function handleChange(e) {
    const fieldName = e.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: e.target.value,
    });
  }

  const isFormInvalid = userInfo.user.length === 0 || userInfo.name.length === 0;

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsFormSubmited(true);
      const userDTO = {
        username: userInfo.user,
        name: userInfo.name,
      };

      fetch('https://instalura-api.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDTO),
      })
        .then((respServer) => {
          if (respServer.ok) {
            return respServer.json();
          }
          throw new Error('');
        }).then((respSuccess) => {
          setSubmissionStatus(formStates.DONE);
          // eslint-disable-next-line no-console
          console.log(respSuccess);
        })
        .catch((error) => {
          setSubmissionStatus(formStates.ERROR);
          // eslint-disable-next-line no-console
          console.error(error);
        });
    }}
    >

      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>

      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Name"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          placeholder="Usuario"
          name="user"
          value={userInfo.user}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Enviar
      </Button>

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box>
          <Lottie
            width="150px"
            height="150px"
            config={{
              animationData: successAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
      <Box
        display="flex"
        justifyContent="center"
      >
        <Lottie
          width="150px"
          height="150px"
          config={{
            animationData: errorAnimation,
            loop: true,
            autoplay: true,
          }}
        />
      </Box>
      )}

    </form>
  );
}

export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}