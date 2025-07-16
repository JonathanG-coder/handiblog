# 📚 Conventions de Nommage & Structure du Projet

Ce document définit les règles de nommage et d’organisation des fichiers dans le projet **Handiblog**, afin d’assurer la cohérence, la lisibilité du code et éviter les erreurs liées à la casse.

---

## 📁 Structure des dossiers

- Tous les noms de **dossiers** doivent être en **minuscule**, avec des **tirets (`-`)** si plusieurs mots.

 ✅ Exemples valides

/routes  
/controllers  
/views  
/public/images  

 ❌ À éviter

/Routes  
/MyControllers  
/PublicImages  

## 📄 Nom des fichiers

Les fichiers doivent être nommés en minuscule, avec des tirets (-) si besoin.

 ✅ Correct

user-controller.js  
formulaire-contact.twig  
main-style.css  

 ❌ À éviter

UserController.js  
formulaireContact.twig  
MainStyle.css  

## 🧩 Classes CSS

Utiliser le kebab-case (minuscules + tirets) pour toutes les classes CSS.

```html
<!-- ✅ Correct -->
<div class="form-group error-message"></div>

<!-- ❌ À éviter -->
<div class="FormGroup errorMessage"></div>


⚙️ ID HTML
Utiliser le camelCase pour les identifiants HTML (id).

<!-- ✅ Correct -->
<input id="userEmail" />
<section id="mainContent"></section>

<!-- ❌ À éviter -->
<input id="user_email" />
<section id="Main_Content"></section>

🧠 Variables & Fonctions JS
Utiliser le camelCase pour toutes les variables, fonctions et constantes JavaScript.

✅ Correct
let userName = "Jean";
function getUserData() {
  // ...
}

❌ À éviter
let user_name = "Jean";
function Get_User_Data() {
  // ...
}

## 🧩 Nommage des composants serveur

| Élément       | Convention              | Exemple                |
|---------------|-------------------------|------------------------|
| Routes        | kebab-case              | /user-profile, /add-post |
| Contrôleurs   | Suffixe `-controller.js` | auth-controller.js      |
| Modèles       | Suffixe `-model.js`     | user-model.js           |
| Vues (Twig)   | kebab-case              | create-post.twig        |

🧼 Règles générales

✅ Encodage recommandé :
UTF-8 (sans BOM)

❌ À éviter :
- Accents dans les noms de fichiers
- Espaces
- Majuscules mal placées
- Caractères spéciaux

✅ Toujours respecter la casse exacte dans les noms de fichiers et lors des importations :

✅ Correct
import authController from './controllers/auth-controller.js';

❌ Incorrect (problème de casse sous Linux/macOS)
import AuthController from './Controllers/Auth-Controller.js';

✅ Exemple de structure recommandée

handiblog/
│
├── app.js
├── .env
├── controllers/
│   └── article-controller.js
├── models/
│   └── user-model.js
├── routes/
│   └── article-routes.js
├── views/
│   ├── base-layout.twig
│   └── article-form.twig
├── public/
│   ├── css/
│   │   └── main-style.css
│   └── images/
│       └── logo.png

