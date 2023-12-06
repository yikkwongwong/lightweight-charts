var f=Object.defineProperty;var x=(s,t,i)=>t in s?f(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var e=(s,t,i)=>(x(s,typeof t!="symbol"?t+"":t,i),i);import{C as P}from"./lightweight-charts.production-30f5d467.js";import{g}from"./sample-data-c7d89ab8.js";import{a as _}from"./positions-0a54307c.js";class w{constructor(t){e(this,"_data");this._data=t}draw(t){t.useBitmapCoordinateSpace(i=>{if(this._data.x===null||this._data.top===null)return;const o=i.context,a=_(this._data.x,this._data.x+this._data.width,i.horizontalPixelRatio),c=_(this._data.top,this._data.top-this._data.columnHeight*this._data.items.length,i.verticalPixelRatio);o.fillStyle="rgba(0, 0, 255, 0.2)",o.fillRect(a.position,c.position,a.length,c.length),o.fillStyle="rgba(80, 80, 255, 0.8)",this._data.items.forEach(n=>{if(n.y===null)return;const r=_(n.y,n.y-this._data.columnHeight,i.verticalPixelRatio),l=_(this._data.x,this._data.x+n.width,i.horizontalPixelRatio);o.fillRect(l.position,r.position,l.length,r.length-2)})})}}class v{constructor(t){e(this,"_source");e(this,"_x",null);e(this,"_width",6);e(this,"_columnHeight",0);e(this,"_top",null);e(this,"_items",[]);this._source=t}update(){const t=this._source._vpData,i=this._source._series,o=this._source._chart.timeScale();this._x=o.timeToCoordinate(t.time),this._width=o.options().barSpacing*t.width;const a=i.priceToCoordinate(t.profile[0].price)??0,c=i.priceToCoordinate(t.profile[1].price)??o.height();this._columnHeight=Math.max(1,a-c);const n=t.profile.reduce((r,l)=>Math.max(r,l.vol),0);this._top=a,this._items=t.profile.map(r=>({y:i.priceToCoordinate(r.price),width:this._width*r.vol/n}))}renderer(){return new w({x:this._x,top:this._top,columnHeight:this._columnHeight,width:this._width,items:this._items})}}class V{constructor(t,i,o){e(this,"_chart");e(this,"_series");e(this,"_vpData");e(this,"_minPrice");e(this,"_maxPrice");e(this,"_paneViews");e(this,"_vpIndex",null);this._chart=t,this._series=i,this._vpData=o,this._minPrice=1/0,this._maxPrice=-1/0,this._vpData.profile.forEach(a=>{a.price<this._minPrice&&(this._minPrice=a.price),a.price>this._maxPrice&&(this._maxPrice=a.price)}),this._paneViews=[new v(this)]}updateAllViews(){this._paneViews.forEach(t=>t.update())}autoscaleInfo(t,i){const o=this._chart.timeScale().timeToCoordinate(this._vpData.time);if(o===null)return null;const a=this._chart.timeScale().coordinateToLogical(o);return a===null||i<a||t>a+this._vpData.width?null:{priceRange:{minValue:this._minPrice,maxValue:this._maxPrice}}}paneViews(){return this._paneViews}}const p=window.chart=P("chart",{autoSize:!0}),m=p.addLineSeries(),h=g();m.setData(h);const d=h[h.length-50].value,S=Math.round(d*.1),u=[];for(let s=0;s<15;s++)u.push({price:d+s*S,vol:Math.round(Math.random()*20)});const y={time:h[h.length-50].time,profile:u,width:10},C=new V(p,m,y);m.attachPrimitive(C);
