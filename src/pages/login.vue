<template>
  <div class="row">
    <section id="carousel" class="column">
      <div class="q-pa-md">
        <h3>Live Election Results</h3>
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide :name="1" img-src="../assets/images/1.jpg" />
          <q-carousel-slide :name="2" img-src="../assets/images/2.jpg" />
          <q-carousel-slide :name="3" img-src="../assets/images/3.jpg" />
          <q-carousel-slide :name="4" img-src="../assets/images/4.jpg" />
        </q-carousel>
      </div>
    </section>

    <section id="login" class="column">
      <div class="q-pa-md" style="max-width: 400px">
        <br /><br />
        <div class="font1 text-h1">SSG</div>
        <div class="font2 text-h4">Election</div>
        <br /><br /><br />
        <q-form @submit="onSubmit" @reset="onClear" class="q-gutter-md">
          <q-btn-dropdown color="primary" label="Voter or Admin">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Admin</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator></q-separator>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Voter</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-input color="primary" filled v-model="username" label="Username">
            <template v-slot:append>
              <q-icon name="person" />
            </template>
          </q-input>
          <q-input
            color="primary"
            filled
            v-model="password"
            label="Password"
            :type="isPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div>
            <q-btn clickable v-ripple to="/home" label="Login" color="primary"></q-btn>
            <q-btn
              label="Clear"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            ></q-btn>
          </div>
        </q-form>
        <div class="text-center text-weight-medium text-primary absolute-center-right">
          <br><br><br>
          *To register your account and retrieve the password, proceed
          to Division of Student Affairs, Alonto Hall, MSU Marawi Campus.
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "MainLayout",
  setup() {
    const username = ref(null);
    const password = ref(null);
    const accept = ref(false);
    return {
      slide: ref(1),
      isPwd: ref(true),
      username,
      password,
      autoplay: ref(true),

      // onSubmit() {
      //   $q.ref({
      //     color: 'green-4',
      //     textColor: 'white',
      //     icon: 'cloud_done',
      //     message: 'Submitted',
      //   });
      // },

      onClear() {
        username.value = null;
        password.value = null;
        accept.value = false;
      },
      onItemClick() {
        // console.log('Clicked on an Item')
      },
    };
  },
});
</script>
