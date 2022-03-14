let home = document.querySelector("#home");
let statistic = document.querySelector("#Statistic")
let service = document.querySelector("#service")
let portfolio = document.querySelector("#portfolio")
let blog = document.querySelector("#blog")

home.addEventListener("click", (event) => 
    scrollTo({
        top: 0,
        behavior: 'smooth',
    }));

statistic.addEventListener("click", (event) => 
    scrollTo({
        top: 700,
        behavior: 'smooth',
    }));

service.addEventListener("click", (event) => 
    scrollTo({
        top: 1300,
        behavior: 'smooth',
    }));

portfolio.addEventListener("click", (event) => 
    scrollTo({
        top: 2100,
        behavior: 'smooth',
    }));

blog.addEventListener("click", (event) => 
    scrollTo({
        top: 4750,
        behavior: 'smooth',
    }));