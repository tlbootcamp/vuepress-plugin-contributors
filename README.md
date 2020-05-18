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

You can use the component by itself: add `<Contributors/>` to any `.md` file and voila.

But the most valuable part of this plugin is the ability to inject a distinct contributor list into each page.
Unfortunately, VuePress allows to customize the `Page` component only via custom themes, so you need to do some magic as follows.

Create `theme` directory in your `.vuepress`, `index.js` and `layouts/Layout.vue` there as in (example)[example].
Then add this theme as file dependency to a project (example), and setup your theme to config.js (example).

If you to want change size or position of the `Contributors` component in the `Page` component, please use `Layout.vue` and (theme customization instruction)[https://vuepress.vuejs.org/theme/writing-a-theme.html].
