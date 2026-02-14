import { defineField, defineType } from 'sanity'

export const workDocument = defineType({
  name: 'work',
  title: 'Work Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'E-commerce', value: 'ecommerce' },
          { title: 'Business Website', value: 'business' },
          { title: 'Custom Web App', value: 'custom' },
          { title: 'SaaS Platform', value: 'saas' },
          { title: 'Portfolio', value: 'portfolio' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(3).max(6),
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      media: 'image',
    },
    prepare(selection) {
      const { title, type } = selection
      return {
        ...selection,
        subtitle: type ? `Type: ${type}` : 'No type set',
      }
    },
  },
})
