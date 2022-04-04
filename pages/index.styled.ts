import { styled } from '@mui/material/styles';
import { Box, Container, CssBaseline } from '@mui/material';

const BoxStyled = styled(Box)(({ theme }) => ({
    width: '500px',
    height: '500px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 0px 32px -9px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
    flexBasis: '30%'
}));

const ContaierStyled = styled(Container)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const CssBaseLineStyled = styled(CssBaseline)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 0px 32px -9px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
  }));

export {
    BoxStyled,
    ContaierStyled,
    CssBaseLineStyled
}