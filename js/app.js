window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
});
//задаем переменные для элементов html
const form = document.querySelector('form');
const submit = document.getElementsByClassName('first_submit');
const name1 = document.getElementById('name');
const result = document.getElementById('result');
const button = document.getElementById('first_button');
const element = document.getElementById('dungeon2__header')
const show = document.getElementsByClassName('showcase-navigation');
const user_name = {nickname: ''}

form.addEventListener('submit', (event) => {
	let index = 0;
  event.preventDefault(); // отменяем действие по умолчанию
	submit[0].disabled = true;
	name1.disabled = true;
	const name = form.elements.name.value;
	user_name.nickname = name;
	const text_f = `Good luck, ${name}`;
  // выводим результат в div с id="result"
  const intervalId = setInterval(() => {
		result.textContent += text_f[index];
		index++;
		if (index === text_f.length) {
			clearInterval(intervalId);
		}
	}, 200);
});

document.addEventListener('DOMContentLoaded', () => {
	const showSlider = new Swiper('.showcase-carousel', {
		loop: true,
		slidesPerView: 3,
		speed: 1800,
		centeredSlides: true,
		navigation: {
			nextEl: '.showcase-navigation__next',
			prevEl: '.showcase-navigation__prev'
		}
	})
});
button.addEventListener("click", function() {
	button.disabled = true;
	const text = 'Wise choice, you can go';
	index = 0;
	button.classList.add("active");
	show[0].classList.add("disabled");
	setTimeout(() => {
			button.classList.remove("active");
			button.innerHTML= "Selected!"
	}, 300);
	setTimeout(() => {
		element.innerHTML = "ㅤ";
		const intervalId_2 = setInterval(() => {
			element.textContent += text[index];
			index++;
			if (index === text.length) {
				clearInterval(intervalId_2);
			}
		}, 150);
	}, 1000);
});

