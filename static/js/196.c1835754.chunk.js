"use strict";(self.webpackChunktest_project=self.webpackChunktest_project||[]).push([[196],{4196:function(e,r,t){t.r(r),t.d(r,{default:function(){return l}});var i=t(1413),s=(t(2791),t(1134)),d=t(2426),a=t.n(d),n=t(1265),u=t(9271),o=t(7459),c=t(2687),h=t(9678),f=t(184),l=function(){var e=(0,s.cI)({resolver:(0,n.X)(c.p),defaultValues:{}}),r=e.register,t=e.handleSubmit,d=e.reset,l=e.formState.errors,p=(0,h.o)(),x=p.fetchAddUser,m=p.fetchAllUsers,b=(0,u.k6)();return(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)("h1",{children:"Add User"}),(0,f.jsx)(o.H4,{handleSubmit:t,onSubmit:function(e){var r=a()(e.birth_date,"YYYY[-MM[-DD]]").format().slice(0,10),t=(0,i.Z)((0,i.Z)({},e),{},{birth_date:r});x(t),m(),b.push("/")},register:r,errors:l,children:(0,f.jsxs)("div",{className:"mt-5",children:[(0,f.jsx)(o.zx,{border:"none",color:"#ffffff",backgroundColor:"#2d8dd6",width:"150px",height:"auto",type:"submit",radius:"5px",children:"Add user",padding:"10px 20px"}),(0,f.jsx)(o.zx,{border:"none",color:"#ffffff",backgroundColor:"#ebc334",width:"150px",height:"auto",type:"button",radius:"5px",children:"Reset",padding:"10px 20px",onClick:function(){return d()}})]})})]})}},2687:function(e,r,t){t.d(r,{p:function(){return s}});var i=t(7712),s=i.Ry().shape({first_name:i.Z_().required("First Name is required").max(256,"First Name must not exceed 256 characters"),last_name:i.Z_().required("Last Name is required").max(256,"Last Name must not exceed 256 characters"),birth_date:i.hT().required("Birth Date is required"),gender:i.Z_().required("Gender is required"),biography:i.Z_().required("Biography is required").max(1024,"Biography must not exceed 1024 characters"),job:i.Z_().required("Job is required").max(256,"Job must not exceed 256 characters")})}}]);
//# sourceMappingURL=196.c1835754.chunk.js.map