<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/face.svg" alt="" />
      <transition name="title">
        <span v-if="!isFold">月亮与六便士系统</span>
      </transition>
    </div>
    <el-menu
      :default-active="MenuSelect"
      class="el-menu-vertical"
      :collapse="isFold"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#fcff49"
      :unique-opened="true"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon><apple /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="changeRoute(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else>
          <el-menu-item :index="item.id + ''">
            <el-icon><apple /></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useMyStore } from '@/store'
import { Apple } from '@element-plus/icons-vue'

import MapPathMenu from '@/untils/path-menu'

export default defineComponent({
  props: {
    isFold: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    // vuex
    const store = useMyStore()
    const userMenus = computed(() => store.state.login.userMenu)
    // router
    const router = useRouter()
    const route = useRoute()
    const changeRoute = (item: any) => {
      router.push(item.url)
    }
    // data, 记录当前路由对应的url，防止刷新直接没了
    const menu = MapPathMenu(route.path, userMenus.value)
    const MenuSelect = ref(menu?.id + '')

    return {
      userMenus,
      changeRoute,
      MenuSelect
    }
  },
  components: {
    Apple
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title-enter-from,
    .title-leave-to {
      opacity: 0;
    }

    .title-enter-to,
    .title-leave-from {
      opacity: 1;
    }

    .title-enter-active {
      transition: opacity 2s ease;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-sub-menu__title {
    background-color: #00115c !important;
    color: #fff;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: rgb(0, 0, 0) !important;
    background-color: #fcff49 !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
