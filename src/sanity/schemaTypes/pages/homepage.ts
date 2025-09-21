import { defineField, defineType } from 'sanity';
import { backGroundColors, pageSections } from '../sharedTypes/globals';

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  groups: [
    { name: 'pagedesign', title: 'Page Design' },
    { name: 'metadata', title: 'Meta Data' },
  ],
  fields: [
    defineField({
      name: 'pageMeta',
      group: 'metadata',
      type: 'pageMeta',
    }),
    defineField({
      name: 'navigation',
      group: 'pagedesign',
      type: 'reference',
      description: 'You must add navigation (header) to your page!',
      to: { type: 'navigation' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      group: 'pagedesign',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'pageColor',
      group: 'pagedesign',
      title: 'Page Color',
      type: 'string',
      initialValue: 'bg-transparent',
      options: {
        list: backGroundColors,
        layout: 'radio',
      },
    }),
    defineField({
      name: 'modules',
      group: 'pagedesign',
      type: 'array',
      title: 'Page Sections',
      of: pageSections,
    }),
    defineField({
      name: 'footer',
      group: 'pagedesign',
      type: 'reference',
      description: 'You must add a footer to your page!',
      to: { type: 'footer' },
      validation: Rule => Rule.required(),
    }),
  ],
});
