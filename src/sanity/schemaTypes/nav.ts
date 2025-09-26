// schemas/documents/navigation.ts
import { defineType, defineField } from 'sanity';
import { backGroundColors } from './sharedTypes/globals';

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'navColor',
      title: 'Navbar Color',
      type: 'string',
      initialValue: 'bg-transparent',
      options: {
        list: backGroundColors,
        layout: 'radio',
      },
    }),
    defineField({
      name: 'desktopLogo',
      title: 'Desktop Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mobileLogo',
      title: 'Mobile Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'menuItems',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          name: 'menuItem',
          title: 'Menu Item',
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Label' }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'object',
              fields: [
                defineField({
                  name: 'external',
                  title: 'External URL',
                  type: 'url',
                }),
                defineField({
                  name: 'internal',
                  title: 'Internal Reference',
                  type: 'reference',
                  to: [{ type: 'page' }, { type: 'case' }, { type: 'article' }], // Change 'page' to match your internal document types
                }),
              ],
            }),
            defineField({
              name: 'section',
              title: 'Anchor / Section ID',
              type: 'string',
              description:
                'Optional anchor to scroll to (e.g. footer, contact, services)',
            }),
            defineField({
              name: 'newTab',
              title: 'Open in New Tab',
              type: 'boolean',
              initialValue: false,
            }),
          ],
        },
      ],
    }),
  ],
});
