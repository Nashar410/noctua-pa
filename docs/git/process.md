# Git documentation


## Prérequis

Avant de se lancer dans le développement, assurez-vous :

- que git soit installé sur votre machine (ou sur un docker accessible)
- que votre profil soit correctement rempli :
    - Champ obligatoire pour correctement push :
        - ``git config --global user.name "NOM Prenom"``
        - ``git config --global user.mail "un email présent dans mon profil github"``
    - Pour observer votre profil git : ``git config --list``
- que vous pouvez signer vos commits (**obligatoire !!**) : https://git-scm.com/book/fr/v2/Utilitaires-Git-Signer-votre-travail
    - Pour signer vos commits automatiquement, une fois la clé renseignée : ``git config commit.gpgsign true``
- que votre editor/mergetool/difftool/autre tool pointent bien vers votre IDE (sauf si vous préférez Vim) :
    - Googlez ça (gardez les guillements autours du nom de votre IDE, c'est du google-fu) : ``NOM_DE_MA_TOOL git with "NOM_DE_VOTRE_IDE"``
- que les dossiers propres à votre machine ou à votre IDE soient présents dans votre ``.gitignore`` de projet

**Note** : Pour ce process, j'essaye de trouver de la documentation rapide, simple et en français. Néanmoins, ce n'est pas toujours simple, donc je me tourne souvent vers l'anglais. Si vous trouvez des équivalents français, n'hésitez pas à modifier ce fichier pour y **ajouter** (et non remplacer) vos liens.

**Note²** : Vous verrez souvent Merge/Pull Request, ou alors l'un des deux. C'est parce que je viens de 2 ans de GitLab, où ont dit Merge Request, je me réadapte à Github en douceur. Sachez juste que c'est la même fonctionnalité.

## Rôle et Github flow personnalisé

Pour ce projet, nous utiliserons le GitHub Flow : https://guides.github.com/introduction/flow/
Ce Github flow est légèrement personnalisé pour gagner en sécurité/efficacité (voir partie GitHub Flow personnalisé ci-dessous).

### Rôle

Techniquement parlant sur Github, nous avons tous le même rôle ; nous pouvons donc tous Pull/Push/Merge. Néanmoins, pour mieux structurer le projet, voici des rôles personnalisées qu'on doit adopter :

- O = "a le droit de..."
- X =  "n'a pas le droit de..."
- "...sur branch" : branche autre que **dev** et **main**

|    Rôle    |    Pull sur branch   |  Push sur branch   |     Merge Request avec **dev**     |    Merge Request avec **main**  |  Valider Merge |
| ---------- |:--------------------:|:------------------:|:----------------------------------:|:-------------------------------:|:--------------:|
| Developper |           O          |          O         |                 O                  |                 X               |       X        |
| Maintener  |           O          |          O         |                 O                  |                 O               |       O        |
| Guest      |           O          |          X         |                 X                  |                 X               |       X        |

Pour résumer en bon français :
- Le Développer peut **envoyer** et **récupérer** le code. Il **demande ensuite la permission pour Merge/Pull** avec la branche **dev** mais **il ne la valide pas lui-même**. Le Developper ne fait **rien** sur le branche **main** (ou **master**).
- Le Maintener **reprend les permissions du développer** avec des tâches de reviewer. Le Maintener a **la permission pour Merge/Pull les travaux des Développers** avec la **dev**. Le Maintener **peut merge** la **dev** avec la **main**. Le Maintener **valide donc les Merge/Pull Request**.
- Le Guest est** un rôle destiné au professeur**, c'est **uniquement** **un rôle de consultation**

**Note** : De facto, nous sommes tous développers. Cependant, il serait bien que le nombre de Maintener (garant du code et de la propreté du Git)** soit limité à deux maximum**. Ce n'est pas pour créer des inégalités mais pour être certain que la même logique de livraison est utilisée tout au long du projet. 2 me parait être le bon chiffre, 1 en principal et 1 de secours.

### Github Flow personnalisé et Versionning

Comme dit à l'introduction de cette partie, nous utiliserons le Github Flow, avec une particularité en plus : il y a **deux branches de référence** au lieu d'une seule, **dev** et **main** (ou **master**).

- **dev** : C'est le branche principale de développement, c'est à partir d'elle que l'on va pull et créer nos autres branches. C'est aussi sur elle que les merge/pull request seront faites.
- **main** (ou **master**): C'est la branche de livraison du projet. Cette branche doit être la plus épurée possible ; à savoir un commit par merge qui contient toutes les fonctionnalités depuis la dernière merge. On pourra utiliser des outils d'intégrations continues pour tester et livrer automatiquement le code en production à partir de cette branche. **La version de la main augmentera à chaque merge, même mineure**.
- **features** : ce sont les branches où nous allons développer. Elles sont créées **en locale** par les Développers à partir de leur **dev locale** (à jour!). Elles sont ensuite push sur GitHub, où sa Merge/Pull Request vers le **dev distante** devra être review puis valider par Maintener.

En faisant une merge de la **dev** à la **main** au moins une fois par semaine (s'il y a des choses à livrer), on pourra s'assurer de la bonne avancée de nos travaux et garder un environnement de référence propre. Par exemple, en cas de gros problèmes sur la **dev**, on pourra revenir à un état stable depuis la **main** sans se taper des ``git revert/reset``, uniquement avec des ``cherry-pick``.

## Nomenclature

Pour normaliser nos livraisons, voici le format à respecter :

- **Nommer une branche** :
    - ``{libelle}/US-{XX}-{name-of-libelle}``
        - ``{libelle}`` en **minuscule** est la nature de votre branche apparenant à l'ensemble ci-dessous :
        - **feature** (fonctionnalité)
        - **fix** (correction d'un bug technique ou fonctionnel)
        - **socle** (commun, ne rentrant pas dans un US)
            - Example non exhaustif : Documentation, modification de dépendance...
        - **reviewing** (partage de branche pour review avec quelqu'un d'autre en cas de blocage. N'est pas destiné à être merge)
    - ``{XX}`` est le numéro (**sur 2 digits** !!!) de l'US concernée par votre livraison
    - ``{name-of-libelle}`` est le nom ou le titre de ce que vous développez
    - Exemple :
        - ``feature/US-01-authenticate``
        - ``fix/US-02-classement``
    - Les branches sans US spécifique devront être nommé ainsi (en lieu et place du "US-00") :
        - ``socle/{name-of-libelle}``

- **Note sur le /** :
    - N'utilisez **qu'un seul /** dans vos noms de branches. La présences de plusieurs / peut entrainer des effets de bords suivant les OS

- **Cas spécial : Branche de sprint**
    - Permet de faire le lien entre différente PR (pour des raisons d'orchestration ou autres)
    - ``SPRINT01/{name-of-libelle}``

- **Message du commit final** :
    - Note : pour pouvoir entrer le message en entier, effectuez un ``git commit -S``, sans le ``-m``
```
[US concerné] - [Titre de la Fonctionnalité]

Détail de la fonctionnalité

```

- Exemple :
```
[US 01] - [Authentification]

Permet de s'authentifier en respectant les normes de sécurité OAUTH.
Permet de se connecter
Permet de se déconnecter
Permet de...

```


## Workflow Git

Nous allons maintenant voir le workflow Git (*ndlr* ce qu'on va faire au quotidien) du projet. En voici un résumé, détaillé dans les prochaines parties :

- Les **Développers** pull depuis la **dev** distante sur GitHub dans leur **dev** locale
- Les **Développers** créé une branche locale à partir de leur **dev** locale
- Les **Développers** développent et commit autant de fois qu'il en ont besoin
- Les **Développers** squash (fusionnent) leurs commits en un seul commit commenté
- Les **Développers** push leur branche **locale** sur une branche **distante**
- Les **Développers** vérifient que ce qui est push est bien valide
- Les **Développers** font une Merge/Pull Request à un **Maintener** et reprennent une autre fonctionnalité à développer
- Le **Maintener** examine le code et revient vers le Développeur au besoin
- Le **Maintener** résout les conflits s'il y en a
- Le **Maintener** accepte la Merge/Pull Request et **merge** la branche à la **dev**
- Une fois par semaine, le **Maintener** merge la **dev** et la **main**


### Rebase et Pull

La récupération du code est classique. Le developper a juste à pull le code depuis la **dev**.

- ``git pull origin dev``

Néanmoins, n'étant jamais à l'abri d'une merge, je vous recommande d'utiliser un rebase en même temps.

- ``git pull -r origin dev``

Le `-r` veut bien entendu dire `rebase`. Ce qu'il va faire, c'est pull toute la **dev**, puis rejouer vos commits locaux **après** ceux de la **dev**. Il est donc important que vous commitiez vos changements avant de ``pull -r``.

### Rebase/Squash et Push

Afin de faciliter le travail du Maintener et garder un Git propre, lorsque vous pushez une branche, je vous recommande de ne push qu'un seul commit contenant tous vos développements.
Cela ne veut pas dire que vous n'allez commit qu'une seule fois par branche, mais que vous allez **squasher** (fusionner) vos commits avant de push. Un petit pseudo code :

- Vous développez et faites **5 commits**
- Vous estimez qu'il est temps de **push**
- Vous **fusionnez** vos **5 commits** en **un seul** que vous **commenté**
- Vous **pushez** votre branche sur GitHub, elle ne contient qu'un **seul commit** **commenté**

Pour **squasher** (fusionner) vos commits, il y a plusieurs écoles. Personnellement j'utilise le ``reset`` ainsi :
- Comptez vos commits depuis la création de la branche. Ne comptez que les votres.
    - Pour voir les commits et les compter, un petit coup de ``git log`` suffit
    - Le nombre que vous obtenez est le nombre ``N``, qui est le nombre de commit à squash
- Annulez ces commits pour que tout vos changements reviennent en ``staged``
    - ``git reset --soft @~N`` où N est le nombre de commit à squash
    - Pour observer ce qui s'est passé, vous pouvez donner un coup de ``git status``. Vous verrez que le flag ``--soft`` a placé le contenu de vos ``N`` commits dans le ``staged``, comme si vous les aviez ``git add``
    - Si vous touchez au code à ce moment, n'oubliez de ``git add`` vos modifications
- Il ne vous reste plus qu'à commit tout cela :
    - ``git commit -S``
    - Le ``-S`` est optionnelle si vous avez activé la signature automatique de vos commits
    - Cette commande, sans commentaire derrière, ouvrira un éditeur où vous devrez détailler le contenu du commit. Merci de scrupuleusement respecter le format détaillé dans la partie **Nomenclature**.

Si vous ne voulez pas **squash** l'entièreté de vos commits, merci de les nettoyer un minimum (pas de commit "à finir demain") et de n'envoyer que les commits pertinents.

Une fois vos commits **squasher**, je vous recommande de ``pull -r`` votre code, afin de prendre en compte d'éventuelle changement sur la **dev**. Cela peut bien sûr entrainer des conflits que vous devrez gérer avant le push final.

- ``git pull -r origin dev``
    - Résolvez les conflits s'il y en a
- ``git push -u origin NOM_BRANCHE``
    - le flag ``-u`` mettra la branche distante créer par le ``push`` comme ``upstream`` (*ndlr* votre branche locale trackera automatiquement la distante)
    - Veillez bien à ce que le ``NOM_BRANCHE`` concorde bien avec votre branche locale
- Retourner sur votre branche **dev** locale et mettez là à jour
    - ``git pull -r origin dev``
- Vous êtes maintenant prêt à prendre une autre fonctionnalité à développer, après avoir effectué une Merge/Pull Request !

### Pull Request/Merge Request

La PR/MR se fait directement sur l'interface GitHub, je vous renvoie donc à sa doc : https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request

En cas de problème, je trouve qu'il est plus rapide de supprimer la PR/MR puis d'en refaire une autre, plutôt que d'essayer de la modifier. A vous de voir après.

Affectez/Signalez votre PR/MR à un **Maintener** (de préférence sur GitHub ou le chan git de Discord, sinon Messenger).
