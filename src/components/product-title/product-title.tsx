import React, { FunctionComponent } from 'react';
import { getElementWidth, getJustifyContent } from '../../helpers';
import { Div } from '../div';
import { H3 } from '../typography';

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
    display="flex"
    key={title}
    width={getElementWidth(index)}
    justifyContent={getJustifyContent(index)}>
    <H3>{toUpperCase ? title.toUpperCase() : title}</H3>
  </Div>
);
