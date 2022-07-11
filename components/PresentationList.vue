<template>
  <div>
     <div class="bg-light" style="padding-bottom: 5px">
      <div class="container">
        <div class="row justify-content-between" style="padding-top: 50px">
          <div class="col-xs-12 col-lg-5">
            <img src="/photo_about1.png" class="img-fluid" />
          </div>

          <div class="col-5 col-xs-12">
            <div class="d-hidden d-sm-flex flex-column align-items-end">
              <a href="https://www.facebook.com/dedmorozprotiv" target="_blank">
                <img src="/fb.svg" class="rounded d-block mt-2 p-1"
              /></a>
              <a
                href="https://www.instagram.com/ffrost_against/"
                target="_blank"
              >
                <img src="/instagram.svg" class="rounded d-block mt-2 p-1"
              /></a>
              <a><img src="/e-mail.svg" class="rounded d-block mt-2 p-1" /></a>
              <a
                ><img src="/telegram.svg" class="rounded d-block mt-2 p-1"
              /></a>

              <div
                class="col-xs-12 col-md-12 d-flex flex-column align-items-end"
              >
                <div class="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/etTyd3MQZwA"
                    title="YouTube video"
                    allowfullscreen
                  ></iframe>
                </div>
                <div
                  class="col-xs-12 col-md-12 d-flex paragraph text-sm-start fs-5"
                >
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-7">
          <h4 class="featurette-heading">фото с прошлого фестиваля</h4>
        </div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/photo_carousel1.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/photo_carusel3.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/photo_carusel2.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Предыдущий</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Следующий</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.carousel-inner {
  height: 409px;
}

.carousel-inner img {
  transform: translateY(-30%);
}

.carousel {
  margin-block-end: 100px;
}


</style>