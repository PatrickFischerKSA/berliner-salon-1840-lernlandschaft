# Berliner Salon 1840 – Digitale Lernlandschaft (GitHub Pages Repo)

Diese Lernlandschaft ist **quellengebunden** aufgebaut und enthält ein **rollenbasiertes Diskussionsspiel** (Berlin 1840) mit realen Personen (Rahel Varnhagen, Fanny Lewald) und Romanfigur (Jenny Meier), plus Kontext- und Quellenarbeit.

## Explizite Ressourcen (wie gefordert)

### Extern
- Deutschlandfunk: „Vor 250 Jahren geboren: Rahel Varnhagen – Lichtgestalt der Berliner Salons“
  - https://www.deutschlandfunk.de/vor-250-jahren-geboren-rahel-varnhagen-lichtgestalt-der-100.html
- YouTube: Video zu Rahel Varnhagen
  - https://www.youtube.com/watch?v=TVvPQ1r7gec

### Intern (im Repo eingebettet)
- `assets/docs/bpb_frauen_um_1800.pdf`
- `assets/docs/wilhelmy_berliner_salons.pdf`
- `assets/docs/lewald_jenny.pdf`
- `assets/docs/paletschek_adel_buergertum_frauen.pdf`

## Features
- Module (Navigation links) + Fortschrittsanzeige
- Rollenwahl (mit Quellenkarten)
- Aufgabenfelder mit Autosave (localStorage)
- Quizfragen mit Synonym-/Toleranzwertung (kein starrer Wortlaut)
- Diskussion im Rundenmodus (Timer + Protokollfelder)
- **Export**: PDF und JSON
- **Teacher Mode** (Passwort in `assets/js/app.js`): zeigt Musterhinweise/Lehrkommentarblöcke
- **Reset-Knopf**: löscht alles (Fortschritt + Eingaben)

## Repo-Struktur
```
berliner-salon-1840-lernlandschaft/
  index.html
  README.md
  data/
    content.js
  assets/
    css/style.css
    js/app.js
    docs/*.pdf
```

## Lokales Testen
- Öffne `index.html` über einen lokalen Server (empfohlen), z.B.:
  - VS Code: Extension „Live Server“
  - oder: `python3 -m http.server` im Repo-Ordner

## Deployment auf GitHub Pages
1. Neues Repo auf GitHub erstellen (z.B. `berliner-salon-1840`)
2. Inhalte dieses Ordners in das Repo hochladen (Root-Ebene)
3. GitHub → **Settings** → **Pages**
4. Source: **Deploy from a branch**
5. Branch: `main` + Folder: `/ (root)`
6. Speichern → GitHub Pages URL wird angezeigt

## Teacher Mode
- Standard-Passwort: `SALON1840`
- Ändern in: `assets/js/app.js` → `TEACHER_PASSWORD`

---

> Hinweis: Die PDF-Dateien bleiben urheberrechtlich geschützt; diese Lernlandschaft dient didaktischen Zwecken im Unterricht.
