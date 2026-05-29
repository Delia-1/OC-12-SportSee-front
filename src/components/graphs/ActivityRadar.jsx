import { useEffect, useState } from "react";
import { getPerformance, getPerformanceByApi } from "../../mockedApi";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  PolarRadiusAxis,
} from "recharts";

const ActivityRadar = ({ userId, isMockedApi }) => {
  const [performance, setPerformance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerformance = async () => {
      const performanceData = isMockedApi
        ? await getPerformance(userId)
        : await getPerformanceByApi(userId);

      setPerformance(performanceData);
      setLoading(false);
    };
    fetchPerformance();
  }, [userId, isMockedApi]);

  // Faire un util pour gerer les copy/ trads

  if (loading) return <p>Chargement...</p>;
  if (!performance) return <p>Aucune donnée d'activité</p>;

  const KIND_MAP = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
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
        }}
        responsive
        outerRadius="80%"
        data={performanceFormated.reverse()}
        margin={{
          top: 20,
          left: 20,
          right: 20,
          bottom: 20,
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
