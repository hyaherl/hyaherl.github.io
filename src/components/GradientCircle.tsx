import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface GradientCircleProps {
  size?: number;
}

const StyledCircle = styled(Box)<GradientCircleProps>`
  margin: 0px auto;
  width: ${props => props.size + 'px' || '400px'};
  height: ${props => props.size + 'px' || '400px'};
  position: absolute;
  background: radial-gradient(#873cac 10%, #320f85 40%, #11071f 70%);
`;

export default function GradientCircle({ size }: GradientCircleProps) {
  return <StyledCircle size={size}></StyledCircle>;
}
