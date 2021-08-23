<template>
  <section class="content">
    <Header />
    <MenuFilter />
    <TableAndSearch />
    <!-- <div class="container">
      <div class="tableWithRequests">
        <table class="table_style">
          <tr class="table_head">
            <td class="table_head_data"></td>
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
            <NewRequests
              v-for="row in table_data"
              :key="row.id"
              :row_data="row"
            />
          </tr>
        </table>
      </div>
    </div> -->
    <Modals />
  </section>
</template>

<script>
import Header from "./Header.vue";
import MenuFilter from "./MenuFilter.vue";
import TableAndSearch from "./TableAndSearch.vue";
// import NewRequests from "./NewRequests.vue";
import Modals from "./Modals.vue";
export default {
  name: "TableRequests",
  components: {
    Header,
    MenuFilter,
    TableAndSearch,
    // NewRequests,
    Modals,
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
    return { checked: false }; // checkbox props
  },
  computed: {},
};
</script>

<style>
.content {
  margin-left: 175px;
}
li {
  list-style-type: none;
}
.pos_abs {
  position: absolute;
}
.pos_rel {
  position: relative;
}
.ml-auto {
  margin-left: auto;
}
.as-center {
  align-self: center;
}
/*                    styles for first table

.tableWithRequests {
  padding: 30px 18px 30px 16px;
}
.table_style {
  width: 1200px;
  margin: 0 auto;
  color: #2a2e52;
  background: #ffffff;
  border: 1px solid #f0f0f3;
  box-sizing: border-box;
  border-radius: 8px;
}
.table_head {
  height: 42px;
  display: flex;
  justify-content: space-between;
  background: rgba(42, 46, 82, 0.07);
  border-bottom: 1px solid #f0f0f3;
  box-sizing: border-box;
}
.table_head_data {
  flex-basis: 10%;
  padding: 12px 24px;
}
.tableRequests {
  display: flex;
  justify-content: space-between;
}
.row {
  flex-basis: 10%;
  height: 62px;
  padding: 12px 24px;
} */
</style>
