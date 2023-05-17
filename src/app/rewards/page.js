'use client';
import { styled, ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/GlobalStyles';
import MainMenu from '../components/MainMenu';

const theme = {
  colors: {
    primary: 'rgb(15 23 42)',
  },
};

const MainContainer = styled.div`
  margin: 2rem auto;
  max-width: 120rem;
  padding: 2rem;
  width: 100%;
`;

const PageTitle = styled.h1`
  color: #ffffff;
`;

const PageIntro = styled.p`
  color: #ffffff;
  margin-top: 2rem;
  font-size: 1.4rem;
`;

export default function Rewards() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainMenu />
        <MainContainer>
          <PageTitle>Rewards</PageTitle>
          <PageIntro>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec ligula id odio rhoncus luctus sed consequat sapien. Vestibulum
            sit amet dolor sed est ultrices ultrices nec vitae nunc. Morbi
            vestibulum ligula tempus risus sollicitudin iaculis. Maecenas id
            viverra ipsum, dictum iaculis massa. Maecenas imperdiet lacus
            mauris, vel fringilla purus bibendum eleifend. In varius, massa id
            dignissim mollis, massa sem sagittis velit, sit amet facilisis
            ligula massa a libero. Ut aliquam risus sit amet mauris auctor, ac
            dapibus urna ullamcorper. Curabitur scelerisque sollicitudin diam
            eget condimentum. Maecenas in placerat erat.
          </PageIntro>
        </MainContainer>
      </ThemeProvider>
    </>
  );
}
