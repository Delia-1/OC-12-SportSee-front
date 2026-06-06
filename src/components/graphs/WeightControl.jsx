import { getActivity, getActivityByApi } from "../../mockedApi";
import { useFetchData } from "../../utils/useFetchData";
import copy from "../../utils/copy.json";
import { WeightControlModel } from "../../models/weightControlModel";
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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
  const {
    data: activity,
    loading,
    error,
  } = useFetchData(userId, isMockedApi, getActivity, getActivityByApi);

  if (loading && !activity) return <p>{copy.loading}</p>;
  if (error) return <p>{copy.noData}</p>;

  const model = new WeightControlModel(activity);
  const chartData = model.getChartData();

  const customTooltip = ({ payload, active }) => {
    if (!active || !payload?.length) {
      return null;
    }
    const [weight, calories] = payload;

    return (
      <div className="custom-tooltip-activity">
        <p>
          {weight.value}
          {copy.unitKg}
        </p>
        <p>
          {calories.value}
          {copy.unitKcal}
        </p>
      </div>
    );
  };

  const customHeader = () => {
    return (
      <div className="wrapper">
        <h3 className="title">{copy.dailyActivity}</h3>
        <div className="legend">
          <div className="legend__infos">
            <div className="legend__black-dot"></div>
            <p className="legend__text">
              {copy.weight} ({copy.unitKg})
            </p>
          </div>
          <div className="legend__infos">
            <div className="legend__red-dot"></div>
            <p className="legend__text">
              {copy.burntCalories} ({copy.unitKcal})
            </p>
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
            domain={model.getXAxisdomain()}
            ticks={model.getXAxisTicks()}
            tickLine={false}
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
            axisLine={{ stroke: "#9B9EAC" }}
            padding={{ left: 10, right: 10 }}
            tickMargin={15}
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            domain={model.getWeightAxisDomain()}
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
            domain={model.getCaloriesAxisDomain()}
            hide
          />

          <Tooltip
            content={customTooltip}
            offset={{ x: 25, y: -40 }}
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
