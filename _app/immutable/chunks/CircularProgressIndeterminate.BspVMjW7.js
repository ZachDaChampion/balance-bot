import{s as p,z as _,A as g,B as u,b as m,f as c,m as a,C as v,D as d,i as f,h as y,n as h}from"./scheduler.x3ajZ8-u.js";import{g as w}from"./connection.dlhm24vh.js";import{S as x,i as k}from"./index.Bt2nboq4.js";function b(n){let s,e,l,o=[{viewBox:"0 0 48 48"},{xmlns:"http://www.w3.org/2000/svg"},{class:"m3-container"},{style:l="display: "+n[0]+";"},{role:"progressbar"},n[1]],r={};for(let t=0;t<o.length;t+=1)r=_(r,o[t]);return{c(){s=g("svg"),e=g("circle"),this.h()},l(t){s=u(t,"svg",{viewBox:!0,xmlns:!0,class:!0,style:!0,role:!0});var i=m(s);e=u(i,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,"stroke-dasharray":!0,"stroke-linecap":!0,fill:!0,class:!0}),m(e).forEach(c),i.forEach(c),this.h()},h(){a(e,"cx","24"),a(e,"cy","24"),a(e,"r","20"),a(e,"stroke","rgb(var(--m3-scheme-primary))"),a(e,"stroke-width","4"),a(e,"stroke-dasharray","125.66 125.66"),a(e,"stroke-linecap","round"),a(e,"fill","none"),a(e,"class","svelte-5nogo2"),v(s,r),d(s,"svelte-5nogo2",!0)},m(t,i){f(t,s,i),y(s,e)},p(t,[i]){v(s,r=w(o,[{viewBox:"0 0 48 48"},{xmlns:"http://www.w3.org/2000/svg"},{class:"m3-container"},i&1&&l!==(l="display: "+t[0]+";")&&{style:l},{role:"progressbar"},i&2&&t[1]])),d(s,"svelte-5nogo2",!0)},i:h,o:h,d(t){t&&c(s)}}}function B(n,s,e){let{display:l="inline-flex"}=s,{extraOptions:o={}}=s;return n.$$set=r=>{"display"in r&&e(0,l=r.display),"extraOptions"in r&&e(1,o=r.extraOptions)},[l,o]}class S extends x{constructor(s){super(),k(this,s,B,b,p,{display:0,extraOptions:1})}}export{S as C};