import Grid from '@mui/material/Grid';
import GradientCircle from './GradientCircle';

export default function Info() {
  return (
    <div data-aos="fade-up" style={{ alignItems: 'center', height: '100vh', border: '1px solid white' }}>
      <Grid container style={{ alignItems: 'center' }}>
        <Grid item md={4} sm={12}>
          <GradientCircle size={300} />
          <img src="memoji.png" alt="" width={'300px'} style={{ position: 'relative' }} />
        </Grid>
        <Grid item md={8} sm={12}>
          <h1>안녕하세요</h1>
          <h1>2년 차 웹 개발자 임도현 입니다.</h1>
        </Grid>
      </Grid>
      <Grid container mt={5}>
        <Grid item md={12}>
          <h2>새로운 기술을 학습하고 그것을 달성하는 것에 성취감을 느껴 개발자가 되었습니다.</h2>
          <h2>주어진 업무에 대한 높은 이해와 빠른 문제 해결 능력을 가지고 있습니다.</h2>
          <h2>읽기 좋은 코드, 확장성이 높은 코드, 모듈화 된 코드를 짤 수 있도록 노력하고 있습니다.</h2>
        </Grid>
      </Grid>
    </div>
  );
}
