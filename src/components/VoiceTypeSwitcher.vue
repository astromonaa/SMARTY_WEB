<template>
  <div :class="$style['voice-type-switcher']">
    <button
      :class="{[$style.active]: sex === 'female'}"
      @click="$emit('setSex', 'female')"
    >Женские</button>
    <button
      :class="{[$style.active]: sex === 'male'}"
      @click="$emit('setSex', 'male')"
    >Мужские</button>
  </div>
</template>

<script setup lang="ts">

defineProps({
  sex: String
})
</script>

<style module>
  .voice-type-switcher {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    border-bottom: 1px solid lightgray;
    width: 100%;
  }
  .voice-type-switcher button {
    border: 1px solid lightgray;
    outline: none;
    padding: 10px;
  }
  .active {
    background-color: rgb(79, 79, 240);
    color: #fff;
    border: none;
  }
</style>