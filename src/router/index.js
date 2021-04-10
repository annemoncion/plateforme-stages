import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Accueil = () => import(/* webpackChunkName: "accueil" */ "../views/Accueil.vue");
const Admin = () =>
  import(/* webpackChunkName: "admin" */ "../views/Admin.vue");
const APropos = () =>
  import(/* webpackChunkName: "aPropos" */ "../views/APropos.vue");
const Connexion = () =>
  import(/* webpackChunkName: "connexion" */ "../views/Connexion.vue");
const Demandes = () =>
  import(/* webpackChunkName: "demandes" */ "../views/Demandes.vue");
const DetailDemande = () =>
  import(/* webpackChunkName: "detailDemande" */ "../views/DetailDemande.vue");
const DetailOffre = () =>
  import(/* webpackChunkName: "detailOffre" */ "../views/DetailOffre.vue");
const NousJoindre = () =>
  import(/* webpackChunkName: "nousJoindre" */ "../views/NousJoindre.vue");
const Offres = () =>
  import(/* webpackChunkName: "offres" */ "../views/Offres.vue");
const PolitiqueConfidentialite = () =>
  import(/* webpackChunkName: "politiqueConfidentialite" */ "../views/PolitiqueConfidentialite.vue");

const routes = [
  {
    path: "/",
    name: "accueil",
    component: Accueil,
    meta: {
      breadcrumb: [
        { name: 'Accueil' }
      ]
    }
  },
  {
    path: "/mon-portail",
    name: "admin",
    component: Admin,
  },
  {
    path: "/a-propos",
    name: "aPropos",
    component: APropos,
    meta: {
      breadcrumb: [
        { name: 'Accueil', link: '/' },
        { name: 'À propos' }
      ]
    }
  },
  {
    path: "/connexion",
    name: "connexion",
    component: Connexion,
  },
  {
    path: "/demandes-de-stage",
    name: "demandes",
    component: Demandes,
    meta: {
      breadcrumb: [
        { name: 'Accueil', link: '/' },
        { name: 'Candidats' }
      ]
    }
  },
  {
    path: "/demande/:id",
    name: "detailDemande",
    component: DetailDemande,
    props: {
      default: true,
      // function mode, more about it below
      id: route => ({ id: route.params.id }),
    },
    meta: {
      breadcrumb: [
        { name: 'Accueil', link: '/' },
        { name: 'Candidats', link: '/demandes-de-stage' },
        { name: 'Nom du candidat' }
      ]
    }
  },
  {
    path: "/offre/:id",
    name: "detailOffre",
    component: DetailOffre,
    props: {
      default: true,
      // function mode, more about it below
      id: route => ({ id: route.params.id }),
    },
    meta: {
      breadcrumb: [
        { name: 'Accueil', link: '/' },
        { name: 'Stages', link: '/offres-de-stage' },
        { name: 'Nom du stage' }
      ]
    }
  },
  {
    path: "/nous-joindre",
    name: "nousJoindre",
    component: NousJoindre,
    meta: {
      breadcrumb: [
        { name: 'Accueil', link: '/' },
        { name: 'Nous joindre' }
      ]
    }
  },
  {
    path: "/offres-de-stage",
    name: "offres",
    component: Offres,
    meta: {
      breadcrumb: [
        { name: 'Accueil', link: '/' },
        { name: 'Offres' }
      ]
    }
  },
  {
    path: "/politiques-de-confidentialite",
    name: "politiqueConfidentialite",
    component: PolitiqueConfidentialite,
    meta: {
      breadcrumb: [
        { name: 'Accueil', link: '/' },
        { name: 'Confidentialité' }
      ]
    }
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  // Si la route change, remonter en haut de la page.
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;