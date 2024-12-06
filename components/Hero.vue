<script setup>
import { ref, computed } from 'vue'
import { Home, Trees, Rocket, Zap, ArrowRight, Sparkles, Leaf } from 'lucide-vue-next'

const heroContent = {
  title: 'Wood House: Révolution Verte 🌍',
  subtitle: 'Construisons le Futur, Ensemble! 🚀',
  description: 'Une maison intelligente qui aime la planète autant que toi. 100% écolo, 200% cool! 💚',
  cta: 'Découvre Notre Concept',
  backgroundImage: 'https://i.pinimg.com/736x/bd/8b/8c/bd8b8c796dfb190ecca3f22281ee237b.jpg'
}

const isHovered = ref(false)
const animationTrigger = ref(0)

const socialProof = [
  { icon: Leaf, text: '90% Matériaux Recyclés', color: 'green-400' },
  { icon: Zap, text: '70% Moins de CO2', color: 'yellow-400' },
  { icon: Rocket, text: 'Technologie de Pointe', color: 'blue-400' }
]
</script>

<template>
  <section 
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <Navbar />
    <!-- Animated Background -->
    <div 
      class="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700"
      :style="{
        backgroundImage: `url(${heroContent.backgroundImage})`,
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        filter: 'brightness(0.6)'
      }"
    />

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />

    <!-- Content Container -->
    <div class="relative z-20 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <!-- Hero Text -->
      <div class="text-white space-y-6">
        <div 
          class="transform transition-transform duration-300"
          :class="{ 'scale-105': isHovered }"
        >
          <h1 
            class="text-6xl font-bold mb-4 tracking-tight leading-tight"
            :class="{ 'animate-pulse': isHovered }"
          >
            {{ heroContent.title }}
          </h1>
          <h2 
            class="text-4xl font-semibold mb-6 text-white/80 italic transform transition-transform duration-300"
            :class="{ 'translate-x-4': isHovered }"
          >
            {{ heroContent.subtitle }}
          </h2>
        </div>

        <p 
          class="text-xl mb-8 text-white/90 max-w-xl transform transition-all duration-300"
          :class="{ 'translate-y-2': isHovered }"
        >
          {{ heroContent.description }}
        </p>

        <!-- Social Proof -->
        <div class="flex space-x-6 mb-8">
          <div 
            v-for="(proof, index) in socialProof" 
            :key="index"
            class="flex items-center bg-white/20 p-4 rounded-xl transform transition-transform hover:scale-105"
          >
            <component 
              :is="proof.icon" 
              :class="`w-10 h-10 mr-3 text-${proof.color} animate-bounce`" 
            />
            <span class="text-white font-medium">{{ proof.text }}</span>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="flex items-center space-x-6">
          <button 
            class="bg-gradient-to-r from-green-600 to-emerald-700 text-white 
                   px-10 py-4 rounded-full flex items-center gap-3 
                   hover:from-green-700 hover:to-emerald-800 
                   transition-all transform hover:scale-105 
                   shadow-lg hover:shadow-xl group"
          >
            {{ heroContent.cta }}
            <ArrowRight 
              class="w-6 h-6 group-hover:translate-x-2 transition-transform animate-bounce" 
            />
          </button>

          <a 
            href="#concept" 
            class="text-white underline hover:text-green-300 transition-colors flex items-center"
          >
            En Savoir Plus
            <Sparkles class="w-5 h-5 ml-2 text-yellow-400 animate-pulse" />
          </a>
        </div>
      </div>

      <!-- Hero Image Placeholder -->
      <div class="hidden md:block relative">
        <div 
          class="w-full h-[600px] bg-white/10 rounded-3xl backdrop-blur-sm 
                 transform transition-transform duration-300"
          :class="{ 'rotate-3 scale-95': isHovered }"
        >
        <div class="w-full h-full no-3d bg-cover bg-center"  :style="{
        backgroundImage: `url(${heroContent.backgroundImage})`,
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        filter: 'brightness(0.6)'
        
      }" >
          </div>
          <!-- Potential 3D or animated illustration could go here -->
          <div class="absolute inset-0 flex items-center justify-center opacity-30">
            
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
</style>
