// #region agent log
(() => {
  const ENDPOINT = 'http://127.0.0.1:7688/ingest/4e3215ef-b680-4062-a811-6bf12550fd92';
  const SESSION_ID = '9fdf7b';
  const RUN_ID = 'contact-center-debug';

  function send(hypothesisId, message, data) {
    fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Debug-Session-Id': SESSION_ID,
      },
      body: JSON.stringify({
        sessionId: SESSION_ID,
        runId: RUN_ID,
        hypothesisId,
        location: 'js/catalogHome.js:log',
        message,
        data,
        timestamp: Date.now(),
      }),
    }).catch(() => {});
  }

  function rect(el) {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
      x: Math.round(r.x),
      y: Math.round(r.y),
      w: Math.round(r.width),
      h: Math.round(r.height),
      top: Math.round(r.top),
      right: Math.round(r.right),
      bottom: Math.round(r.bottom),
      left: Math.round(r.left),
    };
  }

  function pick(sel) {
    return document.querySelector(sel);
  }

  function style(el) {
    if (!el) return null;
    const s = getComputedStyle(el);
    return {
      position: s.position,
      display: s.display,
      overflow: s.overflow,
      zIndex: s.zIndex,
      top: s.top,
      right: s.right,
      bottom: s.bottom,
      left: s.left,
      width: s.width,
      height: s.height,
      padding: `${s.paddingTop} ${s.paddingRight} ${s.paddingBottom} ${s.paddingLeft}`,
      margin: `${s.marginTop} ${s.marginRight} ${s.marginBottom} ${s.marginLeft}`,
      transform: s.transform,
    };
  }

  function measure() {
    const home = pick('.amx-home');
    const bg = pick('.amx-home__bg');
    const content = pick('.amx-home__content');
    const panel = pick('.amx-shape--bottomRight');
    const request = pick('.amx-home__request');
    const form = pick('.custom-contact-form');

    send('H0', 'nodes-present', {
      home: !!home,
      bg: !!bg,
      content: !!content,
      bottomRightPanel: !!panel,
      request: !!request,
      form: !!form,
    });

    send('H1', 'rectangles', {
      home: rect(home),
      bottomRightPanel: rect(panel),
      request: rect(request),
      form: rect(form),
    });

    send('H2', 'computed-styles', {
      home: style(home),
      bottomRightPanel: style(panel),
      request: style(request),
      form: style(form),
    });

    if (panel && request) {
      const pr = panel.getBoundingClientRect();
      const rr = request.getBoundingClientRect();
      send('H3', 'panel-vs-request-delta', {
        dxLeft: Math.round(rr.left - pr.left),
        dyTop: Math.round(rr.top - pr.top),
        dxRight: Math.round(pr.right - rr.right),
        dyBottom: Math.round(pr.bottom - rr.bottom),
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      send('H0', 'domcontentloaded', { url: location.href });
      measure();
      window.addEventListener('resize', () => measure());
    });
  } else {
    send('H0', 'dom-already-ready', { url: location.href });
    measure();
    window.addEventListener('resize', () => measure());
  }
})();
// #endregion agent log

