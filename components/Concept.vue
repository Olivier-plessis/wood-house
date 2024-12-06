<script setup>
import { ref, computed } from 'vue'
import { Leaf, Smartphone, Rocket, Zap, ArrowRight, Sparkles, Shield, Globe, Recycle } from 'lucide-vue-next'

const features = [
  {
    icon: Leaf,
    color: 'green',
    title: 'Éco-Warrior Mode',
    tagline: 'Planète Sauvée, Mission Accomplie! 🌍',
    background: 'bg-gradient-to-br from-green-400 to-emerald-600',
    stats: [
      { value: '90%', label: 'Matériaux Recyclés', icon: Recycle },
      { value: '-70%', label: 'Émissions CO2', icon: Globe },
      { value: '50%', label: 'Économies Énergie', icon: Zap }
    ],
    details: [
      'Chaque palette transformée est une victoire pour la planète 🌱',
      'Votre maison, votre arme contre le changement climatique 🚀',
      'Technologie verte qui fait la différence 💚'
    ]
  },
  {
    icon: Smartphone,
    color: 'blue',
    title: 'Tech Ninja Home',
    tagline: 'Intelligence Domestique Ultime! 🤖',
    background: 'bg-gradient-to-br from-blue-400 to-indigo-600',
    stats: [
      { value: '24/7', label: 'Sécurité Intelligente', icon: Shield },
      { value: '100%', label: 'Contrôle Mobile', icon: Smartphone },
      { value: '+30%', label: 'Efficacité Énergétique', icon: Zap }
    ],
    details: [
      'Votre maison, plus intelligente que votre cerveau 🧠',
      'Domotique qui anticipe vos moindres désirs 🔮',
      'Technologie qui vous fait gagner du temps ⚡'
    ]
  }
]

const activeFeature = ref(features[0])
const isExpanded = ref(false)

const switchFeature = (feature) => {
  activeFeature.value = feature
  isExpanded.value = false
}
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden p-8">
    <!-- Animated Background -->
    <div 
      class="absolute inset-0 z-0 opacity-50"
      :class="activeFeature.background"
      :style="{
        transition: 'background-color 2.5s ease-in-out, opacity 0.5s ease-in-out'
      }"
    />

    <div class="relative z-10 container mx-auto max-w-6xl">
      <div class="text-center mb-16">
        <h2 class="text-6xl font-bold text-white mb-4 tracking-tight">
          Notre Concept Révolutionnaire 🚀
        </h2>
        <p class="text-2xl text-white/80 max-w-3xl mx-auto">
          Découvrez comment Wood House transforme l'habitat avec une technologie verte et intelligente
        </p>
      </div>

      <!-- Feature Selector -->
      <div class="flex justify-center mb-12 space-x-6">
        <div 
          v-for="feature in features" 
          :key="feature.title"
          @click="switchFeature(feature)"
          class="cursor-pointer transform transition-all duration-300 
                 hover:scale-110 relative group"
          :class="{
            'scale-125': activeFeature === feature,
            'opacity-60 hover:opacity-100': activeFeature !== feature
          }"
        >
          <div 
            class="w-32 h-32 rounded-full flex items-center justify-center 
                   shadow-2xl transition-all duration-300 relative overflow-hidden
                   border-4 group-hover:border-white/50"
            :class="[
              activeFeature === feature 
                ? `bg-white text-${feature.color}-600 border-white` 
                : `bg-white/20 text-white border-transparent`
            ]"
          >
            <div 
              class="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-40 transition-all duration-300"
              :class="[
                activeFeature === feature 
                  ? `from-${feature.color}-400 to-${feature.color}-600` 
                  : 'from-gray-500 to-gray-700'
              ]"
            />
            <component 
              :is="feature.icon" 
              class="w-16 h-16 z-10 relative animate-pulse group-hover:animate-none"
            />
          </div>
          
        
        </div>
      </div>

      <!-- Feature Content -->
      <div 
        class="bg-white/20 backdrop-blur-xl rounded-3xl p-12 text-white 
               grid md:grid-cols-2 gap-12 transform transition-all duration-500"
      >
        <!-- Left Side: Details -->
        <div>
          <h2 class="text-5xl font-bold mb-4 tracking-tight">
            {{ activeFeature.title }}
          </h2>
          <p class="text-3xl mb-6 italic text-white/80">
            {{ activeFeature.tagline }}
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 mb-8">
            <div 
              v-for="(stat, index) in activeFeature.stats" 
              :key="index"
              class="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-all"
            >
              <component 
                :is="stat.icon" 
                class="w-10 h-10 mx-auto mb-2 text-white/70"
              />
              <div class="text-3xl font-bold">{{ stat.value }}</div>
              <div class="text-sm uppercase tracking-wide">{{ stat.label }}</div>
            </div>
          </div>

          <!-- Details -->
          <ul class="space-y-4 mb-8">
            <li 
              v-for="(detail, index) in activeFeature.details" 
              :key="index"
              class="flex items-center text-xl transform transition-transform hover:translate-x-4"
            >
              <Sparkles class="w-6 h-6 mr-4 text-yellow-400 animate-pulse" />
              {{ detail }}
            </li>
          </ul>

          <!-- CTA Button -->
          <button 
            class="bg-white text-black px-10 py-4 rounded-full 
                   flex items-center gap-3 hover:bg-opacity-90 
                   transition-all transform hover:scale-105 group"
          >
            En Savoir Plus
            <ArrowRight 
              class="w-6 h-6 group-hover:translate-x-2 transition-transform" 
            />
          </button>
        </div>

        <!-- Right Side: Interactive Visual -->
        <div class="hidden md:block relative">
          <div 
            class="w-full h-full bg-white/10 rounded-3xl 
                   flex items-center justify-center 
                   transform transition-transform duration-500"
          >
            <div 
              class="w-64 h-64 rounded-full bg-white/20 
                     flex items-center justify-center 
                     animate-spin-slow"
            >
              <div 
                class="w-48 h-48 rounded-full bg-white/30 
                       flex items-center justify-center"
              >
                <component 
                  :is="activeFeature.icon" 
                  class="w-24 h-24 text-white/80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
</style>
