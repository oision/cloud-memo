<template>
    <sidebar-menu :menu="menu" width="250px" theme="white-theme"/>
</template>
<script>
import { mapState } from 'vuex'
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
export default {
  name: 'side-bar',
  components: {
      SidebarMenu
  },
  data () {
      return {
      }
  },
  computed: mapState({
      menu (state) {
          const max = state.memos.memos.length

          let children = [
              {
                  href: "/memos/new",
                  title: "NEW",
              }
          ]
          for (let i = 0; i < max; i++) {
              const child = {
                  href: "/memos/" + state.memos.memos[i].id,
                  title: state.memos.memos[i].title,
              }
              children.push(child)
          }

          return [
              {
                  header: true,
                  title: 'Memos',
              },
              {
                  title: 'My Folder',
                  icon: 'far fa-folder',
                  child: children
              }
          ]
      }
  }),
  methods: {
  },
  created () {
      this.$store.dispatch('memos/fetchMemos').catch((e) => {
          console.log(e)
      })
  },
}
</script>

<style>
    .v-sidebar-menu {
        margin-top: 56px;
    }
    .v-sidebar-menu>.vsm-list {
        border-right: 1px solid #eee;
    }
    .v-sidebar-menu.white-theme.vsm-default .vsm-item.first-item.open-item>.vsm-link {
        color: #fff;
        background-color: #48a2b8;
    }
</style>
