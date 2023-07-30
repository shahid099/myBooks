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