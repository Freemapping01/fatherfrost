<template>
  <div>
    <header>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark position-fixed"
        style="z-index: 10000"
      >
        <div class="container-fluid">
          <div class="container">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent ">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <a class="navbar-brand" href="#about">О ФЕСТИВАЛЕ</a>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#top"
                    >Темы</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#reviews"
                    >Отзывы</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"
                    >Заявка
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    RU
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">English</a></li>
                    <li><a class="dropdown-item" href="#">Suomi</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<style lang="css">
.navbar {
  width: 100%;
}
</style>
