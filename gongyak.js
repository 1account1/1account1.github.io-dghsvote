let num = 1;
fetch('https://opensheet.elk.sh/1rLXQcYhpojVO1jQTf40umojl8AHeAtYT7x-vxIdBxYM/candidate')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    data.forEach(element => {
      document.getElementById('gys').innerHTML += `<td>
                        <div class="gy">
                            <h2>` + num + `. ` + element.이름 + `</h2>
                            <h4>` + element.공약.replaceAll("/", "</h4><h4>") + `</h4>
                        </div>
                    </td>`;
                    if (num%2 == 0){
                      document.getElementById('gys').innerHTML += '</tr><tr>'
                    }
                    num++;
    });
    // 예시 출력: [{이름: "홍길동", 나이: "23"}, {이름: "김철수", 나이: "28"}]
  });