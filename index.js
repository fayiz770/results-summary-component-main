document.addEventListener('DOMContentLoaded', () => {
    const summary = document.getElementById('summary')
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            var elements = ``
            for(let [index,item] of data.entries()){
                elements += 
                `
                <div class="items item${index + 1}">
                <div class="first ${item.category}"><img src="${item.icon}" alt=""></div>
                <div class="second">
                  <p class="dark-dray">${item.score}</p>
                  <span class="gray"> / 100</span>
                </div>
              </div>
                `
            }
            summary.innerHTML += elements
            summary.innerHTML += 
            `<div class="item5 link">
                <a href="" >Continue</a>
            </div>
            `
        })
})