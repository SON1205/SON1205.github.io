// 초기값
let likeCnt = 0

// id가 btn인 요소를 선택
const likeBtn = document.querySelector('#likeBtn')

// 2-a. btn  요소에 addEventListener에 'click'
likeBtn.addEventListener('click', function () { // btn이 'click' 되었을 때마다 함수가 실행됨
  console.log('좋아요 버튼 클릭!')

  // 방법 1과 b,c,d는 동일
  // 2-b. 함수가 실행됐을때 cntNum의 값에 +1
  likeCnt += 1

  // 2-c. 증가된 값을 프론트에 반영해주기 위해서 #cnt 요소 선택
  const cnt = document.querySelector('#likeCnt')

  // 2-d. 선택된 #cnt 요소의 innerText값 변경
  cnt.innerText = likeCnt
})

// 초기값
let hateCnt = 0

// id가 btn인 요소를 선택
const hateBtn = document.querySelector('#hateBtn')

// 2-a. btn  요소에 addEventListener에 'click'
hateBtn.addEventListener('click', function () { // btn이 'click' 되었을 때마다 함수가 실행됨
  console.log('싫어요 버튼 클릭!')

  // 방법 1과 b,c,d는 동일
  // 2-b. 함수가 실행됐을때 cntNum의 값에 +1
  hateCnt += 1

  // 2-c. 증가된 값을 프론트에 반영해주기 위해서 #cnt 요소 선택
  const cnt = document.querySelector('#hateCnt')

  // 2-d. 선택된 #cnt 요소의 innerText값 변경
  cnt.innerText = hateCnt
})


