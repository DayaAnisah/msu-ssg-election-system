<template>
  <div class="q-pa-md">
    <div class="font1 text-h4 absolute-top-center text-weight-bold text-dark"><br> Assigning of SSG officers<br><br></div>
      <div class="q-gutter-md row-sm" align="center">

          <div>
            <div class="text-h5 text-weight-medium text-dark">Position 1</div>
              <q-select
                filled
                v-model="model1"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                style="width: 650px; padding-bottom: 32px"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>

          <div>
            <div class="text-h5 text-weight-medium text-dark">Position 2</div>
              <q-select
                filled
                v-model="model2"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                style="width: 650px; padding-bottom: 32px"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
           </div>

          <div>
            <div class="text-h5 text-weight-medium text-dark">Position 3</div>
              <q-select
                filled
                v-model="model3"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                style="width: 650px; padding-bottom: 32px"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
          </div>

          <div>
            <div class="text-h5 text-weight-medium text-dark">Position 4</div>
              <q-select
                filled
                v-model="model4"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                style="width: 650px; padding-bottom: 32px"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
          </div>

          <div>
            <div class="text-h5 text-weight-medium text-dark">Position 5</div>
              <q-select
                filled
                v-model="model5"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                style="width: 650px; padding-bottom: 32px"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
          </div>

          <div>
            <div class="text-h5 text-weight-medium text-dark">Position 6</div>
              <q-select
                filled
                v-model="model6"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                style="width: 650px; padding-bottom: 32px"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
          </div>

          <div>
            <div class="text-h5 text-weight-medium text-dark">Position 7</div>
              <q-select
                filled
                v-model="model7"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                style="width: 650px; padding-bottom: 32px"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
          </div>

          <div>
            <div class="text-h5 text-weight-medium text-dark">Position 8</div>
              <q-select
                filled
                v-model="model8"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                style="width: 650px; padding-bottom: 32px"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
          </div>

          <div>
            <div class="text-h5 text-weight-medium text-dark">Position 9</div>
              <q-select
                filled
                v-model="model9"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                style="width: 650px; padding-bottom: 32px"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
          </div>

          <div>
            <div class="text-h5 text-weight-medium text-dark">Position 10</div>
              <q-select
                filled
                v-model="model10"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                style="width: 650px; padding-bottom: 32px"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
          </div>

          </div>
      </div>
</template>

<script>
import { ref } from 'vue'

const stringOptions = [
  'BANTUAS, Abdullah', 'BASHIER, Abdulwalie', 'SERAD, Basam', 'SOLAIMAN, Abdul Moiz', 'HADJI ALI, Nahed'
]

export default {
  setup () {
    const options = ref(stringOptions)

    return {
      model1: ref(null),
      model2: ref(null),
      model3: ref(null),
      model4: ref(null),
      model5: ref(null),
      model6: ref(null),
      model7: ref(null),
      model8: ref(null),
      model9: ref(null),
      model10: ref(null),
      options,

      filterFn (val, update, abort) {
        update(() => {
          const needle = val.toLowerCase()
          options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      }
    }
  }
}
</script>
