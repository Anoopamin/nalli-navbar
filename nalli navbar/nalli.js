
const dropdownTrigger = document.querySelector('.dropdown-trigger');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownTrigger.addEventListener('mouseenter', () => {
    dropdownContent.style.display = 'block';
});

dropdownContent.addEventListener('mouseleave', () => {
    dropdownContent.style.display = 'none';
});
const dropdownTrigge = document.querySelector('.dropdown-trigger');
const dropdownConten = document.querySelector('.dropdown-conten');

dropdownTrigge.addEventListener('mouseenter', () => {
    dropdownConten.style.display = 'block';
});

dropdownConten.addEventListener('mouseleave', () => {
    dropdownConten.style.display = 'none';
});
const dropdownTrigg = document.querySelector('.dropdown-trigg');
const dropdownConte = document.querySelector('.dropdown-conte');

dropdownTrigg.addEventListener('mouseenter', () => {
    dropdownConte.style.display = 'block';
});

dropdownConte.addEventListener('mouseleave', () => {
    dropdownConte.style.display = 'none';
});
const dropdownTrig = document.querySelector('.dropdown-trig');
const dropdownCont = document.querySelector('.dropdown-cont');

dropdownTrig.addEventListener('mouseenter', () => {
    dropdownCont.style.display = 'block';
});

dropdownCont.addEventListener('mouseleave', () => {
    dropdownCont.style.display = 'none';
});

function deleteItemOnViewportWidth() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    const thresholdWidth = 768; 

    const itemList = document.getElementById('dd');

    if (viewportWidth < thresholdWidth) {
        while (itemList.firstChild) {
            itemList.removeChild(itemList.firstChild);
        }
    }
}

window.addEventListener('resize', deleteItemOnViewportWidth);

deleteItemOnViewportWidth();
