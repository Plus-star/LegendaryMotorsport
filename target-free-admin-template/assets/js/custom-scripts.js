/*------------------------------------------------------
    Author : www.webthemez.com
    License: Commons Attribution 3.0
    http://creativecommons.org/licenses/by/3.0/
---------------------------------------------------------  */

(function ($) {
    "use strict";
    var mainApp = {

        initFunction: function () {
            /*MENU 
            ------------------------------------*/
            $('#main-menu').metisMenu();
			
            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            });

            /* MORRIS BAR CHART
			-----------------------------------------*/
            Morris.Bar({
                element: 'morris-bar-chart',
                data: [{
                    y: '2006',
                    a: 100,
                    b: 90
                }, {
                    y: '2007',
                    a: 75,
                    b: 65
                }, {
                    y: '2008',
                    a: 50,
                    b: 40
                }, {
                    y: '2009',
                    a: 75,
                    b: 65
                }, {
                    y: '2010',
                    a: 50,
                    b: 40
                }, {
                    y: '2011',
                    a: 75,
                    b: 65
                }, {
                    y: '2012',
                    a: 100,
                    b: 90
                }],
                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['Autos', 'Motos'],
				 barColors: [
    '#e96562','#414e63',
    '#A8E9DC' 
  ],
                hideHover: 'auto',
                resize: true
            });
	 


            /* MORRIS DONUT CHART
			----------------------------------------*/
            Morris.Donut({
                element: 'morris-donut-chart',
                data: [{
                    label: "Propina",
                    value: 120000
                }, {
                    label: "Usuarios",
                    value: 500000
                }, {
                    label: "Ventas Totales",
                    value: 800000
                }],
				   colors: [
    '#A6A6A6','#414e63',
    '#e96562' 
  ],
                resize: true
            });

            /* MORRIS AREA CHART
			----------------------------------------*/

            Morris.Area({
                element: 'morris-area-chart',
                data: [{
                    period: '2010 Q1',
                    CarbonRS: 2666,
                    CoquetteD10: null,
                    Zentorno: 2647
                }, {
                    period: '2010 Q2',
                    CoquetteD10: 2778,
                    Zentorno: 2294,
                    CarbonRS: 2441
                }, {
                    period: '2010 Q3',
                    Zentorno: 4912,
                    CoquetteD10: 1969,
                    CarbonRS: 2501
                }, {
                    period: '2010 Q4',
                    CarbonRS: 3767,
                    Zentorno: 3597,
                    CoquetteD10: 5689
                }, {
                    period: '2011 Q1',
                    CarbonRS: 6810,
                    CoquetteD10: 1914,
                    Zentorno: 2293
                }, {
                    period: '2011 Q2',
                    CarbonRS: 5670,
                    Zentorno: 4293,
                    CoquetteD10: 1881
                }, {
                    period: '2011 Q3',
                    CoquetteD10: 4820,
                    Zentorno: 3795,
                    CarbonRS: 1588
                }, {
                    period: '2011 Q4',
                    CoquetteD10: 15073,
                    CarbonRS: 5967,
                    Zentorno: 5175
                }, {
                    period: '2012 Q1',
                    Zentorno: 10687,
                    CoquetteD1O: 4460,
                    CarbonRS: 2028
                }, {
                    period: '2012 Q2',
                    CarbonRS: 8432,
                    Zentorno: 5713,
                    CoquetteD10: 1791
                }],
                xkey: 'period',
                ykeys: ['Zentorno', 'CarbonRS', 'CoquetteD10'],
                labels: ['Zentorno', 'CarbonRS', 'CoquetteD10'],
                pointSize: 2,
                hideHover: 'auto',
				  pointFillColors:['#ffffff'],
				  pointStrokeColors: ['black'],
				  lineColors:['#A6A6A6','#414e63'],
                resize: true
            });

            /* MORRIS LINE CHART
			----------------------------------------*/
            Morris.Line({
                element: 'morris-line-chart',
                data: [
					  { y: '2014', a: 5000, b: 90000},
					  { y: '2015', a: 9000,  b: 185000},
					  { y: '2016', a: 13000,  b: 130000},
					  { y: '2017', a: 11000,  b: 160000},
					  { y: '2018', a: 54000,  b: 65000},
					  { y: '2019', a: 9100,  b: 70000},
					  { y: '2020', a: 1080, b: 12500},
					  { y: '2021', a: 10055, b: 17005},
					  { y: '2022', a: 85000, b: 85000},
					  { y: '2023', a: 14005, b: 15005},
					  { y: '2024', a: 16200, b: 195800}
				],
            
				 
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Total Compras', 'Total Ventas'],
      fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      pointFillColors:['#ffffff'],
      pointStrokeColors: ['black'],
      lineColors:['gray','#414e63']
	  
            });
           
        
            $('.bar-chart').cssCharts({type:"bar"});
            $('.donut-chart').cssCharts({type:"donut"}).trigger('show-donut-chart');
            $('.line-chart').cssCharts({type:"line"});

            $('.pie-thychart').cssCharts({type:"pie"});
       
	 
        },

        initialization: function () {
            mainApp.initFunction();

        }

    }
    // Initializing ///

    $(document).ready(function () {
		$(".dropdown-button").dropdown();
		$("#sideNav").click(function(){
			if($(this).hasClass('closed')){
				$('.navbar-side').animate({left: '0px'});
				$(this).removeClass('closed');
				$('#page-wrapper').animate({'margin-left' : '260px'});
				
			}
			else{
			    $(this).addClass('closed');
				$('.navbar-side').animate({left: '-260px'});
				$('#page-wrapper').animate({'margin-left' : '0px'}); 
			}
		});
		
        mainApp.initFunction(); 
    });

	$(".dropdown-button").dropdown();
	
}(jQuery));
