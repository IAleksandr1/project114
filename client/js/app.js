document.addEventListener("DOMContentLoaded", function () {
  const slides = [
    {
      image: "imgs/саша.jpg",
      title: "Симанов Александр",
      id_contact: `
          <img src="imgs/сашаMINI.jpg" width="50px">
          <span>Симанов Александр</span>
        
      `,
      description: `
                        <div class="form-row">
                            <div class="form-group">
                                <img src="imgs/саша.jpg" width="250" class="img"> 
                            </div> 
                            <div class="form-group"  id="form-group1">
                                <h1 class="border-1">Симанов Александр</h1>
                                <p class="img1"><br> Учусь на <em>программиста</em> в <strong>МГУ им.Огарёва</strong>.</p>
                                <hr>
                                <p class="img1"><strong>Список социальных сетей:</strong></p>
                                <a href="https://vk.com/ialeksandrx" target="_blank" class="button">Вконтакте</a>
                                |
                                <a href="https://t.me/aIeksandrx" target="_blank" class="button">Telegram</a>
                                <hr>
                            </div>
                        </div>
                        <div class="border-2">
                            <h2>Мои Хобби</h2>
                            <ol>
                                <li>Занимаюсь спортом</li>
                                <li>Занимаюсь программированием</li>
                                <li>Читаю книги (начинаю)</li>
                            </ol>
                        </div>
                        <div class="border-3">
                          <h2 >Мои навыки и достижения</h2>
                          <ul style="margin-left: 20px">
                            <li>Самостоятельно изучил: Java, JavaScript, React, Python, Паскаль.</li>
                            <li>Пишу сайты, практикую разные стили.</li>
                            <li>Постоянно практикуюсь в написание сайтов </li>
                          </ul>
                        </div>
                    `,
    },
    {
      image: "imgs/лиза.jpg",
      title: "Родайкина Елизавета",
      id_contact: `
        <img src="imgs/лизаMINI.jpg" width="50px">
        <span>Родайкина Елизавета</span>
      `,
      description: `
                        <div class="form-row">
                            <div class="form-group">
                                <img src="imgs/лиза.jpg" width="250" class="img"> 
                            </div> 
                            <div class="form-group" id="form-group1">
                                <h1 class="liza1">Родайкина Елизавета</h1>
                                <p class="img1"><br> Учусь в МПК ИДО МГУ им. Н. П. Огарёва, член Студенчесткого Совета, активистка и просто хороший человек.</p>
                                <hr>
                                <p class="img1"><strong>Список социальных сетей:</strong></p>
                                <a href="https://vk.com/lizochka.best.rodaykina" target="_blank" class="button">Вконтакте</a>
                                |
                                <a href="https://t.me/agressivekata" class="button" target="_blank">Telegram</a>
                                <hr>
                            </div>
                        </div>
                        <div class="border-2">
                            <h2>Мои Хобби</h2>
                            <ol>
                                <li>Танцую с 8 лет</li>
                                <li>Читаю детективы</li>
                                <li>Веду сообщество "Многопрофильный колледж ИДО МГУ им. Н. П. Огарёва"</li>
                            </ol>
                        </div>
                         <div class="border-3">
                            <h2 >Мои навыки и достижения</h2>
                            <ul style="margin-left: 20px">
                              <li>Занимаю должность заместителя председателя Совета Первых регионального отделения Республики Мордовия</li>
                              <li>Участница тематических смен в МДЦ "Артек", ВДЦ "Орлёнок" и ВДЦ "Смена"</li>
                              <li>Являюсь старостой своей академической группы и руководителем сектора медиакоммуникаций Студенческого Совета колледжа</li>
                            </ul>
                        </div>
                    `,
    },
    {
      image: "imgs/николавнa.jpg",
      title: "Скворцова Злата",
      id_contact: `
            <img src="imgs/николавнaMINI.jpg" width="50px">
            <span>Скворцва Злата</span>
          `,
      description: `
                        <div class="form-row">
                            <div class="form-group">
                                <img src="imgs/николавнa.jpg" width="250" class="img"> 
                            </div> 
                            <div class="form-group" id="form-group1">
                                <h1 class="border-1">Скворцова Злата</h1>
                                <p class="img1"><br> Учусь на <em>программиста</em> в <strong>МГУ им.Огарёва</strong>.</p>
                                <hr>
                                <p class="img1"><strong>Список социальных сетей:</strong></p>
                                <a href="https://vk.com/id711718865" target="_blank" class="button">Вконтакте</a>
                                |
                                <a href="https://t.me/Skkkkkkkkks" class="button" target="_blank">Telegram</a>
                                <hr>
                            </div>
                        </div>
                        <div class="border-2">
                            <h2>Мои Хобби</h2>
                            <ol>
                                <li>Книги</li>
                                <li>Изучение иностранных языков</li>
                                <li>Танцы</li>
                            </ol>
                        </div>
                        <div class="border-3">
                          <h2 >Мои навыки и достижения</h2>
                          <ul style="margin-left: 20px">
                            <li>Активно изучаю языки программирования и создаю собственные небольшие проекты, чтобы применять знания на практике</li>
                            <li>Постоянно совершенствую навыки через онлайн-курсы и самостоятельное обучение</li>
                            <li>Самостоятельно изучаю 2 иностранных языка</li>
                          </ul>
                        </div>
                    `,
    },
  ];

  let currentSlide = 0;
  const mainSlide = document.querySelector(".main-slide");
  const prevSlideImg = document.getElementById("prev-slide");
  const nextSlideImg = document.getElementById("next-slide");
  const infoContainer = document.querySelector(".info-container");
  const idContact = document.getElementById("id_contact");

  // Инициализация слайдов
  function initSlides() {
    // Очищаем основной слайд
    mainSlide.innerHTML = "";

    // Добавляем все изображения в основной слайд
    slides.forEach((slide, index) => {
      const img = document.createElement("img");
      img.src = slide.image;
      img.alt = slide.title;
      img.dataset.index = index;
      if (index === 0) img.classList.add("active");
      mainSlide.appendChild(img);
    });

    // Обновляем боковые превью
    updateSidePreviews();
    // Обновляем информацию
    updateInfo();
    upContact();
  }

  // Обновление боковых превью
  function updateSidePreviews() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    const nextIndex = (currentSlide + 1) % slides.length;

    prevSlideImg.src = slides[prevIndex].image;
    nextSlideImg.src = slides[nextIndex].image;
  }

  // Обновление информации
  function updateInfo() {
    // Удаляем старую информацию
    const oldInfo = document.querySelector(".info-content");
    if (oldInfo) oldInfo.remove();

    // Создаем новую информацию
    const infoContent = document.createElement("div");
    infoContent.className = "info-content active";
    infoContent.innerHTML = `
                    ${slides[currentSlide].description}
                `;

    infoContainer.insertBefore(infoContent, infoContainer.firstChild);
  }

  function upContact() {
    const oldInfo1 = idContact.querySelector(".id-contact");
    if (oldInfo1) oldInfo1.remove();

    const infoContent1 = document.createElement("div");
    infoContent1.className = "id-contact active";
    infoContent1.innerHTML = `
                    ${slides[currentSlide].id_contact}
                `;

    idContact.insertBefore(infoContent1, idContact.firstChild);
  }

  // Переключение слайда
  function changeSlide(newIndex) {
    // Проверяем, чтобы индекс был в пределах массива
    newIndex = (newIndex + slides.length) % slides.length;

    // Плавное скрытие текущего слайда
    const currentImg = document.querySelector(
      `.main-slide img[data-index="${currentSlide}"]`
    );
    currentImg.classList.remove("active");

    // Плавное отображение нового слайда
    const newImg = document.querySelector(
      `.main-slide img[data-index="${newIndex}"]`
    );
    newImg.classList.add("active");

    currentSlide = newIndex;
    updateSidePreviews();
    upContact();
    updateInfo();
  }

  // Обработчики событий
  document.querySelector(".side-slide.left").addEventListener("click", () => {
    changeSlide(currentSlide - 1);
  });

  document.querySelector(".side-slide.right").addEventListener("click", () => {
    changeSlide(currentSlide + 1);
  });

  // Инициализация
  initSlides();
});
