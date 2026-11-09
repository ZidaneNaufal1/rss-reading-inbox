'use strict';
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.Inbox=factory()})(globalThis,function(){
function safeUrl(v){try{const u=new URL(v);return ['http:','https:'].includes(u.protocol)?u.href:''}catch{return ''}}
function merge(current,incoming){const out=[...current],seen=new Set(current.map(x=>x.key));for(const x of incoming){if(!seen.has(x.key)){seen.add(x.key);out.push(x)}}return out}
function validate(raw){if(!raw||raw.version!==1||!Array.isArray(raw.items)||raw.items.length>2000)throw Error('Cadangan tidak valid');const ids=new Set();return {version:1,items:raw.items.map(x=>{if(!x||typeof x.key!=='string'||!x.key||x.key.length>2048||ids.has(x.key)||typeof x.title!=='string'||!x.title.trim()||x.title.length>500||typeof x.url!=='string'||(x.url&&!safeUrl(x.url))||typeof x.date!=='string'||x.date.length>120||typeof x.read!=='boolean'||typeof x.archived!=='boolean')throw Error('Data artikel tidak valid');ids.add(x.key);return {key:x.key,title:x.title,url:x.url,date:x.date,read:x.read,archived:x.archived}})}}
return {safeUrl,merge,validate};
});
