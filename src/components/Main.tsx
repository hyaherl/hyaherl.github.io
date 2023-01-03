import Grid from '@mui/material/Grid';
import Toscroll from './ToScroll';

export default function Main() {
  return (
    <div>
      <Grid container style={{ alignItems: 'center', height: '100vh', fontSize: '3rem' }}>
        <Grid item md={12}>
          <h1>WEB DEVELOPER</h1>
          <h1>PORTFOLIO.</h1>
          <Toscroll></Toscroll>
        </Grid>
      </Grid>
    </div>
  );
}
