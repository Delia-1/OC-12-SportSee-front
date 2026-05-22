import { useEffect, useState } from "react";
import { getActivity, getActivityByApi } from "../../mockedApi";
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
} from "recharts";

const CustomCursor = ({ x, y, width, height }) => {
  return (
    <rect
      x={x + 8}
      y={y}
      width={width - 20}
      height={height}
      fill="rgba(196, 196, 196, 0.5)"
    />
  );
};

const WeightControl = ({ userId, isMockedApi }) => {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      const activityData = isMockedApi
        ? await getActivity(userId)
        : await getActivityByApi(userId);

      setActivity(activityData);
      setLoading(false);
    };
    fetchActivity();
  }, [userId, isMockedApi]);

  if (loading) return <p>Chargement...</p>;
  if (!activity) return <p>Aucune donnée d'activité</p>;
  const sessions = activity.sessions;

  const chartData = sessions.map((session, index) => ({
    ...session,
    index: index + 1,
  }));

  const customTooltip = ({ payload, active }) => {
    if (active && payload && payload.length) {
      const kilogramData = payload.find((item) => item.dataKey === "kilogram");
      const caloriesData = payload.find((item) => item.dataKey === "calories");

      return (
        <div className="custom-tooltip">
          <p>{kilogramData?.value}kg</p>
          <p>{caloriesData?.value}Kcal</p>
        </div>
      );
    }

    return null;
  };

  const customHeader = () => {
    return (
      <div className="wrapper">
        <h3 className="title">Activité quotidienne</h3>
        <div className="legend">
          <div className="legend__infos">
            <div className="legend__black-dot"></div>
            <p className="legend__text">Poids (kg)</p>
          </div>
          <div className="legend__infos">
            <div className="legend__red-dot"></div>
            <p className="legend__text">Calories brulées (kCal)</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="weight-chart">
      {customHeader()}
      <ResponsiveContainer height={210} width="100%">
        <BarChart
          // accessibilityLayer
          barCategoryGap="10%"
          barGap={8}
          data={chartData}
          layout="horizontal"
          margin={{
            bottom: 0,
            left: 45,
            right: 30,
            top: 22,
          }}
          syncMethod="index"
          throttleDelay="raf"
          throttledEvents={[
            "mousemove",
            "touchmove",
            "pointermove",
            "scroll",
            "wheel",
          ]}
        >
          <CartesianGrid
            yAxisId="kilogram"
            strokeDasharray="3 3"
            vertical={false}
          />
          <XAxis
            dataKey="index"
            type="number"
            domain={[1, chartData.length]}
            ticks={chartData.map((item) => item.index)}
            // tickFormatter={(_, index) => index + 1}
            tickLine={false}
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
            axisLine={{ stroke: "#9B9EAC" }}
            padding={{ left: 10, right: 10 }}
            tickMargin={15}
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            domain={["dataMin - 1", "dataMax + 1"]}
            tickCount={3}
            orientation="right"
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
            axisLine={false}
            tickLine={false}
            tickMargin={42}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            domain={[0, "dataMax"]}
            hide
          />

          <Tooltip
            content={customTooltip}
            offset={{ x: 25, y: -40 }}
            wrapperStyle={{
              width: 39,
              backgroundColor: "#E60000",
            }}
            cursor={<CustomCursor />}
          />
          <Bar
            yAxisId="kilogram"
            barSize={7}
            dataKey="kilogram"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeightControl;
