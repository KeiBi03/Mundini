import { defineCollection, z } from 'astro:content';
// 1. Importa el nuevo cargador de archivos de Astro
import { glob } from 'astro/loaders';

const products = defineCollection({
  // 2. Reemplaza 'type: "content"' por el loader glob
  // Ajusta el pattern si tus archivos son .json en lugar de .md/.mdx
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './src/content/products',
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    gallery: z.array(z.string()).optional(),
    category: z.string(),
    price: z.number(),
    oldPrice: z.number().optional(),
    stock: z.number(),
    featured: z.boolean().optional(),
  }),
});

// 3. Exportas como siempre
export const collections = { products };
