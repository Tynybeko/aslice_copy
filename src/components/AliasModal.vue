<template>
  <div class="alias-modal">
    <div class="alias-modal__container">
      <div class="alias-modal__body">
        <img src="@/assets/images/warning-icon.svg" alt=""/>
        <h2>Alias and / or Group Verification</h2>
        <p>
          Alias and group verification typically begins once the first song by that alias or group is reported in our
          system. You will be notified via your Aslice messages and/or email once the process is underway.
        </p>
        <label class="alias-modal__checkbox">Do not display again
          <input
              type="checkbox"
              v-model="doNotShow"
          />
          <span class="alias-modal__checkbox__checkmark"></span>
        </label>
      </div>
      <div class="alias-modal__footer">
        <button @click="handleCloseModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AliasModal",
  data() {
    return {
      doNotShow: true
    };
  },
  methods: {
    handleCloseModal() {
      this.$emit("onClose", this.doNotShow);
    }
  }
};
</script>

<style lang="scss" scoped>
.alias-modal {
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: rgba(#000, 0.3);

  &__container {
    width: 100%;
    overflow: hidden;
    max-width: 414px;
    background: #fff;
    border-radius: 4px;
    font-family: "Graphik-Regular-Web";
    box-shadow: 15px 10px 30px 5px rgba(0, 0, 0, 0.25);

    h2 {
      font-size: 32px;
      color: #E32D26;
      margin-bottom: 20px;
    }

    p {
      font-size: 12px;
      color: #75707B;
      line-height: 16px;
      font-family: "Roboto-Mono";
    }
  }

  &__body {
    padding: 40px;

    img {
      margin-bottom: 20px;
      user-select: none;
    }
  }

  &__footer {
    height: 70px;
    display: flex;
    padding: 0 20px;
    align-items: center;
    background: #F2F1EF;
    justify-content: flex-end;

    button {
      width: 93px;
      height: 40px;
      border: none;
      color: #fff;
      font-size: 14px;
      text-align: center;
      border-radius: 50px;
      background: #442671;
      letter-spacing: 0.13em;
      text-transform: uppercase;
    }
  }

  &__checkbox {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: 10px;
    color: #75707B;
    user-select: none;
    margin-bottom: 0px;
    font-family: "Roboto-Mono";
    flex-direction: row-reverse;
    justify-content: flex-end;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    &__checkmark {
      width: 20px;
      height: 20px;
      margin-right: 14px;
      border-radius: 2px;
      background: transparent;
      border: 1px solid #75707B;
    }
  }

  &__checkbox input:checked ~ &__checkbox__checkmark {
    background: url('../assets/images/checkmark.svg');
    background-repeat: no-repeat;
    background-position: center center;
  }
}
</style>
