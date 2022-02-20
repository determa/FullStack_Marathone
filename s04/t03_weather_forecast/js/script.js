fetch('https://api.openweathermap.org/data/2.5/onecall?lat=49.98081&lon=36.25272&appid=b684d2c3b342189ce7a8ffb725a22649')
    .then(response => response.json())
    .then(data => {
        let weather = new Weather("weather", "Kharkiv");
        for (let i = 0; i < 7; i++) {
            weather.add(data, i);
        }
    })
    .catch(error => console.error(error));

class Weather {
    constructor(id, title, array = []) {
        this.array = array;
        this.html = document.getElementById(id);
        this.html.innerHTML = `<div class"weather">
                                                 <div class="city">
                                         <h3 class="description">${title}</h3>
                                                 </div>
                                                 <div class="items">
                                                 </div>
                                             </div>`;
    }

    add(data, i) {
        let date = `${new Date(data.daily[i].dt * 1000).toLocaleDateString("ru-RU")}`;
        let img = `http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`;
        let temp = `${(data.daily[i].temp.day - 273).toFixed()}°`;
        this.array.push({
            date,
            img,
            temp
        });
        this.update();
    }

    update() {
        this.html.querySelector(".items").innerHTML = null;
        this.array.forEach((item) => {
            this.html.querySelector(".items").innerHTML += `<div class="item">
                                                                          <div class="item-header">${item.date}</div>
                                                                          <div class="item-body"><img src="${item.img}"></div>
                                                                          <div class="item-footer">${item.temp}</div>
                                                                       </div>`;
        });
    }
}