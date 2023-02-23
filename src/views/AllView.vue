<template>
  <main class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4 total">
      <div class="col">
        <div class="card">
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
      <div class="col">
        <div class="card">
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
      <div class="col">
        <div class="card">
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
      <div class="col">
        <div class="card">
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
            <img
              src="../assets/futbolka-img.jpg"
              class="card-img-top"
              alt="..."
            />
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
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      countTv: 0,
      countCh: 0,
      countPo: 0,
      countFu: 0,
      showTv: true,
      showCh: true,
      showPo: true,
      showFu: true,
    };
  },
  methods: {
    subsTv() {
      this.countTv -= 1;
    },
    addTv() {
      this.countTv += 1;
    },
    subsCh() {
      this.countCh -= 1;
    },
    addCh() {
      this.countCh += 1;
    },
    subsPo() {
      this.countPo -= 1;
    },
    addPo() {
      this.countPo += 1;
    },
    subsFu() {
      this.countFu -= 1;
    },
    addFu() {
      this.countFu += 1;
    },
    changeTv() {
      this.showTv = !this.showTv;
    },
    changeCh() {
      this.showCh = !this.showCh;
    },
    changePo() {
      this.showPo = !this.showPo;
    },
    changeFu() {
      this.showFu = !this.showFu;
    },
  },
};
</script>

<style scoped>
.card {
  margin: 0;
}
.total {
  margin: 60px 0 25px;
}
</style>
