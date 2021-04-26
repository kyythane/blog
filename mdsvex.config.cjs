const autolinkHeadings = require('rehype-autolink-headings');
const containers = require('remark-containers');
const footnotes = require('remark-footnotes');
const gemoji = require('remark-gemoji');
const h = require('hastscript');
const katex = require('rehype-katex');
const math = require('remark-math');
const { rehypeAccessibleEmojis } = require('rehype-accessible-emojis');
const slug = require('rehype-slug');
const tableOfContents = require('@atomictech/rehype-toc');
const addClasses = require('@noxify/gridsome-remark-classes');

function linkContent(node) {
  return h('span.fas.fa-link.article-section-link', { ariaHidden: true });
}

module.exports = {
  extensions: ['.svelte.md'],
  remarkPlugins: [
    containers,
    gemoji,
    math,
    footnotes,
    [addClasses, { heading: 'article-section-heading' }],
  ],
  rehypePlugins: [
    slug,
    katex,
    rehypeAccessibleEmojis,
    [tableOfContents, { placeholder: '{{TOC}}' }],
    [autolinkHeadings, { behavior: 'append', content: linkContent }],
  ],
  layout: {
    _: './src/lib/layouts/Article.svelte',
  },
};
