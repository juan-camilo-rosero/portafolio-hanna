const d = document

export function changePage(btns, div, newClass) {
    const $btns = d.querySelectorAll(btns),
    $div = d.querySelector(div)

    $btns.forEach($btn => {
        $btn.addEventListener("click", e => {
            e.preventDefault()
            $div.classList.add(newClass)
            setTimeout(() => {
                location.href = e.target.href;
            }, 500);
        })
    });
}

export function transitionRemove(div, newClass) {
    const $div = d.querySelector(div)
    d.addEventListener("DOMContentLoaded", e => $div.classList.remove(newClass))
}

export function logoChange(btn, div, newClass){
    const $div = d.querySelector(div),
    $btn = d.querySelector(btn)

    $btn.addEventListener("click", e => {
        $div.classList.add(newClass)
        setTimeout(() => {
            location.href = "http://127.0.0.1:5500/otros/portafolio_hanna/index.html";
        }, 500);
    })
}