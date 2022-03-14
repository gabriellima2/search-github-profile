import styled from 'styled-components';

const ButtonContainer = styled.div`
    border: none;
    padding: 5px 5px;
    font-size: 2em;
    position: absolute;
    left: 40px;
    background: none;
    cursor: pointer;

    a {
        display: flex;
        color: ${({ theme }) => theme.complementary.primary};
    }
`;

export default ButtonContainer;
