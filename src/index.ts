import { writeFile, mkdir } from 'fs/promises';
import getTheme from './theme';
import { Params } from './types';

/**
 * Generate a theme file
 *
 * @param params - The parameters to generate the theme file
 */
async function generateTheme(params: Params): Promise<any> {
  const themePath = `./themes`;

  try {
    await mkdir(themePath, { recursive: true });
    await writeFile(`${themePath}/${params.theme}.json`, JSON.stringify(getTheme(params), null, 2));
  } catch (err) {
    process.exit(1);
  }
}

// Generate the theme files.
generateTheme({ theme: 'dark', name: 'Stackoverflow Dark' });
// generateTheme({ theme: 'light', name: 'Stackoverflow Light' });
