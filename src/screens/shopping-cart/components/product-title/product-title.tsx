import React, { FunctionComponent } from 'react';
import { Div } from '@components/div';
import { H3 } from '@components/typography';
import { getElementWidth, getJustifyContent } from '../../helpers';

/**
 * Types
 */

interface ProductTitleProps {
  /** Index used to define product title wrapper width and text position */
  index: number;
  /** Text to be displayed */
  title: string;
  /** When this prop is set to true, the title is transformed to uppercase */
  toUpperCase?: boolean;
}

/**
 * ProductTitle
 */

export const ProductTitle: FunctionComponent<ProductTitleProps> = ({
  index,
  title,
  toUpperCase,
}) => (
  <Div
    alignItems="center"
    display="flex"
    width={getElementWidth(index)}
    justifyContent={getJustifyContent(index)}>
    <H3>{toUpperCase ? title.toUpperCase() : title}</H3>
  </Div>
);
