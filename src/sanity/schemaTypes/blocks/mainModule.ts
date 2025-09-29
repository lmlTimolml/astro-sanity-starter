import { contentModule } from '../sharedTypes/contentModule';
import { contentBlock } from '../sharedTypes/contentBlock';
import { styleOptionsFields } from '../sharedTypes/styleOptions';

const blockTitle = 'Main Module';

export const mainModule = contentModule({
  name: 'mainModule',
  title: blockTitle,
  fields: [
    contentBlock(),
    ...styleOptionsFields([
      'moduletype',
      'blockID',
      'corners',
      'padding',
      'bgColor',
      'textColor',
      'border',
    ]),
  ],
});
