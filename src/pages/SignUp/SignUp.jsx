import { Link } from "react-router-dom";
import { Block, Button, Container, Form, Group, Input, Modal, Title, Wrapper } from "./SignUp.styled";
import { useAuth } from "../../contexts/AuthContext";

export default function SignUp() {
    const { login } = useAuth();
    return (
        <Wrapper>
            <Container>
                <Modal>
                    <Block>
                        <Title>
                            <h2>Регистрация</h2>
                        </Title>
                        <Form id="formLogUp" action="#">
                            <Input type="text" name="first-name" id="first-name" placeholder="Имя" />
                            <Input type="text" name="login" id="loginReg" placeholder="Эл. почта" />
                            <Input type="password" name="password" id="passwordFirst" placeholder="Пароль" />
                            <Button id="SignUpEnter" onClick={login}><Link to="/">Зарегистрироваться</Link> </Button>
                            <Group>
                                <p>Уже есть аккаунт?  <Link to="/login">Войдите здесь</Link></p>
                            </Group>
                        </Form>
                    </Block>
                </Modal>
            </Container>
        </Wrapper>
    )
}