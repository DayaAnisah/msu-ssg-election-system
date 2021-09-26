<template>
  <q-layout view="lHh Lpr fff" class="bg-primary">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GPL__toolbar" style="height: 64px">
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          class="q-mx-md"
        ></q-btn>
        <q-toolbar-title v-if="$q.screen.gt.sm" shrink class="row items-center no-wrap">
          <img src="~/assets/logo.png" />
          <span class="q-ml-sm">Photos</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="100">
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
        align="center"
      >
        <div class="text-weight-bold">Anisah Dayaan</div>
        <div>201811942</div>

        <q-list class="row justify-start" padding>
          <q-item clickable v-ripple to="/prime/primeHome">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Home </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/prime/assign">
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section> Assign </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/prime/chart">
            <q-item-section avatar>
              <q-icon name="tree" />
            </q-item-section>

            <q-item-section> Chart </q-item-section>
          </q-item>

          <div class="absolute-bottom-left">
            <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>

              <q-item-section> Logout </q-item-section>
            </q-item>
          </div>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="~/assets/images/1.jpg" style="height: 150px">
        <div class="absolute-bottom bg-transparent" align="center">
          <q-avatar size="100px" class="q-mb-sm">
            <img src="~/assets/images/flower.png" />
          </q-avatar>
        </div>
      </q-img>
    </q-drawer>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const search = ref("");
    return {
      search,
      drawer: ref(false),
      toggleLeftDrawer() {
        this.leftDrawerOpen = !this.leftDrawerOpen;
      },
    };
  },
};
</script>
