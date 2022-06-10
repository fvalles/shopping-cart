import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Button } from './components/button';
import { Separator } from './components/separator';
import { Spacer } from './components/spacer';
import { H1 } from './components/typography';
import { Colors } from './core/theme';

/**
 * Styled Components
 */

const Main = styled.main`
  background-color: ${Colors.white};
  border-radius: 4px;
  display: flex;
  height: calc(100% - 64px);
  left: 50%;
  max-height: 648px;
  max-width: 1088px;
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 64px);
`;

const Section = styled.section`
  flex: 1;
  padding: 40px 32px 40px 56px;
`;

const Aside = styled.aside`
  background-color: ${Colors.summaryBackground};
  color: ${Colors.summaryText};
  display: flex;
  flex-flow: column wrap;
  padding: 40px 32px;
  width: 312px;
`;

/**
 * App
 */

const App: FunctionComponent = () => (
  <Main>
    <Section>
      <H1>Shopping cart</H1>
      <Spacer size={16} />
      <Separator />
    </Section>
    <Aside>
      <H1>Order Summary</H1>
      <Spacer size={16} />
      <Separator />
      <Spacer size={16} />
      <Button onClick={() => {}} title="Checkout" />
    </Aside>
  </Main>
);

export default App;
