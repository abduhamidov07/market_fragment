<template>
  <div class="container">
    <div class="card col-md-4">
      <button
        type="button"
        @click="changeFu"
        class="position-absolute end-0 mt-3 me-3 border-0"
      >
        <span v-if="showFu">
          <i class="fa-regular fa-heart fs-3"></i>
        </span>
        <span v-else>
          <i class="fa-solid fa-heart fs-3"></i>
        </span>
      </button>
      <div class="card-img">
        <img src="../assets/futbolka-img.jpg" class="card-img-top" alt="..." />
      </div>
      <div class="card-body">
        <h5 class="card-title">Futbolka</h5>
        <div class="d-flex gap-4 mt-3">
          <div class="position-relative me-2">
            <button type="button" class="btn btn-danger position-absolute">
              -
            </button>
            <button
              v-on:click="subsFu"
              v-if="countFu > 0"
              type="button"
              class="btn btn-secondary position-absolute"
            >
              -
            </button>
          </div>
          <p class="bg-dark text-white px-3 rounded text-dark ms-4 fs-4">
            {{ countFu }}
          </p>
          <div class="position-relative">
            <button type="button" class="btn btn-danger position-absolute">
              +
            </button>
            <button
              v-on:click="addFu"
              v-if="countFu < 12"
              type="button"
              class="btn btn-secondary position-absolute"
            >
              +
            </button>
          </div>
        </div>
        <p class="text-success">Sotuvda 12 dona bor</p>
        <p class="fs-5 d-flex align-items-start gap-2 text-primary">
          7$ <s class="text-warning fs-6">12$</s>
          <span class="text-secondary"
            >42% chegirma <i class="fa-solid fa-hand-holding-dollar"></i
          ></span>
        </p>
        <p>
          Jami: <span class="text-primary">{{ countFu * 7 }}$</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countFu: 0,
      showFu: true,
    };
  },
  methods: {
    subsFu() {
      this.countFu -= 1;
    },
    addFu() {
      this.countFu += 1;
    },
    changeFu() {
      this.showFu = !this.showFu;
    },
  },
};
</script>
