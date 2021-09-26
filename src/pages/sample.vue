<template>
  <q-layout view="lHh Lpr fff" class="bg-grey-4">
    <q-header elevated class="bg-maroon text-white" height-hint="64">
      <q-toolbar class="GPL__toolbar" style="height: 64px">
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          class="q-mx-md"
        />

        <q-space />

        <q-input
          class="GPL__toolbar-input"
          dense
          standout="bg-amber-14"
          v-model="search"
          placeholder="Search"
        >
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
        </q-input>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="src/assets/icon/addPerson.svg" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      behavior="mobile"
      @click="leftDrawerOpen = false"
      show-if-above
      :width="220"
      :breakpoint="100"
      color="white"
    >
      <q-scroll-area class="fit">
        <q-toolbar class="GPL__toolbar" align="center">
          <q-toolbar-title class="row items-center text-grey-8">
            <div class="q-ml-sm">MENU</div>
          </q-toolbar-title>
        </q-toolbar>

        <q-list class="row justify" padding>
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
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "GooglePhotosLayout",

  setup() {
    const leftDrawerOpen = ref(false);
    const search = ref("");
    const storage = ref(0.26);

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    return {
      filter: ref(""),
      leftDrawerOpen,
      search,
      storage,
      drawer: ref(false),

      toggleLeftDrawer,
    };
  },
};
</script>

<style lang="sass">
.GPL

  &__toolbar
    height: 44px

  &__toolbar-input
    width: 35%
</style>
