<template>
  <div id="app">
    <div class="app">
      <header-bar fixed></header-bar>
      <div class="app-body">
        <side-bar fixed></side-bar>
        <main class="main">
          <div class="container-fluid">
            <router-view></router-view>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import SideBar from '@/components/SideBar'

export default {
  name: 'App',
  components: {
    HeaderBar,
    SideBar
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  margin-left: 250px;
}
</style>
