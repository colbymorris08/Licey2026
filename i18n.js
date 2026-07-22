/* Shared EN / ES strings + applyI18n */
window.I18N = {
  en: {
    navStats: 'Stats',
    navFA: 'Free Agent Pool',
    navPregame: 'Pregame Analytics',
    brandSub: 'Analytics · LIDOM / MLB / MiLB',
    brandSubFA: 'Analytics · Free Agent Pool',
    brandSubPregame: 'Analytics · Pregame',
    tagline: 'Licey Advance Scouting creado por Colby Morris',
    heroStats: 'Tigres del Licey Player Stats',
    heroFA: 'Free Agent Pool',
    heroPregame: 'Pregame Analytics',
    heroFASub: 'MiLB 2026 · AA & AAA · DR / Venezuela born excluded · Stuff+',
    heroPregameSub: 'Advance reports · Licey hitters / pitchers · opposing LIDOM · Prospect Savant + Statcast',
    btnStats: 'Player Stats',
    btnRosters: 'LIDOM Rosters',
    hitting: 'Hitting',
    pitching: 'Pitching',
    lidomTeam: 'LIDOM Team',
    year: 'Year',
    level: 'Level',
    positions: 'Positions',
    timeRange: 'Time Range',
    allTeams: 'All Teams',
    allPositions: 'All Positions',
    reset: 'Reset Filters',
    standard: 'Standard',
    expanded: 'Expanded',
    stuffPlus: 'Stuff+',
    search: 'Search',
    pitchers: 'Pitchers',
    hitters: 'Hitters',
    rosterBanner: 'LIDOM 2025 full rosters (stand-in until 2026 winter ball). Team filter syncs with Player Stats.',
    lineupTab: 'Lineup Spot Success',
    matchupTab: 'Pitcher vs Batter',
    brTab: 'Baserunning & Bunting',
    stuffTab: 'Opposing Stuff',
    sprayTab: 'Spray Charts',
    ideasTab: 'Other Ideas',
    langEn: 'English',
    langEs: 'Español',
    player: 'Player',
    team: 'Team',
    season: 'Season',
    minPA: 'Min PA',
    split: 'Split',
  },
  es: {
    navStats: 'Estadísticas',
    navFA: 'Agentes Libres',
    navPregame: 'Analítica Pregame',
    brandSub: 'Analítica · LIDOM / MLB / MiLB',
    brandSubFA: 'Analítica · Agentes Libres',
    brandSubPregame: 'Analítica · Pregame',
    tagline: 'Licey Advance Scouting creado por Colby Morris',
    heroStats: 'Estadísticas de Jugadores — Tigres del Licey',
    heroFA: 'Agentes Libres',
    heroPregame: 'Analítica Pregame',
    heroFASub: 'MiLB 2026 · AA y AAA · excluye nacidos en RD / Venezuela · Stuff+',
    heroPregameSub: 'Reportes de avance · bateadores / pitchers Licey · LIDOM rival · Prospect Savant + Statcast',
    btnStats: 'Estadísticas',
    btnRosters: 'Rosters LIDOM',
    hitting: 'Bateo',
    pitching: 'Pitcheo',
    lidomTeam: 'Equipo LIDOM',
    year: 'Año',
    level: 'Nivel',
    positions: 'Posiciones',
    timeRange: 'Rango de tiempo',
    allTeams: 'Todos los equipos',
    allPositions: 'Todas las posiciones',
    reset: 'Restablecer filtros',
    standard: 'Estándar',
    expanded: 'Expandido',
    stuffPlus: 'Stuff+',
    search: 'Buscar',
    pitchers: 'Pitchers',
    hitters: 'Bateadores',
    rosterBanner: 'Rosters LIDOM 2025 (provisional hasta la temporada 2026). El filtro de equipo se sincroniza con Estadísticas.',
    lineupTab: 'Éxito por turno en la alineación',
    matchupTab: 'Pitcher vs Bateador',
    brTab: 'Corrido y toques',
    stuffTab: 'Stuff rival',
    sprayTab: 'Spray charts',
    ideasTab: 'Otras ideas',
    langEn: 'English',
    langEs: 'Español',
    player: 'Jugador',
    team: 'Equipo',
    season: 'Temporada',
    minPA: 'Mín. PA',
    split: 'Split',
  },
};

window.getLang = function getLang() {
  return localStorage.getItem('licey_lang') === 'es' ? 'es' : 'en';
};

window.setLang = function setLang(lang) {
  localStorage.setItem('licey_lang', lang === 'es' ? 'es' : 'en');
  window.applyI18n();
  document.dispatchEvent(new CustomEvent('licey:lang', { detail: { lang: window.getLang() } }));
};

window.t = function t(key) {
  const lang = window.getLang();
  return (window.I18N[lang] && window.I18N[lang][key]) || window.I18N.en[key] || key;
};

window.applyI18n = function applyI18n() {
  const lang = window.getLang();
  document.documentElement.lang = lang === 'es' ? 'es' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = window.t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    el.innerHTML = window.t(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('.lang-toggle button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
};

document.addEventListener('DOMContentLoaded', () => window.applyI18n());
