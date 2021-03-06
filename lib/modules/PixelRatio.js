var ReactPrimitives=require('../ReactPrimitives');

var PixelRatio={



get:function get(){
return ReactPrimitives.Dimensions.get('window').scale;
},




getFontScale:function getFontScale(){
return ReactPrimitives.Dimensions.get('window').fontScale||PixelRatio.get();
},





getPixelSizeForLayoutSize:function getPixelSizeForLayoutSize(layoutSize){
return Math.round(layoutSize*PixelRatio.get());
},







roundToNearestPixel:function roundToNearestPixel(layoutSize){
var ratio=PixelRatio.get();
return Math.round(layoutSize*ratio)/ratio;
}};


module.exports=PixelRatio;