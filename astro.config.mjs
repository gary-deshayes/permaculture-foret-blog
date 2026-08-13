// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// ============================================================
// TEMPLATE BLOG MONÉTISÉ — remplace site par ton domaine réel
// ============================================================
export default defineConfig({
  // ⚠️ À MODIFIER à chaque clonage : https://TON_USER.github.io/TON-REPO
  site: 'https://permaculture-foret.fr',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
