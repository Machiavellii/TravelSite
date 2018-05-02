//Sidenav
let sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

//Slider
let slider = document.querySelector('.slider');
M.Slider.init(slider,{
	indicators: false,
	height: 500,
	transition: 500,
	interval: 6000
});
//Autocomplete
let ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
	data:{
		"Aruba":null,
		"Cancun Mexico":null,
		"Jamacia":null,
		"Hawaii":null,
		"Florida":null,
		"Europe":null,
		"California":null,
		"Brasil":null,
		"Serbia":null,
	}
})

//Material Boxed
let mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

//ScrollSpy
let ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {})

