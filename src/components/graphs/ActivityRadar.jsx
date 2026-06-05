import { getPerformance, getPerformanceByApi } from "../../mockedApi";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  PolarRadiusAxis,
} from "recharts";
import copy from "../../utils/copy.json";
import { useFetchData } from "../../utils/useFetchData";

const ActivityRadar = ({ userId, isMockedApi }) => {
  const {
    data: performance,
    loading,
    error,
  } = useFetchData(userId, isMockedApi, getPerformance, getPerformanceByApi);

  if (loading && !performance) return <p>{copy.loading}</p>;
  if (error) return <p>{copy.noData}</p>;

  const KIND_MAP = {
    1: copy.cardio,
    2: copy.energy,
    3: copy.endurance,
    4: copy.strength,
    5: copy.speed,
    6: copy.intensity,
  };

  const performanceFormated = performance.data.map((dataSet) => ({
    ...dataSet,
    kind: KIND_MAP[dataSet.kind],
  }));

  return (
    <div>
      <RadarChart
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "5px",
          maxHeight: "80vh",
          aspectRatio: 1,
          backgroundColor: "#282D30",
          color: "#ffffff",
          padding: "0",
        }}
        responsive
        outerRadius="75%"
        data={performanceFormated.reverse()}
        margin={{
          top: 20,
          left: 20,
        }}
        padding={{
          left: 30,
        }}
      >
        <PolarGrid radialLines={false} stroke="#ffffff" />
        <PolarAngleAxis
          dataKey="kind"
          tick={{ fill: "#FFFFFF", fontSize: 12, fontFamily: "roboto" }}
        />
        <PolarRadiusAxis tick={false} axisLine={false} tickCount={6} />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="none"
          fill="#FF0101B2"
          dot={false}
          activeDot={false}
        />
      </RadarChart>
    </div>
  );
};

export default ActivityRadar;
