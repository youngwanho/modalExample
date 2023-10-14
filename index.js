// 출처: youngwanho(mavin) 개인 작업물
// 업데이트: 2023.10.14
// 버튼 클릭 시 모달이 나오는 데모 파일입니다.

var modal = document.querySelector(".modal");
var btnModal = document.querySelector(".btn-modal");
var btnModalClose = document.querySelector(".btn-close");

function toggleModal() {
    modal.classList.toggle("show");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

btnModal.addEventListener("click", toggleModal);
btnModalClose.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
