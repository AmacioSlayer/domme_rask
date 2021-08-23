<template>
  <section class="table_and_search">
    <div class="menu_search">
      <div class="container">
        <b-navbar>
          <b-nav-form class="search_form pos_rel">
            <img
              class="search_icon pos_abs"
              src="@/assets/search.png"
              alt="search"
            />
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Поиск..."
            >
            </b-form-input>
          </b-nav-form>
          <div class="menu_search_filters ml-auto">
            <div class="switch">
              <div class="switch_text">Только с сообщениями</div>
              <b-form-checkbox name="check-button" switch>
                <!-- "switch" prop doesn't work -->
              </b-form-checkbox>
            </div>
            <div class="filter_button">
              <b-button>
                <div class="filter_text">Фильтр</div>
                <img
                  class="filter_sliders"
                  src="@/assets/filter_sliders.png"
                  alt="sliders"
                />
              </b-button>
            </div>
          </div>
        </b-navbar>
      </div>
    </div>
    <div class="table_only">
      <!-- <div class="container">
        <b-table class="table_style" responsive :items="items" :fields="fields">
          <template class="table_head" #head(id)="">
            <div>№</div>
          </template>
          <template #head()="scope">
            <div>{{ scope.label }}</div>
          </template>
        </b-table>
      </div> -->
      <b-container fluid>
        <b-table
          class="table_style"
          :items="items"
          :fields="fields"
          :filter="filter"
          :filter-included-fields="filterOn"
          stacked="md"
          show-empty
          small
        >
          <!-- Modal button -->
          <template #cell(description)="row">
            <b-button
              size="sm"
              @click="info(row.item, $event.target)"
              class="mr-1"
            >
              Открыть
            </b-button>
          </template>
        </b-table>

        <!-- Modal window -->
        <b-modal
          :id="infoModal.id"
          :title="infoModal.title"
          @hide="resetInfoModal"
        >
          <pre>{{ infoModal.content }}</pre>
        </b-modal>
      </b-container>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        // need to import icons from Figma
        { key: "requestNumber", label: "№", isRowHeader: true },
        { key: "location", label: "Локация" },
        { key: "status", label: "Статус" },
        { key: "type", label: "Тип" },
        { key: "description", label: "Описание" },
        { key: "performer", label: "Исполнитель" },
        { key: "dateOfRequest", label: "Дата заявки" },
        { key: "dateOfCompletion", label: "Дата завершения" },
        { key: "sender", label: "Отправитель" },
      ],
      items: [
        {
          requestNumber: 1,
          location: "Квартира",
          status: "В ожидании",
          type: "Жалоба",
          description: "Открыть",
          performer: "",
          dateOfRequest: "03.10.2020 в 18:00",
          dateOfCompletion: "",
          sender: "Медет Сисенгалиев",
        },
        {
          requestNumber: 2,
          location: "Подъезд",
          status: "Решено",
          type: "Предложение",
          description: "Открыть",
          performer: "Андрей Сергеевич",
          dateOfRequest: "03.10.2020 в 18:00",
          dateOfCompletion: "03.10.2020 в 18:00",
          sender: "Медет Сисенгалиев",
        },
        {
          requestNumber: 3,
          location: "Двор",
          status: "В процессе",
          type: "Жалоба",
          description: "Открыть",
          performer: "Райымбек Батыр",
          dateOfRequest: "03.10.2020 в 18:00",
          dateOfCompletion: "",
          sender: "Райымбек Таир",
        },
        {
          requestNumber: 4,
          location: "Паркинг",
          status: "В ожидании",
          type: "Предложение",
          description: "Открыть",
          performer: "",
          dateOfRequest: "03.10.2020 в 18:00",
          dateOfCompletion: "",
          sender: "Андро Земский",
        },
        {
          requestNumber: 5,
          location: "Коммерция",
          status: "В ожидании",
          type: "Жалоба",
          description: "Открыть",
          performer: "",
          dateOfRequest: "03.10.2020 в 18:00",
          dateOfCompletion: "",
          sender: "Райымбек Таир",
        },
        {
          requestNumber: 6,
          location: "Двор",
          status: "Отклонен",
          type: "Жалоба",
          description: "Открыть",
          performer: "Медет Цина",
          dateOfRequest: "03.10.2020 в 18:00",
          dateOfCompletion: "03.10.2020 в 18:00",
          sender: "Медет Сисенгалиев",
        },
        {
          requestNumber: 7,
          location: "Двор",
          status: "Просрочено",
          type: "Предложение",
          description: "Открыть",
          performer: "Андро Земский",
          dateOfRequest: "03.10.2020 в 18:00",
          dateOfCompletion: "",
          sender: "Андро Земский",
        },
      ],
      totalRows: 1,
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
    };
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    info(item, button) {
      this.infoModal.title = item.requestNumber; // `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
  },
};
</script>

<style>
/* .table_and_search {

} */
.menu_search {
  padding: 10px 18px;
  border-bottom: 1px solid #f0f0f3;
}
.search_form .form-control {
  width: 382px;
  height: 44px;
  padding: 14px 0 15px 47px;
  border: 1px solid rgba(42, 46, 82, 0.07);
  box-sizing: border-box;
  border-radius: 8px;

  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
}
.search_icon {
  padding: 12px;
}
.menu_search_filters {
  display: flex;
  align-items: center;
}
.switch {
  display: flex;
  align-items: center;
  padding-right: 60px;
}
.switch_text {
  padding: 16px;
}
.filter_button .btn {
  color: #2a2e52;
  background: #ffffff;
  border: 1px solid #eaeaf3;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 12px;
  display: flex;
}
.filter_text {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #2a2e52;
}
.filter_sliders {
  padding-left: 12px;
  align-self: center;
}
.table_only {
  padding: 30px 18px 30px 16px;
}
.table_style {
  margin: 0 auto;
  border: 1px solid #f0f0f3;
  background: #ffffff;
}
.table_style table {
  color: #2a2e52;
  border: 1px solid #f0f0f3;
  box-sizing: border-box;
  border-radius: 8px;
}
.table_style thead {
  background: rgba(42, 46, 82, 0.07);
}
tr {
  height: 62px;
}
</style>
