# eStage

Un projet synthèse réalisé dans le cadre de l'AEC en Développemnt Front-End du Cégep de Trois-Rivières

Par Anne Moncion

Avril 2021

## Présentation du projet

Ce site web est une plateforme à l'intention des étudiants à la recherche d'un stage, et des entreprises à la recherche d'un stagiaire. Le site web comporte deux sections principales: un volet public et un portail d'administration.

### Volet public

Cette section peut être consultée par tous.

La page d'accueil présente les quatre plus récentes offres et demandes de stage.

Toutes les pages relatives aux demandes et aux offres de stage contiennent des composants d'appel à l'action pour inciter les utilisateurs à publier leurs offres.

Pour répertorier les offres et les demandes de stage, l'arborescence est identique: une page maîtresse présente un résumé des offres sous forme de cartes, qui peuvent être filtrées par secteur d'activité. Chaque carte mène à la fiche complète de l'offre ou de la demande. Depuis cette page, il est possible de contacter l'auteur de la publication à partir d'un lien *mailto*.

Une barre de recherche, située dans la bannière de chaque page de cette section, est supposée mener à une page de recherche filtrant les résultats à partir des données du *mock API*. L'intégration de l'interface est terminée, mais la fonctionnalité n'a pas été implémentée. Dans une version postérieure, il serait intéressant d'utiliser un service externe comme *Site Search 360* pour rendre fonctionnel le moteur de recherche.

Des pages statiques présentent le reste de l'information pertinente: il s'agit des pages *Nous joindre*, *À propos* et *Politiques de confidentialité*. Elles sont toutes accessibles via le pied de page du volet public.

Enfin, deux boutons situés dans la navigation principale dirigent vers la page de connexion, qui permet de s'identifier, ou de créer un nouveau compte utilisateur en tant que stagiaire. Si l'utilisateur est déjà connecté, ces boutons mènent directement à son portail.

___


### Portail d'administration

Les fonctionnalités du portail varient en fonction du niveau d'accès de l'utilisateur. Les rôles définis sont Stagiaire, Entreprise et Administrateur.

#### Stagiaire

Le stagiaire a accès à une liste de toutes ses demandes de stage en attente de validation de l'administrateur. Il peut créer de nouvelles demandes de stage en cliquant sur le bouton *Ajouter une demande de stage*. Il peut accéder à la liste de ses demandes validées, qu'il peut modifier ou supprimer à sa guise.

#### Entreprise

L'utilisateur connecté à titre d'Entreprise a accès aux mêmes fonctionnalités que le Stagiaire relativement à la publication de ses offres. De plus, il peut naviguer vers l'onglet *Candidats*, qui répertorie tous les stagiaires enregistrés sur la plateforme, afin de les contacter via un lien *mailto*.

#### Administrateur

L'administrateur peut voir toutes les offres et les demandes de stage publiées. Il peut également voir la liste de tous les candidats et les entreprises enregistrés.

Le développement du portail administrateur n'a pas été mené à bien. L'administrateur peut se connecter à son portail, et les interfaces de premier niveau ont tous été intégrées, mais les fonctionnalités n'ont pas été développées.

___


## Spécifications

Ce site web a été réalisé avec Vue.js 2.

La gestion des données se fait à partir d'un *store* Vuex et d'un *mock API*. La gestion des sessions des utilisateurs est effectuée grâce au *LocalStorage* du navigateur.

Les formulaires sont tous validés côté front-end avec Vuelidate.

Les tests unitaires sont faits avec Jest et Vue Test Utils.

Les styles sont générés à partir de SASS, par-dessus une configuration personnalisée de Bootstrap Vue.
La structure des styles s'inspire de la méthodologie BEM (*Block - Element - Modifier*). Le style est écrit directement dans les modèles de composant Vue, sauf s'il est utilisé dans plus d'un composant. Dans ce cas, il est soit intégré aux styles de base du site, soit dans un composant «style» importé dans chaque modèle qui l'utilise.

___


## Difficultés rencontrées

Le premier obstacle d'envergure a été la configuration du thème de Bootstrap Vue. Je souhaitais éviter de devoir passer par des *class* pour assurer la priorité de mes styles. J'ai peiné à comprendre comment m'assurer que les fichiers de styles de Bootstrap soient importés au bon moment, afin que mon thème personnalisé prenne le dessur sur les styles par défaut.

Un autre problème récurrent a été la nomenclature de mes fichiers. Puisque je n'ai pas pris le temps de documenter l'ensemble du projet sur papier avant de me lancer dans la programmation, je n'ai pas suivi de règles de nomenclature constantes. Ce serait un aspect à améliorer.

Aussi, j'ai passé plusieurs heures à me familiariser avec Vuex, que j'utilisais pour la toute première fois. Le concept d'un *store* pour garder un suivi constant de l'état des données ne m'était pas inconnu, mais concrètement, lier les données des fichiers json au *store* a été difficile. Je ne pense pas avoir utiliser cette technologie de façon optimale.

La dernière difficulté rencontréee, et non la moindre, a été la création de tests unitaires. J'ai eu du mal à configurer Jest et Vue Test Utils dans le site web. Le script ne roulait pas correctement. Ensuite, je ne comprenais pas comment reproduire le comportement d'un composant à cause de toutes les extensions utilisées, comme Vue Router et Bootstrap Vue. Ultimement, je n'ai pas eu le temps de créer tous les tests demandés, et je saisis encore très mal le concept de test unitaire.

