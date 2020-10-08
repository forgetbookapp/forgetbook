
function terminator(){
    this.bull = shit;
}
terminator.clickDelete = function() {
  console.log('clickdelete called')
  var confirmButtons = document.querySelectorAll('div.oajrlxb2.s1i5eluu.gcieejh5.bn081pho.humdl8nn.izx4hr6d.rq0escxv.nhd2j8a9.j83agx80.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.d1544ag0.qt6c0cv9.tw6a2znq.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.l9j0dhe7.abiwlrkh.p8dawk7l.beltcj47.p86d2i9g.aot14ch1.kzx2olss.cbu4d94t.taijpn5t.ni8dbmo4.stjgntxs.k4urcfbm.tv7at329');
  for (const button of confirmButtons) {
    if (button.textContent === 'Delete' || "Move to trash");
    button.click();
    return;
  }
  return;
}




terminator.findDelete = function(photos = 'whupshie') {
  var bullshit = document.querySelectorAll('div.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.j83agx80.p7hjln8o.kvgmc6g5.oi9244e8.oygrvhab.h676nmdw.cxgpxx05.dflh9lhu.sj5x9vvc.scb9dxdr.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.l9j0dhe7.abiwlrkh.p8dawk7l.bp9cbjyn.dwo3fsh8.btwxx1t3.pfnyh3mw.du4w35lb');
  if (bullshit == null) { 
  }
  if (photos === 'Hide from Timeline') {
    bullshit[0].click();
    return;
  }
  if (photos === 'Move to archive') { 
    bullshit[1].click();
    return;
  }
  for (const piece of bullshit) {
    if ((piece.textContent === 'Delete') || (piece.textContent === 'Unlike') || (piece.textContent === 'Remove Reaction') || (piece.textContent === photos) || (piece.textContent === 'Move to trash')){
      piece.click();
      setTimeout(function() {terminator.clickDelete();},findDeleteDelay);
      return; }

  }

 }

terminator.doStuff = function(i, x = 0, lastPermalink = '', quantity, speed, photos) {
    chrome.runtime.sendMessage({type: "sendCount", contents: x}, function() {

    });
  

  if (speed === 1/2) {
    doStuffDelay = 6000;
    findDeleteDelay = 2500;
  }
  else if (speed === 1/3) {
    doStuffDelay = 5000;
    findDeleteDelay = 2000;
  }
  else if (speed === 1) {
    doStuffDelay = 3000;
    findDeleteDelay = 1000;
  }
  else if (speed === 2) {
    doStuffDelay = 2000;
    findDeleteDelay = 800;
  }
  else if (speed === 3) {
    doStuffDelay = 1000;
    findDeleteDelay = 400;
  }
  else if (speed === 4){
    doStuffDelay = 800;
    findDeleteDelay = 300;
  }
  else if (speed === 5){
    doStuffDelay = 500;
    findDeleteDelay = 200;
  }
  else {
    return;
  }

  if (quantity > 0) {
    var actionTitle = document.querySelectorAll('div.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.c1et5uql');
    actionTitle[x].scrollIntoView({behavior:'smooth', block:'center'});
    Permalink = lastPermalink;
    setTimeout(function() {terminator.doStuff(i, x+1, Permalink, quantity-1, speed, photos);},doStuffDelay);
    return;
  }


var actionTitle = document.querySelectorAll('div.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.c1et5uql');
  
var parent = actionTitle[x].parentElement;
var parentClass = parent.getAttribute('class');
while (parentClass !== 'l9j0dhe7') {
  parent = parent.parentElement;
  parentClass = parent.getAttribute('class');}
permalinkNodelist = parent.querySelectorAll('a.oajrlxb2.gs1a9yip.g5ia77u1.mtkw9kbi.tlpljxtp.qensuy8j.ppp5ayq2.goun2846.ccm00jje.s44p3ltw.mk2mc5f4.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.rq0escxv.nhd2j8a9.a8c37x1j.mg4g778l.btwxx1t3.pfnyh3mw.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.tgvbjcpo.hpfvmrgz.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.l9j0dhe7.i1ao9s8h.esuyzwwr.f1sip0of.du4w35lb.lzcic4wl.abiwlrkh.p8dawk7l.ue3kfks5.pw54ja7n.uo3d90p7.l82x9zwi');


 if (actionTitle[x].textContent === 'You searched Facebook') {
    searchTerm = parent.querySelectorAll('span.a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7');
    Permalink = searchTerm[0].textContent;
  }
if (permalinkNodelist[0] == null){
    permalinkNodelist = parent.querySelectorAll('div.oajrlxb2.gs1a9yip.g5ia77u1.mtkw9kbi.tlpljxtp.qensuy8j.ppp5ayq2.goun2846.ccm00jje.s44p3ltw.mk2mc5f4.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.rq0escxv.nhd2j8a9.a8c37x1j.mg4g778l.btwxx1t3.pfnyh3mw.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.tgvbjcpo.hpfvmrgz.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.l9j0dhe7.i1ao9s8h.esuyzwwr.f1sip0of.du4w35lb.lzcic4wl.abiwlrkh.p8dawk7l.ue3kfks5.pw54ja7n.uo3d90p7.l82x9zwi');
    
    Permalink = permalinkNodelist[0].textContent;
      }
  else { 
    Permalink = permalinkNodelist[0].getAttribute('href');
  }
parent.scrollIntoView({behavior:'smooth', block:'center'});


  if (actionTitle[x].textContent.includes("added a new photo")) {
    if (photos === 4){
      setTimeout(function() {terminator.doStuff(i, x+1, Permalink, quantity, speed, photos);},doStuffDelay);
      return;  
    }
    else if (photos === 1) { 
      var isHidden = parent.querySelectorAll('span.oi732d6d.ik7dh3pa.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.e9vueds3.j5wam9gi.knj5qynh.oo9gr5id');
      if (isHidden[2] == null){
      }
      
      else if (isHidden[2].textContent === "Hidden from timeline"){
        
        setTimeout(function() {terminator.doStuff(i, x+1, Permalink, quantity, speed, photos);},doStuffDelay);
        return;  
      }
      var dots = parent.querySelectorAll('div.oajrlxb2.tdjehn4e.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.j83agx80.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.l9j0dhe7.abiwlrkh.p8dawk7l.bp9cbjyn.s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.taijpn5t.tv7at329.thwo4zme');
      if (dots[0] == null) { 
        setTimeout(function() {terminator.doStuff(i, x+1, Permalink, quantity, speed, photos);},doStuffDelay);
        return; 
      }
      if (Permalink === lastPermalink) {
        setTimeout(function() {terminator.doStuff(i, x+1, Permalink, quantity, speed, photos);},doStuffDelay);
        return;  
      }
      dots[0].scrollIntoView({behavior:'smooth', block:'center'});
      dots[0].click();
      setTimeout(function() {terminator.findDelete('Hide from Timeline')}, findDeleteDelay);
      i += 1;
      chrome.runtime.sendMessage({type: "deleteCount", contents: i}, function() {});
      setTimeout(function() {terminator.doStuff(i, x+1, Permalink, quantity, speed, photos);},doStuffDelay);
      return;  
    }
    else if (photos === 2) { 
      var dots = parent.querySelectorAll('div.oajrlxb2.tdjehn4e.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.j83agx80.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.l9j0dhe7.abiwlrkh.p8dawk7l.bp9cbjyn.s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.taijpn5t.tv7at329.thwo4zme');
      if (dots[0] == null) { 
        setTimeout(function() {terminator.doStuff(i, x+1, Permalink, quantity, speed, photos);},doStuffDelay);
        return; 
      }
      if (Permalink === lastPermalink) {
        setTimeout(function() {terminator.doStuff(i, x+1, Permalink, quantity, speed, photos);},doStuffDelay);
        return; 
      }
      dots[0].scrollIntoView({behavior:'smooth', block:'center'});
      dots[0].click();
      setTimeout(function() {terminator.findDelete('Move to archive')}, findDeleteDelay);
      i += 1;
      chrome.runtime.sendMessage({type: "deleteCount", contents: i}, function() {});
      setTimeout(function() {terminator.doStuff(i, x, Permalink, quantity, speed, photos);},doStuffDelay);
      return; 
    }
    else if (photos === 3){ 
      var dots = parent.querySelectorAll('div.oajrlxb2.tdjehn4e.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.j83agx80.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.l9j0dhe7.abiwlrkh.p8dawk7l.bp9cbjyn.s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.taijpn5t.tv7at329.thwo4zme');
      if (dots[0] == null) { 
        setTimeout(function() {terminator.doStuff(i, x+1, Permalink, quantity, speed, photos);},doStuffDelay);
        return; 
      }
      if (Permalink === lastPermalink) {
        setTimeout(function() {terminator.doStuff(i, x+1, Permalink, quantity, speed, photos);},doStuffDelay);
        return;  
      }
      dots[0].scrollIntoView({behavior:'smooth', block:'center'});
      dots[0].click();
      setTimeout(function() {terminator.findDelete('Move to trash')}, findDeleteDelay);
      i += 1;
      chrome.runtime.sendMessage({type: "deleteCount", contents: i}, function() {});
      setTimeout(function() {terminator.doStuff(i, x, Permalink, quantity, speed, photos);},doStuffDelay);
      return;  
    }
  }
var dots = parent.querySelectorAll('div.oajrlxb2.tdjehn4e.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.j83agx80.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.l9j0dhe7.abiwlrkh.p8dawk7l.bp9cbjyn.s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.taijpn5t.tv7at329.thwo4zme');
  if (dots[0] == null) { 
    setTimeout(function() {terminator.doStuff(i, x+1, Permalink, quantity, speed, photos);},doStuffDelay);
    return;
  }
if (Permalink === lastPermalink) {
    setTimeout(function() {terminator.doStuff(i, x+1, Permalink, quantity, speed, photos);},doStuffDelay);
    return;  
  }
 dots[0].scrollIntoView({behavior:'smooth', block:'center'});
  dots[0].click();
  setTimeout(function() {terminator.findDelete()}, findDeleteDelay);
  i += 1;
  chrome.runtime.sendMessage({type: "deleteCount", contents: i}, function() {});
  setTimeout(function() {terminator.doStuff(i, x, Permalink, quantity, speed, photos);},doStuffDelay);
}
terminator.terminate = function(quantity, speed, photos) {
setTimeout(function() {terminator.doStuff(0, 0, '', quantity, speed, photos);}, 1000);
}

