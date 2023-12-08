import{f as e,m as t,g as i,o,c as n,w as c,b as a,h as r,e as l,t as s,k as u,l as d,p as h,i as m,r as f,q as C,F as v,s as p,P as g,u as I,d as _,v as y,x as B,y as x}from"./entry-chunk-index-2d707ceb-2023-12-08__17_41_38.js";import{_ as k}from"./u-button.85a8a819.js";import{_ as w,r as L,a as E}from"./u-icon.09170e02.js";import{_ as D}from"./u-popup.c4273adb.js";import"./u-transition.39d552e8.js";const b=w({name:"u-toolbar",mixins:[t,i,{props:{show:{type:Boolean,default:e.toolbar.show},cancelText:{type:String,default:e.toolbar.cancelText},confirmText:{type:String,default:e.toolbar.confirmText},cancelColor:{type:String,default:e.toolbar.cancelColor},confirmColor:{type:String,default:e.toolbar.confirmColor},title:{type:String,default:e.toolbar.title}}}],emits:["confirm","cancel"],methods:{cancel(){this.$emit("cancel")},confirm(){this.$emit("confirm")}}},[["render",function(e,t,i,f,C,v){const p=h,g=m;return e.show?(o(),n(g,{key:0,class:"u-toolbar",onTouchmove:d(e.noop,["stop","prevent"])},{default:c((()=>[a(g,{class:"u-toolbar__cancel__wrapper","hover-class":"u-hover-class"},{default:c((()=>[a(p,{class:"u-toolbar__wrapper__cancel",onClick:v.cancel,style:r({color:e.cancelColor})},{default:c((()=>[l(s(e.cancelText),1)])),_:1},8,["onClick","style"])])),_:1}),e.title?(o(),n(p,{key:0,class:"u-toolbar__title u-line-1"},{default:c((()=>[l(s(e.title),1)])),_:1})):u("v-if",!0),a(g,{class:"u-toolbar__confirm__wrapper","hover-class":"u-hover-class"},{default:c((()=>[a(p,{class:"u-toolbar__wrapper__confirm",onClick:v.confirm,style:r({color:e.confirmColor})},{default:c((()=>[l(s(e.confirmText),1)])),_:1},8,["onClick","style"])])),_:1})])),_:1},8,["onTouchmove"])):u("v-if",!0)}],["__scopeId","data-v-cd3f8dea"]]);const S=w({name:"u-picker",mixins:[t,i,{props:{show:{type:Boolean,default:e.picker.show},popupMode:{type:String,default:e.picker.popupMode},showToolbar:{type:Boolean,default:e.picker.showToolbar},title:{type:String,default:e.picker.title},columns:{type:Array,default:e.picker.columns},loading:{type:Boolean,default:e.picker.loading},itemHeight:{type:[String,Number],default:e.picker.itemHeight},cancelText:{type:String,default:e.picker.cancelText},confirmText:{type:String,default:e.picker.confirmText},cancelColor:{type:String,default:e.picker.cancelColor},confirmColor:{type:String,default:e.picker.confirmColor},visibleItemCount:{type:[String,Number],default:e.picker.visibleItemCount},keyName:{type:String,default:e.picker.keyName},closeOnClickOverlay:{type:Boolean,default:e.picker.closeOnClickOverlay},defaultIndex:{type:Array,default:e.picker.defaultIndex},immediateChange:{type:Boolean,default:e.picker.immediateChange}}}],data:()=>({lastIndex:[],innerIndex:[],innerColumns:[],columnIndex:0}),watch:{defaultIndex:{immediate:!0,handler(e){this.setIndexs(e,!0)}},columns:{immediate:!0,deep:!0,handler(e){this.setColumns(e)}}},emits:["close","cancel","confirm","change"],methods:{getItemText(e){return uni.$u.test.object(e)?e[this.keyName]:e},closeHandler(){this.closeOnClickOverlay&&this.$emit("close")},cancel(){this.$emit("cancel")},confirm(){this.$emit("confirm",{indexs:this.innerIndex,value:this.innerColumns.map(((e,t)=>e[this.innerIndex[t]])),values:this.innerColumns})},changeHandler(e){const{value:t}=e.detail;let i=0,o=0;for(let c=0;c<t.length;c++){let e=t[c];if(e!==(this.lastIndex[c]||0)){o=c,i=e;break}}this.columnIndex=o;const n=this.innerColumns;this.setLastIndex(t),this.setIndexs(t),this.$emit("change",{picker:this,value:this.innerColumns.map(((e,i)=>e[t[i]])),index:i,indexs:t,values:n,columnIndex:o})},setIndexs(e,t){this.innerIndex=uni.$u.deepClone(e),t&&this.setLastIndex(e)},setLastIndex(e){this.lastIndex=uni.$u.deepClone(e)},setColumnValues(e,t){this.innerColumns.splice(e,1,t);let i=uni.$u.deepClone(this.innerIndex);for(let o=0;o<this.innerColumns.length;o++)o>this.columnIndex&&(i[o]=0);this.setIndexs(i)},getColumnValues(e){return(async()=>{await uni.$u.sleep()})(),this.innerColumns[e]},setColumns(e){this.innerColumns=uni.$u.deepClone(e),0===this.innerIndex.length&&(this.innerIndex=new Array(e.length).fill(0))},getIndexs(){return this.innerIndex},getValues(){return(async()=>{await uni.$u.sleep()})(),this.innerColumns.map(((e,t)=>e[this.innerIndex[t]]))}}},[["render",function(e,t,i,d,_,y){const B=L(f("u-toolbar"),b),x=h,k=g,w=I,S=L(f("u-loading-icon"),E),T=m,V=L(f("u-popup"),D);return o(),n(V,{show:e.show,mode:e.popupMode,onClose:y.closeHandler},{default:c((()=>[a(T,{class:"u-picker"},{default:c((()=>[e.showToolbar?(o(),n(B,{key:0,cancelColor:e.cancelColor,confirmColor:e.confirmColor,cancelText:e.cancelText,confirmText:e.confirmText,title:e.title,onCancel:y.cancel,onConfirm:y.confirm},null,8,["cancelColor","confirmColor","cancelText","confirmText","title","onCancel","onConfirm"])):u("v-if",!0),a(w,{class:"u-picker__view",indicatorStyle:`height: ${e.$u.addUnit(e.itemHeight)}`,value:_.innerIndex,immediateChange:!0,style:r({height:`${e.$u.addUnit(e.visibleItemCount*e.itemHeight)}`}),onChange:y.changeHandler},{default:c((()=>[(o(!0),C(v,null,p(_.innerColumns,((t,i)=>(o(),n(k,{key:i,class:"u-picker__view__column"},{default:c((()=>[e.$u.test.array(t)?(o(!0),C(v,{key:0},p(t,((t,a)=>(o(),n(x,{class:"u-picker__view__column__item u-line-1",key:a,style:r({height:e.$u.addUnit(e.itemHeight),lineHeight:e.$u.addUnit(e.itemHeight),fontWeight:a===_.innerIndex[i]?"bold":"normal"})},{default:c((()=>[l(s(y.getItemText(t)),1)])),_:2},1032,["style"])))),128)):u("v-if",!0)])),_:2},1024)))),128))])),_:1},8,["indicatorStyle","value","style","onChange"]),e.loading?(o(),n(T,{key:1,class:"u-picker--loading"},{default:c((()=>[a(S,{mode:"circle"})])),_:1})):u("v-if",!0)])),_:1})])),_:1},8,["show","mode","onClose"])}],["__scopeId","data-v-b590b120"]]),T=_({__name:"test",setup(e){const t=y({devicesList:[],deviceId:"",serviceId:"",characteristicId:"",show:!1,changeConfirm(e){console.log("confirm",e),t.deviceId=e.value[0].deviceId,t.show=!1,t.createBLEConnection(t.deviceId)},changeCancle(){t.show=!1},openBluetoothAdapter(){uni.openBluetoothAdapter({success(e){console.log("res",e)},fail:e=>{console.log("err",e);const{errCode:t,errMsg:i}=e;B({title:i,icon:"none",duration:2e3})}})},onBluetoothAdapterStateChange(){t.startBluetoothDevicesDiscovery()},startBluetoothDevicesDiscovery(){console.log("startBluetooth>>"),uni.startBluetoothDevicesDiscovery({success(e){console.log("startBluetoothDevicesDiscovery",e),t.onBluetoothDeviceFound()},fail(e){console.log("startBluetoothDevicesDiscovery->err",e)}})},onBluetoothDeviceFound(){uni.onBluetoothDeviceFound((e=>{console.log("devices",e),setTimeout((()=>{t.getBluetoothDevices()}),1e3)}))},getBluetoothDevices(){uni.getBluetoothDevices({success:e=>{console.log("getBluetoothDevices",e);const i=(e.devices||[]).filter((e=>"未知设备"!==e.name)).map((e=>(e.id=e.deviceId,e)));t.devicesList=[i||[]],console.log("dataInfo.devicesList",t.devicesList),uni.stopBluetoothDevicesDiscovery()}})},createBLEConnection(e){uni.createBLEConnection({deviceId:e,success(i){console.log("连接成功",i),B({title:"连接成功",icon:"none"}),t.getBLEDeviceServices(e)}})},getBLEDeviceServices(e){console.log("deviceId",e),uni.getBLEDeviceServices({deviceId:e,success(e){console.log("getBLEDeviceServices:",e.services),t.serviceId=e.services[0].uuid},fail(e){console.log("getBLEDeviceServices- >err",e)}})},writeCharacter:!1,readCharacter:!1,notifyCharacter:!1,num:0,notifyCharaterId:null,notifyServiceId:null,writeCharaterId:null,writeServiceId:null,readCharaterId:null,readServiceId:null,getBLEDeviceCharacteristics(){var e=this,i=t.devicesList,o=t.num,n=e.writeCharacter,c=e.readCharacter,a=e.notifyCharacter;uni.getBLEDeviceCharacteristics({deviceId:t.deviceId,serviceId:i[o].uuid,success(r){console.log("device getBLEDeviceCharacteristics:",r.characteristics);for(var l=0;l<r.characteristics.length;++l){var s=r.characteristics[l].properties,u=r.characteristics[l].uuid;a||s.notify&&(t.notifyCharaterId=u,t.notifyServiceId=i[o].uuid,a=!0),n||s.write&&(t.writeCharaterId=u,t.writeServiceId=i[o].uuid,t.serviceId=u,t.characteristicId=i[o].uuid,n=!0),c||s.read&&(t.readCharaterId=u,t.readServiceId=i[o].uuid,c=!0)}n&&a&&c?B({title:"连接成功"}):(o++,e.writeCharacter=n,e.readCharacter=c,e.notifyCharacter=a,e.num=o,o==i.length&&x({title:"提示",content:"找不到该读写的特征值",showCancel:!1}))},fail(e){console.log("getBLEDeviceCharacteristics - >err",e)}})},onBLECharacteristicValueChange(){uni.onBLECharacteristicValueChange((e=>{console.log("onBLECharacteristicValueChange",e)}))},writeBLECharacteristicValue(){console.log("写数据");const e=new ArrayBuffer(1);new DataView(e).setUint8(0,0),uni.writeBLECharacteristicValue({deviceId:t.deviceId,serviceId:t.serviceId,characteristicId:t.characteristicId,value:e,success(e){console.log("writeBLECharacteristicValue ->success",e)},fail(e){console.log("writeBLECharacteristicValue - >err",e)}})},readBLECharacteristicValue(){uni.onBLECharacteristicValueChange((function(e){console.log("characteristic value comed:",e)})),uni.readBLECharacteristicValue({deviceId:t.deviceId,serviceId:t.serviceId,characteristicId:t.characteristicId,success:e=>{console.log("readBLECharacteristicValue ->",e)},fail(e){console.log("readBLECharacteristicValue - >err",e)}})}});return(e,i)=>{const r=L(f("u-button"),k),u=L(f("u-picker"),S),d=m;return o(),n(d,{class:"test-root"},{default:c((()=>[a(r,{onClick:i[0]||(i[0]=e=>t.openBluetoothAdapter())},{default:c((()=>[l("初始化蓝牙")])),_:1}),a(r,{onClick:i[1]||(i[1]=e=>t.onBluetoothAdapterStateChange())},{default:c((()=>[l("监听蓝牙适配器状态变化事件")])),_:1}),a(r,{onClick:i[2]||(i[2]=e=>{t.show=!0})},{default:c((()=>[l("打开设备列表")])),_:1}),a(u,{show:t.show,columns:t.devicesList,keyName:"name",onCancel:t.changeCancle,onConfirm:t.changeConfirm},null,8,["show","columns","onCancel","onConfirm"]),a(d,null,{default:c((()=>[a(d,null,{default:c((()=>[l("deviceId:"+s(t.deviceId),1)])),_:1}),a(d,null,{default:c((()=>[l("serviceId:"+s(t.serviceId),1)])),_:1}),a(d,null,{default:c((()=>[l("characteristicId:"+s(t.characteristicId),1)])),_:1})])),_:1}),a(d,null,{default:c((()=>[a(r,{onClick:i[3]||(i[3]=e=>t.createBLEConnection(t.deviceId))},{default:c((()=>[l("建立连接")])),_:1}),a(r,{onClick:i[4]||(i[4]=e=>t.getBLEDeviceServices(t.deviceId))},{default:c((()=>[l("获取蓝牙设备所有服务")])),_:1}),a(r,{onClick:i[5]||(i[5]=e=>t.getBLEDeviceCharacteristics())},{default:c((()=>[l("获取蓝牙设备某个服务中所有特征值")])),_:1}),a(r,{onClick:i[6]||(i[6]=e=>t.writeBLECharacteristicValue())},{default:c((()=>[l("写入数据")])),_:1}),a(r,{onClick:i[7]||(i[7]=e=>t.readBLECharacteristicValue())},{default:c((()=>[l("readBLECharacteristicValue")])),_:1}),a(r,{onClick:i[8]||(i[8]=e=>t.onBLECharacteristicValueChange())},{default:c((()=>[l("onBLECharacteristicValueChange")])),_:1})])),_:1})])),_:1})}}});export{T as default};
