const contactUsOpenPopup=document.querySelector("#contact-us-open-popup"),popup=document.querySelector("#popup"),popupCloseButton=popup.querySelector("#popup-close-button"),popupForm=popup.querySelector("form");let popupLogin=popup.querySelector("#name"),popupEmail=popup.querySelector("#email"),popupText=popup.querySelector("#text"),formSubmitStatus=!1,isStorageSupport=!0,storage="",storageEmail="";try{storage=localStorage.getItem("login"),storageEmail=localStorage.getItem("email")}catch(p){isStorageSupport=!1}contactUsOpenPopup.onclick=function(p){p.preventDefault,popup.classList.add("popup-show"),popupLogin.focus(),storage&&(popupLogin.value=storage,popupEmail.focus()),storageEmail&&(popupEmail.value=storageEmail,popupText.focus())},popupCloseButton.onclick=function(){popup.classList.remove("popup-show"),popupLogin.classList.remove("popup-input-error"),popupEmail.classList.remove("popup-input-error"),popupText.classList.remove("popup-input-error")},document.addEventListener("keydown",function(p){27===p.keyCode&&(popup.classList.remove("popup-show"),popupLogin.classList.remove("popup-input-error"),popupEmail.classList.remove("popup-input-error"),popupText.classList.remove("popup-input-error"))}),popupForm.addEventListener("submit",function(p){formSubmitStatus=!0,popupLogin.value&&popupEmail.value&&popupText.value||(p.preventDefault(),popupLogin.value?(popupLogin.classList.remove("popup-input-error"),isStorageSupport&&localStorage.setItem("login",popupLogin.value)):(popupLogin.classList.remove("popup-input-error"),popupLogin.offsetWidth=popupLogin.offsetWidth,popupLogin.classList.add("popup-input-error")),popupEmail.value?(popupEmail.classList.remove("popup-input-error"),isStorageSupport&&localStorage.setItem("email",popupEmail.value)):(popupEmail.classList.remove("popup-input-error"),popupEmail.offsetWidth=popupLogin.offsetWidth,popupEmail.classList.add("popup-input-error")),popupText.value?(popupText.classList.remove("popup-input-error"),isStorageSupport&&localStorage.setItem("text",popupText.value)):(popupText.classList.remove("popup-input-error"),popupText.offsetWidth=popupLogin.offsetWidth,popupText.classList.add("popup-input-error")),console.log("Все поля должны быть заполнены!"))}),popupLogin.addEventListener("keydown",function(){formSubmitStatus&&(popupLogin.value?popupLogin.classList.remove("popup-input-error"):popupLogin.classList.add("popup-input-error"))}),popupEmail.addEventListener("keydown",function(){formSubmitStatus&&(popupEmail.value?popupEmail.classList.remove("popup-input-error"):popupEmail.classList.add("popup-input-error"))}),popupText.addEventListener("keydown",function(){formSubmitStatus&&(popupText.value?popupText.classList.remove("popup-input-error"):popupText.classList.add("popup-input-error"))}),popupLogin.addEventListener("change",function(){formSubmitStatus&&popupLogin.value&&popupLogin.classList.remove("popup-input-error")}),popupEmail.addEventListener("change",function(){formSubmitStatus&&popupEmail.value&&popupEmail.classList.remove("popup-input-error")}),popupText.addEventListener("chenge",function(){formSubmitStatus&&popupText.value&&popupText.classList.remove("popup-input-error")});let sliderIndicatorButtons=document.querySelectorAll(".slider-indicator-button"),slide1=document.querySelector(".header-slider_item-iphones"),slide2=document.querySelector(".header-slider_item-imac"),slide3=document.querySelector(".header-slider_item-tablet"),slideButton1=document.querySelector(".slider-indicator-button1"),slideButton2=document.querySelector(".slider-indicator-button2"),slideButton3=document.querySelector(".slider-indicator-button3");sliderIndicatorButtons.forEach(p=>{p.onclick=(()=>{p.classList.contains("slider-indicator-current")||(slideButton1.classList.add("slider-indicator-current"),slideButton2.classList.remove("slider-indicator-current"),slideButton3.classList.remove("slider-indicator-current")),p.classList.contains("slider-indicator-current")||(slideButton2.classList.add("slider-indicator-current"),slideButton1.classList.remove("slider-indicator-current"),slideButton3.classList.remove("slider-indicator-current")),p.classList.contains("slider-indicator-current")||(slideButton3.classList.add("slider-indicator-current"),slideButton2.classList.remove("slider-indicator-current"),slideButton1.classList.remove("slider-indicator-current")),"Первый слайд"==p.ariaLabel?slide1.classList.contains("slider-display-none")&&(slide1.classList.remove("slider-display-none"),slide2.classList.add("slider-display-none"),slide3.classList.add("slider-display-none")):"Второй слайд"==p.ariaLabel?slide2.classList.contains("slider-display-none")&&(slide2.classList.remove("slider-display-none"),slide1.classList.add("slider-display-none"),slide3.classList.add("slider-display-none")):"Третий слайд"==p.ariaLabel&&slide3.classList.contains("slider-display-none")&&(slide3.classList.remove("slider-display-none"),slide2.classList.add("slider-display-none"),slide1.classList.add("slider-display-none"))})});