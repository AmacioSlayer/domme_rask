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
      <b-container>
        <b-table
          class="table table_style"
          responsive
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
              @click="info(row.item, $event.target)"
              class="table_button"
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
        { key: "icon", label: "" },
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
          icon: "icons",
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
          icon: "icons",
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
          icon: "icons",
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
          icon: "icons",
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
          icon: "icons",
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
          icon: "icons",
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
          icon: "icons",
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
      this.infoModal.title = item.requestNumber;
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
  padding: 12px 12px 12px 16px;
  display: flex;
}
.filter_text {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #2a2e52;
}
.filter_sliders {
  padding-left: 45px;
  align-self: center;
}
.table_only {
  padding: 30px 18px 30px 16px;
}
.table-responsive {
  /* this gradient doesn't work */
  background-image: linear-gradient(
    270deg,
    #ffffff 18.73%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 28px 28px;
  background-repeat: repeat-y;
  background-position-x: right;
}
.table > :not(:last-child) > :last-child > * {
  border-bottom-color: #f0f0f3 !important;
}
.table-sm > :not(caption) > * > * {
  padding: 0 40px 0 20px !important;
}
table {
  color: #2a2e52 !important;
  border: 1px solid #f0f0f3 !important;
}
tbody {
  vertical-align: middle !important;
}
thead {
  vertical-align: middle !important;
  background: rgba(42, 46, 82, 0.07);
  color: rgba(42, 46, 82, 0.6) !important;
}
th {
  font-weight: 500 !important;
}
[role="columnheader"] {
  height: 42px;
}
[role="rowheader"] {
  height: 62px;
}
[role="row"]:hover {
  background: rgba(91, 108, 255, 0.07);
}
.table_button {
  font-family: "Inter";
  font-style: normal;
  text-align: left !important;
  font-size: 14px !important;
  line-height: 17px !important;
  font-weight: 500 !important;
  letter-spacing: 0em !important;
  padding: 0 !important;
  color: #2a2e52 !important;
  background: none !important;
  border: none !important;
  border-bottom: 1px dashed rgba(42, 46, 82, 0.4) !important;
  border-radius: 0 !important;
}
</style>
