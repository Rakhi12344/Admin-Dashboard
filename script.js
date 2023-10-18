var sidebar=false;
var sidebar=document.getElementById("sidebar");
function openSidebar(){
    if(!sidebaropen){
        sidebar.classlist.remove("sidebar-responsive");
        sidebaropen=true;
    }

}
function closesidebar(){
    if(sidebaropen){
        sidebar.clearlist.remove("sidebar-responsive");

    }
}


//*******************************************************888charts**8***************************88 */
//  Bar chart

      
var barChartOptions = {
    series: [{
    name: 'Net Profit',
    data: [15, 10, 20, 18, 19, 5, 19, 20, 19,18,17,18]
  }], 
//     {name: 'Revenue',
//     data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
//   }, {
//     name: 'Free Cash Flow',
//     data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
//   }],
    chart: {
    type: 'bar',
    height: 350,
    
    toolbar:{
show:false
    },
  },
  colors: [
    "#e6e8ed",
    "#e6e8ed",
    "#e6e8ed",
    "#e6e8ed",
    "#e6e8ed",
    "#e6e8ed",
    "#e6e8ed",
    "#246dec",
    "#e6e8ed",
    "#e6e8ed",
    "#e6e8ed",
    "#e6e8ed",

],
  plotOptions: {
    bar: {
        distributed:true,
      horizontal: false,
      columnWidth: '97%',
      endingShape: 'rounded'
    
    },
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Jan', 'Feb','Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
  },
//   yaxis: {
//     title: {
//       text: "count"
//     }

  //},
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var barChart = new ApexCharts(document.querySelector("#bar-Chart"), barChartOptions);
 barChart.render();
//  ******************************pie chart
// var ctx = document.getElementById("myChart").getContext('2d');
// var myChart = new Chart(ctx, {
//   type: 'doughnut',
// data: {
//     text:"150hhh",
//     labels: ["M", "T", "W" ],
//     datasets: [{
//       backgroundColor: [
//         "#ff1493",
//       "#246dec",
//       "#e6e8ed",
       
     
//       ],

//       data: [15,30,25],
//     }]
// }
// });
window.onload=function(){//from  w ww  .  j a v  a  2  s.com
    var data = {
      labels: [
        "Red",
        "Blue",
        "Yellow"
      ],
      datasets: [
        {
          data: [20, 50, 30],
          backgroundColor: [
            "#ff1493",
                  "#246dec",
              "#e6e8ed",
          ],
          hoverBackgroundColor: [
            "#FF6283",
            "#36A2EB",
            "#FFCC54"
          ]
        }]
    };
    var promisedDeliveryChart = new Chart(document.getElementById('myChart'), {
      type: 'doughnut',
      data: data,
      options: {
         responsive: true,
        legend: {
          display: false
        }
      }
    });
    Chart.pluginService.register({
      beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        var text = "65%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    });
        }
    
