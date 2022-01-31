import getColors from './colors';
import { Params, ThemeOpts } from './types';

export default function getTheme(params: Params) {
  // Usage: themes({ light: "lightblue", dark: "darkblue" })
  // themes({ light: "", dark: "" })
  const themes = (options: ThemeOpts): string => options[params.theme as keyof ThemeOpts];

  // Usage: color.syntax.color
  const color = getColors(params.theme);

  // Usage: scale.blue[6]
  const scale = color.scale;

  return {
    name: params.name,
    type: params.theme,
    colors: {
      // Editor
      'editor.foreground': color.syntax.color,
      'editor.background': scale.black[1],

      // Status Bar
      'statusBar.foreground': scale.black[8],
      'statusBar.background': scale.black[0],
      'statusBar.border': scale.black[0],
      'statusBar.noFolderBackground': scale.black[0],
      'statusBar.debuggingForeground': themes({ light: scale.white, dark: color.syntax.bg }),
      'statusBar.debuggingBackground': themes({ light: scale.blue[4], dark: scale.blue[5] }),

      // Activity Bar
      'activityBar.foreground': color.syntax.color,
      'activityBar.background': scale.black[1],
      'activityBarBadge.background': scale.orange[4],
      'activityBarBadge.foreground': themes({ light: scale.white, dark: scale.black[1] }),
      // 'activityBar.activeBorder': scale.orange[4],

      // Side Bar
     // 'sideBar.background': scale.black[0],
      // 'sideBar.foreground': color.syntax.color,
      // 'sideBar.border': scale.black[0],
      // 'sideBarTitle.foreground': color.syntax.color,
      // 'sideBarSectionHeader.background': scale.black[1],
      // 'sideBarSectionHeader.foreground': color.syntax.color,
      // 'sideBarSectionHeader.border': scale.black[0],
      // 'sideBar.dropBackground': scale.black[0],
      // 'sideBar.dropBackgroundActive': scale.black[0],
      // 'sideBar.dropBackgroundFocus': scale.black[0],
      // 'sideBar.dropBackgroundBorder': scale.black[0],

    },
    // semanticHighlighting: true,
    tokenColors: [
      {
        name: 'Comment',
        scope: ['comment', 'punctuation.definition.comment'],
        settings: {
          foreground: color.syntax.comment,
          fontStyle: 'italic',
        },
      },

      // --------------------- Ready Check -----------------------

      {
        name: 'Variables',
        scope: ['variable', 'string constant.other.placeholder'],
        settings: {
          foreground: scale.blue[5],
        },
      },
      {
        name: 'Colors',
        scope: ['constant.other.color'],
        settings: {
          foreground: '#ffffff',
        },
      },
      {
        name: 'Invalid',
        scope: ['invalid', 'invalid.illegal'],
        settings: {
          foreground: color.syntax.deletion,
        },
      },
      {
        name: 'Keyword, Storage',
        scope: ['keyword', 'storage.type', 'storage.modifier'],
        settings: {
          foreground: color.syntax.symbol,
        },
      },
      {
        name: 'Operator, Misc',
        scope: [
          'keyword.control',
          'constant.other.color',
          'punctuation',
          'meta.tag',
          'punctuation.definition.tag',
          'punctuation.separator.inheritance.php',
          'punctuation.definition.tag.html',
          'punctuation.definition.tag.begin.html',
          'punctuation.definition.tag.end.html',
          'punctuation.section.embedded',
          'keyword.other.template',
          'keyword.other.substitution',
        ],
        settings: {
          fontStyle: 'italic',
          foreground: color.syntax.punctuation,
        },
      },
      {
        name: 'Tag',
        scope: ['entity.name.tag', 'meta.tag.sgml', 'markup.deleted.git_gutter'],
        settings: {
          foreground: '#f07178',
        },
      },
      {
        name: 'Function, Special Method',
        scope: [
          'entity.name.function',
          'meta.function-call',
          'variable.function',
          'support.function',
          'keyword.other.special-method',
        ],
        settings: {
          foreground: scale.orange[4],
        },
      },
      {
        name: 'Block Level Variables',
        scope: ['meta.block variable.other'],
        settings: {
          foreground: scale.blue[5],
        },
      },
      {
        name: 'Other Variable, String Link',
        scope: ['support.other.variable', 'string.other.link'],
        settings: {
          foreground: scale.blue[5],
        },
      },
      {
        name: 'Number, Constant, Function Argument, Tag Attribute, Embedded',
        scope: [
          'constant.numeric',
          'constant.language',
          'support.constant',
          'constant.character',
          'constant.escape',
          'variable.parameter',
          'keyword.other.unit',
          'keyword.other',
        ],
        settings: {
          foreground: scale.blue[5],
        },
      },
      {
        name: 'String, Symbols, Inherited Class, Markup Heading',
        scope: [
          'string',
          'constant.other.symbol',
          'constant.other.key',
          'entity.other.inherited-class',
          'markup.heading',
          'markup.inserted.git_gutter',
          'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
        ],
        settings: {
          foreground: scale.green[5],
        },
      },
      {
        name: 'Class, Support',
        scope: [
          'entity.name',
          'support.type',
          'support.class',
          'support.other.namespace.use.php',
          'meta.use.php',
          'support.other.namespace.php',
          'markup.changed.git_gutter',
          'support.type.sys-types',
        ],
        settings: {
          foreground: color.badges.goldDarker,
        },
      },
      {
        name: 'Entity Types',
        scope: ['support.type'],
        settings: {
          foreground: color.syntax.symbol,
        },
      },
      {
        name: 'CSS Class and Support',
        scope: [
          'source.css support.type.property-name',
          'source.sass support.type.property-name',
          'source.scss support.type.property-name',
          'source.less support.type.property-name',
          'source.stylus support.type.property-name',
          'source.postcss support.type.property-name',
        ],
        settings: {
          foreground: color.syntax.symbol,
        },
      },
      {
        name: 'Sub-methods',
        scope: ['entity.name.module.js', 'variable.import.parameter.js', 'variable.other.class.js'],
        settings: {
          foreground: color.syntax.deletion,
        },
      },
      {
        name: 'Language methods',
        scope: ['variable.language'],
        settings: {
          //fontStyle: 'italic',
          foreground: '#FF5370',
        },
      },
      {
        name: 'entity.name.method.js',
        scope: ['entity.name.method.js'],
        settings: {
          // fontStyle: 'italic',
          foreground: scale.blue[5],
        },
      },
      {
        name: 'meta.method.js',
        scope: ['meta.class-method.js entity.name.function.js', 'variable.function.constructor'],
        settings: {
          foreground: scale.blue[5],
        },
      },
      {
        name: 'Attributes',
        scope: ['entity.other.attribute-name'],
        settings: {
          foreground: color.syntax.attribute,
        },
      },
      {
        name: 'HTML Attributes',
        scope: [
          'text.html.basic entity.other.attribute-name.html',
          'text.html.basic entity.other.attribute-name',
        ],
        settings: {
          // fontStyle: 'italic',
          foreground: color.syntax.attribute,
        },
      },
      {
        name: 'CSS Classes',
        scope: ['entity.other.attribute-name.class'],
        settings: {
          foreground: color.syntax.attribute,
        },
      },
      {
        name: "CSS ID's",
        scope: ['source.sass keyword.control'],
        settings: {
          foreground: '#82AAFF',
        },
      },
      {
        name: 'Inserted',
        scope: ['markup.inserted'],
        settings: {
          foreground: '#C3E88D',
        },
      },
      {
        name: 'Deleted',
        scope: ['markup.deleted'],
        settings: {
          foreground: color.syntax.deletion,
        },
      },
      {
        name: 'Changed',
        scope: ['markup.changed'],
        settings: {
          foreground: '#C792EA',
        },
      },
      {
        name: 'Regular Expressions',
        scope: ['string.regexp'],
        settings: {
          foreground: '#89DDFF',
        },
      },
      {
        name: 'Escape Characters',
        scope: ['constant.character.escape'],
        settings: {
          foreground: '#89DDFF',
        },
      },
      {
        name: 'URL',
        scope: ['*url*', '*link*', '*uri*'],
        settings: {
          fontStyle: 'underline',
        },
      },
      {
        name: 'Decorators',
        scope: [
          'tag.decorator.js entity.name.tag.js',
          'tag.decorator.js punctuation.definition.tag.js',
        ],
        settings: {
          // fontStyle: 'italic',
          foreground: '#82AAFF',
        },
      },
      {
        name: 'ES7 Bind Operator',
        scope: ['source.js constant.other.object.key.js string.unquoted.label.js'],
        settings: {
          fontStyle: 'italic',
          foreground: '#FF5370',
        },
      },
      {
        name: 'JSON Key - Level 0',
        scope: ['source.json meta.structure.dictionary.json support.type.property-name.json'],
        settings: {
          foreground: '#C792EA',
        },
      },
      {
        name: 'JSON Key - Level 1',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: '#FFCB6B',
        },
      },
      {
        name: 'JSON Key - Level 2',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: '#F78C6C',
        },
      },
      {
        name: 'JSON Key - Level 3',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: '#FF5370',
        },
      },
      {
        name: 'JSON Key - Level 4',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: '#C17E70',
        },
      },
      {
        name: 'JSON Key - Level 5',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: '#82AAFF',
        },
      },
      {
        name: 'JSON Key - Level 6',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: '#f07178',
        },
      },
      {
        name: 'JSON Key - Level 7',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: '#C792EA',
        },
      },
      {
        name: 'JSON Key - Level 8',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: '#C3E88D',
        },
      },
      {
        name: 'Markdown - Plain',
        scope: ['text.html.markdown', 'punctuation.definition.list_item.markdown'],
        settings: {
          foreground: '#EEFFFF',
        },
      },
      {
        name: 'Markdown - Markup Raw Inline',
        scope: ['text.html.markdown markup.inline.raw.markdown'],
        settings: {
          foreground: '#C792EA',
        },
      },
      {
        name: 'Markdown - Markup Raw Inline Punctuation',
        scope: [
          'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown',
        ],
        settings: {
          foreground: '#65737E',
        },
      },
      {
        name: 'Markdown - Heading',
        scope: [
          'markdown.heading',
          'markup.heading | markup.heading entity.name',
          'markup.heading.markdown punctuation.definition.heading.markdown',
        ],
        settings: {
          foreground: '#C3E88D',
        },
      },
      {
        name: 'Markup - Italic',
        scope: ['markup.italic'],
        settings: {
          fontStyle: 'italic',
          foreground: '#f07178',
        },
      },
      {
        name: 'Markup - Bold',
        scope: ['markup.bold', 'markup.bold string'],
        settings: {
          fontStyle: 'bold',
          foreground: '#f07178',
        },
      },
      {
        name: 'Markup - Bold-Italic',
        scope: [
          'markup.bold markup.italic',
          'markup.italic markup.bold',
          'markup.quote markup.bold',
          'markup.bold markup.italic string',
          'markup.italic markup.bold string',
          'markup.quote markup.bold string',
        ],
        settings: {
          fontStyle: 'bold',
          foreground: '#f07178',
        },
      },
      {
        name: 'Markup - Underline',
        scope: ['markup.underline'],
        settings: {
          fontStyle: 'underline',
          foreground: '#F78C6C',
        },
      },
      {
        name: 'Markdown - Blockquote',
        scope: ['markup.quote punctuation.definition.blockquote.markdown'],
        settings: {
          foreground: '#65737E',
        },
      },
      {
        name: 'Markup - Quote',
        scope: ['markup.quote'],
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        name: 'Markdown - Link',
        scope: ['string.other.link.title.markdown'],
        settings: {
          foreground: '#82AAFF',
        },
      },
      {
        name: 'Markdown - Link Description',
        scope: ['string.other.link.description.title.markdown'],
        settings: {
          foreground: '#C792EA',
        },
      },
      {
        name: 'Markdown - Link Anchor',
        scope: ['constant.other.reference.link.markdown'],
        settings: {
          foreground: '#FFCB6B',
        },
      },
      {
        name: 'Markup - Raw Block',
        scope: ['markup.raw.block'],
        settings: {
          foreground: '#C792EA',
        },
      },
      {
        name: 'Markdown - Raw Block Fenced',
        scope: ['markup.raw.block.fenced.markdown'],
        settings: {
          foreground: '#00000050',
        },
      },
      {
        name: 'Markdown - Fenced Bode Block',
        scope: ['punctuation.definition.fenced.markdown'],
        settings: {
          foreground: '#00000050',
        },
      },
      {
        name: 'Markdown - Fenced Bode Block Variable',
        scope: [
          'markup.raw.block.fenced.markdown',
          'variable.language.fenced.markdown',
          'punctuation.section.class.end',
        ],
        settings: {
          foreground: '#EEFFFF',
        },
      },
      {
        name: 'Markdown - Fenced Language',
        scope: ['variable.language.fenced.markdown'],
        settings: {
          foreground: '#65737E',
        },
      },
      {
        name: 'Markdown - Separator',
        scope: ['meta.separator'],
        settings: {
          fontStyle: 'bold',
          foreground: '#65737E',
        },
      },
      {
        name: 'Markup - Table',
        scope: ['markup.table'],
        settings: {
          foreground: '#EEFFFF',
        },
      },
    ],
  };
}
