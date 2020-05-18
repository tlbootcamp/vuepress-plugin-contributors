import { Plugin, PluginGeneratedFile } from 'vuepress-types';
import * as path from 'path';


const COMPONENTS = [
  {
    name: 'ContributionIcon',
    filepath: path.resolve(__dirname, 'components/ContributorIcon'),
  },
];

const ContributorsPlugin: Plugin = () => ({
  name: 'vuepress-plugin-contributors',
  enhanceAppFiles(): PluginGeneratedFile {
    let code = '';
    COMPONENTS.forEach(({ name, filepath }) => {
      code += `export default ({ Vue }) => Vue.component(${JSON.stringify(name)}, () => import (${JSON.stringify(filepath)}))\n`;
    });
    return {
      name: 'plugin-contributors.js',
      content: code,
    };
  },
});

module.exports = ContributorsPlugin;
