import { getPerformance, getPerformanceByApi } from "../../mockedApi";
import copy from "../../utils/copy.json";
import { useFetchData } from "../../utils/useFetchData";
import { ActivityRadarModel } from "../../models/activityRadarModel";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  PolarRadiusAxis,
} from "recharts";

const ActivityRadar = ({ userId, isMockedApi }) => {
  const {
    data: performance,
    loading,
    error,
  } = useFetchData(userId, isMockedApi, getPerformance, getPerformanceByApi);

  if (loading && !performance) return <p>{copy.loading}</p>;
  if (error) return <p>{copy.noData}</p>;

  const model = new ActivityRadarModel(performance);
  const chartData = model.getChartData();

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
        data={chartData}
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
