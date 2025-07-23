var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".two",  // The element to trigger the animation
        start:"0% 95", // When the top of the '.two' element hits the bottom of the viewport
        end:"70% 50%",
        scrub:true,          // Smooth scrolling effect
      //markers:true  
    }})
    

    tl.to("#fanta",{
        top:"120%",
        left:"0%"
    },'orange')
    tl.to("#orange-cut",{
        top:"160%",
        left:"23%"
    },'orange')
    tl.to("#orange",{
        width:"15%",
        top:"160%",
        right:"10%"
    },'orange')

    tl.to("#leaf",{
        top:"110%",
        rotate:"130deg",
        left:"80%"
    },'orange')

    tl.to("#leaf2",{
        top:"110%",
        rotate:"130deg",
          left:"0%"
    },'orange')



    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".three",
            start:"0% 95", // When the top of the '.two' element hits the bottom of the viewport
            end:"70% 50%",
            scrub:true,          // Smooth scrolling effect
           // markers:true         // Remove or set to false in production
        }})




tl2.to("#orange-cut",{
left:"48%",
top:"225%"
},'ca')

tl2.to("#fanta",{
    left:"45%",
    top:"255%"
    },'ca')