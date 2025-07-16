import express from 'express';
import { authorizeRoles } from '../middleware/roleMiddleware.js';
import { verifyToken } from '../middleware/authMiddleware.js';
import { register, login, verifyAccount, showLoginForm, showRegisterForm } from '../controllers/usersController.js';

const router = express.Router();

// Route formulaire d'inscription
router.get('/register', showRegisterForm);
router.post('/register', register);

// Route formulaire de connexion
router.get('/login', showLoginForm);
router.post('/login', login);

// Vérification du compte
router.get('/verify/:token', verifyAccount);

// Route protégée (authentifié)
router.get('/profile', verifyToken, (req, res) => {
  res.send('Bienvenue sur ton profil');
});

// Route admin (authentifié + admin)
router.get('/admin', verifyToken, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Bienvenue admin' });
});

export default router;
