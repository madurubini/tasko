import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router';
import { useUser } from '../../providers/User';
import { User } from '../../types/user';
import { FormControl } from '@chakra-ui/form-control';

import {
    DividerBlock,
    Error,
    Hr,
    LoginButton,
    LoginContainer,
    LoginForm,
    LoginHeader,
    LoginOption,
    PasswordButton,
    RedirectTo,
    ShowButton,
    TextField,
    TextOptions,
} from './styles';
import { useState } from 'react';
import { InputGroup } from '@chakra-ui/input';
import { BiHide, BiShowAlt } from 'react-icons/bi';
import { useBadges } from '../../providers/Badges';

export const LoginCard = () => {
    const emptyMessage = 'Este campo não pode estar vazio!';

    const schema = yup.object().shape({
        email: yup.string().required(emptyMessage).email('Email inválido'),
        password: yup.string().required(emptyMessage),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const history = useHistory();
    const { login } = useUser();
    const [showPassword, setShowPassword] = useState(false);
    const handleClick = () => setShowPassword(!showPassword);

    const { getUserBadgesQuest, getUserBadgeLevel, getUserBadgesComments } =
        useBadges();

    const handleCLick = (data: User) => {
        login(data, history);
    };

    return (
        <LoginContainer>
            <LoginHeader>
                <h1>Entre com a sua conta</h1>
                <p>Planeje seu dia</p>
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
                <InputGroup>
                    <FormControl isInvalid={!!errors?.password}>
                        <TextField
                            variant="filled"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Senha"
                            {...register('password')}
                        />
                        <ShowButton width="4.5rem">
                            <PasswordButton
                                h="2rem"
                                size="sm"
                                onClick={handleClick}
                            >
                                {showPassword ? <BiShowAlt /> : <BiHide />}
                            </PasswordButton>
                        </ShowButton>
                        <Error>{errors.password?.message}</Error>
                    </FormControl>
                </InputGroup>
                <LoginButton
                    type="submit"
                    onClick={() => {
                        getUserBadgeLevel();
                        getUserBadgesComments();
                        getUserBadgesQuest();
                    }}
                >
                    Entrar
                </LoginButton>
            </LoginForm>
            <DividerBlock>
                <Hr />
                <LoginOption> OU </LoginOption>
                <Hr />
            </DividerBlock>
            <TextOptions>
                Não tem uma conta?{' '}
                <RedirectTo to="/register">Cadastre-se Aqui</RedirectTo>
            </TextOptions>
        </LoginContainer>
    );
};
