<template>
  <ul>
    <li
      v-for="(item, index) in items"
      :key="index + 1"
      :class="{ active: item == params }"
      @click="setSelectedItem(index, item)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: 0,
      items: ["people", "planets", "species"]
    };
  },
  computed: {
    params() {
      return this.$route.query.q;
    }
  },
  methods: {
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
  }
};
</script>

<style lang="scss" scoped>
ul {
  font-size: 0;
  position: relative;
  padding: 0;
  width: 100%;
  margin: 16px auto;
  display: flex;
  justify-content: space-around;
}

li {
  width: 28%;
  border-radius: 16px;
  padding: 4px 8px;
  background: #f1f1f1;
  font-size: 16px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.active {
  background-image: linear-gradient(106deg, #f8a33f, #f37021);
  color: #fff;
}
</style>
