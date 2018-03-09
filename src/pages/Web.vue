<template>
    <div id="app">
        <div class="container">
            <div class="aside">
                <div class="logo">
                    <router-link to="/"><img src="../assets/logo.png"></router-link>
                </div>
                <erp-menu></erp-menu>
            </div>
            <div class="main">
                <erp-header></erp-header>
                <tags-view></tags-view>
                <div class="wrapper">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ErpHeader from '../components/Header';
    import ErpMenu from '../components/Menu';
    import TagsView from './TagsView';
    export default {
        name: "erpweb",
        components:{
            ErpHeader,
            ErpMenu,
            TagsView
        }
    }
</script>

<style scoped>

</style>