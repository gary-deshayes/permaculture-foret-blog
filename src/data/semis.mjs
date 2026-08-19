// ============================================================
// Données du calendrier des semis — 30 légumes × 5 climats FR
// Les mois sont donnés pour le climat "bassin parisien" (référence).
// Chaque zone applique un décalage (off) par légume.
// ============================================================

export const ZONES = {
  ocean: {
    label: "Océanique",
    emoji: "🌊",
    desc: "Ouest et littoral : Bretagne, Normandie, Nord, Pays de la Loire, Poitou. Hivers doux et humides, étés frais.",
    color: "#55803f",
  },
  bassin: {
    label: "Bassin parisien",
    emoji: "🏞️",
    desc: "Île-de-France, Centre-Val de Loire, Bourgogne, Champagne. Climat de transition, saisons marquées.",
    color: "#3c6b2f",
  },
  continental: {
    label: "Continental",
    emoji: "🌲",
    desc: "Est et intérieur : Alsace, Lorraine, Franche-Comté, Auvergne, Rhône-Alpes. Hivers rudes, étés chauds et orageux.",
    color: "#1e4a2b",
  },
  med: {
    label: "Méditerranéen",
    emoji: "☀️",
    desc: "Sud : PACA, Languedoc, Roussillon, Corse. Hivers doux, étés secs, semis précoces possibles.",
    color: "#d99a3d",
  },
  mont: {
    label: "Montagnard",
    emoji: "⛰️",
    desc: "Alpes, Pyrénées, Massif Central : altitude. Saison courte, gelées tardives, tout démarre plus tard.",
    color: "#7fa35e",
  },
};

// [ville, lat, lon, zone] — chef-lieux et grandes villes de France
export const CITIES = [
  ["Paris", 48.8566, 2.3522, "bassin"], ["Versailles", 48.8049, 2.1204, "bassin"],
  ["Melun", 48.5399, 2.66, "bassin"], ["Évry", 48.6298, 2.4418, "bassin"],
  ["Cergy", 49.0365, 2.073, "bassin"], ["Nanterre", 48.8924, 2.2072, "bassin"],
  ["Orléans", 47.9029, 1.9093, "bassin"], ["Blois", 47.5861, 1.3359, "bassin"],
  ["Tours", 47.3941, 0.6848, "bassin"], ["Bourges", 47.081, 2.3988, "bassin"],
  ["Chartres", 48.4469, 1.4893, "bassin"], ["Dijon", 47.322, 5.0415, "bassin"],
  ["Châlons-en-Champagne", 48.9567, 4.3634, "bassin"], ["Auxerre", 47.7953, 3.5689, "bassin"],
  ["Nevers", 46.9907, 3.1596, "bassin"], ["Macon", 46.3063, 4.8282, "bassin"],
  ["Brest", 48.3904, -4.4861, "ocean"], ["Rennes", 48.1173, -1.6778, "ocean"],
  ["Nantes", 47.2184, -1.5536, "ocean"], ["Angers", 47.4784, -0.5632, "ocean"],
  ["Caen", 49.1829, -0.3707, "ocean"], ["Rouen", 49.4432, 1.0993, "ocean"],
  ["Lille", 50.6292, 3.0573, "ocean"], ["Amiens", 49.8941, 2.2958, "ocean"],
  ["La Rochelle", 46.1603, -1.1511, "ocean"], ["Poitiers", 46.5802, 0.3404, "ocean"],
  ["Limoges", 45.8336, 1.2611, "ocean"], ["Le Mans", 48.0061, 0.1996, "ocean"],
  ["Quimper", 47.996, -4.1024, "ocean"], ["Saint-Brieuc", 48.5136, -2.7603, "ocean"],
  ["Vannes", 47.6582, -2.7608, "ocean"], ["Lorient", 47.7483, -3.3704, "ocean"],
  ["Strasbourg", 48.5734, 7.7521, "continental"], ["Metz", 49.1193, 6.1757, "continental"],
  ["Nancy", 48.6921, 6.1844, "continental"], ["Besançon", 47.2378, 6.0241, "continental"],
  ["Clermont-Ferrand", 45.7772, 3.087, "continental"], ["Lyon", 45.764, 4.8357, "continental"],
  ["Grenoble", 45.1885, 5.7245, "continental"], ["Chambéry", 45.5646, 5.9178, "continental"],
  ["Annecy", 45.8992, 6.1294, "continental"], ["Saint-Étienne", 45.4397, 4.3872, "continental"],
  ["Belfort", 47.6397, 6.8639, "continental"], ["Épinal", 48.1741, 6.4497, "continental"],
  ["Troyes", 48.2973, 4.0744, "continental"], ["Mulhouse", 47.7508, 7.3359, "continental"],
  ["Marseille", 43.2965, 5.3698, "med"], ["Nice", 43.7102, 7.262, "med"],
  ["Toulon", 43.1242, 5.928, "med"], ["Montpellier", 43.6108, 3.8767, "med"],
  ["Nîmes", 43.8367, 4.3601, "med"], ["Perpignan", 42.6887, 2.8948, "med"],
  ["Avignon", 43.9493, 4.8055, "med"], ["Aix-en-Provence", 43.5297, 5.4474, "med"],
  ["Carcassonne", 43.213, 2.3491, "med"], ["Béziers", 43.3442, 3.2158, "med"],
  ["Arles", 43.6766, 4.6277, "med"], ["Ajaccio", 41.9192, 8.7386, "med"],
  ["Bastia", 42.6973, 9.4509, "med"], ["Gap", 44.5596, 6.0798, "mont"],
  ["Briançon", 44.8998, 6.6422, "mont"], ["Annecy (altitude)", 45.8992, 6.1294, "mont"],
  ["Tarbes", 43.2329, 0.0772, "mont"], ["Foix", 42.9651, 1.607, "mont"],
  ["Aurillac", 44.9305, 2.4426, "mont"], ["Le Puy-en-Velay", 45.0437, 3.8853, "mont"],
  ["Mende", 44.5186, 3.5025, "mont"], ["Bourg-Saint-Maurice", 45.6171, 6.7687, "mont"],
  ["Chamonix", 45.9237, 6.8694, "mont"], ["Saint-Lô", 49.1164, -1.0903, "ocean"],
  ["Cherbourg", 49.633, -1.6259, "ocean"], ["Alençon", 48.431, 0.0913, "ocean"],
  ["Laval", 48.0785, -0.7669, "ocean"], ["Niort", 46.3242, -0.4648, "ocean"],
  ["Angoulême", 45.6484, 0.1562, "ocean"], ["Pau", 43.2951, -0.3708, "ocean"],
  ["Bordeaux", 44.8378, -0.5792, "ocean"], ["Agen", 44.2031, 0.6164, "ocean"],
  ["Toulouse", 43.6047, 1.4442, "ocean"], ["Rodez", 44.3526, 2.5751, "mont"],
  ["Valence", 44.9334, 4.8924, "med"], ["Albi", 43.9288, 2.1466, "ocean"],
  ["Castres", 43.6058, 2.2407, "ocean"], ["Montauban", 44.0176, 1.3553, "ocean"],
];

// Décalage par défaut (en mois) appliqué à chaque zone
const DEF_OFF = { med: -1, continental: 1, mont: 2, ocean: 0, bassin: 0 };

// Végétaux : n = nom, f = famille, d = profondeur (cm), e = espacement (cm),
// su = soleil, c = compagnons, tip = conseil, link = article du blog, aff = lien graines
export const VEGS = [
  { n: "Tomate", f: "Solanacées", d: 1, e: 60, su: "Plein soleil", c: "Basilic, carotte, œillet d'Inde", tip: "Repiquez après les gelées ; buttez en cours de saison.", link: "/blog/plantes-compagnes-tomates/", abri: [2, 3, 4], terre: [5], recolte: [7, 8, 9, 10] },
  { n: "Courgette", f: "Cucurbitacées", d: 2, e: 90, su: "Plein soleil", c: "Capucine, maïs, haricot", tip: "2 plants suffisent pour une famille ; arrosez au pied.", link: null, abri: [4], terre: [5, 6], recolte: [7, 8, 9, 10] },
  { n: "Carotte", f: "Apiacées", d: 1, e: 8, su: "Soleil ou mi-ombre", c: "Poireau, oignon, radis", tip: "Semez clair, éclaircissez à 5 cm ; sol sans cailloux ni fumier frais.", link: null, abri: [], terre: [3, 4, 5, 6, 7, 8], recolte: [6, 7, 8, 9, 10, 11] },
  { n: "Radis", f: "Brassicacées", d: 1, e: 5, su: "Soleil ou mi-ombre", c: "Carotte, laitue, haricot", tip: "Semez toutes les 3 semaines pour en avoir toute la saison.", link: null, abri: [], terre: [2, 3, 4, 5, 6, 7, 8, 9], recolte: [4, 5, 6, 7, 8, 9, 10, 11] },
  { n: "Laitue", f: "Astéracées", d: 0.5, e: 30, su: "Mi-ombre en été", c: "Radis, carotte, fraisier", tip: "Étalez les semis ; en été choisissez des variétés résistantes à la montaison.", link: null, abri: [2, 3], terre: [3, 4, 5, 6, 7, 8], recolte: [5, 6, 7, 8, 9, 10, 11] },
  { n: "Haricot vert", f: "Fabacées", d: 3, e: 10, su: "Plein soleil", c: "Maïs, céleri, pomme de terre", tip: "Ne semez que quand le sol est réchauffé (10 °C minimum).", link: null, abri: [], terre: [5, 6, 7], recolte: [7, 8, 9, 10] },
  { n: "Poireau", f: "Amaryllidacées", d: 1, e: 15, su: "Plein soleil", c: "Carotte, céleri, fraisier", tip: "Repiquez les plants quand ils ont la taille d'un crayon.", link: null, abri: [2, 3], terre: [4, 5], recolte: [10, 11, 12, 1, 2, 3, 4] },
  { n: "Épinard", f: "Chénopodiacées", d: 2, e: 15, su: "Mi-ombre", c: "Fraisier, chou, navet", tip: "Semez en août-septembre pour l'hiver ; monte vite en été.", link: "/blog/legumes-hiver-semis-aout/", abri: [], terre: [3, 4, 8, 9], recolte: [5, 6, 10, 11, 12, 1, 2, 3] },
  { n: "Mâche", f: "Valérianacées", d: 0.5, e: 10, su: "Mi-ombre", c: "Laitue, radis", tip: "La salade d'hiver par excellence, rustique jusqu'à -15 °C.", link: "/blog/legumes-hiver-semis-aout/", abri: [], terre: [8, 9], recolte: [10, 11, 12, 1, 2, 3] },
  { n: "Chou kale", f: "Brassicacées", d: 1, e: 60, su: "Plein soleil", c: "Betterave, céleri, oignon", tip: "Supportez les gelées : il devient plus doux après les premiers froids.", link: null, abri: [4, 5], terre: [6, 7], recolte: [10, 11, 12, 1, 2, 3] },
  { n: "Chou pommé", f: "Brassicacées", d: 1, e: 60, su: "Plein soleil", c: "Betterave, céleri, haricot", tip: "Arrosez régulièrement pour éviter l'éclatement des pommes.", link: null, abri: [3, 4], terre: [5, 6], recolte: [9, 10, 11, 12, 1, 2, 3] },
  { n: "Brocoli", f: "Brassicacées", d: 1, e: 50, su: "Plein soleil", c: "Betterave, céleri, oignon", tip: "Récoltez les têtes avant la floraison, les repousses suivront.", link: null, abri: [3, 4], terre: [5, 6], recolte: [9, 10, 11, 12] },
  { n: "Betterave", f: "Chénopodiacées", d: 2, e: 15, su: "Plein soleil", c: "Oignon, chou, céleri", tip: "Un semis = plusieurs plantules : éclaircissez sans pitié.", link: null, abri: [], terre: [4, 5, 6], recolte: [7, 8, 9, 10, 11] },
  { n: "Oignon", f: "Amaryllidacées", d: 1, e: 10, su: "Plein soleil", c: "Carotte, betterave, fraisier", tip: "Préférez les bulbilles en climat océanique, les semis ailleurs.", link: null, abri: [], terre: [3, 4], recolte: [7, 8, 9] },
  { n: "Ail", f: "Amaryllidacées", d: 3, e: 15, su: "Plein soleil", c: "Fraisier, tomate, carotte", tip: "Plantez les caïeux pointe en haut ; récoltez quand le feuillage jaunit.", link: null, abri: [], terre: [10, 11, 2, 3], recolte: [6, 7, 8] },
  { n: "Échalote", f: "Amaryllidacées", d: 3, e: 15, su: "Plein soleil", c: "Carotte, betterave", tip: "Se plante comme l'ail, en sol léger et drainé.", link: null, abri: [], terre: [2, 3], recolte: [6, 7, 8] },
  { n: "Pomme de terre", f: "Solanacées", d: 10, e: 40, su: "Plein soleil", c: "Haricot, chou, maïs", tip: "Plantez les tubercules germés ; buttez dès 15 cm de feuillage.", link: null, abri: [], terre: [3, 4, 5], recolte: [6, 7, 8, 9, 10] },
  { n: "Pois", f: "Fabacées", d: 3, e: 8, su: "Plein soleil", c: "Carotte, navet, laitue", tip: "Semis d'automne en climat doux, de printemps ailleurs.", link: null, abri: [], terre: [2, 3, 4, 10, 11], recolte: [5, 6, 7, 12, 1] },
  { n: "Fève", f: "Fabacées", d: 5, e: 20, su: "Plein soleil", c: "Pomme de terre, betterave", tip: "Résiste au froid : semez-la tôt, elle nourrit le sol en azote.", link: null, abri: [], terre: [2, 3, 10, 11], recolte: [5, 6, 7, 4] },
  { n: "Concombre", f: "Cucurbitacées", d: 2, e: 60, su: "Plein soleil", c: "Maïs, haricot, capucine", tip: "Sous abri au départ, puis palissez pour gagner de la place.", link: null, abri: [4], terre: [5], recolte: [7, 8, 9] },
  { n: "Melon", f: "Cucurbitacées", d: 2, e: 80, su: "Plein soleil", c: "Haricot, maïs", tip: "Exige de la chaleur : réservé au sud et aux serres ailleurs.", link: null, abri: [4], terre: [5], recolte: [7, 8, 9] },
  { n: "Courge / potiron", f: "Cucurbitacées", d: 3, e: 120, su: "Plein soleil", c: "Maïs, haricot, capucine", tip: "Laissez mûrir sur le plant ; se conserve des mois au sec.", link: null, abri: [4], terre: [5], recolte: [9, 10, 11] },
  { n: "Aubergine", f: "Solanacées", d: 1, e: 60, su: "Plein soleil", c: "Haricot, thym, estragon", tip: "Très frileuse : semez tôt sous abri, récoltez les fruits luisants.", link: null, abri: [2, 3, 4], terre: [5], recolte: [7, 8, 9, 10] },
  { n: "Poivron", f: "Solanacées", d: 1, e: 50, su: "Plein soleil", c: "Basilic, carotte, oignon", tip: "Comme l'aubergine, il a besoin de 6 mois de chaleur.", link: null, abri: [2, 3, 4], terre: [5], recolte: [7, 8, 9, 10] },
  { n: "Céleri", f: "Apiacées", d: 0.5, e: 30, su: "Plein soleil", c: "Chou, poireau, tomate", tip: "Sol riche et frais ; paillez généreusement en été.", link: null, abri: [3, 4], terre: [5], recolte: [9, 10, 11] },
  { n: "Basilic", f: "Lamiacées", d: 0.5, e: 25, su: "Plein soleil", c: "Tomate, poivron, asperge", tip: "Pincez les fleurs pour garder des feuilles tendres.", link: null, abri: [3, 4], terre: [5, 6], recolte: [6, 7, 8, 9, 10] },
  { n: "Persil", f: "Apiacées", d: 0.5, e: 15, su: "Mi-ombre", c: "Tomate, asperge, poireau", tip: "Lent à lever (3 semaines) : maintenez le sol humide.", link: null, abri: [], terre: [3, 4, 5, 6], recolte: [5, 6, 7, 8, 9, 10, 11] },
  { n: "Topinambour", f: "Astéracées", d: 10, e: 60, su: "Plein soleil", c: "Maïs, haricot", tip: "Plantez une fois, récoltez chaque hiver… et il revient tout seul.", link: null, abri: [], terre: [3, 4], recolte: [11, 12, 1, 2, 3] },
  { n: "Panais", f: "Apiacées", d: 1, e: 12, su: "Plein soleil", c: "Pomme de terre, oignon", tip: "Meilleur après les gelées : le froid sucre la racine.", link: null, abri: [], terre: [3, 4, 5], recolte: [10, 11, 12, 1, 2] },
  { n: "Navet", f: "Brassicacées", d: 1, e: 12, su: "Soleil ou mi-ombre", c: "Pois, laitue, haricot", tip: "Deux saisons : printemps et fin d'été. Arrosez pour éviter la pousse à graine.", link: null, abri: [], terre: [3, 4, 8, 9], recolte: [5, 6, 10, 11, 12] },
];

// Ajoute les décalages par défaut
export function withOffsets() {
  return VEGS.map((v) => ({ ...v, off: DEF_OFF }));
}

export const MONTHS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
