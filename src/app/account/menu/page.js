'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useQuery } from '@apollo/client';
import { GET_MENU } from '@/app/queries/clientQueries';
import withApollo from '../../utils/withApollo';
import { styled, ThemeProvider } from 'styled-components';
import GlobalStyle from '../../components/GlobalStyles';
import MainMenu from '../../components/MainMenu';
import Image from 'next/image';

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

const LoginStatus = styled.p`
  color: #ffffff;
`;

const SignInOutButton = styled.button`
  color: #ffffff;
  border: none;
  padding: 1rem;
  text-transform: uppercase;
  border-radius: 1rem;
  background: rgb(2 44 34);
  cursor: pointer;
  margin: 2rem 0 2rem 0;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const Content = styled.p`
  color: #ffffff;
  font-size: 1.4rem;
`;

const NutritionTable = styled.table`
  border: 0.1rem solid black;
  background: rgb(6 95 70);
  color: #ffffff;
`;

const NutritionTableTr = styled.tr``;

const NutritionTableTd = styled.td`
  border: 0.1rem solid black;
  background: rgb(6 95 70);
  padding: 1rem;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 2rem 0 2rem 0;
  border: 0.1rem solid black;
`;

const ItemDescription = styled.div`
  margin-left: 1rem;
`;

const Menu = () => {
  const { loading, error, data } = useQuery(GET_MENU);
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  if (loading) return <Content>Loading...</Content>;
  if (error) return <Content>Something went wrong</Content>;

  if (status === 'loading') {
    return <Content>Hang on there...</Content>;
  }

  if (status === 'authenticated') {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MainMenu />
          <MainContainer>
            <PageTitle>Menu</PageTitle>
            <LoginStatus>Signed in as {userEmail}</LoginStatus>
            <SignInOutButton onClick={() => signOut()}>
              Sign out
            </SignInOutButton>
            {!loading && !error && (
              <ContentContainer>
                {data.menu.map((items) => (
                  <ContentContainer key={items.id}>
                    <ItemContainer>
                      <Image
                        src={items.img}
                        alt={items.name}
                        width={200}
                        height={200}
                      />
                      <ItemDescription>
                        <Content>{items.name}</Content>
                        <Content>{items.foodType}</Content>
                        <Content>{items.description}</Content>
                      </ItemDescription>
                    </ItemContainer>
                    <ContentContainer>
                      <ContentContainer>
                        {items.nutrition.map((stats) => (
                          <NutritionTable>
                            <NutritionTableTr>
                              <NutritionTableTd>
                                Energy: {stats.energy}
                              </NutritionTableTd>
                            </NutritionTableTr>
                            <NutritionTableTr>
                              <NutritionTableTd>
                                Fat: {stats.fat}
                              </NutritionTableTd>
                            </NutritionTableTr>
                            <NutritionTableTr>
                              <NutritionTableTd>
                                Saturated Fat: {stats.saturatedFat}
                              </NutritionTableTd>
                            </NutritionTableTr>
                            <NutritionTableTr>
                              <NutritionTableTd>
                                Carbohydrates: {stats.carbohydrates}
                              </NutritionTableTd>
                            </NutritionTableTr>
                            <NutritionTableTr>
                              <NutritionTableTd>
                                Sugar: {stats.sugar}
                              </NutritionTableTd>
                            </NutritionTableTr>
                            <NutritionTableTr>
                              <NutritionTableTd>
                                Fibre: {stats.fibre}
                              </NutritionTableTd>
                            </NutritionTableTr>
                            <NutritionTableTr>
                              <NutritionTableTd>
                                Protien: {stats.protien}
                              </NutritionTableTd>
                            </NutritionTableTr>
                            <NutritionTableTr>
                              <NutritionTableTd>
                                Salt: {stats.salt}
                              </NutritionTableTd>
                            </NutritionTableTr>
                          </NutritionTable>
                        ))}
                      </ContentContainer>
                    </ContentContainer>
                  </ContentContainer>
                ))}
              </ContentContainer>
            )}
          </MainContainer>
        </ThemeProvider>
      </>
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainMenu />
        <MainContainer>
          <PageTitle>Menu</PageTitle>
          <SignInOutButton onClick={() => signIn('')}>Sign in</SignInOutButton>
          <LoginStatus>Not signed in. Sign in to view the menu.</LoginStatus>
        </MainContainer>
      </ThemeProvider>
    </>
  );
};

export default withApollo(Menu);
