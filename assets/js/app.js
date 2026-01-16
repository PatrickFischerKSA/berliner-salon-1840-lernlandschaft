import { RESOURCES, ROLES, MODULES } from '../../data/content.js';

// =========================
// Konfiguration
// =========================
const APP_KEY = 'salon1840_v1';
const TEACHER_PASSWORD = 'SALON1840'; // <-- bewusst sichtbar (Lehrperson kann es ändern)

// =========================
// State
// =========================
const state = {
  activeModuleId: MODULES[0]?.id || 'm1',
  roleId: null,
  answers: {},
  quiz: {},
  progress: {},
  teacherMode: false
};

// =========================
// Helpers
// =========================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function nowISO(){
  const d = new Date();
  return d.toISOString();
}

function load(){
  try{
    const raw = localStorage.getItem(APP_KEY);
    if(!raw) return;
    const parsed = JSON.parse(raw);
    if(parsed && typeof parsed === 'object'){
      Object.assign(state, parsed);
    }
  }catch(e){
    console.warn('Load failed', e);
  }
}

function save(){
  localStorage.setItem(APP_KEY, JSON.stringify(state));
  updateProgressUI();
}

function hardReset(){
  localStorage.removeItem(APP_KEY);
  location.reload();
}

function normalizeText(s){
  return (s || '')
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g,' ')
    .replace(/[„“”]/g,'"')
    .replace(/[’]/g,"'")
    .replace(/[–—]/g,'-');
}

function includesAny(hay, needles){
  const h = normalizeText(hay);
  return needles.some(n => h.includes(normalizeText(n)));
}

function setActiveModule(id){
  state.activeModuleId = id;
  save();
  render();
}

function markDone(moduleId, done=true){
  state.progress[moduleId] = done;
  save();
}

function calcProgress(){
  const total = MODULES.length;
  const done = MODULES.filter(m => state.progress[m.id]).length;
  return { done, total, pct: total ? Math.round((done/total)*100) : 0 };
}

function updateProgressUI(){
  const p = calcProgress();
  const bar = $('#progressBar');
  const txt = $('#progressText');
  if(bar) bar.style.width = `${p.pct}%`;
  if(txt) txt.textContent = `${p.done}/${p.total} Module erledigt (${p.pct}%)`;

  // Sidebar checkmarks
  $$('#navModules .navItem').forEach(btn => {
    const id = btn.dataset.id;
    if(!id) return;
    btn.classList.toggle('navItem--done', !!state.progress[id]);
    btn.classList.toggle('navItem--active', id === state.activeModuleId);
  });
}

// =========================
// Rendering
// =========================
function renderSidebar(){
  const nav = $('#navModules');
  nav.innerHTML = '';
  for(const m of MODULES){
    const b = document.createElement('button');
    b.className = 'navItem';
    b.type = 'button';
    b.dataset.id = m.id;
    b.innerHTML = `<span class="navItem__title">${m.title}</span><span class="navItem__meta">${m.id.toUpperCase()}</span>`;
    b.addEventListener('click', () => setActiveModule(m.id));
    nav.appendChild(b);
  }
  updateProgressUI();
}

function renderResources(){
  const external = $('#resExternal');
  const internal = $('#resInternal');

  external.innerHTML = '';
  for(const r of RESOURCES.external){
    const li = document.createElement('li');
    li.className = 'resItem';
    li.innerHTML = `
      <a class="resLink" href="${r.url}" target="_blank" rel="noopener">${escapeHtml(r.title)}</a>
      <div class="resNote">${escapeHtml(r.note || '')}</div>
    `;
    external.appendChild(li);
  }

  internal.innerHTML = '';
  for(const r of RESOURCES.internal){
    const li = document.createElement('li');
    li.className = 'resItem';
    li.innerHTML = `
      <a class="resLink" href="${r.path}" target="_blank" rel="noopener">${escapeHtml(r.title)}</a>
      <div class="resNote">${escapeHtml(r.cite || '')}</div>
    `;
    internal.appendChild(li);
  }
}

function renderRolePicker(){
  const grid = $('#roleGrid');
  grid.innerHTML = '';

  for(const r of ROLES){
    const card = document.createElement('div');
    card.className = 'roleCard';
    card.dataset.role = r.id;

    const active = state.roleId === r.id;
    if(active) card.classList.add('roleCard--active');

    card.innerHTML = `
      <div class="roleCard__head">
        <div class="roleCard__name">${escapeHtml(r.name)}</div>
        <div class="roleCard__tag">${escapeHtml(r.mode)}</div>
      </div>
      <div class="roleCard__section">
        <div class="label">Fokus</div>
        <ul class="bullets">${r.focus.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul>
      </div>
      <div class="roleCard__section">
        <div class="label">Spielauftrag / Constraints</div>
        <ul class="bullets">${r.constraints.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul>
      </div>
      <div class="roleCard__section">
        <div class="label">Einstiegszeile</div>
        <div class="quote">${escapeHtml(r.starterLine)}</div>
      </div>
      <div class="roleCard__section">
        <button class="btn" type="button">Diese Rolle wählen</button>
      </div>
    `;

    card.querySelector('button').addEventListener('click', () => {
      state.roleId = r.id;
      save();
      render();
    });

    grid.appendChild(card);
  }
}

function renderModuleContent(){
  const m = MODULES.find(x => x.id === state.activeModuleId) || MODULES[0];
  if(!m) return;

  $('#moduleTitle').textContent = m.title;
  $('#moduleGoals').innerHTML = (m.goals || []).map(g => `<li>${escapeHtml(g)}</li>`).join('');

  // Module-specific resources preview
  const resBox = $('#moduleResources');
  resBox.innerHTML = '';
  const res = [];
  if(m.resources?.external) res.push(...m.resources.external);
  if(m.resources?.internal) res.push(...m.resources.internal);
  for(const r of res){
    const isExternal = !!r.url;
    const a = document.createElement('a');
    a.className = 'chip';
    a.target = '_blank';
    a.rel = 'noopener';
    a.href = isExternal ? r.url : r.path;
    a.textContent = r.title;
    resBox.appendChild(a);
  }

  // Tasks
  const wrap = $('#moduleTasks');
  wrap.innerHTML = '';
  for(const t of (m.tasks || [])){
    wrap.appendChild(renderTask(m.id, t));
  }

  // Done toggle
  const doneBtn = $('#btnMarkDone');
  doneBtn.textContent = state.progress[m.id] ? 'Als NICHT erledigt markieren' : 'Als erledigt markieren';
  doneBtn.onclick = () => markDone(m.id, !state.progress[m.id]);
}

function renderTask(moduleId, task){
  const box = document.createElement('section');
  box.className = 'task';

  const header = document.createElement('div');
  header.className = 'task__head';
  header.innerHTML = `
    <div>
      <div class="task__title">${escapeHtml(task.title || 'Aufgabe')}</div>
      ${task.prompt ? `<div class="task__prompt">${escapeHtml(task.prompt).replace(/\n/g,'<br>')}</div>` : ''}
    </div>
  `;
  box.appendChild(header);

  const body = document.createElement('div');
  body.className = 'task__body';

  // Special types
  if(task.type === 'embed_video'){
    body.appendChild(renderVideoEmbed(task.url));
  }

  if(task.type === 'embed_article'){
    body.appendChild(renderArticleLink(task.url));
  }

  if(task.type === 'quiz'){
    body.appendChild(renderQuiz(moduleId, task));
  }

  if(task.type === 'role_select'){
    body.appendChild(renderRoleStatus());
    // role picker is global section in module 3; but we also show it here when needed
    if(moduleId === 'm3'){
      const hint = document.createElement('div');
      hint.className = 'callout';
      hint.innerHTML = `<div class="callout__title">Rollenwahl</div><div class="callout__text">Wähle unten im Rollenbereich eine Rolle. Deine Wahl wird gespeichert und in Exporten dokumentiert.</div>`;
      body.appendChild(hint);
    }
  }

  if(task.type === 'discussion_rounds'){
    body.appendChild(renderDiscussion(moduleId, task));
  }

  if(task.type === 'letter'){
    body.appendChild(renderFields(moduleId, task.fields || []));
  }

  if(task.type === 'writing'){
    body.appendChild(renderFields(moduleId, task.fields || []));
  }

  box.appendChild(body);
  return box;
}

function renderFields(moduleId, fields){
  const wrap = document.createElement('div');
  wrap.className = 'fields';

  for(const f of fields){
    const id = `${moduleId}__${f.id}`;
    const saved = state.answers[id] || '';

    const label = document.createElement('label');
    label.className = 'field';
    label.innerHTML = `
      <div class="field__label">${escapeHtml(f.label)}</div>
      <textarea class="textarea" rows="6" placeholder="${escapeHtml(f.placeholder || '')}"></textarea>
      <div class="field__meta">
        <span class="small">Autosave (localStorage). Export über „Export“ oben rechts.</span>
        <span class="small" id="${id}__count"></span>
      </div>
    `;

    const ta = label.querySelector('textarea');
    const count = label.querySelector(`#${cssEscape(id)}__count`);
    ta.value = saved;
    count.textContent = `${saved.length} Zeichen`;

    ta.addEventListener('input', () => {
      state.answers[id] = ta.value;
      state.answers[`${id}__updatedAt`] = nowISO();
      count.textContent = `${ta.value.length} Zeichen`;
      save();
    });

    wrap.appendChild(label);
  }

  return wrap;
}

function renderQuiz(moduleId, task){
  const wrap = document.createElement('div');
  wrap.className = 'quiz';

  for(const q of (task.questions || [])){
    const qKey = `${moduleId}__quiz__${q.id}`;
    const entry = state.quiz[qKey] || { attempts: 0, correct: false };

    const card = document.createElement('div');
    card.className = 'quizQ';

    const feedback = computeFeedback(entry, q);

    card.innerHTML = `
      <div class="quizQ__q">${escapeHtml(q.q)}</div>
      <div class="quizQ__source">Quelle(n): ${escapeHtml((q.source || '').toString())}</div>
      <div class="quizQ__row">
        <input class="input" type="text" placeholder="Deine Antwort (Stichwortsatz, quellenbasiert)" value="${escapeHtml(entry.lastAnswer || '')}" />
        <button class="btn" type="button">Prüfen</button>
      </div>
      <div class="quizQ__fb ${feedback.kind}">
        <div class="quizQ__fbTitle">${feedback.title}</div>
        <div class="quizQ__fbText">${feedback.text}</div>
      </div>
      <div class="quizQ__meta">Versuche: ${entry.attempts} · Status: ${entry.correct ? 'korrekt' : 'offen'}</div>
    `;

    const input = card.querySelector('input');
    const btn = card.querySelector('button');

    btn.addEventListener('click', () => {
      const ans = input.value || '';
      const isCorrect = checkAnswer(ans, q);

      const next = {
        attempts: (entry.attempts || 0) + 1,
        correct: isCorrect,
        lastAnswer: ans,
        updatedAt: nowISO()
      };
      state.quiz[qKey] = next;
      save();
      render();
    });

    wrap.appendChild(card);
  }

  return wrap;
}

function checkAnswer(answer, q){
  const a = normalizeText(answer);
  if(!a) return false;

  // Synonym-/Keyword-basiert (bewusst nicht zu eng: inhaltliche Anker müssen vorkommen)
  const must = q.accept?.must || [];
  const any = q.accept?.any || [];
  const forbid = q.accept?.forbid || [];

  const mustOk = must.every(m => a.includes(normalizeText(m)));
  const anyOk = any.length ? any.some(x => a.includes(normalizeText(x))) : true;
  const forbidHit = forbid.some(x => a.includes(normalizeText(x)));

  // Wenn Musterlösung längere Begründung verlangt, kann Lehrperson im Teacher-Mode manuell nachbewerten.
  return mustOk && anyOk && !forbidHit;
}

function computeFeedback(entry, q){
  if(entry.correct) return { kind:'ok', title:'Korrekt', text:'Deine Antwort trifft die geforderten inhaltlichen Anker. (Export speichert sie.)' };
  if((entry.attempts || 0) === 0) return { kind:'idle', title:'Noch nicht geprüft', text:'Formuliere quellenbasiert (kein Allgemeinplatz). Danach „Prüfen“.' };
  if((entry.attempts || 0) === 1) return { kind:'bad', title:'Noch nicht', text:'Erster Versuch: zu vage oder ohne die geforderten Anker. Ergänze konkrete Begriffe/Beobachtungen aus der Quelle.' };
  if((entry.attempts || 0) === 2) return { kind:'hint', title:'Hinweis', text: q.hint || 'Arbeite mit präzisen Begriffen aus der Quelle (nicht nur Wertungen).' };
  return { kind:'sol', title:'Musterlösung', text: q.solution || 'Siehe Quelle; formuliere mit mindestens 2 konkreten Ankern.' };
}

function renderVideoEmbed(url){
  const wrap = document.createElement('div');
  wrap.className = 'embed';

  // YouTube URL -> embed
  const id = (url.match(/v=([^&]+)/)?.[1]) || '';
  const src = id ? `https://www.youtube.com/embed/${id}` : url;

  wrap.innerHTML = `
    <div class="embed__meta">
      <div class="label">Video (externe Ressource – explizit verlinkt)</div>
      <a class="resLink" href="${url}" target="_blank" rel="noopener">${url}</a>
    </div>
    <div class="embed__frame">
      <iframe src="${src}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `;
  return wrap;
}

function renderArticleLink(url){
  const box = document.createElement('div');
  box.className = 'callout';
  box.innerHTML = `
    <div class="callout__title">Artikel (externe Ressource – explizit verlinkt)</div>
    <div class="callout__text">
      Öffne den Beitrag in einem neuen Tab und notiere beim Lesen mindestens 5 präzise Aussagen (keine Allgemeinplätze):
      <div style="margin-top:8px;"><a class="resLink" href="${url}" target="_blank" rel="noopener">${url}</a></div>
    </div>
  `;
  return box;
}

function renderRoleStatus(){
  const box = document.createElement('div');
  box.className = 'callout';
  const role = ROLES.find(r => r.id === state.roleId);

  box.innerHTML = `
    <div class="callout__title">Rollenstatus</div>
    <div class="callout__text">
      ${role ? `Aktive Rolle: <strong>${escapeHtml(role.name)}</strong>` : 'Noch keine Rolle gewählt.'}
      <div class="small" style="margin-top:8px;">Hinweis: Die Rollenwahl wird in Exporten protokolliert (Transparenz / Nachvollziehbarkeit).</div>
    </div>
  `;
  return box;
}

function renderDiscussion(moduleId, task){
  const wrap = document.createElement('div');
  wrap.className = 'discussion';

  const role = ROLES.find(r => r.id === state.roleId);

  const intro = document.createElement('div');
  intro.className = 'callout';
  intro.innerHTML = `
    <div class="callout__title">Ablauf</div>
    <div class="callout__text">${escapeHtml(task.intro || '').replace(/\n/g,'<br>')}</div>
  `;
  wrap.appendChild(intro);

  if(!role){
    const warn = document.createElement('div');
    warn.className = 'callout callout--warn';
    warn.innerHTML = `
      <div class="callout__title">Stopp: Rolle fehlt</div>
      <div class="callout__text">Wähle zuerst eine Rolle (Modul 3). Sonst fehlt die quellengebundene Perspektive.</div>
    `;
    wrap.appendChild(warn);
  }

  // Timer
  const timer = document.createElement('div');
  timer.className = 'timer';
  timer.innerHTML = `
    <div>
      <div class="label">Rundentimer (optional)</div>
      <div class="small">Empfehlung: 6–8 Min. pro Runde. Timer läuft lokal (kein Tracking).</div>
    </div>
    <div class="timer__controls">
      <input class="input input--sm" id="timerMinutes" type="number" min="1" max="30" value="8" />
      <button class="btn" type="button" id="timerStart">Start</button>
      <button class="btn btn--ghost" type="button" id="timerStop">Stop</button>
      <div class="timer__display" id="timerDisplay">08:00</div>
    </div>
  `;
  wrap.appendChild(timer);

  // Round fields
  const fields = [];
  for(const r of (task.rounds || [])){
    fields.push({ id: r.id, label: r.title + ' – Protokoll (stärkste Aussage / Widerspruch / Quelle / Kipppunkt)', placeholder: 'Notiere konkret: (a) Aussage, (b) Gegenrede, (c) Quelle, (d) was kippte im Raum.' });
  }
  wrap.appendChild(renderFields(moduleId, fields));

  // Evidence cards of chosen role for quick reference
  if(role){
    const e = document.createElement('div');
    e.className = 'evidence';
    e.innerHTML = `<div class="label">Evidence Cards deiner Rolle (quellengebundene Anker)</div>`;

    const grid = document.createElement('div');
    grid.className = 'evidenceGrid';
    for(const c of (role.evidenceCards || [])){
      const card = document.createElement('div');
      card.className = 'card card--soft';
      card.innerHTML = `
        <div class="card__title">${escapeHtml(c.title)}</div>
        <div class="small"><strong>Quellen:</strong> ${escapeHtml((c.sources || []).join(' · '))}</div>
        <div class="small" style="margin-top:8px;">${escapeHtml(c.claim)}</div>
      `;
      grid.appendChild(card);
    }
    e.appendChild(grid);
    wrap.appendChild(e);
  }

  // wire timer
  wireTimer();

  return wrap;
}

function render(){
  renderSidebar();
  renderResources();
  renderRolePicker();
  renderModuleContent();

  // Top quick status
  const role = ROLES.find(r => r.id === state.roleId);
  $('#roleQuick').textContent = role ? `Rolle: ${role.name}` : 'Rolle: (noch nicht gewählt)';

  updateProgressUI();
}

// =========================
// Teacher mode + Export
// =========================
function openTeacher(){
  const modal = $('#teacherModal');
  $('#teacherPassword').value = '';
  $('#teacherMsg').textContent = '';
  modal.showModal();
}

function closeTeacher(){
  const modal = $('#teacherModal');
  modal.close();
}

function enableTeacher(){
  const pw = ($('#teacherPassword').value || '').trim();
  const msg = $('#teacherMsg');
  if(pw !== TEACHER_PASSWORD){
    msg.textContent = 'Passwort falsch.';
    msg.className = 'msg msg--bad';
    return;
  }
  state.teacherMode = true;
  save();
  msg.textContent = 'Teacher-Mode aktiv.';
  msg.className = 'msg msg--ok';
  setTimeout(() => closeTeacher(), 500);
  render();
}

function disableTeacher(){
  state.teacherMode = false;
  save();
  render();
}

function openExport(){
  $('#exportModal').showModal();
}

function closeExport(){
  $('#exportModal').close();
}

function buildExportObject(){
  const role = ROLES.find(r => r.id === state.roleId);
  return {
    meta: {
      app: 'Berliner Salon 1840 – Digitale Lernlandschaft',
      version: '1.0.0',
      exportedAt: nowISO(),
      role: role ? role.name : null,
      teacherMode: !!state.teacherMode
    },
    progress: state.progress,
    answers: state.answers,
    quiz: state.quiz,
    resources: RESOURCES
  };
}

function downloadText(filename, text, mime='application/json'){
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 500);
}

async function exportPdf(){
  // jsPDF is loaded globally via CDN
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:'pt', format:'a4' });
  const data = buildExportObject();

  const margin = 40;
  const lineH = 14;
  const maxW = 515;
  let y = 50;

  function addTitle(t){
    doc.setFont('helvetica','bold');
    doc.setFontSize(14);
    doc.text(t, margin, y);
    y += 22;
    doc.setFont('helvetica','normal');
    doc.setFontSize(10);
  }

  function addText(t){
    doc.setFont('helvetica','normal');
    doc.setFontSize(10);
    const lines = doc.splitTextToSize(t, maxW);
    for(const ln of lines){
      if(y > 780){ doc.addPage(); y = 50; }
      doc.text(ln, margin, y);
      y += lineH;
    }
    y += 6;
  }

  addTitle('Berliner Salon 1840 – Export');
  addText(`Exportiert am: ${data.meta.exportedAt}`);
  addText(`Rolle: ${data.meta.role || '(keine gewählt)'}`);
  addText(`Teacher-Mode: ${data.meta.teacherMode ? 'ja' : 'nein'}`);

  addTitle('Fortschritt');
  for(const m of MODULES){
    const done = data.progress?.[m.id] ? 'erledigt' : 'offen';
    addText(`${m.id.toUpperCase()} – ${m.title}: ${done}`);
  }

  addTitle('Antworten');
  // sort keys to keep stable
  const keys = Object.keys(data.answers || {}).filter(k => !k.endsWith('__updatedAt')).sort();
  for(const k of keys){
    const v = (data.answers[k] || '').toString();
    const upd = data.answers[`${k}__updatedAt`] || '';
    addText(`Feld: ${k}`);
    if(upd) addText(`Zeit: ${upd}`);
    addText(v || '(leer)');
    addText('—');
  }

  addTitle('Quiz-Status');
  const qkeys = Object.keys(data.quiz || {}).sort();
  for(const k of qkeys){
    const q = data.quiz[k];
    addText(`${k}: ${q.correct ? 'korrekt' : 'offen'} · Versuche: ${q.attempts || 0} · letzte Antwort: ${q.lastAnswer || ''}`);
  }

  addTitle('Ressourcen (explizite Links)');
  for(const r of RESOURCES.external){
    addText(`${r.title} – ${r.url}`);
  }
  for(const r of RESOURCES.internal){
    addText(`${r.title} – ${location.origin ? location.origin + '/' : ''}${r.path}`);
  }

  doc.save('salon1840_export.pdf');
}

function exportJson(){
  const data = buildExportObject();
  downloadText('salon1840_export.json', JSON.stringify(data, null, 2), 'application/json');
}

// =========================
// Timer
// =========================
let timerHandle = null;
function wireTimer(){
  const start = $('#timerStart');
  const stop = $('#timerStop');
  const mins = $('#timerMinutes');
  const display = $('#timerDisplay');
  if(!start || !stop || !mins || !display) return;

  // Prevent double binding: replace handlers
  start.onclick = () => {
    const m = Math.max(1, Math.min(30, parseInt(mins.value || '8', 10)));
    let remaining = m * 60;
    display.textContent = formatTime(remaining);

    if(timerHandle) clearInterval(timerHandle);
    timerHandle = setInterval(() => {
      remaining -= 1;
      display.textContent = formatTime(remaining);
      if(remaining <= 0){
        clearInterval(timerHandle);
        timerHandle = null;
        // subtle flash
        display.classList.add('timer__display--done');
        setTimeout(()=>display.classList.remove('timer__display--done'), 1200);
      }
    }, 1000);
  };

  stop.onclick = () => {
    if(timerHandle) clearInterval(timerHandle);
    timerHandle = null;
    const m = Math.max(1, Math.min(30, parseInt(mins.value || '8', 10)));
    display.textContent = formatTime(m * 60);
  };

  // init display once
  const m0 = Math.max(1, Math.min(30, parseInt(mins.value || '8', 10)));
  display.textContent = formatTime(m0 * 60);
}

function formatTime(sec){
  const s = Math.max(0, sec);
  const mm = String(Math.floor(s/60)).padStart(2,'0');
  const ss = String(s%60).padStart(2,'0');
  return `${mm}:${ss}`;
}

// =========================
// Safety: escape HTML in injected content
// =========================
function escapeHtml(str){
  return (str ?? '').toString()
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#039;');
}

function cssEscape(id){
  // minimal escape for querySelector
  return id.replace(/[^a-zA-Z0-9_\-]/g, '\\$&');
}

// =========================
// Boot
// =========================
function wireGlobalButtons(){
  $('#btnTeacher').addEventListener('click', openTeacher);
  $('#teacherClose').addEventListener('click', closeTeacher);
  $('#teacherEnable').addEventListener('click', enableTeacher);
  $('#teacherDisable').addEventListener('click', disableTeacher);

  $('#btnExport').addEventListener('click', openExport);
  $('#exportClose').addEventListener('click', closeExport);
  $('#exportPdf').addEventListener('click', exportPdf);
  $('#exportJson').addEventListener('click', exportJson);

  $('#btnReset').addEventListener('click', () => {
    const ok = confirm('Fortschritt und alle Eingaben wirklich löschen? (Dieser Schritt kann nicht rückgängig gemacht werden.)');
    if(ok) hardReset();
  });
}

load();
wireGlobalButtons();
render();
