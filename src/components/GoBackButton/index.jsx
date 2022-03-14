import ButtonContainer from './styles';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function GoBackButton() {
    return (
        <ButtonContainer>
            <Link to='/'>
                { <BsFillArrowLeftCircleFill /> }
            </Link>
        </ButtonContainer> 
    );
};
