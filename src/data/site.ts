// Structure et contenu exhaustifs du site BCC, dérivés du sitemap officiel.
// Chaque section = un onglet du menu principal, avec ses sous-onglets.

export type Subsection = {
  slug: string;
  title: string;
  lead?: string;
  body?: string[];
  bullets?: string[];
  table?: { head: string[]; rows: string[][] };
};

export type Section = {
  slug: string;
  label: string;
  short: string;
  eyebrow: string;
  intro: string;
  hero: string; // asset key
  subsections: Subsection[];
};

export const NAV: { label: string; slug: string }[] = [
  { label: "La Banque", slug: "la-banque" },
  { label: "Opérations & Marchés", slug: "operations-et-marches" },
  { label: "Hôtel des Monnaies", slug: "hotel-des-monnaies" },
  { label: "Intermédiaires Financiers", slug: "intermediaires-financiers" },
  { label: "Surveillance", slug: "surveillance" },
  { label: "Systèmes de Paiement", slug: "systemes-de-paiement" },
  { label: "Statistiques", slug: "statistiques" },
  { label: "Publications", slug: "publications" },
  { label: "Média", slug: "media" },
];

export const SECTIONS: Record<string, Section> = {
  "la-banque": {
    slug: "la-banque",
    label: "La Banque",
    short: "La Banque",
    eyebrow: "Institution",
    hero: "bcc",
    intro:
      "Autorité monétaire de la République Démocratique du Congo depuis 1964, la Banque Centrale du Congo est une institution de droit public dotée de la personnalité juridique et indépendante dans l'exercice de ses missions.",
    subsections: [
      {
        slug: "missions",
        title: "Missions de la Banque Centrale du Congo",
        lead:
          "La BCC exerce quatre missions fondamentales définies par la Loi organique n°18/027 du 13 décembre 2018.",
        bullets: [
          "Définir et mettre en œuvre la politique monétaire du pays, dont l'objectif principal est d'assurer la stabilité du niveau général des prix.",
          "Détenir et gérer les réserves officielles de change de la République.",
          "Promouvoir le bon fonctionnement des systèmes de compensation et de paiement.",
          "Émettre les billets et pièces de monnaie ayant cours légal sur le territoire national.",
          "Élaborer la réglementation et contrôler les établissements de crédit, les institutions de micro-finance et les autres intermédiaires financiers.",
          "Édicter les normes et règlements concernant les opérations sur les devises étrangères.",
          "Participer à la négociation de tout accord international comportant des modalités de paiement ou de crédit et assurer l'exécution de ces accords.",
        ],
      },
      {
        slug: "historique",
        title: "Historique",
        lead: "Six décennies au service de la stabilité monétaire congolaise.",
        body: [
          "Créée par l'Ordonnance-Loi n°23/64 du 23 février 1964, la Banque Centrale du Congo (à l'origine Banque Nationale du Congo) succède au Conseil Monétaire de la République qui, lui-même, avait remplacé la Banque Centrale du Congo Belge et du Ruanda-Urundi.",
          "Le 30 juin 1967, dans le cadre de la réforme monétaire instituant le Zaïre comme nouvelle unité monétaire, elle prend le nom de Banque du Zaïre. Elle redevient Banque Centrale du Congo le 17 mai 1997.",
          "La Loi n°005/2002 du 7 mai 2002 lui confère un statut d'indépendance renforcée, consacré et modernisé par la Loi organique n°18/027 du 13 décembre 2018.",
        ],
      },
      {
        slug: "loi-organique",
        title: "Loi organique n°18/027",
        lead:
          "Cadre juridique fondamental régissant l'organisation et le fonctionnement de la Banque Centrale du Congo.",
        body: [
          "Promulguée le 13 décembre 2018, la Loi organique n°18/027 fixe l'organisation et le fonctionnement de la BCC conformément à l'article 176 de la Constitution.",
          "Elle consacre l'indépendance de la Banque, définit ses missions, précise la composition et les attributions de ses organes de décision (Conseil de la Banque, Gouvernement de la Banque, Collège des Commissaires aux Comptes) et encadre ses opérations.",
        ],
      },
      {
        slug: "dirigeants",
        title: "Les dirigeants de la Banque Centrale du Congo",
        lead:
          "Le Gouvernement de la Banque est composé du Gouverneur, du Vice-Gouverneur et des Directeurs.",
        table: {
          head: ["Fonction", "Titulaire"],
          rows: [
            ["Gouverneur", "André Wameso Nkualoloki"],
            ["Vice-Gouverneur", "Nommé par Ordonnance présidentielle"],
            ["Administrateur — Directeur Général", "Membre du Comité de Direction"],
            ["Collège des Commissaires aux Comptes", "Organe de contrôle statutaire"],
          ],
        },
      },
      {
        slug: "organigramme",
        title: "Organigramme",
        lead:
          "L'organisation opérationnelle de la BCC s'articule autour de directions techniques et de services d'appui.",
        bullets: [
          "Direction Générale de la Politique Monétaire et des Opérations Bancaires",
          "Direction Générale de la Surveillance des Intermédiaires Financiers",
          "Direction des Statistiques et de la Recherche Économique",
          "Direction des Systèmes et Instruments de Paiement",
          "Hôtel des Monnaies",
          "Direction du Trésor et de la Comptabilité",
          "Direction des Ressources Humaines, des Affaires Juridiques et de l'Audit Interne",
        ],
      },
      {
        slug: "gouverneur",
        title: "Le Gouverneur — André Wameso Nkualoloki",
        lead:
          "Nommé par Ordonnance présidentielle, le Gouverneur est le premier responsable de la Banque Centrale du Congo.",
        body: [
          "Le Gouverneur préside le Conseil de la Banque et le Comité de Politique Monétaire. Il représente la Banque vis-à-vis des tiers et signe, seul ou conjointement avec le Vice-Gouverneur, tous les actes engageant l'Institution.",
          "Il assure l'exécution des décisions du Conseil et rend compte, chaque année, au Président de la République et au Parlement de la conduite de la politique monétaire.",
        ],
      },
      {
        slug: "billets-de-banque",
        title: "Billets & pièces de monnaie",
        lead:
          "La BCC détient le monopole d'émission des signes monétaires ayant cours légal en République Démocratique du Congo.",
        bullets: [
          "Connaître le Franc congolais — coupures en circulation et signes de sécurité",
          "Billets d'hier et d'aujourd'hui — filiation des monnaies nationales",
          "Activités fiduciaires — approvisionnement, entretien et destruction des signes monétaires",
        ],
      },
    ],
  },

  "operations-et-marches": {
    slug: "operations-et-marches",
    label: "Opérations & Marchés",
    short: "Opérations",
    eyebrow: "Marchés",
    hero: "franc",
    intro:
      "La Banque conduit la politique monétaire par des opérations d'open market, des facilités permanentes et la constitution de réserves obligatoires. Elle intervient sur le marché des changes pour préserver la stabilité du Franc congolais.",
    subsections: [
      {
        slug: "politique-monetaire",
        title: "Opérations de politique monétaire",
        lead:
          "Instruments et procédures utilisés par la BCC pour réguler la liquidité bancaire et transmettre les impulsions de politique monétaire.",
        bullets: [
          "Bons BCC — 7 jours, 28 jours et 84 jours (annonce, résultats, historique)",
          "Facilités permanentes de prêt et de dépôt",
          "Opérations de refinancement à court terme",
          "Marché interbancaire — encours, volumes, taux",
          "Historique des taux au guichet de refinancement",
        ],
      },
      {
        slug: "operations-de-change",
        title: "Opérations de change",
        lead:
          "La Banque publie quotidiennement les cours indicatifs et intervient par appels d'offres bilatéraux.",
        bullets: [
          "Cours de change indicatif — publication quotidienne",
          "Cours de change parallèle",
          "Adjudications bilatérales des devises — annonces et résultats",
          "Volume des transactions journalières sur le marché de change",
        ],
      },
      {
        slug: "reserve-obligatoire",
        title: "Coefficients de réserve obligatoire",
        lead:
          "La constitution de réserves obligatoires est un instrument central de gestion de la liquidité bancaire.",
        table: {
          head: ["Assiette", "Coefficient"],
          rows: [
            ["Dépôts à vue en monnaie nationale — clientèle ordinaire", "0,00 %"],
            ["Dépôts à terme en monnaie nationale — clientèle", "0,00 %"],
            ["Dépôts à vue en monnaies étrangères — clientèle", "13,00 %"],
            ["Dépôts à terme en monnaies étrangères — clientèle", "12,00 %"],
            ["Dépôts régime spécial", "0,00 %"],
            ["Administration publique centrale — MN", "100,00 %"],
          ],
        },
      },
      {
        slug: "taux-directeurs",
        title: "Taux d'intérêt",
        lead: "Structure des taux directeurs et de marché au 15 juillet 2026.",
        table: {
          head: ["Instrument", "Taux"],
          rows: [
            ["Taux directeur", "13,50 %"],
            ["Facilité de prêt marginal", "17,50 %"],
            ["Facilité de dépôt", "9,50 %"],
            ["Taux interbancaire (moyen pondéré)", "14,00 %"],
            ["Bons BCC — 7 jours (moyen pondéré)", "11,79 %"],
            ["Bons BCC — 28 jours (moyen pondéré)", "13,00 %"],
            ["Bons BCC — 84 jours (moyen pondéré)", "13,50 %"],
          ],
        },
      },
      {
        slug: "reglementation",
        title: "Réglementation du change",
        lead:
          "Textes régissant les opérations sur devises en République Démocratique du Congo.",
        bullets: [
          "Règlement n°002/2023 modifiant et complétant la réglementation du change du 25 mars 2014",
          "Modification n°2 de la réglementation du change en RDC",
          "Instruction n°25 — adjudications de devises par la BCC",
          "Instruction n°10 — réserve obligatoire (modifications n°40 et n°47)",
          "Instruction n°57 — transmission des données de calcul du cours de change indicatif",
          "Instruction relative au régime de change des sociétés minières",
          "Instruction relative au régime de change des sociétés pétrolières d'exploration-production",
        ],
      },
      {
        slug: "forex",
        title: "Marché Forex",
        lead:
          "Cadre organisationnel et opérationnel du marché des devises interbancaire congolais.",
        body: [
          "Le marché des changes de la RDC est un marché continu, dénoué en temps réel via la plateforme de la Banque Centrale. Les intervenants sont les banques agréées, la Banque Centrale et l'État.",
          "Les cotations sont exprimées à l'incertain pour un dollar américain. La BCC publie chaque jour ouvrable un cours indicatif calculé sur la base des transactions du jour précédent.",
        ],
      },
    ],
  },

  "hotel-des-monnaies": {
    slug: "hotel-des-monnaies",
    label: "Hôtel des Monnaies",
    short: "Hôtel des Monnaies",
    eyebrow: "Fabrication",
    hero: "franc",
    intro:
      "Direction industrielle de la Banque Centrale du Congo, l'Hôtel des Monnaies conçoit et imprime les signes monétaires nationaux ainsi que divers documents fiduciaires et de sécurité.",
    subsections: [
      {
        slug: "presentation",
        title: "Présentation",
        body: [
          "L'Hôtel des Monnaies est un site industriel intégré chargé de la conception, de la fabrication et du contrôle qualité des billets de banque, timbres fiscaux, valeurs et documents sécurisés.",
          "Il combine des ateliers d'impression offset, taille-douce et sérigraphie avec un laboratoire de sécurité graphique.",
        ],
      },
      {
        slug: "historique",
        title: "Aperçu historique",
        body: [
          "L'Hôtel des Monnaies a été créé pour doter la République d'une capacité souveraine d'impression fiduciaire. Ses installations ont été modernisées à plusieurs reprises pour intégrer les technologies de sécurité les plus récentes.",
        ],
      },
      {
        slug: "production",
        title: "Production",
        bullets: [
          "Impression offset polychrome recto-verso",
          "Impression taille-douce pour éléments tactiles de sécurité",
          "Sérigraphie et impression iridescente",
          "Numérotation typographique et laser",
          "Encollage, découpe et conditionnement des liasses",
        ],
      },
      {
        slug: "produits",
        title: "Produits",
        bullets: [
          "Billets de Franc congolais — toutes coupures",
          "Timbres fiscaux et postaux",
          "Chèques bancaires sécurisés",
          "Titres et actions au porteur",
          "Passeports et documents d'identité sécurisés",
        ],
      },
      {
        slug: "realisations",
        title: "Exemples de réalisations",
        body: [
          "Séries successives de billets du Franc congolais depuis 1998, timbres fiscaux de l'Administration des Douanes, chèques sécurisés pour les banques commerciales et documents administratifs à valeur légale.",
        ],
      },
      {
        slug: "contacts",
        title: "Contacts",
        body: [
          "Hôtel des Monnaies — Banque Centrale du Congo, Boulevard Colonel Tshatshi, Kinshasa/Gombe, République Démocratique du Congo.",
        ],
      },
    ],
  },

  "intermediaires-financiers": {
    slug: "intermediaires-financiers",
    label: "Intermédiaires Financiers",
    short: "Intermédiaires",
    eyebrow: "Écosystème",
    hero: "bcc",
    intro:
      "Répertoire officiel des institutions agréées à exercer une activité de crédit ou d'intermédiation financière en République Démocratique du Congo.",
    subsections: [
      {
        slug: "etablissements-de-credit",
        title: "Établissements de crédit — opérationnels",
        lead:
          "Banques, coopératives d'épargne et de crédit, institutions de micro-finance et sociétés financières en activité.",
        bullets: [
          "Banques commerciales agréées",
          "Coopératives d'épargne et de crédit (COOPEC)",
          "Caisses d'épargne et de crédit (CEC)",
          "Institutions de micro-finance (IMF)",
          "Institutions financières spécialisées (IFS)",
          "Sociétés financières (Leasing, Affacturage, Crédit-bail)",
        ],
      },
      {
        slug: "etablissements-radies",
        title: "Établissements de crédit — radiés",
        lead:
          "Institutions dont l'agrément a été retiré par la Banque Centrale du Congo.",
        body: [
          "La radiation d'un établissement de crédit intervient à la suite d'un retrait d'agrément prononcé par le Gouverneur, notamment en cas de non-respect des normes prudentielles ou de cessation d'activité.",
        ],
      },
      {
        slug: "autres-intermediaires",
        title: "Autres intermédiaires financiers",
        bullets: [
          "Bureaux de change agréés",
          "Messageries financières",
          "Émetteurs de monnaie électronique",
          "Prestataires de services de paiement",
        ],
      },
      {
        slug: "commissaires-aux-comptes",
        title: "Commissaires aux comptes",
        body: [
          "Liste officielle des cabinets d'audit habilités à certifier les comptes des établissements de crédit et institutions assujetties à la supervision de la BCC.",
        ],
      },
      {
        slug: "reglementation",
        title: "Textes réglementaires",
        bullets: [
          "Textes légaux applicables aux établissements de crédit",
          "Textes réglementaires — banques",
          "Textes réglementaires — COOPEC et CEC",
          "Textes réglementaires — institutions de micro-finance",
          "Textes réglementaires — institutions financières spécialisées",
          "Textes réglementaires — autres intermédiaires financiers",
        ],
      },
      {
        slug: "outils",
        title: "Site et logiciels",
        bullets: [
          "Logiciel BSA — Banking Supervisory Application",
          "Logiciel FINA — reporting prudentiel",
          "Logiciel iSys-CERI / SoCERI",
          "Site web dédié à la micro-finance",
        ],
      },
    ],
  },

  surveillance: {
    slug: "surveillance",
    label: "Surveillance",
    short: "Surveillance",
    eyebrow: "Supervision",
    hero: "bcc",
    intro:
      "La Direction Générale de la Surveillance des Intermédiaires Financiers assure la supervision prudentielle du système bancaire et financier congolais.",
    subsections: [
      {
        slug: "assujettis",
        title: "Intermédiaires financiers assujettis",
        bullets: [
          "Banques agréées",
          "Banques radiées",
          "Coopératives d'épargne et de crédit",
          "Caisses d'épargne et de crédit",
          "Institutions de micro-finance",
          "Institutions financières spécialisées",
          "Sociétés financières",
          "Bureaux de change",
          "Messageries financières",
        ],
      },
      {
        slug: "reglementation",
        title: "Réglementation prudentielle",
        bullets: [
          "Textes légaux régissant l'activité bancaire",
          "Ratio de solvabilité et fonds propres réglementaires",
          "Coefficient de liquidité",
          "Division des risques et grands risques",
          "Classification des créances et provisionnement",
          "Gouvernance et contrôle interne",
          "Lutte contre le blanchiment de capitaux et le financement du terrorisme",
        ],
      },
      {
        slug: "publications",
        title: "Publications de la surveillance",
        body: [
          "Rapport annuel sur la supervision, notes de synthèse, statistiques prudentielles et autres publications à destination des professionnels du secteur.",
        ],
      },
      {
        slug: "communications",
        title: "Communications diverses",
        body: [
          "Avis, communiqués et lettres circulaires adressés aux établissements de crédit et intermédiaires financiers.",
        ],
      },
    ],
  },

  "systemes-de-paiement": {
    slug: "systemes-de-paiement",
    label: "Systèmes de Paiement",
    short: "Paiement",
    eyebrow: "Infrastructures",
    hero: "franc",
    intro:
      "La Banque Centrale du Congo gère les infrastructures nationales de paiement et surveille les systèmes exploités par les tiers afin d'en garantir la sécurité et l'efficience.",
    subsections: [
      {
        slug: "systemes-bcc",
        title: "Systèmes gérés par la BCC",
        bullets: [
          "ATS — Système de Règlement Brut en Temps Réel (RTGS)",
          "CSD — Dépositaire Central des Titres publics",
          "Réseau monétique MOSOLO — commutation domestique",
        ],
      },
      {
        slug: "systemes-tiers",
        title: "Systèmes gérés par les tiers",
        bullets: [
          "Systèmes de paiement des banques commerciales",
          "Systèmes agréés de transfert de fonds",
          "Systèmes agréés des émetteurs de monnaie électronique",
          "Systèmes monétiques privatifs agréés",
        ],
      },
      {
        slug: "prestataires-connexes",
        title: "Prestataires de services connexes agréés",
        bullets: [
          "Agrégateurs de systèmes de paiement",
          "Centres de personnalisation des cartes de paiement",
          "Éditeurs de logiciels et solutions monétiques",
          "Émetteurs non bancaires d'instruments de paiement",
          "Fabricants de plastiques",
          "Fournisseurs de canaux d'acquisition",
          "Gestionnaires de plateformes e-commerce",
          "Prestataires techniques des émetteurs de monnaie électronique",
        ],
      },
      {
        slug: "instruments",
        title: "Instruments de paiement",
        bullets: [
          "Instruments scripturaux en circulation",
          "Sécurité des instruments de paiement",
          "Suivi statistique de la fraude",
        ],
      },
      {
        slug: "surveillance",
        title: "Surveillance des systèmes et instruments",
        body: [
          "La BCC publie régulièrement les statistiques d'opérations de paiement et les indicateurs de performance des infrastructures nationales.",
        ],
      },
    ],
  },

  statistiques: {
    slug: "statistiques",
    label: "Statistiques",
    short: "Statistiques",
    eyebrow: "Données",
    hero: "franc",
    intro:
      "Séries statistiques officielles couvrant l'économie réelle, la monnaie, le crédit, les finances publiques et le secteur extérieur de la République Démocratique du Congo.",
    subsections: [
      {
        slug: "secteur-reel",
        title: "Secteur réel",
        bullets: [
          "IPC-BCC — indice hebdomadaire, mensuel et annuel",
          "IPC-INS — indice publié par l'Institut National de la Statistique",
          "Taux d'inflation BCC et INS",
          "Contribution des différents secteurs au PIB",
          "Emplois du PIB à prix courant et constant",
          "Taux de croissance du PIB",
          "Soldes d'opinions des entrepreneurs",
          "Population et production nationale",
          "Revenu National Brut, formation de capital, épargne",
        ],
      },
      {
        slug: "monnaie-et-credit",
        title: "Monnaie et crédit",
        bullets: [
          "Agrégats monétaires — séries annuelles, trimestrielles et mensuelles",
          "Taux d'intérêt — séries mensuelles",
          "Solde d'opinions sur les conditions d'octroi de crédit",
        ],
      },
      {
        slug: "secteur-exterieur",
        title: "Secteur extérieur",
        bullets: [
          "Évolution du cours de change USD/CDF — quotidien, mensuel, annuel",
          "Réserves de change de la BCC — quotidiennes et mensuelles",
          "Volume des transactions journalières sur le marché de change",
          "Cours moyens journaliers des produits miniers",
          "Exportations par catégories de marchandises (en CDF)",
        ],
      },
      {
        slug: "finances-publiques",
        title: "Finances publiques",
        bullets: [
          "Évolution mensuelle des finances publiques (CDF et USD)",
          "Évolution annuelle des finances publiques (CDF et USD)",
        ],
      },
      {
        slug: "recherche",
        title: "Recherche et statistiques",
        body: [
          "Travaux de recherche économique conduits par la Direction des Statistiques et de la Recherche : documents de travail, études thématiques, notes méthodologiques.",
        ],
      },
    ],
  },

  publications: {
    slug: "publications",
    label: "Publications",
    short: "Publications",
    eyebrow: "Rapports",
    hero: "tarifs",
    intro:
      "Ensemble des publications périodiques de la Banque Centrale du Congo : rapports statutaires, bulletins de conjoncture, études et notes d'analyse.",
    subsections: [
      {
        slug: "rapport-politique-monetaire",
        title: "Rapport sur la politique monétaire",
        lead: "Publication de référence sur la conduite de la politique monétaire.",
        body: [
          "Le Rapport sur la politique monétaire présente chaque année l'environnement économique international et national, la conduite de la politique monétaire, l'évolution du secteur bancaire et les perspectives à court et moyen terme.",
        ],
      },
      {
        slug: "rapports-annuels",
        title: "Rapports annuels",
        body: [
          "Rapport statutaire présenté chaque année au Président de la République et au Parlement. Il rend compte de la gestion de la Banque, des comptes de l'exercice et de l'exécution de la politique monétaire.",
        ],
      },
      {
        slug: "condense-statistique",
        title: "Condensé d'informations statistiques",
        body: [
          "Publication hebdomadaire regroupant les principaux indicateurs monétaires, cambiaires et de conjoncture.",
        ],
      },
      {
        slug: "balance-des-paiements",
        title: "Rapports Balance des paiements et PEG",
        body: [
          "Rapports sur la balance des paiements et la position extérieure globale de la République Démocratique du Congo, établis conformément au manuel du FMI (BPM6).",
        ],
      },
      {
        slug: "autres",
        title: "Autres publications",
        bullets: [
          "Bulletins de statistiques mensuels",
          "Flash marchés — notes hebdomadaires",
          "Notes de conjoncture",
          "Publications de la Surveillance (DSIF)",
        ],
      },
    ],
  },

  media: {
    slug: "media",
    label: "Média",
    short: "Média",
    eyebrow: "Actualité",
    hero: "bcc",
    intro:
      "Espace d'information officielle : actualités, communiqués, annonces et communications institutionnelles.",
    subsections: [
      {
        slug: "actualites",
        title: "Actualités",
        body: [
          "Retrouvez les dernières actualités de l'Institution : évènements, rencontres du Gouverneur, participation à des instances internationales, initiatives et projets stratégiques.",
        ],
      },
      {
        slug: "communiques",
        title: "Communiqués",
        body: [
          "Communiqués officiels de la Banque Centrale du Congo — décisions de politique monétaire, informations aux intermédiaires financiers, mises au point publiques.",
        ],
      },
      {
        slug: "annonces",
        title: "Annonces",
        body: [
          "Avis d'appels d'offres, recrutements, publications réglementaires et annonces diverses.",
        ],
      },
    ],
  },
};

export const SECTION_LIST = NAV.map((n) => SECTIONS[n.slug]).filter(Boolean);
