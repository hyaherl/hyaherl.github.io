import * as React from 'react';
import styled from 'styled-components';

interface StyledProps {
  backgroundColor?: string;
}

interface ContainerProps extends StyledProps {
  children?: any;
}

const StyledContainer = styled.div<StyledProps>`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.backgroundColor || '#FFFFFF'};
`;

export default function Container({ children, backgroundColor }: ContainerProps) {
  return <StyledContainer backgroundColor={backgroundColor}>{children}</StyledContainer>;
}
