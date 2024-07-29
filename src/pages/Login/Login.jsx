import { Link, useNavigate } from "react-router-dom";
import { Block, Button, Form, Group, Input, Modal, Title, Wrapper, FormInfo } from "./Login.styled";
import { Container } from "./Login.styled";
import { useAuth } from "../../contexts/AuthContext";
import { authentication } from "../../api/auth";
import { useReducer, useState } from "react";

const initialState = {
    login: "",
    password: "",
    errors: {
        login: false,
        password: false,
    },
};

function reducer(state, action) {
    switch (action.type) {
        case 'setField':
            return {
                ...state,
                [action.field]: action.value,
                errors: initialState.errors,
            }
        case 'setError':
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.field]: action.value,
                }
            }
        case 'setErrors':
            return {
                ...state,
                errors: action.errors,
            }
        default:
            return state;
    }
}

export default function Login() {
    const [loginForm, dispatch] = useReducer(reducer, initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        dispatch({ type: 'setField', field: e.target.name, value: e.target.value });
        setError('');
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        const errors = {};
        if (!loginForm.login) {
            errors.login = true;
        }
        if (!loginForm.password) {
            errors.password = true;
        }
        if (Object.keys(errors).length > 0) {
            dispatch({ type: 'setErrors', errors });
            setError('Не все поля заполнены');
            return;
        }

        setLoading(true);
        setError("");
        try {
            const response = await authentication({
                login: loginForm.login,
                password: loginForm.password,
            });
            const userData = response.user;
            login({
                login: userData.login,
                name: userData.name,
                token: userData.token,
            });
            navigate("/");
        } catch (error) {
            if (error.status === 400) {
                dispatch({
                    type: "setErrors",
                    errors: {
                        login: true,
                        password: true,
                    },
                });
                setError(
                    'Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.'
                );
            } else {
                setError('Произошла ошибка');
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <Wrapper>
            <Container>
                <Modal>
                    <Block>
                        <Title>
                            <h2>Вход</h2>
                        </Title>
                        <Form id="formLogIn" action="#">
                            <Input $error={loginForm.errors.login} type="text" value={loginForm.login} onChange={handleChange} name="login" id="formlogin" placeholder="Эл. почта"/>
                            <Input $error={loginForm.errors.password} type="password" value={loginForm.password} onChange={handleChange} name="password" id="formpassword" placeholder="Пароль" />
                            <FormInfo $error={error}>
                                {loading ? <p>Авторизация...</p> : error ? <p>{error}</p> : null}
                            </FormInfo>
                            <Button disabled={loading || error} id="btnEnter" onClick={handleLogin}>Войти</Button>
                            <Group>
                                <p>Нужно зарегистрироваться?</p>
                                <Link to="/register">Регистрируйтесь здесь</Link>
                            </Group>
                        </Form>
                    </Block>
                </Modal>
            </Container>
        </Wrapper>
    );
}