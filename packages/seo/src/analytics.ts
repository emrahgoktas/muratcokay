/** GA4 ölçüm kimliği (G-…). */
export function isGaMeasurementId(id: string | undefined | null): id is string {
  return Boolean(id && /^G-[A-Z0-9]+$/i.test(id.trim()));
}

/** GTM kapsayıcı kimliği (GTM-…). */
export function isGtmContainerId(id: string | undefined | null): id is string {
  return Boolean(id && /^GTM-[A-Z0-9]+$/i.test(id.trim()));
}

/**
 * tel / WhatsApp / iletişim sayfası tıklamalarını GA4 / dataLayer’a gönderir.
 * gtag yoksa dataLayer.push; ikisi de yoksa no-op.
 */
export function conversionListenerInlineScript() {
  return `document.addEventListener('click',function(e){
  var a=e.target&&e.target.closest?e.target.closest('a'):null;
  if(!a)return;
  var href=(a.getAttribute('href')||'').trim();
  if(!href)return;
  function send(name,params){
    if(typeof gtag==='function'){gtag('event',name,params);return;}
    window.dataLayer=window.dataLayer||[];
    window.dataLayer.push(Object.assign({event:name},params));
  }
  if(href.indexOf('tel:')===0){
    send('phone_click',{event_category:'conversion',link_url:href});
    return;
  }
  if(href.indexOf('wa.me')!==-1||href.indexOf('whatsapp')!==-1||href.indexOf('api.whatsapp.com')!==-1){
    send('whatsapp_click',{event_category:'conversion',link_url:href});
    return;
  }
  try{
    var u=new URL(href,window.location.origin);
    if(u.pathname.replace(/\\/$/,'')==='/iletisim'||u.hash==='#iletisim'){
      send('contact_click',{event_category:'conversion',link_url:u.pathname+u.hash});
    }
  }catch(_){}
},true);`;
}

export function gtagConfigInlineScript(gaId: string) {
  const id = gaId.trim();
  return `window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','${id}');
${conversionListenerInlineScript()}`;
}
