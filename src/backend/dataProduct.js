import carne3D from '../img/Redefine-Beef-Flank.webp';
import burger from '../img/burger.jpg';
import macinato from '../img/Mince-850g-BG.jpg';
import tofu from '../img/tofu-grigliato.jpg';
import ricottaDiMandorle from '../img/ricotta.jpg';
import pistacchino from '../img/formaggioPistacchio.png';
import mozzarella from '../img/Mozarelle.jpg';
import caciotta from '../img/formaggio-vegano-caciotta.jpg';
import formaggioNoci from '../img/formaggio-vegano-alle-noci-e-hatcho-miso.jpg';
import tortaMirtilli from '../img/torta_veg_mirtilli.jpg';
import biscottiVeg from '../img/biscottiVeg.jpg';
import brownies from '../img/BROWNIES.jpg';
import tiramisu from '../img/tiramisù.jpg';
import latteSoia from '../img/latteSoia.webp';

const dataProduct = {
  meetProducts: [
    { id: 0, alimento: 'Beef 3D', immagine: carne3D, prezzo: 9 },
    { id: 1, alimento: 'Burger di barbabietola', immagine: burger, prezzo: 5 },
    { id: 2, alimento: 'Macinato vegano', immagine: macinato, prezzo: 3 },
    { id: 3, alimento: 'Tofù', immagine: tofu, prezzo: 7 }
  ],
  cheeseProducts: [
    { id: 0, alimento: 'Ricotta di mandorle', immagine: ricottaDiMandorle, prezzo:8 },
    { id: 1, alimento: 'Pistacchino', immagine: pistacchino, prezzo:15 },
    { id: 2, alimento: 'Mozzarelle', immagine: mozzarella, prezzo:10 },
    { id: 3, alimento: 'Caciotta al tofu', immagine: caciotta, prezzo:11 },
    { id: 4, alimento: 'Formaggio alle noci', immagine: formaggioNoci, prezzo:6 }
  ],
  sweetProducts: [
    { id: 0, alimento: 'Biscotti', immagine: biscottiVeg, prezzo:5 },
    { id: 1, alimento: 'Torta ai mirtilli', immagine: tortaMirtilli, prezzo: 7 },
    { id: 2, alimento: 'Brownies', immagine: brownies, prezzo: 6 },
    { id: 3, alimento: 'Tiramisù', immagine: tiramisu, prezzo:5 }
  ],
  milkProducts: [
    { id: 0, alimento: 'Latte di soia', immagine: latteSoia, prezzo: 2 }
  ]
}

export default dataProduct;