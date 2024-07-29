import { Wrapper, Container, Modal, Block } from "./NotFound.styled"

export default function NotFound() {

    return (
        <Wrapper>
            <Container>
                <Modal>
                    <Block>
                        <h2>Страница не найдена</h2>
                    </Block>
                </Modal>
            </Container>
        </Wrapper>
    );
}