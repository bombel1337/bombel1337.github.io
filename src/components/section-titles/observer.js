window.addEventListener('load', function () {
    setTimeout(() => {
        const observer = new IntersectionObserver((entries)=> {
            entries.forEach((entry)=> {
                if (entry.isIntersecting){
                    entry.target.classList.add('showed-observer')
                } else {
                    entry.target.classList.remove('showed-observer')
                }
            })
        })
        setInterval(() => {
        }, 555);
        const hiddenElements = document.querySelectorAll('.hidden-observer')
        hiddenElements.forEach((el)=> {
            observer.observe(el)
        })
    }, 2000);

  })