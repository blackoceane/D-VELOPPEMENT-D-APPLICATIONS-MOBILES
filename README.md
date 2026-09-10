# Notes Expo — Reconnexion rapide (valable pour N'IMPORTE QUEL projet Expo)

## 🆕 Créer un nouveau projet (template simple, comme dans le cours)

```bash
cd ~/essai                     # ou le dossier parent où tu veux ton projet
npx create-expo-app NOM_DU_PROJET --template blank
cd NOM_DU_PROJET
```

- Remplace `NOM_DU_PROJET` par le nom que tu veux.
- Le flag `--template blank` te donne directement `App.js` à la racine (pas de TypeScript, pas d'Expo Router) — structure simple pour apprendre.

Si tu veux aussi tester la version Web sur ce nouveau projet, installe les dépendances une fois :
```bash
npx expo install react-dom react-native-web react-native-safe-area-context
```

---

## 🚀 Démarrage rapide (à chaque session, pour n'importe quel projet)

```bash
cd ~/essai/NOM_DU_PROJET
npx expo start --tunnel
```

- **Toujours utiliser `--tunnel`** dans la VM, sinon le téléphone ne pourra pas se connecter (erreur "Something went wrong").
- Attends de voir `Tunnel ready.` avant de scanner le QR code.
- Le tunnel est un peu plus lent à charger que le mode local — patience.

---

## 📱 Se connecter sur le téléphone

1. Ouvrir l'app **Expo Go**
2. Scanner le QR code affiché dans le terminal
3. Attendre le chargement (peut prendre 10-30 secondes avec le tunnel)

Si ça ne fonctionne toujours pas :
```bash
npx expo start --tunnel -c
```
Le `-c` vide le cache — utile si un vieux code reste affiché ou si ça bloque.

---

## 💻 Se connecter sur le navigateur de l'ordi

1. Une fois le serveur démarré, appuyer sur la touche **`w`** dans le terminal
2. Ou ouvrir directement : `http://localhost:8081`

Si le navigateur ne fonctionne pas / erreur de dépendances manquantes :
```bash
npx expo install react-dom react-native-web react-native-safe-area-context
```
(À faire une seule fois par projet, normalement déjà fait pour `essai2`.)

---

## ✏️ Modifier `App.js` — Rechargement automatique

- **Pas besoin de redémarrer le serveur** à chaque modification !
- Sauvegarde ton fichier (`Ctrl+S`) → l'app se recharge automatiquement (Fast Refresh) sur le téléphone ET le navigateur.
- Si le rechargement automatique ne semble pas fonctionner :
  - Sur le téléphone : secoue le téléphone pour ouvrir le menu développeur → **Reload**
  - Dans le terminal : appuie sur **`r`** pour forcer un reload manuel

---

## 🛠️ Petits problèmes fréquents

| Problème | Solution |
|---|---|
| Erreur `libnspr4.so: cannot open shared object file` | Sans importance, n'empêche pas l'app de fonctionner. Pour la régler définitivement : `sudo apt install libnspr4` |
| Le téléphone n'arrive pas à se connecter | Utiliser `--tunnel` |
| Ancien code encore affiché après modification | `npx expo start --tunnel -c` (vide le cache) |
| Le navigateur affiche une page blanche/erreur | Vérifier que `react-dom` et `react-native-web` sont installés (voir ci-dessus) |
| Le serveur semble figé ou bugué | `Ctrl+C` pour arrêter, puis relancer `npx expo start --tunnel` |

---

## ⌨️ Commandes utiles dans le terminal (pendant que le serveur tourne)

| Touche | Action |
|---|---|
| `w` | Ouvrir la version Web |
| `r` | Recharger l'app manuellement |
| `s` | Basculer vers "development build" |
| `?` | Afficher toutes les commandes disponibles |
| `Ctrl+C` | Arrêter le serveur |

---

## 📂 Rappel de la structure d'un projet (template blank)

```
NOM_DU_PROJET/
├── App.js       ← fichier principal à modifier (point de départ)
├── index.js     ← point d'entrée technique, ne pas toucher
├── app.json     ← métadonnées du projet
├── assets/      ← images et ressources statiques
└── package.json ← liste des dépendances
```

---

## ✅ Checklist rapide pour chaque nouveau projet

- [ ] `npx create-expo-app NOM --template blank`
- [ ] `cd NOM`
- [ ] `npx expo install react-dom react-native-web react-native-safe-area-context` (si tu veux tester sur navigateur)
- [ ] `npx expo start --tunnel`
- [ ] Scanner le QR code avec Expo Go
