import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router';
import { useUser } from '../../providers/User';
import { User } from '../../types/user';
import { FormControl } from '@chakra-ui/form-control';

import { DividerBlock, Error, Hr, LoginButton, LoginContainer, LoginForm, LoginHeader, LoginOption, RedirectTo, TextField, TextOptions } from './styles';
import { SubTitle, Title } from '../RegisterCard/style';

export const LoginCard = () =>{
    const emptyMessage = 'Este campo não pode estar vazio!'

    const schema = yup.object().shape({
        email: yup.string().required(emptyMessage).email('Email inválido'),
        password: yup
        .string()
        .required(emptyMessage)
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!%])[0-9a-zA-Z$*&@#]{6,}$/,
            `Senha deve ter ter letras maiúsculas e minúsculas,
            um destes simbolos ($*&@#!%) e no mínimo 6 caracteres`,
        )
    })
    const{
            register,
            handleSubmit,
            formState:{errors},
        }=useForm({
            resolver: yupResolver(schema)
        })
        const history = useHistory()
        const {login} = useUser()

        const handleCLick = (data:User) =>{
            login(data)
            history.push(`/dashboard`)
        }
        return (
            <LoginContainer>
                <LoginHeader>
                    <Title>Entre com a sua conta</Title>
                    <SubTitle>Planeje seu dia</SubTitle>
                </LoginHeader>
                <LoginForm onSubmit={handleSubmit(handleCLick)}>
                    <FormControl isInvalid={!!errors?.email}>
                        <TextField
                            variant="filled"
                            type="text"
                            placeholder="Email"
                            {...register('email')}
                        />
                        <Error>{errors.email?.message}</Error>
                    </FormControl>
                    <FormControl isInvalid={!!errors?.password}>
                        <TextField
                            variant="filled"
                            type="password"
                            placeholder="Senha"
                            {...register('password')}
                        />
                        <Error>{errors.password?.message}</Error>
                    </FormControl>
                    <LoginButton type="submit">Entrar</LoginButton>
                </LoginForm>
                <DividerBlock>
                    <Hr />
                    <LoginOption> OU </LoginOption>
                    <Hr />
                </DividerBlock>
                <TextOptions>
                    Não tem uma conta?{' '}
                    <RedirectTo to="/register">Cadastra-se Aqui</RedirectTo>
                </TextOptions>
            </LoginContainer>
        );
    }
