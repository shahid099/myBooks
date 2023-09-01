const businnes = document.getElementById('businnes');
const productive = document.getElementById('productive');
const selfHelp = document.getElementById('selfHelp');
// My Boxes
const box_1 = document.querySelector('.box_1'),
      box_2 = document.querySelector('.box_2'),
      box_3 = document.querySelector('.box_3');


businnes.addEventListener('click', ()=> {
    box_1.style.display = 'block';
    box_2.style.display = 'none';
    box_3.style.display = 'none';
})

productive.addEventListener('click', ()=> {
    box_1.style.display = 'none';
    box_2.style.display = 'block';
    box_3.style.display = 'none';
})

selfHelp.addEventListener('click', ()=> {
    box_1.style.display = 'none';
    box_2.style.display = 'none';
    box_3.style.display = 'block';
})


// Adding JS to Zero TO One
const zeroToOne = document.getElementById('zeroToOne');
const Zero_to_One = document.querySelector('.Zero_to_One');
zeroToOne.addEventListener('click', ()=> {
    Zero_to_One.classList.toggle('displayBlock')
})

// Adding JS to Dotcom secrets
const dotComSecret = document.getElementById('dotComSecret');
const dot_Com_Secret = document.querySelector('.dot_Com_Secret');
dotComSecret.addEventListener('click', ()=> {
    dot_Com_Secret.classList.toggle('displayBlock');
})

// Adding the JS to Launch
const Launch = document.getElementById('Launch');
const launchPara = document.querySelector('.launchPara');
Launch.addEventListener('click', ()=> {
    launchPara.classList.toggle('displayBlock');
})

// Adding the JS to 20/80 PRINCIPLES OF SUCCESS.
const principleSec = document.getElementById('principleSec');
const secPrinciple = document.querySelector('.secPrinciple');
principleSec.addEventListener('click', ()=> {
    secPrinciple.classList.toggle('displayBlock');
})

// Adding the JS to 'The 22 Immutable Laws Of Branding'
const immutableLaw = document.getElementById('immutableLaw');
const immutable_Law = document.querySelector('.immutable_Law');
immutableLaw.addEventListener('click', ()=> {
    immutable_Law.classList.toggle('displayBlock');
})

// Adding the JS to "One Thousand Ways to Make $1000"
const thousandWay = document.getElementById('thousandWay');
const thousand_Way = document.querySelector('.thousand_Way');
thousandWay.addEventListener('click', ()=> {
    thousand_Way.classList.toggle('displayBlock');
})

// Add the JS to The Hard Thing About Hard Things
const hardThing = document.getElementById('hardThing');
const hard_Thing = document.querySelector('.hard_Thing');
hardThing.addEventListener('click', ()=> {
    hard_Thing.classList.toggle('displayBlock');
})

// Adding the JS to The Lean Startup
const leanStartup = document.getElementById('leanStartup');
const leanStart_up = document.querySelector('.leanStart_up');
leanStartup.addEventListener('click', ()=> {
    leanStart_up.classList.toggle('displayBlock');
})

// Adding JS to ogilvyBook
const ogilvyBook = document.getElementById('ogilvyBook');
const ogilvy_Book = document.querySelector('.ogilvy_Book');
ogilvyBook.addEventListener('click', ()=> {
    ogilvy_Book.classList.toggle('displayBlock');
})

// Adding JS to ultimateSale
const ultimateSale = document.getElementById('ultimateSale');
const ultimate_Sale = document.querySelector('.ultimate_Sale');
ultimateSale.addEventListener('click', ()=> {
    ultimate_Sale.classList.toggle('displayBlock');
})


// Adding JS to businessAdventure
const businessAdventure = document.getElementById('businessAdventure');
const business_Adventure = document.querySelector('.business_Adventure');
businessAdventure.addEventListener('click', ()=> {
    business_Adventure.classList.toggle('displayBlock');
})

// Adding JS to lifeAdvanture
const lifeAdvanture = document.getElementById('lifeAdvanture');
const life_Advanture = document.querySelector('.life_Advanture');
lifeAdvanture.addEventListener('click', ()=> {
    life_Advanture.classList.toggle('displayBlock');
})

// Adding JS to goodTOgreat
const goodTOgreat = document.getElementById('goodTOgreat');
const good_TO_great = document.querySelector('.good_TO_great');
goodTOgreat.addEventListener('click', ()=> {
    good_TO_great.classList.toggle('displayBlock');
})

// Businnes Books Done