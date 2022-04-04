import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

const PaperStyled = styled(Paper)`
    display: 'grid',
    gridRowGap: '20px',
    padding: '20px',
    margin: '10px 300px',
    box-shadow: '0px 0px 32px -9px rgba(0, 0, 0, 0.25)',
    border-radius: '20px',
`;

export {
    PaperStyled,
}