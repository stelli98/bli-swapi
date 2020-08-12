<template>
  <ul>
    <li
      v-for="(item, index) in items"
      :key="index + 1"
      :class="{ active: index == selectedItem }"
      @click="setSelectedItem(index, item)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      selectedItem: 0,
      items: ["people", "planets", "species"]
    };
  },
  computed: {
    ...mapGetters(["categories"])
  },
  methods: {
    ...mapActions(["getCategories"]),
    setSelectedItem(index, name) {
      this.addToParam(name);
      this.selectedItem = index;
    },
    addToParam(name) {
      this.$router.push({
        query: {
          q: name
        }
      });
    }
  },
  mounted() {
    this.addToParam("people");
    this.getCategories();
  }
};
</script>

<style lang="scss" scoped>
ul {
  font-size: 0;
  position: relative;
  padding: 0;
  width: 400px;
  margin: 40px auto;
  user-select: none;
  box-sizing: border-box;
}

li {
  display: inline-block;
  padding: 0.5rem 0.75rem;
  background: #2f2c2c;
  font-size: 16px;
  text-align: center;
  line-height: 60px;
  color: #fff;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.active {
  border-bottom: solid 3px #f9d442b9;
  padding: 0.4rem 0.75rem;
}
</style>
