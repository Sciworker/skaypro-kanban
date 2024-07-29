import { Link, useNavigate } from "react-router-dom";
import { Block, Button, Container, Form, Group, Input, Modal, Title, Wrapper, FormInfo } from "./SignUp.styled";
import { useAuth } from "../../contexts/AuthContext";
import { register } from "../../api/auth";
import { useReducer, useState } from "react";

const initialState = {
    "first-name": "",
    login: "",
    password: "",
    errors: {
        "first-name": false,
        login: false,
        password: false,
    },
};

function reducer(state, action) {
    switch (action.type) {
        case "setField":
            return {
                ...state,
                [action.field]: action.value,
                errors: initialState.errors,
            };
        case "setError":
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.field]: action.value,
                },
            };
        case "setErrors":
            return {
                ...state,
                errors: action.errors,
            };
        default:
            return state;
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default function SignUp() {
    const [signUpForm, dispatch] = useReducer(reducer, initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        dispatch({
            type: "setField",
            field: e.target.name,
            value: e.target.value,
        });
        setError("");
    };

    const handleSingUp = async (e) => {
        e.preventDefault();

        const errors = {};
        if (!signUpForm["first-name"]) {
            errors["first-name"] = true;
        }
        if (!signUpForm.login) {
            errors.login = true;
        }
        if (!signUpForm.password) {
            errors.password = true;
        }
        if (Object.keys(errors).length > 0) {
            dispatch({ type: "setErrors", errors });
            setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме.");
            return;
        }

        if (!validateEmail(signUpForm.login)) {
            dispatch({ type: "setError", field: "login", value: true });
            setError(
                "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку."
            );
            return;
        }

        setLoading(true);
        setError("");
        try {
            const response = await register({
                login: signUpForm.login,
                name: signUpForm["first-name"],
                password: signUpForm.password,
            });
            const userData = response.user;
            login(
                {
                    login: userData.login,
                    name: userData.name,
                    token: userData.token,
                },
            );
            navigate("/");
        } catch (error) {
            if (error.status === 400) {
                dispatch({
                    type: "setError",
                    field: "login",
                    value: true,
                });
                setError("Пользователь с таким логином уже существует.");
            } else {
                setError("Произошла ошибка");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Wrapper>
            <Container>
                <Modal>
                    <Block>
                        <Title>
                            <h2>Регистрация</h2>
                        </Title>
                        <Form id='formLogUp' action='#'>
                            <Input
                                $error={signUpForm.errors["first-name"]}
                                type='text'
                                value={signUpForm["first-name"]}
                                onChange={handleChange}
                                name='first-name'
                                id='first-name'
                                placeholder='Имя'
                            />
                            <Input
                                $error={signUpForm.errors.login}
                                required
                                type='email'
                                value={signUpForm.login}
                                onChange={handleChange}
                                name='login'
                                id='loginReg'
                                placeholder='Эл. почта'
                            />
                            <Input
                                $error={signUpForm.errors.password}
                                type='password'
                                value={signUpForm.password}
                                onChange={handleChange}
                                name='password'
                                id='passwordFirst'
                                placeholder='Пароль'
                            />
                            <FormInfo $error={error}>
                                {loading ? (
                                    <p>Регистрация...</p>
                                ) : error ? (
                                    <p>{error}</p>
                                ) : null}
                            </FormInfo>
                            <Button
                                disabled={loading || error}
                                onClick={handleSingUp}
                                id='SignUpEnter'
                            >
                                Зарегистрироваться{" "}
                            </Button>
                            <Group>
                                <p>
                                    Уже есть аккаунт?{" "}
                                    <Link to='/login'>Войдите здесь</Link>
                                </p>
                            </Group>
                        </Form>
                    </Block>
                </Modal>
            </Container>
        </Wrapper>
    );
}