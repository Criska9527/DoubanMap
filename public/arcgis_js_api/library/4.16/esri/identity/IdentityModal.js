// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/accessorSupport/decorators ../widgets/Widget ../widgets/support/widget".split(" "),function(l,m,e,d,k,c){return function(h){function a(b,c){b=h.call(this,b,c)||this;b.container=document.createElement("div");b.content=null;b.open=!1;document.body.appendChild(b.container);return b}e.__extends(a,h);a.prototype.render=function(){var b,a=this.id,e=this.content,d=this.title,f=this.messages,g=this.open&&!!e,e=(b={},b["esri-identity-modal--open"]=g,b["esri-identity-modal--closed"]=
!g,b);b=c.tsx("button",{class:"esri-identity-modal__close-button","aria-label":f.close,bind:this,onclick:this._close},c.tsx("span",{"aria-hidden":"true",class:"esri-icon-close"}));f=a+"_title";a+="_content";d=d?c.tsx("h1",{id:f,class:"esri-identity-modal__title"},d):null;d=g?c.tsx("div",{class:"esri-identity-modal__dialog",role:"dialog","aria-labelledby":f,"aria-describedby":a},b,d,this._renderContent(a)):null;return c.tsx("div",{tabIndex:-1,class:this.classes("esri-identity-modal",e)},d)};a.prototype._close=
function(){this.open=!1};a.prototype._renderContent=function(b){var a=this.content;return"string"===typeof a?c.tsx("div",{class:"esri-identity-modal__content",id:b,innerHTML:a}):c.isWidget(a)?c.tsx("div",{class:"esri-identity-modal__content",id:b},a.render()):a instanceof HTMLElement?c.tsx("div",{class:"esri-identity-modal__content",id:b,bind:a,afterCreate:this._attachToNode}):null};a.prototype._attachToNode=function(a){a.appendChild(this)};e.__decorate([d.property({readOnly:!0})],a.prototype,"container",
void 0);e.__decorate([d.property(),c.renderable()],a.prototype,"content",void 0);e.__decorate([d.property(),c.renderable()],a.prototype,"open",void 0);e.__decorate([d.property(),c.renderable(),c.messageBundle("esri/t9n/common")],a.prototype,"messages",void 0);e.__decorate([d.property({aliasOf:"messages.auth.signIn"}),c.renderable()],a.prototype,"title",void 0);return a=e.__decorate([d.subclass("esri.identity.IdentityModal")],a)}(k)});