<template>
    <div>
        <el-submenu :index="index+''">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{generateTitle(item.meta.title)}}</span>
            </template>
            <el-menu-item
                :index="child.path"
                v-if="!child.hidden"
                v-for="(child, index) in item.children"
                :key="index">
                <router-link tag="li" :to="item.path+'/'+child.path">
                    <span>-</span>
                    <span class="menutitle">{{generateTitle(child.meta.title)}}</span>
                </router-link>
            </el-menu-item>
        </el-submenu>
    </div>
</template>

<script>
import { generateTitle } from "@/utils/i18n";
export default {
  name: "menu-item",
  props: ["item", "index"],
  methods: {
    generateTitle
  }
};
</script>

<style scoped>

</style>