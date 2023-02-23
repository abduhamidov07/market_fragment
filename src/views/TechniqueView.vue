<template>
  <div class="container">
    <div class="card col-md-4">
      <button
        type="button"
        @click="changeTv"
        class="position-absolute end-0 mt-3 me-3 border-0"
      >
        <span v-if="showTv">
          <i class="fa-regular fa-heart fs-3"></i>
        </span>
        <span v-else>
          <i class="fa-solid fa-heart fs-3"></i>
        </span>
      </button>
      <div class="card-img">
        <img src="../assets/tv-img.jpg" class="card-img-top" alt="tv-img" />
      </div>
      <div class="card-body">
        <h5 class="card-title">Televizor</h5>
        <div class="d-flex gap-4 mt-3">
          <div class="position-relative me-2">
            <button type="button" class="btn btn-danger position-absolute">
              -
            </button>
            <button
              v-on:click="subsTv"
              v-if="countTv > 0"
              type="button"
              class="btn btn-secondary position-absolute"
            >
              -
            </button>
          </div>
          <p class="bg-dark text-white px-3 rounded text-dark ms-4 fs-4">
            {{ countTv }}
          </p>
          <div class="position-relative">
            <button type="button" class="btn btn-danger position-absolute">
              +
            </button>
            <button
              v-on:click="addTv"
              v-if="countTv < 6"
              type="button"
              class="btn btn-secondary position-absolute"
            >
              +
            </button>
          </div>
        </div>
        <p class="text-success">Sotuvda 6 dona bor</p>
        <p class="fs-5 d-flex align-items-start gap-2 text-primary">
          200$ <s class="text-warning fs-6">270$</s>
          <span class="text-secondary"
            >26% chegirma <i class="fa-solid fa-hand-holding-dollar"></i
          ></span>
        </p>
        <p>
          Jami: <span class="text-primary">{{ countTv * 200 }}$</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countTv: 0,
      showTv: true,
    };
  },
  methods: {
    subsTv() {
      this.countTv -= 1;
    },
    addTv() {
      this.countTv += 1;
    },
    changeTv() {
      this.showTv = !this.showTv;
    },
  },
};
</script>
