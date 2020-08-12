<template>
  <div class="home">
    <TabList />
    <ListItem />
  </div>
</template>

<script>
import TabList from "@/components/TabList";
import ListItem from "@/components/ListItem";
export default {
  name: "Home",
  components: {
    TabList,
    ListItem
  }
};
</script>
<style scoped></style>
