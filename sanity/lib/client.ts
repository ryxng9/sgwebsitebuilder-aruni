import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: 'm2vcpr15',
  dataset: 'production',
  apiVersion: '2026-02-13',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
