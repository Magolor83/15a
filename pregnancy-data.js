// Gemeinsame Recherchebasis fuer Desktop- und Mobile-Dashboard.
window.PREGNANCY_SOURCES = [
      {
        id: 1,
        name: "DGE: Handlungsempfehlungen Ernährung in der Schwangerschaft",
        org: "Deutsche Gesellschaft für Ernährung / Netzwerk Gesund ins Leben",
        url: "https://www.dge.de/gesunde-ernaehrung/gezielte-ernaehrung/ernaehrung-in-schwangerschaft-und-stillzeit/handlungsempfehlungen-ernaehrung-in-der-schwangerschaft/"
      },
      {
        id: 2,
        name: "BfR: Risikobewertung für Schwangere",
        org: "Bundesinstitut für Risikobewertung",
        url: "https://www.bfr.bund.de/ueber-uns/risikobewertung-durch-das-bfr/schwangere/"
      },
      {
        id: 3,
        name: "BfR: Lebensmittelinfektionen im Privathaushalt",
        org: "Bundesinstitut für Risikobewertung",
        url: "https://www.bfr.bund.de/fragen-und-antworten/thema/lebensmittelinfektionen-im-privathaushalt-quellen-erkennen-risiken-vermeiden/"
      },
      {
        id: 4,
        name: "Gesund ins Leben: Kaffee und Koffein",
        org: "BZfE / Netzwerk Gesund ins Leben",
        url: "https://www.gesund-ins-leben.de/fuer-fachkreise/familien-vor-und-in-der-schwangerschaft/nachgefragt/kaffee-und-koffein-in-der-schwangerschaft-wie-viel-darf-es-sein/"
      },
      {
        id: 5,
        name: "CDC: Safer Food Choices for Pregnant Women",
        org: "Centers for Disease Control and Prevention",
        url: "https://www.cdc.gov/food-safety/foods/pregnant-women.html"
      },
      {
        id: 6,
        name: "CDC: Alcohol Use During Pregnancy",
        org: "Centers for Disease Control and Prevention",
        url: "https://www.cdc.gov/alcohol-pregnancy/about/index.html"
      },
      {
        id: 7,
        name: "CDC: Cannabis and Pregnancy",
        org: "Centers for Disease Control and Prevention",
        url: "https://www.cdc.gov/cannabis/health-effects/pregnancy.html"
      },
      {
        id: 8,
        name: "EPA/FDA: Advice about Eating Fish and Shellfish",
        org: "U.S. Environmental Protection Agency / FDA",
        url: "https://www.epa.gov/choose-fish-and-shellfish-wisely/epa-fda-advice-about-eating-fish-and-shellfish"
      },
      {
        id: 9,
        name: "BfR: Chininhaltige Getränke",
        org: "Bundesinstitut für Risikobewertung",
        url: "https://www.bfr.bund.de/presseinformation/chininhaltige-getraenke-sind-nichts-fuer-schwangere/"
      },
      {
        id: 10,
        name: "Embryotox: Arzneimittel in Schwangerschaft und Stillzeit",
        org: "Charite Universitätsmedizin Berlin",
        url: "https://www.embryotox.de/arzneimittel/"
      },
      {
        id: 11,
        name: "NIH ODS: Dietary Supplements and Pregnancy",
        org: "National Institutes of Health",
        url: "https://ods.od.nih.gov/factsheets/Pregnancy/"
      },
      {
        id: 12,
        name: "NHS: Vitamins and Supplements in Pregnancy",
        org: "National Health Service",
        url: "https://www.nhs.uk/pregnancy/keeping-well/vitamins-supplements-and-nutrition/"
      },
      {
        id: 13,
        name: "BfR: Toxoplasmen",
        org: "Bundesinstitut für Risikobewertung",
        url: "https://www.bfr.bund.de/en/food-safety/assessment-of-microbial-risks-in-foods/parasites/toxoplasms/"
      },
      {
        id: 14,
        name: "WHO: Restricting Caffeine Intake During Pregnancy",
        org: "World Health Organization",
        url: "https://www.who.int/tools/elena/interventions/caffeine-pregnancy"
      }
    ];

window.PREGNANCY_ITEMS = [
      {
        title: "Alkohol",
        examples: "Wein, Bier, Spirituosen, Cocktails, Restalkohol in Desserts oder Soßen beachten.",
        status: "tabu",
        category: "Substanzen",
        topics: ["Genussmittel", "Plazenta"],
        why: "Es gibt keine bekannte sichere Menge und kein sicheres Zeitfenster in der Schwangerschaft.",
        action: "Vollständig verzichten. Bei regelmäßigem Konsum Unterstützung suchen, nicht allein durchbeißen.",
        sources: [1, 6]
      },
      {
        title: "Tabak, Nikotin und E-Zigaretten",
        examples: "Zigaretten, Vapes, E-Zigaretten, Nikotinbeutel, Shisha und Passivrauch.",
        status: "tabu",
        category: "Substanzen",
        topics: ["Genussmittel", "Plazenta"],
        why: "Rauchen erhöht unter anderem Risiken für Fehl- und Frühgeburten, geringes Geburtsgewicht und Entwicklungsprobleme.",
        action: "Nicht rauchen und verrauchte Räume meiden. Entwöhnung früh mit Ärztin, Hebamme oder Beratung planen.",
        sources: [1, 2]
      },
      {
        title: "Cannabis, THC und CBD",
        examples: "Rauchen, Vapen, Edibles, Getränke, Dabbing, Öle, CBD-Produkte.",
        status: "tabu",
        category: "Substanzen",
        topics: ["Genussmittel", "Plazenta"],
        why: "THC kann über die Plazenta zum Fetus gelangen; Empfehlungen raten Schwangeren vom Konsum ab.",
        action: "Nicht verwenden, auch nicht gegen Übelkeit oder Schlafprobleme ohne medizinische Alternative.",
        sources: [7]
      },
      {
        title: "Nicht verordnete Drogen und missbrauchte Medikamente",
        examples: "Opioide ohne ärztliche Kontrolle, Kokain, Amphetamine, Benzodiazepine außerhalb der Verordnung.",
        status: "tabu",
        category: "Substanzen",
        topics: ["Genussmittel", "Medikamente"],
        why: "Substanzkonsum kann Schwangerschaft und Neugeborenes gefährden; abruptes Absetzen kann je nach Substanz ebenfalls riskant sein.",
        action: "Sofort vertraulich medizinisch ansprechen. Bei Abhängigkeit Entzug oder Substitution begleitet planen.",
        sources: [1, 10]
      },
      {
        title: "Rohes oder nicht durchgegartes Fleisch",
        examples: "Carpaccio, Tatar, Mett, rosa Steak, rohes Hack, unvollständig gegartes Geflügel.",
        status: "cook",
        category: "Fleisch & Wurst",
        topics: ["Listerien", "Toxoplasmose", "Salmonellen"],
        why: "Rohes Fleisch kann Toxoplasmen, Listerien, Salmonellen oder Campylobacter übertragen.",
        action: "Nur vollständig durchgegart essen; kein roter Kern, austretender Saft klar, Küchenhygiene strikt trennen.",
        sources: [1, 3, 5, 13]
      },
      {
        title: "Rohwurst und luftgetrocknete Wurstwaren",
        examples: "Salami, Teewurst, Zwiebelmettwurst, Chorizo, roher Schinken, Sucuk, Landjäger.",
        status: "tabu",
        category: "Fleisch & Wurst",
        topics: ["Listerien", "Toxoplasmose"],
        why: "Nicht erhitzte, gereifte oder streichfähige Rohwurst kann Erreger enthalten; BfR nennt Rohwurst als Risikolebensmittel.",
        action: "Kalt meiden. Auf Pizza, Auflauf oder Pfanne nur essen, wenn das Produkt vollständig durcherhitzt wurde.",
        sources: [1, 2, 3, 13]
      },
      {
        title: "Aufschnitt, Hot Dogs und verzehrfertige Fleischwaren",
        examples: "Cold cuts, Feinkostaufschnitt, Wiener/Hot Dogs, Fleischsalat, lange gekühlte Fertigware.",
        status: "cook",
        category: "Fleisch & Wurst",
        topics: ["Listerien"],
        why: "Listerien können sich auch im Kühlschrank und in Vakuumverpackungen vermehren.",
        action: "Sehr frisch verbrauchen oder bis dampfend heiß erhitzen; offene Thekenware und lange Lagerung meiden.",
        sources: [2, 3, 5]
      },
      {
        title: "Leber, Leberprodukte und Retinol",
        examples: "Leberwurst, Leberpastete, Leberknödel, Cod-Liver-Oil, Vitamin-A-/Retinol-Supplemente.",
        status: "tabu",
        category: "Supplemente & Medikamente",
        topics: ["Vitamin A", "Supplemente"],
        why: "Sehr hohe Mengen vorgeformten Vitamin A können die kindliche Entwicklung schädigen.",
        action: "In der Schwangerschaft meiden; Prenatalpräparate auf Retinol/Vitamin A prüfen und ärztlich abstimmen.",
        sources: [11, 12]
      },
      {
        title: "Rohmilch und unpasteurisierte Milchprodukte",
        examples: "Rohmilch, Vorzugsmilch, Rohmilchkäse, nicht pasteurisierter Joghurt oder Frischkäse.",
        status: "tabu",
        category: "Milch & Käse",
        topics: ["Listerien"],
        why: "Rohmilch und daraus hergestellte Produkte gehören zu den häufig genannten Listerienrisiken.",
        action: "Nur pasteurisierte oder ultrahocherhitzte Produkte wählen; Rohmilchkennzeichnung prüfen.",
        sources: [2, 3, 5]
      },
      {
        title: "Weichkäse, Schmiere- und Blauschimmelkäse",
        examples: "Brie, Camembert, Romadur, Limburger, Gorgonzola, Roquefort, Käse mit Rot-/Gelbschmiere.",
        status: "cook",
        category: "Milch & Käse",
        topics: ["Listerien"],
        why: "Hoher Wassergehalt, Oberflächenreifung und Verarbeitung können Listerien begünstigen, auch bei pasteurisierter Milch.",
        action: "Kalt meiden, wenn riskant. Sicherer ist Hartkäse; riskante Sorten nur durcherhitzt essen.",
        sources: [1, 2, 3]
      },
      {
        title: "Rohe oder weiche Eier",
        examples: "Tiramisu, Mousse au Chocolat, selbstgemachte Mayonnaise, weiches Frühstücksei, roher Keksteig.",
        status: "cook",
        category: "Eier & Teig",
        topics: ["Salmonellen"],
        why: "Rohe oder nicht vollständig gegarte Eier können Salmonellen enthalten.",
        action: "Eiweiß und Eigelb fest werden lassen; für kalte Speisen pasteurisierte Eier verwenden.",
        sources: [1, 5]
      },
      {
        title: "Roher Teig und rohe Mehlmischungen",
        examples: "Keksteig, Kuchenteig, Pfannkuchenteig, Backmischungen mit rohem Mehl.",
        status: "tabu",
        category: "Eier & Teig",
        topics: ["Lebensmittelinfektionen"],
        why: "Rohes Mehl und rohe Eier können Krankheitserreger tragen.",
        action: "Teig erst nach dem Backen oder Kochen probieren; essbaren Teig nur mit hitzebehandeltem Mehl und pasteurisiertem Ei.",
        sources: [5]
      },
      {
        title: "Roher Fisch und rohe Meeresfrüchte",
        examples: "Sushi mit rohem Fisch, Sashimi, Ceviche, rohe Austern, rohe Muscheln.",
        status: "tabu",
        category: "Fisch & Meer",
        topics: ["Listerien", "Lebensmittelinfektionen"],
        why: "Roher Fisch und Schalentiere können Listerien, Parasiten oder andere Erreger enthalten.",
        action: "Nur vollständig gegart essen; Sushi nur mit gegartem Fisch oder vegetarisch und hygienisch frisch.",
        sources: [1, 3, 5, 8]
      },
      {
        title: "Geräucherter oder gebeizter Fisch",
        examples: "Räucherlachs, Graved Lachs, Stremellachs, geräucherte Forelle, Räuchermakrele.",
        status: "cook",
        category: "Fisch & Meer",
        topics: ["Listerien"],
        why: "Kalt geräucherte oder gebeizte Fischprodukte werden als Listerienrisiko genannt.",
        action: "Kalt meiden; nur verwenden, wenn das Produkt in einem Gericht vollständig durcherhitzt wird.",
        sources: [1, 2, 3, 5]
      },
      {
        title: "Fisch mit hohem Quecksilbergehalt",
        examples: "Hai, Schwertfisch, Königsmakrele, Marlin, Tilefish, Bigeye-Thunfisch; lokale Raubfische nach Warnhinweisen.",
        status: "tabu",
        category: "Fisch & Meer",
        topics: ["Quecksilber"],
        why: "Methylquecksilber kann die Gehirn- und Nervensystementwicklung beeinträchtigen.",
        action: "High-Mercury-Fische meiden. Niedrig belastete Arten wie Lachs, Hering, Sardinen, Forelle, Seelachs oder Garnelen bevorzugen.",
        sources: [5, 8]
      },
      {
        title: "Thunfisch und größere Raubfische begrenzen",
        examples: "Albacore/weißer Thun, Gelbflossen-Thun, große selbst gefangene Fische.",
        status: "limit",
        category: "Fisch & Meer",
        topics: ["Quecksilber"],
        why: "Einige Arten liegen nicht in der strengsten Meiden-Gruppe, enthalten aber mehr Quecksilber als viele Alternativen.",
        action: "Nach FDA/EPA höchstens eine Portion pro Woche aus der Good-Choices-Gruppe und dann keinen weiteren Fisch in dieser Woche.",
        sources: [8]
      },
      {
        title: "Rohe Sprossen und Keimlinge",
        examples: "Alfalfa-, Mungbohnen-, Radieschen-, Brokkoli- oder Linsensprossen auf Salaten und Bowls.",
        status: "cook",
        category: "Pflanzen & Feinkost",
        topics: ["Lebensmittelinfektionen"],
        why: "Sprossen können Keime im Inneren tragen und sind roh schwer sicher zu reinigen.",
        action: "Roh meiden. Nur essen, wenn sie vollständig erhitzt wurden.",
        sources: [2, 5]
      },
      {
        title: "Ungewaschenes Obst, Gemüse und Erde-Kontakt",
        examples: "Salat, Kräuter, Beeren, Karotten, Kartoffeln, Gemüse aus Garten oder Markt.",
        status: "cook",
        category: "Pflanzen & Feinkost",
        topics: ["Toxoplasmose", "Lebensmittelinfektionen"],
        why: "Erde und Oberflächen können Toxoplasmen oder andere Erreger tragen.",
        action: "Gründlich waschen, erdiges Gemüse getrennt lagern, Hände/Schneidebretter reinigen; bei Unsicherheit erhitzen.",
        sources: [2, 13]
      },
      {
        title: "Tiefkühlbeeren, TK-Gemüse und offene Feinkost",
        examples: "TK-Beeren im Smoothie, TK-Kräuter, Antipasti/Oliven aus offenen Gefäßen, Kantinen-Feinkost.",
        status: "cook",
        category: "Pflanzen & Feinkost",
        topics: ["Lebensmittelinfektionen"],
        why: "BfR nennt Tiefkühlbeeren sowie Feinkost und Antipasti aus offenen Gefäßen als zu meidende oder zu erhitzende Risikoprodukte.",
        action: "TK-Beeren und TK-Kräuter vor Verzehr erhitzen; offene Feinkost lieber meiden oder frisch durcherhitzt wählen.",
        sources: [2]
      },
      {
        title: "Gekühlte Pates, Aufstriche und Feinkostsalate",
        examples: "Fleischpate, vegetarische Pate, Hummus/Creme aus offener Theke, Geflügel- oder Eiersalat.",
        status: "tabu",
        category: "Pflanzen & Feinkost",
        topics: ["Listerien"],
        why: "Kühlpflichtige verzehrfertige Produkte ohne erneute Erhitzung sind anfällig für Listerienwachstum.",
        action: "Offene oder gekühlte Thekenware meiden. Haltbare, ungeöffnete Ware ist sicherer; nach Öffnen rasch verbrauchen.",
        sources: [3, 5]
      },
      {
        title: "Unpasteurisierte Säfte und Cider",
        examples: "Frisch gepresster ungepasteurisierter Saft, Rohsaft, Farm-Cider, Saft aus offener Saftpresse.",
        status: "tabu",
        category: "Getränke",
        topics: ["Lebensmittelinfektionen"],
        why: "Unpasteurisierte Getränke können Erreger enthalten.",
        action: "Pasteurisierte Säfte wählen oder Saft frisch aus gewaschenem Obst zuhause zubereiten und sofort trinken.",
        sources: [5]
      },
      {
        title: "Energydrinks und sehr koffeinhaltige Produkte",
        examples: "Energy Drinks, Shots, Guarana-Drinks, Pre-Workout-Booster, koffeinhaltige Supplements.",
        status: "tabu",
        category: "Getränke",
        topics: ["Koffein", "Supplemente"],
        why: "Neben Koffein enthalten sie häufig Taurin, Inosit oder andere Zusätze; deutsche Empfehlungen raten Schwangeren zum Verzicht.",
        action: "Meiden. Für Kaffee/Tee die Tagesmenge insgesamt unter etwa 200 mg Koffein halten.",
        sources: [1, 4, 14]
      },
      {
        title: "Kaffee, schwarzer/grüner Tee, Cola und Kakao",
        examples: "Filterkaffee, Espresso, Matcha, Schwarztee, Grüntee, Cola, Eistee, Kakao.",
        status: "limit",
        category: "Getränke",
        topics: ["Koffein"],
        why: "Hohe Koffeinzufuhr wird mit Wachstumsverzögerung, niedrigem Geburtsgewicht und Schwangerschaftsverlust assoziiert.",
        action: "Moderate Mengen: als Orientierung maximal 200 mg Koffein pro Tag aus allen Quellen zusammen.",
        sources: [1, 4, 14]
      },
      {
        title: "Chininhaltige Getränke",
        examples: "Tonic Water, Bitter Lemon und andere als chininhaltig gekennzeichnete Limonaden.",
        status: "tabu",
        category: "Getränke",
        topics: ["Chinin"],
        why: "Das BfR empfiehlt Schwangeren vorsorglich, auf chininhaltige Getränke zu verzichten.",
        action: "Meiden, auch nicht gegen Wadenkrämpfe oder Übelkeit einsetzen.",
        sources: [9]
      },
      {
        title: "Lakritz in größeren Mengen",
        examples: "Süßlakritz, Salzlakritz, Starklakritz, Lakritztee oder Extrakte.",
        status: "limit",
        category: "Getränke",
        topics: ["Glycyrrhizin"],
        why: "Glycyrrhizin kann bei häufig großen Mengen Mineralstoffwechsel, Blutdruck und Wassereinlagerungen beeinflussen.",
        action: "Gelegentliche kleine Mengen sind anders zu bewerten als regelmäßige große Mengen; größere Mengen vorsorglich meiden.",
        sources: [2]
      },
      {
        title: "Algen und Algenprodukte",
        examples: "Kelp, Wakame-Snacks, Nori in großen Mengen, Jod-Algenkapseln, Kombu-Brühen.",
        status: "tabu",
        category: "Supplemente & Medikamente",
        topics: ["Jod", "Schadstoffe"],
        why: "Algen können stark schwankende und sehr hohe Jodgehalte sowie Arsen oder andere Kontaminanten enthalten.",
        action: "In der Schwangerschaft nicht als Jodquelle verwenden; Jodgabe individuell nach Empfehlung.",
        sources: [1]
      },
      {
        title: "Kräuterpräparate, Detox- und Abnehmprodukte",
        examples: "Botanicals, hoch dosierte Kräuterextrakte, Detoxtees, Abführtees, Gewichtsverlust-Supplemente.",
        status: "ask",
        category: "Supplemente & Medikamente",
        topics: ["Supplemente"],
        why: "Viele botanische Supplemente sind in der Schwangerschaft unzureichend geprüft und können Wirkstoffe, Koffein oder Kontaminanten enthalten.",
        action: "Nur nach ärztlicher oder pharmazeutischer Rücksprache nutzen; Zutatenliste und Dosierung prüfen.",
        sources: [11]
      },
      {
        title: "Arzneimittel nicht eigenmächtig beginnen oder absetzen",
        examples: "Schmerzmittel, Psychopharmaka, Blutdruckmittel, Akne-/Retinoidmittel, Antiepileptika, Antibiotika.",
        status: "ask",
        category: "Supplemente & Medikamente",
        topics: ["Medikamente"],
        why: "Nutzen und Risiko hängen stark von Wirkstoff, Dosis, Schwangerschaftswoche und Erkrankung ab; unbehandelte Erkrankungen können ebenfalls schaden.",
        action: "Vor Einnahme oder Absetzen Rücksprache halten. Embryotox kann Wirkstoffinformationen und individuelle Beratung bieten.",
        sources: [1, 10]
      }
    ];
