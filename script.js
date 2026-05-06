'use strict';

/* ================================================================
   DATA
   ================================================================
   STATUS values per target version:
     'supported'   → green checkmark
     'unsupported' → red warning triangle
     'eol'         → orange clock icon
   oneclick: true  → star icon shown alongside

   To add your own data, follow the same structure.
================================================================ */

const SOFTWARE_TYPES = [
  { value: 'nos',     label: 'AOS'           },
  { value: 'ahv',     label: 'AHV'           },
  { value: 'pc',      label: 'Prism Central'  },
  { value: 'ncc',     label: 'NCC'           },
  { value: 'files',   label: 'Files'         },
  { value: 'objects', label: 'Objects'       },
  { value: 'calm',    label: 'Calm'          },
];

/* ----------------------------------------------------------------
   UPGRADE DATA
   upgrades[product][currentVersion] = [
     { version, status, oneclick, releaseDate, releaseNotes, downloadLink, reason }
   ]
---------------------------------------------------------------- */
const UPGRADES = {
  nos: {
    '7.3.1.5': [
      {
        version: '7.5.1.1',
        status: 'supported',
        oneclick: false,
        releaseDate: 'Apr 7th 2026',
        releaseNotes: 'AOS 7.5.1.1',
        releaseNotesUrl: '#',
        downloadLink: 'AOS 7.5.1.1',
        downloadUrl: '#',
      },
      {
        version: '7.5.1',
        status: 'supported',
        oneclick: false,
        releaseDate: 'Mar 18th 2026',
        releaseNotes: 'AOS 7.5.1',
        releaseNotesUrl: '#',
        downloadLink: 'AOS 7.5.1',
        downloadUrl: '#',
      },
      {
        version: '7.5.0.6',
        status: 'supported',
        oneclick: true,
        releaseDate: 'Feb 28th 2026',
        releaseNotes: 'AOS 7.5.0.6',
        releaseNotesUrl: '#',
        downloadLink: 'AOS 7.5.0.6',
        downloadUrl: '#',
      },
      {
        version: '7.5.0.5',
        status: 'unsupported',
        oneclick: true,
        reason: 'Current version was released after the Target version was released.',
        alternateVersion: '7.5.1.1',
      },
      {
        version: '7.5',
        status: 'eol',
        oneclick: false,
        reason: 'Target release version 7.5 has reached End of Life.',
      },
      {
        version: '7.3.1.6',
        status: 'supported',
        oneclick: false,
        releaseDate: 'Jan 15th 2026',
        releaseNotes: 'AOS 7.3.1.6',
        releaseNotesUrl: '#',
        downloadLink: 'AOS 7.3.1.6',
        downloadUrl: '#',
      },
    ],
    '6.5.2': [
      {
        version: '6.7',
        status: 'supported',
        oneclick: true,
        releaseDate: 'Dec 10th 2024',
        releaseNotes: 'AOS 6.7',
        releaseNotesUrl: '#',
        downloadLink: 'AOS 6.7',
        downloadUrl: '#',
      },
      {
        version: '6.8',
        status: 'supported',
        oneclick: false,
        releaseDate: 'Feb 5th 2025',
        releaseNotes: 'AOS 6.8',
        releaseNotesUrl: '#',
        downloadLink: 'AOS 6.8',
        downloadUrl: '#',
      },
      {
        version: '6.5.3',
        status: 'supported',
        oneclick: true,
        releaseDate: 'Oct 2nd 2024',
        releaseNotes: 'AOS 6.5.3',
        releaseNotesUrl: '#',
        downloadLink: 'AOS 6.5.3',
        downloadUrl: '#',
      },
    ],
    '6.1.1.5': [
      {
        version: '6.5.2',
        status: 'supported',
        oneclick: true,
        releaseDate: 'May 12th 2024',
        releaseNotes: 'AOS 6.5.2',
        releaseNotesUrl: '#',
        downloadLink: 'AOS 6.5.2',
        downloadUrl: '#',
      },
      {
        version: '6.1.1.6',
        status: 'supported',
        oneclick: false,
        releaseDate: 'Mar 3rd 2024',
        releaseNotes: 'AOS 6.1.1.6',
        releaseNotesUrl: '#',
        downloadLink: 'AOS 6.1.1.6',
        downloadUrl: '#',
      },
      {
        version: '6.0',
        status: 'eol',
        reason: 'Target release version 6.0 has reached End of Life.',
      },
    ],
    '5.20.4': [
      {
        version: '6.1.1.5',
        status: 'supported',
        oneclick: true,
        releaseDate: 'Jan 20th 2024',
        releaseNotes: 'AOS 6.1.1.5',
        releaseNotesUrl: '#',
        downloadLink: 'AOS 6.1.1.5',
        downloadUrl: '#',
      },
      {
        version: '5.20.5',
        status: 'supported',
        oneclick: false,
        releaseDate: 'Nov 8th 2023',
        releaseNotes: 'AOS 5.20.5',
        releaseNotesUrl: '#',
        downloadLink: 'AOS 5.20.5',
        downloadUrl: '#',
      },
    ],
  },

  ahv: {
    '20220304.375': [
      {
        version: '20230302.101174',
        status: 'supported',
        oneclick: false,
        releaseDate: 'Jun 1st 2024',
        releaseNotes: 'AHV 20230302',
        releaseNotesUrl: '#',
        downloadLink: 'AHV 20230302',
        downloadUrl: '#',
      },
      {
        version: '20201105.2267',
        status: 'unsupported',
        reason: 'Downgrade is not supported.',
      },
    ],
    '20230302.101174': [
      {
        version: '20240304.10095',
        status: 'supported',
        oneclick: true,
        releaseDate: 'Sep 14th 2024',
        releaseNotes: 'AHV 20240304',
        releaseNotesUrl: '#',
        downloadLink: 'AHV 20240304',
        downloadUrl: '#',
      },
    ],
  },

  pc: {
    '2022.6': [
      {
        version: '2023.1',
        status: 'supported',
        oneclick: false,
        releaseDate: 'Jul 18th 2024',
        releaseNotes: 'PC 2023.1',
        releaseNotesUrl: '#',
        downloadLink: 'PC 2023.1',
        downloadUrl: '#',
      },
      {
        version: '2023.4',
        status: 'unsupported',
        reason: 'Direct upgrade from 2022.6 to 2023.4 is not supported. Please upgrade to 2023.1 first.',
        alternateVersion: '2023.1',
      },
    ],
    '2023.1': [
      {
        version: '2023.4',
        status: 'supported',
        oneclick: true,
        releaseDate: 'Nov 2nd 2024',
        releaseNotes: 'PC 2023.4',
        releaseNotesUrl: '#',
        downloadLink: 'PC 2023.4',
        downloadUrl: '#',
      },
    ],
  },

  ncc: {
    '4.4.0': [
      {
        version: '4.6.4',
        status: 'supported',
        oneclick: true,
        releaseDate: 'Aug 5th 2024',
        releaseNotes: 'NCC 4.6.4',
        releaseNotesUrl: '#',
        downloadLink: 'NCC 4.6.4',
        downloadUrl: '#',
      },
    ],
  },

  files: {
    '4.2': [
      {
        version: '4.4',
        status: 'supported',
        oneclick: true,
        releaseDate: 'Oct 10th 2024',
        releaseNotes: 'Files 4.4',
        releaseNotesUrl: '#',
        downloadLink: 'Files 4.4',
        downloadUrl: '#',
      },
    ],
  },

  objects: {
    '3.6': [
      {
        version: '4.0',
        status: 'supported',
        oneclick: false,
        releaseDate: 'Sep 22nd 2024',
        releaseNotes: 'Objects 4.0',
        releaseNotesUrl: '#',
        downloadLink: 'Objects 4.0',
        downloadUrl: '#',
      },
    ],
  },

  calm: {
    '3.8': [
      {
        version: '4.0',
        status: 'supported',
        oneclick: true,
        releaseDate: 'Jul 30th 2024',
        releaseNotes: 'Calm 4.0',
        releaseNotesUrl: '#',
        downloadLink: 'Calm 4.0',
        downloadUrl: '#',
      },
    ],
  },
};

/* Per-product static notes shown at bottom */
const PRODUCT_NOTES = {
  nos: [
    'If Prism Central is registered to the cluster, it must be upgraded before upgrading AOS. Please refer to the Software Compatibility page to determine the required Prism Central version.',
    'To view software compatibility, please visit <a href="#">here</a>.',
    'To view AOS EOL versions, please visit <a href="#">here</a>.',
    'See the <a href="#">Compatibility Matrix</a> for AOS version - Hypervisor support.',
    'Refer to <a href="#">KB 5505</a> for more information on Nutanix Cloud Infrastructure (NCI) releases.',
    'Upgrading from AOS 6.5.x with AHV versions below 20201105.x to AOS 6.10.x requires upgrading AHV to 20220304.x or later beforehand. Refer to <a href="#">KB-18147</a> for details.',
    'AOS 7.1 is exclusive for use with NCP with Dell PowerFlex solution. For more information refer to the <a href="#">NCP with Dell PowerFlex Release Notes</a>.',
    'To view upgrade paths for old AOS releases, please visit <a href="#">here</a>.',
  ],
  ahv: [
    'AHV upgrades are tied to the AOS version installed on the cluster.',
    'Verify hypervisor compatibility with AOS before proceeding.',
    'Refer to the <a href="#">Compatibility Matrix</a> for supported AHV–AOS combinations.',
  ],
  pc: [
    'Prism Central must be upgraded before upgrading AOS on registered clusters.',
    'Multi-VM Prism Central deployments may have different upgrade paths than single-VM deployments.',
  ],
  ncc: [
    'NCC can be upgraded independently from AOS.',
    'Always run a health check after upgrading NCC.',
  ],
  files: [
    'Files upgrades are non-disruptive; SMB and NFS shares remain accessible during upgrade.',
  ],
  objects: [
    'Back up all bucket data before a major Objects upgrade.',
  ],
  calm: [
    'Existing blueprints are preserved across Calm upgrades.',
  ],
};

/* ================================================================
   SVG ICONS (inline)
================================================================ */
const ICONS = {
  supported: `<svg viewBox="0 0 20 20" width="20" height="20">
    <circle cx="10" cy="10" r="9" fill="#2E7D32"/>
    <path d="M6 10.5l3 3 5-5" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  unsupported: `<svg viewBox="0 0 20 20" width="20" height="20">
    <circle cx="10" cy="10" r="9" fill="#fff" stroke="#D32F2F" stroke-width="1.5"/>
    <path d="M10 5.5v6" stroke="#D32F2F" stroke-width="2" stroke-linecap="round"/>
    <circle cx="10" cy="14" r="1" fill="#D32F2F"/>
  </svg>`,

  eol: `<svg viewBox="0 0 20 20" width="20" height="20">
    <circle cx="10" cy="10" r="9" fill="#fff" stroke="#F57C00" stroke-width="1.5"/>
    <path d="M10 5v5.5l3 2" stroke="#F57C00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`,

  oneclick: `<svg viewBox="0 0 20 20" width="16" height="16">
    <path d="M10 2.5l1.6 4.9H17l-4.2 3 1.6 4.9L10 12.3l-4.4 3.1 1.6-4.9L3 7.4h5.4z"
      fill="none" stroke="#9E9E9E" stroke-width="1.3" stroke-linejoin="round"/>
  </svg>`,

  supported_sm: `<svg viewBox="0 0 16 16" width="16" height="16">
    <circle cx="8" cy="8" r="7" fill="#2E7D32"/>
    <path d="M4.5 8.2l2.5 2.5 4.5-4.5" stroke="#fff" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  unsupported_sm: `<svg viewBox="0 0 16 16" width="16" height="16">
    <circle cx="8" cy="8" r="7" fill="#fff" stroke="#D32F2F" stroke-width="1.4"/>
    <path d="M8 4.5v4.5" stroke="#D32F2F" stroke-width="1.6" stroke-linecap="round"/>
    <circle cx="8" cy="11.5" r="0.9" fill="#D32F2F"/>
  </svg>`,

  eol_sm: `<svg viewBox="0 0 16 16" width="16" height="16">
    <circle cx="8" cy="8" r="7" fill="#fff" stroke="#F57C00" stroke-width="1.4"/>
    <path d="M8 4v4.5l2.5 1.5" stroke="#F57C00" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`,
};

/* ================================================================
   STATE
================================================================ */
const state = {
  product: 'nos',
  currVersion: '',
  tarVersion: '',
};

/* ================================================================
   DOM REFS
================================================================ */
const softwareTypeEl  = document.getElementById('softwareType');
const currVersionEl   = document.getElementById('currVersion');
const tarVersionEl    = document.getElementById('tarVersion');
const resetBtn        = document.getElementById('resetBtn');
const resultArea      = document.getElementById('resultArea');
const notesSection    = document.getElementById('notesSection');
const notesList       = document.getElementById('notesList');
const customDropdown  = document.getElementById('customDropdown');

/* ================================================================
   BOOT
================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  populateSoftwareTypes();
  onProductChange();

  softwareTypeEl.addEventListener('change', onProductChange);
  currVersionEl.addEventListener('change', onCurrVersionChange);
  tarVersionEl.addEventListener('change', onTarVersionChange);
  resetBtn.addEventListener('click', onReset);

  // Close custom dropdown when clicking outside
  document.addEventListener('click', e => {
    if (!e.target.closest('.filter-field')) {
      customDropdown.classList.remove('open');
    }
  });

  // Open custom dropdown on tarVersion select focus/click
  tarVersionEl.addEventListener('mousedown', e => {
    if (state.currVersion) {
      e.preventDefault();
      customDropdown.classList.toggle('open');
    }
  });
});

/* ================================================================
   POPULATE SOFTWARE TYPES
================================================================ */
function populateSoftwareTypes() {
  softwareTypeEl.innerHTML = '';
  SOFTWARE_TYPES.forEach(({ value, label }) => {
    const opt = document.createElement('option');
    opt.value = value;
    opt.textContent = label;
    softwareTypeEl.appendChild(opt);
  });
  softwareTypeEl.value = state.product;
}

/* ================================================================
   ON PRODUCT CHANGE
================================================================ */
function onProductChange() {
  state.product = softwareTypeEl.value;
  state.currVersion = '';
  state.tarVersion = '';

  // Populate current versions
  currVersionEl.innerHTML = '<option value="">Select version</option>';
  const versions = Object.keys(UPGRADES[state.product] || {}).sort(semverCompare).reverse();
  versions.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v;
    opt.textContent = v;
    currVersionEl.appendChild(opt);
  });

  tarVersionEl.innerHTML = '<option value="">Select version</option>';
  customDropdown.innerHTML = '';
  customDropdown.classList.remove('open');

  clearResults();
  renderNotes();
}

/* ================================================================
   ON CURRENT VERSION CHANGE
================================================================ */
function onCurrVersionChange() {
  state.currVersion = currVersionEl.value;
  state.tarVersion = '';
  tarVersionEl.innerHTML = '<option value="">Select version</option>';
  customDropdown.innerHTML = '';
  customDropdown.classList.remove('open');

  if (!state.currVersion) { clearResults(); return; }

  const paths = getPaths();

  // Populate native select
  paths.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.version;
    opt.textContent = p.version;
    tarVersionEl.appendChild(opt);
  });

  // Build custom dropdown
  buildCustomDropdown(paths);

  // Show all results (no target selected = show all)
  renderResults(paths);
  renderNotes();
}

/* ================================================================
   ON TARGET VERSION CHANGE (from native select, fallback)
================================================================ */
function onTarVersionChange() {
  state.tarVersion = tarVersionEl.value;
  if (!state.tarVersion) {
    renderResults(getPaths());
  } else {
    const paths = getPaths();
    const single = paths.filter(p => p.version === state.tarVersion);
    renderResults(single);
  }
}

/* ================================================================
   BUILD CUSTOM DROPDOWN
================================================================ */
function buildCustomDropdown(paths) {
  customDropdown.innerHTML = '';

  paths.forEach(p => {
    const div = document.createElement('div');
    div.className = 'dd-option';
    if (p.status === 'unsupported') div.classList.add('unsupported');
    if (p.status === 'eol') div.classList.add('eol');

    const iconHtml = (() => {
      if (p.status === 'supported')   return ICONS.supported_sm;
      if (p.status === 'unsupported') return ICONS.unsupported_sm;
      if (p.status === 'eol')         return ICONS.eol_sm;
      return '';
    })();

    const oneclickHtml = p.oneclick ? ICONS.oneclick : '';

    div.innerHTML = `
      <span class="dd-label">${esc(p.version)}</span>
      <span class="dd-icons">${iconHtml}${oneclickHtml}</span>
    `;

    div.addEventListener('click', () => {
      state.tarVersion = p.version;
      tarVersionEl.value = p.version;
      customDropdown.classList.remove('open');

      // Mark selected
      customDropdown.querySelectorAll('.dd-option').forEach(el => el.classList.remove('selected'));
      div.classList.add('selected');

      renderResults([p]);
    });

    customDropdown.appendChild(div);
  });
}

/* ================================================================
   RENDER RESULTS
================================================================ */
function renderResults(paths) {
  resultArea.innerHTML = '';

  if (!paths || paths.length === 0) {
    resultArea.innerHTML = '<div class="empty-state">No upgrade paths found for this selection.</div>';
    return;
  }

  paths.forEach(p => {
    const card = document.createElement('div');
    card.className = `result-card card-${p.status}`;

    const iconHtml = ICONS[p.status] || '';

    let bodyHtml = '';

    if (p.status === 'supported') {
      bodyHtml = `
        <div class="card-title">Target release version ${esc(p.version)} is supported.</div>
        ${p.releaseDate    ? `<div class="card-detail">Release Date: ${esc(p.releaseDate)}</div>` : ''}
        ${p.releaseNotes   ? `<div class="card-detail">Release Notes: <a href="${esc(p.releaseNotesUrl || '#')}">${esc(p.releaseNotes)}</a></div>` : ''}
        ${p.downloadLink   ? `<div class="card-detail">Download Image : <a href="${esc(p.downloadUrl || '#')}">${esc(p.downloadLink)}</a></div>` : ''}
      `;
    } else if (p.status === 'unsupported') {
      const altHtml = p.alternateVersion
        ? `<div class="card-detail" style="margin-top:8px;">
            <span style="color:#2E7D32;font-weight:600;">✓ Alternate release version ${esc(p.alternateVersion)} is supported.</span>
           </div>`
        : '';
      bodyHtml = `
        <div class="card-title">Target release version ${esc(p.version)} is not supported</div>
        <div class="card-detail">${esc(p.reason || 'Upgrade to this version is not supported.')}</div>
        ${altHtml}
      `;
    } else if (p.status === 'eol') {
      bodyHtml = `
        <div class="card-title">Target release version ${esc(p.version)} is not supported</div>
        <div class="card-detail">${esc(p.reason || 'Target Release is End of Life.')}</div>
      `;
    }

    card.innerHTML = `
      <div class="card-icon">${iconHtml}</div>
      <div class="card-body">${bodyHtml}</div>
    `;
    resultArea.appendChild(card);
  });

  // If the selected target is unsupported and has an alternate, show an extra
  // green "alternate supported" card (matching portal behaviour)
  paths.forEach(p => {
    if (p.status === 'unsupported' && p.alternateVersion) {
      const altPath = getPaths().find(x => x.version === p.alternateVersion);
      if (altPath && altPath.status === 'supported') {
        const altCard = buildAltCard(altPath);
        resultArea.appendChild(altCard);
      }
    }
  });
}

function buildAltCard(p) {
  const card = document.createElement('div');
  card.className = 'result-card card-supported';
  card.innerHTML = `
    <div class="card-icon">${ICONS.supported}</div>
    <div class="card-body">
      <div class="card-title">Alternate release version ${esc(p.version)} is supported.</div>
      ${p.releaseDate  ? `<div class="card-detail">Release Date: ${esc(p.releaseDate)}</div>` : ''}
      ${p.releaseNotes ? `<div class="card-detail">Release Notes: <a href="${esc(p.releaseNotesUrl||'#')}">${esc(p.releaseNotes)}</a></div>` : ''}
      ${p.downloadLink ? `<div class="card-detail">Download Image : <a href="${esc(p.downloadUrl||'#')}">${esc(p.downloadLink)}</a></div>` : ''}
    </div>
  `;
  return card;
}

/* ================================================================
   RENDER NOTES
================================================================ */
function renderNotes() {
  const notes = PRODUCT_NOTES[state.product] || [];
  if (!notes.length) { notesSection.style.display = 'none'; return; }

  notesList.innerHTML = '';
  notes.forEach(note => {
    const li = document.createElement('li');
    li.innerHTML = note; // note may contain HTML links
    notesList.appendChild(li);
  });
  notesSection.style.display = 'block';
}

/* ================================================================
   CLEAR
================================================================ */
function clearResults() {
  resultArea.innerHTML = '';
  notesSection.style.display = 'none';
}

/* ================================================================
   RESET
================================================================ */
function onReset() {
  softwareTypeEl.value = 'nos';
  state.product = 'nos';
  state.currVersion = '';
  state.tarVersion = '';
  onProductChange();
}

/* ================================================================
   HELPERS
================================================================ */
function getPaths() {
  return (UPGRADES[state.product] || {})[state.currVersion] || [];
}

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Semver-aware compare: returns negative/0/positive */
function semverCompare(a, b) {
  const pa = String(a).split('.').map(n => parseInt(n) || 0);
  const pb = String(b).split('.').map(n => parseInt(n) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const diff = (pa[i] || 0) - (pb[i] || 0);
    if (diff !== 0) return diff;
  }
  return 0;
}