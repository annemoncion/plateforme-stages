<template>
    <div class="fiche" v-if="application">
        <div class="fiche__header">
            <div class="fiche__first-block">
                <img class="fiche__logo" :src="logoSchool" alt="logo de l'établissement" />
                <p class="fiche__formation">
                    Formation:<br/>{{ application.mainTraining }}
                </p>
                <div v-if="application.otherTrainings.length > 0">
                    <p class="fiche__autres-formations">Autres formations&nbsp;:</p>
                    <p class="fiche__formation-list">{{ application.otherTrainings }}</p>
                </div>
            </div>
            <div class="fiche__general-infos">
                <h2 class="fiche__title">{{ application.title }}</h2>
                <div class="fiche__intro">
                    <div class="fiche__intro-col">
                   <p>
                        <span class="fiche__label">Ville&nbsp;:</span>
                        {{ application.city }}
                    </p>
                    <p>
                        <span class="fiche__label">Date de début&nbsp;:</span>
                        {{ application.startDate }}
                    </p> 
                    <p>
                        <span class="fiche__label">Date de fin&nbsp;:</span>
                        {{ application.endDate }}
                    </p> 
                    <p>
                        <span class="fiche__label">Nombre d'hrs / sem.&nbsp;:</span>
                        {{ application.hoursPerWeek }}
                    </p> 
                </div>
                <div class="fiche__intro-col fiche__intro-col--last">
                    <p>
                        <span class="fiche__label">Type de stage&nbsp;:</span>
                        {{ application.internshipType }}
                    </p>
                    <p>
                        <span class="fiche__label">Duré du stage&nbsp;:</span>
                        {{ application.weeksNumber }}
                    </p>
                    <p>
                        <span class="fiche__label">Rémunération&nbsp;:</span>
                        {{ application.wantsPay }}
                    </p>
                    <p>
                        <span class="fiche__label">Date de parution&nbsp;:</span>
                        {{ application.parutionDate }}
                    </p> 
                </div>
                </div>
                
                <a v-if="user" :href="'mailto:' + user.email" class="fiche__btn">
                    <div class="fiche__btn-filter"></div>
                    <span class="fiche__btn-label">Contacter le/la candidat.e</span>
                </a>
            </div>
        </div>

        <h3 class="fiche__sub-title">Type de stage recherché</h3>
        <div class="fiche__description">{{ application.description }}</div>

        <h3 class="fiche__sub-title">Compétences acquises</h3>
        <p class="fiche__description">{{ application.acquiredSkillset }}</p>
        
        <h3 class="fiche__sub-title">À propos du candidat</h3>
        <div class="fiche__description">{{ application.additionalInfos }}</div>
    </div>
</template>

<script>
export default {
    name: 'FicheCandidat',
    props: {
            application: {
                type: Object,
            },
    },
    data() {
        return {
            logoSchool: require('@/assets/img/logoipsum-black.svg'),
            loading: false,
        }
    },
    computed: {
        user() {
            let userID = this.application.authorID;
            return this.$store.getters.userByPost(userID);
        },
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';
@import '@/assets/style/components/details.scss';

</style>