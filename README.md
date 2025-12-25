# Atelier Git & GitHub

## 1. Introduction au contrôle de versions

L’atelier débute par une présentation générale du **contrôle de versions** et de son rôle central dans le développement logiciel moderne. Les étudiants découvriront :

* Ce qu’est **Git** et pourquoi il a été créé
* Le contexte historique et les outils qui ont précédé Git (CVS, BitKeeper)
* Les principes du **contrôle de versions distribué**
* Ce qu’est **GitHub**, son rôle, et sa différence avec Git
* Les usages actuels de Git et GitHub (travail collaboratif, open source, CI/CD, gestion de projets)

Cette partie vise à établir une base théorique commune avant de passer à la pratique.

## 2. Prise en main : clonage et branches

Les étudiants cloneront un **dépôt de projet fourni**. À partir de ce dépôt commun, ils apprendront :

* À cloner un dépôt Git en local
* Le concept de **branche** et son importance
* Example de branches dans un projet professionelle
* À créer et utiliser une **branche dédiée par étudiant**
* Les bonnes pratiques de nommage et de travail en parallèle

Cette étape permet aux étudiants de travailler sans impacter la branche principale.

## 3. Modifications et création de commits

Cette section est consacrée à l’enregistrement, au suivi **et à la correction** des modifications dans un projet Git :

* Comprendre les notions de **répertoire de travail**, **zone de staging** et **historique des commits**
* Utilisation des commandes fondamentales :
  * `git status` pour inspecter l’état du dépôt
  * `git diff` pour visualiser les changements
  * `git add` pour indexer les fichiers
  * `git commit` pour enregistrer les modifications
  * `git push` pour envoyer les modifications sur github
* Rédiger des messages de commit clairs, explicites et professionnels

### Annuler et corriger des modifications

Les étudiants apprendront également à corriger des erreurs courantes dans l’historique Git :

* `git reset` :
  * Comprendre les différences entre `--soft`, `--mixed` et `--hard`
  * Savoir quand réécrire l’historique local
  * Annuler un commit ou retirer des fichiers de la zone de staging

* `git revert` :
  * Annuler un commit de manière **sécurisée** sans modifier l’historique
  * Créer un nouveau commit qui inverse un changement précédent
  * Cas d’usage en contexte collaboratif

Les différences fondamentales entre **réécriture de l’historique** (`reset`) et **annulation par ajout de commits** (`revert`) seront expliquées afin d’adopter la bonne pratique selon le contexte (local vs collaboratif).

Les étudiants apprendront ainsi à structurer et maintenir un historique de projet propre, compréhensible et professionnel.

## 4. Création et publication d’un dépôt personnel

Chaque étudiant créera son **propre dépôt GitHub** et y publiera un projet existant. Les notions abordées incluent :

* Initialisation d’un dépôt Git local
* Rôle et contenu du dossier `.git`
* Compréhension des **remotes** et de `origin`
* Liaison entre un dépôt Git local et un dépôt GitHub distant
* Premier envoi du code avec `git push`

Cette partie rend les étudiants autonomes dans la gestion de leurs projets.


## 5. Pull Requests et revue de code

Les étudiants apprendront à collaborer à l’aide des **Pull Requests (PR)** :

* Qu’est-ce qu’une Pull Request et dans quels cas l’utiliser
* Création d’une PR depuis une branche
* Utilisation de l’interface GitHub pour la revue de code
* Commenter, proposer des corrections et approuver des changements
* Fusion d’une Pull Request

Cette section introduit les pratiques professionnelles de collaboration.

## 6. Collaboration et résolution de conflits

Les étudiants travailleront en binôme en s’accordant mutuellement l’accès à leurs dépôts afin de simuler un contexte réel de collaboration. Ils apprendront à :

* Provoquer et identifier des **conflits Git**
* Récupérer les changements distants avec `git fetch`
* Réorganiser l’historique avec `git rebase`
* Résoudre manuellement les conflits
* Mettre à jour le dépôt distant avec `git push --force-with-lease`

Les concepts suivants seront expliqués en détail :

* Différence entre **git merge** et **git rebase**
* Réécriture de l’historique
* Dangers de `--force`
* Avantages de `--force-with-lease`

## 7. Organisation du cycle de développement avec Git Flow

Dans cette section finale, les étudiants appliqueront un workflow professionnel sur les dépôts personnels qu’ils ont créés au début de l’atelier.

### Présentation de Git Flow

Les notions suivantes seront introduites :

* Principe général de Git Flow
* Rôle des différentes branches :
    * `main` (production)
    * `develop` (intégration)
    * `feature/*`
    * `release/*`
    * `hotfix/*`
* Quand et pourquoi utiliser ce modèle
* Avantages et limites de Git Flow

L’objectif est de comprendre comment structurer un projet sur le long terme.

### Mise en pratique sur les dépôts étudiants

Les étudiants mettront en œuvre Git Flow sur leur propre dépôt :

* Création d’une branche de release
* Fusion vers main et develop

## 8. Forks

Les étudiants reviendront au dépôt principal cloné au début de l’atelier afin de :

* **Forker** un dépôt GitHub
* Comprendre le modèle de contribution par fork (courant en open source)
* Synchroniser un fork avec le dépôt original

## 9. GitHub Pages et CI/CD

Ils découvriront ensuite les notions de déploiement :

* Présentation de **GitHub Pages**
* Introduction aux pipelines **CI/CD**
* Publication automatique de leurs modifications sur un site via GitHub

Cette section relie le contrôle de versions à la mise en production.
