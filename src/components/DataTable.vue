<template>
  <div class="overflow-auto position-relative">
    <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      show-empty
      responsive
      @filtered="onFiltered"
    >
    </b-table>
  </div>
</template>

<script>
export default {
  props: ["perPage", "currentPage", "items", "fields"],
  methods: {
    onFiltered(filteredItems) {
      console.log(filteredItems);
    }
  }
};
</script>
