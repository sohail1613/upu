import React from "react";
import ReactECharts from "echarts-for-react";
import { GaugeChart } from "echarts/charts";

const GaugeCalculator = ({value }) => {
  let option;
   option = {
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        center: ["50%", "85%"],
        radius: "90%",
        min: 0,
        max: 1,
        splitNumber: 5,
        axisLine: {
          lineStyle: {
            width: 6,
            color: [
              [0.33, "#FF6E76"],
              [0.66, "#FDDD60"],
              [1, "#7CFFB2"],
            ],
          },
        },
        pointer: {
          icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
          length: "12%",
          width: 20,
          offsetCenter: [0, "-60%"],
          itemStyle: {
            color: "inherit",
          },
        },
          axisTick: {
            length: 5,
            distance : 2,
            lineStyle: {
              color: "auto",
              width: 1,
            },
          },
          splitLine: {
            length: 0,
            lineStyle: {
              color: "auto",
              width: 2,
             
            },
          },
        axisLabel: {
          color: "#464646",
          fontSize: 20,
          distance: -20,
          rotate: "tangential",
          formatter: function (value) {
            if (value === 0.875) {
              return "A";
            } else if (value === 0.625) {
              return " B";
            }  else if (value === 0.125) {
              return " D";
            }
            return "";
          },
        },
        title: {
          offsetCenter: [0, "5%"],
          fontSize: 12,
        },
        detail: {
          fontSize: 20,
          offsetCenter: [0, "-0%"],
          valueAnimation: true,
          formatter: function (value) {
            return "%" + Math.round(value * 100)  ;
          },
          color: "inherit",
        },
        data: [
          {
            value: value,
            name: "",
          },
        ],
      },
    ],
  };
  return (
    <div id="main" 
    style={{width : '300px'}}
    className="flex flex-col items-center gap-1 !w-[700px] h-[120px] absolute -mt-10">
      <ReactECharts option={option} style={{ width: "100%", height: "100%" }}/>
    </div>
  );
};

export default GaugeCalculator;
