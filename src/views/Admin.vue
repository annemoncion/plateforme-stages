<template>
    <div>
        <Loading v-if="loading" />
        <div v-if="!loading">
            <div v-if="currentUser" class="admin__tabs">
                <router-link to="/"><img class="admin__logo" :src="require('@/assets/img/logoipsum.svg')" alt="Logo E-Stage" /></router-link>

                <ul class="admin__tabs-list mt-3">
                    <li 
                    v-for="item, k in tabsItems" 
                    :key="k" 
                    class="admin__tabs-item"
                    :class="[{'admin__tabs-item--active' : item.active}, {'admin__tabs-item--hidden' : hideTab(currentUser.accessLevel, item.name)}]"
                    @click="changeTab(k, item.component)"
                    >
                        <b-icon :icon="item.icon" class="mr-1"></b-icon>
                        {{ item.name }}
                    </li>
                    <li class="admin__tabs-item mt-4" @click="deconnexion()">
                        <b-icon icon="arrow-bar-right" class="mr-1" />
                        Déconnexion
                    </li>
                </ul>
            </div>

            <div class="admin__content">
                <b-container fluid>
                    <b-row>
                        <b-col class="admin__nav py-3">
                            <button 
                                v-if="currentUser.accessLevel === 333 || currentUser.accessLevel === 999" 
                                class="btn btn-outline-primary mr-1" 
                                @click="showInternshipForm()">
                                    <b-icon icon="plus"></b-icon>
                                    Ajouter une offre de stage
                            </button>
                            <button 
                                v-if="currentUser.accessLevel === 111 || currentUser.accessLevel === 999" 
                                class="btn btn-outline-primary" 
                                @click="showApplicationForm()">
                                    <b-icon icon="plus"></b-icon>
                                    Ajouter une demande de stage
                            </button>
                            <div class="admin__right-nav">
                                <div tabindex="1" class="admin__profile-btn px-3 mx-3">
                                    <div v-if="currentUser" class="admin__profile-title mr-2">
                                        <p class="admin__profile-name mb-0">{{currentUser.firstName + ' ' + currentUser.lastName}}</p>
                                        <p class="admin__profile-role mb-0">{{role}}</p>
                                    </div>
                                    <div class="admin__profile-picture mr-2"></div>
                                    <b-icon icon="chevron-down"></b-icon>
                                </div>
                                <div class="admin__icon-right mr-3">
                                    <b-icon icon="bell" font-scale="1.25" />
                                </div>
                                <div class="admin__icon-right" @click="deconnexion()">
                                    <b-icon icon="arrow-bar-right" font-scale="1.25" />
                                </div>
                            </div>
                        </b-col>
                    </b-row>

                    <b-row class="admin__main">
                        <b-col class="admin__inside-main py-3">
                            <component 
                                :is="activeTab"
                                @switch-tab="switchTab" />
                        </b-col>
                    </b-row>
                </b-container>
                
            </div>
        </div>  
  </div>
</template>

<script>
import ApplicationList from '../components/dashboard/ApplicationList'
import BusinessList from '../components/dashboard/BusinessList'
import CandidateList from '../components/dashboard/CandidateList'
import InternshipList from '../components/dashboard/InternshipList'
import Home from '../components/dashboard/Home'
import Loading from '../components/Loading'
import NewApplication from '../components/dashboard/NewApplication'
import NewInternship from '../components/dashboard/NewInternship'

export default {
    name: 'Admin',
    components: {
        ApplicationList,
        BusinessList,
        CandidateList,
        InternshipList,
        Home,
        Loading,
        NewApplication,
        NewInternship
    },
    data() {
        return {
            openedTab: "Home",
            loading: false,
            tabsItems: [
                {
                    name: "Accueil",
                    active: true,
                    visible: true,
                    component: "Home",
                    icon: "house-door-fill",
                },
                {
                    name: "Offres de stage",
                    active: false,
                    visible: true,
                    component: "InternshipList",
                    icon: "arrow-right-circle",
                },
                {
                    name: "Demandes de stage",
                    active: false,
                    visible: true,
                    component: "ApplicationList",
                    icon: "arrow-left-circle",
                },
                {
                    name: "Candidats",
                    active: false,
                    visible: true,
                    component: "CandidateList",
                    icon: "person-fill",
                },
                {
                    name: "Entreprises",
                    active: false,
                    visible: true,
                    component: "BusinessList",
                    icon: "people-fill",
                },
            ]
        }
    },
    computed: {
        activeTab() {
            return this.openedTab;
        },
        currentUser () {
            return this.$store.getters.currentUser(localStorage.userID);
        },
        role () {
            let role = '';
            let access = this.currentUser.accessLevel;
            if (access === 111) {
                role = 'Stagiaire';
            }
            else if (access === 333) {
                role = this.currentUser.businessName;
            }
            else {
                role = 'Admin';
            }
            return role;
        }
    },
    created () {
        this.loading = true
        this.$store.dispatch('fetchApplications')
        this.$store.dispatch('fetchInternships')
        this.$store.dispatch('fetchUsers')
        .then(() => {
            this.loading = false
        })
    },
    methods: {
        changeTab(index, component) {
            for (let i = 0; i < this.tabsItems.length; i++) {
                this.tabsItems[i].active = false;
            }
            this.tabsItems[index].active = true;
            this.openedTab = component;
            window.scrollTo(0, 0);
        },
        hideTab(access, tabName) {
            if (access === 111) {
                if (tabName === "Offres de stage" || tabName === "Candidats" || tabName === "Entreprises") {
                    return true;
                }
            }
            else if (access === 333) {
                if (tabName === "Demandes de stage" || tabName === "Entreprises") {
                    return true;
                }
            }
            else {
                return false;
            }
        },
        showApplicationForm() {
            for (let i = 0; i < this.tabsItems.length; i++) {
                this.tabsItems[i].active = false;
            }
            this.openedTab = "NewApplication";
        },
        showInternshipForm() {
            for (let i = 0; i < this.tabsItems.length; i++) {
                this.tabsItems[i].active = false;
            }
            this.openedTab = "NewInternship";
        },
        switchTab(tab) {
            this.openedTab = tab;
            window.scrollTo(0, 0);
        },
        deconnexion() {
            localStorage.removeItem('userID');
            localStorage.removeItem('userAccessLevel');
            this.$router.push('/');
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';

.admin {
    &__tabs {
        background-color: $blue;
        padding: 24px 0;
        height: 100vh;
        width: 240px;
        position: fixed;
    }

    &__logo {
        width: 160px;
        margin-left: 30px;
        margin-bottom: 8px;
    }

    &__tabs-list {
        color: $white;
        width: 100%;
        padding: 0;
    }

    &__tabs-item {
        padding: 10px 30px 10px 24px;
        margin-bottom: 0;
        border-left: solid 6px transparent;
        background-color: transparent;
        cursor: pointer;
        -webkit-transition: background-color 0.2s ease;
        -moz-transition: background-color 0.2s ease;
        -o-transition: background-color 0.2s ease;
        transition: background-color 0.2s ease;

        &:hover,
        &--active {
            background-color: rgba(255, 255, 255, 0.1);
        }

        &--active {
            border-left: solid 6px rgba(255,255,255, 0.4);
        }

        &--hidden {
            display: none;
        }


        &:before {
            display: none;
        }
    }

    &__content {
        margin-left: 240px;
    }

    &__nav {
        display: flex;
        padding-left: 40px;
        padding-right: 40px;
    }

    &__right-nav {
        display: flex;
        align-items: center;
        margin-left: auto;
    }

    &__profile-btn {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    &__profile-picture {
        background-color: $grey-light;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    &__profile-title {
        text-align: right;
    }

    &__profile-name {
        font-weight: 700;
    }

    &__profile-role {
        color: $grey;
        font-size: 0.9em;
        font-weight: 600;
    }

    &__icon-right {
        position: relative;
        cursor: pointer;

        svg {
            fill: $grey;
        }

        &:after {
            content: '';
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            width: 40px;
            height: 40px;
        }
    }

    &__main {
        background-color: $white-grey;
        min-height: calc(100vh - 93px);
    }

    &__inside-main {
        padding-left: 40px;
        padding-right: 40px;
    }
}

</style>