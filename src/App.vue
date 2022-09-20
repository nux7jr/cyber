<template>
  <div id="app">
    <nav>
      <div class="nav__item">
        <router-link class="nav__link" to="/">
          <p class="nav__text">
            <img class="nav__img" src="@/assets/nav/main.png" />Главная
          </p>
        </router-link>
      </div>
      <div class="nav__item">
        <router-link class="nav__link" to="/about">
          <p class="nav__text">
            <img class="nav__img" src="@/assets/nav/about.png" />Справочник
          </p>
        </router-link>
      </div>
      <div class="nav__item">
        <router-link class="nav__link" to="/about">
          <p class="nav__text">
            <img class="nav__img" src="@/assets/nav/list.png" />Лента
          </p>
        </router-link>
      </div>
      <div class="nav__item">
        <router-link class="nav__link" to="/about">
          <p class="nav__text">
            <img class="nav__img" src="@/assets/nav/adress.png" />Контакты
          </p>
        </router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 15px;
}
nav {
  display: flex;
  justify-content: space-evenly;

  position: fixed;
  bottom: 5px;
  left: calc(50% - 150px);

  width: 300px;

  background-color: #ffffff;
  border-radius: 20px;
}
.nav__text {
  display: flex;
  gap: 6px;
  flex-direction: column;
  justify-content: center;

  color: rgb(71, 68, 68);

  font-size: small;
}
.nav__img {
  width: 30px;
  margin: 0 auto;
}
body {
  padding: 0;
  margin: 0;
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
  height: auto;
}
</style>
