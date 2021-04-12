const containers = require('remark-containers');
const footnotes = require('remark-footnotes');
const tableOfContents = require('@atomictech/rehype-toc');
const autolinkHeadings = require('rehype-autolink-headings');
const slug = require('rehype-slug');
var h = require('hastscript');

function linkContent(node) {
    return h('span.icon-link', { ariaHidden: true });
}

module.exports = {
  extensions: ['.svelte.md'],
  remarkPlugins: [
      containers,
      footnotes,
  ],
  rehypePlugins: [
      slug,
      [tableOfContents, { placeholder: '{{TOC}}' }],
      [autolinkHeadings, { behavior: 'append', content: linkContent }],
  ],
  layout: {
      _: './src/lib/layouts/Article.svelte',
  }
};