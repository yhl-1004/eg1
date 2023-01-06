"use strict";(self.webpackChunkberry_material_react_free=self.webpackChunkberry_material_react_free||[]).push([[170],{4387:function(e,t,r){r(2791);t.Z=r.p+"static/media/social-google.9887eb8eb43729cb99f402cfa0de3c44.svg"},5177:function(e,t,r){var n=r(2791);t.Z=()=>{const e=(0,n.useRef)(!0);return(0,n.useEffect)((()=>()=>{e.current=!1}),[]),e}},8393:function(e,t,r){var n=r(3767),s=r(890),i=r(43),l=r(184);t.Z=()=>(0,l.jsxs)(n.Z,{direction:"row",justifyContent:"space-between",children:[(0,l.jsx)(s.Z,{variant:"subtitle2",component:i.Z,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),(0,l.jsx)(s.Z,{variant:"subtitle2",component:i.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})},5290:function(e,t,r){var n=r(4554),s=r(3735),i=r(184);t.Z=e=>{let{children:t,...r}=e;return(0,i.jsx)(s.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...r,children:(0,i.jsx)(n.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:t})})}},3914:function(e,t,r){const n=(0,r(6934).ZP)("div")((e=>{let{theme:t}=e;return{backgroundColor:t.palette.primary.light,minHeight:"100vh"}}));t.Z=n},3170:function(e,t,r){r.r(t),r.d(t,{default:function(){return G}});var n=r(3504),s=r(3967),i=r(5193),l=r(1889),a=r(3767),o=r(890),c=r(4721),d=r(3914),x=r(5290),h=r(4904),m=r(2791),u=r(9434),Z=r(6151),g=r(4554),j=r(6689),p=r(8096),b=r(4925),f=r(8029),y=r(7071),v=r(3466),w=r(3400),P=r(5523),C=r(4454),k=r(1724),S=r(5705),I=r(5177),R=r(4387),E=r(752),_=r(8781);const W=e=>{let t=0;return e.length>5&&(t+=1),e.length>7&&(t+=1),(e=>new RegExp(/[0-9]/).test(e))(e)&&(t+=1),(e=>new RegExp(/[!#@$%^&*)(+=._-]/).test(e))(e)&&(t+=1),(e=>new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e))(e)&&(t+=1),t};var z=r(3746),B=r(165),A=r(184);var M=e=>{let{...t}=e;const r=(0,s.Z)(),a=(0,I.Z)(),d=(0,i.Z)(r.breakpoints.down("md")),x=(0,u.v9)((e=>e.customization)),[h,M]=(0,m.useState)(!1),[D,G]=(0,m.useState)(!0),[q,F]=(0,m.useState)(0),[U,V]=(0,m.useState)(),H=()=>{M(!h)},N=e=>{e.preventDefault()},J=e=>{const t=W(e);var r;F(t),V((r=t)<2?{label:"Poor",color:_.Z.errorMain}:r<3?{label:"Weak",color:_.Z.warningDark}:r<4?{label:"Normal",color:_.Z.orangeMain}:r<5?{label:"Good",color:_.Z.successMain}:r<6?{label:"Strong",color:_.Z.successDark}:{label:"Poor",color:_.Z.errorMain})};return(0,m.useEffect)((()=>{J("123456")}),[]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(l.ZP,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsx)(E.Z,{children:(0,A.jsxs)(Z.Z,{variant:"outlined",fullWidth:!0,onClick:async()=>{console.error("Register")},size:"large",sx:{color:"grey.700",backgroundColor:r.palette.grey[50],borderColor:r.palette.grey[100]},children:[(0,A.jsx)(g.Z,{sx:{mr:{xs:1,sm:2,width:20}},children:(0,A.jsx)("img",{src:R.Z,alt:"google",width:16,height:16,style:{marginRight:d?8:16}})}),"Sign up with Google"]})})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsxs)(g.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,A.jsx)(c.Z,{sx:{flexGrow:1},orientation:"horizontal"}),(0,A.jsx)(Z.Z,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:"".concat(r.palette.grey[100]," !important"),color:"".concat(r.palette.grey[900],"!important"),fontWeight:500,borderRadius:"".concat(x.borderRadius,"px")},disableRipple:!0,disabled:!0,children:"OR"}),(0,A.jsx)(c.Z,{sx:{flexGrow:1},orientation:"horizontal"})]})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:(0,A.jsx)(g.Z,{sx:{mb:2},children:(0,A.jsx)(o.Z,{variant:"subtitle1",children:"Sign up with Email address"})})})]}),(0,A.jsx)(S.J9,{initialValues:{email:"",password:"",submit:null},validationSchema:k.Ry().shape({email:k.Z_().email("Must be a valid email").max(255).required("Email is required"),password:k.Z_().max(255).required("Password is required")}),onSubmit:async(e,t)=>{let{setErrors:r,setStatus:n,setSubmitting:s}=t;try{a.current&&(n({success:!0}),s(!1))}catch(i){console.error(i),a.current&&(n({success:!1}),r({submit:i.message}),s(!1))}},children:e=>{let{errors:s,handleBlur:i,handleChange:a,handleSubmit:c,isSubmitting:x,touched:m,values:u}=e;return(0,A.jsxs)("form",{noValidate:!0,onSubmit:c,...t,children:[(0,A.jsxs)(l.ZP,{container:!0,spacing:d?0:2,children:[(0,A.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,A.jsx)(j.Z,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",defaultValue:"",sx:{...r.typography.customInput}})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,A.jsx)(j.Z,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",defaultValue:"",sx:{...r.typography.customInput}})})]}),(0,A.jsxs)(p.Z,{fullWidth:!0,error:Boolean(m.email&&s.email),sx:{...r.typography.customInput},children:[(0,A.jsx)(b.Z,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),(0,A.jsx)(f.Z,{id:"outlined-adornment-email-register",type:"email",value:u.email,name:"email",onBlur:i,onChange:a,inputProps:{}}),m.email&&s.email&&(0,A.jsx)(y.Z,{error:!0,id:"standard-weight-helper-text--register",children:s.email})]}),(0,A.jsxs)(p.Z,{fullWidth:!0,error:Boolean(m.password&&s.password),sx:{...r.typography.customInput},children:[(0,A.jsx)(b.Z,{htmlFor:"outlined-adornment-password-register",children:"Password"}),(0,A.jsx)(f.Z,{id:"outlined-adornment-password-register",type:h?"text":"password",value:u.password,name:"password",label:"Password",onBlur:i,onChange:e=>{a(e),J(e.target.value)},endAdornment:(0,A.jsx)(v.Z,{position:"end",children:(0,A.jsx)(w.Z,{"aria-label":"toggle password visibility",onClick:H,onMouseDown:N,edge:"end",size:"large",children:h?(0,A.jsx)(z.Z,{}):(0,A.jsx)(B.Z,{})})}),inputProps:{}}),m.password&&s.password&&(0,A.jsx)(y.Z,{error:!0,id:"standard-weight-helper-text-password-register",children:s.password})]}),0!==q&&(0,A.jsx)(p.Z,{fullWidth:!0,children:(0,A.jsx)(g.Z,{sx:{mb:2},children:(0,A.jsxs)(l.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,A.jsx)(l.ZP,{item:!0,children:(0,A.jsx)(g.Z,{style:{backgroundColor:null===U||void 0===U?void 0:U.color},sx:{width:85,height:8,borderRadius:"7px"}})}),(0,A.jsx)(l.ZP,{item:!0,children:(0,A.jsx)(o.Z,{variant:"subtitle1",fontSize:"0.75rem",children:null===U||void 0===U?void 0:U.label})})]})})}),(0,A.jsx)(l.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:(0,A.jsx)(l.ZP,{item:!0,children:(0,A.jsx)(P.Z,{control:(0,A.jsx)(C.Z,{checked:D,onChange:e=>G(e.target.checked),name:"checked",color:"primary"}),label:(0,A.jsxs)(o.Z,{variant:"subtitle1",children:["Agree with \xa0",(0,A.jsx)(o.Z,{variant:"subtitle1",component:n.rU,to:"#",children:"Terms & Condition."})]})})})}),s.submit&&(0,A.jsx)(g.Z,{sx:{mt:3},children:(0,A.jsx)(y.Z,{error:!0,children:s.submit})}),(0,A.jsx)(g.Z,{sx:{mt:2},children:(0,A.jsx)(E.Z,{children:(0,A.jsx)(Z.Z,{disableElevation:!0,disabled:x,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]})}})]})},D=r(8393);var G=()=>{const e=(0,s.Z)(),t=(0,i.Z)(e.breakpoints.down("md"));return(0,A.jsx)(d.Z,{children:(0,A.jsxs)(l.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsx)(l.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,A.jsx)(l.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,A.jsx)(x.Z,{children:(0,A.jsxs)(l.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,A.jsx)(l.ZP,{item:!0,sx:{mb:3},children:(0,A.jsx)(n.rU,{to:"#",children:(0,A.jsx)(h.Z,{})})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsx)(l.ZP,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,A.jsx)(l.ZP,{item:!0,children:(0,A.jsxs)(a.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,A.jsx)(o.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Sign up"}),(0,A.jsx)(o.Z,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsx)(M,{})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsx)(c.Z,{})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsx)(l.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,A.jsx)(o.Z,{component:n.rU,to:"/pages/login/login3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,A.jsx)(D.Z,{})})]})})}}}]);
//# sourceMappingURL=170.c339cb65.chunk.js.map