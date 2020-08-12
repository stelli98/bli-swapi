<template>
  <div class="list-item">
    <div
      class="item"
      v-for="(item, index) in dataPerCategory.results"
      :key="index + 1"
    >
      <div class="item__inside">
        <span class="info">Name: </span>
        <span class="value">{{ item.name || item.title }}</span>
      </div>
      <div class="item__inside">
        <span v-if="item.birth_year" class="info">Birth Year: </span>
        <span v-else-if="item.population" class="info">Population: </span>
        <span v-else-if="item.classification" class="info"
          >Classification:
        </span>
        <span class="value">{{
          item.birth_year || item.population || item.classification
        }}</span>
      </div>
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
.list-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .item {
    width: 95%;
    height: 80px;
    background: linear-gradient(90deg, #3795d9, #3795d9 35%, #00d4ff);
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.4);
    margin: 8px auto;
    border-radius: 8px;
    text-align: left;
    &__inside {
      padding: 8px 0px 0px 16px;
      font-size: 18px;
      color: #f1f1f1;
    }
  }
}
</style>
