function openNav() {
    document.getElementById("myNav").style.height = "100%";
    }

    function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.getElementById("myNav").style.height = "0%";
        }
        });