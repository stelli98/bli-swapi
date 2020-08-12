<template>
  <div class="header">
    <div class="header__left">
      <img
        class="logo"
        src="https://www.static-src.com/frontend/static/img/logo-blibli-white.f8255fc.svg"
        alt="logo"
      />
    </div>
    <div class="header__mid"></div>
    <div class="header__right">
      Swapi Demo
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0095da;
  &__left {
    .logo {
      width: 140px;
    }
    margin-bottom: 4px;
    .back {
      width: 24px;
      height: 24px;
      transform: rotate(180deg);
      margin-left: 8px;
    }
  }
  &__right {
    font-size: 20px;
    color: #fff;
  }
  padding: 8px;
}
</style>
