<template>
  <div class="jobs">
    <h1 class="job__heading">Работа в Сибугле</h1>
    <div class="resume">
      <div class="resume__info">
        <h3 class="resume__heading">Отправить резюме</h3>
        <small class="resume__text">Будет доставлено в отдел кадров</small>
      </div>
      <div class="resume-input__wrapper">
        <label class="resume-input__label" for="inputResume">
          <img
            class="resume-input__img"
            src="../assets/addfile.png"
            alt="addfile"
          />
          <p class="resume-input__text">Выбрать файл</p>
          <input
            class="resume-input"
            id="inputResume"
            type="file"
            name="resume"
            ref="file"
            v-on:change="handleFileUpload()"
          />
          <div class="file">
            <p class="file__name">{{ file }}</p>
          </div>
          <span id="fileName"></span>
        </label>
        <button v-on:click="submitFile()" class="resume__button" type="submit">
          Отправить файл
        </button>
        <p v-show="successSentResume" class="success-info">Резюме отправлено</p>
      </div>
    </div>
    <div class="questionnaire">
      <div class="questionnaire__info">
        <h3 class="questionnaire__heading">
          Заполните анкету, если нет резюме
        </h3>
        <small class="questionnaire__text">Анкета для приема на работу</small>
      </div>
      <form @submit.prevent="submitQuestionnaire" class="questionnaire-input">
        <input
          v-model="userFormData.name"
          class="questionnaire-input__name questionnaire-input__item"
          type="text"
          name="name"
          id=""
          placeholder="Ваше имя"
          required
        />
        <input
          v-model="userFormData.position"
          class="questionnaire-input__position questionnaire-input__item"
          type="text"
          name="position"
          id=""
          placeholder="Желаемая должность"
          required
        />
        <input
          v-model="userFormData.phone"
          class="questionnaire-input__number questionnaire-input__item"
          type="tel"
          name="number"
          id=""
          placeholder="Номер телефона"
          required
        />
        <button class="questionnaire__button" type="submit">
          Отправить анкету
        </button>
        <p v-show="successSentQuestionnaire" class="success-info">
          Анкета отправлена
        </p>
      </form>
    </div>
    <div class="job-info">
      <h3 class="job-info__heading">Дополнительная информация</h3>
      <a class="job-info__link" href="https://vk.com/sibugol_official"></a>
    </div>
  </div>
</template>

<script>
import axios from "@/axios/axios.js";
export default {
  name: "JobsView",
  data() {
    return {
      successSentResume: false,
      successSentQuestionnaire: false,
      file: "",
      userFormData: {
        name: "",
        position: "",
        phone: "",
      },
    };
  },
  created() {},
  methods: {
    submitFile() {
      let formData = new FormData();
      formData.append("file", this.file);

      axios
        .post("api/files", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          console.log("SUCCESS!!");
          this.successSentResume = true;
        })
        .catch(() => {
          console.log("Error!!");
        });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    submitQuestionnaire() {
      axios
        .post("api/resumes", {
          data: {
            name: this.userFormData.name,
            position: this.userFormData.position,
            phone: this.userFormData.phone,
          },
        })
        .then(() => {
          console.log("SUCCESS!!");
          this.successSentQuestionnaire = true;
        })
        .catch(() => {
          console.log("Error!!");
        });
    },
  },
};
</script>

<style scoped>
.jobs {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.jobs:last-child {
  margin-bottom: 80px;
}
.job__heading {
  margin: 10px 0 0 0;
}
/* resume */
.resume {
  border: 2px solid #f6f6f6;
  border-radius: 12px;
}
.resume__info {
  margin: 15px;
}
.resume__heading {
  margin: 0 0 5px 0;
}
.resume__text {
  color: #5d656c;
}
.resume-input {
  display: none;
}
.resume-input__label {
  cursor: pointer;

  border: #d6cfcf dashed 4px;

  border-radius: 15px;
  display: block;
  height: 300px;
  position: relative;
}
.resume-input__wrapper {
  margin: 15px;
}
.resume-input__text {
  position: absolute;
  top: 150px;
  left: calc(50% - 60px);
  color: #18222c;
  font-weight: 600;
}
.resume-input__img {
  position: absolute;
  top: 100px;
  left: calc(50% - 29px);
  width: 50px;
  height: 50px;
}
.resume__button {
  border-radius: 18px;
  background-color: #ffbe37;
  border-color: transparent;
  color: #18222c;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 16px;

  display: block;
  padding: 16px 12px;
  width: 100%;
  margin: 15px auto;
  cursor: pointer;
}
.file {
  position: absolute;
  top: 180px;
  left: calc(50% - 43px);
}
/* questionnaire */
.questionnaire {
  border: 2px solid #f6f6f6;
  border-radius: 12px;
}
.questionnaire__info {
  margin: 15px;
}
.questionnaire__text {
  color: #5d656c;
}
.questionnaire__heading {
  margin: 0 0 5px 0;
}
.questionnaire-input {
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: 15px;
}
.questionnaire-input__item {
  padding: 15px;

  border: none;
  background-color: #fafafa;
  border-radius: 15px;
}
.questionnaire__button {
  border-radius: 18px;
  background-color: #ffbe37;
  border-color: transparent;
  color: #18222c;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 16px;

  display: block;
  padding: 16px 12px;
  width: 100%;
  margin: 15px auto;
  cursor: pointer;
}
.success-info {
  color: green;
}
/* job info */
.job-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  border: 2px solid #f6f6f6;
  border-radius: 12px;
}
.job-info__heading {
  width: 200px;
  margin-left: 15px;
}
.job-info__link {
  display: block;
  background-color: #ffbe37;
  background-image: url(../assets/morebtn.png);
  background-repeat: no-repeat;
  height: 44px;
  width: 44px;
  margin: 15px;
  border-radius: 18px;
}
</style>
