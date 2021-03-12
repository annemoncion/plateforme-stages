import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Accueil = () => import(/* webpackChunkName: "accueil" */ "../views/Accueil.vue");
const Admin = () =>
  import(/* webpackChunkName: "admin" */ "../views/Admin.vue");
const APropos = () =>
  import(/* webpackChunkName: "aPropos" */ "../views/APropos.vue");
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
    component: Accueil
  },
  {
    path: "/mon-portail",
    name: "admin",
    component: Admin
  },
  {
    path: "/a-propos",
    name: "aPropos",
    component: APropos
  },
  {
    path: "/demandes-de-stage",
    name: "demandes",
    component: Demandes
  },
  {
    path: "/demande",
    name: "detailDemande",
    component: DetailDemande
  },
  {
    path: "/offre",
    name: "detailOffre",
    component: DetailOffre
  },
  {
    path: "/nous-joindre",
    name: "nousJoindre",
    component: NousJoindre
  },
  {
    path: "/offres-de-stage",
    name: "offres",
    component: Offres
  },
  {
    path: "/politiques-de-confidentialite",
    name: "politiqueConfidentialite",
    component: PolitiqueConfidentialite
  },
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