// because it is a class it is allowed to have both letters capital
game.PlayerEntity = me.Entity.extend({
    init: function(x, y, settings){
       this._super(me.Entity, 'init', [x, y,{ 
               image: "player",
               width: 64,
               height: 64,
               spritewidth: "64",
               spriteheight: "64",
// the difference between spritewidth and spriteheight are
// passing the main information width and height are telling 
// the screen how much to preserve
       getShape: function(){
           return(new me.Rect(0, 0, 64, 64)).toPolygon();
       }
           }]);
       this.bosy.setVelocity(5, 0);
       
       //reach into the constructer of entity
    },
    
    update: function (){
        if(me.input.isKeyPressed("right")){
//        sets the position of my x by the velocity defined
//       setVelocity() and multiplying it by me.timer.tick.
//      me.timer.tick makes the movent look smooth
        this.body.vel.x += this.body.accel.x * me.timer.tick;
    }else{
        this.body.vel.x = 0;
    }
    this.body.update(delta);
    return true; 
}
});