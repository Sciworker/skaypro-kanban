import { useState } from 'react';
import { Container } from '../../App.styled';
import "../../App.css";
import { Block, Button, Logo, Nav, StyledHeader, User, UserMail, UserName, UserSetContainer, UserTheme } from './Header.styled';

function Header({ onCardAdd }) {
	const [isUserSetOpen, setIsUserSetOpen] = useState(false);

    return (
        <StyledHeader>
            <Container>
				<Block>
					<Logo>
						<a href='' target='_self'>
							<img src='images/logo.png' alt='logo' />
						</a>
					</Logo>
                    {/* <div className='header__logo _show _light'>
                        <a href='' target='_self'>
                            <img src='images/logo.png' alt='logo' />
                        </a>
                    </div> */}
                    {/* <div className='header__logo _dark'>
                        <a href='' target='_self'>
                            <img src='images/logo_dark.png' alt='logo' />
                        </a>
                    </div> */}
                    <Nav>
                        <Button
                            id='btnMainNew'
                            onClick={onCardAdd}
                        >
                            Создать новую задачу
                        </Button>
                        <User
                            href='#user-set-target'
                            onClick={() => setIsUserSetOpen(!isUserSetOpen)}
                        >
                            Ivan Ivanov
                        </User>
                        {isUserSetOpen && (
                            <UserSetContainer
                                id='user-set-target'
                            >
                                <UserName>
                                    Ivan Ivanov
                                </UserName>
                                <UserMail>
                                    ivan.ivanov@gmail.com
                                </UserMail>
                                <UserTheme>
                                    <p>Темная тема</p>
                                    <input
                                        type='checkbox'
                                        className='checkbox'
                                        name='checkbox'
                                    />
                                </UserTheme>
                                <button type='button'>
                                    <a href='#popExit'>Выйти</a>
                                </button>
                            </UserSetContainer>
                        )}
                    </Nav>
                </Block>
            </Container>
        </StyledHeader>
    );
}

export default Header