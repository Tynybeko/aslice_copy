<template>
  <button class="primary-button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.primary-button {
  height: 40px;
  padding: 0 20px;
  font-size: 14px;
  border-radius: 50px;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  border: 1px solid #442671;
  font-family: "Graphik-Regular-Web", sans-serif;
  display: flex;
  align-items: center;
  background: #442671;
  color: #ffffff;
  margin-left: 10px;
  transition: 0.2s;

  &:hover {
    background: #ffffff;
    color: #442671;
  }
}
</style>
