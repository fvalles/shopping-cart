import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { getElementWidth, getJustifyContent } from '../../helpers';
import { Div } from '../../../../components/div';
import { Image } from '../../../../components/image';
import { Title, Subtitle } from '../../../../components/typography';
import { ProductProps } from './types';

/**
 * Styled Components
 */

const Figure = styled.figure`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
`;

/**
 * Product
 */

export const Product: FunctionComponent<ProductProps> = ({
  imageSource,
  name,
  productCode,
}) => (
  <Div
    display="flex"
    key={name}
    width={getElementWidth(0)}
    justifyContent={getJustifyContent(0)}>
    <Figure>
      <Image src={imageSource} alt={name} />
      <Div>
        <Title>{name}</Title>
        <Subtitle>{`Product code ${productCode}`}</Subtitle>
      </Div>
    </Figure>
  </Div>
);
