var should = require("should");
var getChar = require('../app/converter.js');

describe("unicodeToChar/charToUnicode", function() {
 it(" 65 should return \'A\'", function() {
      var a = getChar(65);
        a.should.equal("A");
      });
it(" 66 should return \'B\'", function() {
        var b = getChar(66);
        b.should.equal("B");//made changes do it B
  })
it(" \'a\' should return 97",function(){
	var num="a".charCodeAt(0);
  num.should.equal(97);
})
it(" \'b\' should return 98",function(){
	var num="b".charCodeAt(0);
	num.should.equal(98);
})

})



