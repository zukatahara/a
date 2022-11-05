const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
// console.log('allDropdown', allDropdown.length)
allDropdown.forEach(item => {
    // console.log(item)
    const a = item.parentElement.querySelector('a:first-child')
    // console.log('a', a)
    a.addEventListener('click', function (e) {
        e.preventDefault();
        if (!this.classList.contains('active')) {
            allDropdown.forEach(i => {
                const aLink = i.parentElement.querySelector('a:first-child');
                aLink.classList.remove('active');
                i.classList.remove('show');
            })
        }
        this.classList.toggle('active');
        item.classList.toggle('show');
    })
})
//PROFILE DROPDOWN
const profile = document.querySelector('nav .profile');
const imgProfile = document.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

imgProfile.addEventListener('click', function () {
    dropdownProfile.classList.toggle('show')
})

//MENU
const allMenu = document.querySelectorAll('main .content-data .head .menu');
// console.log(allMenu.length)

allMenu.forEach(item => {
    const icon = item.querySelector('.icon');
    // console.log('icon', icon)
    const menuLink = item.querySelector('.menu-link')
    icon.addEventListener('click', () => {
        menuLink.classList.toggle('show');
    })
})



window.addEventListener('click', function (e) {
    // dropdownProfile.classList.toggle('show')
    if (e.target !== imgProfile) {
        if (e.target !== dropdownProfile) {
            if (dropdownProfile.classList.contains('show')) {
                dropdownProfile.classList.remove('show')
            }
        }
    }
})

//PROGRESS BAR
const allProgress = document.querySelectorAll('main .card .progress');
allProgress.forEach(item => {
    item.style.setProperty('--value', item.dataset.value)
})

//SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar')
const sidebar = document.getElementById('sidebar');
toggleSidebar.addEventListener('click', function () {
    console.log(22)
    sidebar.classList.toggle('hide')
})








//APEXCHART
var options = {
    chart: {
        height: 350,
        type: "line",
        stacked: false
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#FF1654", "#247BA0"],
    series: [{
            name: "Series A",
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        },
        {
            name: "Series B",
            data: [20, 29, 37, 36, 44, 45, 50, 58]
        }
    ],
    stroke: {
        width: [4, 4]
    },
    plotOptions: {
        bar: {
            columnWidth: "20%"
        }
    },
    xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
    },
    yaxis: [{
            axisTicks: {
                show: true
            },
            axisBorder: {
                show: true,
                color: "#FF1654"
            },
            labels: {
                style: {
                    colors: "#FF1654"
                }
            },
            title: {
                text: "Series A",
                style: {
                    color: "#FF1654"
                }
            }
        },
        {
            opposite: true,
            axisTicks: {
                show: true
            },
            axisBorder: {
                show: true,
                color: "#247BA0"
            },
            labels: {
                style: {
                    colors: "#247BA0"
                }
            },
            title: {
                text: "Series B",
                style: {
                    color: "#247BA0"
                }
            }
        }
    ],
    tooltip: {
        shared: false,
        intersect: true,
        x: {
            show: false
        }
    },
    legend: {
        horizontalAlign: "left",
        offsetX: 40
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();