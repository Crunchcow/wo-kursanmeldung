// Block 1: nur Grundgerüst, keine echte API-Verbindung.
// In Block 3 verbinden wir das Formular mit Power Automate (HTTP-Trigger).

(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('signup-form');
  const feedback = document.getElementById('feedback');

  function showAlert(kind, msg){
    const div = document.createElement('div');
    div.className = `alert alert--${kind}`;
    div.textContent = msg;
    feedback.innerHTML = '';
    feedback.appendChild(div);
  }

  if (form){
    form.addEventListener('submit', function(ev){
      ev.preventDefault();

      // Clientseitige Minimalprüfung
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const kursId = form.kursId.value.trim();
      const privacy = form.privacy.checked;

      if (!name || !email || !privacy){
        showAlert('warn', 'Bitte fülle alle Pflichtfelder aus und akzeptiere die Datenschutzhinweise.');
        return;
      }

      // Demo-Modus (Block 1)
      showAlert('info', 'Demo-Modus: Das Formular ist bereit. In Block 3 verbinden wir es mit dem Backend.');
    });
  }
})();
