import React, { FunctionComponent } from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import { theme } from './theme';

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  children,
}) => <Provider theme={theme}>{children}</Provider>;
