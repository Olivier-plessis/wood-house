<script setup>
import { ref, computed } from 'vue'
import { Home, Trees, Rocket, Zap, ArrowRight, Sparkles, Leaf } from 'lucide-vue-next'

const heroContent = {
  title: 'Wood House: Révolution Verte 🌍',
  subtitle: 'Construisons le Futur, Ensemble! 🚀',
  description: 'Une maison intelligente qui aime la planète autant que toi. 100% écolo, 200% cool! 💚',
  cta: 'Découvre Notre Concept',
  backgroundImage: 'https://images.unsplash.com/photo-1511866423212-1f95ebd1541c?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

const isHovered = ref(false)
const animationTrigger = ref(0)

const houseRotation = ref(0)
const houseTilt = ref(0)
const houseScale = ref(1)

const socialProof = [
  { icon: Leaf, text: '90% Matériaux Recyclés', color: 'green-400' },
  { icon: Zap, text: '70% Moins de CO2', color: 'yellow-400' },
  { icon: Rocket, text: 'Technologie de Pointe', color: 'blue-400' }
]

function handleMouseMove(event) {
  const rect = event.target.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  
  // Reduce the range and sensitivity of rotation
  houseRotation.value = ((x / rect.width) * 60 - 30) * 0.5
  houseTilt.value = ((y / rect.height) * 30 - 15) * 0.5
  
  // More subtle scaling
  houseScale.value = 1 + (Math.abs(houseRotation.value) / 360) * 0.1
  
}
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
      class="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 
             bg-gradient-to-br from-[#3E2723] via-[#4E342E] to-[#5D4037]"
      :style="{
        backgroundImage: `
          
          url(${heroContent.backgroundImage})
        `,
        backgroundBlendMode: 'multiply',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        filter: 'brightness(0.8) contrast(1.1) saturate(1.1)'
      }"
    />

    <!-- Warm Wood Texture Overlay -->
    <div 
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(210,180,140,0.1)_0%,_rgba(189,147,98,0.2)_100%)] 
             opacity-50 mix-blend-overlay pointer-events-none z-0"
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

      <!-- Hero Visualization Container -->
      <div 
        class="w-full h-[600px] bg-white/10 rounded-3xl backdrop-blur-sm  bg-wood-light/30
               relative overflow-hidden transform transition-transform duration-300"
        :class="{ 'rotate-3 scale-95': isHovered }"
      >
        <!-- 3D House Wireframe -->
        <div 
          class="absolute inset-0 flex items-center justify-center 
                 transform transition-transform duration-500"
          :style="{
            transform: `perspective(1000px) rotateY(${houseRotation}deg) rotateX(${houseTilt}deg) scale(${houseScale})`
          }"
        >
          <!-- Sustainable House Wireframe -->
          <svg 
            viewBox="0 0 600 400" 
            class="w-full max-w-xl"
            style="filter: drop-shadow(0 0 20px rgba(0,255,100,0.3))"
          >
            <!-- Asymmetrical Gradients -->
            <defs>
              <linearGradient id="asymHouseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#71E0E0FF;stop-opacity:0.7" />
                <stop offset="100%" style="stop-color:#8FBC8F;stop-opacity:0.5" />
              </linearGradient>
              
              <linearGradient id="solarPanelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#3498db;stop-opacity:0.6" />
                <stop offset="100%" style="stop-color:#F6F6F6FF;stop-opacity:0.4" />
              </linearGradient>
            </defs>
            
            <!-- Asymmetrical Main Structure -->
            <path 
              d="M100 300 L250 180 L400 250 L500 300 Z" 
              fill="url(#asymHouseGradient)" 
              stroke="url(#asymHouseGradient)"
              stroke-width="3" 
              class="animate-pulse-slow"
            />
            <path 
              d="M100 300 L100 220 L250 100 L400 180 L500 220 L500 300" 
              fill="url(#asymHouseGradient)" 
              stroke="url(#asymHouseGradient)"
              stroke-width="3" 
              class="animate-pulse-slow"
            />
            
            <!-- Asymmetrical Solar Panels -->
            <rect 
              x="250" y="120" width="150" height="60" 
              rx="10" ry="10"
              transform="rotate(-15)"
              fill="url(#solarPanelGradient)" 
              stroke="url(#solarPanelGradient)"
              stroke-width="2" 
              class="animate-solar-panel"
            />
            
            <!-- Asymmetrical Wind Turbine -->
            <g transform="translate(450, 130) rotate(20)">
              <line 
                x1="0" y1="0" x2="0" y2="40" 
                stroke="#3498db" 
                stroke-width="2" 
              />
              <path 
                d="M-15 0 L0 -25 L15 0 Z" 
                fill="#2ecc71"
                class="origin-center animate-wind-turbine"
              />
            </g>
            
            <!-- Asymmetrical Recycled Materials Indicators -->
            <circle 
              cx="180" cy="250" r="8" 
              fill="#e74c3c"
              class="animate-ping opacity-50"
            />
            <circle 
              cx="420" cy="280" r="10" 
              fill="#f39c12"
              class="animate-ping opacity-50"
            />
            
            <!-- Additional Asymmetrical Elements -->
            <path 
              d="M50 320 L80 290 L110 320" 
              fill="none"
              stroke="#16a085"
              stroke-width="3"
              class="animate-pulse-slow opacity-50"
            />
            <path 
              d="M520 310 L550 280 L580 310" 
              fill="none"
              stroke="#e67e22"
              stroke-width="3"
              class="animate-pulse-slow opacity-50"
            />
          </svg>
        </div>
        
        <!-- Interactive Hover Zones -->
        <div 
          class="absolute inset-0 z-10"
          @mousemove="handleMouseMove"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
        />
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
