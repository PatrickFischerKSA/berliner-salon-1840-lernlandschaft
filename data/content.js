/*
  Berliner Salon 1840 – Digitale Lernlandschaft
  VOLLSTÄNDIGE content.js

  TECHNIK:
  - Global Scope (window.*)
  - GitHub Pages / Offline-kompatibel
  - KEINE ES-Module

  INHALT:
  - vollständig
  - quellengebunden
  - unverändert gegenüber der gelieferten Struktur
*/

/* =========================
   RESOURCES
   ========================= */

window.RESOURCES = {
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
    }
  ]
};

/* =========================
   ROLES
   ========================= */

window.ROLES = [
  {
    id: 'rahel_varnhagen',
    name: 'Rahel Varnhagen (als „geistige Stimme“ im Salon, 1840)',
    mode: 'historische Person (postum präsent)',
    focus: [
      'Salon als Denkform',
      'Radikale Selbstbeobachtung',
      'Verweigerung von Programmen',
      'Halböffentlichkeit'
    ],
    constraints: [
      'Du darfst NICHT in Parolen sprechen.',
      'Du darfst NICHT „für Frauen“ sprechen, sondern nur als denkende Einzelne.',
      'Du musst mindestens 2× zwischen „Geselligkeit“ und „Existenz/Denken“ unterscheiden.'
    ],
    starterLine:
      '„Wenn ihr von der Rolle der Frau sprecht – hört ihr euch selbst zu oder wiederholt ihr nur?“'
  },
  {
    id: 'fanny_lewald',
    name: 'Fanny Lewald',
    mode: 'historische Person',
    focus: [
      'Literaturmarkt',
      'Bürgerliche Doppelmoral',
      'Bildung ohne Rechte',
      'Assimilationsdruck'
    ],
    constraints: [
      'Du argumentierst mit Szenen, nicht abstrakt.',
      'Du entlarvst mindestens 2× liberal klingende Exklusion.',
      'Du stellst die Frage nach Nutznießern.'
    ],
    starterLine:
      '„Bildung ist bequem – solange sie keine Forderungen erzeugt.“'
  },
  {
    id: 'jenny_meier',
    name: 'Jenny Meier (Romanfigur)',
    mode: 'Romanfigur',
    focus: [
      'Beobachtung',
      'Verfügbarkeit',
      'Assimilation',
      'Scham und Stolz'
    ],
    constraints: [
      'Du reagierst situativ.',
      'Du darfst einmal bewusst schweigen.',
      'Du benennst, was unsagbar bleibt.'
    ],
    starterLine:
      '„Wenn ihr über mich sprecht – wer von euch spricht dann eigentlich?“'
  },
  {
    id: 'konservative_buergerin',
    name: 'Konservative Bürgerin',
    mode: 'fiktive Rolle (quellengebunden)',
    focus: [
      'Häuslichkeit',
      'Moral',
      'Ordnung',
      'Standssicherung'
    ],
    constraints: [
      'Du argumentierst mit Normen, nicht mit Gefühlen.',
      'Du benennst soziale Verluste.',
      'Du gestehst die Attraktivität des Salons ein.'
    ],
    starterLine:
      '„Ordnung ist keine Grausamkeit – sie ist Schutz.“'
  },
  {
    id: 'adlige_dame',
    name: 'Adlige Dame',
    mode: 'fiktive Rolle (quellengebunden)',
    focus: [
      'Standespflicht',
      'Hausmutterideal',
      'Repräsentation',
      'Pflicht'
    ],
    constraints: [
      'Du sprichst nicht von Privileg, sondern von Pflicht.',
      'Du vergleichst Adel und Bürgertum.',
      'Du problematisierst Bildung.'
    ],
    starterLine:
      '„Pflicht ist kein Käfig – aber sie hat Gitter.“'
  }
];

/* =========================
   MODULES
   ========================= */

window.MODULES = [
  {
    id: 'm1',
    title: 'Modul 1 – Einstieg: Berlin 1840 als Bühne der Halböffentlichkeit',
    goals: [
      'Verortung des Salons zwischen Privatheit und Öffentlichkeit',
      'Erkennen sozialer und politischer Rahmung'
    ],
    resources: {
      external: window.RESOURCES.external,
      internal: [window.RESOURCES.internal[1]]
    },
    tasks: [
      {
        type: 'watch_read',
        title: 'Impuls: Rezeption vs. Praxis',
        prompt:
          'Analysiere Deutschlandfunk-Beitrag und Video: Wo wird Rahel Varnhagen ikonisiert, wo als denkende Praktikerin sichtbar?',
        fields: [
          { id: 'm1a', label: 'Ikonisierung', placeholder: 'Belege' },
          { id: 'm1b', label: 'Praxis', placeholder: 'Belege' }
        ]
      }
    ]
  },
  {
    id: 'm2',
    title: 'Modul 2 – Frauenbilder und Normen',
    goals: [
      'Rekonstruktion bürgerlicher Frauenbilder',
      'Vergleich mit adeligen Normen'
    ],
    resources: {
      internal: [
        window.RESOURCES.internal[0],
        window.RESOURCES.internal[3]
      ]
    },
    tasks: [
      {
        type: 'analysis',
        title: 'Normen als Machtinstrument',
        prompt:
          'Analysiere Begriffe wie „Natur“, „Tugend“, „Vormundschaft“ und ihre soziale Funktion.'
      }
    ]
  },
  {
    id: 'm3',
    title: 'Modul 3 – Literatur als Gesellschaftsanalyse',
    goals: [
      'Analyse von Antisemitismus und Assimilation',
      'Erkennen sozialer Grenzziehungen'
    ],
    resources: {
      internal: [window.RESOURCES.internal[2]]
    },
    tasks: [
      {
        type: 'close_reading',
        title: 'Romananalyse: Jenny',
        prompt:
          'Untersuche Alltagsrede, Blickregime und Exklusionsmechanismen.'
      }
    ]
  },
  {
    id: 'm4',
    title: 'Modul 4 – Diskussionsspiel: Berliner Salon 1840',
    goals: [
      'Rollenbasiertes Argumentieren',
      'Konfliktaustragung'
    ],
    resources: {
      external: window.RESOURCES.external,
      internal: window.RESOURCES.internal
    },
    tasks: [
      {
        type: 'roleplay',
        title: 'Salonabend',
        prompt:
          'Spiele vier Diskussionsrunden mit Bruchmoment.'
      }
    ]
  },
  {
    id: 'm5',
    title: 'Modul 5 – Nachhall',
    goals: [
      'Reflexion ohne Auflösung',
      'Quellengebundene Positionierung'
    ],
    resources: {
      internal: window.RESOURCES.internal
    },
    tasks: [
      {
        type: 'letter',
        title: 'Brief aus 1840',
        prompt:
          'Schreibe einen Brief an Rahel Varnhagen oder eine junge Frau 1850.'
      }
    ]
  }
];
