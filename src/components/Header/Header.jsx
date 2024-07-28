import { useState } from 'react';
import { Container } from '../../App.styled';
import "../../App.css";
import { Block, Button, Logo, Nav, StyledHeader, User, UserMail, UserName, UserSetContainer, UserTheme } from './Header.styled';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function Header({ showAddCardPopup }) {
    const { user } = useAuth();
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
                        <Button id='btnMainNew' onClick={showAddCardPopup}>
                            Создать новую задачу
                        </Button>
                        <User onClick={() => setIsUserSetOpen(!isUserSetOpen)}>
                            {user?.name}
                        </User>
                        {isUserSetOpen && (
                            <UserSetContainer id='user-set-target'>
                                <UserName>{user?.name}</UserName>
                                <UserMail>{user?.login}</UserMail>
                                <UserTheme>
                                    <p>Темная тема</p>
                                    <input
                                        type='checkbox'
                                        className='checkbox'
                                        name='checkbox'
                                    />
                                </UserTheme>
                                <button
                                    type='button'
                                    onClick={() => setIsUserSetOpen(false)}
                                >
                                    <Link to='/exit'>Выйти</Link>
                                    {/* <a href='#popExit'>Выйти</a> */}
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