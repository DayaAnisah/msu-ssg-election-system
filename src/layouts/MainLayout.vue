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

        <q-toolbar-title>SSG Election</q-toolbar-title>

        <div class="q-gutter-sm row items-center no-wrap">
          <q-tooltip>Account</q-tooltip>
          <q-btn-dropdown round flat dropdown-icon="person">
            <div align="center">
              <q-avatar size="50px">
                <img src="~assets/images/flower.png" />
              </q-avatar>
              <div class="text-weight-bold">Anisah Dayaan</div>
              <div>201811942</div>
            </div>
          </q-btn-dropdown>
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
        <q-toolbar class="GPL__toolbar">
          <q-toolbar-title class="row items-center text-grey-8">
            <div class="q-ml-sm absolute-center">MENU</div>
          </q-toolbar-title>
        </q-toolbar>

        <q-list padding>
          <q-item clickable v-ripple to="/prime/P_Homepage">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Home </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/prime/P_Election">
            <q-item-section avatar>
              <q-icon name="people" />
            </q-item-section>

            <q-item-section> Assign </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/prime/P_Official">
            <q-item-section avatar>
              <q-icon name="check" />
            </q-item-section>

            <q-item-section> Chart </q-item-section>
          </q-item>

          <q-separator />

          <div class="absolute-bottom">
            <q-item clickable v-ripple to="/" absolute-bottom>
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
import { ref } from 'vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const search = ref('');

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    return {
      filter: ref(''),
      leftDrawerOpen,
      search,
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
