/* ============================================================
   LE TOP NOTCH — cookie-consent.js
   Elegant GDPR/PIPEDA cookie consent with preferences
   Include this script on every page BEFORE </body>
   ============================================================ */

(function () {
  'use strict';

  const COOKIE_KEY = 'ltn_cookie_consent';
  const COOKIE_PREFS_KEY = 'ltn_cookie_prefs';

  // ── Check if already consented ──────────────────────────────
  function hasConsented() {
    try { return !!localStorage.getItem(COOKIE_KEY); } catch { return false; }
  }

  function getPrefs() {
    try {
      const raw = localStorage.getItem(COOKIE_PREFS_KEY);
      return raw ? JSON.parse(raw) : { essential: true, analytics: false, marketing: false };
    } catch { return { essential: true, analytics: false, marketing: false }; }
  }

  function saveConsent(prefs) {
    try {
      localStorage.setItem(COOKIE_KEY, '1');
      localStorage.setItem(COOKIE_PREFS_KEY, JSON.stringify(prefs));
    } catch {}
  }

  // ── Inject styles ────────────────────────────────────────────
  function injectStyles() {
    const css = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

    /* ── BANNER ── */
    #ltn-cookie-banner {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      z-index: 9999;
      background: #f7f4ef;
      border-top: 1px solid #e7e0d7;
      box-shadow: 0 -8px 32px rgba(0,0,0,.08);
      transform: translateY(100%);
      transition: transform .42s cubic-bezier(.22,.61,.36,1);
      font-family: "Helvetica Neue", Arial, sans-serif;
    }
    #ltn-cookie-banner.ltn-cb-visible { transform: translateY(0); }

    .ltn-cb-inner {
      max-width: 1400px;
      margin: 0 auto;
      padding: 22px 32px;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: 24px;
    }

    .ltn-cb-text h4 {
      font-family: "Cormorant Garamond", Georgia, serif;
      font-size: 17px;
      font-weight: 500;
      margin-bottom: 4px;
      letter-spacing: -.01em;
    }
    .ltn-cb-text p {
      font-size: 11px;
      color: #6e675f;
      line-height: 1.7;
      max-width: 68ch;
    }
    .ltn-cb-text a {
      color: #6e675f;
      text-decoration: underline;
      text-underline-offset: 2px;
    }

    .ltn-cb-actions {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
    }

    .ltn-cb-btn {
      height: 38px;
      padding: 0 20px;
      font-size: 9px;
      text-transform: uppercase;
      letter-spacing: .14em;
      cursor: pointer;
      border: none;
      font-family: inherit;
      white-space: nowrap;
      transition: opacity .2s, background .2s;
    }
    .ltn-cb-btn:hover { opacity: .8; }
    .ltn-cb-btn-accept { background: #171717; color: #fff; }
    .ltn-cb-btn-prefs  { background: transparent; color: #6e675f; border: 1px solid #e7e0d7; }
    .ltn-cb-btn-reject { background: transparent; color: #6e675f; font-size: 8px; letter-spacing: .10em; }

    /* ── MODAL OVERLAY ── */
    #ltn-cookie-modal {
      position: fixed;
      inset: 0;
      z-index: 10000;
      background: rgba(0,0,0,.44);
      display: none;
      align-items: flex-end;
      justify-content: center;
      padding: 0;
    }
    #ltn-cookie-modal.ltn-cm-open { display: flex; }

    .ltn-cm-box {
      background: #f7f4ef;
      width: 100%;
      max-width: 640px;
      max-height: 92vh;
      overflow-y: auto;
      border-top: 1px solid #e7e0d7;
      padding: 40px 36px 32px;
      position: relative;
      animation: ltnSlideUp .36s cubic-bezier(.22,.61,.36,1);
    }
    @keyframes ltnSlideUp {
      from { transform: translateY(60px); opacity: 0; }
      to   { transform: translateY(0);   opacity: 1; }
    }

    .ltn-cm-close {
      position: absolute;
      top: 18px; right: 20px;
      font-size: 22px;
      color: #6e675f;
      cursor: pointer;
      background: none;
      border: none;
      line-height: 1;
      font-family: inherit;
    }

    .ltn-cm-title {
      font-family: "Cormorant Garamond", Georgia, serif;
      font-size: 28px;
      font-weight: 500;
      margin-bottom: 6px;
      letter-spacing: -.01em;
    }
    .ltn-cm-sub {
      font-size: 12px;
      color: #6e675f;
      line-height: 1.75;
      margin-bottom: 28px;
    }

    /* ── COOKIE CATEGORIES ── */
    .ltn-cm-cats { display: flex; flex-direction: column; gap: 0; margin-bottom: 28px; }

    .ltn-cm-cat {
      border-top: 1px solid #e7e0d7;
      padding: 20px 0;
    }
    .ltn-cm-cat:last-child { border-bottom: 1px solid #e7e0d7; }

    .ltn-cm-cat-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 8px;
    }

    .ltn-cm-cat-name {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .14em;
    }
    .ltn-cm-cat-desc {
      font-size: 12px;
      color: #6e675f;
      line-height: 1.7;
      max-width: 46ch;
    }

    /* Toggle switch */
    .ltn-toggle {
      position: relative;
      width: 44px;
      height: 24px;
      flex-shrink: 0;
    }
    .ltn-toggle input { opacity: 0; width: 0; height: 0; position: absolute; }
    .ltn-toggle-slider {
      position: absolute;
      inset: 0;
      background: #d9d1c8;
      border-radius: 24px;
      cursor: pointer;
      transition: background .2s;
    }
    .ltn-toggle-slider::before {
      content: "";
      position: absolute;
      width: 18px; height: 18px;
      left: 3px; top: 3px;
      background: #fff;
      border-radius: 50%;
      transition: transform .2s;
      box-shadow: 0 1px 4px rgba(0,0,0,.18);
    }
    .ltn-toggle input:checked + .ltn-toggle-slider { background: #171717; }
    .ltn-toggle input:checked + .ltn-toggle-slider::before { transform: translateX(20px); }
    .ltn-toggle input:disabled + .ltn-toggle-slider { opacity: .5; cursor: not-allowed; }

    /* ── MODAL ACTIONS ── */
    .ltn-cm-actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .ltn-cm-btn {
      width: 100%;
      min-height: 46px;
      font-size: 9px;
      text-transform: uppercase;
      letter-spacing: .16em;
      cursor: pointer;
      border: none;
      font-family: inherit;
      transition: opacity .2s;
    }
    .ltn-cm-btn:hover { opacity: .8; }
    .ltn-cm-btn-accept-all { background: #171717; color: #fff; }
    .ltn-cm-btn-save       { background: transparent; border: 1px solid #171717; color: #171717; }
    .ltn-cm-btn-reject-all {
      background: transparent;
      border: none;
      color: #9a9186;
      font-size: 8px;
      letter-spacing: .10em;
      min-height: 32px;
      text-decoration: underline;
      text-underline-offset: 2px;
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 760px) {
      .ltn-cb-inner {
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 20px 20px 16px;
      }
      .ltn-cb-actions {
        flex-wrap: wrap;
        gap: 8px;
      }
      .ltn-cm-box {
        padding: 32px 20px 24px;
        max-height: 96vh;
      }
    }
    `;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }

  // ── Build HTML ───────────────────────────────────────────────
  function buildBanner() {
    const banner = document.createElement('div');
    banner.id = 'ltn-cookie-banner';
    banner.innerHTML = `
      <div class="ltn-cb-inner">
        <div class="ltn-cb-text">
          <h4>Your privacy, your choice.</h4>
          <p>We use cookies to enhance your experience, analyse site traffic, and personalise content. You can manage your preferences or accept all cookies below.
            <a href="/about.html#privacy">Learn more</a></p>
        </div>
        <div class="ltn-cb-actions">
          <button class="ltn-cb-btn ltn-cb-btn-reject" id="ltnCbReject">Essential only</button>
          <button class="ltn-cb-btn ltn-cb-btn-prefs"  id="ltnCbPrefs">Manage preferences</button>
          <button class="ltn-cb-btn ltn-cb-btn-accept" id="ltnCbAccept">Accept all</button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);
    return banner;
  }

  function buildModal() {
    const prefs = getPrefs();
    const modal = document.createElement('div');
    modal.id = 'ltn-cookie-modal';
    modal.innerHTML = `
      <div class="ltn-cm-box">
        <button class="ltn-cm-close" id="ltnCmClose">&times;</button>
        <div class="ltn-cm-title">Cookie Preferences</div>
        <p class="ltn-cm-sub">
          We use cookies to give you the best experience on our website. Choose which cookies you would like to allow. You can change these settings at any time.
        </p>

        <div class="ltn-cm-cats">

          <div class="ltn-cm-cat">
            <div class="ltn-cm-cat-head">
              <span class="ltn-cm-cat-name">Essential Cookies</span>
              <label class="ltn-toggle">
                <input type="checkbox" id="ltnPrefEssential" checked disabled>
                <span class="ltn-toggle-slider"></span>
              </label>
            </div>
            <p class="ltn-cm-cat-desc">Required for the website to function — shopping cart, security, and session management. These cannot be disabled.</p>
          </div>

          <div class="ltn-cm-cat">
            <div class="ltn-cm-cat-head">
              <span class="ltn-cm-cat-name">Analytics Cookies</span>
              <label class="ltn-toggle">
                <input type="checkbox" id="ltnPrefAnalytics" ${prefs.analytics ? 'checked' : ''}>
                <span class="ltn-toggle-slider"></span>
              </label>
            </div>
            <p class="ltn-cm-cat-desc">Help us understand how visitors use our site so we can improve the experience. All data is anonymous and aggregated.</p>
          </div>

          <div class="ltn-cm-cat">
            <div class="ltn-cm-cat-head">
              <span class="ltn-cm-cat-name">Marketing Cookies</span>
              <label class="ltn-toggle">
                <input type="checkbox" id="ltnPrefMarketing" ${prefs.marketing ? 'checked' : ''}>
                <span class="ltn-toggle-slider"></span>
              </label>
            </div>
            <p class="ltn-cm-cat-desc">Allow us to personalise content and ads based on your interests, and to share your browsing activity with our advertising partners.</p>
          </div>

        </div>

        <div class="ltn-cm-actions">
          <button class="ltn-cm-btn ltn-cm-btn-accept-all" id="ltnCmAcceptAll">Accept All Cookies</button>
          <button class="ltn-cm-btn ltn-cm-btn-save"       id="ltnCmSave">Save My Preferences</button>
          <button class="ltn-cm-btn ltn-cm-btn-reject-all" id="ltnCmRejectAll">Essential cookies only</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    return modal;
  }

  // ── Hide/show helpers ────────────────────────────────────────
  function hideBanner(banner) {
    banner.classList.remove('ltn-cb-visible');
    setTimeout(() => banner.remove(), 500);
  }
  function hideModal(modal) {
    modal.classList.remove('ltn-cm-open');
  }
  function showModal(modal) {
    modal.classList.add('ltn-cm-open');
  }

  // ── Wire events ──────────────────────────────────────────────
  function init() {
    if (hasConsented()) return;

    injectStyles();
    const banner = buildBanner();
    const modal  = buildModal();

    // Show banner after short delay
    requestAnimationFrame(() => {
      setTimeout(() => banner.classList.add('ltn-cb-visible'), 600);
    });

    // Accept all
    document.getElementById('ltnCbAccept').onclick = () => {
      saveConsent({ essential: true, analytics: true, marketing: true });
      hideBanner(banner);
    };

    // Essential only (banner)
    document.getElementById('ltnCbReject').onclick = () => {
      saveConsent({ essential: true, analytics: false, marketing: false });
      hideBanner(banner);
    };

    // Open preferences modal
    document.getElementById('ltnCbPrefs').onclick = () => {
      showModal(modal);
    };

    // Close modal
    document.getElementById('ltnCmClose').onclick = () => hideModal(modal);
    modal.addEventListener('click', e => { if (e.target === modal) hideModal(modal); });

    // Accept all from modal
    document.getElementById('ltnCmAcceptAll').onclick = () => {
      saveConsent({ essential: true, analytics: true, marketing: true });
      hideModal(modal);
      hideBanner(banner);
    };

    // Save preferences
    document.getElementById('ltnCmSave').onclick = () => {
      const prefs = {
        essential: true,
        analytics: document.getElementById('ltnPrefAnalytics').checked,
        marketing: document.getElementById('ltnPrefMarketing').checked,
      };
      saveConsent(prefs);
      hideModal(modal);
      hideBanner(banner);
    };

    // Reject all from modal
    document.getElementById('ltnCmRejectAll').onclick = () => {
      saveConsent({ essential: true, analytics: false, marketing: false });
      hideModal(modal);
      hideBanner(banner);
    };
  }

  // Run when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose global to re-open preferences
  window.ltn_openCookiePrefs = function () {
    if (!document.getElementById('ltn-cookie-modal')) {
      injectStyles();
      buildBanner(); // won't show
      const modal = buildModal();
      document.getElementById('ltnCmClose').onclick = () => modal.classList.remove('ltn-cm-open');
      modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('ltn-cm-open'); });
      document.getElementById('ltnCmAcceptAll').onclick = () => {
        saveConsent({ essential: true, analytics: true, marketing: true });
        modal.classList.remove('ltn-cm-open');
      };
      document.getElementById('ltnCmSave').onclick = () => {
        saveConsent({ essential: true, analytics: document.getElementById('ltnPrefAnalytics').checked, marketing: document.getElementById('ltnPrefMarketing').checked });
        modal.classList.remove('ltn-cm-open');
      };
      document.getElementById('ltnCmRejectAll').onclick = () => {
        saveConsent({ essential: true, analytics: false, marketing: false });
        modal.classList.remove('ltn-cm-open');
      };
    }
    document.getElementById('ltn-cookie-modal').classList.add('ltn-cm-open');
  };

})();
