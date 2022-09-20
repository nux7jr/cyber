<template>
  <div class="slide">
    <h3 class="slide__heading">Продукция</h3>
    <section class="slide__item">
      <div class="product">
        <p class="product__item product__heading product__name">3 БОМ</p>
        <p class="product__item product__size product__heading">10-50 мм</p>
        <div class="product__item product__price second_rows">
          <p class="product__info">10000</p>
          <small class="product__smalltext">Цена за тонну</small>
        </div>
        <div class="product__item product__time second_rows">
          <p class="product__info">~ 2 часа</p>
          <small class="product__smalltext">Ожидание</small>
        </div>
        <div class="product__item product__turn second_rows">
          <p class="product__info">999</p>
          <small class="product__smalltext">Очередь</small>
        </div>
      </div>
    </section>
    <section class="slide__item">
      <div class="product">
        <p class="product__item product__heading product__name">3 БОМ</p>
        <p class="product__item product__size product__heading">10-50 мм</p>
        <div class="product__item product__price second_rows">
          <p class="product__info">10000</p>
          <small class="product__smalltext">Цена за тонну</small>
        </div>
        <div class="product__item product__time second_rows">
          <p class="product__info">~ 2 часа</p>
          <small class="product__smalltext">Ожидание</small>
        </div>
        <div class="product__item product__turn second_rows">
          <p class="product__info">999</p>
          <small class="product__smalltext">Очередь</small>
        </div>
      </div>
    </section>
    <section class="slide__item">
      <div class="product">
        <p class="product__item product__heading product__name">3 БОМ</p>
        <p class="product__item product__size product__heading">10-50 мм</p>
        <div class="product__item product__price second_rows">
          <p class="product__info">10000</p>
          <small class="product__smalltext">Цена за тонну</small>
        </div>
        <div class="product__item product__time second_rows">
          <p class="product__info">~ 2 часа</p>
          <small class="product__smalltext">Ожидание</small>
        </div>
        <div class="product__item product__turn second_rows">
          <p class="product__info">999</p>
          <small class="product__smalltext">Очередь</small>
        </div>
      </div>
    </section>
    <section class="slide__item">
      <div class="product">
        <p class="product__item product__heading product__name">3 БОМ</p>
        <p class="product__item product__size product__heading">10-50 мм</p>
        <div class="product__item product__price second_rows">
          <p class="product__info">10000</p>
          <small class="product__smalltext">Цена за тонну</small>
        </div>
        <div class="product__item product__time second_rows">
          <p class="product__info">~ 2 часа</p>
          <small class="product__smalltext">Ожидание</small>
        </div>
        <div class="product__item product__turn second_rows">
          <p class="product__info">999</p>
          <small class="product__smalltext">Очередь</small>
        </div>
      </div>
    </section>
    <section class="slide__item">
      <div class="product">
        <p class="product__item product__heading product__name">3 БОМ</p>
        <p class="product__item product__size product__heading">10-50 мм</p>
        <div class="product__item product__price second_rows">
          <p class="product__info">10000</p>
          <small class="product__smalltext">Цена за тонну</small>
        </div>
        <div class="product__item product__time second_rows">
          <p class="product__info">~ 2 часа</p>
          <small class="product__smalltext">Ожидание</small>
        </div>
        <div class="product__item product__turn second_rows">
          <p class="product__info">999</p>
          <small class="product__smalltext">Очередь</small>
        </div>
      </div>
    </section>
    <section class="slide__item">
      <div class="product">
        <p class="product__item product__heading product__name">3 БОМ</p>
        <p class="product__item product__size product__heading">10-50 мм</p>
        <div class="product__item product__price second_rows">
          <p class="product__info">10000</p>
          <small class="product__smalltext">Цена за тонну</small>
        </div>
        <div class="product__item product__time second_rows">
          <p class="product__info">~ 2 часа</p>
          <small class="product__smalltext">Ожидание</small>
        </div>
        <div class="product__item product__turn second_rows">
          <p class="product__info">999</p>
          <small class="product__smalltext">Очередь</small>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "FirstSlide",
};
</script>
<style>
.slide {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.slide__heading {
  margin: 0;
}
.slide:last-child {
  margin-bottom: 80px;
}
.product {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-content: center;
  text-align: center;

  border-radius: 10px;

  background: black;
  background-image: url(../../assets/card_img.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
}
.product__item {
  margin: 0;
  padding: 10px;
  width: 100;
  height: 60px;
  align-content: center;
}
.product__name {
  font-size: large;
}
.product__heading {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.product__item:nth-child(3) {
  border-bottom-left-radius: 10px;
}
.product__item:nth-child(5) {
  border-bottom-right-radius: 10px;
}
.product__info {
  margin: 0;
  font-size: large;
}
.product__size {
  grid-column-start: 3;
}
.product__smalltext {
  color: rgb(156, 147, 147);
}
.second_rows {
  background-color: rgb(226, 216, 216);
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-self: center;
}
</style>
