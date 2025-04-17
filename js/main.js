//  Our services Section Start
document.querySelectorAll('.services-tab li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.services-tab .active').classList.remove('active');
    item.classList.add('active');
    document.querySelector('.card-area.active').classList.remove('active');
    document.getElementById(item.getAttribute('data-target')).classList.add('active');
  });
});
//  Our services Section End
// carousel Start

// carousel End