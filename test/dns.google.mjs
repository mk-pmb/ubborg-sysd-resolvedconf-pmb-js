// -*- coding: utf-8, tab-width: 2 -*-

import test from 'p-tape';
// import eq from 'equal-pmb';

import rdc from '..';
import serversFromJson from './dns.google.servers.json';

test('DNS: simple config', (t) => {
  t.plan(1);
  const ex = {
    pathPre: '/etc/systemd/resolved.conf.d/',
    path: 'google_dns',
    pathSuf: '.conf',
    mimeType: 'static_ini',
    content: { Resolve: { DNS: '8.8.8.8    8.8.4.4' } },
  };
  const ac = rdc('google_dns', { DNS: serversFromJson });
  // eq(ac, ex);
  t.same(ac, ex);
});
