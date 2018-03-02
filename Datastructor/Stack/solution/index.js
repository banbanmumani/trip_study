module.exports = (() => {
  var stack = function(){
    this.datastore = [];
    this.top = 0;
  };

  stack.prototype.push = function(data){
    this.datastore[this.top++] = data;
  };
  stack.prototype.pop = function(){
    if(this.top < 0) return ;
    return this.datastore[this.top--];
  };
  stack.prototype.length = function(){
    return this.top;
  };
  stack.prototype.clear = function(){
    this.top = 0;
  };
  stack.prototype.peek = function(){
    return this.datastore[this.top];
  };

  return stack;
})();

