import { Link, List, ListItem, ThemeProvider, Typography } from '@mui/material';
import { NextPage } from 'next';

// @styles
import theme from 'src/styles/theme';
import {
  BoxStyled,
  ContaierStyled,
  CssBaseLineStyled
} from './index.styled'

const HomePage: NextPage = () => {
  const lenders = [
    { name: 'Bank of Azeroth', slug: 'bank-of-azeroth' },
    { name: 'Middle Earth Bank', slug: 'middle-earth-bank' },
    { name: 'Naboo Bank', slug: 'naboo-bank' },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseLineStyled />
        <ContaierStyled>
            <BoxStyled>
              <Typography variant="h5" component="h5" color="purple.50">
                Lender Banks
              </Typography>
              <List>
                {lenders.map((lender) => (
                  <ListItem key={lender.name}>
                    <Link data-testid={lender.slug} href={`/${lender.slug}`}>
                    <Typography variant="h5">
                      {lender.name}
                    </Typography>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </BoxStyled>
        </ContaierStyled>
      </ThemeProvider>
    </>
  );
};

export default HomePage;
