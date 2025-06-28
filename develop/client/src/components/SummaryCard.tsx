import React from "react";

interface Props {
  title: string;
  value: string | number;
  icon?: string;
}

const SummaryCard: React.FC<Props> = ({ title, value, icon }) => {
  return (
     <div className="rounded-xl bg-white/30 backdrop-blur-sm p-6 shadow-lg border border-gray-300">
      <div className="text-4xl mb-2" style={{ color: "#facc15" }}>{icon}</div> {/* amarillo alegre */}
      <div className="text-sm text-gray-700 mt-2">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
};

export default SummaryCard;