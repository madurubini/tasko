import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router';
import { User } from '../../types/user';
import { useUser } from '../../providers/User';
import {
    DividerBlock,
    Error,
    Hr,
    RedirectTo,
    RegisterButton,
    RegisterContainer,
    RegisterForm,
    RegisterHeader,
    RegisterOption,
    SubTitle,
    TextField,
    TextOptions,
    Title,
} from './style';
import { FormControl } from '@chakra-ui/form-control';

export const RegisterCard = () => {
    const emptyMessage = 'Este campo não pode estar vazio!';

    const schema = yup.object().shape({
        name: yup
            .string()
            .required(emptyMessage)
            .min(3, 'Minimo 3 caracteres')
            .max(20, 'Máximo 20 caracteres'),
        lastname: yup
            .string()
            .required(emptyMessage)
            .min(3, 'Minimo 3 caracteres'),
        email: yup.string().required(emptyMessage).email('Email inválido'),
        password: yup
            .string()
            .required(emptyMessage)
            .min(6, 'A senha deve ter pelo menos 6 caracteres')
            .matches(
                /(?=.*?[A-Z])/,
                'Senha deve ter pelo menos uma letra maiúscula',
            )
            .matches(
                /(?=.*?[a-z])/,
                'Senha deve ter pelo menos uma letra minúscula',
            )
            .matches(/(?=.*?[0-9])/, 'Senha deve ter pelo menos um número')
            .matches(
                /(?=.*?[#?!@$%^&*-])/,
                'Senha deve ter pelo menos um caractere especial',
            )
            .matches(/.{6,}'/, 'Senha deve ter no mínimo seis caracteres'),
        matchedPassword: yup
            .string()
            .required(emptyMessage)
            .oneOf([yup.ref('password'), null], 'senhas não são iguas'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const history = useHistory();
    const { signup } = useUser();

    const toSubmit = (data: User) => {
        const newUser = {
            ...data,
            xp: 0,
        };
        signup(newUser);
        history.push(`/dashboard`);
    };

    return (
        <RegisterContainer>
            <RegisterHeader>
                <Title>Cadastre-se</Title>
                <SubTitle>Faça seus dias melhores</SubTitle>
            </RegisterHeader>
            <RegisterForm onSubmit={handleSubmit(toSubmit)}>
                <FormControl isInvalid={!!errors?.name}>
                    <TextField
                        variant="filled"
                        type="text"
                        placeholder="Nome"
                        {...register('name')}
                    />
                    <Error>{errors.name?.message}</Error>
                </FormControl>
                <FormControl isInvalid={!!errors?.lastname}>
                    <TextField
                        variant="filled"
                        type="text"
                        placeholder="Sobrenome"
                        {...register('lastname')}
                    />
                    <Error>{errors.lastname?.message}</Error>
                </FormControl>
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
                <FormControl isInvalid={!!errors?.matchedPassword}>
                    <TextField
                        variant="filled"
                        type="password"
                        placeholder="Confirmar Senha"
                        {...register('matchedPassword')}
                    />
                    <Error>{errors.matchedPassword?.message}</Error>
                </FormControl>
                <RegisterButton type="submit">Registrar</RegisterButton>
            </RegisterForm>
            <DividerBlock>
                <Hr />
                <RegisterOption> OU </RegisterOption>
                <Hr />
            </DividerBlock>
            <TextOptions>
                Já tem uma conta?{' '}
                <RedirectTo to="/login">Faça o Login</RedirectTo>
            </TextOptions>
        </RegisterContainer>
    );
};
