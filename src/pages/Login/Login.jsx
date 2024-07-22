import { Link } from "react-router-dom";
import { Block, Button, Form, Group, Input, Modal, Title, Wrapper } from "./Login.styled";
import { Container } from "./Login.styled";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
    const { login } = useAuth();

    return (
        <Wrapper>
            <Container>
                <Modal>
                    <Block>
                        <Title>
                            <h2>Вход</h2>
                        </Title>
                        <Form id="formLogIn" action="#">
                            <Input type="text" name="login" id="formlogin" placeholder="Эл. почта"/>
                            <Input type="password" name="password" id="formpassword" placeholder="Пароль"/>
                            <Button id="btnEnter" onClick={login}><Link to="/">Войти</Link></Button>
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