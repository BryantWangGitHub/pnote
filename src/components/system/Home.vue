<template>
  <div>

    <tabbar>
      <tabbar-item>
        <span slot="label">游戏</span>
      </tabbar-item>
      <tabbar-item link="/yys/index" show-dot>
        <span slot="label">阴阳师</span>
      </tabbar-item>

    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'
  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    }
  }
</script>
