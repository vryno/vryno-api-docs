"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[5766],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=l.createContext({}),d=function(e){var t=l.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return l.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=n,m=p["".concat(r,".").concat(h)]||p[h]||u[h]||o;return a?l.createElement(m,i(i({ref:t},c),{},{components:a})):l.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3806:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var l=a(7462),n=(a(7294),a(3905));const o={sidebar_position:8},i="Deal Management in Vryno CRM",s={unversionedId:"vryno_user_manual/guide_for_starters/deal_management_in_vryno",id:"vryno_user_manual/guide_for_starters/deal_management_in_vryno",title:"Deal Management in Vryno CRM",description:"What is Deal Management?",source:"@site/docs/vryno_user_manual/guide_for_starters/deal_management_in_vryno.md",sourceDirName:"vryno_user_manual/guide_for_starters",slug:"/vryno_user_manual/guide_for_starters/deal_management_in_vryno",permalink:"/docs/vryno_user_manual/guide_for_starters/deal_management_in_vryno",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/vryno_user_manual/guide_for_starters/deal_management_in_vryno.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Organization Management in Vryno CRM",permalink:"/docs/vryno_user_manual/guide_for_starters/organization_management_in_vryno"},next:{title:"Email Templates in Vryno CRM",permalink:"/docs/vryno_user_manual/guide_for_starters/email_templates_in_vryno"}},r={},d=[{value:"What is Deal Management?",id:"what-is-deal-management",level:2},{value:"Important Fields in Deals",id:"important-fields-in-deals",level:2},{value:"How to Create Deals in Vryno CRM",id:"how-to-create-deals-in-vryno-crm",level:2},{value:"How to Create Deals from Deals Module",id:"how-to-create-deals-from-deals-module",level:3},{value:"How to Create Deals from Quick Create",id:"how-to-create-deals-from-quick-create",level:3},{value:"Through Bulk Import",id:"through-bulk-import",level:3},{value:"Deals Module Views",id:"deals-module-views",level:2},{value:"1. Grid View",id:"1-grid-view",level:3},{value:"2. List View",id:"2-list-view",level:3},{value:"3. Kanban View",id:"3-kanban-view",level:3},{value:"How to Update/Edit Records in Deals Module",id:"how-to-updateedit-records-in-deals-module",level:2},{value:"1. By Editing Individual Deals",id:"1-by-editing-individual-deals",level:3},{value:"2. Through Mass Update",id:"2-through-mass-update",level:3},{value:"Mass Deleting Deals",id:"mass-deleting-deals",level:2},{value:"How to send Mass Email in Deals Module",id:"how-to-send-mass-email-in-deals-module",level:2},{value:"How to Create Custom Views in Deals Module",id:"how-to-create-custom-views-in-deals-module",level:2}],c={toc:d};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,l.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deal-management-in-vryno-crm"},"Deal Management in Vryno CRM"),(0,n.kt)("h2",{id:"what-is-deal-management"},"What is Deal Management?"),(0,n.kt)("p",null,"Deal management is the process of organizing, tracking, maintaining, prioritizing, and analyzing your deals no matter where they are in the sales pipeline. The purpose of deal management is to efficiently move deals through the sales process and increase conversions."),(0,n.kt)("h2",{id:"important-fields-in-deals"},"Important Fields in Deals"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Deal Name"),": Name of the Deal"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Owner"),": Salesperson associated with the Deal"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Contact"),": Name of Customer\u2019s Point of Contact associated with the Deal"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Organization"),": Name of the Organization associated with the Deal"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Deal Pipeline"),": Sales Pipeline associated with the Deal"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Deal Stage"),": Sales Stage where the Deal is currently at right now"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Expected Closing Date"),": Date the Sales Person expects to close the Deal"),(0,n.kt)("h2",{id:"how-to-create-deals-in-vryno-crm"},"How to Create Deals in Vryno CRM"),(0,n.kt)("p",null,"There are three ways to create a Deal."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the Deals module")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Using Quick Create")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"By importing"))),(0,n.kt)("h3",{id:"how-to-create-deals-from-deals-module"},"How to Create Deals from Deals Module"),(0,n.kt)("p",null,"Step 1: Log in to your CRM account"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(258).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 2: Click on Deals on the Top Menu Bar"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(3446).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 3: Click on \u201c+ Deal\u201d"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(185).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 4: Fill the required details & click on Save to save the record or Save & New to continue creating more Deals"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(8516).Z,width:"512",height:"246"})),(0,n.kt)("h3",{id:"how-to-create-deals-from-quick-create"},"How to Create Deals from Quick Create"),(0,n.kt)("p",null,"Quick Create is a handy option for creating records from anywhere in the CRM. You can identify Quick Create by the + icon on the top bar of your CRM screen."),(0,n.kt)("p",null,"Follow these steps to create a contact using Quick Create:"),(0,n.kt)("p",null,"Step 1: Log in to your CRM account"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(258).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 2: Click the + icon and choose Deals."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(3718).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 3: Fill the details and click on Save"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(8436).Z,width:"512",height:"246"})),(0,n.kt)("h3",{id:"through-bulk-import"},"Through Bulk Import"),(0,n.kt)("p",null,"You can import multiple Deals at once using the Bulk Import Feature of Vryno CRM. "),(0,n.kt)("p",null,"To learn more, click here"),(0,n.kt)("h2",{id:"deals-module-views"},"Deals Module Views"),(0,n.kt)("p",null,"You can view a Deal module in two ways:"),(0,n.kt)("h3",{id:"1-grid-view"},"1. Grid View"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(5875).Z,width:"512",height:"246"})),(0,n.kt)("h3",{id:"2-list-view"},"2. List View"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(5693).Z,width:"512",height:"246"})),(0,n.kt)("h3",{id:"3-kanban-view"},"3. Kanban View"),(0,n.kt)("h2",{id:"how-to-updateedit-records-in-deals-module"},"How to Update/Edit Records in Deals Module"),(0,n.kt)("p",null,"There are two ways to editing records in Deals Module:"),(0,n.kt)("h3",{id:"1-by-editing-individual-deals"},"1. By Editing Individual Deals"),(0,n.kt)("p",null,"Step 1: Log in to your CRM account"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(258).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 2: Click on Deals on the Top Menu Bar"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(3446).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 3: Click on the edit button next to the Deal you want to update"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(38).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 4: Navigate to the field you wish to update and make the required change"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(8262).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 5: Click on Save"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(4020).Z,width:"512",height:"246"})),(0,n.kt)("h3",{id:"2-through-mass-update"},"2. Through Mass Update"),(0,n.kt)("p",null,"Step 1: Log in to your CRM account"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(258).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 2: Click on Deals on the Top Menu Bar"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(3446).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 3: Click on the three dots on the Top Right Corner of the screen and click on Mass Update"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(6389).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 4: Choose the conditions on the basis of which you want to search for records that need to be updated and click on Search"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(2708).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 5: Choose the records for which you would like to update and click on Mass Update"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(7385).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 6: Make the necessary updates and Click on Update"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(2012).Z,width:"512",height:"246"})),(0,n.kt)("h2",{id:"mass-deleting-deals"},"Mass Deleting Deals"),(0,n.kt)("p",null,"Follow these steps to delete contact records in mass:"),(0,n.kt)("p",null,"Step 1: Log in to your CRM account"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(258).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 2: Click on Deals on the Top Menu Bar"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(3446).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 3: Select the record/s that you want to delete by clicking on the checkbox next to them, click on Actions on the top and choose Delete Selected"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(6312).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 4: A dialogue box will appear in front of you for confirmation, click on Delete to delete the chosen records"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(7433).Z,width:"512",height:"246"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"These records move to the recycle bin that can be restored if required later")),(0,n.kt)("h2",{id:"how-to-send-mass-email-in-deals-module"},"How to send Mass Email in Deals Module"),(0,n.kt)("p",null,"Follow the below steps to send Mass Email to Deals:"),(0,n.kt)("p",null,"Step 1: Log in to your CRM account"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(258).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 2: Click on Deals on the Top Menu Bar"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(3446).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 3: Select the Deals you want to send the email to (You can select all records at once using the Select All button), Click on Action on the top and Select Send Email:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(809).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 4: Choose the Email Template and make a choice whether you want to send the Emails right away or you want to schedule it for later"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(7924).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 5: Click on Send"),(0,n.kt)("h2",{id:"how-to-create-custom-views-in-deals-module"},"How to Create Custom Views in Deals Module"),(0,n.kt)("p",null,"Follow the below steps to create Custom Views in Deals Module"),(0,n.kt)("p",null,"Step 1: Log in to your CRM account"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(258).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 2: Click on Deals on the Top Menu Bar"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(3446).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 3: Click on the three lines on top left corner to access Custom Views & Click on +Custom View"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(9675).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 4: On the left side, Enter the name of the Custom View, below that choose the fields you would like to see in the module view from the Available Fields section and Click on the arrow pointing to the right side to bring them to the Selected Fields section"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(7253).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 5: On the right side, set up the conditions and Order for the records, you can also setup relation between two conditions like AND, OR, AND NOT, & OR NOT"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(6005).Z,width:"512",height:"246"})),(0,n.kt)("p",null,"Step 6: Once done, Click on Save"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(1982).Z,width:"512",height:"246"})))}u.isMDXComponent=!0},3446:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Access Deals Module-f424f4799828f66db9ef2df4cf1e2271.png"},3718:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Access Deals from Quick Create-2030d5acd398e4b4929a82da6da2c697.png"},6389:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Access Mass Update from Deals-3de32c642d9c3102d88e2f8ea53518df.png"},185:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Add Deal from Deal Module-7fec8355f27bca2b9aef89e5f6189f6e.png"},9675:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Add custom View from Deals-6bd7c05aefa682a63943bd4fcca96fd8.png"},2708:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Choose Conditions for Mass Update-f0283e67e2af825a395734b2db3d98f2.png"},6312:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Choose Records and click on mass delete-bee464fe4c1c469e2c92d5609994bc84.png"},7385:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Choose Records for Mass Update-87a51d80b34f2d4ac99818a69dcbc759.png"},7924:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Choose Template and Send-add96abf55e948a24494ec81f65db7a5.png"},7433:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Confirm Mass Delete Deals-051d705ea090a4778e96f159d1d26596.png"},38:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Edit Deal from Module View-7cfb9d68e904478b2a413f52774fd238.png"},8262:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Edit details of the Deal-3e0f0da1ae1a5f16e3ec8964851ebb29.png"},8436:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Save Deal from Quick Create Form-c04068889adce1a8b207c162782fce68.png"},1982:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Save custom view in Deals-c763bace02af9485e0492ccdf1a58248.png"},8516:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Save the Deal from Deal Module-1a141adbaec474786f8d4d400288dc13.png"},4020:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Saved Deal-4fe0970aca611bbdcde7d9176d507c31.png"},6005:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Select Conditions for Custom Views in Deals-2faa15684cca6bc19f6bf69f7c2147b1.png"},809:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Select Deals and Click on Delete-70d64351a9d9862603449b17c33104c1.png"},2012:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/make changes and mass update-012304bfca72dce95a37a5f7b5836ccd.png"},7253:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/select fields for Custom View in Deals-4572de42118e439054929e63865c12a5.png"},5875:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Grid View in Vryno CRM-4d90c2db5341c7cb38664cfa47abf70e.png"},5693:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/List view in Vryno CRM-1f55f68269ac9da95b0ac07910792122.png"},258:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Login to Vryno CRM modules-ef85de8d64c5125669f81e04a588fc86.png"}}]);