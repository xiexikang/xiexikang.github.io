import{d as e,D as a,J as t,v as l,o as s,c as u,w as d,b as o,e as c,G as i,K as n,r,i as m,q as _,s as p,F as f,k as h,z as g,n as k,p as b,t as I}from"./entry-chunk-index-2d707ceb-2023-12-08__17_41_38.js";import{_ as y}from"./u-button.85a8a819.js";import{r as v,_ as x,o as j}from"./u-icon.09170e02.js";import{_ as P}from"./AppPopup.vue_vue_type_script_setup_true_name_AppPopup_lang.3f1a9056.js";import{_ as w}from"./u-swiper.1f65675e.js";import"./u-popup.c4273adb.js";import"./u-transition.39d552e8.js";const V=x(e({__name:"lookPicPopup",props:{modelValue:{type:Boolean,default:!1},selectedItem:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:_}){const p=e,f=a({get:()=>null==p?void 0:p.modelValue,set(e){_("update:modelValue",e)}});t(f,(e=>{}));const h=l({posterList:[{id:"1001",image:"https://img.zcool.cn/community/031wabtkv8vqtlzej5y9igf3236.png"},{id:"1002",image:"https://img.zcool.cn/community/031j9hhacb1htqquxql0u5x3330.jpeg"}]});return(e,a)=>{const t=v(r("u-swiper"),w),l=v(r("up-button"),y),_=m,p=P;return s(),u(p,{modelValue:i(f),"onUpdate:modelValue":a[1]||(a[1]=e=>n(f)?f.value=e:null),class:"LookPicPopup-root",onOnClose:a[2]||(a[2]=e=>{f.value=!1})},{default:d((()=>[o(_,{class:"poster"},{default:d((()=>[o(t,{list:h.posterList,keyName:"image",autoplay:!1,height:"100vh",circular:""},null,8,["list"]),o(l,{onClick:a[0]||(a[0]=e=>{f.value=!1})},{default:d((()=>[c("关闭窗口")])),_:1})])),_:1})])),_:1},8,["modelValue"])}}}),[["__scopeId","data-v-4f5faf39"]]),C=x(e({__name:"index",setup(e){j(((e={})=>{const{brandId:t}=e;a.brandId=t}));const a=l({brandId:"1",way:"1",gotoPath(e){k({url:e})},list:[{id:1,orderNum:"1001",time:"2023-12-01 10:00",userName:"李大大",phone:"133333333",mealCode:"1234",remark:"-",totalPrice:"30.00",goodsList:[{id:1,name:"商品A",num:1,price:"10"},{id:2,name:"商品B",num:1,price:"20"}]},{id:2,orderNum:"1002",time:"2023-11-27 23:23",userName:"陈大大",phone:"133333333",mealCode:"5678",remark:"无",totalPrice:"50.00",goodsList:[{id:1,name:"商品C",num:1,price:"28"},{id:2,name:"商品D",num:2,price:"22"}]}],selectedItem:{},select(e){this.selectedItem=e,a.show=!0}});return(e,t)=>{const l=m,i=b,n=v(r("u-button"),y);return s(),u(l,{class:g(["App-root Order-root",`brandId-${a.brandId}`])},{default:d((()=>[o(l,{class:"root-in"},{default:d((()=>[o(l,{class:"text-tip"},{default:d((()=>[o(l,{class:"ico"}),o(i,null,{default:d((()=>[c("已分配配送员正为您取货中,操作人:马云, 配送员:马化腾")])),_:1})])),_:1}),o(l,{class:"list"},{default:d((()=>[(s(!0),_(f,null,p(a.list,(e=>(s(),u(l,{class:"item",key:e.id},{default:d((()=>[o(l,{class:"thead"},{default:d((()=>[o(l,{class:"ti"},{default:d((()=>[o(l,{class:"ico"}),o(i,null,{default:d((()=>[c("餐品详情")])),_:1}),o(i,{class:"take-tag"},{default:d((()=>[c("到店取餐")])),_:1})])),_:1}),o(i,{class:"status"},{default:d((()=>[c("已完成")])),_:1})])),_:1}),o(l,{class:"content"},{default:d((()=>[o(l,{class:"g-list"},{default:d((()=>[(s(!0),_(f,null,p(e.goodsList,(e=>(s(),u(l,{class:"ti",key:e.id},{default:d((()=>[o(i,null,{default:d((()=>[c(I(e.name),1)])),_:2},1024),o(i,{class:"num"},{default:d((()=>[c("x"+I(e.num),1)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024),o(l,{class:"info"},{default:d((()=>["1"==a.brandId?(s(),u(l,{key:0,class:"txt"},{default:d((()=>[o(i,{class:"ti"},{default:d((()=>[c("取餐码")])),_:1}),o(i,{class:"meal-code"},{default:d((()=>[c(I(e.mealCode||"-"),1)])),_:2},1024)])),_:2},1024)):h("v-if",!0),o(l,{class:"txt"},{default:d((()=>[o(i,{class:"ti"},{default:d((()=>[c("订单编号")])),_:1}),o(i,null,{default:d((()=>[c(I(e.orderNum||"-"),1)])),_:2},1024)])),_:2},1024),o(l,{class:"txt"},{default:d((()=>[o(i,{class:"ti"},{default:d((()=>[c("下单时间")])),_:1}),o(i,null,{default:d((()=>[c(I(e.time||"-"),1)])),_:2},1024)])),_:2},1024),o(l,{class:"txt"},{default:d((()=>[o(i,{class:"ti"},{default:d((()=>[c("收货人")])),_:1}),o(i,null,{default:d((()=>[c(I(e.userName||"-"),1)])),_:2},1024)])),_:2},1024),o(l,{class:"txt"},{default:d((()=>[o(i,{class:"ti"},{default:d((()=>[c("联系方式")])),_:1}),o(i,null,{default:d((()=>[c(I(e.phone||"-"),1)])),_:2},1024)])),_:2},1024),o(l,{class:"txt"},{default:d((()=>[o(i,{class:"ti"},{default:d((()=>[c("备注")])),_:1}),o(i,null,{default:d((()=>[c(I(e.remark||"-"),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),o(l,{class:"bot"},{default:d((()=>[o(l,{class:"tl"},{default:d((()=>[o(i,null,{default:d((()=>[c("总计")])),_:1}),o(l,{class:"ti"},{default:d((()=>[o(i,{class:"unit"},{default:d((()=>[c("￥")])),_:1}),o(i,{class:"price"},{default:d((()=>[c(I(e.totalPrice),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),o(l,{class:"tr"},{default:d((()=>[o(n,{class:"again-btn",onClick:t[0]||(t[0]=e=>a.gotoPath(`/pages/operation/shop?brandId=${a.brandId}&way=${a.way}`))},{default:d((()=>[c("再来一单")])),_:1}),"2"==a.brandId?(s(),u(n,{key:0,class:"take-btn",onClick:t=>a.select(e)},{default:d((()=>[c("取餐码")])),_:2},1032,["onClick"])):h("v-if",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),h(" 查看图片弹窗 "),o(V,{modelValue:a.show,"onUpdate:modelValue":t[1]||(t[1]=e=>a.show=e),selectedItem:a.selectedItem},null,8,["modelValue","selectedItem"])])),_:1},8,["class"])}}}),[["__scopeId","data-v-e9363920"]]);export{C as default};
