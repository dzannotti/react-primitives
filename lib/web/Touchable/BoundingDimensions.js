





var PooledClass=require('./PooledClass');








function BoundingDimensions(width,height){
this.width=width;
this.height=height;
}

BoundingDimensions.prototype.destructor=function(){
this.width=null;
this.height=null;
};





BoundingDimensions.getPooledFromElement=function(element){
return BoundingDimensions.getPooled(
element.offsetWidth,
element.offsetHeight);

};

PooledClass.addPoolingTo(BoundingDimensions,PooledClass.twoArgumentPooler);

module.exports=BoundingDimensions;