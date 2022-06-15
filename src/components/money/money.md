Basic money component with default currency="€":

```jsx
<Money amount={200} typographyType={TypographyType.LIST_ITEM_BIG} />
```

Money component with custom currency property set:

```jsx
<Money
  amount={200}
  currency="$"
  typographyType={TypographyType.LIST_ITEM_SMALL}
/>
```
