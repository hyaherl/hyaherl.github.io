import * as React from 'react';
import styled from 'styled-components';

interface StyledProps {}

interface PageProps extends StyledProps {
  children?: any;
}

const StyledPage = styled.div<StyledProps>`
  padding: 3vh 15vw;
  color: white;
`;

export default function Page({ children }: PageProps) {
  return <StyledPage>{children}</StyledPage>;
}
