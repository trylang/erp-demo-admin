<template>
  <div>    
    <el-submenu :index="child.path" v-for="(child, index) in item.children" :key="index">
        
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{generateTitle(child.meta.title)}}</span>
        </template>
        <el-menu-item :index="small.meta.fullPath" v-if="!small.hidden" v-for="(small, key) in child.children" :key="key">
          <router-link tag="li" :to="small.path">
            <span>-</span>
            <span class="menutitle">{{generateTitle(small.meta.title)}}</span>
          </router-link>
        </el-menu-item>
    </el-submenu>     
  </div>
</template>

<script>
import { generateTitle } from "@/utils/i18n";
export default {
  name: "menu-item",
  props: ["item"],
  methods: {
    generateTitle
  }
};
</script>

<style scoped>

</style>