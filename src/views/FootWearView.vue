<template>
  <div class="container">
    <div class="card col-md-4">
      <button
        type="button"
        @click="changePo"
        class="position-absolute end-0 mt-3 me-3 border-0"
      >
        <span v-if="showPo">
          <i class="fa-regular fa-heart fs-3"></i>
        </span>
        <span v-else>
          <i class="fa-solid fa-heart fs-3"></i>
        </span>
      </button>
      <div class="card-img">
        <img src="../assets/poyabzal-img.jpg" class="card-img-top" alt="" />
      </div>
      <div class="card-body">
        <h5 class="card-title">Krossovka</h5>
        <div class="d-flex gap-4 mt-3">
          <div class="position-relative me-2">
            <button type="button" class="btn btn-danger position-absolute">
              -
            </button>
            <button
              v-on:click="subsPo"
              v-if="countPo > 0"
              type="button"
              class="btn btn-secondary position-absolute"
            >
              -
            </button>
          </div>
          <p class="bg-dark text-white px-3 rounded text-dark ms-4 fs-4">
            {{ countPo }}
          </p>
          <div class="position-relative">
            <button type="button" class="btn btn-danger position-absolute">
              +
            </button>
            <button
              v-on:click="addPo"
              v-if="countPo < 18"
              type="button"
              class="btn btn-secondary position-absolute"
            >
              +
            </button>
          </div>
        </div>
        <p class="text-success">Sotuvda 18 dona bor</p>
        <p class="fs-5 d-flex align-items-start gap-2 text-primary">
          20$ <s class="text-warning fs-6">32$</s>
          <span class="text-secondary"
            >38% chegirma <i class="fa-solid fa-hand-holding-dollar"></i
          ></span>
        </p>
        <p>
          Jami: <span class="text-primary">{{ countPo * 20 }}$</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countPo: 0,
      showPo: true,
    };
  },
  methods: {
    subsPo() {
      this.countPo -= 1;
    },
    addPo() {
      this.countPo += 1;
    },
    changePo() {
      this.showPo = !this.showPo;
    },
  },
};
</script>
