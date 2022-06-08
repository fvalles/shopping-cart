import styled from 'styled-components';

export const ButtonText = styled.span`
  color: ${({ theme }) => theme.Colors.white};
  font-family: ${({ theme }) => theme.Fonts.regular}, 'Avenir Next', 'Segoe UI',
    sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 14px;
`;
