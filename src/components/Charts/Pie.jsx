import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PieSeries,
  Inject,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";

const Doughnut = ({ id, data, legendVisiblity, height }) => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
      id={id}
      height={height}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      legendSettings={{
        visible: legendVisiblity,
        background: currentMode === "Dark" ? "#33373E" : "#fff",
        textStyle: { color: currentMode === "Dark" ? "#fff" : "#33373E" },
      }}
      enableSmartLabels={true}
      enableAnimation={true}
      tooltip={{ enable: true }}
    >
      <Inject
        services={[
          AccumulationLegend,
          AccumulationDataLabel,
          AccumulationTooltip,
          PieSeries,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Sale"
          dataSource={data}
          xName="x"
          yName="y"
          startAngle={0}
          endAngle={360}
          radius="90%"
          innerRadius="40%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: {
              fontWeight: "600",
              color: "#fff",
            },
          }}
        ></AccumulationSeriesDirective>
        <Inject />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Doughnut;
