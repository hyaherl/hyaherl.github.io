import * as React from 'react';
import styled from 'styled-components';

interface StyledProps {
  container?: boolean;
  item?: boolean;
  col?: number;
}

interface GridProps extends StyledProps {
  children?: any;
}

const StyledGrid = styled.div<StyledProps>`
  display: ${props => (props.container ? 'flex' : '')};
  flex-wrap: ${props => (props.container ? 'wrap' : '')};
  flex: ${props => (props.item && props.col ? getCol(props.col) : '')};
`;

const getCol = (col: number) => {
  const col_1 = 100 / 12;
  return '1 1 ' + col_1 * col + '%';
};

export default function Grid({ children, container, item, col }: GridProps) {
  return (
    <StyledGrid container={container} item={item} col={col}>
      {children}
    </StyledGrid>
  );
}
