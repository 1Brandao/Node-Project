import {defineField, defineType} from 'sanity'

export const addressType = defineType({
  name: 'address',
  title: 'Address',
  type: 'document',
  fields: [
    defineField({
      name: 'street',
      type: 'string',
    }),
    defineField({
      name: 'number',
      type: 'string',
    }),
    defineField({
      name: 'neighbourhood',
      type: 'string',
    }),
    defineField({
      name: 'city',
      type: 'string',
    }),
    defineField({
      name: 'state',
      type: 'string',
    }),
    defineField({
      name: 'country',
      type: 'string',
    }),
    defineField({
      name: 'cep',
      type: 'string',
    }),
  ],
})