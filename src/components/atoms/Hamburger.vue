<template lang="pug">
.hamburger
  .line(v-for="i in 3" :key="i")
</template>

<style lang="sass" scoped>
.hamburger
  @apply w-4 mr-4 cursor-pointer

$lineThickness: 0.15rem
.line
  @apply w-full bg-white
  height: $lineThickness
  & + &
    margin-top: $lineThickness
</style>
