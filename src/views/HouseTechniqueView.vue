<template>
  <div class="container">
    <div class="card col-md-4">
      <button
        type="button"
        @click="changeCh"
        class="position-absolute end-0 mt-3 me-3 border-0"
      >
        <span v-if="showCh">
          <i class="fa-regular fa-heart fs-3"></i>
        </span>
        <span v-else>
          <i class="fa-solid fa-heart fs-3"></i>
        </span>
      </button>
      <div class="card-img">
        <img
          src="../assets/changyutgich-img.jpg"
          class="card-img-top"
          alt="..."
        />
      </div>
      <div class="card-body">
        <h5 class="card-title">Changyutgich</h5>
        <div class="d-flex gap-4 mt-3">
          <div class="position-relative me-2">
            <button type="button" class="btn btn-danger position-absolute">
              -
            </button>
            <button
              v-on:click="subsCh"
              v-if="countCh > 0"
              type="button"
              class="btn btn-secondary position-absolute"
            >
              -
            </button>
          </div>
          <p class="bg-dark text-white px-3 rounded text-dark ms-4 fs-4">
            {{ countCh }}
          </p>
          <div class="position-relative">
            <button type="button" class="btn btn-danger position-absolute">
              +
            </button>
            <button
              v-on:click="addCh"
              v-if="countCh < 4"
              type="button"
              class="btn btn-secondary position-absolute"
            >
              +
            </button>
          </div>
        </div>
        <p class="text-success">Sotuvda 4 dona bor</p>
        <p class="fs-5 d-flex align-items-start gap-2 text-primary">
          60$ <s class="text-warning fs-6">78$</s>
          <span class="text-secondary"
            >23% chegirma <i class="fa-solid fa-hand-holding-dollar"></i
          ></span>
        </p>
        <p>
          Jami: <span class="text-primary">{{ countCh * 60 }}$</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countCh: 0,
      showCh: true,
    };
  },
  methods: {
    subsCh() {
      this.countCh -= 1;
    },
    addCh() {
      this.countCh += 1;
    },
    changeCh() {
      this.showCh = !this.showCh;
    },
  },
};
</script>
