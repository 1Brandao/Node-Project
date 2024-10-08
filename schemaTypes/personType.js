import {defineField, defineType} from 'sanity'

export const personType = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({
      name: 'ID',
      type: 'integer',
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'birthday',
      type: 'date',
    }),
    defineField({
      name: 'mail',
      type: 'string',
    }),
    defineField({
      name: 'profileImage',
      type: 'image',
    }),
    defineField({
      name: 'status',
      type: 'boolean',
    }),
    defineField({
      name: 'address',
      type: 'Address',
    }),
  ],
})