/* ==========================================================
   CHANGE 01 (EXPLIZIT, OPTION A):
   Globalisierung der Datenobjekte für app.js
   KEINE INHALTLICHE ÄNDERUNG.
   AUSSCHLIESSLICH: export -> window.
   ========================================================== */

/*
  Berliner Salon 1840 – Digitale Lernlandschaft
  Inhalt ist bewusst quellengebunden aufgebaut.
  Externe Ressourcen (explizit verlinkt):
  - Deutschlandfunk: https://www.deutschlandfunk.de/vor-250-jahren-geboren-rahel-varnhagen-lichtgestalt-der-100.html
  - YouTube: https://www.youtube.com/watch?v=TVvPQ1r7gec

  Interne Quellen (im Repo unter assets/docs/):
  - bpb_frauen_um_1800.pdf
  - wilhelmy_berliner_salons.pdf
  - lewald_jenny.pdf
  - paletschek_adel_buergertum_frauen.pdf
*/

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

window.ROLES = [
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
  }
];

window.MODULES = [
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
  }
];
