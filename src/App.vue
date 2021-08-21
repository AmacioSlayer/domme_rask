<template>
  <div class="style_inter" id="#app">
    <SideMenu />
    <TableRequests :table_data="REQUESTS" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SideMenu from "./components/SideMenu";
import TableRequests from "./components/TableRequests";
export default {
  name: "App",
  components: {
    SideMenu,
    TableRequests,
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters(["REQUESTS"]),
  },
  methods: {
    ...mapActions(["GET_REQUESTS_FROM_API"]),
  },
  async mounted() {
    this.GET_REQUESTS_FROM_API();
  },
};
</script>

<style>
@import url("https://rsms.me/inter/inter.css");
html {
  font-family: "Inter", sans-serif;
}
@supports (font-variation-settings: normal) {
  html {
    font-family: "Inter var", sans-serif;
  }
}
.style_inter {
  font-family: "Inter";
  font-style: normal;
  text-align: left;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  letter-spacing: 0em;
}
body {
  width: 1440px;
  height: 900px;
  border: 1px solid #f0f0f3;
  border-radius: 14px;
  background: #ffffff;
}
#app {
  font-family: "Inter";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
