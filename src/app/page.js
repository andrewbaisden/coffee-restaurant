'use client';
import { styled, ThemeProvider } from 'styled-components';
import GlobalStyle from '../../src/app/components/GlobalStyles';
import MainMenu from './components/MainMenu';

const theme = {
  colors: {
    primary: 'rgb(15 23 42)',
  },
};

const MainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const CoverImage = styled.div`
  margin: 2rem auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: rgb(6 95 70);
  color: rgb(255 255 255);
  border-radius: 2rem;
  padding: 2rem;
`;

const CoverHeading = styled.h1`
  text-transform: uppercase;
`;

const CoverIntro = styled.p`
  font-size: 1.4rem;
  margin: 2rem 2rem;
`;

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainContainer>
          <MainMenu />
          <CoverImage>
            <CoverHeading>Summer time is here!</CoverHeading>
            <CoverIntro>
              Our summer menu has arrived. Freshen up your day with our creamy
              and delicious coffee range, iced teas and mouth watering snacks.
            </CoverIntro>
          </CoverImage>
        </MainContainer>
      </ThemeProvider>
    </>
  );
}
