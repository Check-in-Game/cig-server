<template>
  <div class="user">
    checkin2
  </div>
</template>

<script>
export default {
  data: function() {
    return {
        'title': '签到中心',
    }
  },
  watch: {
    'title': function() {
      this.modifyTitle();
    }
  },
  mounted: function() {
    this.modifyTitle();
  },
  methods: {
    modifyTitle: function() {
      this.$emit('getTitle', this.title);
    }
  },
}
</script>

<style lang="css" scoped>

</style>
