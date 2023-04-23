


let tagline = document.querySelector('.tagline h1')
let word = 'idibia'

for (let i = 0; i < word.length; i++){
    let span = document.createElement('span');
    span.textContent = word[i];
    tagline.appendChild(span)
}






// 
// 
// general 
// 

gsap.from('li', {
    duration: 1,
    delay: 2,
    y: -20,
    opacity: 0,
    stagger: .5
})
const mm = gsap.matchMedia()
const pageIntro = gsap.timeline()
////// pc
//

mm.add("(min-width: 1024px)", ()=>{
    pageIntro.from('.tagline h1 span', {
        opacity: 0,
        duration: .5,
        ease: 1,
        // y: 500,
        // x: 900
        stagger: .5
    })
    pageIntro.to('.tagline', {
        duration: .5,
        x: '-300%',
        ease: 1,
        // stagger: .5
    })
    
})


////// TABLET
//

mm.add("(min-width: 768px) and (max-width: 1023px)", ()=>{
    pageIntro.from('.tagline h1 span', {
        opacity: 0,
        duration: .5,
        ease: 1,
        // y: 500,
        // x: 900
        stagger: .5
    })
    pageIntro.to('.tagline', {
        duration: .5,
        x: '-150%',
        ease: 1,
        // stagger: .5
    })
    
})

////mobile


mm.add("(min-width: 401px)", ()=>{
    pageIntro.from('.tagline h1 span', {
        opacity: 0,
        duration: .5,
        ease: 1,
        // y: 500,
        // x: 900
        stagger: .5
    })
    pageIntro.to('.tagline', {
        duration: .5,
        x: '-50px',
        ease: 1,
        // stagger: .5
    })
    
})


pageIntro.from('.nav-logo', {
    duration: 1,
    x: '-100%',
    stagger: .5
})

pageIntro.to('.spline', {
    opacity: 1,
})

