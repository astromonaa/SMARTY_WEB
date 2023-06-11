<template>
  <input :class="$style.input" v-model="value" type="text" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useDebounce } from '../hooks/useDebounce';

const value = ref('')
  defineProps({
    modelValue: String
  })
  const emit = defineEmits(['update:modelValue'])

  const debounce = useDebounce(value, 500)

  watch(debounce, newValue => emit('update:modelValue', newValue))
</script>

<style module>
.input {
  border: 1px solid lightgray;
  outline: none;
  width: 98%;
  padding: 10px;
  transition: all 0.3s;
  border-radius: 0.2em;
}
.input:focus {
  border-color: blue;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(66, 162, 236, 0.2);
  -moz-box-shadow: 0px 0px 8px 0px rgba(66, 162, 236, 0.2);
  box-shadow: 0px 0px 8px 0px rgba(66, 162, 236, 0.2);
}
</style>
