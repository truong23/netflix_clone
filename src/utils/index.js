export function SmoothHorizontalscrolling(e ,time, amount, start) {
    let eAmt = amount / 100 ;
    let curTime = 0;
    let scrollCounter = 0;
    const y = window.scrollY;
    while (curTime <= time) {
        window.setTimeout(SHS_B, curTime, e, scrollCounter, eAmt, start, y)
        curTime += time / 100
        scrollCounter++
        window.scrollTo(0, y)
    }
}

function SHS_B(e, sc, eAmt, start, y){
    e.scrollLeft = eAmt * sc + start
}

export function randomRgbaColor (opacity) {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);

    let color = `rgba(${R}, ${G}, ${B}, ${opacity} )`;
    return color


}