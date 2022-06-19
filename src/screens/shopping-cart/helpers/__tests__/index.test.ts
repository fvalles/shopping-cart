import { getElementWidth, getJustifyContent } from '..';

describe('getElementWidth helper function', () => {
  it('should return 45% when index param is 0', () => {
    const width = getElementWidth(0);
    expect(width).toBe('45%');
  });

  it('should return 15% when index param is 3', () => {
    const width = getElementWidth(3);
    expect(width).toBe('15%');
  });

  it('should return 20% when index param is 1 or 2', () => {
    const widthOne = getElementWidth(1);
    expect(widthOne).toBe('20%');

    const widthTwo = getElementWidth(2);
    expect(widthTwo).toBe('20%');
  });
});

describe('getJustifyContent helper function', () => {
  it('should return undefined when index param is 0', () => {
    const justifyContent = getJustifyContent(0);
    expect(justifyContent).toBeUndefined();
  });

  it('should return "center" when index param is different from 0', () => {
    const justifyContentOne = getJustifyContent(1);
    expect(justifyContentOne).toBe('center');

    const justifyContentTwo = getJustifyContent(2);
    expect(justifyContentTwo).toBe('center');
  });
});
