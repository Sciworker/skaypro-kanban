import "../../../App.css";
import { StyledExitPopup, Block, Title, FormGroup, YesButton, NoButton } from "./PopExit.styled";
import { PopupContainer } from "../../../App.styled";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function PopExit({ onExit }) {
    return (
        <StyledExitPopup id='popExit'>
            <PopupContainer>
                <Block>
                    <Title>
                        <h2>Выйти из аккаунта?</h2>
                    </Title>
                    <form id='formExit' action='#'>
                        <FormGroup>
                            <YesButton id='exitYes' onClick={onExit}>
                                <Link to='/login'>Да, выйти</Link>{" "}
                            </YesButton>
                            <NoButton id='exitNo'>
                                <Link to='/'>Нет, остаться</Link>{" "}
                            </NoButton>
                        </FormGroup>
                    </form>
                </Block>
            </PopupContainer>
        </StyledExitPopup>
    );
}

export default PopExit;