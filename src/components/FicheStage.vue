<template>
    <div class="fiche" v-if="internship">
        <div class="fiche__header">
            <div class="fiche__first-block">
                <img class="fiche__logo" :src="logoSchool" alt="logo de l'établissement" />
                <p class="fiche__business">
                    Nom de l'entreprise
                </p>
                <p class="fiche__address">Adresse de l'entreprise<br/>Adresse encore une fois</p>
            </div>
            <div class="fiche__general-infos">
                <h2 class="fiche__title">{{ internship.title }}</h2>
                <div class="fiche__intro">
                    <div class="fiche__intro-col">
                   <p>
                        <span class="fiche__label">Ville&nbsp;:</span>
                        {{ internship.city }}
                    </p>
                    <p>
                        <span class="fiche__label">Date de début&nbsp;:</span>
                        {{ internship.startDate }}
                    </p> 
                    <p>
                        <span class="fiche__label">Date de fin&nbsp;:</span>
                        {{ internship.endDate }}
                    </p> 
                    <p>
                        <span class="fiche__label">Nombre d'hrs / sem.&nbsp;:</span>
                        {{ internship.hoursPerWeek }}
                    </p> 
                </div>
                <div class="fiche__intro-col fiche__intro-col--last">
                    <p>
                        <span class="fiche__label">Secteur d'activité&nbsp;:</span>
                        {{ internship.field }}
                    </p>
                    <p>
                        <span class="fiche__label">Possibilité d'emploi après le stage&nbsp;:</span>
                        {{ internship.hiringIsPossible }}
                    </p>
                    <p>
                        <span class="fiche__label">Rémunération&nbsp;:</span>
                        {{ internship.isPaid }}
                    </p>
                    <p>
                        <span class="fiche__label">Date de parution&nbsp;:</span>
                        {{ internship.parutionDate }}
                    </p> 
                </div>
                </div>
                
                <a v-if="user" :href="'mailto:' + user.email" class="fiche__btn">
                    <div class="fiche__btn-filter"></div>
                    <span class="fiche__btn-label">Postuler maintenant</span>
                </a>
            </div>
        </div>

        <h3 class="fiche__sub-title">Description détaillée</h3>
        <div class="fiche__description">{{ internship.description }}</div>

        <h3 class="fiche__sub-title">Compétences recherchées</h3>
        <p class="fiche__description">{{ internship.desiredSkillset }}</p>
        
        <h3 class="fiche__sub-title">Informations supplémentaires</h3>
        <div class="fiche__description">{{ internship.additionalInfos }}</div>
    </div>
</template>

<script>
export default {
    name: 'FicheStage',
    props: {
            internship: {
                type: Object,
            },
    },
    data() {
        return {
        logoSchool: require('@/assets/img/logoipsum-black.svg'),
        }
    },
    computed: {
        user() {
            let userID = this.internship.authorID;
            return this.$store.getters.userByPost(userID);
        },
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';
@import '@/assets/style/components/details.scss';
</style>