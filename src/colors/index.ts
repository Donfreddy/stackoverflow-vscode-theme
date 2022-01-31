//
//  STACK OVERFLOW -- COLORS
//
//  This Colors comes from Stacks, Stacks provides everything
//  you need to quickly design, build, and ship coherent experiences
//  across all of Stack Overflow.
//
//  Website: https://stackoverflow.design
//  GitHub: https://github.com/StackExchange/Stacks
//

import lightColors from './light.json';
import darkColors from './dark.json';

export default function getColors(theme: string) {
  switch (theme) {
    case 'light':
      return lightColors;
    case 'dark':
      return darkColors;
    default:
      throw new Error(`Theme ${theme} is not supported`);
  }
}
