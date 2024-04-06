(globalThis["webpackChunkNeuralFlow"]=globalThis["webpackChunkNeuralFlow"]||[]).push([[394],{1665:(e,t,l)=>{"use strict";l.d(t,{Z:()=>i});var o=l(499),s=l(1569),a=l(9302),n=l(3775);function i(){const e=(0,a.Z)(),t=(0,n.z)(),l=(0,o.qj)({name:null,type:null}),i=(0,o.qj)({name:null,type:null});function u(){s.api.post("/projects",l).then((l=>{t.editprojects(l.data),e.notify({color:"teal-10",textColor:"white",position:"top",icon:"check_circle",message:"Project created successfully"})})).catch((t=>{e.notify({color:"red-5",textColor:"white",position:"top",icon:"warning",message:t.response.data.message})}))}function r(){s.api.get("/projects").then((e=>{t.editprojects(e.data)})).catch((t=>{e.notify({color:"red-5",textColor:"white",position:"top",icon:"warning",message:t.response.data.message})}))}function c(){s.api.put("/projects",i).then((l=>{t.editprojects(l.data),e.notify({color:"teal-10",textColor:"white",position:"top",icon:"check_circle",message:"Project created successfully"})})).catch((t=>{e.notify({color:"red-5",textColor:"white",position:"top",icon:"warning",message:t.response.data.message})}))}return{createProjectInfo:l,updateProjectInfo:i,projects:t,getProject:r,createProject:u,updateProject:c}}},2397:(e,t,l)=>{"use strict";l.d(t,{Z:()=>r});var o=l(499),s=l(1569),a=l(6928),n=l(1665),i=l(9302),u=l(8910);function r(){const e=(0,i.Z)(),t=(0,a.M)(),l=(0,u.tv)(),{getProject:r}=(0,n.Z)(),c=(0,o.qj)({email:"",password:""}),d=(0,o.qj)({name:null,password:null,type:null}),m=(0,o.qj)({name:null});function p(){s.api.post("/auth/signin",c).then((e=>{t.editToken(e.data.access_token),w(),r(),l.push("/")})).catch((t=>{e.notify({color:"red-5",textColor:"white",position:"top",icon:"warning",message:t.response.data.message})}))}function f(){s.api.post("/auth/signup",{...c,type:"user"}).then((e=>{t.editToken(e.data.access_token),w(),r(),l.push("/")})).catch((t=>{e.notify({color:"red-5",textColor:"white",position:"top",icon:"warning",message:t.response.data.message})}))}function w(){s.api.get("/auth/user").then((e=>{t.editUserInfo(e.data),t.userLoaded=!0})).catch((t=>{e.notify({color:"red-5",textColor:"white",position:"top",icon:"warning",message:t.response.data.message})}))}function g(){s.api.post("/auth/subusers",d).then((l=>{t.userInfo.subUsers=l.data,w(),e.notify({color:"teal-10",textColor:"white",position:"top",icon:"check_circle",message:"Your account has been updated successfully"})})).catch((t=>{e.notify({color:"red-5",textColor:"white",position:"top",icon:"warning",message:t.response.data.message})}))}function y(){const l={name:m.name,newName:d.name?d.name:null,password:d.password?d.password:null,type:d.type?d.type:null};s.api.put("/auth/subusers",l).then((l=>{t.userInfo.subUsers=l.data,w(),m.name=null,e.notify({color:"teal-10",textColor:"white",position:"top",icon:"check_circle",message:"Your account has been updated successfully"})})).catch((t=>{e.notify({color:"red-5",textColor:"white",position:"top",icon:"warning",message:t.response.data.message})}))}function b(){console.log(m,"delete data"),s.api.delete("/auth/subusers/"+m.name).then((l=>{t.userInfo.subUsers=l.data,w(),m.name=null,e.notify({color:"teal-10",textColor:"white",position:"top",icon:"check_circle",message:"Sub-user has been deleted successfully"})})).catch((t=>{e.notify({color:"red-5",textColor:"white",position:"top",icon:"warning",message:t.response.data.message})}))}return{credentials:c,subUser:d,selectedSubUser:m,signIn:p,signUp:f,getUser:w,createSubUser:g,updateSubUser:y,deleteSubUser:b}}},3775:(e,t,l)=>{"use strict";l.d(t,{z:()=>s});var o=l(1809);const s=(0,o.Q_)("projects",{state:()=>({projects:[]}),getters:{},actions:{editprojects(e){this.projects=e||this.projects}}})},4394:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>me});var o=l(9835),s=l(6970),a=l(1074),n=l.n(a);const i={class:"row col-12 q-mt-md"},u={class:"col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pr-lg-md q-pr-md-md q-pr-sm-none q-pr-xs-none"},r={class:"row justify-center"},c=(0,o._)("div",{class:"q-mt-md"},[(0,o._)("p",{class:"title text-justify"},[(0,o.Uk)(" You can add sub users to let them use your gmail and their own password to log in to your account and "),(0,o._)("i",null,[(0,o._)("b",null,"view ")]),(0,o.Uk)(" or "),(0,o._)("i",null,[(0,o._)("b",null,"edit data ")]),(0,o.Uk)(" or "),(0,o._)("i",null,[(0,o._)("b",null," both ")]),(0,o.Uk)(". ")]),(0,o._)("p",{class:"text-red"},[(0,o.Uk)(" Please note that do "),(0,o._)("b",null,"not"),(0,o.Uk)(" give your own password to your sub users! ")])],-1),d={class:"row justify-center q-mt-md"},m=(0,o._)("span",null,"can view charts",-1),p=(0,o._)("span",null,"can edit data",-1),f=(0,o._)("span",null,"can edit and view",-1),w=(0,o._)("span",null,"edit sub-user?",-1),g=(0,o._)("span",null,"delete sub-user?",-1),y=(0,o._)("span",null,"add sub-user?",-1),b={class:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},h={class:"row full-width q-pl-lg-xs q-pl-md-xs q-mt-lg-none q-mt-md-none q-mt-sm-md q-mt-xs-md"},_={class:"row col-12"},q={class:"row q-mt-md"},U={class:"row q-mt-md"},k={style:{"font-size":"1rem"}},C={class:"row q-mt-md"},v={class:"row q-mt-md"},x=(0,o._)("span",{class:"q-ml-sm"},"Do you want to update profile?",-1),W=(0,o._)("span",{class:"q-ml-sm"},"Do you want to delete sub-user?",-1),j={key:0,class:"text-h6"},V={key:1,class:"text-h6"},S=(0,o._)("label",null,[(0,o.Uk)("select "),(0,o._)("b",null,"one"),(0,o.Uk)(" of the types below to show what your "),(0,o._)("i",null,"sub-user"),(0,o.Uk)(" can do with your account:")],-1);function I(e,t,l,a,I,Z){const P=(0,o.up)("q-breadcrumbs-el"),D=(0,o.up)("q-breadcrumbs"),Q=(0,o.up)("q-toolbar"),$=(0,o.up)("q-img"),F=(0,o.up)("q-tooltip"),L=(0,o.up)("q-icon"),O=(0,o.up)("q-item-section"),G=(0,o.up)("q-btn"),H=(0,o.up)("q-item"),z=(0,o.up)("q-list"),N=(0,o.up)("q-card"),Y=(0,o.up)("q-input"),T=(0,o.up)("q-select"),M=(0,o.up)("q-form"),B=(0,o.up)("q-card-section"),A=(0,o.up)("q-card-actions"),E=(0,o.up)("q-dialog"),R=(0,o.up)("q-btn-toggle"),J=(0,o.up)("q-page"),K=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(J,{class:"q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{inset:""},{default:(0,o.w5)((()=>[(0,o.Wm)(D,{style:{"font-size":"16px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(P,{label:"Home",icon:"home",to:"/"}),(0,o.Wm)(P,{label:"Manage account",icon:"manage_accounts"})])),_:1})])),_:1}),(0,o._)("div",i,[(0,o._)("div",u,[(0,o.Wm)(N,{class:"q-pa-md"},{default:(0,o.w5)((()=>[(0,o._)("div",r,[(0,o.Wm)($,{src:n(),"spinner-color":"black",style:{width:"100px","border-radius":"15px"}})]),c,(0,o._)("div",d,[e.auth.userInfo.subUsers?((0,o.wg)(),(0,o.j4)(z,{key:0,class:"full-width",bordered:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.auth.userInfo.subUsers,(t=>((0,o.wg)(),(0,o.j4)(H,{key:t},{default:(0,o.w5)((()=>[(0,o.Wm)(O,{avatar:""},{default:(0,o.w5)((()=>["read"==t.type?((0,o.wg)(),(0,o.j4)(L,{key:0,color:"primary",name:"visibility"},{default:(0,o.w5)((()=>[e.$q.screen.gt.md?((0,o.wg)(),(0,o.j4)(F,{key:0},{default:(0,o.w5)((()=>[m])),_:1})):(0,o.kq)("",!0)])),_:1})):(0,o.kq)("",!0),"write"==t.type?((0,o.wg)(),(0,o.j4)(L,{key:1,color:"primary",name:"edit"},{default:(0,o.w5)((()=>[e.$q.screen.gt.md?((0,o.wg)(),(0,o.j4)(F,{key:0},{default:(0,o.w5)((()=>[p])),_:1})):(0,o.kq)("",!0)])),_:1})):(0,o.kq)("",!0),"readandwrite"==t.type?((0,o.wg)(),(0,o.j4)(L,{key:2,color:"primary",class:"justify-end",name:"discover_tune"},{default:(0,o.w5)((()=>[e.$q.screen.gt.md?((0,o.wg)(),(0,o.j4)(F,{key:0},{default:(0,o.w5)((()=>[f])),_:1})):(0,o.kq)("",!0)])),_:1})):(0,o.kq)("",!0)])),_:2},1024),(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(t.name),1)])),_:2},1024),(0,o.Wm)(O,{class:"items-end"},{default:(0,o.w5)((()=>[(0,o.Wm)(G,{style:{"max-width":"50px"},class:"green-btn",icon:"edit",onClick:l=>e.showSubUserDialog(t)},{default:(0,o.w5)((()=>[e.$q.screen.gt.md?((0,o.wg)(),(0,o.j4)(F,{key:0},{default:(0,o.w5)((()=>[w])),_:1})):(0,o.kq)("",!0)])),_:2},1032,["onClick"])])),_:2},1024),(0,o.Wm)(O,{class:"items-end"},{default:(0,o.w5)((()=>[(0,o.Wm)(G,{style:{"max-width":"50px"},class:"red-btn",icon:"cancel",onClick:l=>e.showDeleteDialog(t.name)},{default:(0,o.w5)((()=>[e.$q.screen.gt.md?((0,o.wg)(),(0,o.j4)(F,{key:0},{default:(0,o.w5)((()=>[g])),_:1})):(0,o.kq)("",!0)])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)))),128)),e.auth.userInfo.subUsers.length<3?((0,o.wg)(),(0,o.j4)(H,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(O,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(L,{color:"primary",name:"account_circle"})])),_:1}),(0,o.Wm)(O,{class:"items-end"},{default:(0,o.w5)((()=>[(0,o.Wm)(G,{style:{"max-width":"50px"},icon:"add_circle",onClick:t[0]||(t[0]=t=>e.showSubUserDialog(null))},{default:(0,o.w5)((()=>[e.$q.screen.gt.md?((0,o.wg)(),(0,o.j4)(F,{key:0},{default:(0,o.w5)((()=>[y])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1})])),_:1})):(0,o.kq)("",!0)])),_:1})):(0,o.kq)("",!0)])])),_:1})]),(0,o._)("div",b,[(0,o._)("div",h,[(0,o.Wm)(N,{class:"q-pa-xs full-width"},{default:(0,o.w5)((()=>[(0,o.Wm)(B,null,{default:(0,o.w5)((()=>[(0,o.Wm)(M,{class:"q-mb-xs",onSubmit:t[11]||(t[11]=t=>e.updateProfileDialog=!0)},{default:(0,o.w5)((()=>[(0,o._)("div",_,[(0,o.Wm)(Y,{class:"full-width",label:"Full Name",filled:"",maxlength:"60",modelValue:e.profileInfo.name,"onUpdate:modelValue":t[1]||(t[1]=t=>e.profileInfo.name=t)},null,8,["modelValue"])]),(0,o._)("div",q,[(0,o._)("div",{class:(0,s.C_)(["col-md-4 col-12",e.$q.screen.lt.md?"":"q-pr-sm"])},[(0,o.Wm)(T,{filled:"",modelValue:e.utils.country,"onUpdate:modelValue":[t[2]||(t[2]=t=>e.utils.country=t),e.getStates],"use-input":"","input-debounce":"0",label:"country",options:e.countryOptions,behavior:"menu",onFilter:e.filterCountries},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(H,null,{default:(0,o.w5)((()=>[(0,o.Wm)(O,{class:"text-grey"},{default:(0,o.w5)((()=>[(0,o.Uk)(" No results ")])),_:1})])),_:1})])),_:1},8,["modelValue","options","onFilter","onUpdate:modelValue"])],2),(0,o._)("div",{class:(0,s.C_)(["col-md-4 col-12",e.$q.screen.lt.md?"q-mt-md":"q-px-sm"])},[(0,o.Wm)(T,{filled:"",modelValue:e.utils.state,"onUpdate:modelValue":[t[3]||(t[3]=t=>e.utils.state=t),e.getCities],"use-input":"","input-debounce":"0",label:"state",options:e.stateOptions,readonly:!e.utils.country,behavior:"menu",onFilter:e.filterStates},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(H,null,{default:(0,o.w5)((()=>[(0,o.Wm)(O,{class:"text-grey"},{default:(0,o.w5)((()=>[(0,o.Uk)(" No results ")])),_:1})])),_:1})])),default:(0,o.w5)((()=>[e.utils.country?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(F,{key:0},{default:(0,o.w5)((()=>[(0,o.Uk)(" select country first! ")])),_:1}))])),_:1},8,["modelValue","options","readonly","onFilter","onUpdate:modelValue"])],2),(0,o._)("div",{class:(0,s.C_)(["col-md-4 col-12",e.$q.screen.lt.md?"q-mt-md":"q-px-sm"])},[(0,o.Wm)(T,{filled:"",modelValue:e.utils.city,"onUpdate:modelValue":t[4]||(t[4]=t=>e.utils.city=t),"use-input":"","input-debounce":"0",label:"city",options:e.cityOptions,readonly:!e.utils.state,behavior:"menu",onFilter:e.filterCities},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(H,null,{default:(0,o.w5)((()=>[(0,o.Wm)(O,{class:"text-grey"},{default:(0,o.w5)((()=>[(0,o.Uk)(" No results ")])),_:1})])),_:1})])),default:(0,o.w5)((()=>[e.utils.state?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(F,{key:0},{default:(0,o.w5)((()=>[(0,o.Uk)(" select state first! ")])),_:1}))])),_:1},8,["modelValue","options","readonly","onFilter"])],2)]),(0,o._)("div",U,[(0,o._)("div",{class:(0,s.C_)(["col-md-3 col-12",e.$q.screen.lt.md?"":"q-pr-sm"])},[(0,o.Wm)(Y,{class:"full-width",label:"Age",filled:"",type:"number",min:1,max:999,modelValue:e.profileInfo.age,"onUpdate:modelValue":t[5]||(t[5]=t=>e.profileInfo.age=t)},null,8,["modelValue"])],2),(0,o._)("div",{class:(0,s.C_)(["col-md-3 col-12",e.$q.screen.lt.md?"q-mt-md":"q-px-sm"])},[(0,o.Wm)(Y,{class:"full-width",label:"Plan",disable:"",filled:"",modelValue:e.profileInfo.plan,"onUpdate:modelValue":t[6]||(t[6]=t=>e.profileInfo.plan=t)},null,8,["modelValue"])],2),(0,o._)("div",{class:(0,s.C_)(["col-md-6 col-12",e.$q.screen.lt.md?"q-mt-md":"q-pl-sm"])},[(0,o.Wm)(Y,{class:"full-width",type:"tel",filled:"",maxlength:"15","lazy-rules":"",readonly:!e.utils.country,modelValue:e.profileInfo.mobile,"onUpdate:modelValue":t[7]||(t[7]=t=>e.profileInfo.mobile=t)},(0,o.Nv)({before:(0,o.w5)((()=>[(0,o.Wm)(L,{name:"phone_android"})])),default:(0,o.w5)((()=>[e.utils.countryl?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(F,{key:0},{default:(0,o.w5)((()=>[(0,o.Uk)(" select country first! ")])),_:1}))])),_:2},[e.utils.country?{name:"prepend",fn:(0,o.w5)((()=>[(0,o._)("span",k,"("+(0,s.zw)(e.utils.country.code)+")",1)])),key:"0"}:void 0]),1032,["readonly","modelValue"])],2)]),(0,o._)("div",C,[(0,o._)("div",{class:(0,s.C_)(["col-md-4 col-12",e.$q.screen.lt.md?"":"q-pr-sm"])},[(0,o.Wm)(T,{filled:"",modelValue:e.profileInfo.gender,"onUpdate:modelValue":t[8]||(t[8]=t=>e.profileInfo.gender=t),options:e.genderOptions,label:"Gender"},null,8,["modelValue","options"])],2),(0,o._)("div",{class:(0,s.C_)(["col-md-4 col-12",e.$q.screen.lt.md?"q-mt-md":"q-px-sm"])},[(0,o.Wm)(Y,{class:"full-width",label:"Company",filled:"",maxlength:"15",modelValue:e.profileInfo.company,"onUpdate:modelValue":t[9]||(t[9]=t=>e.profileInfo.company=t)},null,8,["modelValue"])],2),(0,o._)("div",{class:(0,s.C_)(["col-md-4 col-12",e.$q.screen.lt.md?"q-mt-md":"q-pl-sm"])},[(0,o.Wm)(Y,{class:"full-width",label:"Job",filled:"",maxlength:"15",modelValue:e.profileInfo.job,"onUpdate:modelValue":t[10]||(t[10]=t=>e.profileInfo.job=t)},null,8,["modelValue"])],2)]),(0,o._)("div",v,[(0,o.Wm)(G,{label:"Update profile",class:"q-mt-md q-px-lg",type:"submit"})])])),_:1})])),_:1})])),_:1})])])]),(0,o.Wm)(E,{modelValue:e.updateProfileDialog,"onUpdate:modelValue":t[12]||(t[12]=t=>e.updateProfileDialog=t)},{default:(0,o.w5)((()=>[(0,o.Wm)(N,{class:"q-px-lg q-py-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(B,{class:"row items-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(L,{name:"edit"}),x])),_:1}),(0,o.Wm)(A,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(G,{flat:"",label:"Cancel",color:"primary"},null,512),[[K]]),(0,o.wy)((0,o.Wm)(G,{flat:"",label:"confrim",color:"primary",onClick:e.updateProfile},null,8,["onClick"]),[[K]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(E,{modelValue:e.deleteSubUserDialog,"onUpdate:modelValue":t[14]||(t[14]=t=>e.deleteSubUserDialog=t)},{default:(0,o.w5)((()=>[(0,o.Wm)(N,{class:"q-px-lg q-py-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(B,{class:"row items-center"},{default:(0,o.w5)((()=>[W])),_:1}),(0,o.Wm)(A,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(G,{flat:"",label:"Cancel",color:"primary",onClick:t[13]||(t[13]=t=>e.selectedSubUser.name=null)},null,512),[[K]]),(0,o.wy)((0,o.Wm)(G,{flat:"",label:"confrim",color:"primary",onClick:e.deleteSubUser},null,8,["onClick"]),[[K]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(E,{modelValue:e.subUserDialog,"onUpdate:modelValue":t[20]||(t[20]=t=>e.subUserDialog=t),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(N,{style:{width:"700px","max-width":"80vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(B,null,{default:(0,o.w5)((()=>[e.subUserDialogMode?((0,o.wg)(),(0,o.iD)("div",j," Edit "+(0,s.zw)(e.selectedSubUser.name)+" ? ",1)):((0,o.wg)(),(0,o.iD)("div",V,"Add new Sub-user?"))])),_:1}),(0,o.Wm)(B,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(Y,{dense:"",filled:"",label:"sub-user name",modelValue:e.subUser.name,"onUpdate:modelValue":t[15]||(t[15]=t=>e.subUser.name=t),autofocus:""},null,8,["modelValue"]),(0,o.Wm)(Y,{dense:"",filled:"",class:"q-my-md",label:"sub-user password",modelValue:e.subUser.password,"onUpdate:modelValue":t[16]||(t[16]=t=>e.subUser.password=t)},null,8,["modelValue"]),S,(0,o.Wm)(R,{modelValue:e.subUser.type,"onUpdate:modelValue":t[17]||(t[17]=t=>e.subUser.type=t),class:"q-mt-md","toggle-color":"primary",options:[{label:"Read only",value:"read"},{label:"Write only",value:"write"},{label:"Read and Write",value:"readandwrite"}]},null,8,["modelValue"])])),_:1}),(0,o.Wm)(A,{align:"right",class:"text-primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(G,{flat:"",label:"Cancel",onClick:t[18]||(t[18]=t=>e.subUserFunc(!1))}),(0,o.Wm)(G,{flat:"",label:"Confirm",onClick:t[19]||(t[19]=t=>e.subUserFunc(!0))})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var Z=l(499),P=l(1569),D=l(1809);const Q=(0,D.Q_)("util",{state:()=>({countries:[],states:[],cities:[],country:null,state:null,city:null}),getters:{},actions:{editGeo(e){this.country=e.country?e.country:this.country,this.state=e.state?e.state:this.state,this.city=e.city?e.city:this.city},editGeoList(e){this.countries=e.countries?e.countries:this.countries,this.states=e.states?e.states:this.states,this.cities=e.cities?e.cities:this.cities}}});var $=l(9302);function F(){const e=(0,$.Z)(),t=Q();function l(){P.api.get("/utils/countries").then((e=>{const l=e.data.map((e=>({value:e.id,label:e.name,code:e.phone_code})));if(t.editGeoList({countries:l}),t.country){for(let e=0;e<t.countries.length;e++)t.countries[e].label==t.country&&t.editGeo({country:t.countries[e]});o()}})).catch((t=>{e.notify({color:"red-5",textColor:"white",position:"top",icon:"warning",message:t.response.data.message})}))}function o(){P.api.get("/utils/states/"+t.country.value?.toString()).then((e=>{const l=e.data.map((e=>({value:e.id,label:e.name})));if(t.editGeoList({states:l}),t.state&&"string"==typeof t.state){for(let e=0;e<t.states.length;e++)t.states[e].label==t.state&&(t.state=t.states[e]);s()}else t.state=null,t.city=null})).catch((t=>{e.notify({color:"red-5",textColor:"white",position:"top",icon:"warning",message:t.response.data.message})}))}function s(){P.api.get("/utils/cities/"+t.state.value?.toString()).then((e=>{const l=e.data.map((e=>({value:e.id,label:e.name})));if(t.editGeoList({cities:l}),t.city&&"string"==typeof t.city)for(let o=0;o<t.cities.length;o++)t.cities[o].label==t.city&&(t.city=t.cities[o]);else t.city=null})).catch((t=>{e.notify({color:"red-5",textColor:"white",position:"top",icon:"warning",message:t.response.data.message})}))}return{getCountries:l,getStates:o,getCities:s}}function L(){const e=(0,$.Z)(),t=Q(),{getCountries:l}=F(),o=(0,Z.qj)({name:null,age:0,gender:null,mobile:null,plan:"free",job:null,company:null,country:null,state:null,city:null});function s(){P.api.post("/profile",o).then((e=>{})).catch((t=>{e.notify({color:"red-5",textColor:"white",position:"top",icon:"warning",message:t.response.data.message})}))}function a(){P.api.get("/profile").then((e=>{Object.keys(o).forEach((t=>{e.data[t]&&(o[t]=e.data[t])})),t.editGeo(e.data),l()})).catch((t=>{404==t.response.data.statusCode?s():e.notify({color:"red-5",textColor:"white",position:"top",icon:"warning",message:t.response.data.message})}))}function n(){o.country=t.country?.label,o.state=t.state?.label,o.city=t.city?.label,P.api.put("/profile",o).then((l=>{e.notify({color:"teal-10",textColor:"white",position:"top",icon:"check_circle",message:"Your account has been updated successfully"}),t.editGeo(l.data)})).catch((t=>{e.notify({color:"red-5",textColor:"white",position:"top",icon:"warning",message:t.response.data.message})}))}return{profileInfo:o,getProfile:a,updateProfile:n,createProfile:s}}var O=l(2397),G=l(6928);const H=(0,o.aZ)({name:"ProfilePage",setup(){const{getProfile:e,profileInfo:t,updateProfile:l}=L(),{getStates:s,getCities:a}=F(),{deleteSubUser:n,selectedSubUser:i,subUser:u,createSubUser:r,updateSubUser:c}=(0,O.Z)(),d=(0,G.M)(),m=Q(),p=(0,Z.iH)(!1),f=(0,Z.iH)(!1),w=(0,Z.iH)(!0),g=(0,Z.iH)(!1),y=(0,Z.iH)([]),b=(0,Z.iH)([]),h=(0,Z.iH)([]),_=e=>{u.name=null,u.password=null,u.type=null,w.value=!!e,i.name=e?e.name:null,g.value=!0},q=e=>{e&&(u.name||u.password||u.type)?(w.value?c():r(),g.value=!1):(i.name=null,u.name=null,u.password=null,u.type=null,g.value=!1)},U=e=>{i.name=e,f.value=!0},k=(e,t)=>{t((()=>{const t=e.toLowerCase();y.value=m.countries.filter((e=>e.label.toLowerCase().indexOf(t)>-1))}))},C=(e,t)=>{t((()=>{const t=e.toLowerCase();b.value=m.states.filter((e=>e.label.toLowerCase().indexOf(t)>-1))}))},v=(e,t)=>{t((()=>{const t=e.toLowerCase();h.value=m.cities.filter((e=>e.label.toLowerCase().indexOf(t)>-1))}))};return(0,o.YP)(m.countries,((e,t)=>{y.value=e})),(0,o.YP)(m.states,((e,t)=>{b.value=e})),(0,o.YP)(m.cities,((e,t)=>{h.value=e})),(0,o.bv)((()=>{e()})),{genderOptions:["male","female","other"],utils:m,countryOptions:y,stateOptions:b,cityOptions:h,filterCountries:k,filterStates:C,filterCities:v,getStates:s,getCities:a,updateProfileDialog:p,updateProfile:l,profileInfo:t,auth:d,selectedSubUser:i,deleteSubUser:n,deleteSubUserDialog:f,showDeleteDialog:U,showSubUserDialog:_,subUserFunc:q,subUser:u,subUserDialogMode:w,subUserDialog:g}}});var z=l(1639),N=l(9885),Y=l(1663),T=l(2605),M=l(8052),B=l(4458),A=l(335),E=l(3246),R=l(490),J=l(6749),K=l(2857),X=l(6858),ee=l(8879),te=l(3190),le=l(8326),oe=l(3119),se=l(4362),ae=l(2074),ne=l(1821),ie=l(8983),ue=l(2146),re=l(9984),ce=l.n(re);const de=(0,z.Z)(H,[["render",I]]),me=de;ce()(H,"components",{QPage:N.Z,QToolbar:Y.Z,QBreadcrumbs:T.Z,QBreadcrumbsEl:M.Z,QCard:B.Z,QImg:A.Z,QList:E.Z,QItem:R.Z,QItemSection:J.Z,QIcon:K.Z,QTooltip:X.Z,QBtn:ee.Z,QCardSection:te.Z,QForm:le.Z,QInput:oe.Z,QSelect:se.Z,QDialog:ae.Z,QCardActions:ne.Z,QBtnToggle:ie.Z}),ce()(H,"directives",{ClosePopup:ue.Z})},1074:(e,t,l)=>{e.exports=l.p+"img/logo.03063e6d.png"}}]);