/*
  Berliner Salon 1840 – Digitale Lernlandschaft
  Inhalt ist bewusst quellengebunden aufgebaut.

  Externe Ressourcen (explizit verlinkt):
  - Deutschlandfunk: https://www.deutschlandfunk.de/vor-250-jahren-geboren-rahel-varnhagen-lichtgestalt-der-100.html
  - YouTube: https://www.youtube.com/watch?v=TVvPQ1r7gec
  - Staatsbibliothek Berlin (E.T.A. Hoffmann Umfeld / Salons): https://etahoffmann.staatsbibliothek-berlin.de/erforschen/umfeld/salons/

  Interne Quellen (im Repo unter assets/docs/):
  - bpb_frauen_um_1800.pdf
  - wilhelmy_berliner_salons.pdf
  - lewald_jenny.pdf
  - paletschek_adel_buergertum_frauen.pdf
  - Der_Salon_im_19._Jahrhundert_-_ein_kulturelles_Ereignis.pdf   (NEU)
*/

export const RESOURCES = {
  external: [
    {
      title: 'Deutschlandfunk: „Vor 250 Jahren geboren: Rahel Varnhagen – Lichtgestalt der Berliner Salons“',
      url: 'https://www.deutschlandfunk.de/vor-250-jahren-geboren-rahel-varnhagen-lichtgestalt-der-100.html',
      type: 'article',
      note: 'Biografisch-kulturhistorischer Beitrag; Fokus: Salon als Denk- und Existenzform.'
    },
    {
      title: 'YouTube: Video zu Rahel Varnhagen',
      url: 'https://www.youtube.com/watch?v=TVvPQ1r7gec',
      type: 'video',
      note: 'Einstieg/Impuls und Rezeption (heutige Darstellung vs. historische Selbstwahrnehmung).'
    },
    {
      title: 'Staatsbibliothek Berlin: Salons im Umfeld E. T. A. Hoffmanns',
      url: 'https://etahoffmann.staatsbibliothek-berlin.de/erforschen/umfeld/salons/',
      type: 'archive',
      note: 'Netzwerkzugänge: Salons als kulturelle Infrastruktur (Gastgeberinnen/Gäste/Orte/Verflechtungen).'
    }
  ],
  internal: [
    {
      title: 'bpb: „Wie alles begann – Frauen um 1800“ (PDF)',
      path: 'assets/docs/bpb_frauen_um_1800.pdf',
      type: 'pdf',
      cite: 'Mechthilde Vahsen (bpb), Frauen um 1800 / Frauenbewegung.'
    },
    {
      title: 'Petra Wilhelmy-Dollinger: „Die Berliner Salons“ (PDF)',
      path: 'assets/docs/wilhelmy_berliner_salons.pdf',
      type: 'pdf',
      cite: 'de Gruyter 2000 (Ausgabe ohne Apparat).'
    },
    {
      title: 'Fanny Lewald: „Jenny“ (PDF)',
      path: 'assets/docs/lewald_jenny.pdf',
      type: 'pdf',
      cite: 'Roman (19. Jh.), Figurenrede zu Antisemitismus/Assimilation/Bildung und bürgerlicher Doppelmoral.'
    },
    {
      title: 'Sylvia Paletschek: „Adelige und bürgerliche Frauen (1770–1870)“ (PDF)',
      path: 'assets/docs/paletschek_adel_buergertum_frauen.pdf',
      type: 'pdf',
      cite: 'Sonderdruck, vergleichende Perspektive auf Frauenbilder und Lebenswelten.'
    },
    {
      title: 'Axel Röhrborn (nach Wilhelmy-Dollinger): „Der Berliner Salon im 19. Jahrhundert – ein kulturelles Ereignis“ (PDF)',
      path: 'assets/docs/Der_Salon_im_19._Jahrhundert_-_ein_kulturelles_Ereignis.pdf',
      type: 'pdf',
      cite: 'Zusammenstellung (Juni 2021) nach Notizen zu Vortrag „Salon-Forschung“ (Petra Wilhelmy-Dollinger).'
    }
  ]
};

/*
  ATMOSPHERE (NEU)
  Nur Daten. Die konkrete Verwendung (Hintergrund/Module) erfolgt in index.html/app.js.
*/
export const ATMOSPHERE = {
  backgroundImageSalon: 'assets/images/gelber_salon.jpg',
  backgroundMode: 'contextual', // nur in bestimmten Modulen aktivieren (m6/m7)
  overlay: {
    type: 'darken',
    strength: 0.62
  },
  note:
    'Der Gelbe Salon ist kein „Deko-Hintergrund“, sondern soll als Raumdispositiv (Blickachsen/Bewegung/Hierarchie) thematisiert werden.'
};

export const ROLES = [
  {
    id: 'rahel_varnhagen',
    name: 'Rahel Varnhagen (als „geistige Stimme“ im Salon, 1840 zitiert/gegenwärtig)',
    mode: 'historische Person (postum präsent)',
    focus: ['Salon als Denkform', 'Radikale Selbstbeobachtung', 'Verweigerung von Programmen', 'Halböffentlichkeit'],
    constraints: [
      'Du darfst NICHT in Parolen sprechen.',
      'Du darfst NICHT „für Frauen“ sprechen, sondern nur als denkende Einzelne – und genau daran Konflikte zeigen.',
      'Du musst mindestens 2× explizit zwischen „Geselligkeit“ und „Existenz/Denken“ unterscheiden.'
    ],
    evidenceCards: [
      {
        title: 'Salon = riskanter Freiraum (Halböffentlichkeit)',
        sources: ['wilhelmy_berliner_salons.pdf (Einleitung: Salons als Erfindung von Frauen; Zugang zur Öffentlichkeit)'],
        claim: 'Der Salon ist weder bloß privat noch echte Öffentlichkeit – er ist ein Zwischenraum, der Frauen Handlungsspielräume eröffnet und sie zugleich exponiert.'
      },
      {
        title: 'Rezeption: „Lichtgestalt“ ist problematisch',
        sources: ['Deutschlandfunk-Artikel'],
        claim: 'Spätere Rezeption neigt zur Ikonisierung – im Spiel musst du das irritieren: Es geht um Denkbewegungen, nicht um Heldinnenerzählung.'
      }
    ],
    starterLine: '„Wenn ihr von der ‚Rolle der Frau‘ sprecht, hört ihr euch selbst zu – oder sprecht ihr nur nach, was man euch vorgesagt hat?“'
  },
  {
    id: 'fanny_lewald',
    name: 'Fanny Lewald (Autorin, um 1840: literarische Öffentlichkeit als Praxis)',
    mode: 'historische Person',
    focus: ['Literaturmarkt', 'Bürgerliche Doppelmoral', 'Bildung ohne Rechte', 'Assimilationsdruck'],
    constraints: [
      'Du argumentierst NICHT abstrakt, sondern mit Szenen-/Sprechweisen aus dem Romanmilieu.',
      'Du musst mindestens 2× Männerrede als „liberal klingend, aber sozial exklusiv“ entlarven.',
      'Du musst 1× die Frage stellen: „Wer profitiert konkret von dieser Moral?“'
    ],
    evidenceCards: [
      {
        title: 'Alltagsantisemitismus und soziale Exklusion (Romananfang)',
        sources: ['lewald_jenny.pdf (Anfang: Gespräch nach dem Theater; Abwertung „verdammt jüdisch“)'],
        claim: 'Assimilation ist keine automatische Anerkennung: Bildung/Kompetenz existieren, doch Zugehörigkeit bleibt fragil und jederzeit entziehbar.'
      },
      {
        title: 'Politisierung von Frauen über Literatur',
        sources: ['bpb_frauen_um_1800.pdf (Abschnitte zur Politisierung; Autorinnen thematisieren Benachteiligung)'],
        claim: 'Autorinnen nutzen Romane/Essays als Ersatz-Öffentlichkeit und als Training politischer Argumentation – aber unter Risiko und Moralaufsicht.'
      }
    ],
    starterLine: '„Es ist bequem, Frauen Bildung zuzugestehen – solange sie daraus keine Ansprüche ableiten dürfen.“'
  },
  {
    id: 'jenny_meier',
    name: 'Jenny Meier (Romanfigur aus „Jenny“ – im Salon als eingeladene/angesprochene Stimme)',
    mode: 'Romanfigur',
    focus: ['Beobachtet werden', '„gebildet“ vs. „verfügbar“', 'Familiärer Assimilationskonflikt', 'Scham und Stolz'],
    constraints: [
      'Du reagierst in konkreten Situationen (Blicke, Bemerkungen, Einladungslogik).',
      'Du darfst 1× demonstrativ schweigen (und das Schweigen als Handlung markieren).',
      'Du musst 1× explizit formulieren, was du NICHT sagen kannst, ohne jemanden zu gefährden.'
    ],
    evidenceCards: [
      {
        title: '„Man nimmt den einzelnen jungen Mann – aber eine Familie?“',
        sources: ['lewald_jenny.pdf (Frühstücksszene: Vater/Mutter über Aufnahme in christliche Kreise)'],
        claim: 'Anerkennung ist geschichtet: Individuelle Akzeptanz kann bestehen, während Familien-/Heiratslogiken Exklusion reproduzieren.'
      }
    ],
    starterLine: '„Wenn ihr über mich sprecht, als sei ich ein Fall – wer von euch hat dann eigentlich das Wort?“'
  },
  {
    id: 'konservative_buergerin',
    name: 'Konservative Bürgerin (fiktive Figur, quellengebunden konstruiert)',
    mode: 'fiktive Rolle (historisch plausibel)',
    focus: ['Häuslichkeit', 'Moral als soziale Ordnung', 'Angst vor „Anrüchigkeit“ der Halböffentlichkeit', 'Standssicherung'],
    constraints: [
      'Du darfst NICHT „Frauen sind halt so“ sagen. Du musst immer mit Normbegründungen arbeiten (Religion, Medizin, Sitte, „Natur“).',
      'Du musst 2× klar machen, was du sozial zu verlieren glaubst.',
      'Du musst 1× anerkennen, dass der Salon attraktiv ist – und warum dich das beunruhigt.'
    ],
    evidenceCards: [
      {
        title: '„Natürlicher Geschlechtscharakter“ als Ordnungsidee',
        sources: ['bpb_frauen_um_1800.pdf (Abschnitt: Subjektstatus verneint; Geschlechtsvormundschaft; Trennung der Räume)'],
        claim: 'Die Norm wird als „Natur“ und als gesellschaftliche Stabilität verkauft: Weibliche Tugenden (Sittsamkeit/Fleiß) legitimieren Ausschluss aus Öffentlichkeit.'
      }
    ],
    starterLine: '„Sie nennen es Freiheit – ich sehe eine Ordnung, die zerreißt. Wer fängt dann die Folgen auf?“'
  },
  {
    id: 'adlige_dame',
    name: 'Adlige Dame (fiktive Rolle, quellengebunden; „Hausmutter“/Hofnormen im Vergleich)',
    mode: 'fiktive Rolle (historisch plausibel)',
    focus: ['Standespflicht', 'Hauswirtschaft/Patriarchat', 'Repräsentation', 'Grenzen weiblicher Selbstbehauptung'],
    constraints: [
      'Du darfst nicht „privilegiert“ sprechen – du musst Pflicht/Norm als Zwang sichtbar machen.',
      'Du musst 1× den Unterschied zwischen landadeligem Ideal und bürgerlichem Ideal thematisieren.',
      'Du musst 1× die Frage stellen, ob „Bildung“ im Adel dasselbe bedeutet wie im Bürgertum.'
    ],
    evidenceCards: [
      {
        title: 'Hausmutter-Ideal im Landadel',
        sources: ['paletschek_adel_buergertum_frauen.pdf (frühe Abschnitte: weibliche Tugenden; Hausmutter; patriarchalische Ordnung)'],
        claim: 'Auch im Adel ist Weiblichkeit normiert (gottesfürchtig, häuslich, fleißig) – aber anders begründet und in andere Macht-/Pflichtsysteme eingebettet.'
      }
    ],
    starterLine: '„Ihr sprecht von Selbstverwirklichung. Ich kenne vor allem: Pflicht – und die Kunst, sie nicht als Käfig zu zeigen.“'
  },

  /* ==========================
     NEUE ROLLEN (RÖHRBORN-PDF)
     ========================== */

  {
    id: 'henriette_von_crayen',
    name: 'Henriette von Crayen (1755–1832)',
    mode: 'historische Person (als Modellfigur; 1840 erinnernd/zitiert)',
    focus: ['Salon als Vermittlung', 'Neben- und Ineinander von Intellekt und Erotik', 'Distinktion vs. Freiheitlichkeit'],
    constraints: [
      'Du sprichst nicht als „Aufklärerin“ im Lehrton.',
      'Du zeigst die Freiheitlichkeit des Salons als Reiz UND als Provokation gegen bürgerlich-moralistische Strenge.',
      'Du darfst 1× bewusst „böse/witzige“ Zuspitzung einsetzen – aber musst danach den sozialen Preis sichtbar machen.'
    ],
    evidenceCards: [
      {
        title: 'Vermittlung zwischen Ständen / Distinktion',
        sources: ['Der_Salon_im_19._Jahrhundert_-_ein_kulturelles_Ereignis.pdf (Abschnitt „Henriette von Crayen“)'],
        claim: 'Crayen vermittelte „in einer Epoche strikter sozialer Distinktion“ zwischen Ständen und widersprüchlichen Neigungen; Salon als Treffpunkt gelehrter und galanter Gesellschaft.'
      },
      {
        title: '„Museé d’Amour“ / Intellekt + Erotik',
        sources: ['Der_Salon_im_19._Jahrhundert_-_ein_kulturelles_Ereignis.pdf (Brentano-Zitat im Crayen-Abschnitt)'],
        claim: 'Spezifikum: Neben- und Ineinander von intellektuellem und erotischem Interesse; Spannung zwischen adelig-ständischen Konventionen und bürgerlich-moralistischer Sittenstrenge.'
      }
    ],
    starterLine: '„Ihr wollt Reinheit im Gespräch? Dann werdet ihr sehr bald nur noch unter euch sprechen – und nennt es dann Moral.“'
  },

  {
    id: 'clara_kugler',
    name: 'Clara Kugler (Kuglerischer Salon, Friedrichstraße 242; ca. 1830–1857)',
    mode: 'historische Person (Salonpraxis; 1840 aktiv)',
    focus: ['funktionale Veränderungen der Salon-Kultur', 'Romantik vs. Biedermeier', 'Szenarien/Disputationen/Kunstbeiträge'],
    constraints: [
      'Du brichst den „literarischen Teetisch“-Habitus auf.',
      'Du musst mindestens 1× eine „Disputation“ erzwingen (These – Einwand – Rückfrage).',
      'Du musst mindestens 1× ein szenisches Element als Erkenntnismittel einführen (ohne es als „Theater“ zu verharmlosen).'
    ],
    evidenceCards: [
      {
        title: 'Vom Biedermeier-Teetisch zur romantischen Disputation',
        sources: ['Der_Salon_im_19._Jahrhundert_-_ein_kulturelles_Ereignis.pdf (Abschnitt „Franz und Clara Kugler“)'],
        claim: 'Vorher: literarischer Teetisch, französische Konversation, Handarbeit, Kammermusik/Lied. Nun: Romantik mit Weltverstand, Puppenspiel, Tanz/Cotillon-Spiele, Disputationen, Kunstbeiträge.'
      }
    ],
    starterLine: '„Wenn wir heute nur konversieren, um uns zu bestätigen, dann ist der Salon ein Möbelstück. Ich will, dass er arbeitet.“'
  },

  {
    id: 'mathilde_von_rohr',
    name: 'Mathilde von Rohr (1810–1889) – Salon Wilhelmstraße',
    mode: 'historische Person (Salonpraxis als Modell; 1840er Kontext)',
    focus: ['Improvisatoren-Rollenspiel', 'Anekdote/Historie als Material', 'Spontankunst als soziale Dynamik'],
    constraints: [
      'Du darfst keine fertigen Thesen „vortragen“.',
      'Du musst mindestens 1× Improvisation einfordern: Zuruf/Stichwort → Szene/Text.',
      'Du musst mindestens 1× zeigen, wie Material (Anekdote/Historie) als Machtmittel im Gespräch dient.'
    ],
    evidenceCards: [
      {
        title: '„Improvisatoren“: Zuruf/Stichwort → Szene/Text',
        sources: ['Der_Salon_im_19._Jahrhundert_-_ein_kulturelles_Ereignis.pdf (Abschnitt „Mathilde von Rohr“)'],
        claim: 'Bei ihr gab es das Rollenspiel der Improvisatoren: Spontankünstler entwickelten zur Erheiterung und Bewunderung Texte/Szenen mittels Zuruf und Stichwort.'
      }
    ],
    starterLine: '„Gebt mir ein Stichwort. Und ich gebe euch – nicht die Wahrheit –, sondern die Bewegung eurer Wahrheit.“'
  },

  {
    id: 'sophie_graefin_von_schwerin',
    name: 'Sophie Gräfin von Schwerin (1785–1863) – „Blauer Salon“ (ca. 1840–1860)',
    mode: 'historische Person (1840 aktiv)',
    focus: ['schöngeistige Atmosphäre', 'ungewöhnlich gute Bildung', 'Palais Dönhoff / Wilhelmstraße 63', 'Konstellation der Stammgäste'],
    constraints: [
      'Du arbeitest mit leisem Druck (Vergleich, Erinnerung, Quellenwissen).',
      'Du musst mindestens 1× den Ort (Palais Dönhoff, Wilhelmstraße 63) als soziale Selektionsmaschine benennen shows-not-tell.',
      'Du vermeidest offene Konfrontation – aber entziehst Zustimmung durch Präzision.'
    ],
    evidenceCards: [
      {
        title: 'Blauer Salon: Ort, Bildung, Stammgäste',
        sources: ['Der_Salon_im_19._Jahrhundert_-_ein_kulturelles_Ereignis.pdf (Abschnitt „Sophie Gräfin von Schwerin“)'],
        claim: 'Sie führte als Witwe ihren Salon im Palais Dönhoff (Wilhelmstraße 63). Für Frauen dieser Zeit ungewöhnlich gute Bildung (deutsche Sprache, Poesie, Wissenschaft).'
      }
    ],
    starterLine: '„In einem Salon wird nicht nur geredet. Es wird gezählt – wer dazugehört, ohne dass man es ausspricht.“'
  },

  {
    id: 'bernhard_von_lepel',
    name: 'Bernhard von Lepel (1818–1885) – „Dichter und Militär“',
    mode: 'historische Person (als Gastfigur; 1840er/1848 Kontext)',
    focus: ['Salon als literarisches Netzwerk', 'Humor als Fehldeutung', 'Tunnel über der Spree (Poetenname Schenckendorf)'],
    constraints: [
      'Du arbeitest mit Humor, der missverstanden werden kann.',
      'Du musst mindestens 1× zeigen, dass Salonnetzwerke Wege öffnen (Einführen/Verknüpfen), nicht nur Gespräch.',
      'Du darfst nicht „politisch programmatisch“ reden, sondern sozial-praktisch: Wer kennt wen, wer nimmt wen mit.'
    ],
    evidenceCards: [
      {
        title: 'Stammgast diverser Salons; Netzwerkfunktion',
        sources: ['Der_Salon_im_19._Jahrhundert_-_ein_kulturelles_Ereignis.pdf (Abschnitt „Bernhard von Lepel“)'],
        claim: 'Er war Stammgast in diversen Salons, Mitglied im „Tunnel über der Spree“ (Poetenname Schenckendorf) und führte Fontane dort und in andere Salons ein.'
      }
    ],
    starterLine: '„Ihr wollt die Wahrheit? Ich kann euch höchstens die Verbindung zeigen – und dann lacht ihr vielleicht an der falschen Stelle.“'
  },

  {
    id: 'adolf_stahr',
    name: 'Adolf Stahr (1805–1876) – späteres Salonpaar mit Fanny Lewald-Stahr',
    mode: 'historische Person (als Kontrast: politisierte Bildungslaufbahn)',
    focus: ['Bildungsweg/Philologie', 'Burschenschaft/Politikrisiko', 'Publizistik als Öffentlichkeit'],
    constraints: [
      'Du musst mindestens 1× zeigen, dass „Bildung“ politisch riskant sein kann (nicht nur Prestige).',
      'Du sprichst nicht als Held, sondern als jemand, der sich durch Institutionen bewegt (Gymnasium, Publizistik).',
      'Du darfst Lewald nicht „erklären“ – du musst zeigen, wie Paar-/Karriere-Salonlogik funktioniert.'
    ],
    evidenceCards: [
      {
        title: 'Burschenschaft / Publizistik / Karriereweg',
        sources: ['Der_Salon_im_19._Jahrhundert_-_ein_kulturelles_Ereignis.pdf (Abschnitt „Adolf Stahr und Fanny Lewald-Stahr“)'],
        claim: 'Stahr studierte Philologie, schloss sich 1825 der (verbotenen) Halleschen Burschenschaft an und publizierte kritische Beiträge – Bildung als politisch exponierte Praxis.'
      }
    ],
    starterLine: '„Bildung ist nicht nur ein Schmuckstück. Sie kann ein Aktenzeichen werden.“'
  }
];

export const MODULES = [
  {
    id: 'm1',
    title: 'Modul 1 – Einstieg: Berlin 1840 als Bühne der Halböffentlichkeit',
    goals: [
      'Du verortest den Salon als Zwischenraum (privat/öffentlich).',
      'Du erkennst: „Geselligkeit“ ist nicht harmlos, sondern politisch und sozial gerahmt.'
    ],
    resources: {
      external: [RESOURCES.external[0], RESOURCES.external[1]],
      internal: [RESOURCES.internal[1]]
    },
    tasks: [
      {
        type: 'watch_read',
        title: 'Impuls 1: Rezeption vs. historische Funktion',
        prompt:
          '1) Öffne den Deutschlandfunk-Beitrag und notiere 3 Formulierungen, die Rahel Varnhagen „größer“ machen (Ikonisierung).\n' +
          '2) Setze daneben 3 Formulierungen, die ihr Denken/Schreiben als Praxis zeigen (nicht als Legende).\n' +
          '3) Schau das YouTube-Video und markiere 2 Stellen, an denen heutige Darstellung glättet/verkürzt (konkret: Was fehlt? Welche Konflikte werden weichgezeichnet?).',
        fields: [
          { id: 'm1_impuls_ikone', label: 'Deutschlandfunk: Ikonisierende Formulierungen (3)', placeholder: 'Zitat/Paraphrase + kurze Begründung' },
          { id: 'm1_impuls_praxis', label: 'Deutschlandfunk: Praxis/Denken/Schreiben (3)', placeholder: 'Zitat/Paraphrase + kurze Begründung' },
          { id: 'm1_video_glattung', label: 'YouTube: 2 konkrete Glättungen/Verkürzungen', placeholder: 'Stelle/Minute + was fehlt' }
        ]
      },
      {
        type: 'quiz',
        title: 'Check: Was ist „Halböffentlichkeit“ (quellenbasiert)?',
        prompt: 'Beantworte präzise. Du sollst NICHT „frei“/„offen“ sagen, sondern die Struktur benennen.',
        questions: [
          {
            id: 'm1_q1',
            question: 'Nenne zwei Gründe (aus Wilhelmy-Dollinger), warum der Salon für Frauen ein Zugang zur Öffentlichkeit war – und zugleich riskant.',
            accept: [
              'zugang zur bildungsöffentlichkeit',
              'halböffentlichkeit',
              'zwischen privatheit und öffentlichkeit',
              'risikant',
              'anrüchig',
              'exponiert',
              'einladung',
              'jour fixe',
              'netzwerk',
              'salonniere als zentralperson'
            ],
            model: 'Beispielantwort (muss nicht wortgleich): Der Salon ist eine Halböffentlichkeit in der Privatwohnung der Salonnière: Frauen schaffen sich so Zugang zur Bildungswelt, die sonst männlich dominiert ist. Gleichzeitig ist die Konstellation ungewöhnlich/riskant und kann als anrüchig gelten; Freiheit und soziale Kontrolle stehen in Spannung.'
          }
        ]
      }
    ]
  },
  {
    id: 'm2',
    title: 'Modul 2 – Quellenarbeit: Frauenbilder, Rechte, Räume (1770–1870)',
    goals: [
      'Du rekonstruierst das bürgerliche Geschlechtermodell („natürlicher Geschlechtscharakter“) aus der bpb-Quelle.',
      'Du vergleichst bürgerliche und adelige Normen (Paletschek) ohne Gleichsetzung.'
    ],
    resources: {
      internal: [RESOURCES.internal[0], RESOURCES.internal[3]]
    },
    tasks: [
      {
        type: 'source_grid',
        title: 'Begriffe als Machttechnik',
        prompt:
          'Arbeite mit der bpb-PDF.\n' +
          'A) Extrahiere 4 Begriffe/Behauptungen, mit denen Frauen der Subjektstatus abgesprochen wird (z.B. Vormundschaft, „Natur“, Tugenden).\n' +
          'B) Für jeden Begriff: Wer profitiert? Welche Praxis wird damit begründet (z.B. Ausschluss aus Öffentlichkeit)?\n' +
          'C) Formuliere pro Begriff eine Gegenfrage, die im Salon 1840 gestellt werden könnte (ohne moderne Schlagworte).',
        rows: [
          { id: 'm2_r1', label: 'Begriff/Behauptung 1' },
          { id: 'm2_r2', label: 'Begriff/Behauptung 2' },
          { id: 'm2_r3', label: 'Begriff/Behauptung 3' },
          { id: 'm2_r4', label: 'Begriff/Behauptung 4' }
        ]
      },
      {
        type: 'compare',
        title: 'Adel vs. Bürgertum: „Hausmutter“ und Ordnung',
        prompt:
          'Arbeite mit Paletschek.\n' +
          '1) Nenne 3 Normen/Pflichten, die für landadelige Frauen als Ideal beschrieben werden.\n' +
          '2) Nenne 3 Normen, die du aus der bpb-Quelle als bürgerliches Frauenideal rekonstruierst.\n' +
          '3) Formuliere 2 Unterschiede in der Begründungslogik (Pflichtsystem/Stand vs. „Natur“/Bürgerlichkeit).',
        fields: [
          { id: 'm2_adel_normen', label: 'Landadel: 3 Normen/Pflichten', placeholder: 'Stichworte + Seitenhinweis (wenn möglich)' },
          { id: 'm2_buerg_normen', label: 'Bürgertum: 3 Normen/Ideale', placeholder: 'Stichworte + Seitenhinweis (wenn möglich)' },
          { id: 'm2_unterschiede', label: '2 Unterschiede in der Begründungslogik', placeholder: 'z.B. Legitimation, Räume, „Ehre“, Religion, Natur' }
        ]
      }
    ]
  },
  {
    id: 'm3',
    title: 'Modul 3 – Literatur als Gesellschaftsdiagnose: Fanny Lewald „Jenny“',
    goals: [
      'Du analysierst, wie Antisemitismus/Assimilation in Alltagsrede auftauchen (nicht als „Thema“, sondern als Praxis).',
      'Du erkennst: „Bildung“ erzeugt noch keine Zugehörigkeit oder Entscheidungsfreiheit.'
    ],
    resources: {
      internal: [RESOURCES.internal[2]]
    },
    tasks: [
      {
        type: 'close_reading',
        title: 'Sprechweisen markieren (nicht moralisch kommentieren!)',
        prompt:
          'Lies den Beginn (Restaurant nach dem Theater) und arbeite sprachlich: \n' +
          '1) Markiere 3 Sätze, in denen Ausgrenzung als „Geschmack“, „Antipathie“ oder „Sitte“ getarnt wird.\n' +
          '2) Markiere 2 Stellen, in denen „liberale“ Rede trotzdem Exklusion stabilisiert.\n' +
          '3) Formuliere je 1 Gegenrede im Stil des Romans (nicht modern, nicht allgemein).',
        fields: [
          { id: 'm3_maskierung', label: '3 Sätze: Ausgrenzung als Geschmack/Sitte', placeholder: 'Zitat/Paraphrase + kurze Funktionsbeschreibung' },
          { id: 'm3_liberal_exklusiv', label: '2 Stellen: liberal klingend, sozial exklusiv', placeholder: 'Zitat/Paraphrase + Begründung' },
          { id: 'm3_gegenrede', label: '2 Gegenreden im Stil der Szene', placeholder: 'je 2–4 Sätze' }
        ]
      },
      {
        type: 'quiz',
        title: 'Check: Schichtungen von Anerkennung',
        prompt: 'Kurz, aber präzise. Keine Allgemeinplätze.',
        questions: [
          {
            id: 'm3_q1',
            question: 'Erkläre den Unterschied zwischen „den einzelnen jungen Mann aufnehmen“ und „eine Familie aufnehmen“ (im Sinne der Romanstelle).',
            accept: ['individuum', 'familie', 'heirat', 'zirkel', 'soziale kreise', 'ruecksichten', 'taufe', 'assimilation', 'akzeptanz', 'fragil'],
            model: 'Beispielantwort: Individuelle Akzeptanz kann aus Nutzen/Status entstehen (z.B. als Arzt), aber die Aufnahme einer Familie betrifft Heirat, Verwandtschaft, soziale Sichtbarkeit und dauerhafte Zugehörigkeit – hier werden Grenzen schärfer gezogen; Anerkennung bleibt entziehbar.'
          }
        ]
      }
    ]
  },
  {
    id: 'm4',
    title: 'Modul 4 – Diskussionsspiel: „Ein Abend im Berliner Salon (1840)“',
    goals: [
      'Du spielst eine Rolle quellengebunden und argumentierst nicht „heutig“.',
      'Du führst Konflikte aus: Halböffentlichkeit, Bildung, Moral, Assimilation, Stand.'
    ],
    resources: {
      external: [RESOURCES.external[0], RESOURCES.external[1]],
      internal: [RESOURCES.internal[0], RESOURCES.internal[1], RESOURCES.internal[2], RESOURCES.internal[3]]
    },
    tasks: [
      {
        type: 'roleplay',
        title: 'Rollenwahl & Quellenkarten',
        prompt:
          'Wähle eine Rolle. Lies die Constraints.\n' +
          'Dann: (1) Notiere 3 Behauptungen, die du heute Abend im Salon vertreten wirst.\n' +
          '(2) Zu jeder Behauptung: welche Quellenkarte stützt dich?\n' +
          '(3) Notiere 2 Punkte, an denen du NICHT nachgeben wirst – und warum (quellenbasiert).',
        fields: [
          { id: 'm4_claims', label: '3 Behauptungen + Quellenkarte', placeholder: 'Claim 1 – Karte/Quelle; Claim 2 – ...' },
          { id: 'm4_no_compromise', label: '2 Nicht-Verhandlungs-Punkte', placeholder: 'Punkt – Begründung – Quelle' }
        ]
      },
      {
        type: 'salon_rounds',
        title: 'Vier Runden – mit Bruch',
        prompt:
          'Spiele in 4 Runden (je ~6–10 Minuten).\n' +
          'R1: „Was darf eine gebildete Frau – und was nicht?“\n' +
          'R2: „Ist der Salon Emanzipation oder Ersatz?“\n' +
          'R3: „Assimilation: Fortschritt oder Selbstverlust?“\n' +
          'R4 (Bruch): Jemand verlässt demonstrativ den Salon.\n\n' +
          'Dokumentiere nach jeder Runde: (a) deine stärkste Aussage, (b) wer dir widersprach, (c) welche Quelle dich trug, (d) was im Raum kippte.',
        rounds: [
          { id: 'm4_r1', title: 'Runde 1 – Erlaubnisse/Verbote' },
          { id: 'm4_r2', title: 'Runde 2 – Salon: Emanzipation/Ersatz' },
          { id: 'm4_r3', title: 'Runde 3 – Assimilation' },
          { id: 'm4_r4', title: 'Runde 4 – Bruch & Konsequenz' }
        ]
      }
    ]
  },
  {
    id: 'm5',
    title: 'Modul 5 – Nachhall: Brief aus/zu 1840 (Reflexion mit Quellenbindung)',
    goals: [
      'Du formulierst eine Position ohne Schlussmoral.',
      'Du bindest explizit mindestens 2 Quellen in die Reflexion ein.'
    ],
    resources: {
      internal: [RESOURCES.internal[1], RESOURCES.internal[2], RESOURCES.internal[0]]
    },
    tasks: [
      {
        type: 'letter',
        title: 'Brief (1 Seite) – an Rahel / an eine zukünftige Leserin',
        prompt:
          'Schreibe einen Brief (ca. 250–450 Wörter).\n' +
          '- Wähle Adressat: (A) Rahel Varnhagen oder (B) eine junge Frau im Jahr 1850.\n' +
          '- Baue 2 explizite Quellenbezüge ein (z.B. „In der bpb-Quelle heißt es sinngemäß...“ / „Im Roman zeigt sich...“).\n' +
          '- Keine Schlussformel vom Typ „darum müssen wir…“. Lass die Spannung stehen.',
        fields: [
          { id: 'm5_letter', label: 'Dein Brief', placeholder: 'Brieftext…' },
          { id: 'm5_sources_used', label: 'Welche 2–3 Quellen hast du konkret verwendet?', placeholder: 'Quelle + Stelle/Grund' }
        ]
      }
    ]
  },

  /* ==========================
     NEUE MODULE (ERWEITERUNG)
     ========================== */

  {
    id: 'm6',
    title: 'Modul 6 – Der Gelbe Salon als Raumdispositiv (Blick, Bewegung, Hierarchie)',
    goals: [
      'Du analysierst den Salonraum als Akteur (nicht als Kulisse).',
      'Du rekonstruierst, wie Blickachsen/Positionen Gesprächsmacht erzeugen.',
      'Du bindest Raumbeobachtung explizit an Gesprächsverläufe.'
    ],
    resources: {
      external: [RESOURCES.external[2]],
      internal: [RESOURCES.internal[4], RESOURCES.internal[1]]
    },
    tasks: [
      {
        type: 'space_reading',
        title: 'Blickachsen-Protokoll (Gelber Salon)',
        prompt:
          'Nutze das Bild des Gelben Salons als Raumfolie.\n' +
          '1) Zeichne (gedanklich/skizzenhaft) 2 Zentren und 2 Peripherien: Wo sammelt sich Aufmerksamkeit?\n' +
          '2) Lege für 4 Rollen fest: Wo sitzen/stehen sie? (Begründung: welche Wirkung?)\n' +
          '3) Notiere 3 Raumregeln: Was ist in der Nähe des „Zentrums“ sagbar, was nur am Rand?\n' +
          '4) Verknüpfe 2 Beobachtungen mit Quellen: Röhrborn (Salonpraktiken) + Wilhelmy (Halböffentlichkeit).',
        fields: [
          { id: 'm6_zentren_peripherien', label: 'Zentren/Peripherien (2/2) + Wirkung', placeholder: 'Zentrum 1… Zentrum 2… Peripherie 1… Peripherie 2…' },
          { id: 'm6_rollen_position', label: '4 Rollen: Position im Raum + Begründung', placeholder: 'Rolle – Position – Effekt – Risiko' },
          { id: 'm6_raumregeln', label: '3 Raumregeln („sagbar“/„nicht sagbar“)', placeholder: 'Regel 1… Regel 2… Regel 3…' },
          { id: 'm6_quellenbindung', label: '2 explizite Quellenverknüpfungen', placeholder: 'Beobachtung – Quelle – wie stützt/kompliziert sie es?' }
        ]
      }
    ]
  },

  {
    id: 'm7',
    title: 'Modul 7 – Salonabend 1840 (verschärft): Rollen- und Raumlogik gekoppelt',
    goals: [
      'Du führst das Rollenspiel ohne Gemeinplätze (nur situativ + quellengebunden).',
      'Du zeigst, wie Netzwerke/Orte (Stabi) und Salontypen (Röhrborn) Gesprächsverläufe steuern.',
      'Du dokumentierst nicht „Meinung“, sondern Gesprächsmechanik (wer kann wie sprechen?).'
    ],
    resources: {
      external: [RESOURCES.external[2]],
      internal: [RESOURCES.internal[4], RESOURCES.internal[2], RESOURCES.internal[0]]
    },
    tasks: [
      {
        type: 'roleplay_space',
        title: 'Vier Runden – jeweils mit Positionswechsel + Netzwerkzug',
        prompt:
          'Ablauf (streng):\n' +
          'Vor Runde 1: Setzt 6 Rollen im Raum (Zentrum/Nahe Rand/Peripherie).\n' +
          'Jede Runde beginnt mit einem Positionswechsel (jemand rückt vor, jemand wird an den Rand gedrängt).\n\n' +
          'R1: „Was ist heute im Salon überhaupt verhandelbar?“ (nicht: „Frauenrolle“, sondern konkrete Grenzen)\n' +
          'R2: „Welche Form von Bildung zählt – und wer entscheidet das?“\n' +
          'R3: „Netzwerkzug“: Eine Person wird „eingeführt“ oder ausgeschlossen (Stabi-Netzlogik: wer verbindet wen?)\n' +
          'R4: Bruch: Jemand verlässt (oder wird hinauskomplimentiert). Dokumentiere den Mechanismus.\n\n' +
          'Nach jeder Runde dokumentierst du:\n' +
          '(a) stärkste Aussage (wörtlich oder paraphrasiert),\n' +
          '(b) stärkster Einwand,\n' +
          '(c) Raumkipppunkt (welche Bewegung/Blickachse?),\n' +
          '(d) Quellenbeleg (mind. 1 pro Runde).',
        rounds: [
          { id: 'm7_r1', title: 'Runde 1 – Verhandelbarkeit / Grenzen' },
          { id: 'm7_r2', title: 'Runde 2 – Bildung als Selektionskriterium' },
          { id: 'm7_r3', title: 'Runde 3 – Netzwerkzug (Einführen/Ausschließen)' },
          { id: 'm7_r4', title: 'Runde 4 – Bruch & Konsequenz' }
        ]
      },
      {
        type: 'meta_reflection',
        title: 'Mechanik statt Moral: Was hat „gewonnen“?',
        prompt:
          'Ohne Schlussmoral.\n' +
          '1) Nenne 2 Gesprächstechniken, die Macht erzeugten (z.B. Humor, Norm, Anekdote, Disputation, Schweigen).\n' +
          '2) Nenne 2 Raumtechniken (Vor-/Zurückrücken, Rand/ Zentrum).\n' +
          '3) Welche Figur/Position war am verwundbarsten – und warum (quellengebunden)?',
        fields: [
          { id: 'm7_gespraechstechniken', label: '2 Gesprächstechniken + Wirkung', placeholder: 'Technik – Beispiel – Effekt' },
          { id: 'm7_raumtechniken', label: '2 Raumtechniken + Wirkung', placeholder: 'Technik – Beispiel – Effekt' },
          { id: 'm7_verletzlichkeit', label: 'Verwundbarste Position + Begründung (Quelle)', placeholder: 'Rolle/Position – Risiko – Quelle' }
        ]
      }
    ]
  }
];

/*
  Kompatibilität (NEU, aber nicht invasiv):
  Falls deine index.html/app.js mit window.* arbeitet, sind die Daten dort ebenfalls verfügbar.
*/
if (typeof window !== 'undefined') {
  window.RESOURCES = RESOURCES;
  window.ROLES = ROLES;
  window.MODULES = MODULES;
  window.ATMOSPHERE = ATMOSPHERE;
}
