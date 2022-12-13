import styled from 'styled-components';
import Button from './Button';

interface propTypes {
  navItems: string[];
}

const StyledHeader = styled.div`
  margin: 0;
  height: 60px;
  background-color: #1a0b2e;
  display: flex;
  justify-content: space-evenly;
`;

export default function Header({ navItems }: propTypes) {
  return (
    <StyledHeader>
      {navItems.map(item => (
        <Button key={item} color={'white'} backgroundColor={'transparent'}>
          {item}
        </Button>
      ))}
    </StyledHeader>
  );
}
