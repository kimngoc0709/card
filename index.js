const btnNext = document.getElementById('next-img');
const count_group = document.querySelectorAll('.list .item').length;

let active = 0;


const load = () => {
  const itemDefault = document.getElementById(`item-${active - 2 === -2 ?
    count_group - 2 :
    (active - 2 == -1 ?
      count_group - 1 :
      active - 2)}`)
  itemDefault.classList.remove('hidden');
  const itemActive = document.getElementById(`item-${active}`);
  itemActive.classList.add('active');
  itemActive.classList.remove('hidden');
  const itemHide = document.getElementById(`item-${active - 1 < 0 ? count_group - 1 : active - 1}`);
  itemHide.classList.remove('active');
  itemHide.classList.add('hidden');
}



btnNext.onclick = e => {
  active = active + 1 >= count_group ? 0 : active + 1;
  load();
}