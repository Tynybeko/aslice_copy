<template>
  <div class="two">
    <form class="two-container" @submit.prevent="onSubmit">
      <span class="two-container__step">Step 2 of 3</span>
      <span class="two-container__title">ARE YOU A...</span>

      <div class="two-container-checkbox">
        <input
          class="two-container-checkbox__input"
          @click="isChecked"
          type="checkbox"
          id="dj"
          name="user"
        />
        <label class="two-container-checkbox__label" for="dj">DJ</label>
      </div>
      <div class="two-container-checkbox">
        <input
          class="two-container-checkbox__input"
          @click="isChecked"
          type="checkbox"
          id="producer"
          name="user"
        />
        <label class="two-container-checkbox__label" for="producer"
          >Producer</label
        >
      </div>

      <button
        type="submit"
        class="two-container__btn"
        :class="{ checked: this.check }"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: false
    };
  },
  methods: {
    isChecked() {
      let dj = document.getElementById("dj").checked;
      let producer = document.getElementById("producer").checked;

      // console.log(dj)
      if (producer == true || dj == true) {
        this.check = true;
      } else {
        this.check = false;
      }
    },
    onSubmit() {
      // if (this.check == false){
      //
      // }
      window.location.href = "/register-step3";
    }
  }
};
</script>

<style scoped>
.two {
  display: flex;
  align-items: center;
  justify-content: center;
}
.two-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 83px;
}
.two-container__step {
  font-weight: 600;
  font-size: 16px;
  color: #000000;
  margin-bottom: 10px;
}
.two-container__title {
  font-family: "Montserrat-ExtraBold";
  font-weight: 900;
  font-size: 48px;
  margin-bottom: 70px;
}
.two-container-checkbox {
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 10px;
  width: 430px;
  padding: 20px 0px 10px 20px;
  margin-bottom: 20px;
  transition: all 0.3s;
  cursor: pointer;
}
.two-container-checkbox:hover {
  border: 1px solid #5913ee;
  color: #5913ee;
}

.two-container-checkbox__input {
  margin-right: 10px;
}
/*input:checked + button{*/
/*  background-color: #5913EE;*/
/*}*/
.two-container-checkbox__label {
  font-weight: 500;
  font-size: 16px;
}

.two-container__btn {
  margin-top: 50px;
  background: #e5e5e5;
  border-radius: 30px;
  font-weight: 800;
  font-size: 16px;
  color: #ffffff;
  border: none;
  text-transform: uppercase;
  font-family: "Montserrat-ExtraBold";
  padding: 15px 40px;
  transition: all 0.3s;
}

.checked {
  background-color: #5913ee;
}
</style>
