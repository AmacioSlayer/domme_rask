<template>
  <aside class="menu_side">
    <a href="#">
      <img class="menu_logo" href="#" src="@/assets/logo.png" alt="Domme 1.0"
    /></a>
    <div class="menu_line"></div>
    <b-nav vertical class="w-25">
      <b-nav-item>Заявки</b-nav-item>
      <b-nav-item>Люди</b-nav-item>
      <b-nav-item>Шахматка</b-nav-item>
      <b-nav-item>Финансы</b-nav-item>
      <b-nav-item>Лента</b-nav-item>
      <b-nav-item>События</b-nav-item>
      <b-nav-item>Телеметрия</b-nav-item>
      <b-nav-item>Умный дом</b-nav-item>
      <b-nav-item>Календарь</b-nav-item>
      <b-nav-item>Мониторинг</b-nav-item>
    </b-nav>
  </aside>
</template>

<script>
export default {
  name: "SideMenu",
  components: {},
  data: () => {
    return {};
  },
  computed: {},
};
</script>

<style scoped>
.menu_side {
  width: 175px;
  height: 900px;
  float: left;
  border: 1px solid #f0f0f3;
}
.menu_logo {
  margin: 26px 35px 26px 30px;
}
.menu_line {
  width: 175px;
  height: 1px;
  background-color: #f0f0f3;
  /* border-top: 1px solid #f0f0f3; */
}
</style>