<template>
  <section 
    class="min-h-screen bg-gradient-to-br from-[#1a2b3a] to-[#16213e] 
           text-white py-24 px-4 md:px-12 lg:px-24"
  >
    <div 
      class="max-w-7xl mx-auto flex flex-col md:flex-row 
             space-y-12 md:space-y-0 md:space-x-12"
    >
      <!-- Contact Form -->
      <div class="w-full md:w-2/3">
        <h2 class="text-3xl md:text-5xl font-bold mb-8">Contactez-nous 📧</h2>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              v-model="name" 
              type="text" 
              placeholder="Votre Nom" 
              required
              class="w-full bg-white/10 backdrop-blur-xl px-4 md:px-6 py-3 md:py-4 rounded-full border border-white/20 focus:border-white/50 transition-all"
            />
            <input 
              v-model="email" 
              type="email" 
              placeholder="Votre Email" 
              required
              class="w-full bg-white/10 backdrop-blur-xl px-4 md:px-6 py-3 md:py-4 rounded-full border border-white/20 focus:border-white/50 transition-all"
            />
          </div>
          <input 
            v-model="subject" 
            type="text" 
            placeholder="Sujet" 
            required
            class="w-full bg-white/10 backdrop-blur-xl px-4 md:px-6 py-3 md:py-4 rounded-full border border-white/20 focus:border-white/50 transition-all"
          />
          <textarea 
            v-model="message" 
            placeholder="Votre Message" 
            required
            rows="6"
            class="w-full bg-white/10 backdrop-blur-xl px-4 md:px-6 py-3 md:py-4 rounded-3xl border border-white/20 focus:border-white/50 transition-all"
          ></textarea>
          <button 
            type="submit"
            class="w-full bg-white text-black px-6 md:px-12 py-3 md:py-5 rounded-full 
                   flex items-center justify-center gap-4 
                   hover:bg-opacity-90 transition-all transform hover:scale-105 group"
          >
            Envoyer le Message
            <Send 
              class="w-5 md:w-6 h-5 md:h-6 group-hover:translate-x-2 transition-transform" 
            />
          </button>
        </form>
        
        <!-- Funny Disclaimer -->
        <div 
          class="mt-8 bg-yellow-100/10 border border-yellow-500/30 p-4 md:p-6 rounded-3xl 
                 flex items-center space-x-4 md:space-x-6 text-yellow-100"
        >
          <Laugh 
            class="w-12 md:w-16 h-12 md:h-16 text-yellow-400 animate-bounce" 
          />
          <div>
            <p class="text-lg md:text-xl font-semibold mb-2">
              🚨 Attention Projet Fictif ! 🎉
            </p>
            <p class="text-xs md:text-sm opacity-80">
              Ce site est un projet de démonstration créé à des fins de design et d'inspiration. 
              Aucune maison réelle n'est actuellement à vendre. Profitez de la créativité ! 😄
            </p>
          </div>
        </div>
      </div>

      <!-- Social and Contact Info -->
      <div class="w-full md:w-1/3 space-y-8">
        <div 
          class="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-12 space-y-8 
                 flex flex-col md:block"
        >
          <div class="flex items-center space-x-4 mb-6">
            <MapPin class="w-6 h-6 text-green-400" />
            <div>
              <p class="text-sm font-bold">Adresse</p>
              <p class="text-xs text-white/70">123 Rue Écologique, Paris, France</p>
            </div>
          </div>
          <div class="flex items-center space-x-4 mb-6">
            <Phone class="w-6 h-6 text-green-400" />
            <div>
              <p class="text-sm font-bold">Téléphone</p>
              <p class="text-xs text-white/70">+33 1 23 45 67 89</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <Mail class="w-6 h-6 text-green-400" />
            <div>
              <p class="text-sm font-bold">Email</p>
              <p class="text-xs text-white/70">contact@woodhouse.eco</p>
            </div>
          </div>
        </div>

        <!-- Social Media Links -->
        <div 
          class="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-12 
                 flex justify-center space-x-6 md:block md:space-x-0 md:space-y-6"
        >
          <a 
            v-for="(social, index) in socialLinks" 
            :key="index"
            :href="social.link"
            target="_blank"
            class="text-white hover:text-green-400 transition-colors 
                   flex items-center justify-center md:justify-start 
                   space-x-4 p-3 rounded-full hover:bg-white/10"
          >
            <component 
              :is="social.icon" 
              class="w-6 h-6" 
            />
            <span class="hidden md:inline text-sm">{{ social.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>

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
