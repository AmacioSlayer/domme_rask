<template>
  <div id="#app">
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
body {
  width: 1440px;
  height: 900px;
  border: 1px solid #f0f0f3;
  border-radius: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
