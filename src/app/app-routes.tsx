import { redirect } from 'react-router-dom';
import Accueil from './accueil/accueil';
import Produits from './produits/produits';
import Commandes from './commandes/commandes';
import Ventes from './ventes/ventes';
import Clients from './clients/clients';
import Devis from './devis/devis';

export const routes = [
  { index: true, loader: () => redirect('accueil') },
  { path: 'accueil', element: <Accueil />, text: 'Accueil' },
  { path: 'produits', element: <Produits />, text: 'Produits' },
  { path: 'commandes', element: <Commandes />, text: 'Commandes' },
  { path: 'ventes', element: <Ventes />, text: 'Ventes' },
  { path: 'clients', element: <Clients />, text: 'Clients' },
  { path: 'devis', element: <Devis />, text: 'Devis' }
];
