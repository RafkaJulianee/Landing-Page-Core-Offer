/**
 * KosinAja Core Offer - Landing Page Script
 * WhatsApp Admin: 085871444639
 */

function switchRole(role) {
    const btnAdmin = document.getElementById('btnRoleAdmin');
    const btnPenghuni = document.getElementById('btnRolePenghuni');
    const btnSuper = document.getElementById('btnRoleSuper');

    const panelAdmin = document.getElementById('panelRoleAdmin');
    const panelPenghuni = document.getElementById('panelRolePenghuni');
    const panelSuper = document.getElementById('panelRoleSuper');

    const inactiveClass = 'px-5 py-2.5 rounded-xl border-2 border-neutral-900 bg-white text-neutral-900 font-bold text-sm hover:bg-neutral-50 transition-all';
    const activeClass = 'px-5 py-2.5 rounded-xl border-2 border-neutral-900 bg-neutral-900 text-white font-bold text-sm shadow-neo transition-all';

    if (btnAdmin && btnPenghuni && btnSuper) {
        btnAdmin.className = inactiveClass;
        btnPenghuni.className = inactiveClass;
        btnSuper.className = inactiveClass;
    }

    if (panelAdmin && panelPenghuni && panelSuper) {
        panelAdmin.classList.add('hidden');
        panelPenghuni.classList.add('hidden');
        panelSuper.classList.add('hidden');

        if (role === 'admin') {
            btnAdmin.className = activeClass;
            panelAdmin.classList.remove('hidden');
        } else if (role === 'penghuni') {
            btnPenghuni.className = activeClass;
            panelPenghuni.classList.remove('hidden');
        } else if (role === 'super') {
            btnSuper.className = activeClass;
            panelSuper.classList.remove('hidden');
        }
    }
}
