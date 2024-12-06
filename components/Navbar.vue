<script setup>
import { ref } from 'vue'

const navItems = [
  { name: 'Accueil', href: '#' },
  { name: 'Concept', href: '#features' },
  { name: 'Réalisation', href: '#about' },
  { name: 'Contact', href: '#contact' }
]

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

</script>

<template>
 <nav class="absolute top-0 left-0 right-0 z-20">
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between py-6">
          <Logo />
          <div class="hidden md:flex items-center space-x-8">
            <a 
            v-for="item in navItems" 
            :key="item.name"
            :href="item.href"
            class="text-white hover:text-green-400 transition-colors"
          >
            {{ item.name }}
          </a>
          </div>
          
          <button 
            @click="toggleMobileMenu"
            class="md:hidden text-white focus:outline-none"
          >
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
           <!-- Mobile Menu Toggle -->
       
    </div>
    
      
      
      <!-- Mobile Menu Dropdown -->
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden absolute top-full left-0 w-full bg-white/20 backdrop-blur-md"
      >
        <div class="container mx-auto px-4 py-4">
          <div class="flex flex-col space-y-4">
            <a 
              v-for="item in navItems" 
              :key="item.name"
              :href="item.href"
              class="text-white hover:text-blue-200 transition duration-300 font-medium text-center"
            >
              {{ item.name }}
            </a>
            <button class="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition duration-300 w-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
</template>    