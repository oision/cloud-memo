<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'Memos',
  data () {
    return {}
  },
  methods: {
      init () {},
  },
  created () {
    this.init()
  },
  watch: {
    '$route': function () {
      this.init()
    }
  },
}
</script>
