import styled from 'styled-components';

interface StyledProps {
  color?: string;
  backgroundColor?: string;
}

interface ButtonProps extends StyledProps {
  children?: any;
}

const StyledButton = styled.button<StyledProps>`
  color: ${props => props.color || '#000000'};
  background-color: ${props => props.backgroundColor || '#FFFFFF'};
  cursor: pointer;
  border: 0;
`;

export default function Button({ children, color, backgroundColor }: ButtonProps) {
  return (
    <StyledButton color={color} backgroundColor={backgroundColor}>
      {children}
    </StyledButton>
  );
}
