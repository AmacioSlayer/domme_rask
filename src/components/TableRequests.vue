<template>
  <section class="content">
    <header class="header">
      <div class="container">
        <b-navbar toggleable="lg">
          <div class="residence_info">
            <div class="icon_house_bg"></div>
            <img
              class="icon_house"
              src="@/assets/icon_house.png"
              alt="icon_house"
            />
            <div class="residence_title">
              <div class="residence">ЖК "Galamshar"</div>
              <a class="residence_another" href="#">Выбрать другой</a>
            </div>
          </div>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown class="notifications as-center" no-caret>
              <template #button-content>
                <img src="@/assets/bell.png" alt="messages" />
              </template>
              <b-dropdown-item href="#">Уведомление №1</b-dropdown-item>
              <b-dropdown-item href="#">Уведомление №2</b-dropdown-item>
              <b-dropdown-item href="#">Уведомление №3</b-dropdown-item>
              <b-dropdown-item href="#">Уведомление №4</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown class="as-center" no-caret>
              <template #button-content>
                <img src="@/assets/user_photo.png" alt="user_photo" />
              </template>
              <b-dropdown-item href="#">Профиль</b-dropdown-item>
              <b-dropdown-item href="#">Выйти</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-navbar>
      </div>
    </header>
    <div class="menu_filter">
      <div class="container">
        <b-nav class="filter_tabs">
          <b-nav-item active>Все (184)</b-nav-item>
          <b-nav-item>Новые (32)</b-nav-item>
          <b-nav-item>Важные (32)</b-nav-item>
          <b-nav-item>В ожидании (32)</b-nav-item>
          <b-nav-item>В процессе (32)</b-nav-item>
          <b-nav-item>Просрочено (32)</b-nav-item>
          <b-nav-item>Решенные (32)</b-nav-item>
          <b-nav-item>Отклоненные (32)</b-nav-item>
        </b-nav>
        <div class="ml-auto as-center">
          <b-button>Создать заявку</b-button>
        </div>
      </div>
    </div>
    <div class="menu_search"><div class="container"></div></div>
    <!-- <table class="tableWithRequests">
      <tr class="table_head">
        <td class="table_head_data">№</td>
        <td class="table_head_data">Локация</td>
        <td class="table_head_data">Статус</td>
        <td class="table_head_data">Тип</td>
        <td class="table_head_data">Описание</td>
        <td class="table_head_data">Исполнитель</td>
        <td class="table_head_data">Дата заявки</td>
        <td class="table_head_data">Дата завершения</td>
        <td class="table_head_data">Отправитель</td>
      </tr>
      <tr class="table_body">
        <NewRequests v-for="row in table_data" :key="row.id" :row_data="row" />
      </tr>
    </table> -->
    <section class="new_table">
      <NewTable />
    </section>
  </section>
</template>

<script>
// import NewRequests from "./NewRequests.vue";
import NewTable from "./NewTable.vue";
export default {
  name: "TableRequests",
  components: {
    // NewRequests,
    NewTable,
  },
  props: {
    table_data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style>
.filter_tabs .nav-link {
  padding: 6px 12px;
}
.content {
  margin-left: 175px;
}
.header {
  padding: 0 10px 0 18px;
  border-bottom: 1px solid #f0f0f3;
}
.icon_house_bg {
  width: 48px;
  height: 48px;
  background: #5b6cff;
  opacity: 0.07;
  border-radius: 8px;
  position: absolute;
}
.icon_house {
  padding: 13px 14px;
  position: relative;
}
.residence_info {
  display: flex;
  align-items: center;
}
.residence_title {
  margin-left: 12px;
}
.residence {
  font-weight: bold;
}
.residence_another {
  font-size: 12px;
  line-height: 15px;
  text-decoration: none;
  align-items: center;
  color: #2a2e52;
  opacity: 0.6;
}
.notifications {
  margin-right: 14px;
}
.ml-auto {
  margin-left: auto;
}
.as-center {
  align-self: center;
}
.button {
  color: #5b6cff;
  border-radius: 8px;
}
.menu_filter {
  margin: 18px;
}
.tableWithRequests {
  min-width: 900px;
  margin: 0 auto;
}
.table_head {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #f0f0f3;
  box-sizing: border-box;
}
.table_head_data {
  flex-basis: 10%;
  text-align: left;
}
.new_table {
  padding: 28px;
}
</style>
