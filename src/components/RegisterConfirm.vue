<template>
  <div class="confirm">
    <div class="confirm-message">
      <span class="confirm-message__title">CHECK YOUR EMAIL</span>
      <p class="confirm-message__subtitle">
        A confirmation email with link is sent to the address provided.
      </p>
    </div>
  </div>
</template>

<style scoped>
.confirm {
  background: #e5e5e5;
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.confirm-message {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 60px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.confirm-message__title {
  font-family: "Montserrat-ExtraBold";
  font-weight: 800;
  font-size: 36px;
  color: #000000;
  width: 251px;
  margin-bottom: 35px;
}
.confirm-message__subtitle {
  font-weight: 600;
  font-size: 16px;
  width: 320px;
}
</style>
