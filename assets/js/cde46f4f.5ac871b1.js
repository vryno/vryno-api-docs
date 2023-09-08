"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[9459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={},l="Deal Pipeline in Vryno CRM",r={unversionedId:"vryno_user_manual/customizations_in_vryno/deal_pipeline_in_vryno_crm",id:"vryno_user_manual/customizations_in_vryno/deal_pipeline_in_vryno_crm",title:"Deal Pipeline in Vryno CRM",description:"What is a Deal Pipeline?",source:"@site/docs/vryno_user_manual/customizations_in_vryno/deal_pipeline_in_vryno_crm.md",sourceDirName:"vryno_user_manual/customizations_in_vryno",slug:"/vryno_user_manual/customizations_in_vryno/deal_pipeline_in_vryno_crm",permalink:"/docs/vryno_user_manual/customizations_in_vryno/deal_pipeline_in_vryno_crm",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/vryno_user_manual/customizations_in_vryno/deal_pipeline_in_vryno_crm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dasboards & Widgets in Vryno CRM",permalink:"/docs/vryno_user_manual/customizations_in_vryno/dashboards_in_vryno_crm"},next:{title:"Lead Conversion Mapping in Vryno CRM",permalink:"/docs/vryno_user_manual/customizations_in_vryno/lead_conversion_mapping_in_vryno_crm"}},s={},p=[{value:"What is a Deal Pipeline?",id:"what-is-a-deal-pipeline",level:2},{value:"How to create a new Deal Pipeline in Vryno CRM",id:"how-to-create-a-new-deal-pipeline-in-vryno-crm",level:2},{value:"How to add or associate Deal Stages to a Deal Pipeline in Vryno CRM",id:"how-to-add-or-associate-deal-stages-to-a-deal-pipeline-in-vryno-crm",level:2},{value:"How to change the order of Deal Stages in a Deal Pipeline in Vryno CRM",id:"how-to-change-the-order-of-deal-stages-in-a-deal-pipeline-in-vryno-crm",level:2},{value:"How to setup a Default Deal Pipeline",id:"how-to-setup-a-default-deal-pipeline",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deal-pipeline-in-vryno-crm"},"Deal Pipeline in Vryno CRM"),(0,i.kt)("h2",{id:"what-is-a-deal-pipeline"},"What is a Deal Pipeline?"),(0,i.kt)("p",null,'Generally, in the context of Customer Relationship Management (CRM) systems, a "deal pipeline" refers to a visual representation or workflow of the various stages that a potential sale or deal goes through from initial contact to closure. It\'s a way to track and manage the progress of deals and opportunities within the CRM.'),(0,i.kt)("p",null,"The stages in a deal pipeline in Vryno CRM include:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To-Do: The initial stage where potential customers are identified and entered into the CRM system."),(0,i.kt)("li",{parentName:"ol"},"In Progress: This stage includes understanding the customer's needs and requirements to propose the right solution, presenting a formal proposal or quote to the customer, & navigating the negotiation process with the customer to address any concerns or questions"),(0,i.kt)("li",{parentName:"ol"},"Completed: The deal is successfully closed, and the customer has made a purchase."),(0,i.kt)("li",{parentName:"ol"},"Closed: The deal did not result in a sale; the opportunity is lost.")),(0,i.kt)("p",null,"Each stage in the deal pipeline may have associated tasks, notes, and interactions with the customer that are tracked within the CRM. The pipeline allows sales teams and managers to get an overview of the sales process and identify potential bottlenecks or areas for improvement."),(0,i.kt)("h2",{id:"how-to-create-a-new-deal-pipeline-in-vryno-crm"},"How to create a new Deal Pipeline in Vryno CRM"),(0,i.kt)("p",null,"Step 1: Login to your Vryno CRM account"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(7881).Z,width:"1299",height:"691"})),(0,i.kt)("p",null,"Step 2: Click on your ",(0,i.kt)("strong",{parentName:"p"},"Profile")," & Go to ",(0,i.kt)("strong",{parentName:"p"},"Settings")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(3121).Z,width:"1298",height:"694"})),(0,i.kt)("p",null,"Step 3: Under ",(0,i.kt)("strong",{parentName:"p"},"Customizations"),", Click on ",(0,i.kt)("strong",{parentName:"p"},"Modules & Fields")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(4116).Z,width:"1304",height:"695"})),(0,i.kt)("p",null,"Step 4: In ",(0,i.kt)("strong",{parentName:"p"},"Deal")," section access the dropdown next to the edit button and click on ",(0,i.kt)("strong",{parentName:"p"},"Pipeline")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(8724).Z,width:"1304",height:"697"})),(0,i.kt)("p",null,"Step 5: Click on the ",(0,i.kt)("strong",{parentName:"p"},"Create New")," on the top right side"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(5605).Z,width:"1304",height:"697"})),(0,i.kt)("p",null,"Step 6: Give the new pipeline a name and click on ",(0,i.kt)("strong",{parentName:"p"},"Save")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(6432).Z,width:"1304",height:"697"})),(0,i.kt)("p",null,"Congratulations! You've created a New Deal Pipeline for yourself in Vryno CRM"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(4896).Z,width:"1304",height:"697"})),(0,i.kt)("h2",{id:"how-to-add-or-associate-deal-stages-to-a-deal-pipeline-in-vryno-crm"},"How to add or associate Deal Stages to a Deal Pipeline in Vryno CRM"),(0,i.kt)("p",null,"Step 1: Login to your Vryno CRM account"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(7881).Z,width:"1299",height:"691"})),(0,i.kt)("p",null,"Step 2: Click on your ",(0,i.kt)("strong",{parentName:"p"},"Profile")," & Go to ",(0,i.kt)("strong",{parentName:"p"},"Settings")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(3121).Z,width:"1298",height:"694"})),(0,i.kt)("p",null,"Step 3: Under ",(0,i.kt)("strong",{parentName:"p"},"Customizations"),", Click on ",(0,i.kt)("strong",{parentName:"p"},"Modules & Fields")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(4116).Z,width:"1304",height:"695"})),(0,i.kt)("p",null,"Step 4: In ",(0,i.kt)("strong",{parentName:"p"},"Deal")," section access the dropdown next to the edit button and click on ",(0,i.kt)("strong",{parentName:"p"},"Pipeline")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(8724).Z,width:"1304",height:"697"})),(0,i.kt)("p",null,"Step 5: Now we will add & associate Deal Stage with an existing Deal Pipeline"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'1. For adding a new Deal Stage, click on the "+ Stage" button next to the Pipeline')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(4200).Z,width:"1304",height:"697"})),(0,i.kt)("p",null,"In the form that pops up, add the following information:"),(0,i.kt)("p",null,"a. ",(0,i.kt)("strong",{parentName:"p"},"Stage Name")," (Identifies the current phase of the sales process for deals)\nb. ",(0,i.kt)("strong",{parentName:"p"},"Probabliity")," (Likelihood of a deal closing successfully, expressed as a percentage)\nc. ",(0,i.kt)("strong",{parentName:"p"},"Deal Stage Category")," (Open: Stage associated with Deals in the initial phase of the sales process; ",(0,i.kt)("strong",{parentName:"p"},"Closed Won"),": Stage where the Deal is successfully completed, sale achieved; ",(0,i.kt)("strong",{parentName:"p"},"Closed Lost"),": Stage where Deal is lost/no sale achieved)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(2382).Z,width:"1304",height:"697"})),(0,i.kt)("p",null,"Step 6: Click on ",(0,i.kt)("strong",{parentName:"p"},"Save")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(4994).Z,width:"1304",height:"697"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'2. For associating an existing Deal Stage, click on the dropdown next to "+ Stage" button next to the Pipeline and Choose the Stage you wish to add to the Deal Pipeline')," "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(160).Z,width:"1304",height:"697"})),(0,i.kt)("h2",{id:"how-to-change-the-order-of-deal-stages-in-a-deal-pipeline-in-vryno-crm"},"How to change the order of Deal Stages in a Deal Pipeline in Vryno CRM"),(0,i.kt)("p",null,"Step 1: Login to your Vryno CRM account"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(7881).Z,width:"1299",height:"691"})),(0,i.kt)("p",null,"Step 2: Click on your ",(0,i.kt)("strong",{parentName:"p"},"Profile")," & Go to ",(0,i.kt)("strong",{parentName:"p"},"Settings")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(3121).Z,width:"1298",height:"694"})),(0,i.kt)("p",null,"Step 3: Under ",(0,i.kt)("strong",{parentName:"p"},"Customizations"),", Click on ",(0,i.kt)("strong",{parentName:"p"},"Modules & Fields")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(4116).Z,width:"1304",height:"695"})),(0,i.kt)("p",null,"Step 4: In ",(0,i.kt)("strong",{parentName:"p"},"Deal")," section access the dropdown next to the edit button and click on ",(0,i.kt)("strong",{parentName:"p"},"Pipeline")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(8724).Z,width:"1304",height:"697"})),(0,i.kt)("p",null,"Step 5: Simply click on the Up & Down pointing arrows to change the position of Deal Stages within the Pipeline"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(3548).Z,width:"1304",height:"697"})),(0,i.kt)("h2",{id:"how-to-setup-a-default-deal-pipeline"},"How to setup a Default Deal Pipeline"),(0,i.kt)("p",null,"Step 1: Login to your Vryno CRM account"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(7881).Z,width:"1299",height:"691"})),(0,i.kt)("p",null,"Step 2: Click on your ",(0,i.kt)("strong",{parentName:"p"},"Profile")," & Go to ",(0,i.kt)("strong",{parentName:"p"},"Settings")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(3121).Z,width:"1298",height:"694"})),(0,i.kt)("p",null,"Step 3: Under ",(0,i.kt)("strong",{parentName:"p"},"Customizations"),", Click on ",(0,i.kt)("strong",{parentName:"p"},"Modules & Fields")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(4116).Z,width:"1304",height:"695"})),(0,i.kt)("p",null,"Step 4: In ",(0,i.kt)("strong",{parentName:"p"},"Deal")," section access the dropdown next to the edit button and click on ",(0,i.kt)("strong",{parentName:"p"},"Pipeline")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(8724).Z,width:"1304",height:"697"})),(0,i.kt)("p",null,"Step 5: Click the checkbox named ",(0,i.kt)("strong",{parentName:"p"},"Default")," next to the pipeline to set it as a Default Pipeline"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(3975).Z,width:"1304",height:"697"})))}d.isMDXComponent=!0},7881:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Login to Vryno (New UI)-51f15d4e34dfd0c0734f76682923f25b.png"},4200:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/access_add_deal_stage_button-6d4ce2ae16c2802998be9e8b527fef82.png"},5605:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/access_create_new_pipeline_button-879659163f9db18773c6dde66d423b5c.png"},8724:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/access_pipeline_from_settings-36bbe0f36214b20da5408e81c9cddb14.png"},2382:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add_new_deal_stage_info-d50599262eca4122c13e324d4b1ef222.png"},160:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/associate_deal_stage-6578cffc5b19ad2ceff11c48fc18ca6a.png"},3548:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/change_positions_deal_stages-a4870fff4f8755f7eade8431de024882.png"},3975:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/default_deal_pipeline-ee0f2c86fd8340c0785c56240873c194.png"},6432:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/name_and_save_pipeline-fbd9d4d69572fb0a384814437958a2e7.png"},4994:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/save_deal_stage-0766709cf5777e3e1a50b3ee8b7f1a7f.png"},4896:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/saved_pipeline_preview-6d71f177198c888fe94ab1fc2fab5837.png"},4116:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/access_module_and_fields_from_customizations-3e2561ffd9381308fcb502ecac3410df.png"},3121:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/go_to_settings_from_home-8815163e33c3ffeb5351f7c221da9a81.png"}}]);