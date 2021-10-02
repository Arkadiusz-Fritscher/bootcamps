<template>
  <div>
    <label :for="inputId"><slot /></label>
    <input
      :id="inputId"
      :type="inputType"
      :name="inputName"
      class="border border-gray-400 bg-gray-100 rounded"
      v-bind="$attrs"
      :value="value"
      v-on="inputListeners"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    inputId: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      default: 'text',
    },
    inputName: {
      type: String,
      default() {
        return this.inputName ? this.inputName : this.inputId;
      },
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },

  computed: {
    inputListeners() {
      const vm = this;
      // `Object.assign` merges objects together to form a new object
      return Object.assign(
        {},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input(event) {
            vm.$emit('input', event.target.value);
          },
        }
      );
    },
  },

  methods: {
    inputValue(event) {
      this.$emit('inputValue', event.target.value.trim());
    },
  },
};
</script>

<style scoped></style>
