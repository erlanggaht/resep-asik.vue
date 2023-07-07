function loading_fn (loading) {
    document.addEventListener('scroll', (e) => {
        const scrollcalc = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100
        document.querySelector('#lineScroll')?.setAttribute("style",`width:${scrollcalc}%;transition:.1s all`)
       }) 
       
       
       document.addEventListener('DOMContentLoaded',()=>{
         loading.value = true
       })
       
       document.onreadystatechange = () => {
         loading.value=false
       }
}


export default loading_fn