import { defineType, defineField } from 'sanity';

export const seoSettings = defineType({
  name: 'seoSettings',
  title: 'Global SEO Settings (Default)',
  type: 'document',
  fields: [
    defineField({
      name: 'defaultTitle',
      type: 'string',
      title: 'Default Title',
    }),
    defineField({
      name: 'defaultKeywords',
      type: 'text',
      title: 'Meta Keywords',
      description: 'Define keywords for search engines.',
    }),
    defineField({
      name: 'defaultDescription',
      type: 'text',
      title: 'Default Description',
    }),
    defineField({
      name: 'ogImage',
      type: 'image',
      title: 'Default Social Image',
      options: { hotspot: true },
    }),
  ],
});
