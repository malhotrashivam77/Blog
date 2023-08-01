// filterjs
$(document).ready(function () {
    $('#filter-select').change(function () {
        const value = $(this).val();
        if (value === 'all') {
            $('.post-box').show('1000');
        } else {
            $('.post-box')
                .not('.' + value)
                .hide('1000');
            $('.post-box')
                .filter('.' + value)
                .show('1000');
        }
    });

    // Add 'active-filter' class to the selected option in the dropdown
    $('.filter-select').change(function () {
        $('.filter-select option').each(function () {
            if ($(this).is(':selected')) {
                $(this).addClass('active-filter');
            } else {
                $(this).removeClass('active-filter');
            }
        });
    });
});


// header background change on scroll
let header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
    header.classList.toggle("shadow",window.scrollY>0);
});