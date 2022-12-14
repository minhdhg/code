let covid_case = document.getElementById("covid-cases"),
    now_covid_case = document.getElementById("now-num-cases"),
    new_num_cases = document.getElementById("new-num-cases"),
    covid_deaths = document.getElementById("covid-deaths"),
    now_num_deaths = document.getElementById("now-num-deaths"),
    new_num_deaths = document.getElementById("new-num-deaths"),
    covid_recovered = document.getElementById("covid-recovered"),
    now_num_recovered = document.getElementById("now-num-recovered"),
    new_num_recovered = document.getElementById("new-num-recovered"),
    covid_first_vacxin = document.getElementById("covid-first-vacxin"),
    now_num_first_vacxin = document.getElementById("now-num-first-vacxin"),
    new_num_first_vacxin = document.getElementById("new-num-first-vacxin"),
    covid_second_vacxin = document.getElementById("covid-second-vacxin"),
    now_num_second_vacxin = document.getElementById("now-num-second-vacxin"),
    new_num_second_vacxin = document.getElementById("new-num-second-vacxin"),
    covid_case_vn = document.getElementById("covid-cases-vn"),
    now_covid_case_vn = document.getElementById("now-num-cases-vn"),
    new_num_cases_vn = document.getElementById("new-num-cases-vn"),
    covid_deaths_vn = document.getElementById("covid-deaths-vn"),
    now_num_deaths_vn = document.getElementById("now-num-deaths-vn"),
    new_num_deaths_vn = document.getElementById("new-num-deaths-vn"),
    covid_recovered_vn = document.getElementById("covid-recovered-vn"),
    now_num_recovered_vn = document.getElementById("now-num-recovered-vn"),
    new_num_recovered_vn = document.getElementById("new-num-recovered-vn"),
    covid_first_vacxin_vn = document.getElementById("covid-first-vacxin-vn"),
    now_num_first_vacxin_vn = document.getElementById("now-num-first-vacxin-vn"),
    new_num_first_vacxin_vn = document.getElementById("new-num-first-vacxin-vn"),
    covid_second_vacxin_vn = document.getElementById("covid-second-vacxin-vn"),
    now_num_second_vacxin_vn = document.getElementById("now-num-second-vacxin-vn"),
    new_num_second_vacxin_vn = document.getElementById("new-num-second-vacxin-vn"),
    time = document.getElementById("update"); var currentdate = new Date,
        datetime = currentdate.getHours() + ":" + currentdate.getMinutes() + "," + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear(); function numberFormat(e) { return (new Intl.NumberFormat).format(e) } time.innerHTML += datetime,
            window.onload = function () {
                function e(e) {
                    return e.stopPropagation ? e.stopPropagation() : window.event && (window.event.cancelBubble = !0),
                        e.preventDefault(),
                        !1
                } document.addEventListener("contextmenu",
                    function (e) { e.preventDefault() },
                    !1),
                    document.addEventListener("keydown",
                        function (n) {
                            n.ctrlKey && n.shiftKey && 73 == n.keyCode && e(n),
                            n.ctrlKey && n.shiftKey && 74 == n.keyCode && e(n),
                            83 == n.keyCode && (navigator.platform.match("Mac") ? n.metaKey : n.ctrlKey) && e(n),
                            n.ctrlKey && 85 == n.keyCode && (alert("Ctrl + U"),
                                e(n)),
                            123 == event.keyCode && (alert("F12"),
                                e(n))
                        },
                        !1)
            },
            function () {
                function e(e) {
                    isNaN(+e) && (e = 100); var n = +new Date,
                        t = +new Date; isNaN(n) || isNaN(t)
                } window.attachEvent ? "complete" === document.readyState || "interactive" === document.readyState ? (e(),
                    window.attachEvent("onresize",
                        e),
                    window.attachEvent("onmousemove",
                        e),
                    window.attachEvent("onfocus",
                        e),
                    window.attachEvent("onblur",
                        e)) : setTimeout(argument.callee,
                            0) : (window.addEventListener("load",
                                e),
                                window.addEventListener("resize",
                                    e),
                                window.addEventListener("mousemove",
                                    e),
                                window.addEventListener("focus",
                                    e),
                                window.addEventListener("blur",
                                    e))
            }(); let fetchFnc = async () => {
                let e = await fetch("https://static.pipezero.com/covid/data.json",
                    {}),
                n = await e.json(); covid_case_vn.innerHTML = numberFormat(n.total.internal.cases),
                    now_covid_case_vn.innerHTML = "+" + numberFormat(n.today.internal.cases),
                    new_num_cases_vn.innerHTML = "+" + numberFormat((n.today.internal.cases / n.total.internal.cases * 100).toFixed(2)) + "%",
                    covid_deaths_vn.innerHTML = numberFormat(n.total.internal.death),
                    now_num_deaths_vn.innerHTML = "+" + numberFormat(n.today.internal.death),
                    new_num_deaths_vn.innerHTML = "+" + numberFormat((n.today.internal.death / n.total.internal.death * 100).toFixed(2)) + "%",

                    covid_recovered_vn.innerHTML = numberFormat(n.total.internal.recovered),
                    now_num_recovered_vn.innerHTML = "+" + numberFormat(n.today.internal.recovered),
                    new_num_recovered_vn.innerHTML = "+" + numberFormat((n.today.internal.recovered / n.total.internal.recovered * 100).toFixed(2)) + "%"
            }; fetchFnc(); let fetchFnc7 = async () => {
                let e = await fetch("https://static.pipezero.com/covid/data.json",
                    {}),
                n = await e.json();
                // console.log(n);
                covid_deaths.innerHTML = numberFormat(n.total.world.death),
                    now_num_deaths.innerHTML = "+0",
                    new_num_deaths.innerHTML = "+0",
                    covid_case.innerHTML = numberFormat(n.total.world.cases),
                    now_covid_case.innerHTML = "+0",
                    new_num_cases.innerHTML = "+0",
                    covid_recovered.innerHTML = numberFormat(n.total.world.recovered); (async () => {
                        // let e = await fetch("https://api.coronatracker.com/v3/stats/worldometer/total.world.TrendingCases?limit=2",
                        //     {}),
                        // n = await e.json(),
                        // t = "+" + n[0].total.world.Recovered - n[1].total.world.Recovered; now_num_recovered.innerHTML = numberFormat(t),
                        //     new_num_recovered.innerHTML = "+" + numberFormat((t / n[0].total.world.Recovered * 100).toFixed(2)) + "%"
                    })()
            }; fetchFnc7(); let fetchFnc4 = async () => {
                let e = await fetch("https://ix.cnn.io/data/novel-coronavirus-2019-ncov/vaccines-world/vaccine-owid-world-history.json?q=1642241675",
                    { "Access-Control-Allow-Origin": "*" }),
                n = await e.json(); new_num_second_vacxin.innerHTML = Math.round(n.data[0].data[n.data[0].data.length - 1].peopleFullyVaccinatedPer100) + "%",
                    covid_second_vacxin.innerHTML = numberFormat(n.data[0].data[n.data[0].data.length - 1].peopleFullyVaccinated); (async () => {
                        let e = await fetch("https://d6wn6bmjj722w.population.io/1.0/population/World/today-and-tomorrow/n",
                            {}),
                        t = await e.json(),
                        o = n.data[0].data[n.data[0].data.length - 1].peopleVaccinated; covid_first_vacxin.innerHTML = numberFormat(t.total_population[t.total_population.length - 1].population - o),
                            new_num_first_vacxin.innerHTML = Math.round(100 - n.data[0].data[n.data[0].data.length - 1].peopleFullyVaccinatedPer100) + "%",
                            now_num_first_vacxin.innerHTML = numberFormat(t.total_population[t.total_population.length - 1].population),
                            now_num_second_vacxin.innerHTML = numberFormat(t.total_population[t.total_population.length - 1].population)
                    })()
            }; fetchFnc4(); let fetchFnc6 = async () => {
                let e = await fetch("https://d6wn6bmjj722w.population.io/1.0/population/Vietnam/today-and-tomorrow/",
                    {}),
                n = await e.json(); now_num_first_vacxin_vn.innerHTML = numberFormat(n.total_population[n.total_population.length - 1].population),
                    now_num_second_vacxin_vn.innerHTML = numberFormat(n.total_population[n.total_population.length - 1].population)
            }; fetchFnc6(); let fetchFnc2 = async () => {
                let e = await fetch("https://api.zingnews.vn/public/v2/corona/getChart?type=vaccination",
                    {}),
                n = await e.json(); covid_first_vacxin_vn.innerHTML = numberFormat(n.data.first.total),
                    new_num_first_vacxin_vn.innerHTML = Math.round(n.data.firstRatio) + "%",
                    now_num_first_vacxin_vn.innerHTML = numberFormat(n.data.first.total - n.data.first.datas[n.data.first.datas.length - 1].y),
                    covid_second_vacxin_vn.innerHTML = numberFormat(n.data.second.total),
                    new_num_second_vacxin_vn.innerHTML = Math.round(n.data.secondRatio) + "%",
                    now_num_second_vacxin_vn.innerHTML = numberFormat(n.data.second.total - n.data.second.datas[n.data.second.datas.length - 1].y)
            }; fetchFnc2(); let tbody = document.getElementById("news"),
                fetchFnc3 = async () => {
                    let e = await fetch("https://s2.suckhoedoisong.vn/ajax/weatherinfo/2347727.htm",
                        {}),
                    n = await e.json(); for (let e = 0; e < n.items.length; e++) {
                        var t = new Date(n.items[e].publishedAt).toLocaleTimeString([],
                            {
                                year: "numeric",
                                month: "numeric",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                            }); tbody.innerHTML += `   \n        <tr class="new">\n            <td>\n <a target="modal-iframe" onclick="show()" href="${n.items[e].url}">  \n     <img src="${n.items[e].urlToImage}"\n alt="">\n </a>\n            </td>\n            <td>\n <a target="modal-iframe" onclick="show()" href="${n.items[e].url}">  \n <p class="title">${n.items[e].title}</p><br>\n \n <p class="content">${t}</p>\n <p class="content">${n.items[e].description}</p>\n </a>\n            </td>\n        </tr>\n`
                    }
                }; fetchFnc3(); const newsBtns = document.querySelectorAll(".new-click"),
                    modal = document.querySelector(".modal"),
                    modalClose = document.querySelector("#modal-close"); function show() { modal.classList.add("open") } function hide() { modal.classList.remove("open") } modal.addEventListener("click",
                        hide()),
                        document.getElementById("nav-tick").onclick = function () {
                            document.getElementById("nav-tick").checked ? (document.getElementById("nav-mobile").style.display = "block",
                                document.getElementById("nav").style.borderBottomLeftRadius = "0",
                                document.getElementById("nav").style.borderBottomRightRadius = "0") : (document.getElementById("nav-mobile").style.display = "none",
                                    document.getElementById("nav").style.borderBottomLeftRadius = "24px",
                                    document.getElementById("nav").style.borderBottomRightRadius = "24px")
                        };