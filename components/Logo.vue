<script setup>
import { Home, Trees } from 'lucide-vue-next'
</script>

<template>
<div class="flex items-center space-x-2">
    <div class="relative">
      <Home class="w-8 h-8 text-wood-medium" />
      <Trees class="w-4 h-4 text-leaf-light absolute -bottom-1 -right-1" />
    </div>
    <span class="text-wood-light text-xl font-bold">Wood House</span>
</div>

</template>