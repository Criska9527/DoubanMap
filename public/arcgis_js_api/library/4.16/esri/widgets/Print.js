// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/Collection ../core/events ../core/Logger ../core/urlUtils ../core/watchUtils ../core/accessorSupport/decorators ../tasks/support/PrintTemplate ./Widget ./Print/FileLink ./Print/PrintViewModel ./Print/TemplateOptions ./support/widget".split(" "),function(J,K,g,D,E,F,x,l,h,G,H,y,z,A,a){var B=D.ofType(y),n=F.getLogger("esri.widgets.Print");return function(C){function c(d,a){var b=C.call(this,d,a)||this;b._activeTabFocusRequested=!1;b._advancedOptionsVisibleForLayout=
!1;b._advancedOptionsVisibleForMapOnly=!1;b._awaitingServerResponse=!1;b._exportedFileNameMap={};b._layoutTabSelected=!0;b._pendingExportScroll=!1;b._rootNode=null;b.allowedFormats=null;b.allowedLayouts=null;b.exportedLinks=new B;b.iconClass="esri-icon-printer";b.label=void 0;b.templateOptions=new A;b.printServiceUrl=null;b.view=null;b.viewModel=new z;b._removeLink=function(d){(d=d.currentTarget["data-item"])&&"error"===d.state&&b.exportedLinks.remove(d)};b._focusOnTabChange=b._focusOnTabChange.bind(b);
return b}g.__extends(c,C);c.prototype.initialize=function(){var d=this;this.own([l.init(this,"viewModel.templatesInfo",function(b){var a=d.templateOptions,e=a.format,a=a.layout;if(b){var c=a===b.layout.defaultValue||a&&"MAP_ONLY"===a.toUpperCase()||b.layout.choiceList&&-1<b.layout.choiceList.indexOf(a),I=e===b.format.defaultValue||b.format.choiceList&&-1<b.format.choiceList.indexOf(e);c||(a&&n.warn("User sets an invalid layout, resetting it to the default valid one..."),d.templateOptions.layout=b.layout.defaultValue);
I||(e&&n.warn("User sets an invalid format, resetting it to the default valid one..."),d.templateOptions.format=b.format.defaultValue);a&&"MAP_ONLY"===a.toUpperCase()&&(d._layoutTabSelected=!1)}}),l.init(this,"templateOptions.format",function(b){var a=d.viewModel.templatesInfo;if(a&&b){var e=!1;a.format.choiceList&&a.format.choiceList.forEach(function(a){a.toUpperCase()===b.toUpperCase()&&(d.templateOptions.format=a,e=!0)});e||(d.templateOptions.format=a.format.defaultValue,n.warn("User sets an invalid format, resetting it to the default valid one..."));
d.scheduleRender()}}),l.init(this,"templateOptions.layout",function(b){var a=d.viewModel.templatesInfo;if(a&&b){d._layoutTabSelected="MAP_ONLY"!==b.toUpperCase();var c=!d._layoutTabSelected;c||a.layout.choiceList&&a.layout.choiceList.forEach(function(a){a.toUpperCase()===b.toUpperCase()&&(d.templateOptions.layout=a,c=!0)});c||(d.templateOptions.layout=a.layout.defaultValue,n.warn("User sets an invalid layout, resetting it to the default valid one..."));d.scheduleRender()}}),l.init(this,"templateOptions.dpi",
function(a){0>=a?d.templateOptions.dpi=1:d.scheduleRender()}),l.init(this,"viewModel.view.scale",function(a){var b=d.templateOptions,c=b.scale;b.scaleEnabled&&c||(d.templateOptions.scale=a)}),l.whenOnce(this,"printServiceUrl",function(){var a=setTimeout(function(){d._awaitingServerResponse=!0;d.scheduleRender()},500);d.viewModel.load().then(function(){return clearTimeout(a)})})]);var b=this.templateOptions,a=b.height;this.templateOptions.width=b.width||800;this.templateOptions.height=a||1100};c.prototype.render=
function(){var d,b=this.templateOptions,c=b.attributionEnabled,e=b.author,v=b.copyright,w=b.dpi,g=b.format,h=b.height,m=b.layout,l=b.legendEnabled,k=b.scaleEnabled,p=b.scale,q=b.width,b="ready"!==this.get("viewModel.state"),t=this.renderTitleOrFileNameSection(),f=this.messages,r=this.get("viewModel.templatesInfo.format.choiceList")||[],r=0<r.length?r.map(function(b){return a.tsx("option",{key:b,selected:b===g,value:b},b.toUpperCase())}):a.tsx("option",{key:"format-default-option"},f.formatDefaultOption),
r=a.tsx("div",{class:"esri-print__form-section-container"},a.tsx("label",null,f.fileFormatTitle,a.tsx("select",{class:"esri-select",onchange:this._updateFromOption,"data-target-property":"format",bind:this},r))),u=this.get("viewModel.templatesInfo.layout.choiceList")||[],u=0<u.length?u.map(function(b){return a.tsx("option",{key:b,selected:b===m,value:b},f[b]||b)}):a.tsx("option",{key:"layout-default-option"},f.layoutDefaultOption),u=a.tsx("div",{class:"esri-print__form-section-container"},a.tsx("label",
null,f.layoutTitle,a.tsx("select",{class:"esri-select",onchange:this._updateFromOption,"data-target-property":"layout",bind:this},u))),w=a.tsx("div",{class:"esri-print__form-section-container"},a.tsx("label",null,f.dpi,a.tsx("input",{type:"number",class:this.classes("esri-print__input-text","esri-input"),"data-input-name":"dpi",oninput:this._updateInputValue,value:""+w,min:"1",tabIndex:0,bind:this}))),k=a.tsx("div",{class:this.classes("esri-print__scale-info-container","esri-print__form-section-container")},
a.tsx("label",null,a.tsx("input",{"data-option-name":"scaleEnabled",checked:k,type:"checkbox",tabIndex:0,onchange:this._toggleInputValue,bind:this}),f.scale),a.tsx("div",{class:"esri-print__scale-input-container"},a.tsx("input",{"aria-label":f.scaleLabel,"aria-valuenow":""+p,role:"spinbutton",type:"number",class:this.classes("esri-print__input-text","esri-input","esri-print__scale-input"),tabIndex:0,"data-input-name":"scale",oninput:this._updateInputValue,disabled:!k,value:""+p,bind:this}),a.tsx("button",
{role:"button","aria-label":f.reset,class:this.classes("esri-widget--button","esri-print__refresh-button","esri-icon-refresh"),tabIndex:0,onclick:this._resetToCurrentScale,bind:this}))),e=this._advancedOptionsVisibleForLayout?a.tsx("div",{"aria-labelledby":this.id+"__advancedOptionsForLayout",class:"esri-print__advanced-options-container"},k,a.tsx("div",{class:this.classes("esri-print__author-info-container","esri-print__form-section-container")},a.tsx("label",null,f.author,a.tsx("input",{type:"text",
value:e,class:this.classes("esri-print__input-text","esri-input"),tabIndex:0,"data-input-name":"author",oninput:this._updateInputValue,bind:this}))),a.tsx("div",{class:this.classes("esri-print__copyright-info-container","esri-print__form-section-container")},a.tsx("label",null,f.copyright,a.tsx("input",{type:"text",class:this.classes("esri-print__input-text","esri-input"),tabIndex:0,value:v,"data-input-name":"copyright",oninput:this._updateInputValue,bind:this}))),w,a.tsx("div",{class:this.classes("esri-print__legend-info-container",
"esri-print__form-section-container")},a.tsx("label",null,a.tsx("input",{type:"checkbox","data-option-name":"legendEnabled",tabIndex:0,checked:l,onchange:this._toggleInputValue,bind:this}),f.legend))):null,c=this._advancedOptionsVisibleForMapOnly?a.tsx("div",{"aria-labelledby":this.id+"__advancedOptionsForMapOnly",class:"esri-print__advanced-options-container"},k,w,a.tsx("div",{class:"esri-print__form-section-container"},a.tsx("label",null,a.tsx("input",{"data-option-name":"attributionEnabled",type:"checkbox",
onchange:this._toggleInputValue,tabIndex:0,checked:c,bind:this}),f.attribution))):null,h=this._layoutTabSelected?a.tsx("section",{key:"esri-print__layoutContent",id:this.id+"__layoutContent","aria-labelledby":this.id+"__layoutTab",class:"esri-print__layout-section",role:"tabpanel","aria-selected":this._layoutTabSelected},a.tsx("div",{class:"esri-print__panel-container"},t,u,this._layoutTabSelected?r:null),a.tsx("div",{class:this.classes("esri-print__panel-container","esri-print__advanced-options-section")},
a.tsx("button",{"aria-label":f.advancedOptions,"aria-expanded":this._advancedOptionsVisibleForLayout?"true":"false",role:"button",class:"esri-print__advanced-options-button",onclick:this._showAdvancedOptions,bind:this},a.tsx("div",{class:"esri-print__advanced-options-button-container"},a.tsx("span",{"aria-hidden":"true",class:this.classes("esri-icon-right-triangle-arrow","esri-print__advanced-options-button-icon--closed")}),a.tsx("span",{"aria-hidden":"true",class:this.classes("esri-icon-left-triangle-arrow",
"esri-print__advanced-options-button-icon--closed-rtl")}),a.tsx("span",{"aria-hidden":"true",class:this.classes("esri-icon-down-arrow","esri-print__advanced-options-button-icon--opened")}),a.tsx("span",{class:"esri-print__advanced-options-button-title"},f.advancedOptions))),e)):a.tsx("section",{key:"esri-print__mapOnlyContent",id:this.id+"__mapOnlyContent","aria-selected":!this._layoutTabSelected,"aria-labelledby":this.id+"__mapOnlyTab",class:"esri-print__map-only-section",role:"tabpanel"},a.tsx("div",
{class:"esri-print__panel-container"},t,this._layoutTabSelected?null:r,a.tsx("div",{class:this.classes("esri-print__size-container","esri-print__form-section-container")},a.tsx("div",{class:"esri-print__width-container"},a.tsx("label",null,f.width,a.tsx("input",{type:"text",class:this.classes("esri-print__input-text","esri-input"),"data-input-name":"width",onchange:this._updateInputValue,value:""+q,tabIndex:0,bind:this}))),a.tsx("div",{class:"esri-print__height-container"},a.tsx("label",null,f.height,
a.tsx("input",{type:"text",class:this.classes("esri-print__input-text","esri-input"),"data-input-name":"height",onchange:this._updateInputValue,value:""+h,tabIndex:0,bind:this}))),a.tsx("button",{role:"button","aria-label":f.swap,class:this.classes("esri-widget--button","esri-print__swap-button","esri-icon-swap"),onclick:this._switchInput,tabIndex:0,bind:this})),a.tsx("div",{class:this.classes("esri-print__panel-container","esri-print__advanced-options-section")},a.tsx("button",{"aria-label":f.advancedOptions,
"aria-expanded":this._advancedOptionsVisibleForMapOnly?"true":"false",role:"button",class:"esri-print__advanced-options-button",onclick:this._showAdvancedOptions,bind:this},a.tsx("div",{class:"esri-print__advanced-options-button-container"},a.tsx("span",{"aria-hidden":"true",class:this.classes("esri-icon-right-triangle-arrow","esri-print__advanced-options-button-icon--closed")}),a.tsx("span",{"aria-hidden":"true",class:this.classes("esri-icon-left-triangle-arrow","esri-print__advanced-options-button-icon--closed-rtl")}),
a.tsx("span",{"aria-hidden":"true",class:this.classes("esri-icon-down-arrow","esri-print__advanced-options-button-icon--opened")}),a.tsx("span",{class:"esri-print__advanced-options-button-title"},f.advancedOptions))),c))),c=this.exportedLinks.toArray(),q=this._renderExportedLink(c),t=(d={},d["esri-button--disabled"]=b||!m&&!g,d);d=null!=this.get("view")&&"2d"!==this.get("view.type");e=a.tsx("div",{class:"esri-print__panel--error"},d?f.sceneViewError:f.serviceError);b=a.tsx("div",null,a.tsx("ul",{class:"esri-print__layout-tab-list",
role:"tablist",onclick:this._toggleLayoutPanel,onkeydown:this._handleLayoutPanelKeyDown,bind:this},a.tsx("li",{afterCreate:this._focusOnTabChange,afterUpdate:this._focusOnTabChange,id:this.id+"__layoutTab","data-tab-id":"layoutTab",class:"esri-print__layout-tab",role:"tab",tabIndex:0,"aria-selected":""+this._layoutTabSelected},f.layoutTab),a.tsx("li",{afterCreate:this._focusOnTabChange,afterUpdate:this._focusOnTabChange,id:this.id+"__mapOnlyTab","data-tab-id":"mapOnlyTab",class:"esri-print__layout-tab",
role:"tab",tabIndex:0,"aria-selected":""+!this._layoutTabSelected},f.mapOnlyTab)),h,a.tsx("button",{"aria-label":f.exportDescription,role:"button",class:this.classes("esri-print__export-button","esri-button",t),disabled:b,tabIndex:0,onclick:this._handlePrintMap,bind:this},f.export),a.tsx("div",{class:"esri-print__export-panel-container",afterUpdate:this._scrollExportIntoView,bind:this},a.tsx("h3",{class:this.classes("esri-print__export-title","esri-widget__heading")},f.exportText),0<c.length?null:
a.tsx("div",null,a.tsx("div",null,f.exportHint)),q));b=a.tsx("div",null,a.tsx("div",{class:"esri-print__container"},a.tsx("header",{class:"esri-print__header-title"},f.export),this.error||!this.printServiceUrl||d||!this.view?e:b));b="initializing"===this.get("viewModel.state")?this._renderLoader():b;return a.tsx("div",{afterCreate:a.storeNode,bind:this,class:"esri-print esri-widget esri-widget--panel","data-node-ref":"_rootNode"},b)};c.prototype.renderTitleOrFileNameSection=function(){var d=this.templateOptions,
b=this.messages,c,e;this._layoutTabSelected?(c=b.title,b=b.titlePlaceHolder,d=d.title,e="title"):(c=b.fileName,b=b.fileNamePlaceHolder,d=d.fileName,e="fileName");return a.tsx("div",{class:"esri-print__form-section-container",key:e},a.tsx("label",null,c,a.tsx("input",{type:"text",tabIndex:0,placeholder:b,class:this.classes("esri-print__input-text","esri-input"),value:d,"data-input-name":e,oninput:this._updateInputValue,bind:this})))};c.prototype._focusOnTabChange=function(a){if(this._activeTabFocusRequested){var b=
a.getAttribute("data-tab-id");if("layoutTab"===b&&this._layoutTabSelected||"mapOnlyTab"===b&&!this._layoutTabSelected)a.focus(),this._activeTabFocusRequested=!1}};c.prototype._renderLoader=function(){var d,b=(d={},d["esri-print__loader"]=this._awaitingServerResponse,d);return a.tsx("div",{class:this.classes(b),key:"loader"})};c.prototype._createFileLink=function(a,b){b=b||this.messages.untitled;a=a.format.toLowerCase();a=-1<a.indexOf("png")?"png":a;var d=b+a;void 0!==this._exportedFileNameMap[d]?
this._exportedFileNameMap[d]++:this._exportedFileNameMap[d]=0;return new y({name:b,extension:a,count:this._exportedFileNameMap[d]})};c.prototype._toPrintTemplate=function(a){var b=a.dpi,d=a.height,c=a.legendEnabled,v=a.width;a=new G({attributionVisible:a.attributionEnabled,layoutOptions:{authorText:a.author||"",copyrightText:a.copyright||"",titleText:a.title||""},forceFeatureAttributes:a.forceFeatureAttributes,format:a.format,layout:a.layout,outScale:a.scale});v&&(a.exportOptions.width=v);d&&(a.exportOptions.height=
d);b&&(a.exportOptions.dpi=b);c||(a.layoutOptions.legendLayers=[]);return a};c.prototype._resetToCurrentScale=function(){this.templateOptions.scale=this.viewModel.view.scale};c.prototype._updateInputValue=function(a){a=a.target;var b=a.getAttribute("data-input-name");this.templateOptions[b]=a.value};c.prototype._handlePrintMap=function(){var a=this;this._pendingExportScroll=!0;var b=this.templateOptions,c=this._toPrintTemplate(b),e=this._createFileLink(c,this._layoutTabSelected?c.layoutOptions.titleText:
b.fileName);this.exportedLinks.add(e);this.viewModel.print(c).then(function(a){e.set({url:a&&a.url,state:"ready"})}).catch(function(a){e.set({error:a,state:"error"})}).then(function(){return a.scheduleRender()})};c.prototype._updateFromOption=function(a){var b=a.target;a=b.selectedOptions?b.selectedOptions.item(0).value:b.options[b.selectedIndex].value;b=b.getAttribute("data-target-property");this.templateOptions[b]=a};c.prototype._switchInput=function(){var a;a=[this.templateOptions.height,this.templateOptions.width];
this.templateOptions.width=a[0];this.templateOptions.height=a[1]};c.prototype._showAdvancedOptions=function(){this._layoutTabSelected?this._advancedOptionsVisibleForLayout=!this._advancedOptionsVisibleForLayout:this._advancedOptionsVisibleForMapOnly=!this._advancedOptionsVisibleForMapOnly};c.prototype._scrollExportIntoView=function(){if(this._pendingExportScroll){this._pendingExportScroll=!1;var a=this._rootNode,b=this._rootNode,b=b.scrollHeight-b.clientHeight;0<b&&(a.scrollTop=b)}};c.prototype._toggleInputValue=
function(a){a=a.target;var b=a.getAttribute("data-option-name");this.templateOptions[b]=a.checked;"scaleEnabled"===b&&(this.viewModel.scaleEnabled=this.templateOptions.scaleEnabled,this.templateOptions[b]||this._resetToCurrentScale())};c.prototype._renderExportedLink=function(d){var b=this,c=this.messages;return d.map(function(d){var e,g,h,l=d.error,m=d.url,n=d.formattedName,k=d.state,p="error"===k,q="pending"===k,k="ready"===k,t=(e={},e["esri-widget__anchor--disabled"]=q||p,e);(e=m||null)&&(e=x.addProxy(e));
m=x.hasSameOrigin(m,location.href);m=(g={},g["esri-icon-loading-indicator"]=q,g["esri-rotating"]=q,g["esri-icon-download"]=m&&k,g["esri-icon-launch-link-external"]=!m&&k,g["esri-icon-error"]=p,g["esri-print__exported-file--error"]=p,g);g=(h={},h["esri-print__exported-file--error"]=p,h);return a.tsx("div",{"aria-label":q?c.pending:k?c.ready:c.errorMessage,class:"esri-print__exported-file","data-item":d,key:n,onclick:b._removeLink,title:p?l.message:""},a.tsx("a",{"aria-label":n+". "+c.linkReady,download:n,
href:e,rel:"noreferrer",tabIndex:0,target:"_blank",class:b.classes("esri-widget__anchor esri-print__exported-file-link",t)},a.tsx("span",{class:b.classes(m)}),a.tsx("span",{class:b.classes("esri-print__exported-file-link-title",g)},n)))})};c.prototype._toggleLayoutPanel=function(a){this._toggleTab(a.target.getAttribute("data-tab-id"))};c.prototype._toggleTab=function(a){(this._layoutTabSelected="layoutTab"===a)?(a=this.get("viewModel.templatesInfo.layout.choiceList"),this.templateOptions.layout=a&&
a[0]):this.templateOptions.layout="MAP_ONLY";this._activeTabFocusRequested=!0};c.prototype._handleLayoutPanelKeyDown=function(a){var b=E.eventKey(a),c=a.target.getAttribute("data-tab-id");if("Enter"===b||" "===b)this._toggleTab(c),a.preventDefault(),a.stopPropagation();else if("ArrowLeft"===b||"ArrowRight"===b)this._toggleTab("layoutTab"===c?"mapOnlyTab":"layoutTab"),a.preventDefault(),a.stopPropagation()};g.__decorate([h.aliasOf("viewModel.allowedFormats")],c.prototype,"allowedFormats",void 0);g.__decorate([h.aliasOf("viewModel.allowedLayouts")],
c.prototype,"allowedLayouts",void 0);g.__decorate([h.aliasOf("viewModel.error")],c.prototype,"error",void 0);g.__decorate([h.property({type:B}),a.renderable()],c.prototype,"exportedLinks",void 0);g.__decorate([h.property()],c.prototype,"iconClass",void 0);g.__decorate([h.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],c.prototype,"label",void 0);g.__decorate([h.property(),a.renderable(),a.messageBundle("esri/widgets/Print/t9n/Print")],c.prototype,"messages",void 0);g.__decorate([a.renderable(),
h.property({type:A})],c.prototype,"templateOptions",void 0);g.__decorate([h.aliasOf("viewModel.printServiceUrl")],c.prototype,"printServiceUrl",void 0);g.__decorate([h.aliasOf("viewModel.view"),a.renderable()],c.prototype,"view",void 0);g.__decorate([h.property({type:z}),a.renderable(["viewModel.templatesInfo","viewModel.state"])],c.prototype,"viewModel",void 0);return c=g.__decorate([h.subclass("esri.widgets.Print")],c)}(H)});