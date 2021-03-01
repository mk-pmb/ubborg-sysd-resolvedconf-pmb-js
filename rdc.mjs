// -*- coding: utf-8, tab-width: 2 -*-

import isStr from 'is-string';
import mergeOpt from 'merge-options';


const ipListSep = '    ';


function resolvedconf(fileSpec, resoSpec) {
  if (isStr(fileSpec)) { return resolvedconf({ path: fileSpec }, resoSpec); }
  const file = {
    pathPre: '/etc/systemd/resolved.conf.d/',
    pathSuf: '.conf',
    mimeType: 'static_ini',
    ...fileSpec,
    content: mergeOpt(fileSpec.content,
      (resoSpec && { Resolve: resoSpec })),
  };
  const reso = (file.content.Resolve || false);

  if (Array.isArray(reso.DNS)) {
    reso.DNS = reso.DNS.filter(Boolean).join(ipListSep);
  }

  return file;
}


export default resolvedconf;
