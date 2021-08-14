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
  if (theme === 'light') return lightColors;

  return darkColors;
}
