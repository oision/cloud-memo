<template>
  <div id="app">
    <div class="app">
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
import SideBar from '@/components/SideBar'

export default {
  name: 'App',
  components: {
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
  margin-top: 60px;
}

.main {
  margin-left: 250px;
}
</style>
