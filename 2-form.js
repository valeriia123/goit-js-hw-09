import"./assets/style-B17TD1K1.js";const a=document.querySelector(".feedback-form");let o={email:"",message:""};const n=()=>{try{if(localStorage.length===0)return;const e=JSON.parse(localStorage.getItem("feedback-form-state"));o=e;for(const t in e)a.elements[t].value=e[t]}catch(e){console.log(e)}};n();const c=e=>{const{target:t}=e,r=t.value,l=t.name;o[l]=r,localStorage.setItem("feedback-form-state",JSON.stringify(o))},s=e=>{e.preventDefault();for(const r in o)if(o[r].trim()===""){alert("Fill please all fields");return}const{currentTarget:t}=e;t.reset(),localStorage.removeItem("feedback-form-state")};a.addEventListener("input",c);a.addEventListener("submit",s);
//# sourceMappingURL=2-form.js.map
