# Contributors VuePress plugin

![Version](https://img.shields.io/npm/v/@tlbootcamp/vuepress-plugin-contributors)
![License](https://img.shields.io/npm/l/@tlbootcamp/vuepress-plugin-contributors)

Shows GitHub contributors for each VuePress page

## Install

From your VuePress project directory run

```shell
npm install @tlbootcamp/vuepress-plugin-contributors
# or
yarn add @tlbootcamp/vuepress-plugin-contributors
```

## Usage

You can use component as itself: just write `<Contributors/>` in .md file and vuala.

But most valuable part of this plugin is ability to inject contributor list to each page.
Unfortunately, vuepress allows customize Page component only via custom themes, so you need to do some magic.

Create `theme` directory in your `.vuepress`, fill it with `index.js` and `layouts/Layout.vue` as in vuepress-example.
Then add this theme as file dependency to a project (example), and setup your theme to config.js (example).

If you want change size or place of Contributors component in Page component, please use `Layout.vue` and theme customizing instructions.
