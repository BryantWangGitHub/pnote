<template>
  <div>

    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">悬赏封印</x-header>
    <group>
      <cell is-link title="Tabbar Simple" link="/yys/reward"></cell>
    </group>
    <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
  </div>
</template>
<style>

</style>
<script>
  import { Tabbar, TabbarItem, Group, Cell,XHeader,Actionsheet } from 'vux'
  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      XHeader,
      Actionsheet
    },
    data () {
      return {
        menus: {
          menu1: '分享至微信'
        },
        showMenus: false
      }
    }
  }
</script>
