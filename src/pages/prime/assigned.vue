<template>
  <q-list bordered class="rounded-borders justify-center" style="max-width: 1000px">
    <div class="row justify-left">
      <div class="q-pa-md" style="width: 400px">
        <div class="col-50" align="center">Prime Minister</div>
        <div class="q-pa-md">
          <q-option-group :options="prime" type="radio" v-model="group" />
        </div>
      </div>

      <div class="q-pa-md" style="width: 500px">
        <div class="col" align="center">Secretary General</div>
        <div class="q-pa-md">
          <q-option-group :options="secretary" type="radio" v-model="group2" />
        </div>
      </div>
    </div>
  </q-list>

  <div>
    <br />
    <q-btn
      class="absolute-bottom-left"
      label="Submit"
      type="submit"
      color="primary"
    ></q-btn>
  </div>
  <q-card v-if="submitResult.length > 0" flat bordered class="q-mt-md bg-grey-2">
    <q-card-section
      >Submitted form contains the following formData (key = value):</q-card-section
    >
    <q-separator />
    <q-card-section class="row q-gutter-sm items-center">
      <div
        v-for="(item, index) in submitResult"
        :key="index"
        class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
      >
        {{ item.name }} = {{ item.value }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const submitResult = ref([]);
    return {
      group: ref(null),
      group2: ref(null),
      prime: [
        { label: "ABDULBASIT, Arifah U.", value: "College of Engineering", color: "red" },
        { label: "DAYAAN, Anisah I.", value: "College of Education", color: "red" },
        {
          label: "OMAR, Najmah",
          value: "College of Information Technology",
          color: "red",
        },
      ],
      secretary: [
        { label: "DAYAAN, Anisah I.", value: "College of Education", color: "red" },
        {
          label: "OMAR, Najmah",
          value: "College of Information Technology",
          color: "red",
        },
      ],

      shape: ref("line"),
      submitResult,

      onSubmit(evt) {
        const formData = new FormData(evt.target);
        const data = [];

        for (const [name, value] of formData.entries()) {
          data.push({
            name,
            value,
          });
        }

        submitResult.value = data;
      },
    };
  },
};
</script>
