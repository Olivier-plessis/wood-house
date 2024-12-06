<template>
  <section class="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
    <div class="container mx-auto px-4 grid md:grid-cols-2 gap-16">
      <!-- Contact Form -->
      <div>
        <h2 class="text-5xl font-bold mb-8">Contactez-nous 📧</h2>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <input 
              v-model="name" 
              type="text" 
              placeholder="Votre Nom" 
              required
              class="w-full bg-white/10 backdrop-blur-xl px-6 py-4 rounded-full border border-white/20 focus:border-white/50 transition-all"
            />
            <input 
              v-model="email" 
              type="email" 
              placeholder="Votre Email" 
              required
              class="w-full bg-white/10 backdrop-blur-xl px-6 py-4 rounded-full border border-white/20 focus:border-white/50 transition-all"
            />
          </div>
          <input 
            v-model="subject" 
            type="text" 
            placeholder="Sujet" 
            required
            class="w-full bg-white/10 backdrop-blur-xl px-6 py-4 rounded-full border border-white/20 focus:border-white/50 transition-all"
          />
          <textarea 
            v-model="message" 
            placeholder="Votre Message" 
            required
            rows="6"
            class="w-full bg-white/10 backdrop-blur-xl px-6 py-4 rounded-3xl border border-white/20 focus:border-white/50 transition-all"
          ></textarea>
          <button 
            type="submit"
            class="w-full bg-white text-black px-12 py-5 rounded-full 
                   flex items-center justify-center gap-4 
                   hover:bg-opacity-90 transition-all transform hover:scale-105 group"
          >
            Envoyer le Message
            <Send 
              class="w-6 h-6 group-hover:translate-x-2 transition-transform" 
            />
          </button>
        </form>
        
        <!-- Funny Disclaimer -->
        <div 
          class="mt-8 bg-yellow-100/10 border border-yellow-500/30 p-6 rounded-3xl 
                 flex items-center space-x-6 text-yellow-100"
        >
          <Laugh 
            class="w-16 h-16 text-yellow-400 animate-bounce" 
          />
          <div>
            <p class="text-xl font-semibold mb-2">
              🚨 Attention Projet Fictif ! 🎉
            </p>
            <p class="text-sm opacity-80">
              Ce site est un projet de démonstration créé à des fins de design et d'inspiration. 
              Aucune maison réelle n'est actuellement à vendre. Profitez de la créativité ! 😄
            </p>
          </div>
        </div>
      </div>

      <!-- Social and Contact Info -->
      <div>
        <div class="bg-white/10 backdrop-blur-xl rounded-3xl p-12 space-y-8">
          <div>
            <h3 class="text-3xl font-bold mb-4">Nos Coordonnées</h3>
            <div class="space-y-4 text-white/80">
              <div class="flex items-center space-x-4">
                <MapPin class="w-8 h-8 text-green-400" />
                <span>123 Rue de l'Innovation, 75001 Paris</span>
              </div>
              <div class="flex items-center space-x-4">
                <Phone class="w-8 h-8 text-blue-400" />
                <span>+33 (0)1 23 45 67 89</span>
              </div>
              <div class="flex items-center space-x-4">
                <Mail class="w-8 h-8 text-red-400" />
                <span>contact@woodhouse.eco</span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-3xl font-bold mb-6">Suivez-nous</h3>
            <div class="flex space-x-6">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.link"
                target="_blank"
                class="bg-white/20 p-4 rounded-full hover:bg-white/40 
                       transition-all transform hover:scale-110 group"
              >
                <component 
                  :is="social.icon" 
                  class="w-8 h-8 group-hover:text-white transition-colors" 
                />
              </a>
            </div>
          </div>
        </div>

        <div class="mt-12 bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">
          <h3 class="text-3xl font-bold mb-6">Newsletter</h3>
          <div class="flex">
            <input 
              v-model="newsletterEmail"
              type="email"
              placeholder="Votre email"
              class="flex-grow bg-white/10 px-6 py-4 rounded-l-full border border-white/20"
            />
            <button 
              @click="subscribeNewsletter"
              class="bg-white text-black px-8 py-4 rounded-r-full 
                     hover:bg-opacity-90 transition-all"
            >
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-24 border-t border-white/10 pt-12">
      <div class="container mx-auto px-4 text-center">
        <div class="flex justify-center space-x-8 mb-8">
          <a href="#" class="hover:text-green-400 transition-colors">Mentions Légales</a>
          <a href="#" class="hover:text-green-400 transition-colors">Politique de Confidentialité</a>
          <a href="#" class="hover:text-green-400 transition-colors">CGV</a>
        </div>
        <p class="text-white/70">
          {{ currentYear }} Wood House. Tous droits réservés. 
          Construisons un avenir durable, une maison à la fois. 
        </p>
      </div>
    </footer>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  Send, MapPin, Phone, Mail, 
  Facebook, Twitter, Instagram, Linkedin,
  Laugh
} from 'lucide-vue-next'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const newsletterEmail = ref('')

const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  { 
    name: 'Facebook', 
    icon: Facebook, 
    link: 'https://facebook.com/woodhouse' 
  },
  { 
    name: 'Twitter', 
    icon: Twitter, 
    link: 'https://twitter.com/woodhouse' 
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    link: 'https://instagram.com/woodhouse' 
  },
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    link: 'https://linkedin.com/company/woodhouse' 
  }
]

const submitForm = () => {
  // Implement form submission logic
  console.log('Form submitted', { name: name.value, email: email.value, subject: subject.value, message: message.value })
  // Reset form after submission
  name.value = ''
  email.value = ''
  subject.value = ''
  message.value = ''
}

const subscribeNewsletter = () => {
  // Implement newsletter subscription logic
  console.log('Newsletter subscription', newsletterEmail.value)
  newsletterEmail.value = ''
}
</script>

<style scoped>
/* Add any additional scoped styles here */
</style>
