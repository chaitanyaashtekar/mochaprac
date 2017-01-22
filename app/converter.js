module.exports=function(val){
	if(parseInt(Number.isNaN(val))){
		return val.charCodeAt('0');
	}else{
       return String.fromCharCode(val)
	}
}