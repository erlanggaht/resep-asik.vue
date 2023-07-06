<script setup>
import footerils from '@/assets/footeril.png'

</script>

<template>


    <footer>

        <section class="d-flex align-items-center justify-content-center">
  
         
  
          <form class="flex-grow-1">
  
            <h2 class="display-5 text-white" style="display:inline-block;padding:.7rem 3.5rem .7rem 0rem" >Kontak Kami</h2>
            
            <div class='d-flex gap-3'>
              <div class="d-flex flex-column justify-content-between p-0">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
              <div class="flex-grow-1">
                <textarea class="form-control" id="exampleFormControlTextarea1" style="height: 100%;"></textarea>
              </div>
            </div>
            <button class="btn my-4 px-4 py-2" style="color:#567752;background-color: #fbf6f0;">Kirim Pesan</button>
          </form>
          <div class="" style="text-align: right;">
            <img :src="footerils" alt="footerils" style="width: 600px;margin:-4rem 0 0 0"/>
          </div>
  
        </section>
        <hr style="margin:0 3.7rem"/>
        <section class="area_copyright d-flex justify-content-between text-white" style="padding:1rem 3.7rem 2rem 3.7rem">
          <p>Copyright @erlanggaht 2023. All Right Reserved</p>
          <div class="d-flex gap-4 align-content-center">
            <p>Follow Us</p>
            <div class=" social-footer d-flex gap-2">
           <a href="https://instagram.com/erlanggaht93/"> <img  src='@/assets/ig.svg'   /></a>
           <a href="https://github.com/erlanggaht/"><img  src='@/assets/github.svg'  /></a> 
           <a href="https://medium.com/@erlanggahidayat.md"> <img  src='@/assets/medium.svg'  /></a>
            <a href='https://www.linkedin.com/in/erlangga-hidayatullah-60b53b262/'><img  src='@/assets/linkedin.svg'  /> </a>
          </div>
          </div>  
        </section>
      </footer>

</template>

<style scoped>
footer {
    position: relative;
    padding: 12rem 0 0rem 0;
  }
  footer:before {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #fbf6f0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    background-image: url('@/assets/wave.svg');
    z-index: -99;
    content: "";
  }
  
  .social-footer img {
  width: 32px;height:32px;background-color:#729c6c;padding:4px;border-radius:100%;object-fit: cover;
  }
  
  footer input,
  footer textarea {
    background-color: #729c6c;
    border: none;
    color: #fbf6f0;
  }
  footer input::placeholder{
    color: #fbf6f0;
  }
  footer input:focus,footer textarea:focus {
    background-color: #85b47f;
    border: #85b47f;
    color: #fbf6f0;
  }
  
  footer form {
    padding-top: 10rem;
    padding:  0 4rem;
  }
  
  footer textarea {
    width: 100%;
    resize: none;
  }
  
  footer input {
    padding: 1rem 1.3rem;
    width: 270px;
  }
  
  footer input:nth-child(2) {
    margin: 6px 0 0px 0;
  
  }
  
  footer input:nth-child(1) {
    margin: 0px 0 6px 0
  }
</style>