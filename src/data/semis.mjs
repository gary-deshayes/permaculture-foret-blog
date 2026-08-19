// ============================================================
// Données du calendrier des semis — 30 légumes
// Modèle : fenêtres de semis en SEMAINES RELATIVES aux
// dernières gelées moyennes (semaine 0 = dernière gelée).
// Chaque ville a sa semaine de gelées (f) ; le calendrier
// calcule les mois actifs à partir de cette date.
// ============================================================

export const ZONES = {
  ocean: {
    label: "Océanique",
    emoji: "🌊",
    frost: 12,
    desc: "Ouest et littoral (Bretagne, Normandie, Nord, Pays de la Loire). Hivers doux, gelées tardives vers mi-mars.",
    color: "#55803f",
  },
  bassin: {
    label: "Bassin parisien",
    emoji: "🏞️",
    frost: 15,
    desc: "Île-de-France, Centre, Bourgogne, Champagne. Gelées tardives vers mi-avril, saisons marquées.",
    color: "#3c6b2f",
  },
  continental: {
    label: "Continental",
    emoji: "🌲",
    frost: 17,
    desc: "Est et intérieur (Alsace, Lorraine, Franche-Comté, Auvergne, Rhône-Alpes). Hivers rudes, gelées jusqu'à fin avril.",
    color: "#1e4a2b",
  },
  med: {
    label: "Méditerranéen",
    emoji: "☀️",
    frost: 8,
    desc: "Sud (PACA, Languedoc, Roussillon, Corse). Hivers doux, gelées rares — souvent terminées fin février.",
    color: "#d99a3d",
  },
  mont: {
    label: "Montagnard",
    emoji: "⛰️",
    frost: 21,
    desc: "Alpes, Pyrénées, Massif Central. Altitude : gelées possibles jusqu'à fin mai, saison courte.",
    color: "#7fa35e",
  },
};

// [ville, lat, lon, zone, semaine de gelées moyenne]
export const CITIES = [
  ["Paris", 48.8566, 2.3522, "bassin", 16], ["Versailles", 48.8049, 2.1204, "bassin", 16],
  ["Melun", 48.5399, 2.66, "bassin", 16], ["Évry", 48.6298, 2.4418, "bassin", 16],
  ["Cergy", 49.0365, 2.073, "bassin", 16], ["Nanterre", 48.8924, 2.2072, "bassin", 16],
  ["Orléans", 47.9029, 1.9093, "bassin", 16], ["Blois", 47.5861, 1.3359, "bassin", 15],
  ["Tours", 47.3941, 0.6848, "bassin", 15], ["Bourges", 47.081, 2.3988, "bassin", 16],
  ["Chartres", 48.4469, 1.4893, "bassin", 16], ["Dijon", 47.322, 5.0415, "bassin", 17],
  ["Châlons-en-Champagne", 48.9567, 4.3634, "bassin", 16], ["Auxerre", 47.7953, 3.5689, "bassin", 16],
  ["Nevers", 46.9907, 3.1596, "bassin", 16], ["Mâcon", 46.3063, 4.8282, "bassin", 17],
  ["Brest", 48.3904, -4.4861, "ocean", 11], ["Rennes", 48.1173, -1.6778, "ocean", 12],
  ["Nantes", 47.2184, -1.5536, "ocean", 12], ["Angers", 47.4784, -0.5632, "ocean", 12],
  ["Caen", 49.1829, -0.3707, "ocean", 13], ["Rouen", 49.4432, 1.0993, "ocean", 14],
  ["Lille", 50.6292, 3.0573, "ocean", 15], ["Amiens", 49.8941, 2.2958, "ocean", 15],
  ["La Rochelle", 46.1603, -1.1511, "ocean", 10], ["Poitiers", 46.5802, 0.3404, "ocean", 12],
  ["Limoges", 45.8336, 1.2611, "ocean", 14], ["Le Mans", 48.0061, 0.1996, "ocean", 13],
  ["Quimper", 47.996, -4.1024, "ocean", 11], ["Saint-Brieuc", 48.5136, -2.7603, "ocean", 12],
  ["Vannes", 47.6582, -2.7608, "ocean", 11], ["Lorient", 47.7483, -3.3704, "ocean", 11],
  ["Bordeaux", 44.8378, -0.5792, "ocean", 11], ["Agen", 44.2031, 0.6164, "ocean", 11],
  ["Toulouse", 43.6047, 1.4442, "ocean", 12], ["Albi", 43.9288, 2.1466, "ocean", 13],
  ["Montauban", 44.0176, 1.3553, "ocean", 12], ["Castres", 43.6058, 2.2407, "ocean", 13],
  ["Pau", 43.2951, -0.3708, "ocean", 13], ["Saint-Lô", 49.1164, -1.0903, "ocean", 12],
  ["Cherbourg", 49.633, -1.6259, "ocean", 11], ["Alençon", 48.431, 0.0913, "ocean", 13],
  ["Laval", 48.0785, -0.7669, "ocean", 12], ["Niort", 46.3242, -0.4648, "ocean", 11],
  ["Angoulême", 45.6484, 0.1562, "ocean", 12],
  ["Strasbourg", 48.5734, 7.7521, "continental", 18], ["Metz", 49.1193, 6.1757, "continental", 18],
  ["Nancy", 48.6921, 6.1844, "continental", 18], ["Besançon", 47.2378, 6.0241, "continental", 18],
  ["Clermont-Ferrand", 45.7772, 3.087, "continental", 19], ["Lyon", 45.764, 4.8357, "continental", 17],
  ["Grenoble", 45.1885, 5.7245, "continental", 18], ["Chambéry", 45.5646, 5.9178, "continental", 18],
  ["Annecy", 45.8992, 6.1294, "continental", 19], ["Saint-Étienne", 45.4397, 4.3872, "continental", 18],
  ["Belfort", 47.6397, 6.8639, "continental", 19], ["Épinal", 48.1741, 6.4497, "continental", 18],
  ["Troyes", 48.2973, 4.0744, "continental", 17], ["Mulhouse", 47.7508, 7.3359, "continental", 18],
  ["Rodez", 44.3526, 2.5751, "mont", 19],
  ["Marseille", 43.2965, 5.3698, "med", 8], ["Nice", 43.7102, 7.262, "med", 7],
  ["Toulon", 43.1242, 5.928, "med", 8], ["Montpellier", 43.6108, 3.8767, "med", 8],
  ["Nîmes", 43.8367, 4.3601, "med", 9], ["Perpignan", 42.6887, 2.8948, "med", 7],
  ["Avignon", 43.9493, 4.8055, "med", 9], ["Aix-en-Provence", 43.5297, 5.4474, "med", 8],
  ["Carcassonne", 43.213, 2.3491, "med", 10], ["Béziers", 43.3442, 3.2158, "med", 8],
  ["Arles", 43.6766, 4.6277, "med", 9], ["Ajaccio", 41.9192, 8.7386, "med", 7],
  ["Bastia", 42.6973, 9.4509, "med", 7], ["Valence", 44.9334, 4.8924, "med", 11],
  ["Gap", 44.5596, 6.0798, "mont", 21], ["Briançon", 44.8998, 6.6422, "mont", 23],
  ["Tarbes", 43.2329, 0.0772, "mont", 16], ["Foix", 42.9651, 1.607, "mont", 17],
  ["Aurillac", 44.9305, 2.4426, "mont", 20], ["Le Puy-en-Velay", 45.0437, 3.8853, "mont", 20],
  ["Mende", 44.5186, 3.5025, "mont", 21], ["Bourg-Saint-Maurice", 45.6171, 6.7687, "mont", 23],
  ["Chamonix", 45.9237, 6.8694, "mont", 23],
];

// Végétaux — fenêtres en semaines RELATIVES à la dernière gelée (semaine 0) :
// abri / terre / recolte = tableaux de paires [début, fin].
// ex. Tomate : semis sous abri 9 à 5 semaines AVANT les gelées ([-9,-5]),
// pleine terre à partir des gelées ([0,1]), récolte 18 à 30 semaines après.
export const VEGS = [
  { n: "Tomate", f: "Solanacées", d: 1, e: 60, su: "Plein soleil", c: "Basilic, carotte, œillet d'Inde", tip: "Repiquez après les gelées ; buttez en cours de saison.", link: "/blog/plantes-compagnes-tomates/", abri: [[-9, -5]], terre: [[0, 1]], recolte: [[18, 30]] },
  { n: "Courgette", f: "Cucurbitacées", d: 2, e: 90, su: "Plein soleil", c: "Capucine, maïs, haricot", tip: "2 plants suffisent pour une famille ; arrosez au pied.", link: null, abri: [[-6, -4]], terre: [[1, 3]], recolte: [[14, 24]] },
  { n: "Carotte", f: "Apiacées", d: 1, e: 8, su: "Soleil ou mi-ombre", c: "Poireau, oignon, radis", tip: "Semez clair, éclaircissez à 5 cm ; sol sans cailloux ni fumier frais.", link: null, abri: [], terre: [[-4, 12]], recolte: [[12, 30]] },
  { n: "Radis", f: "Brassicacées", d: 1, e: 5, su: "Soleil ou mi-ombre", c: "Carotte, laitue, haricot", tip: "Semez toutes les 3 semaines pour en avoir toute la saison.", link: null, abri: [], terre: [[-6, 20]], recolte: [[-2, 28]] },
  { n: "Laitue", f: "Astéracées", d: 0.5, e: 30, su: "Mi-ombre en été", c: "Radis, carotte, fraisier", tip: "Étalez les semis ; en été choisissez des variétés résistantes à la montaison.", link: null, abri: [[-8, -5]], terre: [[-4, 14]], recolte: [[4, 28]] },
  { n: "Haricot vert", f: "Fabacées", d: 3, e: 10, su: "Plein soleil", c: "Maïs, céleri, pomme de terre", tip: "Ne semez que quand le sol est réchauffé (10 °C minimum).", link: null, abri: [], terre: [[2, 6]], recolte: [[10, 18]] },
  { n: "Poireau", f: "Amaryllidacées", d: 1, e: 15, su: "Plein soleil", c: "Carotte, céleri, fraisier", tip: "Repiquez les plants quand ils ont la taille d'un crayon.", link: null, abri: [[-8, -6]], terre: [[-2, 4]], recolte: [[26, 44]] },
  { n: "Épinard", f: "Chénopodiacées", d: 2, e: 15, su: "Mi-ombre", c: "Fraisier, chou, navet", tip: "Semez en fin d'été pour l'hiver ; monte vite en été.", link: "/blog/legumes-hiver-semis-aout/", abri: [], terre: [[-6, -2], [16, 22]], recolte: [[2, 6], [24, 40]] },
  { n: "Mâche", f: "Valérianacées", d: 0.5, e: 10, su: "Mi-ombre", c: "Laitue, radis", tip: "La salade d'hiver par excellence, rustique jusqu'à -15 °C.", link: "/blog/legumes-hiver-semis-aout/", abri: [], terre: [[18, 22]], recolte: [[26, 40]] },
  { n: "Chou kale", f: "Brassicacées", d: 1, e: 60, su: "Plein soleil", c: "Betterave, céleri, oignon", tip: "Supportez les gelées : il devient plus doux après les premiers froids.", link: null, abri: [[-4, -2]], terre: [[2, 6]], recolte: [[26, 44]] },
  { n: "Chou pommé", f: "Brassicacées", d: 1, e: 60, su: "Plein soleil", c: "Betterave, céleri, haricot", tip: "Arrosez régulièrement pour éviter l'éclatement des pommes.", link: null, abri: [[-8, -5]], terre: [[0, 4]], recolte: [[24, 44]] },
  { n: "Brocoli", f: "Brassicacées", d: 1, e: 50, su: "Plein soleil", c: "Betterave, céleri, oignon", tip: "Récoltez les têtes avant la floraison, les repousses suivront.", link: null, abri: [[-8, -5]], terre: [[0, 2]], recolte: [[24, 36]] },
  { n: "Betterave", f: "Chénopodiacées", d: 2, e: 15, su: "Plein soleil", c: "Oignon, chou, céleri", tip: "Un semis = plusieurs plantules : éclaircissez sans pitié.", link: null, abri: [], terre: [[-2, 8]], recolte: [[14, 30]] },
  { n: "Oignon", f: "Amaryllidacées", d: 1, e: 10, su: "Plein soleil", c: "Carotte, betterave, fraisier", tip: "Préférez les bulbilles en climat océanique, les semis ailleurs.", link: null, abri: [], terre: [[-8, -2]], recolte: [[16, 24]] },
  { n: "Ail", f: "Amaryllidacées", d: 3, e: 15, su: "Plein soleil", c: "Fraisier, tomate, carotte", tip: "Plantez les caïeux pointe en haut ; récoltez quand le feuillage jaunit.", link: null, abri: [], terre: [[-10, -6], [25, 31]], recolte: [[16, 24]] },
  { n: "Échalote", f: "Amaryllidacées", d: 3, e: 15, su: "Plein soleil", c: "Carotte, betterave", tip: "Se plante comme l'ail, en sol léger et drainé.", link: null, abri: [], terre: [[-8, -4]], recolte: [[16, 24]] },
  { n: "Pomme de terre", f: "Solanacées", d: 10, e: 40, su: "Plein soleil", c: "Haricot, chou, maïs", tip: "Plantez les tubercules germés ; buttez dès 15 cm de feuillage.", link: null, abri: [], terre: [[-4, 4]], recolte: [[12, 30]] },
  { n: "Pois", f: "Fabacées", d: 3, e: 8, su: "Plein soleil", c: "Carotte, navet, laitue", tip: "Semis d'automne en climat doux, de printemps ailleurs.", link: null, abri: [], terre: [[-6, 0], [14, 18]], recolte: [[6, 12], [30, 40]] },
  { n: "Fève", f: "Fabacées", d: 5, e: 20, su: "Plein soleil", c: "Pomme de terre, betterave", tip: "Résiste au froid : semez-la tôt, elle nourrit le sol en azote.", link: null, abri: [], terre: [[-8, -4], [14, 18]], recolte: [[8, 14], [30, 40]] },
  { n: "Concombre", f: "Cucurbitacées", d: 2, e: 60, su: "Plein soleil", c: "Maïs, haricot, capucine", tip: "Sous abri au départ, puis palissez pour gagner de la place.", link: null, abri: [[-6, -4]], terre: [[1, 3]], recolte: [[12, 20]] },
  { n: "Melon", f: "Cucurbitacées", d: 2, e: 80, su: "Plein soleil", c: "Haricot, maïs", tip: "Exige de la chaleur : réservé au sud et aux serres ailleurs.", link: null, abri: [[-6, -4]], terre: [[2, 4]], recolte: [[14, 22]] },
  { n: "Courge / potiron", f: "Cucurbitacées", d: 3, e: 120, su: "Plein soleil", c: "Maïs, haricot, capucine", tip: "Laissez mûrir sur le plant ; se conserve des mois au sec.", link: null, abri: [[-6, -4]], terre: [[2, 4]], recolte: [[20, 28]] },
  { n: "Aubergine", f: "Solanacées", d: 1, e: 60, su: "Plein soleil", c: "Haricot, thym, estragon", tip: "Très frileuse : semez tôt sous abri, récoltez les fruits luisants.", link: null, abri: [[-10, -6]], terre: [[1, 2]], recolte: [[16, 26]] },
  { n: "Poivron", f: "Solanacées", d: 1, e: 50, su: "Plein soleil", c: "Basilic, carotte, oignon", tip: "Comme l'aubergine, il a besoin de 6 mois de chaleur.", link: null, abri: [[-10, -6]], terre: [[1, 2]], recolte: [[16, 26]] },
  { n: "Céleri", f: "Apiacées", d: 0.5, e: 30, su: "Plein soleil", c: "Chou, poireau, tomate", tip: "Sol riche et frais ; paillez généreusement en été.", link: null, abri: [[-8, -5]], terre: [[1, 3]], recolte: [[22, 30]] },
  { n: "Basilic", f: "Lamiacées", d: 0.5, e: 25, su: "Plein soleil", c: "Tomate, poivron, asperge", tip: "Pincez les fleurs pour garder des feuilles tendres.", link: null, abri: [[-6, -4]], terre: [[2, 5]], recolte: [[8, 24]] },
  { n: "Persil", f: "Apiacées", d: 0.5, e: 15, su: "Mi-ombre", c: "Tomate, asperge, poireau", tip: "Lent à lever (3 semaines) : maintenez le sol humide.", link: null, abri: [], terre: [[-4, 8]], recolte: [[8, 30]] },
  { n: "Topinambour", f: "Astéracées", d: 10, e: 60, su: "Plein soleil", c: "Maïs, haricot", tip: "Plantez une fois, récoltez chaque hiver… et il revient tout seul.", link: null, abri: [], terre: [[-6, -2]], recolte: [[32, 48]] },
  { n: "Panais", f: "Apiacées", d: 1, e: 12, su: "Plein soleil", c: "Pomme de terre, oignon", tip: "Meilleur après les gelées : le froid sucre la racine.", link: null, abri: [], terre: [[-8, -2]], recolte: [[30, 44]] },
  { n: "Navet", f: "Brassicacées", d: 1, e: 12, su: "Soleil ou mi-ombre", c: "Pois, laitue, haricot", tip: "Deux saisons : printemps et fin d'été. Arrosez pour éviter la pousse à graine.", link: null, abri: [], terre: [[-4, 2], [16, 20]], recolte: [[6, 10], [24, 34]] },
];

// Convertit une semaine (1-52) en date lisible (« 12 avril »)
export function weekToDate(week) {
  const d = new Date(2026, 0, week * 7 - 3);
  return d.toLocaleDateString("fr-FR", { day: "numeric", month: "long" });
}

export const MONTHS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
