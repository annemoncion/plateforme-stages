# eStage

Un projet synthèse réalisé dans le cadre de l'AEC en Développemnt Front-End du Cégep de Trois-Rivières

Par Anne Moncion
Avril 2021

## Présentation du projet

Ce site web est une plateforme à l'intention des étudiants à la recherche d'un stage, et des entreprises à la recherche d'un.e stagiaire. Le site web comporte deux sections principales: un volet public et un portail d'administration des offres et des demandes de stage.

### Volet public

Cette section peut être consultée par tous.

La page d'accueil présente les quatre plus récentes offres et demandes de stage.

Toutes les pages relatives aux demandes et aux offres de stage contiennent des composants d'appel à l'action pour inciter les utilisateurs à publier leurs offres.

Pour répertorier les offres et les demandes de stage, l'arborescence est identique: une page maîtresse présente un résumé des offres sous forme de cartes, qui peuvent être filtrées par secteur d'activité. Chaque carte mène à la fiche complète de l'offre ou de la demande. Depuis cette page, il est possible de contacter l'auteur de la publication à partir d'un lien *mailto*.

Une barre de recherche, située dans la bannière de chaque page de cette section, est supposée mener à une page de recherche filtrant les résultats à partir des données du mock API. L'intégration de l'interface est terminée, mais la fonctionnalité n'a pas été implémentée. Dans une version postérieure, il serait intéressant d'utiliser un service externe comme *Site Search 360* pour rendre fonctionnel le moteur de recherche.

Des pages statiques présentent le reste de l'information pertinente: il s'agit des pages *Nous joindre*, *À propos* et *Politiques de confidentialité*. Elles sont toutes accessibles via le pied de page du volet public.

Enfin, deux boutons situés dans la navigation principale dirigent vers la page de connexion, qui permet de s'identifier, ou de créer un nouveau compte utilisateur en tant que stagiaire. Si l'utilisateur est déjà connecté, ces boutons mènent directement à son portail.

### Portail d'administration



### Spécifications

Ce site web a été réalisé avec Vue.js 2.

La gestion des données se fait à partir d'un *store* Vuex et d'un *mock API*. La gestion des sessions des utilisateurs est effectuée grâce au *LocalStorage* du navigateur.

Les styles sont générés à partir de SASS, par-dessus une configuration personnalisée de Bootstrap Vue.
La structure des styles s'inspire de la méthodologie BEM (*Block - Element - Modifier*). Le style est écrit directement dans les modèles de composant Vue, sauf s'il est utilisé dans plus d'un composant. Dans ce cas, il est soit intégré aux styles de base du site, soit dans un composant «style» importé dans chaque modèle qui l'utilise.
