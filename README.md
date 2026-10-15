# Atelier Informatique Potvin — sites Web

Code source des deux sites de l'entreprise, servis par une seule application :

| Domaine | Site | Contenu |
| --- | --- | --- |
| [atelierpotvin.ca](https://atelierpotvin.ca) | Atelier Informatique Potvin | Dépannage, assistance à distance, réparation, installation et réseau à Nicolet et dans les environs |
| [aipconceptionweb.ca](https://aipconceptionweb.ca) | AIP Conception Web | Création de sites Web, boutiques en ligne et CMS sur mesure pour PME |

Le mode actif est déterminé par l'en-tête `Host` de la requête
([app/layout.tsx](app/layout.tsx), [app/components.tsx](app/components.tsx)) :
même code, même déploiement, identité visuelle et contenus distincts.
L'ancien domaine `aipcreation.ca` est redirigé vers `aipconceptionweb.ca`.

## Stack technique

- Next.js 16.2 / React 19.2, rendus par [vinext](https://github.com/cloudflare/vinext) 0.0.50 et Vite 8
- Cloudflare Workers (point d'entrée [worker/index.ts](worker/index.ts)) et plugin Cloudflare pour Vite
- CSS écrit à la main (pas de classes Tailwind dans les pages), découpé en modules — voir plus bas
- Drizzle ORM présent mais inutilisé pour l'instant : le schéma [db/schema.ts](db/schema.ts) est vide et aucun binding D1/R2 n'est déclaré dans [.openai/hosting.json](.openai/hosting.json). L'exemple [examples/d1/](examples/d1/) montre la marche à suivre le jour où une base sera nécessaire.

## Prérequis

- Node.js `>= 22.13.0`
- Les scripts `lint` et `db:generate` passent par `bash` (`scripts/sites-env.sh`) : sous Windows, utilisez Git Bash ou WSL. `build` et `test` fonctionnent en PowerShell/cmd.

## Commandes

| Commande | Effet |
| --- | --- |
| `npm run dev` | Serveur de développement Vite/vinext |
| `npm run build` | Build de production dans `dist/` (c'est ce que vérifie la CI) |
| `npm run start` | Sert le build localement |
| `npm test` | Build complet, puis les tests de rendu (`node --test`) |
| `npm run install:ci` | Installation verrouillée (`npm ci`) utilisée par la plateforme Sites |
| `npm run lint` | ESLint sur le projet (via bash) |
| `npm run db:generate` | Génère une migration Drizzle après modification du schéma |

## Structure

```text
app/                  Pages et composants (App Router)
  layout.tsx          Métadonnées et identité selon le domaine
  components.tsx      En-tête, pied de page, sections partagées
  seo.ts              URL canoniques, helpers de métadonnées et JSON-LD
  page.tsx            Page d'accueil (deux modes)
  <30 dossiers>       Une page par service ou par ville desservie
  styles/             Les six modules CSS, importés par globals.css
  globals.css         Manifeste d'imports CSS (ne contient aucune règle)
worker/index.ts       Redirections entre domaines, robots/sitemap du site Web, optimisation d'images
public/
  atelierpotvin/      Logos et favicons v20 du site informatique
  aipconceptionweb/   Logos et favicons v20 du site Web
  HERO/               Images principales des pages d'accueil
tests/                Test de rendu des deux modes (titres, favicons, manifest)
.github/workflows/    CI : build sur chaque push vers `main`
```

## Styles : ordre de la cascade

[app/globals.css](app/globals.css) importe les six modules de
[app/styles/](app/styles/) dans un ordre précis, hérité de l'historique du
fichier monolithique d'origine. **Ne réordonnez pas ces imports** : les
modules postérieurs écrasent volontairement les antérieurs (surcharges
successives, souvent en `!important`), et changer l'ordre change le rendu.
Pour modifier un style, ajoutez la règle à la fin du module concerné :

1. `01-base-et-accueil.css` — reset, variables, accueil et services d'origine
2. `02-responsive-et-cta.css` — responsive global, boutons et appels à l'action
3. `03-en-tete-et-parcours.css` — architecture de l'en-tête, assistance, parcours
4. `04-deux-domaines.css` — bascule entre les deux modes de site
5. `05-creation-editorial.css` — système éditorial d'AIP Conception Web
6. `06-atelier-et-portfolio.css` — en-tête/héros Atelier, portfolio, finitions

Le découpage est à rendu constant : le CSS compilé produit par le build est
identique, octet pour octet, à celui du fichier monolithique d'origine.

## Identité visuelle

Chaque site a ses logos et favicons sous `public/<domaine>/`, référencés avec
le suffixe `?v=20` dans le code. Incrémentez cette version lors d'un
changement de logo pour forcer le rafraîchissement des caches. Les fichiers
sources (originaux avant optimisation) et les anciennes versions sont
conservés localement dans `AIP_V20_ASSETS/`, `assets/` et les dossiers
`sauvegarde-*/` : ils sont exclus de Git par [.gitignore](.gitignore) et ne
doivent pas être commités.

## Routage entre domaines

[worker/index.ts](worker/index.ts) applique, avant de servir les pages :

- `www.` et `atelierpotvin.tech` → `atelierpotvin.ca` (301)
- `aipcreation.ca` (et ses `www.`) → `aipconceptionweb.ca` (301)
- les pages « création Web » demandées sur `atelierpotvin.ca` → même chemin sur `aipconceptionweb.ca`, et inversement pour les pages « informatique » (301)
- `robots.txt` et `sitemap.xml` générés à la volée pour le site Web
- optimisation d'images via `/_vinext/image`

## Tests et CI

`npm test` reconstruit le site puis rend la page d'accueil dans les deux
modes (simulation des hôtes `localhost` et `aipconceptionweb.ca`) et vérifie
le statut 200, le titre et les références d'icônes v20.
Le workflow [.github/workflows/build.yml](.github/workflows/build.yml)
exécute `npm ci` puis `npm run build` sur Ubuntu/Node 22 à chaque push vers
`main` et sur les pull requests.

## Déploiement

Le déploiement est assuré par la plateforme Sites (vinext) à partir du
commit poussé sur `main` : poussez, vérifiez que la CI est verte, puis que
le build distant a bien pris le commit. Les dossiers `dist/`, `.wrangler/`
et `.sites-runtime/` sont des artefacts locaux ignorés par Git.

## Authentification (optionnel, non utilisé par les pages publiques)

[app/chatgpt-auth.ts](app/chatgpt-auth.ts) fournit les helpers « Sign in
with ChatGPT » de la plateforme Sites (`getChatGPTUser`,
`requireChatGPTUser`, chemins de connexion/déconnexion). Aucune page
actuelle ne les appelle : le site est entièrement public et anonyme.
