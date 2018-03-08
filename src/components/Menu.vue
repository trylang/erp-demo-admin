<template>
    <div class="sub-menu">
        <el-menu :default-active="activeMenu"
                 :default-openeds="menuOpeneds"
                 class="el-menu-vertical-demo"
                 router>
            <menu-item v-for="(item,index) in menus" :item="item" :key="index"></menu-item>
            
        </el-menu>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MenuItem from "../components/MenuItem";

export default {
  name: "erpmenu",
  data() {
    return {
      menuOpeneds: ["0"]
    };
  },
  computed: {
    ...mapGetters([
      'permission_routers'
    ]),
    menus() {
      const activeParentPath = this.$route.matched[0].path;
      return this.permission_routers.filter(item => {
        return !item.hidden && item.path === activeParentPath;
      });
    },
    activeMenu() {
      let activeMenu = this.$route.path;
      const activeMenuList = this.menus[0].children.find(child => {
        return this.$route.path.indexOf(child.path) >= 0;
      });
      const index = activeMenuList.children.find(item => {
        return this.$route.path.indexOf(item.meta.fullPath) >= 0;
      });
      if(index) {
        activeMenu = index.meta.fullPath;
      }
      return activeMenu;
    }
  },
  created() {},
  methods: {},
  components: {
    MenuItem
  },
  watch: {
    $route: function(to, from) {
      let _topath = to.path.match(/\/?[^\/]+/g);
      let _frompath = from.path.match(/\/?[^\/]+/g);
      if (_topath[0] !== _frompath[0]) {
        this.menuOpeneds = ["0"];
      }
    }
  }
};
</script>

<style scoped>
div.sub-menu {
  overflow: hidden;
}
.el-menu .el-menu-item {
  font-size: 1em;
  height: 45px;
  line-height: 45px;
}
</style>