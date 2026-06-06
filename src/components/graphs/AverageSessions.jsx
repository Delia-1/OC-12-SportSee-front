import { useFetchData } from "../../utils/useFetchData";
import copy from "../../utils/copy.json";
import { AverageSessionsModel } from "../../models/averageSessionModel";
import { getAverageSessions, getAverageSessionsByApi } from "../../mockedApi";
import { LineChart, XAxis, YAxis, Tooltip, Text, Line } from "recharts";

const CustomDot = (props) => {
  const { cx, cy } = props;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={4}
      fill="white"
      stroke="#FFFFFF"
      strokeWidth={10}
      strokeOpacity={0.3}
    />
  );
};

const CustomCursor = ({ points, x, y, width }) => {
  if (!points?.length) return null;

  const cursorX = points[0].x;

  return (
    <rect
      x={cursorX}
      y={y ?? 0}
      width={(x ?? 0) + (width ?? 0) - cursorX}
      height={500}
      fill="rgba(0, 0, 0, 0.1)"
    />
  );
};

const customTooltip = ({ payload, active }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{payload[0].value}min</p>
      </div>
    );
  }
};

const AverageSession = ({ userId, isMockedApi }) => {
  const {
    data: averageSessions,
    loading,
    error,
  } = useFetchData(
    userId,
    isMockedApi,
    getAverageSessions,
    getAverageSessionsByApi,
  );

  if (loading && !averageSessions) return <p>{copy.loading}</p>;
  if (error) return <p>{copy.noData}</p>;

  const model = new AverageSessionsModel(averageSessions);
  const chartData = model.getChartData();

  return (
    <LineChart
      style={{
        width: "100%",
        backgroundColor: "#FF0000",
        borderRadius: "5px",
      }}
      responsive
      data={chartData}
      margin={{
        top: 70,
        right: 0,
        left: 0,
        bottom: 52,
      }}
    >
      <Text
        x={30}
        y={50}
        fill="#FFFFFF80"
        fontSize={15}
        fontWeight={500}
        fontFamily="roboto"
      >
        {copy.averageTimeOf}
      </Text>
      <Text
        x={30}
        y={70}
        fill="#FFFFFF80"
        fontSize={15}
        fontWeight={500}
        fontFamily="roboto"
      >
        {copy.sessions}
      </Text>
      <XAxis
        dataKey="day"
        axisLine={false}
        tickLine={false}
        tick={{ fill: "#ffffff80", fontSize: 14, fontFamily: "Roboto" }}
        tickMargin={40}
        padding={{ left: -10, right: -10 }}
        margin={{ bottom: 40 }}
      />
      <YAxis dataKey="sessionLength" width={20} hide={true} />

      <Tooltip
        content={customTooltip}
        cursor={<CustomCursor />}
        offset={{ x: 0, y: -40 }}
      />
      <Line
        type="natural"
        dataKey="sessionLength"
        stroke="#FFFFFF67"
        strokeWidth={3}
        dot={false}
        activeDot={CustomDot}
        animationEasing="ease"
      />
    </LineChart>
  );
};

export default AverageSession;
