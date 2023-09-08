"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[6915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||s;return n?a.createElement(m,l(l({ref:t},i),{},{components:n})):a.createElement(m,l({ref:t},i))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:3},l="Contacts",o={unversionedId:"Types-of-queries-and-mutations/Contact",id:"Types-of-queries-and-mutations/Contact",title:"Contacts",description:"FETCH QUERY",source:"@site/docs/Types-of-queries-and-mutations/Contact.md",sourceDirName:"Types-of-queries-and-mutations",slug:"/Types-of-queries-and-mutations/Contact",permalink:"/docs/Types-of-queries-and-mutations/Contact",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Types-of-queries-and-mutations/Contact.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Attachments",permalink:"/docs/Types-of-queries-and-mutations/Attachment"},next:{title:"Organizations",permalink:"/docs/Types-of-queries-and-mutations/Organization"}},c={},p=[{value:"<strong>FETCH QUERY</strong>",id:"fetch-query",level:2},{value:"<strong>Type details</strong>",id:"type-details",level:3},{value:"<strong>Argument</strong>",id:"argument",level:3},{value:"Simple Request: To Search Fetch Contact record",id:"simple-request-to-search-fetch-contact-record",level:3},{value:"Sample Response",id:"sample-response",level:3},{value:"Filters",id:"filters",level:3},{value:"GET QUERY",id:"get-query",level:2},{value:"<strong>Type details</strong>",id:"type-details-1",level:3},{value:"<strong>Argument</strong>",id:"argument-1",level:3},{value:"Sample query for Get Contact",id:"sample-query-for-get-contact",level:3},{value:"Sample Response",id:"sample-response-1",level:3},{value:"<strong>UPDATE QUERY</strong>",id:"update-query",level:2},{value:"<strong>Type details</strong>",id:"type-details-2",level:3},{value:"<strong>Argument</strong>",id:"argument-2",level:3},{value:"Sample Request: To Search update Contact record",id:"sample-request-to-search-update-contact-record",level:3},{value:"Sample Response",id:"sample-response-2",level:3},{value:"CREATE QUERY",id:"create-query",level:2},{value:"<strong>Type details</strong>",id:"type-details-3",level:3},{value:"<strong>Argument</strong>",id:"argument-3",level:3},{value:"Sample Request: To create Contact record",id:"sample-request-to-create-contact-record",level:3},{value:"Sample Response",id:"sample-response-3",level:3},{value:"DELETE QUERY",id:"delete-query",level:2},{value:"<strong>Type details</strong>",id:"type-details-4",level:3},{value:"Argument",id:"argument-4",level:3},{value:"Sample Request: To delete Contact record",id:"sample-request-to-delete-contact-record",level:3},{value:"Sample Response",id:"sample-response-4",level:3}],i={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contacts"},"Contacts"),(0,r.kt)("h2",{id:"fetch-query"},(0,r.kt)("strong",{parentName:"h2"},"FETCH QUERY")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"fetchContact(\nfilters: [FetchFilter]\nexpression: String\norderBy: [FetchOrderBy]\ncustomViewId: String\npageNumber: Int\nrecordsPerPage: Int\n): FetchContactResponse\n")),(0,r.kt)("h3",{id:"type-details"},(0,r.kt)("strong",{parentName:"h3"},"Type details")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type FetchContactResponse {\ncode: Int!\nmessage: String!\nstatus: Boolean!\nmessageKey: String!\ndata: [Contact]\n}\n\ntype Contact {\nid: String\nrecordStatus: String\ncreatedBy: String\ncreatedAt: String\nupdatedBy: String\nupdatedAt: String\nrecordImage: String\nname: String\nownerId: String\nphoneNumber: String\nbillingAddress: String\nbillingCity: String\nbillingState: String\nbillingCountry: String\nbillingZipcode: String\nshippingAddress: String\nshippingCity: String\nshippingState: String\nshippingCountry: String\nshippingZipcode: String\nlayoutId: String\ntitle: String\nfirstName: String\ndob: String\njobTitle: String\nemail: String\nsecondaryEmail: String\nskype: String\ntwitter: String\nparentContactId: String\norganizationId: String\nreportingToId: String\nleadSource: String\nindustryId: String\nrelationshipTypeId: String\ndescription: String\n}\n")),(0,r.kt)("h3",{id:"argument"},(0,r.kt)("strong",{parentName:"h3"},"Argument")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type FetchFilter {\noperator: String!\nname: String!\nvalue: [String]\nlogicalOperator: String\n}\n\nscalar String\n\ntype FetchOrderBy {\nname: String!\norder: [FetchOrder]\n}\n\n\n")),(0,r.kt)("h3",{id:"simple-request-to-search-fetch-contact-record"},"Simple Request: To Search Fetch Contact record"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  fetchContact\n  {\n    code \n    messageKey \n    data{\n      id \n      name\n    }\n  }\n}\n")),(0,r.kt)("h3",{id:"sample-response"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "data": {\n    "fetchContact": {\n      "code": 200,\n      "messageKey": "contact-search-success",\n      "data": [\n        {\n          "id": "ff11c7d9-bec1-4476-87e9-f16f5ca76716",\n          "name": "Schmitt (Sample)"\n        },\n        {\n          "id": "fdcec74a-0cba-48e9-8a74-85095dd56ee9",\n          "name": "Chambers (Sample)"\n        },\n        {\n          "id": "fd4b9753-87bc-44e9-bee6-1349105d1aa1",\n          "name": "Campbell (Sample)"\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"filters"},"Filters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  fetchContact(filters:[{name:"id",operator:"eq",value:"988baa5c-e547-485e-93be-f00daf9b8fb5"}])\n  {\n    code \n    messageKey \n    data{\n      id \n      name\n    }\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "data": {\n    "fetchContact": {\n      "code": 200,\n      "messageKey": "contact-search-success",\n      "data": [\n        {\n          "id": "988baa5c-e547-485e-93be-f00daf9b8fb5",\n          "name": "Sheppard (Sample)"\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"get-query"},"GET QUERY"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"getContact(\nid: String!\n): GetContactResponse\n")),(0,r.kt)("h3",{id:"type-details-1"},(0,r.kt)("strong",{parentName:"h3"},"Type details")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type GetContactResponse {\ncode: Int!\nmessage: String!\nstatus: Boolean!\nmessageKey: String!\ndata: Contact\n}\n")),(0,r.kt)("h3",{id:"argument-1"},(0,r.kt)("strong",{parentName:"h3"},"Argument")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"id: String!\n")),(0,r.kt)("h3",{id:"sample-query-for-get-contact"},"Sample query for Get Contact"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{ \n\n  getContact(id:"9119e15d-407b-44b5-9e6c-76acde9a289b") \n\n  {code message status data{id name ownerId}} \n\n}\n')),(0,r.kt)("h3",{id:"sample-response-1"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "data": {\n    "getContact": {\n      "code": 200,\n      "message": "contact search successfully",\n      "status": true,\n      "data": {\n        "id": "9119e15d-407b-44b5-9e6c-76acde9a289b",\n        "name": "Davis (Sample)",\n        "ownerId": "c680e0fd-7952-49af-9212-f677355240b3"\n      }\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"update-query"},(0,r.kt)("strong",{parentName:"h2"},"UPDATE QUERY")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"updateContact(\nid: String!\ninput: UpdateContactInput\n): SaveContactResponse\n")),(0,r.kt)("h3",{id:"type-details-2"},(0,r.kt)("strong",{parentName:"h3"},"Type details")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type SaveContactResponse {\ncode: Int!\nmessage: String!\nstatus: Boolean!\nmessageKey: String!\ndata: Contact\nerrors: String\n}\n")),(0,r.kt)("h3",{id:"argument-2"},(0,r.kt)("strong",{parentName:"h3"},"Argument")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"id: String!\ninput: UpdateContactInput\n")),(0,r.kt)("h3",{id:"sample-request-to-search-update-contact-record"},"Sample Request: To Search update Contact record"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation { \n\n  updateContact(id:"9119e15d-407b-44b5-9e6c-76acde9a289b" input:{name:"Davis"}) \n\n  {code message status data{id name }} \n\n}\n')),(0,r.kt)("h3",{id:"sample-response-2"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "data": {\n    "updateContact": {\n      "code": 200,\n      "message": "contact updation successfully",\n      "status": true,\n      "data": {\n        "id": "9119e15d-407b-44b5-9e6c-76acde9a289b",\n        "name": "Davis"\n      }\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"create-query"},"CREATE QUERY"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"createContact(\ninput: CreateContactInput\n): SaveContactResponse\n")),(0,r.kt)("h3",{id:"type-details-3"},(0,r.kt)("strong",{parentName:"h3"},"Type details")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type SaveContactResponse {\ncode: Int!\nmessage: String!\nstatus: Boolean!\nmessageKey: String!\ndata: Contact\nerrors: String\n}\n")),(0,r.kt)("h3",{id:"argument-3"},(0,r.kt)("strong",{parentName:"h3"},"Argument")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input: CreateContactInput\n")),(0,r.kt)("h3",{id:"sample-request-to-create-contact-record"},"Sample Request: To create Contact record"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation { \n\n  createContact(input:{ name:"test01" ownerId:"7258c169-27eb-4b62-b5d9-9af889e3e5d6"}){code message status data{id name }} \n\n}\n')),(0,r.kt)("h3",{id:"sample-response-3"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "data": {\n    "createContact": {\n      "code": 200,\n      "message": "contact create successfully",\n      "status": true,\n      "data": {\n        "id": "b3167278-84e6-4724-93fb-1ac9c61d2f02",\n        "name": "test01"\n      }\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"delete-query"},"DELETE QUERY"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteContact(\nid: String\n): SaveContactResponse\n")),(0,r.kt)("h3",{id:"type-details-4"},(0,r.kt)("strong",{parentName:"h3"},"Type details")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type SaveContactResponse {\ncode: Int!\nmessage: String!\nstatus: Boolean!\nmessageKey: String!\ndata: Contact\nerrors: String\n}\n")),(0,r.kt)("h3",{id:"argument-4"},"Argument"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"id: String\n")),(0,r.kt)("h3",{id:"sample-request-to-delete-contact-record"},"Sample Request: To delete Contact record"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation { \n\n  deleteContact(id:"9119e15d-407b-44b5-9e6c-76acde9a289b") \n\n  {code message status data{id name }} \n\n}\n')),(0,r.kt)("h3",{id:"sample-response-4"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "data": {\n    "deleteContact": {\n      "code": 200,\n      "message": "contact delete successfully",\n      "status": true,\n      "data": {\n        "id": "9119e15d-407b-44b5-9e6c-76acde9a289b",\n        "name": "Davis"\n      }\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);