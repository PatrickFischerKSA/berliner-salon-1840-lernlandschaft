
/* ==========================================================
   app.js – KOMPATIBLE NEUFASSUNG (OPTION 1)
   Ziel:
   - passt EXAKT zur gelieferten index.html
   - nutzt window.MODULES / window.ROLES / window.RESOURCES
   - KEIN ES-MODULE
   - KEINE externen Abhängigkeiten
   ========================================================== */

(function () {
  "use strict";

  /* ------------------ Guards ------------------ */
  if (!window.MODULES || !Array.isArray(window.MODULES)) {
    console.error("MODULES nicht gefunden oder kein Array.");
    return;
  }

  /* ------------------ DOM ------------------ */
  const nav = document.getElementById("modulesNav");
  const content = document.getElementById("moduleContent");
  const progressEl = document.getElementById("progressValue");
  const externalLinksEl = document.getElementById("externalLinks");
  const repoPdfsEl = document.getElementById("repoPdfs");

  if (!nav || !content) {
    console.error("Zentrale DOM-Elemente fehlen (modulesNav / moduleContent).");
    return;
  }

  /* ------------------ State ------------------ */
  let currentModuleIndex = 0;

  /* ------------------ Init ------------------ */
  renderResources();
  renderModuleNav();
  renderModule(0);
  updateProgress();

  /* ------------------ Rendering ------------------ */

  function renderResources() {
    if (window.RESOURCES?.external && externalLinksEl) {
      externalLinksEl.innerHTML = "";
      window.RESOURCES.external.forEach(r => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${r.url}" target="_blank" rel="noopener">${r.label}</a>`;
        externalLinksEl.appendChild(li);
      });
    }

    if (window.RESOURCES?.pdfs && repoPdfsEl) {
      repoPdfsEl.innerHTML = "";
      window.RESOURCES.pdfs.forEach(p => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${p.path}" target="_blank">${p.label}</a>`;
        repoPdfsEl.appendChild(li);
      });
    }
  }

  function renderModuleNav() {
    nav.innerHTML = "";
    window.MODULES.forEach((m, i) => {
      const btn = document.createElement("button");
      btn.className = "module-btn";
      btn.textContent = m.title;
      btn.onclick = () => renderModule(i);
      nav.appendChild(btn);
    });
  }

  function renderModule(index) {
    currentModuleIndex = index;
    const m = window.MODULES[index];
    content.innerHTML = "";

    const h2 = document.createElement("h2");
    h2.textContent = m.title;
    content.appendChild(h2);

    if (m.description) {
      const p = document.createElement("p");
      p.textContent = m.description;
      content.appendChild(p);
    }

    if (Array.isArray(m.blocks)) {
      m.blocks.forEach(block => renderBlock(block));
    }

    updateProgress();
  }

  function renderBlock(block) {
    const section = document.createElement("section");
    section.className = "block";

    if (block.heading) {
      const h3 = document.createElement("h3");
      h3.textContent = block.heading;
      section.appendChild(h3);
    }

    if (block.text) {
      const p = document.createElement("p");
      p.textContent = block.text;
      section.appendChild(p);
    }

    if (block.prompt) {
      const label = document.createElement("label");
      label.textContent = block.prompt;
      const textarea = document.createElement("textarea");
      textarea.rows = 4;
      section.appendChild(label);
      section.appendChild(textarea);
    }

    content.appendChild(section);
  }

  function updateProgress() {
    if (!progressEl) return;
    const percent = Math.round(((currentModuleIndex + 1) / window.MODULES.length) * 100);
    progressEl.textContent = percent + "%";
  }

})();
