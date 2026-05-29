import { useEffect, useState } from "react";
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
      height={263}
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
  const [averageSessions, setAverageSessions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAverageSessions = async () => {
      const averageSessionsData = isMockedApi
        ? await getAverageSessions(userId)
        : await getAverageSessionsByApi(userId);

      setAverageSessions(averageSessionsData);
      setLoading(false);
    };
    fetchAverageSessions();
  }, [userId, isMockedApi]);

  if (loading) return <p>Chargement...</p>;
  if (!averageSessions) return <p>Aucune donnée d'activité</p>;

  // Todo: replace the first and last hardcoded values with data from previous week and projection
  const chartData = [
    {
      day: 0,
      sessionLength: averageSessions.sessions[0].sessionLength,
      hidden: true,
    },
    ...averageSessions.sessions,
    {
      day: 8,
      sessionLength:
        averageSessions.sessions[averageSessions.sessions.length - 1]
          .sessionLength,
      hidden: true,
    },
  ];

  return (
    // <div className="graph-card">
    <LineChart
      style={{
        width: "100%",
        maxWidth: "258px",
        maxHeight: "263px",
        backgroundColor: "#FF0000",
        borderRadius: "5px",
      }}
      responsive
      data={chartData}
      margin={{
        top: 50,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <Text
        x={30}
        y={30}
        fill="#FFFFFF80"
        fontSize={15}
        fontWeight={500}
        fontFamily="roboto"
      >
        Durée moyenne des
      </Text>
      <Text
        x={30}
        y={50}
        fill="#FFFFFF80"
        fontSize={15}
        fontWeight={500}
        fontFamily="roboto"
      >
        sessions
      </Text>
      {/* <CarteanGrid strokeDasharray="3 3" /> */}
      <XAxis
        dataKey="day"
        axisLine={false}
        tickLine={false}
        tick={{ fill: "#ffffff80", fontSize: 14, fontFamily: "Roboto" }}
        ticks={[1, 2, 3, 4, 5, 6, 7]}
        tickFormatter={(value) => {
          const days = ["L", "M", "M", "J", "V", "S", "D"];
          return days[value - 1];
        }}
        tickMargin={15}
        padding={{ left: -10, right: -10 }}
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
    // </div>
  );
};

export default AverageSession;
