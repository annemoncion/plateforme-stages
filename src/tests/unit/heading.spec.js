import { createLocalVue, shallowMount } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import Heading from '@/components/Heading.vue'

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
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
