function Example ( type ) {
    this.type = type;
    this.color = "red";
}
 
Example.prototype.getInfo = function() {
    return this.color + ' ' + this.type + ' example';
};