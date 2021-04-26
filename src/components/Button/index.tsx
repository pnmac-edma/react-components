import React from 'react';
import styled from 'styled-components';
import { color } from '@edma/design-tokens';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  primary?: boolean;
  variant?: 'default' | 'link';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  label: any;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  primary = false,
  variant = 'default',
  size = 'medium',
  fullWidth = false,
  className,
  disabled = false,
  onClick,
  ariaLabel,
  label
}: ButtonProps) => {

  return (
    <StyledButton
      primary={primary ? primary : false}
      variant={variant ? variant : 'default'}
      type={type ? type : undefined}
      aria-label={ariaLabel ? ariaLabel : label}
      size={size ? size : 'medium'}
      className={className ? className : undefined}
      disabled={disabled ? disabled : undefined}
      onClick={onClick ? onClick : undefined}
      fullWidth={fullWidth ? fullWidth : undefined}
      label={label}
    >
      <span>{label}</span>
    </StyledButton>
  )
};

const StyledButton = styled('button')<ButtonProps>`
  align-self: flex-start;
  border-radius: 60px;
  border: 0;
  width: ${(props) => props.fullWidth ? '100%' : 'auto'};
  cursor: pointer;
  overflow: hidden;

  & span {
    position: relative;
    z-index: 2;
  }

  ${props => {
    switch (props.variant) {
      case 'default':
        return `
          position: relative;
          display: inline-block;
          transition: all .2s ease-in-out;
        `;
      case 'link':
        return `
          display: contents;
          color: ${color.b500};
          background-color: transparent;

          &:hover {
            text-decoration: underline;
          }
        `;
    }
  }};
  ${(props) => {
    switch (props.primary) {
      case true:
        return `
          color: ${color.white};
          background-color: ${color.b500};

          &:hover {
            background-color: ${color.b700};
          }
        `;
      case false:
        return `
          box-shadow:inset 0px 0px 0px 2px ${color.b500}};
          color: ${color.b500};
          background-color: transparent;

          &:hover {
            color: ${color.b700};
            box-shadow:inset 0px 0px 0px 2px ${color.b700}};
          }
        `;
    };
  }};
  ${(props) => {
    switch (props.size) {
      case 'small':
        return `
          padding: 8px 16px;
          font-size: 14px;
        `;
      case 'medium':
        return `
          padding: 12px 24px;
          font-size: 16px;
        `;
      case 'large':
        return `
          padding: 16px 32px;
          font-size: 18px;
        `;
    }
  }};
  ${(props) => {
    switch (props.disabled) {
      case true:
        return `
          color: ${color.g400};
          background-color: ${color.g100};
          box-shadow: none;
          cursor: not-allowed;

          &:hover {
            color: ${color.g400};
            background-color: ${color.g100};
            box-shadow: none;
          }
        `;
    }
  }}
`;

export default Button;
