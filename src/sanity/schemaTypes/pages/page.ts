import { defineField, defineType } from 'sanity';
import { backGroundColors, pageSections } from '../sharedTypes/globals';

export const page = defineType({
  name: 'page',
  title: 'Pages',
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
      type: 'string',
    }),
    defineField({
      name: 'slug',
      group: 'pagedesign',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'pageColor',
      title: 'Page Color',
      group: 'pagedesign',
      type: 'string',
      initialValue: 'bg-transparent',
      options: {
        list: backGroundColors,
        layout: 'radio',
      },
    }),
    defineField({
      name: 'modules',
      type: 'array',
      title: 'Page Sections',
      group: 'pagedesign',
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
