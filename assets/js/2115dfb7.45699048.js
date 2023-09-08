"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[9794],{3905:(e,n,a)=>{a.d(n,{Zo:()=>i,kt:()=>g});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),o=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},i=function(e){var n=o(e.components);return t.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),u=o(a),g=r,m=u["".concat(p,".").concat(g)]||u[g]||c[g]||s;return a?t.createElement(m,l(l({ref:n},i),{},{components:a})):t.createElement(m,l({ref:n},i))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=u;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var o=2;o<s;o++)l[o]=a[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4671:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var t=a(7462),r=(a(7294),a(3905));const s={sidebar_position:7},l="Leads",d={unversionedId:"Types-of-queries-and-mutations/Lead",id:"Types-of-queries-and-mutations/Lead",title:"Leads",description:"FETCH QUERY",source:"@site/docs/Types-of-queries-and-mutations/Lead.md",sourceDirName:"Types-of-queries-and-mutations",slug:"/Types-of-queries-and-mutations/Lead",permalink:"/docs/Types-of-queries-and-mutations/Lead",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Types-of-queries-and-mutations/Lead.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Deals",permalink:"/docs/Types-of-queries-and-mutations/Deals"},next:{title:"Tasks",permalink:"/docs/Types-of-queries-and-mutations/Tasks"}},p={},o=[{value:"<strong>FETCH QUERY</strong>",id:"fetch-query",level:2},{value:"<strong>Type details</strong>",id:"type-details",level:3},{value:"<strong>Argument</strong>",id:"argument",level:3},{value:"Simple Request: To Search Fetch Lead record",id:"simple-request-to-search-fetch-lead-record",level:3},{value:"Sample Response",id:"sample-response",level:3},{value:"Filters",id:"filters",level:3},{value:"GET QUERY",id:"get-query",level:2},{value:"<strong>Type details</strong>",id:"type-details-1",level:3},{value:"<strong>Argument</strong>",id:"argument-1",level:3},{value:"Sample query for Get Contact",id:"sample-query-for-get-contact",level:3},{value:"Sample Response",id:"sample-response-1",level:3},{value:"<strong>UPDATE QUERY</strong>",id:"update-query",level:2},{value:"<strong>Type details</strong>",id:"type-details-2",level:3},{value:"<strong>Argument</strong>",id:"argument-2",level:3},{value:"Sample Request: To Search update Lead record",id:"sample-request-to-search-update-lead-record",level:3},{value:"Sample Response",id:"sample-response-2",level:3},{value:"CREATE QUERY",id:"create-query",level:2},{value:"<strong>Type details</strong>",id:"type-details-3",level:3},{value:"<strong>Argument</strong>",id:"argument-3",level:3},{value:"Sample Request: To create Lead record",id:"sample-request-to-create-lead-record",level:3},{value:"Sample Response",id:"sample-response-3",level:3},{value:"DELETE QUERY",id:"delete-query",level:2},{value:"<strong>Type details</strong>",id:"type-details-4",level:3},{value:"Argument",id:"argument-4",level:3},{value:"Sample Request: To delete Lead record",id:"sample-request-to-delete-lead-record",level:3},{value:"Sample Response",id:"sample-response-4",level:3}],i={toc:o};function c(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"leads"},"Leads"),(0,r.kt)("h2",{id:"fetch-query"},(0,r.kt)("strong",{parentName:"h2"},"FETCH QUERY")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"fetchLead(\nfilters: [FetchFilter]\nexpression: String\norderBy: [FetchOrderBy]\ncustomViewId: String\npageNumber: Int\nrecordsPerPage: Int\n): FetchLeadResponse\n")),(0,r.kt)("h3",{id:"type-details"},(0,r.kt)("strong",{parentName:"h3"},"Type details")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type FetchLeadResponse {\ncode: Int!\nmessage: String!\nstatus: Boolean!\nmessageKey: String!\ndata: [Lead]\n}\n\ntype Lead {\nid: String\nrecordStatus: String\ncreatedBy: String\ncreatedAt: String\nupdatedBy: String\nupdatedAt: String\nrecordImage: String\nname: String\nownerId: String\nphoneNumber: String\nbillingAddress: String\nbillingCity: String\nbillingState: String\nbillingCountry: String\nbillingZipcode: String\nshippingAddress: String\nshippingCity: String\nshippingState: String\nshippingCountry: String\nshippingZipcode: String\nlayoutId: String\nfirstName: String\nemail: String\ncompany: String\nwebsite: String\nstatusId: String\nsourceId: String\nscore: Int\npriority: String\nexpectedRevenue: Int\nnumberOfEmployees: Int\ndescription: String\nleadConverted: Boolean\nconvertedOn: String\nconvertedBy: String\nconvertedContactId: String\nconvertedDealId: String\nconvertedOrganizationId: String\n}\n")),(0,r.kt)("h3",{id:"argument"},(0,r.kt)("strong",{parentName:"h3"},"Argument")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"filters: [FetchFilter]\nexpression: String\norderBy: [FetchOrderBy]\ncustomViewId: String\npageNumber: Int\nrecordsPerPage: Int\n\ntype FetchFilter {\noperator: String!\nname: String!\nvalue: [String]\nlogicalOperator: String\n}\n\nscalar String\n\ntype FetchOrderBy {\nname: String!\norder: [FetchOrder]\n}\n\nscalar String\n\nscalar Int\n\nscalar Int\n")),(0,r.kt)("h3",{id:"simple-request-to-search-fetch-lead-record"},"Simple Request: To Search Fetch Lead record"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  fetchLead\n  {\n    code \n    messageKey \n    data{\n      id \n      name\n    }\n  }\n}\n")),(0,r.kt)("h3",{id:"sample-response"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "data": {\n    "fetchLead": {\n      "code": 200,\n      "messageKey": "lead-search-success",\n      "data": [\n        {\n          "id": "fda1fa19-45ab-4604-9ec2-610014b1fc79",\n          "name": "Marshall (sample)"\n        },\n        {\n          "id": "7c3c97fc-22e8-4cbe-9a1e-2068edd63e04",\n          "name": "Martin (sample)"\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"filters"},"Filters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  fetchLead(filters:[{name:"id",operator:"eq",value:"fda1fa19-45ab-4604-9ec2-610014b1fc79"}])\n  {\n    code \n    messageKey \n    data{\n      id \n      name\n    }\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "data": {\n    "fetchLead": {\n      "code": 200,\n      "messageKey": "lead-search-success",\n      "data": [\n        {\n          "id": "fda1fa19-45ab-4604-9ec2-610014b1fc79",\n          "name": "Marshall (sample)"\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"get-query"},"GET QUERY"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"getLead(\nid: String!\n): GetLeadResponse\n")),(0,r.kt)("h3",{id:"type-details-1"},(0,r.kt)("strong",{parentName:"h3"},"Type details")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type GetLeadResponse {\ncode: Int!\nmessage: String!\nstatus: Boolean!\nmessageKey: String!\ndata: Lead\n}\n")),(0,r.kt)("h3",{id:"argument-1"},(0,r.kt)("strong",{parentName:"h3"},"Argument")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"id: String!\n")),(0,r.kt)("h3",{id:"sample-query-for-get-contact"},"Sample query for Get Contact"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{ \n\n  getLead(id:"fda1fa19-45ab-4604-9ec2-610014b1fc79") \n\n  {code message status data{id name ownerId}} \n\n}\n')),(0,r.kt)("h3",{id:"sample-response-1"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "data": {\n    "getLead": {\n      "code": 200,\n      "message": "lead search successfully",\n      "status": true,\n      "data": {\n        "id": "fda1fa19-45ab-4604-9ec2-610014b1fc79",\n        "name": "Marshall (sample)",\n        "ownerId": "c680e0fd-7952-49af-9212-f677355240b3"\n      }\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"update-query"},(0,r.kt)("strong",{parentName:"h2"},"UPDATE QUERY")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"updateLead(\nid: String!\ninput: UpdateLeadInput\n): SaveLeadResponse\n")),(0,r.kt)("h3",{id:"type-details-2"},(0,r.kt)("strong",{parentName:"h3"},"Type details")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type SaveLeadResponse {\ncode: Int!\nmessage: String!\nstatus: Boolean!\nmessageKey: String!\ndata: Lead\nerrors: String\n}\n")),(0,r.kt)("h3",{id:"argument-2"},(0,r.kt)("strong",{parentName:"h3"},"Argument")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"id: String!\ninput: UpdateLeadInput\n")),(0,r.kt)("h3",{id:"sample-request-to-search-update-lead-record"},"Sample Request: To Search update Lead record"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation { \n\n  updateLead(id:"fda1fa19-45ab-4604-9ec2-610014b1fc79" input:{name:"Davis"}) \n\n  {code message status data{id name }} \n\n}\n')),(0,r.kt)("h3",{id:"sample-response-2"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "data": {\n    "updateLead": {\n      "code": 200,\n      "message": "lead updation successfully",\n      "status": true,\n      "data": {\n        "id": "fda1fa19-45ab-4604-9ec2-610014b1fc79",\n        "name": "Davis"\n      }\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"create-query"},"CREATE QUERY"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"createLead(\ninput: CreateLeadInput\n): SaveLeadResponse\n")),(0,r.kt)("h3",{id:"type-details-3"},(0,r.kt)("strong",{parentName:"h3"},"Type details")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type SaveLeadResponse {\ncode: Int!\nmessage: String!\nstatus: Boolean!\nmessageKey: String!\ndata: Lead\nerrors: String\n}\n")),(0,r.kt)("h3",{id:"argument-3"},(0,r.kt)("strong",{parentName:"h3"},"Argument")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input: CreateLeadInput\n")),(0,r.kt)("h3",{id:"sample-request-to-create-lead-record"},"Sample Request: To create Lead record"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation { \n\n  createLead(input:{ name:"test01" ownerId:"fda1fa19-45ab-4604-9ec2-610014b1fc79"}){code message status data{id name }} \n\n}\n')),(0,r.kt)("h3",{id:"sample-response-3"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "data": {\n    "createLead": {\n      "code": 200,\n      "message": "lead create successfully",\n      "status": true,\n      "data": {\n        "id": "6e788bc0-e8dd-49bb-b409-7cff4ee5cc3e",\n        "name": "test01"\n      }\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"delete-query"},"DELETE QUERY"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteLead(\nid: String\n): SaveLeadResponse\n")),(0,r.kt)("h3",{id:"type-details-4"},(0,r.kt)("strong",{parentName:"h3"},"Type details")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type SaveLeadResponse {\ncode: Int!\nmessage: String!\nstatus: Boolean!\nmessageKey: String!\ndata: Lead\nerrors: String\n}\n")),(0,r.kt)("h3",{id:"argument-4"},"Argument"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"id: String\n")),(0,r.kt)("h3",{id:"sample-request-to-delete-lead-record"},"Sample Request: To delete Lead record"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation { \n\n  deleteLead(id:"6e788bc0-e8dd-49bb-b409-7cff4ee5cc3e") \n\n  {code message status data{id name }} \n\n}\n')),(0,r.kt)("h3",{id:"sample-response-4"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "data": {\n    "deleteLead": {\n      "code": 200,\n      "message": "lead delete successfully",\n      "status": true,\n      "data": {\n        "id": "6e788bc0-e8dd-49bb-b409-7cff4ee5cc3e",\n        "name": "test01"\n      }\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);