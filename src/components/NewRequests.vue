<template>
  <div class="tableRequests">
    <tr class="row row_icon">
      {{
        row_data.icon
      }}
    </tr>
    <tr class="row row_id">
      {{
        row_data.requestNumber
      }}
    </tr>
    <tr class="row row_location">
      {{
        row_data.location
      }}
    </tr>
    <tr class="row row_status">
      {{
        row_data.status
      }}
    </tr>
    <tr class="row row_type">
      {{
        row_data.type
      }}
    </tr>
    <tr class="row row_description">
      <b-button v-b-modal.1>{{ row_data.description }}</b-button>
    </tr>
    <tr class="row row_performer">
      {{
        row_data.performer
      }}
    </tr>
    <tr class="row row_dateOfRequest">
      {{
        row_data.dateOfRequest
      }}
    </tr>
    <tr class="row row_dateOfCompletion">
      {{
        row_data.dateOfCompletion
      }}
    </tr>
    <tr class="row row_sender">
      {{
        row_data.sender
      }}
    </tr>
  </div>
</template>

<script>
export default {
  name: "NewRequests",
  props: {
    row_data: {
      type: Object,
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
* {
  margin: 0;
  padding: 0;
}
</style>
