AFRAME.registerComponent("move-plane",{
    schema :{
        moveX:{type:"number",default:0},
        rotateX:{type:"number",default:0}
    },
    tick:function(){
        window.addEventListener("click",()=>{
            this.data.moveX = this.data.moveX-0.001
            this.data.rotateX = this.data.rotateX-0.01
        })
       
        var plane = this.el.getAttribute("position")
        plane.x = plane.x+this.data.moveX
        this.el.setAttribute("position",{x:plane.x,y:plane.y,z:plane.z})

        
        var rotate = this.el.getAttribute("rotation")
        rotate.x = rotate.x+this.data.rotateX
        this.el.setAttribute("rotation",{x:rotate.x,y:rotate.y,z:rotate.z})
    }
})