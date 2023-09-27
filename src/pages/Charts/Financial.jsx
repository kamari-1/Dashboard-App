import React from "react";
import {
  ChartComponent,
  Crosshair,
  DateTime,
  HiloSeries,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  Zoom,
} from "@syncfusion/ej2-react-charts/src";
import { ChartsHeader } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
  financialChartData,
} from "../../data/dummy";

// const date1 = new Date("2017, 1, 1");

// const filterValue = (value) => {
//   if (value.x >= date1) {
//     return value.x, value.high, value.low;
//   }
// };

// const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode, currentColor } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Financial" title="AAPLE Historical" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          height="420px"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{ background: "white" }}
        >
          <Inject services={[HiloSeries, Crosshair, Tooltip, DateTime, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={financialChartData}
              xName="x"
              yName="low"
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"
              fill={currentColor}
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
