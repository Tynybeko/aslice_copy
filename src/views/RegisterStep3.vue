<template>
  <div class="three">
    <form class="three-form">
      <span class="three-form__step">Step 3 of 3</span>
      <h1 class="three-form__title">About you</h1>

      <input type="file" id="photo" style="display: none" />
      <label for="photo" class="three-form__label">
        <img
          src="../assets/images/photo.svg"
          alt="photo"
          class="three-form__photo"
        />
      </label>

      <div class="three-form-container">
        <span class="three-form-container__title">General info</span>
        <label class="three-form-container__label" for="name">Given name</label>
        <input
          v-model="formData.name"
          class="three-form-container__input"
          type="text"
          placeholder="for example, John Doe"
          id="name"
          name=""
        />

        <label class="three-form-container__label" for="performerName"
          >Performer name</label
        >
        <input
          v-model="formData.performerName"
          class="three-form-container__input"
          type="text"
          placeholder="Write your performer name"
          id="performerName"
          name=""
        />

        <label class="three-form-container__label" for="number">Mobile</label>
        <input
          v-model="formData.number"
          class="three-form-container__input"
          type="text"
          placeholder="+1 000 000-00-00"
          id="number"
          name=""
        />

        <label class="three-form-container__label" for="address">Address</label>
        <input
          v-model="formData.address"
          class="three-form-container__input"
          type="text"
          placeholder="Your address"
          id="address"
          name=""
        />

        <label class="three-form-container__label" for="other">Other</label>
        <input
          v-model="formData.other"
          class="three-form-container__input"
          type="text"
          placeholder="Write who you are"
          id="other"
          name=""
        />
      </div>

      <button class="three-form__btn" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: null,
        performerName: null,
        number: null,
        address: null,
        other: null
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.three {
  display: flex;
  justify-content: center;
  align-items: center;
  .three-form {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 80px;
    margin-bottom: 75px;
    width: 431px;
    .three-form__step {
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 10px;
    }
    .three-form__title {
      text-transform: uppercase;
      font-family: "Montserrat-ExtraBold";
      font-weight: 900;
      font-size: 48px;
      letter-spacing: 0.1em;
      margin-bottom: 70px;
    }
    .three-form__label {
      padding: 47px 52px;
      border: 1px solid #c4c4c4;
      border-radius: 50%;
      margin-bottom: 40px;
    }
    .three-form__photo {
      width: 35px;
      height: 45px;
    }

    .three-form-container {
      display: flex;
      flex-direction: column;
      width: 100%;

      &__title {
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 25px;
      }

      &__label {
        font-weight: 600;
        font-size: 11px;
        color: rgba(119, 119, 119, 0.9);
      }
      &__input {
        font-weight: normal;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.4);
        margin-bottom: 35px;

        &:focus {
          border-bottom: 1px solid #5214d8;
        }
      }
    }
    .three-form__btn {
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
  }
}
</style>
