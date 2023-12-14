import{_ as f,m as y,u as v,r as a,o as _,c as x,a as o,w as d,b as n,d as F,e as T,f as b,g as V,v as P,p as U,h as k}from"./index-6893c361.js";const L={name:"Login",data(){return{loginForm:{username:"admin",password:"111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:(c,l,e)=>{P(l)?e():e(new Error("Please enter the correct user name"))}}],password:[{required:!0,trigger:"blur",validator:(c,l,e)=>{l.length<6?e(new Error("The password can not be less than 6 digits")):e()}}]},loading:!1,passwordType:"password",redirect:void 0}},computed:{...y(v)},watch:{$route:{deep:!0,handler:function(s){this.redirect=s.query&&s.query.redirect},immediate:!0}},methods:{showPwd(){this.passwordType==="password"?this.passwordType="":this.passwordType="password",this.$nextTick(()=>{this.$refs.password.focus()})},handleLogin(){this.$refs.loginForm.validate(s=>{if(s)this.loading=!0,this.userStore.login(this.loginForm).then(()=>{this.$router.push({path:this.redirect||"/"}),this.loading=!1}).catch(()=>{this.loading=!1});else return console.log("error submit!!"),!1})}}},g=s=>(U("data-v-94ee07f6"),s=s(),k(),s),S={class:"login-container"},C=g(()=>n("div",{class:"title-container"},[n("h3",{class:"title"},"Login Form")],-1)),q={class:"svg-container"},B={class:"svg-container"},I=g(()=>n("div",{class:"tips"},[n("span",{style:{"margin-right":"20px"}},"username: admin"),n("span",null," password: any")],-1));function E(s,r,c,l,e,i){const p=a("svg-icon"),u=a("el-input"),m=a("el-form-item"),h=a("el-button"),w=a("el-form");return _(),x("div",S,[o(w,{ref:"loginForm",model:e.loginForm,rules:e.loginRules,class:"login-form","auto-complete":"on","label-position":"left"},{default:d(()=>[C,o(m,{prop:"username"},{default:d(()=>[n("span",q,[o(p,{"icon-class":"user"})]),o(u,{ref:"username",modelValue:e.loginForm.username,"onUpdate:modelValue":r[0]||(r[0]=t=>e.loginForm.username=t),placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},null,8,["modelValue"])]),_:1}),o(m,{prop:"password"},{default:d(()=>[n("span",B,[o(p,{"icon-class":"password"})]),(_(),F(u,{key:e.passwordType,ref:"password",modelValue:e.loginForm.password,"onUpdate:modelValue":r[1]||(r[1]=t=>e.loginForm.password=t),type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on",onKeyup:T(i.handleLogin,["enter"])},null,8,["modelValue","type","onKeyup"])),n("span",{class:"show-pwd",onClick:r[2]||(r[2]=(...t)=>i.showPwd&&i.showPwd(...t))},[o(p,{"icon-class":e.passwordType==="password"?"eye":"eye-open"},null,8,["icon-class"])])]),_:1}),o(h,{loading:e.loading,type:"primary",style:{width:"100%","margin-bottom":"30px"},onClick:b(i.handleLogin,["prevent"])},{default:d(()=>[V("Login")]),_:1},8,["loading","onClick"]),I]),_:1},8,["model","rules"])])}const N=f(L,[["render",E],["__scopeId","data-v-94ee07f6"]]);export{N as default};