import{p as I,s as C,P as z,c as O,C as H,M as D,a as M,L as y,b as P,S as U,V as w,d as K,E as W,e as G,G as q,F as Z,H as Q,f as J,T as $,g as X,h as Y,i as ee,j as ne,B as se,I as te,U as ie,k as re,l as le,m as ae,n as ue,A as de,R as ge,o as pe,q as oe,r as he,t as ce,u as me,v as be,w as fe,x as ye,y as ve,z as Ee,D as ke,J as ze,K as we,N as xe,O as De,Q as Ae,W as _e,X as Ve,Y as Se,Z as Be,_ as Le,$ as Re,a0 as Fe,a1 as je,a2 as Ne}from"./vendor-gGoL0DZl.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const u=e=>{const n=document.getElementById(e);if(!n)throw new Error(`Cannot find '${e}' element in DOM tree`);return n},A=(e,n="|")=>e.flatMap(i=>Array.isArray(i)?[...i,n]:[i,n]).slice(0,-1),c="orig",x="modif",b="diff";let Te="GPL";var k=(e=>(e[e.Split=0]="Split",e[e.Full=1]="Full",e))(k||{});const N=u("switch-buttons"),Ie=N.querySelectorAll('input[type="radio"]'),m={[c]:u("orig-view"),[x]:u("modif-view"),[b]:u("diff-view")},l=I({currentView:c,diffViewMode:0,diffViewOn:!1,pinned:!1});function Ce(){m[b].style.display="none",m[c].setAttribute("contenteditable","false"),m[b].setAttribute("contenteditable","false"),V(l),S(l),C(l,()=>{V(l),S(l)})}function _(e,n){e.style.display=n?"":"none"}function V({currentView:e,diffViewOn:n,diffViewMode:i}){for(const s of Ie)s.checked=s.value===e;for(const[s,t]of Object.entries(m)){if(s===b){_(t,n);continue}_(t,s===e&&(i!==1||!n))}}function S({pinned:e}){N.style.display=e?"flex":"none",m[c].setAttribute("contenteditable",String(!e))}const Oe=`
<svg viewBox="0 0 24 24" fill="currentColor" area-hidden="true" xmlns="http://www.w3.org/2000/svg">
	<path d="M17.4 11.1C17.4 7.6206 14.5794 4.8 11.1 4.8C7.6206 4.8 4.8 7.6206 4.8 11.1C4.8 14.5794 7.6206 17.4 11.1 17.4C14.5794 17.4 17.4 14.5794 17.4 11.1ZM19.2 11.1C19.2 13.0125 18.5371 14.7703 17.4286 16.156C17.0528 16.6258 16.6258 17.0528 16.156 17.4286C14.7703 18.5371 13.0125 19.2 11.1 19.2C6.62649 19.2 3 15.5735 3 11.1C3 6.62649 6.62649 3 11.1 3C15.5735 3 19.2 6.62649 19.2 11.1Z"/>
	<path d="M20.7362 19.4635L17.4286 16.156C17.0528 16.6258 16.6258 17.0528 16.156 17.4286L19.4635 20.7362L19.5321 20.7986C19.8856 21.0867 20.4068 21.0656 20.7362 20.7362C21.0656 20.4068 21.0867 19.8856 20.7986 19.5321L20.7362 19.4635Z"/>
</svg>
`,He=`
<svg viewBox="0 0 1024 1024" fill="currentColor" area-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <path d="
		M149.333 64A85.038 85.038 0 0 0 64 149.333v469.334A85.038 85.038 0 0 0 149.333 704
		h85.334v-85.333h-85.334V149.333h469.334v85.334H704v-85.334A85.038 85.038 0 0 0 618.667 64
		H149.333m256 256A85.038 85.038 0 0 0 320 405.333v85.334h85.333v-85.334h85.334V320h-85.334
    M576 320v85.333h42.667V448H704V320H576m213.333 0v85.333h85.334v469.334H405.333v-85.334
		H320v85.334A85.038 85.038 0 0 0 405.333 960h469.334A85.038 85.038 0 0 0 960 874.667V405.333
		A85.038 85.038 0 0 0 874.667 320h-85.334M618.667 533.333v85.334h-85.334V704h85.334
		A85.038 85.038 0 0 0 704 618.667v-85.334h-85.333M320 576v128h128v-85.333h-42.667V576z
	"/>
</svg>
`,v="differ";class Me extends P{value=!1;execute(){this.toggleDiffEditor(),this.fire("change:value")}refresh(){this.isEnabled=!0}get affectsData(){return!1}toggleDiffEditor(){Ue(this.editor);let n=!this.value;n?this.show():this.hide(),this.value=n}show(){l.diffViewOn=!0}hide(){l.diffViewOn=!1}}class Pe extends z{static get pluginName(){return"Differ"}init(){this.editor.config.get(v);const n=new Me(this.editor);this.editor.commands.add(v,n),this.editor.ui.componentFactory.add(v,i=>{const s=O(i,U),t=s.buttonView;t.set({label:"Diff",icon:He,tooltip:!0,isToggleable:!0}),t.bind("isOn").to(n,"value"),t.on("execute",()=>{n.execute(),t.isOn=n.value});const r=new H().add({type:"switchbutton",model:new D({id:"two-sided-switch",label:"Two-Sided",withText:!0,isOn:!0})}).add({type:"switchbutton",model:new D({id:"approx-text-sim-switch",label:"Appox Text Similarity",withText:!0,isOn:!0})});M(s,r),s.on("execute",a=>{const{id:h}=a.source;if(h==="two-sided-switch"){const o=B(s,0);o.isOn=!o.isOn,l.diffViewMode=o.isOn?k.Split:k.Full,console.log("two-sided-switch:",o.isOn)}if(h==="approx-text-sim-switch"){const o=B(s,1);o.isOn=!o.isOn,console.log("approx-sim-switch:",o.isOn)}});const d=E(i,{label:"Text Weight",value:.6,onChange:a=>{console.log("[Text Weight] value:",a)}}),g=E(i,{label:"Structure Weight",value:.3,onChange:a=>{console.log("[Structure Weight] value:",a)}}),p=E(i,{label:"Similarity Threshold",value:.5,onChange:a=>{console.log("[Similarity Threshold] value:",a)}});return s.once("change:isOpen",()=>{s.listView?.items.addMany([new y,d,new y,g,new y,p])}),s})}}function E(e,{min:n=0,max:i=1,value:s=.5,step:t=.05,label:r="Label",onChange:d=(g,p)=>{}}={}){const g=new w(e),p=g.bindTemplate;return g.setTemplate({tag:"label",attributes:{class:["ck"],style:"display:flex; flex-direction:column; gap:0.1em; margin:0.4em 1.3em; min-width:200px;"},children:[{tag:"span",children:[r]},{tag:"input",attributes:{class:["ck"],type:"range",min:String(n),max:String(i),step:String(t),value:String(s)},on:{input:p.to(a=>{const h=a.target;d(Number(h?.value),a)})}}]}),g}function B(e,n){return(e.listView?.items.get(n)).children.first}function Ue(e){e.model.enqueueChange(n=>n.setSelection(e.model.document.getRoot(l.currentView),0))}const L="Diff time | ";class Ke extends z{labelView;value=L;static get pluginName(){return"TimeStatLabel"}init(){this.setTime(0),this.editor.ui.componentFactory.add("timeStat",n=>(this.labelView=new w(n),this.labelView.setTemplate({tag:"span",attributes:{class:["ck","ck-time-stat-label"],style:{fontFamily:"monospace",fontStyle:"italic",fontSize:"0.8rem",color:"#9aa3aa"}},children:[this.value]}),this.labelView))}setTime(n){this.value=L+We(n),this.labelView&&(this.labelView.element.textContent=this.value)}}function We(e,n=2){return e>=6e4?`${(e/6e4).toFixed(n)} m`:e>=1e3?`${(e/1e3).toFixed(n)} s`:e>=1?`${e.toFixed(n)} ms`:`${(e*1e3).toFixed(n)} μs`}class Ge extends z{static get pluginName(){return"ToolbarSpacer"}init(){this.editor.ui.componentFactory.add("spacer",n=>{const i=new w(n);return i.setTemplate({tag:"span",attributes:{style:{flexGrow:"1"}}}),i})}}const R=`<section class="simple-box">
  <div class="simple-box-description">
    <div class="simple-box group text_block editor__text-block-box" data-type="text_block" data-text-block-id="10426">
      <h1 style="text-align:center;">Rahmenvertrag</h1>
      <p style="text-align:center;">
        <tag class="dynamic-field" id="maxq2g1z" data-dynamic-field-id="5074" tag-attribute="true" name="Agreement Date"
          data-type="dynamic_field" user-value="Agreement Date">Agreement Date</tag>
      </p>
      <p style="text-align:center;"><br>zwischen</p>
      <p style="text-align:center;">&nbsp;</p>
      <p style="text-align:center;"><br><strong>[</strong><mark class="marker-green"><strong>Unternehmen
            BOSCH</strong></mark><strong>]</strong><br>[<mark class="marker-green">Anschrift</mark>]</p>
      <p style="text-align:center;">&nbsp;</p>
      <p style="text-align:center;">- im Folgenden „<strong>BOSCH</strong>“ genannt -</p>
      <p style="text-align:center;">&nbsp;</p>
      <p style="text-align:center;">und</p>
      <p style="text-align:center;">&nbsp;</p>
      <p style="text-align:center;">[<mark class="marker-green"><strong>LIEFERANT</strong></mark>]<br>[<mark
          class="marker-green">Anschrift</mark>]</p>
      <p style="text-align:center;">&nbsp;</p>
      <p style="text-align:center;">- im Folgenden der „<strong>LIEFERANT</strong>“ genannt -</p>
      <p style="text-align:center;">&nbsp;</p>
      <p style="text-align:center;">- auch namens und im Auftrag ihrer Tochtergesellschaften und verbundenen Unternehmen
        (wie unten definiert) -</p>
      <p style="text-align:center;">&nbsp;</p>
      <p style="text-align:center;">&nbsp;</p>
      <p style="text-align:center;">&nbsp;</p>
    </div>
  </div>
</section>
<ol class="multi-level-list legal-list" style="list-style-type:none;" xmlns="http://www.w3.org/1999/xhtml">
  <li data-text-block-id="10439" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">1. </span>Vertragsgegenstand und
      Vertragspartner</h3>
    <ol class="multi-level-list legal-list" style="list-style-type:none;">
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">1.1. </span>Dieser Vertrag (im Folgenden
          „<strong>Rahmenvertrag</strong>“ genannt) regelt die Vertragsbedingungen für die Lieferung von Produkten (im
          Folgenden „<strong>Vertragsprodukte</strong>“ genannt), die der LIEFERANT und seine verbundenen Unternehmen an
          BOSCH und seine verbundenen Unternehmen liefern. Ein „<strong>verbundenes Unternehmen</strong>“ eines
          Vertragspartners ist jede juristische Person, die von einem Vertragspartner kontrolliert wird oder die ein
          Vertragspartner kontrolliert oder die unter gemeinsamer Kontrolle mit einem Vertragspartner steht.
          „<strong>Kontrolle</strong>“ liegt vor, wenn während der Laufzeit dieses Vertrages mehr als 50 % (fünfzig
          Prozent) der Stimmrechtsanteile direkt oder indirekt von einer juristischen Person gehalten werden oder wenn
          die Leitung und die Geschäftspolitik dieser juristischen Person direkt oder indirekt durch Kapitalbeteiligung,
          einen Vertrag oder durch andere Mittel kontrolliert werden. Eine solche juristische Person gilt nur so lange
          als „verbundenes Unternehmen“ des betreffenden Vertragspartners, wie diese Voraussetzungen erfüllt sind. <mark
            class="marker-green">Dieser Rahmenvertrag ersetzt den zwischen BOSCH und dem LIEFERANTEN geschlossenen
            Rahmenvertrag vom [•].</mark></p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">1.2. </span>Dieser Rahmenvertrag gilt für
          vereinbarte Lieferverträge wie z. B. Preisvereinbarungen oder mehrjährige Verträge (im Folgenden
          „<strong>Lieferverträge</strong>“ genannt) und für die danach oder nach anderen vereinbarten Logistikkonzepten
          (z. B. Kanban oder VMI) erstellten Aufträge und Lieferabrufe sowie für alle darunter fallenden Lieferungen.
        </p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">1.3. </span>BOSCH und seine verbundenen
          Unternehmen sind berechtigt, auf Grundlage dieses Rahmenvertrags Lieferverträge mit dem LIEFERANTEN und dessen
          verbundenen Unternehmen abzuschließen. Lieferverträge müssen im Namen und auf Rechnung des jeweiligen
          Vertragspartners gemäß den Bestimmungen dieses Rahmenvertrags geschlossen werden. Jede Bezugnahme auf den
          „LIEFERANTEN“ hierin ist als Bezugnahme auf das jeweils betroffene verbundene Unternehmen des LIEFERANTEN und
          jede Bezugnahme auf „BOSCH“ ist als Bezugnahme auf das jeweils betroffene verbundene Unternehmen von BOSCH zu
          verstehen.&nbsp;<br>&nbsp;</p>
      </li>
    </ol>
  </li>
  <li data-text-block-id="10429" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">2. </span>Grundlage des Rahmenvertrags und
      Rangfolge der Vertragsbedingungen</h3>
    <p style="text-align:justify;">Es gelten die Einkaufsbedingungen der Robert Bosch GmbH (Anlage 1), soweit in diesem
      Rahmenvertrag nichts anderes festgelegt ist. Projektspezifische Bestimmungen, wie zum Beispiel
      Zahlungsbedingungen, werden in den jeweiligen Lieferverträgen vereinbart. Die Allgemeinen Geschäftsbedingungen des
      LIEFERANTEN werden nicht akzeptiert.<br>&nbsp;</p>
  </li>
  <li data-text-block-id="10421" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">3. </span>Abrufe</h3>
    <ol class="multi-level-list legal-list" style="list-style-type:none;">
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">3.1. </span>Die Lieferung von
          Vertragsprodukten, die im Rahmen eines Liefervertrags benötigt werden, erfolgt ausschließlich über Abrufe, es
          sei denn, es wurden hiervon abweichende Logistikkonzepte vereinbart (im Folgenden „Abrufe“ genannt). Die
          Abrufe werden in der Regel rollierend erneuert und umfassen eine Produktionsfreigabe von vier (4) Wochen und
          die Einwilligung von BOSCH zur Bestellung des benötigten Ausgangsmaterials (Materialfreigabe) von weiteren
          vier (4) Wochen. Der im Lieferabruf angegebene Folgezeitraum stellt eine unverbindliche Prognose dar, die eine
          Just-in-Time-Lieferung an BOSCH sicherstellen und es dem LIEFERANTEN ermöglichen muss, seine
          Produktionskapazität entsprechend zu planen.<br>Der Abruf gilt als vom LIEFERANTEN angenommen, wenn der
          LIEFERANT nicht innerhalb von zwei (2) Arbeitstagen nach Erhalt schriftlich widerspricht. Ein Widerspruch des
          LIEFERANTEN im Zusammenhang mit einem Abruf ist nur für die Wochen eines Abrufs zulässig, für die eine
          Produktionsfreigabe oder eine Materialfreigabe vorliegt, und nur dann, wenn die für diese Woche angegebene
          Menge die für diese Woche im vorherigen Abruf angegebene Menge um mehr als 20 % übersteigt<br>Aus Gründen der
          Klarheit bleibt im Falle eines Widerspruchs, wie oben beschrieben, der jeweilige Abruf bis zu der im
          vorherigen Abruf angegebenen Menge zuzüglich 20 % oder, im Falle einer Vereinbarung über eine
          Kapazitätsreservierung, bis zu dem vertraglich geschuldeten Betrag wirksam.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">3.2. </span>Der LIEFERANT ist
          verpflichtet, BOSCH umgehend zu informieren, insbesondere die im Liefervertrag angegebenen Werke und die
          Einkaufsabteilung, falls der LIEFERANT feststellt, dass seine Produktionskapazität an mangelfreien
          Vertragsprodukten nicht ausreicht, um etwaige Abrufe zu erfüllen. Der LIEFERANT hat die gleiche
          Informationspflicht, wenn der LIEFERANT Maßnahmen ergreifen muss, um die Anforderungen zu erfüllen (z. B.
          Einführung einer zusätzlichen Schicht, Überstunden). Diese Informationen entbinden den LIEFERANTEN jedoch
          nicht von seiner Lieferpflicht.<br>&nbsp;</p>
      </li>
    </ol>
  </li>
  <li data-text-block-id="10427" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">4. </span>EDI-Fähigkeit</h3>
    <p style="text-align:justify;">Geschäftsprozesse (Abrufe, Lieferavis, Daten zur Lieferung und zum Termin,
      Gutschriftsanzeigen, Rechnung usw.) müssen zwischen dem LIEFERANTEN und BOSCH elektronisch abgewickelt werden. Der
      LIEFERANT muss bei der Erstellung der elektronischen Kataloge und, sofern erforderlich, bei der Herstellung der
      erforderlichen Verbindung zu den Systemen von BOSCH aktiv mitwirken und Unterstützung leisten. Der LIEFERANT muss
      BOSCH mindestens die Liefer- und Transportdaten übermitteln. Es finden die in der Automobilbranche üblichen
      EDI-Standards Anwendung (EDIFACT).<br>&nbsp;</p>
  </li>
  <li data-text-block-id="10435" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">5. </span>Produktkonformität,
      Qualitätssicherung</h3>
    <ol class="multi-level-list legal-list" style="list-style-type:none;">
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">5.1. </span>Der LIEFERANT muss
          sicherstellen, dass die Vertragsprodukte (einschließlich ihrer Verpackung) für den vertraglichen Zweck
          geeignet sind, dem Stand der Technik und den üblichen Vorschriften der Berufsverbände sowie allen anwendbaren
          Gesetzen entsprechen. Die Spezifikationen oder Standards von BOSCH entbinden den LIEFERANTEN nicht davon, die
          Verantwortung für die gesetzlichen Anforderungen an seine Vertragsprodukte zu übernehmen (z. B. durch die
          Einholung einer Lizenz).</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">5.2. </span>Wenn BOSCH das Vertragsprodukt
          vollständig selbst entwickelt hat und der LIEFERANT es unverändert nach den Spezifikationen von BOSCH
          herstellt, muss BOSCH dafür Sorge tragen, dass seine Spezifikationen den geltenden gesetzlichen Bestimmungen
          in Bezug auf die Qualität des Vertragsprodukts entsprechen. Erkennt der LIEFERANT, dass Spezifikationen von
          BOSCH den geltenden gesetzlichen Bestimmungen entgegenstehen, muss er BOSCH unverzüglich darüber informieren.
          Informiert der LIEFERANT BOSCH trotz Kenntnis nicht unverzüglich oder erkennt er fahrlässig nicht, dass die
          Vertragsprodukte nicht den anwendbaren gesetzlichen Bestimmungen entsprechen, so haftet der LIEFERANT für
          diese Nichteinhaltung.&nbsp;</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">5.3. </span>Ansonsten gilt die separat
          abgeschlossene Vereinbarung zur Qualität und der gesellschaftlichen Verantwortung von Unternehmen
          (QAA).<br>&nbsp;</p>
      </li>
    </ol>
  </li>
  <li data-text-block-id="10437" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">6. </span>Vergütung</h3>
    <ol class="multi-level-list legal-list" style="list-style-type:none;">
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">6.1. </span>Die Preise der
          Vertragsprodukte müssen im jeweiligen Liefervertrag festgelegt werden und sind – vorbehaltlich des Abschnitts
          18 (Aufzeigen von Verbesserungspotenzial, Erfindungen) – für alle innerhalb der Laufzeit des Liefervertrags
          gelieferten Vertragsprodukte verbindlich.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">6.2. </span>Sofern zum Ende der Laufzeit
          des jeweiligen Liefervertrages kein Anschlussliefervertrag vereinbart wurde, gelten bei entsprechenden Abrufen
          von BOSCH die Bedingungen des eingestellten Liefervertrages so lange weiter, bis ein Anschlussliefervertrag
          vorliegt. Nach Ablauf einer Dauer von maximal acht (8) Monaten nach Ende der Laufzeit gilt dies jedoch nur,
          wenn der LIEFERANT entsprechende Abrufe von BOSCH akzeptiert. Nach Ablauf der Dauer von acht (8) Monaten ist
          der LIEFERANT verpflichtet, die Vertragsprodukte zum Marktwert / zu angemessenen Preisen zu liefern.<br>&nbsp;
        </p>
      </li>
    </ol>
  </li>
  <li data-text-block-id="10441" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">7. </span>Zahlungsbedingungen und
      Rechnungsstellung</h3>
    <ol class="multi-level-list legal-list" style="list-style-type:none;">
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">7.1. </span>Sofern keine anderweitige
          Vereinbarung getroffen ist, erfolgt die Begleichung der Rechnung innerhalb 60 Tage nach Erhalt einer
          ordentlichen Rechnung an die von uns benannte Rechnungsadresse. Die Zahlung erfolgt unter Vorbehalt der
          Rechnungsprüfung sowie nach Eingang der Ware beziehungsweise Erbringung der Leistung.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">7.2. </span>Sofern nicht anders
          vereinbart, ist der LIEFERANT verpflichtet, Rechnungen papierlos zu versenden. BOSCH setzt sich mit dem
          LIEFERANTEN in Verbindung, um ein geeignetes Verfahren zur Übermittlung elektronischer Rechnungen zu
          vereinbaren. Die Rechnungen müssen eine entsprechende Abruf- oder Bestellreferenz von BOSCH enthalten. Die
          übermittelten elektronischen Rechnungen müssen den vertraglichen, gesetzlichen und steuerlichen Anforderungen
          entsprechen, insbesondere denen des Umsatzsteuerrechts. Nicht elektronisch übermittelte Rechnungen oder
          Rechnungen ohne ordnungsgemäße Referenz auf den Abruf oder die Bestellung können nicht bearbeitet werden und
          können abgelehnt werden. Dies kann zu Verzögerungen in der Bearbeitungszeit führen. Im Falle der Ablehnung
          einer Rechnung beginnt die Fälligkeit der Rechnung nach Erhalt einer korrigierten Rechnung.&nbsp;</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">7.3. </span>Die von BOSCH getätigten
          Zahlungen stellen in keiner Weise eine Anerkennung der Konformität der Vertragsprodukte mit dem Rahmenvertrag
          und dem Liefervertrag dar.<br>&nbsp;</p>
      </li>
    </ol>
  </li>
  <li data-text-block-id="10428" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">8. </span>Gewährleistung</h3>
    <ol class="multi-level-list legal-list" style="list-style-type:none;">
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">8.1. </span>Der LIEFERANT haftet für
          Mängel an den Vertragsprodukten für die Dauer von 60 (sechzig) Monaten ab dem Datum der Lieferung. Falls es
          darüber hinausgehende gesetzliche Verjährungsfristen gibt, gelten diese längeren
          Verjährungsfristen.&nbsp;<br>Für den Fall, dass der LIEFERANT Vertragsprodukte an ein Unternehmen der
          Bosch-Gruppe liefert und dieses Unternehmen sie anschließend an ein anderes Unternehmen der Bosch-Gruppe
          („Indirekter Abnehmer in der Bosch-Gruppe“) liefert, haftet der LIEFERANT nach den Bestimmungen dieses
          Rahmenvertrags für Mängel an den Vertragsprodukten sowohl gegenüber dem Unternehmen der Bosch-Gruppe, an das
          der LIEFERANT die Vertragsprodukte direkt geliefert hat, als auch gegenüber den indirekten Abnehmern in der
          Bosch-Gruppe. In einem solchen Fall sind die betroffenen Bosch-Gesellschaften gesamtschuldnerische
          Gläubiger.&nbsp;</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">8.2. </span>Bei Beanstandungen muss der
          LIEFERANT unverzüglich alle erforderlich erscheinenden Untersuchungen durchführen und BOSCH unverzüglich über
          die Ursachen und Maßnahmen zur Behebung der Mängel informieren. Der LIEFERANT ist verpflichtet, bei der
          Aufklärung der Ursachen für die Beanstandungen und bei der Suche nach einer effizienten Lösung des Problems
          uneingeschränkt mitzuwirken, auch wenn die Ursache der Beanstandungen zwischen den Vertragspartnern strittig
          ist.&nbsp;</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">8.3. </span>Bei Nichteinhaltung der
          jeweils vereinbarten Qualitätskennwerte oder bei einer sonstigen nachweisbaren Beeinträchtigung der Qualität
          der gelieferten Vertragsprodukte behält sich BOSCH ferner das Recht vor, die Abnahme der bereits verbindlich
          bestellten Mengen ganz oder teilweise auszusetzen, bis das geforderte Qualitätsniveau durch den LIEFERANTEN
          wieder sichergestellt ist. Der LIEFERANT ist nicht berechtigt, aus einer solchen Aussetzung Ansprüche gegen
          BOSCH abzuleiten.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">8.4. </span>Soweit Kunden von BOSCH zur
          Feststellung und Abrechnung von Gewährleistungsfällen ein marktübliches Referenzverfahren in der
          Automobilindustrie oder ein ähnliches branchenübliches Verfahren anwenden und wenn sie ein solches Verfahren
          zur Geltendmachung von Kostenansprüchen gegen BOSCH für Mängel an Produkten von BOSCH wegen Mängeln an
          Vertragsprodukten anwenden, ist der LIEFERANT verpflichtet, diese Kosten zu tragen.&nbsp;<br>&nbsp;</p>
      </li>
    </ol>
  </li>
  <li data-text-block-id="10436" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">9. </span>Verarbeitbarkeit</h3>
    <p style="text-align:justify;">Soweit in den Spezifikationen nichts anderes vereinbart ist, gewährleistet der
      LIEFERANT die Verarbeitbarkeit der gelieferten Vertragsprodukte für mindestens vierundzwanzig (24) Monate ab dem
      Datum der Lieferung an BOSCH.&nbsp;<br>&nbsp;</p>
  </li>
  <li data-text-block-id="10431" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">10. </span>Inhaltsstoffe</h3>
    <p style="text-align:justify;">LIEFERANT ist verpflichtet, die Anforderungen der Bosch Norm N2580 einzuhalten und
      die Inhaltsstoffe der Vertragsprodukte gemäß den Anforderungen der Bosch Norm N2580 anzugeben. Die aktuelle
      Version ist auf https://www.bosch.com/de/unternehmen/supply-chain/informationen-fuer-geschaeftspartner/ unter
      „Allgemeine Regelungen Qualität“ veröffentlicht.<br>&nbsp;</p>
  </li>
  <li data-text-block-id="10430" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">11. </span>Haftung für die Verletzung des
      geistigen Eigentums von Dritten</h3>
    <p style="text-align:justify;">Es gelten Ziffern 9.4 und 9.5 der Einkaufsbedingungen der Robert Bosch
      GmbH.<br>&nbsp;</p>
  </li>
  <li data-text-block-id="10438" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">12. </span>Versicherung</h3>
    <ol class="multi-level-list legal-list" style="list-style-type:none;">
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">12.1. </span>Der LIEFERANT ist
          verpflichtet, eine Haftpflichtversicherung für die Dauer der Vertragsbeziehung mit BOSCH abzuschließen. Die
          Mindestdeckung je Schadensfall richtet sich nach den folgenden Beträgen:</p>
        <ul>
          <li>
            <p style="text-align:justify;">Betriebs- und Produkthaftpflichtversicherung<br><strong>X</strong> Mio. EUR
              pauschal für Personen- und Sachschäden je Versicherungsfall<br><strong>X</strong> Mio. EUR pauschal für
              Personen- und Sachschäden je Kalenderjahr&nbsp;<br>(erweiterte Deckung einschließlich der Kosten für den
              Ein- und Ausbau von Autoteilen und ggf. von Teilen für Wasserfahrzeuge)<br>&nbsp;</p>
          </li>
          <li>
            <p style="text-align:justify;"><strong>X</strong> Millionen EUR für die Versicherung der Rückrufkosten von
              Fahrzeugen<br>&nbsp;</p>
          </li>
        </ul>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">12.2. </span>Für alle Versicherungsfälle
          in einem (1) Jahr muss das Doppelte der Versicherungssumme der vorgenannten Versicherungsarten zur Verfügung
          stehen (doppelte Jahressumme).</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">12.3. </span>Auf Verlangen von BOSCH hat
          der LIEFERANT den Abschluss der Versicherung durch Vorlage einer schriftlichen Bestätigung des Versicherers
          nachzuweisen. Der LIEFERANT verpflichtet sich, BOSCH unverzüglich schriftlich über alle relevanten Änderungen
          der Versicherungsverhältnisse, insbesondere über die Kündigung des Versicherungsschutzes oder die Änderung der
          Unternehmenszugehörigkeit.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">12.4. </span>Der Lieferant ist
          verpflichtet, Bosch darüber zu informieren, wenn die oben genannten Versicherungsanforderungen und
          Versicherungssparten geändert werden.<br>&nbsp;</p>
      </li>
    </ol>
  </li>
  <li data-text-block-id="10432" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">13. </span>Liefertermine, Kapazitätsplanung,
      Logistikkonzept</h3>
    <ol class="multi-level-list legal-list" style="list-style-type:none;">
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">13.1. </span>Die vereinbarten
          Liefertermine stellen grundsätzlich verbindliche Termine im Sinne der jeweiligen Incoterms dar. Der LIEFERANT
          stellt die Vertragsprodukte unter Berücksichtigung der erforderlichen Lade- und Transportzeiten rechtzeitig
          bereit.&nbsp;</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">13.2. </span>Der LIEFERANT verpflichtet
          sich, die Logistikabteilung von BOSCH über den Lieferstatus in Kenntnis zu setzen; insbesondere informiert der
          LIEFERANT BOSCH so früh wie möglich über Risiken in Bezug auf die rechtzeitige Lieferung.&nbsp;</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">13.3. </span>Der LIEFERANT ist
          verpflichtet, die erforderlichen Kapazitäten für die Lieferung der Jahresmengen bereitzuhalten und BOSCH unter
          Beachtung der Abrufe zu beliefern.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">13.4. </span>Der LIEFERANT stellt durch
          geeignete Maßnahmen nach bestem Wissen und Gewissen sicher, dass die ununterbrochene Belieferung von BOSCH mit
          Vertragsprodukten auch bei unvorhersehbaren Ereignissen, wie z. B. Überschwemmungen, Bränden oder Explosionen,
          sichergestellt ist.&nbsp;</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">13.5. </span>Weitere Einzelheiten sind im
          „Lieferantenhandbuch Logistik“ von BOSCH mit Stand 04/2024 (nachfolgend <strong>„Lieferantenhandbuch
            Logistik“</strong> genannt) oder in hiervon abweichenden Logistikkonzepten (z. B. Konsignationslager,
          Transport Management Center (TMC) usw.) vereinbart. Das Lieferantenhandbuch Logistik steht unter
          https://www.bosch.com/de/unternehmen/supply-chain/informationen-fuer-geschaeftspartner/#qualitaet-regelungen-und-standards
          zur Verfügung.<br>&nbsp;</p>
      </li>
    </ol>
  </li>
  <li data-text-block-id="10423" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">14. </span>Änderungen an den Lieferterminen
    </h3>
    <p style="text-align:justify;">Sofern nicht anders vereinbart, kann BOSCH den Liefertermin eines Abrufs verschieben,
      ohne dass eine Entschädigung fällig wird.&nbsp;<br>BOSCH ist außerdem berechtigt, alle Mengen zu stornieren, die
      einer Produktions- oder Materialfreigabe unterliegen. Im Falle einer Stornierung zahlt BOSCH nur dann eine
      Entschädigung, wenn keine entsprechenden Ersatzabrufe erteilt werden. Die Entschädigung beschränkt sich nach dem
      Ermessen von BOSCH auf (a) die Abnahme und Bezahlung oder (b) die Bezahlung der Entsorgungskosten einschließlich
      der Einkaufspreise für das Material, für das eine verbindliche Produktionsfreigabe oder Materialfreigabe erteilt
      wurde.&nbsp;<br>BOSCH zahlt nur dann eine Entschädigung, wenn der LIEFERANT nachweist, dass er weder die fertigen
      Produkte oder das Material anderweitig verwenden noch seine Bestellungen für das Material stornieren konnte. Bei
      Halbzeugen trägt BOSCH nur die anteiligen Kosten entsprechend dem Fertigungsstand. Der LIEFERANT ist verpflichtet,
      die im Falle einer Stornierung anfallenden Kosten so gering wie möglich zu halten.&nbsp;<br>&nbsp;</p>
  </li>
  <li data-text-block-id="10434" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">15. </span>Produktabkündigung</h3>
    <ol class="multi-level-list legal-list" style="list-style-type:none;">
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">15.1. </span>Beabsichtigt der LIEFERANT,
          die Produktion eines Vertragsprodukts, das BOSCH vom LIEFERANTEN bezogen hat, einzustellen oder das
          Vertragsprodukt so zu verändern, dass eine erneute Freigabe des Produkts bei BOSCH oder beim Kunden von BOSCH
          erforderlich wird, so hat der LIEFERANT die betreffenden BOSCH-Gesellschaften und -Werke, die das Produkt
          abrufen, unter Einhaltung von mindestens den nachstehend genannten Vorankündigungsfristen vor der
          beabsichtigten Einstellung der Produktion oder Veränderung des Vertragsprodukts folgendermaßen schriftlich zu
          informieren:<br>&nbsp;</p>
        <p style="text-align:justify;"><strong>nicht kundenspezifische Vertragsprodukte:</strong><br>vierundzwanzig (24)
          Monate vor Fertigungsauslauf/Änderung<br>&nbsp;</p>
        <p style="text-align:justify;"><strong>kundenspezifische Vertragsprodukte:</strong><br>sechsunddreißig (36)
          Monate vor Fertigungsauslauf/Änderung<br>&nbsp;</p>
        <p style="text-align:justify;">so dass BOSCH seinen Restbedarf in Auftrag geben kann und der LIEFERANT zur
          entsprechenden Lieferung verpflichtet ist.<br>&nbsp;</p>
        <p style="text-align:justify;">Die letzte Lieferung muss folgendermaßen erfolgen:<br>&nbsp;</p>
        <p style="text-align:justify;"><strong>Für nicht kundenspezifische
            Vertragsprodukte:&nbsp;</strong><br>achtundvierzig (48) Monate nach Mitteilung der Abkündigung.<br>&nbsp;
        </p>
        <p style="text-align:justify;"><strong>Für kundenspezifische Vertragsprodukte:</strong><br>sechzig (60) Monate
          nach Mitteilung der Abkündigung.<br>&nbsp;</p>
        <p style="text-align:justify;">Diese Regelung gilt entsprechend bei Kündigung dieses Rahmenvertrags. Für die
          Lieferung des Restbedarfs gelten die Bedingungen des Rahmenvertrags auch nach der Kündigung fort.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">15.2. </span>Bei Zustimmung von BOSCH kann
          der LIEFERANT alternativ in Technik, Qualität und Preis vergleichbare Erzeugnisse unter Berücksichtigung der
          Freigabe-Erfordernisse vorschlagen. Die Kosten einer etwaigen erneuten Freigabe sind vom LIEFERANTEN zu
          übernehmen.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">15.3. </span>Die Möglichkeit einer
          Produktabkündigung besteht nicht für die Dauer eines Liefervertrages und für den Fall, dass der LIEFERANT nach
          Ende der Serienproduktion zu einer Nachlieferung verpflichtet ist. Für die Dauer einer dem LIEFERANTEN
          mitgeteilten Serie ist eine Produktabkündigung nur unter den in Abschnitt 15.1 genannten Bedingungen
          möglich.<br>&nbsp;</p>
      </li>
    </ol>
  </li>
  <li data-text-block-id="10433" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">16. </span>Nachlieferverpflichtung</h3>
    <p style="text-align:justify;">Der LIEFERANT verpflichtet sich, BOSCH für einen Zeitraum von fünfzehn (15) Jahren
      nach Beendigung der Lieferungen in der laufenden Serie mit Vertragsprodukten zu angemessenen Bedingungen zu
      beliefern. Diese Verpflichtung besteht auch nach Beendigung des Rahmenvertrages fort.<br>&nbsp;</p>
  </li>
  <li data-text-block-id="10440" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">17. </span>Wettbewerbsfähigkeit</h3>
    <ol class="multi-level-list legal-list" style="list-style-type:none;">
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">17.1. </span>BOSCH und der LIEFERANT
          vereinbaren, dass beide Vertragspartner alle erforderlichen Maßnahmen ergreifen werden, um die
          Wettbewerbsfähigkeit der Vertragsprodukte zu erhalten.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">17.2. </span>Die Technologie, die
          Qualität, der Preis und, sofern zutreffend, die Lieferung der Vertragsprodukte müssen mindestens denen
          vergleichbarer Produkte von Wettbewerbern entsprechen und den Anforderungen von BOSCH genügen.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">17.3. </span>Für den Fall, dass
          vergleichbare Produkte von Dritten zu einem günstigeren Preis angeboten werden, wird BOSCH den LIEFERANTEN
          hiervon schriftlich in Kenntnis setzen und ihm eine angemessene Frist (höchstens sechs (6) Monate) einräumen,
          um die volle Wettbewerbsfähigkeit wiederherzustellen.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">17.4. </span>Der LIEFERANT wird
          unverzüglich einen Maßnahmenplan zur Wiederherstellung der Wettbewerbsfähigkeit erstellen und BOSCH vorlegen.
          In diesem Maßnahmenplan muss auch die Kostenwirksamkeit jeder einzelnen Maßnahme angegeben werden. BOSCH
          verpflichtet sich, den Plan zu überprüfen und den LIEFERANTEN auf mögliche Verbesserungsmöglichkeiten
          hinzuweisen und ihn bei seiner Umsetzung zu unterstützen. Eventuell erforderliche Probeläufe und Freigaben
          sind von BOSCH auf Kosten des LIEFERANTEN unverzüglich durchzuführen.<br>&nbsp;</p>
      </li>
    </ol>
  </li>
  <li data-text-block-id="10425" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">18. </span>Aufzeigen von
      Verbesserungspotenzial</h3>
    <p style="text-align:justify;">Beide Vertragspartner streben eine Optimierung der bestehenden Prozesse im Sinne des
      KVP (Kontinuierlicher Verbesserungsprozess) an und beschließen, kontinuierlich an der Verbesserung der Qualität
      des Vertragsprodukts und der Logistik zu arbeiten. In Bezug auf die Vertragsprodukte verpflichtet sich der
      LIEFERANT, Möglichkeiten zur Kostensenkung, Qualitätssteigerung und Verbesserung der Verarbeitung der gelieferten
      Produkte aufzuzeigen. Der LIEFERANT verpflichtet sich, von BOSCH aufgezeigte Verbesserungsmöglichkeiten (z. B. im
      Rahmen des BOSCH-Lieferantenentwicklungsprogramms) aufzugreifen und in Abstimmung mit BOSCH aktiv umzusetzen. Alle
      Verbesserungen werden bei den Preisen berücksichtigt.<br>&nbsp;</p>
  </li>
  <li data-text-block-id="10442" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">19. </span>Verbesserungen und Erfindungen
    </h3>
    <ol class="multi-level-list legal-list" style="list-style-type:none;">
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">19.1. </span>Alle Verbesserungen und
          Erfindungen, gleichgültig ob sie schutzrechtsfähig sind oder nicht, die in Ausübung der Verpflichtungen aus
          diesem Vertrag von einem Vertragspartner erzielt werden, stehen allein diesem Vertragspartner zu.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">19.2. </span>Alle Verbesserungen und
          Erfindungen, gleichgültig ob sie schutzrechtsfähig sind oder nicht, die in Ausübung der Verpflichtungen aus
          diesem Vertrag von den Vertragspartnern gemeinsam erzielt werden, stehen den Vertragspartnern gemeinsam zu.
          Verbesserungen und Erfindungen werden als gemeinsam erzielt angesehen, wenn Mitarbeiter des LIEFERANTEN und
          von BOSCH zur Entwicklungsarbeit für die Verbesserung oder Erfindung Beiträge geleistet haben und der Beitrag
          im Verhältnis zum Beitrag des anderen Vertragspartners nicht unbedeutend ist.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">19.3. </span>Bei gemeinsamen
          Verbesserungen und Erfindungen legen die Vertragspartner gemeinsam fest, (1) ob ein Schutzrecht angemeldet
          werden soll, (2) welcher Vertragspartner diese Anmeldung vornimmt und (3) die Staaten, in denen eine solche
          Anmeldung erfolgen soll. Die Kosten für die Anmeldung und Aufrechterhaltung der Schutzrechte tragen die
          Vertragspartner zu gleichen Teilen. Falls ein Vertragspartner oder ein mit diesem verbundenes Unternehmen von
          einem Schutzrecht Gebrauch machen sollte, sind an den anderen Vertragspartner keine Zahlungen zu leisten.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">19.4. </span>Die Vergabe einer Lizenz an
          gemeinsamen Verbesserungen oder Erfindungen an Dritte, die keine verbundenen Unternehmen sind, bedarf der
          vorherigen schriftlichen Zustimmung durch beide Vertragspartner.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">19.5. </span>Falls ein Vertragspartner
          nicht oder nicht länger an der Begründung oder Aufrechterhaltung von Schutzrechten an gemeinsamen
          Verbesserungen oder Erfindungen interessiert ist, geht das Schutzrecht auf den anderen Vertragspartner über;
          der erstgenannte Vertragspartner behält jedoch für sich und die mit ihm verbundenen Unternehmen das kostenlose
          und zeitlich unbegrenzte Nutzungsrecht an dem Schutzrecht. Dasselbe gilt, falls ein Vertragspartner nicht oder
          nicht länger bereit ist, ein Schutzrecht in einem bestimmten Land oder bestimmten Ländern zu begründen oder
          aufrechtzuerhalten.<br>&nbsp;</p>
      </li>
    </ol>
  </li>
  <li data-text-block-id="10444" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">20. </span>Lieferungen nach Nordamerika</h3>
    <p style="text-align:justify;">Aufgrund der besonderen Anforderungen und Bedürfnisse des nordamerikanischen Marktes,
      einschließlich der Anforderungen der in dieser Region ansässigen Automobilhersteller, gelten für die Einkäufe in
      Nordamerika die US-amerikanischen Geschäftsbedingungen von Bosch (im Folgenden als „US POTC“ bezeichnet), die
      unter
      https://www.bosch.com/company/supply-chain/information-for-business-partners/#purchasing-terms-and-conditions
      abrufbar sind. Für den Fall, dass es Widersprüche zwischen den Dokumenten gibt, haben die US POTC Vorrang vor
      diesem Rahmenvertrag.<br>&nbsp;</p>
  </li>
  <li data-text-block-id="10446" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">21. </span>Umsatzanteil</h3>
    <p style="text-align:justify;">Der LIEFERANT unterrichtet BOSCH, sofern die Lieferungen an die Bosch-Gruppe
      insgesamt 50 % des Gesamtumsatzes des LIEFERANTEN übersteigen.<br>&nbsp;</p>
  </li>
  <li data-text-block-id="10448" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">22. </span>Laufzeit und Kündigung des
      Rahmenvertrags und Kündigung von Lieferverträgen</h3>
    <ol class="multi-level-list legal-list" style="list-style-type:none;">
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">22.1. </span>Dieser Rahmenvertrag tritt am
          <mark class="marker-green">TT/MM/JJJJ</mark> in Kraft und gilt für einen unbestimmten Zeitraum. Er kann von
          jedem Vertragspartner mit einer Frist von sechs (6) Monaten zum Ende eines Kalenderjahres gekündigt
          werden.&nbsp;
        </p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">22.2. </span>Ungeachtet der Beendigung
          dieses Rahmenvertrags gelten die Bestimmungen dieses Rahmenvertrags weiterhin für die vor der Beendigung
          dieses Rahmenvertrags abgeschlossenen Lieferverträge bis zu deren vollständiger Abwicklung. Des Weiteren hat
          der LIEFERANT die Verpflichtung, Bestellungen unter den zum Zeitpunkt der Beendigung noch laufenden
          Abschlüssen bis zum Ende deren jeweiliger Laufzeit entgegenzunehmen und weiterhin zu den Bedingungen dieses
          Rahmenvertrages abzuwickeln.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">22.3. </span>Das Recht zur Kündigung aus
          wichtigem Grund bleibt hiervon unberührt.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">22.4. </span>In folgenden Fällen steht
          BOSCH zusätzlich jeweils das Recht einer fristlosen Kündigung mit sofortiger Wirkung des Rahmenvertrags
          und/oder Liefervertrags (ganz oder teilweise) des jeweils betroffenen Vertragsprodukts zu</p>
        <ol class="multi-level-list legal-list" style="list-style-type:none;">
          <li>
            <p style="text-align:justify;"><span class="multi-level-list__marker">22.4.1. </span>Wenn der LIEFERANT die
              Wettbewerbsfähigkeit nach Abschnitt 147 (Wettbewerbsfähigkeit) nicht rechtzeitig wiederhergestellt hat
              (innerhalb der von BOSCH gesetzten Frist nach Abschnitt 17.3).</p>
          </li>
          <li>
            <p style="text-align:justify;"><span class="multi-level-list__marker">22.4.2. </span>Sofern konkrete
              Anhaltspunkte dafür vorliegen, dass der LIEFERANT mit hoher Wahrscheinlichkeit nicht in der Lage sein
              wird, vertragliche Verpflichtungen, auf deren mangelfreie, vollständige und rechtzeitige Erfüllung BOSCH
              angewiesen ist, in der geschuldeten Weise und rechtzeitig zu erfüllen, es sei denn, der LIEFERANT war sich
              bei Abschluss des Rahmenvertrags oder Liefervertrags der Bedeutung der Verpflichtung nicht bewusst.</p>
          </li>
          <li>
            <p style="text-align:justify;"><span class="multi-level-list__marker">22.4.3. </span>Der LIEFERANT versäumt,
              eine wesentliche Vertragspflicht zu erfüllen, und dieser Verstoß wird trotz einer schriftlichen Abmahnung
              nicht innerhalb einer Frist von dreißig (30) Tagen behoben.</p>
          </li>
          <li>
            <p style="text-align:justify;"><span class="multi-level-list__marker">22.4.4. </span>Der LIEFERANT erfüllt
              eine wesentliche Vertragspflicht nicht und es ist nicht möglich, diesen Verstoß zu beheben.</p>
          </li>
          <li>
            <p style="text-align:justify;"><span class="multi-level-list__marker">22.4.5. </span>Wenn eine wesentliche
              Verschlechterung der finanziellen Verhältnisse des LIEFERANTEN eintritt oder einzutreten droht und dadurch
              die Erfüllung einer Lieferverpflichtung gegenüber BOSCH gefährdet ist.</p>
          </li>
          <li>
            <p style="text-align:justify;"><span class="multi-level-list__marker">22.4.6. </span>Wenn der unter 12.2
              (Versicherung) vereinbarte Versicherungsschutz für den LIEFERANTEN ausläuft.</p>
          </li>
          <li>
            <p style="text-align:justify;"><span class="multi-level-list__marker">22.4.7. </span>Wenn ein Dritter
              entweder direkt oder indirekt die Mehrheit der Stimmrechte, die Mehrheit der Anteile oder die Mehrheit des
              Gesellschaftsvermögens des LIEFERANTEN erwirbt.</p>
          </li>
        </ol>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">22.5. </span>Ansprüche des LIEFERANTEN auf
          Schadensersatz aufgrund einer Kündigung durch BOSCH sind ausgeschlossen.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">22.6. </span>Die Kündigung muss
          schriftlich erfolgen.&nbsp;<br>&nbsp;</p>
      </li>
    </ol>
  </li>
  <li data-text-block-id="10450" data-type="text_block">
    <h3 style="text-align:justify;"><span class="multi-level-list__marker">23. </span>Schlussbestimmungen</h3>
    <ol class="multi-level-list legal-list" style="list-style-type:none;">
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">23.1. </span>Änderungen oder Ergänzungen
          dieses Rahmenvertrags und der Lieferverträge bedürfen der Schriftform; sie können aber auch über eine
          elektronische Plattform (z. B. SupplyOn) erfolgen. Dies gilt entsprechend für dieses Erfordernis der
          Schriftform. Die Schriftform kann durch die elektronische Form mit elektronischer Signatur, z. B. über
          DocuSign oder einen vergleichbaren Standard, ersetzt werden.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">23.2. </span>Sollten Bestimmungen dieses
          Rahmenvertrags und/oder eines Liefervertrags ganz oder teilweise unwirksam sein oder werden, wird davon die
          Wirksamkeit der übrigen Bestimmungen des Rahmenvertrags nicht berührt. In diesem Fall wird die betreffende
          Bestimmung durch eine Bestimmung ersetzt, deren Inhalt dem wirtschaftlichen Inhalt der ursprünglichen
          Bestimmung am nächsten kommt. Dies gilt entsprechend für Vertragslücken.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">23.3. </span>Die Abtretung von Rechten und
          die Übertragung von Verpflichtungen aus diesem Rahmenvertrag bedürfen der vorherigen schriftlichen Zustimmung
          des anderen Vertragspartners.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">23.4. </span>BOSCH hat das Recht, die
          Bestimmungen der Einkaufsbedingungen und des Lieferantenhandbuchs Logistik mit einer Vorankündigung von sechs
          Wochen zu ändern. BOSCH teilt dem LIEFERANTEN die jeweilige Änderung in Textform (z. B. per E-Mail) mit. Der
          LIEFERANT wird gleichzeitig darauf hingewiesen, dass die jeweilige Änderung Bestandteil des zwischen den
          Vertragspartnern bestehenden Rahmenvertrags wird, sofern der LIEFERANT dieser Änderung nicht innerhalb einer
          Frist von sechs Wochen nach Mitteilung der Änderung in Textform (z. B. per E-Mail) widerspricht.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">23.5. </span>Dieser Rahmenvertrag und alle
          Lieferverträge unter diesem Rahmenvertrag sowie alle sich daraus ergebenden Streitigkeiten unterliegen dem
          Recht der Bundesrepublik Deutschland unter Ausschluss des Kollisionsrechts und des Übereinkommens der
          Vereinten Nationen über Verträge über den internationalen Warenkauf (CISG).</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">23.6. </span>Alle Streitigkeiten, die sich
          aus oder im Zusammenhang mit diesem Rahmenvertrag ergeben, werden endgültig und ausschließlich nach der
          Schiedsgerichtsordnung der Internationalen Handelskammer (ICC-Schiedsgerichtsordnung) von einem oder mehreren
          gemäß dieser Ordnung ernannten Schiedsrichtern in der zum Zeitpunkt des Beginns des Schiedsverfahrens
          geltenden Fassung entschieden. Besteht das Schiedsgericht aus drei Schiedsrichtern, ernennen die von dem
          Vertragspartner benannten (oder gegebenenfalls im Namen eines Vertragspartners ernannten) Schiedsrichter
          gemeinsam den Vorsitzenden des Schiedsgerichts innerhalb von 21 Tagen nach der Bestätigung oder Ernennung der
          von dem Vertragspartner benannten (oder ernannten) Schiedsrichter. Ungeachtet des Vorstehenden hat jeder
          Vertragspartner das Recht, bei jedem zuständigen Gericht einen Antrag auf einstweiligen Rechtsschutz zu
          stellen.&nbsp;<br>Der Gerichtsstand für das Schiedsverfahren ist Stuttgart, Deutschland. Die Sprache des
          Schiedsverfahrens ist Englisch. Deutsche Dokumente dürfen jedoch in ihrer Originalsprache eingereicht
          werden.&nbsp;<br>Die Pflicht zur Vorlage von Dokumenten beschränkt sich auf Dokumente, auf die sich jeder
          Vertragspartner in seinen Schriftsätzen bezieht. Die Vertragspartner vereinbaren, dass es keine weitere
          Beweisaufnahme in Form einer sog. „Discovery“ zwischen den Vertragspartnern geben wird. Die Parteien
          verpflichten sich, alle Informationen im Zusammenhang mit dem Schiedsverfahren, einschließlich des Bestehens
          des Schiedsverfahrens, des Ablaufs des Schiedsverfahrens, der Schriftsätze der Parteien und der Entscheidungen
          des Schiedsgerichts, einschließlich der Schiedssprüche, vertraulich zu behandeln, es sei denn, eine
          Offenlegung ist nach geltendem Recht erforderlich und sofern die Informationen nicht bereits öffentlich
          bekannt sind. Kein Schiedsspruch und keine verfahrensrechtliche Anordnung, die im Rahmen des
          Schiedsgerichtsverfahrens getroffen werden, werden öffentlich gemacht. Vorbehaltlich einer anderen
          Entscheidung des Schiedsgerichts oder eines zuständigen Gerichts führen die streitenden Vertragspartner die
          von der Streitigkeit betroffenen Verträge weiter aus.<br>Der Schiedsspruch ist endgültig und für die
          Vertragspartner bindend.</p>
      </li>
      <li>
        <p style="text-align:justify;"><span class="multi-level-list__marker">23.7. </span>Dieser Rahmenvertrag wurde
          von den Parteien in englischer Sprache ausgehandelt und unterzeichnet. Sollte eine Übersetzung dieses
          Rahmenvertrags aus Gründen der Zweckmäßigkeit oder zu anderen Zwecken angefertigt werden, so sind die
          Bestimmungen der englischen Fassung maßgebend.<br>&nbsp;</p>
      </li>
    </ol>
  </li>
</ol>
<section class="simple-box">
  <div class="simple-box-description">
    <div class="simple-box group text_block editor__text-block-box" data-type="text_block" data-text-block-id="10453">
      <p style="text-align:justify;"><strong>Anlagen</strong><br>&nbsp;</p>
      <p style="margin-left:40px;text-align:justify;">Anlage 1: Einkaufsbedingungen von Bosch<br>Anlage 2:
        Lieferantenhandbuchs Logistik<br>[•]</p>
      <p style="margin-left:40px;text-align:justify;"><br><br><br><br><br>&nbsp;</p>
    </div>
  </div>
</section>
<section class="simple-box">
  <div class="simple-box-description">
    <div class="simple-box group text_block editor__text-block-box" data-type="text_block" data-text-block-id="10457">
      <p style="text-align:justify;"><mark class="marker-green"><strong>[Unternehmen
            BOSCH]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[LIEFERANT]</strong></mark></p>
      <p style="text-align:justify;"><br><br><br><u>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</u> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<u>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp;</u><br><mark class="marker-green">Unterschrift, Name, Abteilung,
          Datum&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unterschrift, Name, Abteilung,
          Datum</mark></p>
      <p style="text-align:justify;"><br>&nbsp;</p>
      <p style="text-align:justify;"><u>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</u> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<u> &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</u>
      </p>
      <p style="text-align:justify;"><mark class="marker-green">Unterschrift, Name, Abteilung,
          Datum&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unterschrift, Name, Abteilung,
          Datum</mark><br>&nbsp;</p>
    </div>
  </div>
</section>
`,qe=`<?xml encoding="utf-8" ?>
<html>
<h1 style="text-align: center"><span lang="de-DE" style=""><strong>Rahmenvertrag</strong></span></h1>
<p style="text-align: center"><span lang="de-DE">&nbsp;</span></p>
<p style="text-align: center"><span lang="de-DE">&nbsp;</span></p>
<p style="text-align: center"><span lang="de-DE" style="">zwischen</span></p>
<p style="text-align: center"><span lang="de-DE">&nbsp;</span></p>
<p style="text-align: center"><span lang="de-DE">&nbsp;</span></p>
<p style="text-align: center"><span lang="de-DE" style=""><strong>[sefgawref]</strong></span></p>
<p style="text-align: center"><span lang="de-DE" style="">[wREGWergf]</span></p>
<p style="text-align: center"><span lang="de-DE">&nbsp;</span></p>
<p style="text-align: center"><span lang="de-DE" style="">- im Folgenden &bdquo;<strong>BOSCH</strong>&ldquo; genannt
    -</span></p>
<p style="text-align: center"><span lang="de-DE">&nbsp;</span></p>
<p style="text-align: center"><span lang="de-DE" style="">und</span></p>
<p style="text-align: center"><span lang="de-DE">&nbsp;</span></p>
<p style="text-align: center"><span lang="de-DE" style=""><strong>[</strong></span><span lang="de-DE"
    style="background-color: #00ff00"><strong>LIEFERANT</strong></span><span lang="de-DE"
    style=""><strong>]</strong></span></p>
<p style="text-align: center"><span lang="de-DE" style="">[</span><span lang="de-DE"
    style="background-color: #00ff00">Anschrift</span><span lang="de-DE" style="">]</span></p>
<p style="text-align: center"><span lang="de-DE">&nbsp;</span></p>
<p style="text-align: center"><span lang="de-DE" style="">- im Folgenden der &bdquo;<strong>LIEFERANT</strong>&ldquo;
    genannt -</span></p>
<p style="text-align: center"><span lang="de-DE">&nbsp;</span></p>
<p style="text-align: center"><span lang="de-DE" style="">- auch namens und im Auftrag ihrer Tochtergesellschaften und
    verbundenen Unternehmen (wie unten definiert) -</span></p>
<p style="text-align: center; margin-left: 4.13px"><span lang="de-DE">&nbsp;</span></p>
<p style=""><span lang="de-DE">&nbsp;</span></p>
<p style=""><span lang="de-DE">&nbsp;</span></p>
<ol class="multi-level-list legal-list">
  <li><span class="multi-level-list__marker">1.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Vertragsgegenstand und
          Vertragspartner</strong></span></p>
    <ol class="multi-level-list legal-list">
      <li><span class="multi-level-list__marker">1.1.</span>
        <p style="text-align: justify"><a id="_Ref31957170" name="_Ref31957170"></a><span lang="de-DE" style="">Dieser
            Vertrag </span><a id="_Hlk64273480" name="_Hlk64273480"></a><span lang="de-DE" style="">(im Folgenden
            &bdquo;<strong>Rahmenvertrag</strong>&ldquo; genannt) regelt die Vertragsbedingungen f&uuml;r die Lieferung
            von Produkten (im Folgenden &bdquo;<strong>Vertragsprodukte</strong>&ldquo; genannt), die der LIEFERANT und
            seine verbundenen Unternehmen an BOSCH und seine verbundenen Unternehmen liefern. Ein
            &bdquo;<strong>verbundenes Unternehmen</strong>&ldquo; eines Vertragspartners ist jede juristische Person,
            die von einem Vertragspartner kontrolliert wird oder die ein Vertragspartner kontrolliert oder die unter
            gemeinsamer Kontrolle mit einem Vertragspartner steht. &bdquo;<strong>Kontrolle</strong>&ldquo; </span><span
            lang="de-DE" style="color: #000000">liegt vor, wenn w&auml;hrend der Laufzeit dieses Vertrages mehr als
            50&nbsp;% (f&uuml;nfzig Prozent) </span><span lang="de-DE" style="">der Stimmrechtsanteile </span><span
            lang="de-DE" style="color: #000000">direkt oder indirekt</span><span lang="de-DE" style=""> von einer
            juristischen Person gehalten werden oder wenn die Leitung und die Gesch&auml;ftspolitik dieser juristischen
            Person direkt oder indirekt durch Kapitalbeteiligung, einen Vertrag oder durch andere Mittel kontrolliert
            werden</span><span lang="de-DE" style="color: #000000">.</span><span lang="de-DE" style=""> Eine solche
            juristische Person gilt nur so lange als &bdquo;verbundenes Unternehmen&ldquo; des betreffenden
            Vertragspartners, wie diese Voraussetzungen erf&uuml;llt sind. </span><span lang="de-DE"
            style="background-color: #00ff00">Dieser Rahmenvertrag ersetzt den zwischen BOSCH und dem LIEFERANTEN
            geschlossenen Rahmenvertrag vom []</span><span lang="de-DE" style="">.</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.2.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Dieser Rahmenvertrag gilt f&uuml;r vereinbarte
            Liefervertr&auml;ge wie z.&nbsp;B. Preisvereinbarungen oder mehrj&auml;hrige Vertr&auml;ge (im Folgenden
            &bdquo;<strong>Liefervertr&auml;ge</strong>&ldquo; genannt) und f&uuml;r die danach oder nach anderen
            vereinbarten Logistikkonzepten (z.&nbsp;B. Kanban oder VMI) erstellten Auftr&auml;ge und Lieferabrufe sowie
            f&uuml;r alle darunter fallenden Lieferungen.</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.3.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">BOSCH und seine verbundenen Unternehmen sind
            berechtigt, auf Grundlage dieses Rahmenvertrags Liefervertr&auml;ge mit dem LIEFERANTEN und dessen
            verbundenen Unternehmen abzuschlie&szlig;en. Liefervertr&auml;ge m&uuml;ssen im Namen und auf Rechnung des
            jeweiligen Vertragspartners gem&auml;&szlig; den Bestimmungen dieses Rahmenvertrags geschlossen werden. Jede
            Bezugnahme auf den &bdquo;LIEFERANTEN&ldquo; hierin ist als Bezugnahme auf das jeweils betroffene verbundene
            Unternehmen des LIEFERANTEN und jede Bezugnahme auf &bdquo;BOSCH&ldquo; ist als Bezugnahme auf das jeweils
            betroffene verbundene Unternehmen von BOSCH zu verstehen.</span><span style="">&nbsp;</span></p>
        <p style="text-align: justify; text-indent: -37.8px"><span lang="de-DE">&nbsp;</span></p>
      </li>
    </ol>
  </li>
  <li><span class="multi-level-list__marker">2.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Grundlage des Rahmenvertrags und Rangfolge der
          Vertragsbedingungen</strong></span></p>
    <p style="text-align: justify"><span lang="de-DE" style="">Es gelten die Einkaufsbedingungen der Robert Bosch GmbH
        (Anlage&nbsp;1), soweit in diesem Rahmenvertrag nichts anderes festgelegt ist. Projektspezifische Bestimmungen,
        wie zum Beispiel Zahlungsbedingungen, werden in den jeweiligen Liefervertr&auml;gen vereinbart. Die Allgemeinen
        Gesch&auml;ftsbedingungen des LIEFERANTEN werden nicht akzeptiert.</span></p>
    <p style="text-align: justify"><span lang="de-DE">&nbsp;</span></p>
  </li>
  <li><span class="multi-level-list__marker">3.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Abrufe</strong></span></p>
    <ol class="multi-level-list legal-list">
      <li><span class="multi-level-list__marker">3.1.</span>
        <p style="text-align: justify"><a id="_Hlk141778820" name="_Hlk141778820"></a><span lang="de-DE" style="">Die
            Lieferung von Vertragsprodukten, die im Rahmen eines Liefervertrags ben&ouml;tigt werden, erfolgt
            ausschlie&szlig;lich &uuml;ber Abrufe, es sei denn, es wurden hiervon abweichende Logistikkonzepte
            vereinbart (im Folgenden &bdquo;Abrufe&ldquo; genannt). Die Abrufe werden in der Regel rollierend erneuert
            und umfassen eine Produktionsfreigabe von vier (4) Wochen und die Einwilligung von BOSCH zur Bestellung des
            ben&ouml;tigten Ausgangsmaterials (Materialfreigabe) von weiteren vier (4) Wochen. Der im Lieferabruf
            angegebene Folgezeitraum stellt eine unverbindliche Prognose dar, die eine Just-in-Time-Lieferung an BOSCH
            sicherstellen und es dem LIEFERANTEN erm&ouml;glichen muss, seine Produktionskapazit&auml;t entsprechend zu
            planen.</span></p>
      </li>
      <li><span class="multi-level-list__marker">3.2.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Der Abruf gilt als vom LIEFERANTEN angenommen, wenn
            der LIEFERANT nicht innerhalb von zwei (2) Arbeitstagen nach Erhalt schriftlich widerspricht. Ein
            Widerspruch des LIEFERANTEN im Zusammenhang mit einem Abruf ist nur f&uuml;r die Wochen eines Abrufs
            zul&auml;ssig, f&uuml;r die eine Produktionsfreigabe oder eine Materialfreigabe vorliegt, und nur dann, wenn
            die f&uuml;r diese Woche angegebene Menge die f&uuml;r diese Woche im vorherigen Abruf angegebene Menge um
            mehr als 20&nbsp;% &uuml;bersteigt</span></p>
      </li>
      <li><span class="multi-level-list__marker">3.3.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Aus Gr&uuml;nden der Klarheit bleibt im Falle eines
            Widerspruchs, wie oben beschrieben, der jeweilige Abruf bis zu der im vorherigen Abruf angegebenen Menge
            zuz&uuml;glich 20&nbsp;% oder, im Falle einer Vereinbarung &uuml;ber eine Kapazit&auml;tsreservierung, bis
            zu dem vertraglich geschuldeten Betrag wirksam.</span></p>
      </li>
      <li><span class="multi-level-list__marker">3.4.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Der LIEFERANT ist verpflichtet, BOSCH umgehend zu
            informieren, insbesondere die im Liefervertrag angegebenen Werke und die Einkaufsabteilung, falls der
            LIEFERANT feststellt, dass seine Produktionskapazit&auml;t an mangelfreien Vertragsprodukten nicht
            ausreicht, um etwaige Abrufe zu erf&uuml;llen. Der LIEFERANT hat die gleiche Informationspflicht, wenn der
            LIEFERANT Ma&szlig;nahmen ergreifen muss, um die Anforderungen zu erf&uuml;llen (z.&nbsp;B. Einf&uuml;hrung
            einer zus&auml;tzlichen Schicht, &Uuml;berstunden). Diese Informationen entbinden den LIEFERANTEN jedoch
            nicht von seiner Lieferpflicht.</span></p>
      </li>
    </ol>
  </li>
</ol>
<p style=""><span lang="de-DE">&nbsp;</span></p>
<ol class="multi-level-list legal-list" start="4">
  <li><span class="multi-level-list__marker">1.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>EDI-F&auml;higkeit</strong></span></p>
    <p style="text-align: justify"><span lang="de-DE" style="">Gesch&auml;ftsprozesse (Abrufe, Lieferavis, Daten zur
        Lieferung und zum Termin, Gutschriftsanzeigen, Rechnung usw.) m&uuml;ssen zwischen dem LIEFERANTEN und BOSCH
        elektronisch abgewickelt werden. Der LIEFERANT muss bei der Erstellung der elektronischen Kataloge und, sofern
        erforderlich, bei der Herstellung der erforderlichen Verbindung zu den Systemen von BOSCH aktiv mitwirken und
        Unterst&uuml;tzung leisten. Der LIEFERANT muss BOSCH mindestens die Liefer- und Transportdaten &uuml;bermitteln.
        Es finden die in der Automobilbranche &uuml;blichen EDI-Standards Anwendung (EDIFACT).</span></p>
    <p style="text-align: justify"><span lang="de-DE">&nbsp;</span></p>
  </li>
  <li><span class="multi-level-list__marker">2.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Produktkonformit&auml;t,
          Qualit&auml;tssicherung</strong></span></p>
    <ol class="multi-level-list legal-list">
      <li><span class="multi-level-list__marker">2.1.</span>
        <p style="text-align: justify"><a id="_Hlk141778898" name="_Hlk141778898"></a><span lang="de-DE" style="">Der
            LIEFERANT muss sicherstellen, dass die Vertragsprodukte (einschlie&szlig;lich ihrer Verpackung) f&uuml;r den
            vertraglichen Zweck geeignet sind, dem Stand der Technik und den &uuml;blichen Vorschriften der
            Berufsverb&auml;nde sowie allen anwendbaren Gesetzen entsprechen. Die Spezifikationen oder Standards von
            BOSCH entbinden den LIEFERANTEN nicht davon, die Verantwortung f&uuml;r die gesetzlichen Anforderungen an
            seine Vertragsprodukte zu &uuml;bernehmen (z.&nbsp;B. durch die Einholung einer Lizenz).</span></p>
      </li>
      <li><span class="multi-level-list__marker">2.2.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Wenn BOSCH das Vertragsprodukt vollst&auml;ndig
            selbst entwickelt hat und der LIEFERANT es unver&auml;ndert nach den Spezifikationen von BOSCH herstellt,
            muss BOSCH daf&uuml;r Sorge tragen, dass seine Spezifikationen den geltenden gesetzlichen Bestimmungen in
            Bezug auf die Qualit&auml;t des Vertragsprodukts entsprechen. Erkennt der LIEFERANT, dass Spezifikationen
            von BOSCH den geltenden gesetzlichen Bestimmungen entgegenstehen, muss er BOSCH unverz&uuml;glich
            dar&uuml;ber informieren. Informiert der LIEFERANT BOSCH trotz Kenntnis nicht unverz&uuml;glich oder erkennt
            er fahrl&auml;ssig nicht, dass die Vertragsprodukte nicht den anwendbaren gesetzlichen Bestimmungen
            entsprechen, so haftet der LIEFERANT f&uuml;r diese Nichteinhaltung.</span><span style="">&nbsp;</span></p>
      </li>
      <li><span class="multi-level-list__marker">2.3.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Ansonsten gilt die separat abgeschlossene
            Vereinbarung zur Qualit&auml;t und der gesellschaftlichen Verantwortung von Unternehmen (QAA).</span></p>
        <p style="text-align: justify; text-indent: -37.8px"><span lang="de-DE">&nbsp;</span></p>
      </li>
    </ol>
  </li>
  <li><span class="multi-level-list__marker">3.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Verg&uuml;tung</strong></span></p>
    <ol class="multi-level-list legal-list">
      <li><span class="multi-level-list__marker">3.1.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Die Preise der Vertragsprodukte m&uuml;ssen im
            jeweiligen Liefervertrag festgelegt werden und sind &ndash; vorbehaltlich des Abschnitts&nbsp;18 (Aufzeigen
            von Verbesserungspotenzial, Erfindungen) &ndash; f&uuml;r alle innerhalb der Laufzeit des Liefervertrags
            gelieferten Vertragsprodukte verbindlich.</span></p>
      </li>
      <li><span class="multi-level-list__marker">3.2.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Sofern zum Ende der Laufzeit des jeweiligen
            Liefervertrages kein Anschlussliefervertrag vereinbart wurde, gelten bei entsprechenden Abrufen von BOSCH
            die Bedingungen des eingestellten Liefervertrages so lange weiter, bis ein Anschlussliefervertrag vorliegt.
            Nach Ablauf einer Dauer von maximal acht (8) Monaten nach Ende der Laufzeit gilt dies jedoch nur, wenn der
            LIEFERANT entsprechende Abrufe von BOSCH akzeptiert. Nach Ablauf der Dauer von acht (8) Monaten ist der
            LIEFERANT verpflichtet, die Vertragsprodukte zum Marktwert / zu angemessenen Preisen zu liefern.</span></p>
      </li>
    </ol>
  </li>
</ol>
<p><span lang="de-DE">&nbsp;</span></p>
<ol class="multi-level-list legal-list" start="7">
  <li><span class="multi-level-list__marker">1.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Zahlungsbedingungen und
          Rechnungsstellung</strong></span></p>
    <ol class="multi-level-list legal-list">
      <li><span class="multi-level-list__marker">1.1.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Sofern keine anderweitige Vereinbarung getroffen ist,
            erfolgt die Begleichung der Rechnung innerhalb 60 Tage nach Erhalt einer ordentlichen Rechnung an die von
            uns benannte Rechnungsadresse. Die Zahlung erfolgt unter Vorbehalt der Rechnungspr&uuml;fung sowie nach
            Eingang der Ware beziehungsweise Erbringung der Leistung.</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.2.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Sofern nicht anders vereinbart, ist der LIEFERANT
            verpflichtet, Rechnungen papierlos zu versenden. BOSCH setzt sich mit dem LIEFERANTEN in Verbindung, um ein
            geeignetes Verfahren zur &Uuml;bermittlung elektronischer Rechnungen zu vereinbaren.&nbsp;Die Rechnungen
            m&uuml;ssen eine entsprechende Abruf- oder Bestellreferenz von BOSCH enthalten. Die &uuml;bermittelten
            elektronischen Rechnungen m&uuml;ssen den vertraglichen, gesetzlichen und steuerlichen Anforderungen
            entsprechen, insbesondere denen des Umsatzsteuerrechts. Nicht elektronisch &uuml;bermittelte Rechnungen oder
            Rechnungen ohne ordnungsgem&auml;&szlig;e Referenz auf den Abruf oder die Bestellung k&ouml;nnen nicht
            bearbeitet werden und k&ouml;nnen abgelehnt werden. Dies kann zu Verz&ouml;gerungen in der Bearbeitungszeit
            f&uuml;hren. Im Falle der Ablehnung einer Rechnung beginnt die F&auml;lligkeit der Rechnung nach Erhalt
            einer korrigierten Rechnung.</span><span lang="de-DE" style="color: #1f497d">&nbsp;</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.3.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Die von BOSCH get&auml;tigten Zahlungen stellen in
            keiner Weise eine Anerkennung der Konformit&auml;t der Vertragsprodukte mit dem Rahmenvertrag und dem
            Liefervertrag dar.</span></p>
      </li>
    </ol>
  </li>
</ol>
<p><span lang="de-DE">&nbsp;</span></p>
<ol class="multi-level-list legal-list" start="8">
  <li><span class="multi-level-list__marker">1.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Gew&auml;hrleistung</strong></span></p>
    <ol class="multi-level-list legal-list">
      <li><span class="multi-level-list__marker">1.1.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Der LIEFERANT haftet f&uuml;r M&auml;ngel an den
            Vertragsprodukten f&uuml;r die Dauer von 60 (sechzig) Monaten ab dem Datum der Lieferung. Falls es
            dar&uuml;ber hinausgehende gesetzliche Verj&auml;hrungsfristen gibt, gelten diese l&auml;ngeren
            Verj&auml;hrungsfristen.</span><span style="">&nbsp;</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.2.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">F&uuml;r den Fall, dass der LIEFERANT
            Vertragsprodukte an ein Unternehmen der Bosch-Gruppe liefert und dieses Unternehmen sie anschlie&szlig;end
            an ein anderes Unternehmen der Bosch-Gruppe (&bdquo;Indirekter Abnehmer in der Bosch-Gruppe&ldquo;) liefert,
            haftet der LIEFERANT nach den Bestimmungen dieses Rahmenvertrags f&uuml;r M&auml;ngel an den
            Vertragsprodukten sowohl gegen&uuml;ber dem Unternehmen der Bosch-Gruppe, an das der LIEFERANT die
            Vertragsprodukte direkt geliefert hat, als auch gegen&uuml;ber den indirekten Abnehmern in der Bosch-Gruppe.
            In einem solchen Fall sind die betroffenen Bosch-Gesellschaften gesamtschuldnerische
            Gl&auml;ubiger.</span><span style="">&nbsp;</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.3.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Bei Beanstandungen muss der LIEFERANT
            unverz&uuml;glich alle erforderlich erscheinenden Untersuchungen durchf&uuml;hren und BOSCH
            unverz&uuml;glich &uuml;ber die Ursachen und Ma&szlig;nahmen zur Behebung der M&auml;ngel informieren. Der
            LIEFERANT ist verpflichtet, bei der Aufkl&auml;rung der Ursachen f&uuml;r die Beanstandungen und bei der
            Suche nach einer effizienten L&ouml;sung des Problems uneingeschr&auml;nkt mitzuwirken, auch wenn die
            Ursache der Beanstandungen zwischen den Vertragspartnern strittig ist.</span><span style="">&nbsp;</span>
        </p>
      </li>
      <li><span class="multi-level-list__marker">1.4.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Bei Nichteinhaltung der jeweils vereinbarten
            Qualit&auml;tskennwerte oder bei einer sonstigen nachweisbaren Beeintr&auml;chtigung der Qualit&auml;t der
            gelieferten Vertragsprodukte beh&auml;lt sich BOSCH ferner das Recht vor, die Abnahme der bereits
            verbindlich bestellten Mengen ganz oder teilweise auszusetzen, bis das geforderte Qualit&auml;tsniveau durch
            den LIEFERANTEN wieder sichergestellt ist. Der LIEFERANT ist nicht berechtigt, aus einer solchen Aussetzung
            Anspr&uuml;che gegen BOSCH abzuleiten.</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.5.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Soweit Kunden von BOSCH zur Feststellung und
            Abrechnung von Gew&auml;hrleistungsf&auml;llen ein markt&uuml;bliches Referenzverfahren in der
            Automobilindustrie oder ein &auml;hnliches branchen&uuml;bliches Verfahren anwenden und wenn sie ein solches
            Verfahren zur Geltendmachung von Kostenanspr&uuml;chen gegen BOSCH f&uuml;r M&auml;ngel an Produkten von
            BOSCH wegen M&auml;ngeln an Vertragsprodukten anwenden, ist der LIEFERANT verpflichtet, diese Kosten zu
            tragen.</span><span style="">&nbsp;</span></p>
      </li>
    </ol>
  </li>
</ol>
<p><span lang="de-DE">&nbsp;</span></p>
<ol class="multi-level-list legal-list" start="9">
  <li><span class="multi-level-list__marker">1.</span>
    <p style="text-align: justify"><a id="_Hlk141779401" name="_Hlk141779401"></a><span lang="de-DE"
        style=""><strong>Verarbeitbarkeit</strong></span></p>
    <p style="text-align: justify"><span lang="de-DE" style="">Soweit in den Spezifikationen nichts anderes vereinbart
        ist, gew&auml;hrleistet der LIEFERANT die Verarbeitbarkeit der gelieferten Vertragsprodukte f&uuml;r mindestens
        vierundzwanzig (24) Monate ab dem Datum der Lieferung an BOSCH.</span><span style="">&nbsp;</span></p>
    <p style="text-align: justify"><span lang="de-DE">&nbsp;</span></p>
  </li>
  <li><span class="multi-level-list__marker">2.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Inhaltsstoffe</strong></span></p>
    <p style="text-align: justify"><span lang="de-DE" style="">LIEFERANT ist verpflichtet, die Anforderungen der Bosch
        Norm N2580 einzuhalten und die Inhaltsstoffe der Vertragsprodukte gem&auml;&szlig; den Anforderungen der Bosch
        Norm N2580 anzugeben. Die aktuelle Version ist auf </span><a
        href="https://www.bosch.com/de/unternehmen/supply-chain/informationen-fuer-geschaeftspartner/"><span
          lang="de-DE"
          style="color: #0000ff"><u>https://www.bosch.com/de/unternehmen/supply-chain/informationen-fuer-geschaeftspartner/</u></span></a><span
        lang="de-DE" style=""> unter &bdquo;Allgemeine Regelungen Qualit&auml;t&ldquo; ver&ouml;ffentlicht.</span></p>
  </li>
  <li><span class="multi-level-list__marker">3.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Haftung f&uuml;r die Verletzung des geistigen
          Eigentums von Dritten</strong></span></p>
    <p style="text-align: justify"><span lang="de-DE" style="">Es gelten Ziffern 9.4 und 9.5 der Einkaufsbedingungen der
        Robert Bosch GmbH.</span></p>
  </li>
  <li><span class="multi-level-list__marker">4.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Versicherung</strong></span></p>
    <ol class="multi-level-list legal-list">
      <li><span class="multi-level-list__marker">4.1.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Der LIEFERANT ist verpflichtet, eine
            Haftpflichtversicherung f&uuml;r die Dauer der Vertragsbeziehung mit BOSCH abzuschlie&szlig;en. Die
            Mindestdeckung je Schadensfall richtet sich nach den folgenden Betr&auml;gen:</span></p>
        <ul style="list-style-type: disc">
          <li>
            <p style=""><span lang="de-DE" style="">Betriebs- und Produkthaftpflichtversicherung</span><br><span
                lang="de-DE" style=""><strong>X</strong> Mio. EUR pauschal f&uuml;r Personen- und Sachsch&auml;den je
                Versicherungsfall</span><br><span lang="de-DE" style=""><strong>X</strong> Mio. EUR pauschal f&uuml;r
                Personen- und Sachsch&auml;den je Kalenderjahr</span><span style=""> </span><br><span lang="de-DE"
                style="">(erweiterte Deckung einschlie&szlig;lich der Kosten f&uuml;r den Ein- und Ausbau von Autoteilen
                und ggf. von Teilen f&uuml;r Wasserfahrzeuge)</span><br></p>
          </li>
          <li>
            <p style=""><span lang="de-DE" style=""><strong>X</strong> Millionen EUR f&uuml;r die Versicherung der
                R&uuml;ckrufkosten von Fahrzeugen </span><br></p>
          </li>
        </ul>
      </li>
      <li><span class="multi-level-list__marker">4.2.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">F&uuml;r alle Versicherungsf&auml;lle in einem (1)
            Jahr muss das Doppelte der Versicherungssumme der vorgenannten Versicherungsarten zur Verf&uuml;gung stehen
            (doppelte Jahressumme).</span></p>
      </li>
      <li><span class="multi-level-list__marker">4.3.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Auf Verlangen von BOSCH hat der LIEFERANT den
            Abschluss der Versicherung durch Vorlage einer schriftlichen Best&auml;tigung des Versicherers nachzuweisen.
            Der LIEFERANT verpflichtet sich, BOSCH unverz&uuml;glich schriftlich &uuml;ber alle relevanten
            &Auml;nderungen der Versicherungsverh&auml;ltnisse, insbesondere &uuml;ber die K&uuml;ndigung des
            Versicherungsschutzes oder die &Auml;nderung der Unternehmenszugeh&ouml;rigkeit.</span></p>
      </li>
      <li><span class="multi-level-list__marker">4.4.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Der Lieferant ist verpflichtet, Bosch dar&uuml;ber zu
            informieren, wenn die oben genannten Versicherungsanforderungen und Versicherungssparten ge&auml;ndert
            werden.</span></p>
      </li>
    </ol>
  </li>
</ol>
<p><span lang="de-DE">&nbsp;</span></p>
<ol class="multi-level-list legal-list" start="13">
  <li><span class="multi-level-list__marker">1.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Liefertermine, Kapazit&auml;tsplanung,
          Logistikkonzept</strong></span></p>
    <ol class="multi-level-list legal-list">
      <li><span class="multi-level-list__marker">1.1.</span>
        <p style="text-align: justify"><a id="_Hlk141779630" name="_Hlk141779630"></a><span lang="de-DE" style="">Die
            vereinbarten Liefertermine stellen grunds&auml;tzlich verbindliche Termine im Sinne der jeweiligen Incoterms
            dar. Der LIEFERANT stellt die Vertragsprodukte unter Ber&uuml;cksichtigung der erforderlichen Lade- und
            Transportzeiten rechtzeitig bereit.</span><span style="">&nbsp;</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.2.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Der LIEFERANT verpflichtet sich, die
            Logistikabteilung von BOSCH &uuml;ber den Lieferstatus in Kenntnis zu setzen; insbesondere informiert der
            LIEFERANT BOSCH so fr&uuml;h wie m&ouml;glich &uuml;ber Risiken in Bezug auf die rechtzeitige
            Lieferung.</span><span style="">&nbsp;</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.3.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Der LIEFERANT ist verpflichtet, die erforderlichen
            Kapazit&auml;ten f&uuml;r die Lieferung der Jahresmengen bereitzuhalten und BOSCH unter Beachtung der Abrufe
            zu beliefern.</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.4.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Der LIEFERANT stellt durch geeignete Ma&szlig;nahmen
            nach bestem Wissen und Gewissen sicher, dass die ununterbrochene Belieferung von BOSCH mit Vertragsprodukten
            auch bei unvorhersehbaren Ereignissen, wie z.&nbsp;B. &Uuml;berschwemmungen, Br&auml;nden oder Explosionen,
            sichergestellt ist.</span><span style="">&nbsp;</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.5.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Weitere Einzelheiten sind im
            &bdquo;Lieferantenhandbuch Logistik&ldquo; von BOSCH mit Stand 04/2024 (nachfolgend
            &bdquo;<strong>Lieferantenhandbuch Logistik</strong>&ldquo; genannt) oder in hiervon abweichenden
            Logistikkonzepten (z.&nbsp;B. Konsignationslager, Transport Management Center (TMC) usw.) vereinbart. Das
            Lieferantenhandbuch Logistik steht unter </span><a
            href="https://www.bosch.com/de/unternehmen/supply-chain/informationen-fuer-geschaeftspartner/"><span
              lang="de-DE"
              style="color: #0000ff"><u>https://www.bosch.com/de/unternehmen/supply-chain/informationen-fuer-geschaeftspartner/#qualitaet-regelungen-und-standards</u></span></a><span
            lang="de-DE" style=""> zur Verf&uuml;gung.</span></p>
      </li>
    </ol>
  </li>
</ol>
<p><span lang="de-DE">&nbsp;</span></p>
<ol class="multi-level-list legal-list" start="14">
  <li><span class="multi-level-list__marker">1.</span>
    <p style="text-align: justify"><a id="_Ref31961929" name="_Ref31961929"></a><a id="_Hlk141779661"
        name="_Hlk141779661"></a><span lang="de-DE" style=""><strong>&Auml;nderungen an den
          Lieferterminen</strong></span></p>
    <p style="text-align: justify"><a id="_Hlk141779673" name="_Hlk141779673"></a><span lang="de-DE" style="">Sofern
        nicht anders vereinbart, kann BOSCH den Liefertermin eines Abrufs verschieben, ohne dass eine Entsch&auml;digung
        f&auml;llig wird.</span><span style="">&nbsp;</span></p>
    <p style="text-align: justify"><span lang="de-DE" style="">BOSCH ist au&szlig;erdem berechtigt, alle Mengen zu
        stornieren, die einer Produktions- oder Materialfreigabe unterliegen. Im Falle einer Stornierung zahlt BOSCH nur
        dann eine Entsch&auml;digung, wenn keine entsprechenden Ersatzabrufe erteilt werden. Die Entsch&auml;digung
        beschr&auml;nkt sich nach dem Ermessen von BOSCH auf (a) die Abnahme und Bezahlung oder (b) die Bezahlung der
        Entsorgungskosten einschlie&szlig;lich der Einkaufspreise f&uuml;r das Material, f&uuml;r das eine verbindliche
        Produktionsfreigabe oder Materialfreigabe erteilt wurde.</span><span style="">&nbsp;</span></p>
    <p style="text-align: justify"><span lang="de-DE" style="">BOSCH zahlt nur dann eine Entsch&auml;digung, wenn der
        LIEFERANT nachweist, dass er weder die fertigen Produkte oder das Material anderweitig verwenden noch seine
        Bestellungen f&uuml;r das Material stornieren konnte. Bei Halbzeugen tr&auml;gt BOSCH nur die anteiligen Kosten
        entsprechend dem Fertigungsstand. Der LIEFERANT ist verpflichtet, die im Falle einer Stornierung anfallenden
        Kosten so gering wie m&ouml;glich zu halten.</span><span style="">&nbsp;</span></p>
  </li>
</ol>
<p><span lang="de-DE">&nbsp;</span></p>
<ol class="multi-level-list legal-list" start="15">
  <li><span class="multi-level-list__marker">1.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Produktabk&uuml;ndigung</strong></span></p>
    <ol class="multi-level-list legal-list">
      <li><span class="multi-level-list__marker">1.1.</span>
        <p style="text-align: justify"><a id="_Ref31961909" name="_Ref31961909"></a><a id="_Hlk141779718"
            name="_Hlk141779718"></a><span lang="de-DE" style="">Beabsichtigt der LIEFERANT, die Produktion eines
            Vertragsprodukts, das BOSCH vom LIEFERANTEN bezogen hat, einzustellen oder das Vertragsprodukt so zu
            ver&auml;ndern, dass eine erneute Freigabe des Produkts bei BOSCH oder beim Kunden von BOSCH erforderlich
            wird, so hat der LIEFERANT die betreffenden BOSCH-Gesellschaften und -Werke, die das Produkt abrufen, unter
            Einhaltung von mindestens den nachstehend genannten Vorank&uuml;ndigungsfristen vor der beabsichtigten
            Einstellung der Produktion oder Ver&auml;nderung des Vertragsprodukts folgenderma&szlig;en schriftlich zu
            informieren:</span><br><br><span lang="de-DE" style=""><strong>nicht kundenspezifische
              Vertragsprodukte</strong>:</span><span style=""> &nbsp; &nbsp;</span><br><span lang="de-DE"
            style="">vierundzwanzig (24) Monate vor Fertigungsauslauf/&Auml;nderung</span><span style=""> &nbsp;
            &nbsp;</span><br><br><span lang="de-DE" style=""><strong>kundenspezifische
              Vertragsprodukte</strong>:</span><span style=""> &nbsp; &nbsp;</span><br><span lang="de-DE"
            style="">sechsunddrei&szlig;ig (36) Monate vor Fertigungsauslauf/&Auml;nderung</span><span style=""> &nbsp;
            &nbsp;</span><br><br><span lang="de-DE" style="">so dass BOSCH seinen Restbedarf in Auftrag geben kann und
            der LIEFERANT zur entsprechenden Lieferung verpflichtet ist.</span><span style=""> &nbsp; &nbsp;
          </span><br><span lang="de-DE" style="">Die letzte Lieferung muss folgenderma&szlig;en erfolgen:</span><span
            style=""> &nbsp; &nbsp;</span><br><br><span lang="de-DE" style=""><strong>F&uuml;r nicht kundenspezifische
              Vertragsprodukte</strong>:</span><span style=""> &nbsp; &nbsp; </span><br><span lang="de-DE"
            style="">achtundvierzig (48) Monate nach Mitteilung der Abk&uuml;ndigung.</span><span style=""> &nbsp;
            &nbsp;</span><br><span lang="de-DE" style=""><strong>F&uuml;r kundenspezifische
              Vertragsprodukte:</strong></span><span style=""><strong> &nbsp; &nbsp;</strong></span><br><span
            lang="de-DE" style="">sechzig (60) Monate nach Mitteilung der Abk&uuml;ndigung.</span><span style=""> &nbsp;
            &nbsp;</span><br><br><span lang="de-DE" style="">Diese Regelung gilt entsprechend bei K&uuml;ndigung dieses
            Rahmenvertrags. F&uuml;r die Lieferung des Restbedarfs gelten die Bedingungen des Rahmenvertrags auch nach
            der K&uuml;ndigung fort.</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.2.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Bei Zustimmung von BOSCH kann der LIEFERANT
            alternativ in Technik, Qualit&auml;t und Preis vergleichbare Erzeugnisse unter Ber&uuml;cksichtigung der
            Freigabe-Erfordernisse vorschlagen. Die Kosten einer etwaigen erneuten Freigabe sind vom LIEFERANTEN zu
            &uuml;bernehmen.</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.3.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Die M&ouml;glichkeit einer Produktabk&uuml;ndigung
            besteht nicht f&uuml;r die Dauer eines Liefervertrages und f&uuml;r den Fall, dass der LIEFERANT nach Ende
            der Serienproduktion zu einer Nachlieferung verpflichtet ist. F&uuml;r die Dauer einer dem LIEFERANTEN
            mitgeteilten Serie ist eine Produktabk&uuml;ndigung nur unter den in Abschnitt 15.1 genannten Bedingungen
            m&ouml;glich.</span></p>
        <p style="text-align: justify"><span lang="de-DE">&nbsp;</span></p>
      </li>
    </ol>
  </li>
  <li><span class="multi-level-list__marker">2.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Nachlieferverpflichtung</strong></span></p>
    <p style="text-align: justify"><span lang="de-DE" style="">Der LIEFERANT verpflichtet sich, BOSCH f&uuml;r einen
        Zeitraum von f&uuml;nfzehn (15) Jahren nach Beendigung der Lieferungen in der laufenden Serie mit
        Vertragsprodukten zu angemessenen Bedingungen zu beliefern. Diese Verpflichtung besteht auch nach Beendigung des
        Rahmenvertrages fort.</span></p>
    <p style="text-align: justify"><span lang="de-DE">&nbsp;</span></p>
  </li>
  <li><span class="multi-level-list__marker">3.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Wettbewerbsf&auml;higkeit</strong></span></p>
    <ol class="multi-level-list legal-list">
      <li><span class="multi-level-list__marker">3.1.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">BOSCH und der LIEFERANT vereinbaren, dass beide
            Vertragspartner alle erforderlichen Ma&szlig;nahmen ergreifen werden, um die Wettbewerbsf&auml;higkeit der
            Vertragsprodukte zu erhalten.</span></p>
      </li>
      <li><span class="multi-level-list__marker">3.2.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Die Technologie, die Qualit&auml;t, der Preis und,
            sofern zutreffend, die Lieferung der Vertragsprodukte m&uuml;ssen mindestens denen vergleichbarer Produkte
            von Wettbewerbern entsprechen und den Anforderungen von BOSCH gen&uuml;gen.</span></p>
      </li>
      <li><span class="multi-level-list__marker">3.3.</span>
        <p style="text-align: justify"><a id="_Ref31975585" name="_Ref31975585"></a><span lang="de-DE" style="">F&uuml;r
            den Fall, dass vergleichbare Produkte von Dritten zu einem g&uuml;nstigeren Preis angeboten werden, wird
            BOSCH den LIEFERANTEN hiervon schriftlich in Kenntnis setzen und ihm eine angemessene Frist (h&ouml;chstens
            sechs (6) Monate) einr&auml;umen, um die volle Wettbewerbsf&auml;higkeit wiederherzustellen.</span></p>
      </li>
      <li><span class="multi-level-list__marker">3.4.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Der LIEFERANT wird unverz&uuml;glich einen
            Ma&szlig;nahmenplan zur Wiederherstellung der Wettbewerbsf&auml;higkeit erstellen und BOSCH vorlegen. In
            diesem Ma&szlig;nahmenplan muss auch die Kostenwirksamkeit jeder einzelnen Ma&szlig;nahme angegeben werden.
            BOSCH verpflichtet sich, den Plan zu &uuml;berpr&uuml;fen und den LIEFERANTEN auf m&ouml;gliche
            Verbesserungsm&ouml;glichkeiten hinzuweisen und ihn bei seiner Umsetzung zu unterst&uuml;tzen. Eventuell
            erforderliche Probel&auml;ufe und Freigaben sind von BOSCH auf Kosten des LIEFERANTEN unverz&uuml;glich
            durchzuf&uuml;hren.</span></p>
        <p style="text-align: justify"><span lang="de-DE">&nbsp;</span></p>
      </li>
    </ol>
  </li>
  <li><span class="multi-level-list__marker">4.</span>
    <p style="text-align: justify"><a id="_Ref31961808" name="_Ref31961808"></a><span lang="de-DE"
        style=""><strong>Aufzeigen von Verbesserungspotenzial</strong></span></p>
    <p style="text-align: justify"><span lang="de-DE" style="">Beide Vertragspartner streben eine Optimierung der
        bestehenden Prozesse im Sinne des KVP (Kontinuierlicher Verbesserungsprozess) an und beschlie&szlig;en,
        kontinuierlich an der Verbesserung der Qualit&auml;t des Vertragsprodukts und der Logistik zu arbeiten. In Bezug
        auf die Vertragsprodukte verpflichtet sich der LIEFERANT, M&ouml;glichkeiten zur Kostensenkung,
        Qualit&auml;tssteigerung und Verbesserung der Verarbeitung der gelieferten Produkte aufzuzeigen. Der LIEFERANT
        verpflichtet sich, von BOSCH aufgezeigte Verbesserungsm&ouml;glichkeiten (z.&nbsp;B. im Rahmen des
        BOSCH-Lieferantenentwicklungsprogramms) aufzugreifen und in Abstimmung mit BOSCH aktiv umzusetzen. Alle
        Verbesserungen werden bei den Preisen ber&uuml;cksichtigt.</span></p>
    <p style="text-align: justify"><span lang="de-DE">&nbsp;</span></p>
  </li>
  <li><span class="multi-level-list__marker">5.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Verbesserungen und Erfindungen</strong></span>
    </p>
    <ol class="multi-level-list legal-list">
      <li><span class="multi-level-list__marker">5.1.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Alle Verbesserungen und Erfindungen,
            gleichg&uuml;ltig ob sie schutzrechtsf&auml;hig sind oder nicht, die in Aus&uuml;bung der Verpflichtungen
            aus diesem Vertrag von einem Vertragspartner erzielt werden, stehen allein diesem Vertragspartner zu.</span>
        </p>
      </li>
      <li><span class="multi-level-list__marker">5.2.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Alle Verbesserungen und Erfindungen,
            gleichg&uuml;ltig ob sie schutzrechtsf&auml;hig sind oder nicht, die in Aus&uuml;bung der Verpflichtungen
            aus diesem Vertrag von den Vertragspartnern gemeinsam erzielt werden, stehen den Vertragspartnern gemeinsam
            zu. Verbesserungen und Erfindungen werden als gemeinsam erzielt angesehen, wenn Mitarbeiter des LIEFERANTEN
            und von BOSCH zur Entwicklungsarbeit f&uuml;r die Verbesserung oder Erfindung Beitr&auml;ge geleistet haben
            und der Beitrag im Verh&auml;ltnis zum Beitrag des anderen Vertragspartners nicht unbedeutend ist.</span>
        </p>
      </li>
      <li><span class="multi-level-list__marker">5.3.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Bei gemeinsamen Verbesserungen und Erfindungen legen
            die Vertragspartner gemeinsam fest, (1) ob ein Schutzrecht angemeldet werden soll, (2) welcher
            Vertragspartner diese Anmeldung vornimmt und (3) die Staaten, in denen eine solche Anmeldung erfolgen soll.
            Die Kosten f&uuml;r die Anmeldung und Aufrechterhaltung der Schutzrechte tragen die Vertragspartner zu
            gleichen Teilen. Falls ein Vertragspartner oder ein mit diesem verbundenes Unternehmen von einem Schutzrecht
            Gebrauch machen sollte, sind an den anderen Vertragspartner keine Zahlungen zu leisten.</span></p>
      </li>
      <li><span class="multi-level-list__marker">5.4.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Die Vergabe einer Lizenz an gemeinsamen
            Verbesserungen oder Erfindungen an Dritte, die keine verbundenen Unternehmen sind, bedarf der vorherigen
            schriftlichen Zustimmung durch beide Vertragspartner.</span></p>
      </li>
      <li><span class="multi-level-list__marker">5.5.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Falls ein Vertragspartner nicht oder nicht
            l&auml;nger an der Begr&uuml;ndung oder Aufrechterhaltung von Schutzrechten an gemeinsamen Verbesserungen
            oder Erfindungen interessiert ist, geht das Schutzrecht auf den anderen Vertragspartner &uuml;ber; der
            erstgenannte Vertragspartner beh&auml;lt jedoch f&uuml;r sich und die mit ihm verbundenen Unternehmen das
            kostenlose und zeitlich unbegrenzte Nutzungsrecht an dem Schutzrecht. Dasselbe gilt, falls ein
            Vertragspartner nicht oder nicht l&auml;nger bereit ist, ein Schutzrecht in einem bestimmten Land oder
            bestimmten L&auml;ndern zu begr&uuml;nden oder aufrechtzuerhalten.</span></p>
      </li>
    </ol>
  </li>
</ol>
<p><span lang="de-DE">&nbsp;</span></p>
<p><span lang="de-DE">&nbsp;</span></p>
<ol class="multi-level-list legal-list" start="20">
  <li><span class="multi-level-list__marker">1.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Lieferungen nach Nordamerika</strong></span></p>
    <p style="text-align: justify"><span lang="de-DE" style="">Aufgrund der besonderen Anforderungen und
        Bed&uuml;rfnisse des nordamerikanischen Marktes, einschlie&szlig;lich der Anforderungen der in dieser Region
        ans&auml;ssigen Automobilhersteller, gelten f&uuml;r die Eink&auml;ufe in Nordamerika die US-amerikanischen
        Gesch&auml;ftsbedingungen von Bosch (im Folgenden als &bdquo;US POTC&ldquo; bezeichnet), die unter </span><a
        href="https://www.bosch.com/company/supply-chain/information-for-business-partners/"><span lang="de-DE"
          style="color: #0000ff"><u>https://www.bosch.com/company/supply-chain/information-for-business-partners/#purchasing-terms-and-conditions</u></span></a><span
        lang="de-DE" style=""> abrufbar sind. F&uuml;r den Fall, dass es Widerspr&uuml;che zwischen den Dokumenten gibt,
        haben die US POTC Vorrang vor diesem Rahmenvertrag.</span></p>
  </li>
</ol>
<p><span lang="de-DE">&nbsp;</span></p>
<ol class="multi-level-list legal-list" start="21">
  <li><span class="multi-level-list__marker">1.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Umsatzanteil</strong></span></p>
    <p style="text-align: justify"><span lang="de-DE" style="">Der LIEFERANT unterrichtet BOSCH, sofern die Lieferungen
        an die Bosch-Gruppe insgesamt 50 % des Gesamtumsatzes des LIEFERANTEN &uuml;bersteigen.</span></p>
  </li>
</ol>
<p><span lang="de-DE">&nbsp;</span></p>
<ol class="multi-level-list legal-list" start="22">
  <li><span class="multi-level-list__marker">1.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Laufzeit und K&uuml;ndigung des Rahmenvertrags
          und K&uuml;ndigung von Liefervertr&auml;gen</strong></span></p>
    <ol class="multi-level-list legal-list">
      <li><span class="multi-level-list__marker">1.1.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Dieser Rahmenvertrag tritt am </span><span
            lang="de-DE" style="background-color: #00ff00">TT/MM/JJJJ</span><span lang="de-DE" style=""> in Kraft und
            gilt f&uuml;r einen unbestimmten Zeitraum. Er kann von jedem Vertragspartner mit einer Frist von sechs (6)
            Monaten zum Ende eines Kalenderjahres gek&uuml;ndigt werden.</span><span style="">&nbsp;</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.2.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Ungeachtet der Beendigung dieses Rahmenvertrags
            gelten die Bestimmungen dieses Rahmenvertrags weiterhin f&uuml;r die vor der Beendigung dieses
            Rahmenvertrags abgeschlossenen Liefervertr&auml;ge bis zu deren vollst&auml;ndiger Abwicklung. Des Weiteren
            hat der LIEFERANT die Verpflichtung, Bestellungen unter den zum Zeitpunkt der Beendigung noch laufenden
            Abschl&uuml;ssen bis zum Ende deren jeweiliger Laufzeit entgegenzunehmen und weiterhin zu den Bedingungen
            dieses Rahmenvertrages abzuwickeln.</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.3.</span>
        <p style="text-align: justify"><a id="_Ref31975616" name="_Ref31975616"></a><span lang="de-DE" style="">Das
            Recht zur K&uuml;ndigung aus wichtigem Grund bleibt hiervon unber&uuml;hrt.</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.4.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">In folgenden F&auml;llen steht BOSCH zus&auml;tzlich
            jeweils das Recht einer fristlosen K&uuml;ndigung mit sofortiger Wirkung des Rahmenvertrags und/oder
            Liefervertrags (ganz oder teilweise) des jeweils betroffenen Vertragsprodukts zu:</span></p>
        <ol class="multi-level-list legal-list">
          <li><span class="multi-level-list__marker">1.4.1.</span>
            <p style="text-align: justify"><span lang="de-DE" style="">Wenn der LIEFERANT die Wettbewerbsf&auml;higkeit
                nach Abschnitt&nbsp;147 (Wettbewerbsf&auml;higkeit) nicht rechtzeitig wiederhergestellt hat (innerhalb
                der von BOSCH gesetzten Frist nach Abschnitt&nbsp;17.3).</span></p>
          </li>
          <li><span class="multi-level-list__marker">1.4.2.</span>
            <p style="text-align: justify"><span lang="de-DE" style="">Sofern konkrete Anhaltspunkte daf&uuml;r
                vorliegen, dass der LIEFERANT mit hoher Wahrscheinlichkeit nicht in der Lage sein wird, vertragliche
                Verpflichtungen, auf deren mangelfreie, vollst&auml;ndige und rechtzeitige Erf&uuml;llung BOSCH
                angewiesen ist, in der geschuldeten Weise und rechtzeitig zu erf&uuml;llen, es sei denn, der LIEFERANT
                war sich bei Abschluss des Rahmenvertrags oder Liefervertrags der Bedeutung der Verpflichtung nicht
                bewusst.</span></p>
          </li>
          <li><span class="multi-level-list__marker">1.4.3.</span>
            <p style="text-align: justify"><span lang="de-DE" style="">Der LIEFERANT vers&auml;umt, eine wesentliche
                Vertragspflicht zu erf&uuml;llen, und dieser Versto&szlig; wird trotz einer schriftlichen Abmahnung
                nicht innerhalb einer Frist von drei&szlig;ig (30) Tagen behoben.</span></p>
          </li>
          <li><span class="multi-level-list__marker">1.4.4.</span>
            <p style="text-align: justify"><span lang="de-DE" style="">Der LIEFERANT erf&uuml;llt eine wesentliche
                Vertragspflicht nicht und es ist nicht m&ouml;glich, diesen Versto&szlig; zu beheben.</span></p>
          </li>
          <li><span class="multi-level-list__marker">1.4.5.</span>
            <p style="text-align: justify"><span lang="de-DE" style="">Wenn eine wesentliche Verschlechterung der
                finanziellen Verh&auml;ltnisse des LIEFERANTEN eintritt oder einzutreten droht und dadurch die
                Erf&uuml;llung einer Lieferverpflichtung gegen&uuml;ber BOSCH gef&auml;hrdet ist.</span></p>
          </li>
          <li><span class="multi-level-list__marker">1.4.6.</span>
            <p style="text-align: justify"><span lang="de-DE" style="">Wenn der unter <strong>Fehler! Verweisquelle
                  konnte nicht gefunden werden.</strong>2 (Versicherung) vereinbarte Versicherungsschutz f&uuml;r den
                LIEFERANTEN ausl&auml;uft.</span></p>
          </li>
          <li><span class="multi-level-list__marker">1.4.7.</span>
            <p style="text-align: justify"><span lang="de-DE" style="">Wenn ein Dritter entweder direkt oder indirekt
                die Mehrheit der Stimmrechte, die Mehrheit der Anteile oder die Mehrheit des Gesellschaftsverm&ouml;gens
                des LIEFERANTEN erwirbt.</span></p>
          </li>
        </ol>
      </li>
      <li><span class="multi-level-list__marker">1.5.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Anspr&uuml;che des LIEFERANTEN auf Schadensersatz
            aufgrund einer K&uuml;ndigung durch BOSCH sind ausgeschlossen.</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.6.</span>
        <p style="text-align: justify"><a id="_Ref31975629" name="_Ref31975629"></a><span lang="de-DE" style="">Die
            K&uuml;ndigung muss schriftlich erfolgen.&nbsp;</span></p>
      </li>
    </ol>
  </li>
</ol>
<p><span lang="de-DE">&nbsp;</span></p>
<ol class="multi-level-list legal-list" start="23">
  <li><span class="multi-level-list__marker">1.</span>
    <p style="text-align: justify"><span lang="de-DE" style=""><strong>Schlussbestimmungen</strong></span></p>
    <ol class="multi-level-list legal-list">
      <li><span class="multi-level-list__marker">1.1.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">&Auml;nderungen oder Erg&auml;nzungen dieses
            Rahmenvertrags und der Liefervertr&auml;ge bed&uuml;rfen der Schriftform; sie k&ouml;nnen aber auch
            &uuml;ber eine elektronische Plattform (z.&nbsp;B. SupplyOn) erfolgen. Dies gilt entsprechend f&uuml;r
            dieses Erfordernis der Schriftform. Die Schriftform kann durch die elektronische Form mit elektronischer
            Signatur, z.&nbsp;B. &uuml;ber DocuSign oder einen vergleichbaren Standard, ersetzt werden.</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.2.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Sollten Bestimmungen dieses Rahmenvertrags und/oder
            eines Liefervertrags ganz oder teilweise unwirksam sein oder werden, wird davon die Wirksamkeit der
            &uuml;brigen Bestimmungen des Rahmenvertrags nicht ber&uuml;hrt. In diesem Fall wird die betreffende
            Bestimmung durch eine Bestimmung ersetzt, deren Inhalt dem wirtschaftlichen Inhalt der urspr&uuml;nglichen
            Bestimmung am n&auml;chsten kommt. Dies gilt entsprechend f&uuml;r Vertragsl&uuml;cken.</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.3.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Die Abtretung von Rechten und die &Uuml;bertragung
            von Verpflichtungen aus diesem Rahmenvertrag bed&uuml;rfen der vorherigen schriftlichen Zustimmung des
            anderen Vertragspartners.</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.4.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">BOSCH hat das Recht, die Bestimmungen der
            Einkaufsbedingungen und des Lieferantenhandbuchs Logistik mit einer Vorank&uuml;ndigung von sechs Wochen zu
            &auml;ndern. BOSCH teilt dem LIEFERANTEN die jeweilige &Auml;nderung in Textform (z.&nbsp;B. per E-Mail)
            mit. Der LIEFERANT wird gleichzeitig darauf hingewiesen, dass die jeweilige &Auml;nderung Bestandteil des
            zwischen den Vertragspartnern bestehenden Rahmenvertrags wird, sofern der LIEFERANT dieser &Auml;nderung
            nicht innerhalb einer Frist von sechs Wochen nach Mitteilung der &Auml;nderung in Textform (z.&nbsp;B. per
            E-Mail) widerspricht.</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.5.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Dieser Rahmenvertrag und alle Liefervertr&auml;ge
            unter diesem Rahmenvertrag sowie alle sich daraus ergebenden Streitigkeiten unterliegen dem Recht der
            Bundesrepublik Deutschland unter Ausschluss des Kollisionsrechts und des &Uuml;bereinkommens der Vereinten
            Nationen &uuml;ber Vertr&auml;ge &uuml;ber den internationalen Warenkauf (CISG).</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.6.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Alle Streitigkeiten, die sich aus oder im
            Zusammenhang mit diesem Rahmenvertrag ergeben, werden endg&uuml;ltig und ausschlie&szlig;lich nach der
            Schiedsgerichtsordnung der Internationalen Handelskammer (ICC-Schiedsgerichtsordnung) von einem oder
            mehreren gem&auml;&szlig; dieser Ordnung ernannten Schiedsrichtern in der zum Zeitpunkt des Beginns des
            Schiedsverfahrens geltenden Fassung entschieden. Besteht das Schiedsgericht aus drei Schiedsrichtern,
            ernennen die von dem Vertragspartner benannten (oder gegebenenfalls im Namen eines Vertragspartners
            ernannten) Schiedsrichter gemeinsam den Vorsitzenden des Schiedsgerichts innerhalb von 21 Tagen nach der
            Best&auml;tigung oder Ernennung der von dem Vertragspartner benannten (oder ernannten) Schiedsrichter.
            Ungeachtet des Vorstehenden hat jeder Vertragspartner das Recht, bei jedem zust&auml;ndigen Gericht einen
            Antrag auf einstweiligen Rechtsschutz zu stellen.</span><span style="">&nbsp;</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.7.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Der Gerichtsstand f&uuml;r das Schiedsverfahren ist
            Stuttgart, Deutschland. Die Sprache des Schiedsverfahrens ist Englisch. Deutsche Dokumente d&uuml;rfen
            jedoch in ihrer Originalsprache eingereicht werden.</span><span style="">&nbsp;</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.8.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Die Pflicht zur Vorlage von Dokumenten
            beschr&auml;nkt sich auf Dokumente, auf die sich jeder Vertragspartner in seinen Schrifts&auml;tzen bezieht.
            Die Vertragspartner vereinbaren, dass es keine weitere Beweisaufnahme in Form einer sog.
            &bdquo;Discovery&ldquo; zwischen den Vertragspartnern geben wird. Die Parteien verpflichten sich, alle
            Informationen im Zusammenhang mit dem Schiedsverfahren, einschlie&szlig;lich des Bestehens des
            Schiedsverfahrens, des Ablaufs des Schiedsverfahrens, der Schrifts&auml;tze der Parteien und der
            Entscheidungen des Schiedsgerichts, einschlie&szlig;lich der Schiedsspr&uuml;che, vertraulich zu behandeln,
            es sei denn, eine Offenlegung ist nach geltendem Recht erforderlich und sofern die Informationen nicht
            bereits &ouml;ffentlich bekannt sind. Kein Schiedsspruch und keine verfahrensrechtliche Anordnung, die im
            Rahmen des Schiedsgerichtsverfahrens getroffen werden, werden &ouml;ffentlich gemacht. Vorbehaltlich einer
            anderen Entscheidung des Schiedsgerichts oder eines zust&auml;ndigen Gerichts f&uuml;hren die streitenden
            Vertragspartner die von der Streitigkeit betroffenen Vertr&auml;ge weiter aus.</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.9.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">Der Schiedsspruch ist endg&uuml;ltig und f&uuml;r die
            Vertragspartner bindend.</span></p>
      </li>
      <li><span class="multi-level-list__marker">1.10.</span>
        <p style="text-align: justify"><span lang="de-DE" style="">23.7</span><span style=""> &nbsp; &nbsp;</span><span
            lang="de-DE" style="">Dieser Rahmenvertrag wurde von den Parteien in englischer Sprache ausgehandelt und
            unterzeichnet. Sollte eine &Uuml;bersetzung dieses Rahmenvertrags aus Gr&uuml;nden der
            Zweckm&auml;&szlig;igkeit oder zu anderen Zwecken angefertigt werden, so sind die Bestimmungen der
            englischen Fassung ma&szlig;gebend.</span></p>
      </li>
    </ol>
  </li>
</ol>
<p style="margin-left: 4px"><span lang="de-DE">&nbsp;</span></p>
<h3 style="text-align: justify"><span lang="de-DE" style=""><strong>Anlagen</strong></span></h3>
<p style="margin-left: 4px"><span lang="de-DE">&nbsp;</span></p>
<p><span lang="de-DE">Anlage&nbsp;1: Einkaufsbedingungen von Bosch</span></p>
<p><span lang="de-DE">Anlage&nbsp;2: Lieferantenhandbuchs Logistik</span></p>
<p style="margin-left: 48px; text-indent: -48px"><span lang="de-DE">&nbsp;</span></p>
<p style="margin-left: 48px; text-indent: -48px"><span lang="de-DE">&nbsp;</span></p>
<p><span lang="de-DE">&nbsp;</span></p>
<p><span lang="de-DE">&nbsp;</span></p>
<p style="margin-left: 48px; text-indent: -48px"><span lang="de-DE">&nbsp;</span></p>
<p style="margin-left: 48px; text-indent: -48px"><span lang="de-DE"
    style="background-color: #00ff00"><strong>[Unternehmen BOSCH]</strong></span><span
    style="background-color: #00ff00"><strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp;</strong></span><span lang="de-DE" style="background-color: #00ff00"><strong>[LIEFERANT]</strong></span></p>
<p style="margin-left: 48px; text-indent: -48px"><span lang="de-DE">&nbsp;</span></p>
<p style="margin-left: 48px; text-indent: -48px"><span lang="de-DE">&nbsp;</span></p>
<p style="margin-left: 48px; text-indent: -48px"><span lang="de-DE">&nbsp;</span></p>
<p style="margin-left: 48px; text-indent: -48px"><span lang="de-DE">&nbsp;</span></p>
<p style="margin-left: 48px; text-indent: -48px"><span lang="de-DE" style="background-color: #00ff00">Unterschrift,
    Name, Abteilung, Datum</span><span style="background-color: #00ff00"> &nbsp; &nbsp; &nbsp; &nbsp;</span><span
    lang="de-DE" style="background-color: #00ff00">Unterschrift, Name, Abteilung, Datum</span></p>
<p style="margin-left: 48px; text-indent: -48px"><span lang="de-DE">&nbsp;</span></p>
<p style="margin-left: 48px; text-indent: -48px"><span lang="de-DE">&nbsp;</span></p>
<p style="margin-left: 48px; text-indent: -48px"><span lang="de-DE">&nbsp;</span></p>
<p style="margin-left: 48px; text-indent: -48px"><span lang="de-DE" style="background-color: #00ff00">Unterschrift,
    Name, Abteilung, Datum</span><span style="background-color: #00ff00"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp;</span><span lang="de-DE" style="background-color: #00ff00">Unterschrift, Name, Abteilung, Datum</span></p>

</html>
`,Ze={initialData:{orig:R,modif:qe,diff:R},licenseKey:Te,language:"en",plugins:[W,G,q,Z,Q,J,$,X,Y,ee,ne,se,te,ie,re,le,ae,ue,de,ge,pe,oe,he,ce,me,be,fe,ye,ve,Ee,ke,ze,we,xe,De,Ae,_e,Ve,Se,Be,Le,Re,Fe,je,Pe,Ge,Ke],differ:{onSimilarityCalculated(e,n){return console.log("similarity score:",e),!0}},toolbar:{items:A([["findAndReplace"],["undo","redo"],["heading"],["fontSize","fontFamily"],["bold","italic","underline","superscript"],["outdent","indent","alignment","pageBreak"],["bulletedList","numberedList"],["link","uploadImage","insertTable"],["differ","spacer","timeStat"]]),shouldNotGroupWhenFull:!0},fontFamily:{supportAllValues:!0},fontSize:{options:["default",8,10,14,16,18,20,22],supportAllValues:!0},heading:{options:[{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"}]},image:{resizeOptions:[{name:"resizeImage:original",label:"Default image width",value:null},{name:"resizeImage:50",label:"50% page width",value:"50"},{name:"resizeImage:75",label:"75% page width",value:"75"}],toolbar:A([["imageTextAlternative","toggleImageCaption"],["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","imageStyle:side"],["resizeImage"]]),insert:{integrations:["url"]}},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}},addTargetToExternalLinks:!0,defaultProtocol:"https://"},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},htmlSupport:{allow:[{name:/.*/,attributes:!0,classes:!0,styles:!0}],disallow:[{attributes:{key:/^on.*$/}}]}},Qe=u("root"),f=u("toolbar"),F=u("scroll-to-top"),Je=u("pin-orig"),j=document.createElement("div"),$e={[c]:u("orig-view"),[x]:u("modif-view"),[b]:u("diff-view")};K.create($e,Ze).then(async e=>{Xe(e)}).catch(e=>{console.error("There was a problem initializing the editor:",e)});function Xe(e){Ce(),Ye(e),en(e),nn(e),sn(e)}function Ye(e){f.appendChild(e.ui.view.toolbar.element);const n=new IntersectionObserver(([s])=>{const t=s.boundingClientRect.top<0&&!s.isIntersecting;f.classList.toggle("stuck",t)},{root:null,threshold:0});f.parentElement?.insertBefore(j,f),n.observe(j);const i=e.ui.view.toolbar.items._items;if(i){const s=i.find(({label:t})=>t==="Find and replace");s&&(s.icon=Oe)}Qe.style.display="block"}function en(e){document.querySelectorAll("#sidebar button").forEach(i=>{i.addEventListener("click",()=>{const s=i.previousElementSibling;s&&(T(e),l.currentView=s.value,s.checked=!0)})})}function nn(e){window.addEventListener("scroll",()=>{F.style.display=window.scrollY>100?"block":"none"}),F.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Je.addEventListener("change",n=>{const i=n.target.checked;T(e),!l.pinned&&i?l.currentView=x:l.currentView=c,l.pinned=i}),e.model.document.on("change:data",async()=>{})}function sn(e){for(const[n,{element:i}]of Object.entries(e.ui.view.editables))!i||!i.isContentEditable||i.addEventListener("drop",async s=>{const t=Array.from(s.dataTransfer?.files??[]).find(r=>r.name.endsWith(".docx"));if(t){s.preventDefault();try{const r=e.model,d=await t.arrayBuffer(),{value:g}=await Ne.convertToHtml({arrayBuffer:d});r.enqueueChange(r.createBatch(),p=>{const a=r.document.getRoot(n);p.remove(p.createRangeIn(a)),p.setSelection(a,0),e.editing.view.document.fire("clipboardInput",{dataTransfer:{getData:h=>h==="text/html"?g:"",types:["text/html"]},method:"paste"})})}catch(r){console.error("Error processing docx file: ",r)}}})}function T(e){e.model.enqueueChange(n=>n.setSelection(e.model.document.getRoot(l.currentView),0))}
