import {defineField, defineType} from 'sanity'

export const artistType = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'nascimento',
      type: 'date',
    }),
    defineField({
      name: 'foto',
      type: 'image',
    }),
  ],
})