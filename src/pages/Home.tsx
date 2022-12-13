import * as React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';

const navItems = ['Home', 'About', 'Contact'];

export default function Home() {
  return (
    <Container backgroundColor={'#11071F'}>
      <Header navItems={navItems} />
    </Container>
  );
}
