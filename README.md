# Stack Overflow's VS Code themes

## Installation

_Either_

1. click the extensions button (lowest square icon in the editor), and type in Stackoverflow Theme.
2. Select the one by Donfreddy and click on the "Install" button.

_or_

1. Go to [vscode Extensions Marketplace](https://marketplace.visualstudio.com/items?itemName=Donfreddy.stackoverflow-vscode-theme).
2. Click on the "Install" button.
3. Then [select a theme](https://code.visualstudio.com/docs/getstarted/themes#_selecting-the-color-theme). Currently the following themes are available:
   - `Stackoverflow Light`
   - `Stackoverflow Dark`

```javascript
ext install Stackoverflow Theme
```

## Publish (internal)

> Note: Publishing a new version of this theme is only meant for maintainers.

**Prerequisite**: Please follow this [guide](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) to install and login to `vsce`. Ask an existing maintainer how to get the "Personal Access Token".

1. Merge any PR that is ready to be published into `master`.
2. Run `yarn start:dev` or `npm run start:dev` to start development.
3. Run `yarn build` or `npm run build` to generate the themes with the new changes.
4. Update [CHANGELOG.md](https://github.com/Donfreddy/stackoverflow-vscode-theme/blob/main/CHANGELOG.md) + commit the changes.
5. Run `vsce publish [version]`. Follow the [SemVer](https://semver.org) convention and replace `[version]` with one of the following options:
   - `patch` for bug fixes
   - `minor` for improvements
   - `major` for breaking or bigger changes
6. Push the commits and make a [new release](https://github.com/Donfreddy/stackoverflow-vscode-theme/releases/new).
