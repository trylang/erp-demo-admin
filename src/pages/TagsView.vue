<template>
  <div class="tags-view-container">
    <scroll-pane class="tags-view-wrapper" ref="scrollPane">
      <router-link ref="tag" class="tags-view-item" v-for="tag in Array.from(visitedViews)" :key="tag.path"
        :to="tag.path" @contextmenu.prevent.native="openMenu(tag, $event)">
        {{generateTitle(tag.title)}}
        <span class="el-icon-close" @click='closeSelectedTag(tag)'></span>
      </router-link>
    </scroll-pane>
    <ul class="contextmenu1" v-show="visible" :style="{left: left+'px', top:top+'px'}">
      <li @click="closeSelectedTag(selectedTag)">Close</li>
      <li @click="closeOthersTags">Close Others</li>
      <li @click="closeAllTags">Close All</li>
    </ul>
  </div>
</template>

<script>
import ScrollPane from '@/components/ScrollPane';
import { generateTitle } from '@/utils/i18n';

export default {
  components: { ScrollPane },
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {},
      visitedViews: [{path: 'haha', title: 'test'}]
    }
  },
  computed: {
    
  },
  watch: {
    visible(value) {
      if(value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.addEventListener('click', this.closeMenu)
      }
    }
  },
  methods: {
    generateTitle,
    openMenu(tag, e) {
      this.visible = true;
      this.selectedTag = tag;
      this.left = e.clientX;
      this.top = e.clientY;
    },
    closeOthersTags() {

    },
    
  }
}
  
</script>

<style lang="scss" scoped>

</style>

