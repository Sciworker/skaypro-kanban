import {useContext, useState} from 'react';
import { Container } from '../../App.styled';
import "../../App.css";
import { Block, Button, Logo, Nav, StyledHeader, User, UserMail, UserName, UserSetContainer, UserTheme } from './Header.styled';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {ThemeContext} from './DarkAndLightMode/DarkAndLightMode.jsx';

// eslint-disable-next-line react/prop-types
function Header({ showAddCardPopup }) {
    const { user } = useAuth();
	const [isUserSetOpen, setIsUserSetOpen] = useState(false);

    const [theme, setTheme] = useContext(ThemeContext);

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <StyledHeader>
            <Container>
                <Block>
                    <Logo>
                        <a href='' target='_self'>
                            <img
                                src={theme === 'dark' ? 'images/logo_dark.png' : 'images/logo.png'}
                                alt='logo' />
                        </a>
                    </Logo>
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
                                        checked={theme === 'dark'}
                                        onChange={changeTheme}
                                    />
                                </UserTheme>
                                <button
                                    type='button'
                                    onClick={() => setIsUserSetOpen(false)}
                                >
                                    <Link to='/exit'>Выйти</Link>
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