<template>
  <section class="content">
    <header class="header">
      <div class="container">
        <b-navbar toggleable="lg">
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown class="as-center" no-caret>
              <template #button-content>
                <img src="@/assets/bell.png" alt="messages" />
              </template>
              <b-dropdown-item href="#">Сообщение №1</b-dropdown-item>
              <b-dropdown-item href="#">Сообщение №2</b-dropdown-item>
              <b-dropdown-item href="#">Сообщение №3</b-dropdown-item>
              <b-dropdown-item href="#">Сообщение №4</b-dropdown-item>
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
        <div>
          <b-list-group horizontal>
            <b-list-group-item>Все (184)</b-list-group-item>
            <b-list-group-item>Новые (32)</b-list-group-item>
            <b-list-group-item>Важные (32)</b-list-group-item>
            <b-list-group-item>В ожидании (32)</b-list-group-item
            ><b-list-group-item>В процессе (32)</b-list-group-item
            ><b-list-group-item>Просрочено (32)</b-list-group-item
            ><b-list-group-item>Решенные (32)</b-list-group-item
            ><b-list-group-item>Отклоненные (32)</b-list-group-item>
            <div class="ml-auto as-center">
              <b-button>Создать заявку</b-button>
            </div>
          </b-list-group>
        </div>
      </div>
    </div>
    <div class="menu_search"></div>
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
.content {
  margin-left: 175px;
}
.header {
  padding: 0 10px;
  border-bottom: 1px solid #f0f0f3;
}
.contain_er {
  margin: 0 28px;
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
