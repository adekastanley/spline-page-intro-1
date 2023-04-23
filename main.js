


let tagline = document.querySelector('.tagline h1')
let word = 'idibia'

for (let i = 0; i < word.length; i++){
    let span = document.createElement('span');
    span.textContent = word[i];
    tagline.appendChild(span)
}



const pageIntro = gsap.timeline()


const mm = gsap.matchMedia()

////mobile


mm.add("(max-width: 400px)", ()=>{
    pageIntro.from('.tagline h1 span', {
        opacity: 0,
        duration: 1,
        // y: 500,
        // x: 900
        stagger: .5
    })
    pageIntro.to('.tagline', {
        duration: 1,
        x: '-50px',
        // stagger: .5
    })
    
})


////// TABLET
//

mm.add("(min-width: 401px)", ()=>{
    pageIntro.from('.tagline h1 span', {
        opacity: 0,
        duration: 1,
        // y: 500,
        // x: 900
        stagger: .5
    })
    pageIntro.to('.tagline', {
        duration: 1,
        x: '-150%',
        // stagger: .5
    })
    
})

////// pc
//

mm.add("(min-width: 901px)", ()=>{
    pageIntro.from('.tagline h1 span', {
        opacity: 0,
        duration: 1,
        // y: 500,
        // x: 900
        stagger: .5
    })
    pageIntro.to('.tagline', {
        duration: 1,
        x: '-300%',
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

