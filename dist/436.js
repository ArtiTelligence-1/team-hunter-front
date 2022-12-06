"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[436],{3362:function(n,A,e){var o=e(7537),i=e.n(o),r=e(3645),t=e.n(r)()(i());t.push([n.id,".emp-profile {\n  padding: 3%;\n  margin-top: 3%;\n  margin-bottom: 3%;\n  border-radius: 0.5rem;\n  background: #FFFFFF;\n}\n.profile-img {\n  text-align: center;\n}\n.profile-img img {\n  width: 70%;\n  height: 30%;\n}\n.profile-img .file {\n  position: relative;\n  overflow: hidden;\n  margin-top: -20%;\n  width: 70%;\n  border: none;\n  border-radius: 0;\n  font-size: 15px;\n  background: #212529b8;\n}\n.profile-img .file input {\n  position: absolute;\n  opacity: 0;\n  right: 0;\n  top: 0;\n}\n.profile-head h5 {\n  color: #333;\n}\n.profile-head h6 {\n  color: #e53637;\n}\n.profile-edit-btn {\n  border: none;\n  border-radius: 1.5rem;\n  width: 20%;\n  padding: 6px 12px;\n  margin: 5% 80%;\n  font-weight: 600;\n  color: #6c757d;\n  cursor: pointer;\n}\n.proile-rating {\n  font-size: 12px;\n  color: #818182;\n  margin-top: 5%;\n}\n.proile-rating span {\n  color: #495057;\n  font-size: 15px;\n  font-weight: 600;\n}\n.profile-head .nav-tabs {\n  margin-bottom: 5%;\n}\n.profile-head .nav-tabs .nav-link {\n  font-weight: 600;\n  border: none;\n}\n.profile-head .nav-tabs .nav-link.active {\n  border: none;\n  border-bottom: 2px solid #e53637;\n}\n.profile-work {\n  padding: 14%;\n  margin-top: -15%;\n}\n.profile-work p {\n  font-size: 12px;\n  color: #818182;\n  font-weight: 600;\n  margin-top: 10%;\n}\n.profile-work a {\n  text-decoration: none;\n  color: #495057;\n  font-weight: 600;\n  font-size: 14px;\n}\n.profile-work ul {\n  list-style: none;\n}\n.profile-tab label {\n  font-weight: 600;\n  padding: 6px 12px;\n  margin: 12px 12px;\n}\n.profile-tab p {\n  font-weight: 600;\n  color: #e53637;\n}\ninput[type=text] {\n  font-size: 12px;\n  color: #818182;\n  font-weight: 600;\n  margin: 12px 12px;\n  border: 0;\n  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);\n}\n.selectdiv {\n  font-size: 12px;\n  width: 100%;\n  height: 60%;\n  color: #818182;\n  font-weight: 600;\n  border: 0;\n  padding: 6px 12px;\n  padding-left: 6px;\n  margin: 12px 12px;\n  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);\n}\n.sliderdiv {\n  padding: 6px 12px;\n  margin: 12px 12px;\n}\n.ant-slider-track {\n  color: #e53637;\n}\n.textarea_prop {\n  font-size: 12px;\n  color: #818182;\n  width: 100%;\n  height: 130px;\n  font-weight: 600;\n  margin: 12px 12px;\n  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);\n}\n.textarea_prop textarea {\n  resize: none;\n  border: 0;\n}\n","",{version:3,sources:["webpack://./src/modules/Profile/index.less"],names:[],mappings:"AACA;EACI,WAAA;EACA,cAAA;EACA,iBAAA;EACA,qBAAA;EACA,mBAAA;AAAJ;AAEA;EACI,kBAAA;AAAJ;AAEA;EACI,UAAA;EACA,WAAA;AAAJ;AAEA;EACI,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,qBAAA;AAAJ;AAEA;EACI,kBAAA;EACA,UAAA;EACA,QAAA;EACA,MAAA;AAAJ;AAEA;EACI,WAAA;AAAJ;AAEA;EACI,cAAA;AAAJ;AAEA;EACI,YAAA;EACA,qBAAA;EACA,UAAA;EACA,iBAAA;EACH,cAAA;EACG,gBAAA;EACA,cAAA;EACA,eAAA;AAAJ;AAEA;EACI,eAAA;EACA,cAAA;EACA,cAAA;AAAJ;AAEA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;AAAJ;AAEA;EACI,iBAAA;AAAJ;AAEA;EACI,gBAAA;EACA,YAAA;AAAJ;AAEA;EACI,YAAA;EACA,gCAAA;AAAJ;AAEA;EACI,YAAA;EACA,gBAAA;AAAJ;AAEA;EACI,eAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;AAAJ;AAEA;EACI,qBAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;AAAJ;AAEA;EACI,gBAAA;AAAJ;AAEA;EACI,gBAAA;EACH,iBAAA;EACA,iBAAA;AAAD;AAEA;EACI,gBAAA;EACA,cAAA;AAAJ;AAGA;EACI,eAAA;EACA,cAAA;EACA,gBAAA;EACH,iBAAA;EACA,SAAA;EACA,4CAAA;AADD;AAIE;EACD,eAAA;EACA,WAAA;EACA,WAAA;EACA,cAAA;EACG,gBAAA;EACH,SAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,4CAAA;AAFD;AAKE;EACD,iBAAA;EACA,iBAAA;AAHD;AAME;EACD,cAAA;AAJD;AAOE;EACD,eAAA;EACG,cAAA;EACH,WAAA;EACA,aAAA;EACG,gBAAA;EACH,iBAAA;EACA,4CAAA;AALD;AAFE;EASA,YAAA;EACA,SAAA;AAJF",sourcesContent:["\n.emp-profile{\n    padding: 3%;\n    margin-top: 3%;\n    margin-bottom: 3%;\n    border-radius: 0.5rem;\n    background: #FFFFFF;\n}\n.profile-img{\n    text-align: center;\n}\n.profile-img img{\n    width: 70%;\n    height: 30%;\n}\n.profile-img .file {\n    position: relative;\n    overflow: hidden;\n    margin-top: -20%;\n    width: 70%;\n    border: none;\n    border-radius: 0;\n    font-size: 15px;\n    background: #212529b8;\n}\n.profile-img .file input {\n    position: absolute;\n    opacity: 0;\n    right: 0;\n    top: 0;\n}\n.profile-head h5{\n    color: #333;\n}\n.profile-head h6{\n    color: #e53637;\n}\n.profile-edit-btn{\n    border: none;\n    border-radius: 1.5rem;\n    width: 20%;\n    padding: 6px 12px;\n\tmargin: 5% 80%;\n    font-weight: 600;\n    color: #6c757d;\n    cursor: pointer;\n}\n.proile-rating{\n    font-size: 12px;\n    color: #818182;\n    margin-top: 5%;\n}\n.proile-rating span{\n    color: #495057;\n    font-size: 15px;\n    font-weight: 600;\n}\n.profile-head .nav-tabs{\n    margin-bottom:5%;\n}\n.profile-head .nav-tabs .nav-link{\n    font-weight:600;\n    border: none;\n}\n.profile-head .nav-tabs .nav-link.active{\n    border: none;\n    border-bottom:2px solid #e53637;\n}\n.profile-work{\n    padding: 14%;\n    margin-top: -15%;\n}\n.profile-work p{\n    font-size: 12px;\n    color: #818182;\n    font-weight: 600;\n    margin-top: 10%;\n}\n.profile-work a{\n    text-decoration: none;\n    color: #495057;\n    font-weight: 600;\n    font-size: 14px;\n}\n.profile-work ul{\n    list-style: none;\n}\n.profile-tab label{\n    font-weight: 600;\n\tpadding: 6px 12px;\n\tmargin: 12px 12px;\n}\n.profile-tab p{\n    font-weight: 600;\n    color: #e53637;\n}\n\ninput[type=text] {\n    font-size: 12px;\n    color: #818182;\n    font-weight: 600;\n\tmargin: 12px 12px;\n\tborder:0;\n\tbox-shadow:0 0 15px 4px rgba(0,0,0,0.06);\n  }\n\n  .selectdiv {\n\tfont-size: 12px;\n\twidth: 100%;\n\theight: 60%;\n\tcolor: #818182;\n    font-weight: 600;\n\tborder:0;\n\tpadding: 6px 12px;\n\tpadding-left: 6px;\n\tmargin: 12px 12px;\n\tbox-shadow:0 0 15px 4px rgba(0,0,0,0.06);\n  }\n\n  .sliderdiv{\n\tpadding: 6px 12px;\n\tmargin: 12px 12px;\n  }\n\n  .ant-slider-track{\n\tcolor: #e53637;\n  }\n\n  .textarea_prop{\n\tfont-size: 12px;\n    color: #818182;\n\twidth: 100%;\n\theight: 130px;\n    font-weight: 600;\n\tmargin: 12px 12px;\n\tbox-shadow:0 0 15px 4px rgba(0,0,0,0.06);\n\ttextarea{\n\t\tresize: none; \n\t\tborder: 0;\n\t}\n  }\n@slider-track-background-color: #e53637;@slider-track-background-color-hover: #e53637;@slider-handle-color: #000000;@slider-handle-color-hover: #e53637;@slider-handle-color-focus: tint(#000000, 20%);@slider-handle-color-focus-shadow: fade(#e53637, 12%);@slider-handle-color-tooltip-open: #e53637;"],sourceRoot:""}]),A.Z=t},603:function(n,A,e){var o=e(3379),i=e.n(o),r=e(7795),t=e.n(r),a=e(569),l=e.n(a),s=e(3565),d=e.n(s),c=e(9216),p=e.n(c),h=e(4589),m=e.n(h),x=e(3362),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=l().bind(null,"head"),g.domAPI=t(),g.insertStyleElement=p(),i()(x.Z,g),x.Z&&x.Z.locals&&x.Z.locals},9143:function(n,A,e){e.r(A);var o=e(5893),i=e(7294),r=e(6942),t=e(1230),a=e(5746),l=e(9177),s=e(9747),d=(e(2679),e(2189)),c=(e(603),function(){return c=Object.assign||function(n){for(var A,e=1,o=arguments.length;e<o;e++)for(var i in A=arguments[e])Object.prototype.hasOwnProperty.call(A,i)&&(n[i]=A[i]);return n},c.apply(this,arguments)}),p=r.Z.TextArea,h=function(n){!function(n,A){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&A.indexOf(o)<0&&(e[o]=n[o]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(n);i<o.length;i++)A.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(n,o[i])&&(e[o[i]]=n[o[i]])}}(n,[]);var A=(0,i.useState)(1),e=A[0],r=A[1],d=function(n){return r(n)};return(0,o.jsxs)(t.Z,{children:[(0,o.jsx)(a.Z,c({span:17},{children:(0,o.jsx)(l.Z,{min:1,max:100,onChange:d,value:"number"==typeof e?e:0})})),(0,o.jsx)(a.Z,c({span:7},{children:(0,o.jsx)(s.Z,{id:"age",min:1,max:100,style:{margin:"0 16px"},value:e,onChange:d})}))]})};A.default=function(){var n=(0,i.useState)(""),A=n[0],e=n[1];return(0,o.jsx)("div",c({className:"container emp-profile"},{children:(0,o.jsxs)("form",c({method:"post"},{children:[(0,o.jsxs)("div",c({className:"row"},{children:[(0,o.jsx)("div",c({className:"col-md-4"},{children:(0,o.jsxs)("div",c({className:"profile-img"},{children:[(0,o.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog",alt:""}),(0,o.jsxs)("div",c({className:"file btn btn-lg btn-primary"},{children:["Change Photo",(0,o.jsx)("input",{type:"file",name:"file"})]}))]}))})),(0,o.jsx)("div",c({className:"col-md-8"},{children:(0,o.jsxs)("div",c({className:"profile-head"},{children:[(0,o.jsx)("h5",{children:"Kshiti Ghelani"}),(0,o.jsx)("h6",{children:"Web Developer and Designer"}),(0,o.jsxs)("p",c({className:"proile-rating"},{children:["RANKINGS :",(0,o.jsx)("span",{children:"8/10"})]})),(0,o.jsx)("ul",c({className:"nav nav-tabs",id:"myTab",role:"tablist"},{children:(0,o.jsx)("li",c({className:"nav-item"},{children:(0,o.jsx)("a",c({className:"nav-link active",id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true"},{children:"About"}))}))}))]}))}))]})),(0,o.jsxs)("div",c({className:"row"},{children:[(0,o.jsx)("div",{className:"col-md-4"}),(0,o.jsx)("div",c({className:"col-md-8"},{children:(0,o.jsx)("div",c({className:"tab-content profile-tab",id:"myTabContent"},{children:(0,o.jsxs)("div",c({className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab"},{children:[(0,o.jsxs)("label",c({htmlFor:"name",className:"row"},{children:[(0,o.jsx)("div",c({className:"col-md-6"},{children:"Name"})),(0,o.jsx)("div",c({className:"col-md-6"},{children:(0,o.jsx)("input",{id:"name",className:"form-control",type:"text",placeholder:"Name"})}))]})),(0,o.jsxs)("label",c({htmlFor:"surname",className:"row"},{children:[(0,o.jsx)("div",c({className:"col-md-6"},{children:"Surname"})),(0,o.jsx)("div",c({className:"col-md-6"},{children:(0,o.jsx)("input",{id:"surname",className:"form-control",type:"text",placeholder:"Surname"})}))]})),(0,o.jsxs)("label",c({htmlFor:"sex",className:"row"},{children:[(0,o.jsx)("div",c({className:"col-md-6"},{children:"Sex"})),(0,o.jsx)("div",c({className:"col-md-6"},{children:(0,o.jsxs)("select",c({id:"sex",className:"selectdiv"},{children:[(0,o.jsx)("option",c({selected:!0},{children:" Choose.. "})),(0,o.jsx)("option",{children:"Male"}),(0,o.jsx)("option",{children:"Female"})]}))}))]})),(0,o.jsxs)("label",c({htmlFor:"age",className:"row"},{children:[(0,o.jsx)("div",c({className:"col-md-6"},{children:"Age"})),(0,o.jsx)("div",c({className:"col-md-6"},{children:(0,o.jsx)("div",c({className:"sliderdiv"},{children:(0,o.jsx)(h,{})}))}))]})),(0,o.jsxs)("label",c({htmlFor:"phone",className:"row"},{children:[(0,o.jsx)("div",c({className:"col-md-6"},{children:"Phone Number"})),(0,o.jsx)("div",c({className:"col-md-6"},{children:(0,o.jsx)("div",c({className:"profile-phone-input-div"},{children:(0,o.jsx)(d.ZP,{className:"phoneInput",international:!0,defaultCountry:"UA",limitMaxLength:!0,value:A,onChange:function(n){return e}})}))}))]})),(0,o.jsxs)("label",c({htmlFor:"about",className:"row"},{children:[(0,o.jsx)("div",c({className:"col-md-6"},{children:"About me"})),(0,o.jsx)("div",c({className:"col-md-6"},{children:(0,o.jsx)(p,c({id:"about",className:"textarea_prop",maxLength:300,showCount:!0,onChange:function(n){console.log("Change:",n.target.value)}},{children:"Some text about you..."}))}))]}))]}))}))}))]})),(0,o.jsx)("div",c({className:"row"},{children:(0,o.jsx)("div",c({className:"col-md-12"},{children:(0,o.jsx)("button",c({type:"submit",className:"profile-edit-btn"},{children:"Edit Profile"}))}))}))]}))}))}}}]);
//# sourceMappingURL=436.js.map