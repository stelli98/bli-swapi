<template>
  <div>
    <div v-for="(item, index) in dataPerCategory.results" :key="index + 1">
      {{ item.name || item.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["dataPerCategory"]),
    params() {
      return this.$route.query.q;
    }
  },
  methods: {
    ...mapActions(["getDataPerCategory"])
  },
  mounted() {
    this.getDataPerCategory({ name: this.params });
  },
  watch: {
    params() {
      this.getDataPerCategory({ name: this.params });
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}
</style>
