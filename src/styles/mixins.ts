export const mixins = {
  flex: ({ direction = 'row', align = 'stretch', justify = 'flex-start' }) => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,

  position: ({ position = 'relative', top, right, bottom, left }: position) => {
    const topValue = top ? `top: ${top};` : '';
    const rightValue = right ? `right: ${right};` : '';
    const leftValue = left ? `left: ${left};` : '';
    const bottomValue = bottom ? `bottom: ${bottom};` : '';

    return `
    position: ${position};
    ${topValue}
    ${rightValue}
    ${leftValue}
    ${bottomValue}
  `;
  },
};

type position = {
  position: 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static';
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};
