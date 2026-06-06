import copy from "../../utils/copy.json";
import { DailyScoreModel } from "../../models/dailyScoreModel";
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";

const DailyScore = ({ todayScore }) => {
  const model = new DailyScoreModel(todayScore);
  const data = model.getTodayData();

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: 1,
        backgroundColor: "#FBFBFB",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "5px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "26px",
            fontFamily: "roboto",
            fontSize: "26px",
          }}
        >
          <span
            style={{
              fontFamily: "roboto",
              fontSize: "15px",
              fontWeight: "500",
              color: "#20253A",
            }}
          >
            {copy.score}
          </span>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius="60%"
              outerRadius="70%"
              cornerRadius="50%"
              paddingAngle={0.1}
              startAngle={80}
              endAngle={465}
            >
              <Cell fill="#FF0000" stroke="none" />
              <Cell fill="transparent" stroke="none" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "59%",
            height: "59%",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: "roboto",
              fontSize: "26px",
              fontWeight: "700",
            }}
          >
            {model.getScorePercentage()}%
          </span>

          <span
            style={{
              color: "#74798C",
              fontFamily: "roboto",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            {copy.ofYour}
            <br /> {copy.objective}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DailyScore;
