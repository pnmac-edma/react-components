import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import { spacing } from '@edma/design-tokens';

export interface SpaceProps {
  inner?: boolean | 'default' | 'small' | 'medium' | 'large' | number | undefined;
  outer?: boolean | 'small' | 'medium' | 'large' | [number, number, number, number] | undefined;
  direction?: 'column' | 'row';
  style?: CSSProperties;
  className?: string;
  children: React.ReactNode;
}

const Space: React.FC<SpaceProps> = ({
  inner = 'default',
  outer,
  direction = 'row',
  children,
  style,
  className
}: SpaceProps) => {

  return (
    <StyledSpace
      inner={inner ? inner : undefined}
      outer={outer ? outer : undefined}
      direction={direction ? direction : 'row'}
      style={style ? style : undefined}
      className={className ? className : ''}
    >
      {React.Children.map(children, (child:React.ReactNode) => {
        // Map 'em & wrap 'em!
        return <div className='Space__child'>{child}</div>
      })}
    </StyledSpace>
  )
};

const StyledSpace = styled('div')<SpaceProps>`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: start;
  & > .Space__child {
    margin: ${props => props.inner && props.direction === 'row' ?
      typeof props.inner === 'number' ? `
        0
        ${props.inner / 2}px
        0
        ${props.inner / 2}px
      ` :
      props.inner === 'small' ||
      props.inner === true ||
      (props.inner === 'default' && !props.outer) ? `0 ${spacing[1]}` :
      props.inner === 'medium' ? `0 ${spacing[2]}` :
      props.inner === 'large' ? `0 ${spacing[3]}` : 0
    :
    props.inner && props.direction === 'column' ?
      typeof props.inner === 'number' ? `
        ${props.inner / 2}px
        0
        ${props.inner / 2}px
        0
      ` :
      props.inner === 'small' ||
      props.inner === true ||
      (props.inner === 'default' && !props.outer) ? `${spacing[1]} 0` :
      props.inner === 'medium' ? `${spacing[2]} 0` :
      props.inner === 'large' ? `${spacing[3]} 0` : 0
    : 0 };
  }
  & > .Space__child:first-child {
    margin-left: ${props => props.direction === 'row' ? 0 : undefined};
    margin-top: ${props => props.direction === 'column' ? 0 : undefined};
  }
  & > .Space__child:last-child {
    margin-right: ${props => props.direction === 'row' ? 0 : undefined};
    margin-bottom: ${props => props.direction === 'column' ? 0 : undefined};
  }
  margin: ${props => props.outer ?
    props.outer instanceof Array ? `
      ${props.outer[0]}px
      ${props.outer[1]}px
      ${props.outer[2] >= 0 ? props.outer[2] : props.outer[0]}px
      ${props.outer[3] >= 0 ? props.outer[3] : props.outer[1]}px
    ` :
    props.outer === 'small' || props.outer === true ? spacing[1] :
    props.outer === 'medium' ? spacing[2] :
    props.outer === 'large' ? spacing[3] : 0
  : 0 };
`;

export default Space;
