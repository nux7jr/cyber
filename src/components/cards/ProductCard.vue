<template>
  <div class="card">
    <div class="card__wrapper">
      <section class="card__item">
        <h3 class="card__heading">Продукция</h3>
        <div v-for="item in productsInfo" v-bind:key="item.id" class="product">
          <p class="product__item product__heading product__name">
            {{ item.title }}
          </p>
          <p class="product__item product__size product__heading">
            {{ item.sizeFrom }}-{{ item.sizeTo }} мм
          </p>
          <div class="product__item product__price second_rows">
            <p class="product__info">{{ item.price }} ₽</p>
            <small class="product__smalltext">Цена за тонну</small>
          </div>
          <div class="product__item product__time second_rows">
            <p class="product__info">~ {{ item.expectation }} мин</p>
            <small class="product__smalltext">Ожидание</small>
          </div>
          <div class="product__item product__turn second_rows">
            <p class="product__info">{{ item.queue }}</p>
            <small class="product__smalltext">Очередь</small>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    productsInfo: {
      default: () => [],
      type: Array,
    },
  },
};
</script>
<style>
.card {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.card__item {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.card__heading {
  margin: 0;
}
.card:last-child {
  margin-bottom: 80px;
}
.product {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-content: center;
  text-align: center;

  border-radius: 15px;

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
  background-color: #e6e0e0;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-self: center;
}
</style>
