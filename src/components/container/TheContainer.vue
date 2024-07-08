<template>
  <b-container fluid class="main">
    <b-row no-gutters>
      <b-col cols="12">
        <div class="d-flex flex-row">
          <div class="main-content-form">
            <slot />
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main-content-form {
  width: 100%;
  overflow: hidden;
}
</style>
