import { createLocalVue, shallowMount } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import Heading from '@/components/Heading.vue'

// Créer un constructor `Vue` étendu
const localVue = createLocalVue()

// Installer les extensions normalement
localVue.use(BootstrapVue)

// Succès
describe('Heading.vue', () => {
  it('Le composant affiche des balises titre de niveau h1.', () => {
    const wrapper = shallowMount(Heading, {
      localVue
    })

    expect(wrapper.find('h1').exists()).toBeTruthy()
  })
})

// Échec
describe('Heading.vue', () => {
  it('Le composant devrait afficher au moins un paragraphe.', () => {
    const wrapper = shallowMount(Heading, {
      localVue
    })

    expect(wrapper.find('p').exists()).toBeTruthy()
  })
})
