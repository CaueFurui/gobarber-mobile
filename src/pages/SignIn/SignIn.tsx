import React from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined} // padding para IOS e undefined para android
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled" // no ios ativa sempre e no android ativa apenas quando ultrapassa muito do limite da tela e handled quando clica fora fecha o teclado
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title> Faça seu logon </Title>
            </View>

            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button
              onPress={() => {
                console.log('click');
              }}
            >
              Entrar
            </Button>

            <ForgotPassword
              onPress={() => {
                console.log('click');
              }}
            >
              <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton
        onPress={() => {
          console.log('click');
        }}
      >
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
