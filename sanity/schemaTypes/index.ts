import { type SchemaTypeDefinition } from 'sanity'
import { workDocument } from './workDocument'
import { blogPost } from './blogPost'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [workDocument, blogPost],
}
