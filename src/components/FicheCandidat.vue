<template>
    <div class="fiche">
        <div class="fiche__header">
            <div class="fiche__first-block">
                <img class="fiche__logo" :src="logoSchool" alt="logo de l'établissement" />
                <p class="fiche__formation">
                    Formation:<br/>Programme suivi (formation)
                </p>
                <p class="fiche__autres-formations">Autres formations :</p>
                <ul class="fiche__formation-list">
                    <li class="fiche__formation-item">Autres formations listées</li>
                </ul>
            </div>
            <div class="fiche__general-infos">
                <h2 class="fiche__title">Titre de la demande de stage</h2>
                <div class="fiche__intro">
                    <div class="fiche__intro-col">
                   <p>
                        <span class="fiche__label">Ville :</span>
                        Ville
                    </p>
                    <p>
                        <span class="fiche__label">Date de début :</span>
                        Date
                    </p> 
                    <p>
                        <span class="fiche__label">Date de fin :</span>
                        Date
                    </p> 
                    <p>
                        <span class="fiche__label">Nombre d'hrs / sem. :</span>
                        x
                    </p> 
                </div>
                <div class="fiche__intro-col fiche__intro-col--last">
                    <p>
                        <span class="fiche__label">Type de stage :</span>
                        TPL/TPA/ATE
                    </p>
                    <p>
                        <span class="fiche__label">Duré du stage :</span>
                        x semaines
                    </p>
                    <p>
                        <span class="fiche__label">Rémunération :</span>
                        O/N/D
                    </p>
                    <p>
                        <span class="fiche__label">Date de parution :</span>
                        0000-00-00
                    </p> 
                </div>
                </div>
                
                <a href="#" class="fiche__btn">
                    <div class="fiche__btn-filter"></div>
                    <span class="fiche__btn-label">Contacter le/la candidat.e</span>
                </a>
            </div>
        </div>

        <h3 class="fiche__sub-title">Type de stage recherché</h3>
        <div class="fiche__description">Description du poste recherché</div>

        <h3 class="fiche__sub-title">Compétences acquises</h3>
        <div class="fiche__description">
            <ul>
                <li>Bullet point listant les compétences acquises</li>
            </ul>
        </div>
        
        <h3 class="fiche__sub-title">À propos du candidat</h3>
        <div class="fiche__description">Autres informations</div>
    </div>
</template>

<script>
export default {
  name: 'FicheCandidat',
  data() {
    return {
      logoSchool: require('@/assets/img/logoipsum-black.svg'),
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';

.fiche {

    margin-bottom: 80px;

    &__header {
        display: flex;
        width: calc(100% + 15px);
        margin-bottom: 24px;
    }

    &__first-block {
        padding: 24px;
        border: 1px solid $grey-medium;
        margin-right: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__logo {
        min-width: 160px;
        margin-bottom: 24px;
    }

    &__formation {
        text-align: center;
        font-weight: 700;
        margin-bottom: 30px;
    }

    &__autres-formations {
        font-weight: 700;
        margin-bottom: 4px;
    }

    &__formation-list {
        padding-left: 0;
        list-style-type: none;
    }

    &__formation-item {
        font-size: 0.9em;
    }

    &__general-infos {      
        padding: 24px;
        border: 1px solid $grey-medium;
        flex-grow: 1;
    }

    &__title {
        flex-basis: 100%;
        font-size: 1.4em;
        font-weight: 700;
        margin-bottom: 30px;
    }

    &__intro {
        display: flex;
        flex-wrap: wrap;
        margin: 24px -8px;
    }

    &__intro-col {
        flex-basis: calc(50% - 16px);
        margin: 0 8px;

        &--last {
            margin-right: 8px;
            margin-left: auto;
            text-align: right;
        }
    }

    &__label {
        font-weight: 700;
        color: $grey-dark;
    }

    &__sub-title {
        margin: 60px 0 40px;
        text-transform: uppercase;
        font-weight: 700;
    }

    &__btn {
        display: block;
        position: relative;
        border-radius: 0;
        font-size: 0.8em;
        padding: 12px 40px;
        border: 0;
        text-align: center;
        background: $purple;
        background: linear-gradient(90deg, rgba(var(--purple-rgb),1) 0%, rgba(var(--fushia-rgb),1) 100%);

        &:hover, &:focus {
            border: 0;
            border-radius: 0;
            text-decoration: none;
            .fiche__btn-filter {
                opacity: 1;
            }
            
        }
    }

    &__btn-label {
        position: relative;
        z-index: 2;
        color: $white;
    }

    &__btn-filter {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: $purple;
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
    }
}
</style>