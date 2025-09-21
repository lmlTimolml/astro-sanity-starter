// ./src/sanity/schemaTypes/index.ts
import type { SchemaTypeDefinition } from 'sanity';
import { page } from './pages/page';
import { homepage } from './pages/homepage';
/* import { blockContentType } from './shared/blockContent';
import { categoryType } from './ui/category';
import { twoColTxtImg } from './blocks/twoColTxtImg';
import { mediaBlock } from './blocks/mediaBlock';
import { accordion } from './blocks/accordion';
import { button } from './ui/button';
import { services } from './blocks/services';
import { service } from './ui/service';
import { socialLink } from './ui/soscialLink';
import { contactInfo } from './blocks/contactInfo';
import { footer } from './footer';
import { navigation } from './nav';
import { casePage } from './pages/case';
import { caseCard } from './blocks/caseCard';
import { casesBlock } from './blocks/casesBlock';
import { employee } from './ui/employee';
import { employeeBlock } from './blocks/employeeBlock';
import { article } from './pages/article';
import { client } from './ui/client';
import { clientsBlock } from './blocks/clientsBlock';
import { mainModule } from './blocks/mainModule';
import { highLight } from './ui/highlight';
import { highLightsBlock } from './blocks/highlightsBlock';
import { carousel } from './blocks/carousel';
import { pageMeta } from './shared/pageMeta';
import { seoSettings } from './shared/seoSettings'; */

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepage,
    page,
    /* casePage,
    pageMeta,
    seoSettings,
    mainModule,
    caseCard,
    casesBlock,
    carousel,
    client,
    clientsBlock,
    highLight,
    highLightsBlock,
    article,
    blockContentType,
    employee,
    employeeBlock,
    categoryType,
    twoColTxtImg,
    accordion,
    mediaBlock,
    services,
    service,
    button,
    contactInfo,
    socialLink,
    navigation,
    footer, */
  ],
};
