import MarkdownIt from 'markdown-it';
import frontMatterPlugin from 'markdown-it-front-matter';
const yaml = require('js-yaml');

// configure the md parser
const md = new MarkdownIt();
md.use(frontMatterPlugin, {
  parseFrontMatter: yaml.safeLoad
});

/**
 * Parse the md file and return parsed json tree
 * @param file (file data as string)
 * @returns
 */
const parsedMdFile = (file: string) => {
  const parsedContent = md.parse(file, {});
  return parsedContent;
};

export default parsedMdFile;
