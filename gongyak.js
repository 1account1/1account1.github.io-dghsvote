fetch('https://opensheet.elk.sh/1rLXQcYhpojVO1jQTf40umojl8AHeAtYT7x-vxIdBxYM/candidate')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    // 예시 출력: [{이름: "홍길동", 나이: "23"}, {이름: "김철수", 나이: "28"}]
  });