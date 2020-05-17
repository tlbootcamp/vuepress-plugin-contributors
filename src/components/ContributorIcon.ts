import Vue, { VNode } from 'vue';


const ContributorIcon = Vue.extend({
  name: 'ContributorIcon',

  props: {
    avatarLink: {
      type: String,
      required: true, // TODO: allow contributors without avatar
    },
    profileName: {
      type: String,
      required: true,
    },
    profileLink: {
      type: String,
      required: true,
    },
  },

  computed: {},

  render(h): VNode {
    return h('div', this.profileName);
  },
});

export default ContributorIcon;
