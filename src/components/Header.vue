<template>
  <header class="header">
    <div class="container">
      <b-navbar toggleable="lg">
        <div class="residence_info">
          <div class="icon_house_bg pos_abs"></div>
          <img
            class="icon_house pos_rel"
            src="@/assets/icon_house.png"
            alt="icon_house"
          />
          <div class="residence_title">
            <div class="residence">ЖК "Galamshar"</div>
            <a class="residence_another" href="#">Выбрать другой</a>
          </div>
        </div>
        <b-navbar-nav class="dropdown_to_left ml-auto">
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
</template>

<style>
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
}
.icon_house {
  padding: 13px 14px;
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
.dropdown_to_left .show {
  right: 0;
}
.notifications {
  margin-right: 14px;
}
</style>