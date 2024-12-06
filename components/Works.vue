<script setup>
import { ref } from 'vue'
import { Home, TreePine, Leaf, ArrowRight, Sparkles, X, Send, ArrowUpRight } from 'lucide-vue-next'

const projects = [
  {
    title: 'Maison Écologique Nantes',
    image: '/images/house1.jpg',
    backgroundImage: 'https://i.pinimg.com/736x/bd/8b/8c/bd8b8c796dfb190ecca3f22281ee237b.jpg',
    description: 'Une maison révolutionnaire construite à 90% avec des palettes recyclées, réduisant l\'empreinte carbone de 70%.',
    stats: [
      { icon: Home, value: '120m²' },
      { icon: TreePine, value: '90% Recyclé' },
      { icon: Leaf, value: '-70% CO2' }
    ],
    details: [
      'Structure 100% palette recyclée',
      'Isolation thermique de pointe',
      'Système de récupération d\'eau innovant',
      'Panneaux solaires intégrés'
    ]
  },
  {
    title: 'Villa Verte Lyon',
    image: '/images/house2.jpg',
    backgroundImage: 'https://i.pinimg.com/736x/bd/8b/8c/bd8b8c796dfb190ecca3f22281ee237b.jpg',
    description: 'Un projet innovant combinant design moderne et technologies durables, avec un système de récupération d\'eau unique.',
    stats: [
      { icon: Home, value: '180m²' },
      { icon: TreePine, value: '85% Recyclé' },
      { icon: Leaf, value: 'Zéro Déchet' }
    ],
    details: [
      'Architecture bioclimatique',
      'Système de filtration d\'eau avancé',
      'Jardin vertical intégré',
      'Éclairage LED intelligent'
    ]
  },
  {
    title: 'Habitat Futuriste Bordeaux',
    image: '/images/house3.jpg',
    backgroundImage: 'https://i.pinimg.com/736x/bd/8b/8c/bd8b8c796dfb190ecca3f22281ee237b.jpg',
    description: 'Une conception qui repousse les limites de l\'habitat écologique, intégrant des technologies intelligentes de pointe.',
    stats: [
      { icon: Home, value: '150m²' },
      { icon: TreePine, value: '95% Recyclé' },
      { icon: Leaf, value: 'Autonome' }
    ],
    details: [
      'Domotique écologique',
      'Production d\'énergie autonome',
      'Matériaux 100% biosourcés',
      'Design modulaire et évolutif'
    ]
  }
]

const selectedProject = ref(null)

const openModal = (project) => {
  selectedProject.value = project
}

const closeModal = () => {
  selectedProject.value = null
}


</script>

<template>
  <section class="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 overflow-hidden relative">
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-6xl font-bold mb-6 tracking-tight">
          Nos Réalisations 🏡
        </h2>
        <p class="text-2xl text-white/80 max-w-3xl mx-auto">
          Découvrez les maisons révolutionnaires que nous avons déjà construites, chacune unique et inspirante
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-12">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="group relative overflow-hidden rounded-3xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div class="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500 z-10"></div>
          
          <img 
            :src="project.backgroundImage" 
            :alt="project.title"
            class="w-full h-[500px] object-cover transform transition-all duration-500 group-hover:scale-110"
          />
          
          <div 
            class="absolute bottom-0 left-0 right-0 p-8 z-20 
                   transform translate-y-full group-hover:translate-y-0 
                   transition-all duration-500 bg-gradient-to-t from-black/80 to-transparent"
          >
            <h3 class="text-4xl font-bold mb-4 text-white">
              {{ project.title }}
            </h3>
            <div class="flex items-center space-x-4 mb-4">
              <div 
                v-for="(stat, statIndex) in project.stats" 
                :key="statIndex"
                class="bg-white/20 px-4 py-2 rounded-full flex items-center space-x-2"
              >
                <component :is="stat.icon" class="w-6 h-6" />
                <span>{{ stat.value }}</span>
              </div>
            </div>
            <p class="text-white/80 mb-6">
              {{ project.description }}
            </p>
            <button 
              @click="openModal(project)"
              class="bg-white text-black px-8 py-3 rounded-full 
                     flex items-center gap-3 hover:bg-opacity-90 
                     transition-all transform hover:scale-105 group"
            >
              Voir le Projet
              <ArrowRight 
                class="w-6 h-6 group-hover:translate-x-2 transition-transform" 
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Background Elements -->
    <div 
      class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 
             bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 
             animate-pulse"
    />

    <!-- Project Modal -->
    <Transition 
      enter-active-class="transition-all duration-700 ease-out"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition-all duration-700 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div 
        v-if="selectedProject"
        class="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl p-0 m-0 flex items-center justify-center"
      >
        <div 
          class="w-full h-full grid md:grid-cols-2 gap-0 relative 
                 transform transition-all duration-500"
        >
          <button 
            @click="closeModal"
            class="absolute top-8 right-8 text-white hover:rotate-90 transition-transform z-50"
          >
            <X class="w-12 h-12" />
          </button>

          <div class="relative overflow-hidden">
            <img 
              :src="selectedProject.backgroundImage" 
              :alt="selectedProject.title"
              class="w-full h-full object-cover absolute inset-0 
                     transform transition-transform duration-500 hover:scale-105"
            />
            <div 
              class="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent 
                     flex items-end p-12"
            >
              <h2 class="text-6xl font-bold text-white">
                {{ selectedProject.title }}
              </h2>
            </div>
          </div>

          <div 
            class="bg-white/10 backdrop-blur-xl p-16 flex flex-col justify-center 
                   space-y-8 overflow-y-auto max-h-full"
          >
            <div class="flex space-x-6 mb-6">
              <div 
                v-for="(stat, index) in selectedProject.stats" 
                :key="index"
                class="bg-white/20 px-6 py-4 rounded-full flex items-center space-x-4"
              >
                <component :is="stat.icon" class="w-10 h-10" />
                <span class="text-2xl font-semibold">{{ stat.value }}</span>
              </div>
            </div>

            <p class="text-3xl text-white/80 mb-8">
              {{ selectedProject.description }}
            </p>

            <div class="space-y-6">
              <div 
                v-for="(detail, index) in selectedProject.details" 
                :key="index"
                class="flex items-center space-x-6 text-2xl"
              >
                <Sparkles class="w-10 h-10 text-green-400 animate-pulse" />
                <span class="text-white">{{ detail }}</span>
              </div>
            </div>

            <div class="flex space-x-6 mt-12">
              <button 
                class="bg-white text-black px-12 py-5 rounded-full 
                       flex items-center gap-4 hover:bg-opacity-90 
                       transition-all transform hover:scale-105 group"
              >
                Contactez-nous
                <Send 
                  class="w-8 h-8 group-hover:translate-x-2 transition-transform" 
                />
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>