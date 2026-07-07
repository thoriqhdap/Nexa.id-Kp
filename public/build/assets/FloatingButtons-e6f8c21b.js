import{c as r}from"./Footer-4e6ac15c.js";import{r as o,j as e}from"./app-255f1ab7.js";import{M as l}from"./message-circle-1dda78c7.js";/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],p=r("arrow-right",c);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],h=r("arrow-up",i);function u(){const[a,s]=o.useState(!1);o.useEffect(()=>{const t=()=>s(window.scrollY>500);return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]);const n=()=>window.scrollTo({top:0,behavior:"smooth"});return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:n,className:`fixed bottom-24 right-6 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-orange-400 hover:scale-110 z-50 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-10 pointer-events-none"}`,"aria-label":"Scroll to top",children:e.jsx(h,{className:"w-6 h-6 text-white"})}),e.jsx("a",{href:"https://wa.me/628112971000",target:"_blank",rel:"noopener noreferrer",className:"fixed bottom-6 right-6 w-14 h-14 bg-[#1565C0] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-blue-500 hover:scale-110 z-50","aria-label":"Chat with customer care",children:e.jsx(l,{className:"w-7 h-7 text-white"})})]})}export{p as A,u as F};
