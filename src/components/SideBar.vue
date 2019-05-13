<template>
    <sidebar-menu :menu="menu" width="250px" theme="white-theme"/>
</template>
<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
export default {
  name: 'side-bar',
  data () {
      return {
          menu: [
              {
                  header: true,
                  title: 'Memos',
              },
              {
                  title: 'My Folder',
                  icon: 'far fa-folder',
                  child: [
                      {
                          href: '/memos/new',
                          title: 'new memo',
                      }
                  ]
              }
          ]
      }
  },
  components: {
      SidebarMenu
  },
}
</script>

<style scoped>
    .v-sidebar-menu {
        margin-top: 56px;
    }
</style>
