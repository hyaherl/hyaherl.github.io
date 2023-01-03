import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Info from '../components/Info';
import Main from '../components/Main';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <Box bgcolor={'#11071F'} height={'100vh'} color={'white'} style={{ height: '100%' }}>
      <Container>
        <Main />
        <Info />
      </Container>
    </Box>
  );
}
