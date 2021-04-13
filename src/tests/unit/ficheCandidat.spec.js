import { createLocalVue, shallowMount } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import FicheCandidat from '@/components/FicheCandidat.vue'

// Créer un constructor `Vue` étendu
const localVue = createLocalVue()

// intaller les extensions normalement
localVue.use(BootstrapVue)

// Succès
describe('Heading.vue', () => {
  it('Le composant affiche le formation principale du candidat', () => {
    const wrapper = shallowMount(FicheCandidat, {
      localVue
    })

    expect(wrapper.find('.fiche__formation').text()).toContain('Formation: ')
  })
})

// Échec
describe('Heading.vue', () => {
  it('Le composant devrait afficher au moins un paragraphe.', () => {
    const wrapper = shallowMount(FicheCandidat, {
      localVue
    })

    expect(wrapper.find('p').exists()).toBeTruthy()
  })
})
