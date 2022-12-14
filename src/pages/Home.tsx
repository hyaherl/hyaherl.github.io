import * as React from 'react';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Header from '../components/Header';
import Page from '../components/Page';

const navItems = ['Home', 'About', 'Contact'];

export default function Home() {
  return (
    <Container backgroundColor={'#11071F'}>
      <Header navItems={navItems} />
      <Page>
        <Grid container>
          <Grid item col={6}>
            1
          </Grid>
          <Grid item col={6}>
            2
          </Grid>
          <Grid item col={3}>
            2
          </Grid>
          <Grid item col={3}>
            2
          </Grid>
          <Grid item col={3}>
            2
          </Grid>
          <Grid item col={3}>
            2
          </Grid>
        </Grid>
      </Page>
    </Container>
  );
}
