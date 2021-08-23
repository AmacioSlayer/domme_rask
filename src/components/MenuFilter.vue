<template>
  <div class="menu_filter">
    <div class="container">
      <div class="menu_filter_flex">
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
        <div class="request_button ml-auto as-center">
          <b-button>Создать заявку</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.menu_filter {
  padding: 18px;
  border-bottom: 1px solid #f0f0f3;
}
.menu_filter_flex {
  display: flex;
  align-items: center;
}
.filter_tabs .nav-link {
  color: #2a2e52;
  opacity: 0.6;
  padding: 0 24px 0 0;
}
.request_button .btn {
  background: #5b6cff;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-right: 2px;
  padding: 13px 18px;
  color: #ffffff;
}
</style>