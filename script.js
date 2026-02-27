document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-mobile-toggle');
    var mobileNav = document.querySelector('.nav-mobile');

    if (toggle && mobileNav) {
        toggle.addEventListener('click', function () {
            mobileNav.classList.toggle('open');
        });

        document.querySelectorAll('.nav-mobile a').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileNav.classList.remove('open');
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    document.querySelectorAll('.code-tab').forEach(function (tab) {
        tab.addEventListener('click', function () {
            var wrapper = this.closest('.code-block');
            wrapper.querySelectorAll('.code-tab').forEach(function (t) {
                t.classList.remove('active');
            });
            wrapper.querySelectorAll('.code-tab-content').forEach(function (c) {
                c.classList.remove('active');
            });
            this.classList.add('active');
            var target = document.getElementById(this.dataset.target);
            if (target) target.classList.add('active');
        });
    });
});
