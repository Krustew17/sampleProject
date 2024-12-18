import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

const PieChartComponent = ({ data, title, width, height }) => {
    const outerRadius = 130 ? height > 200 : 50;
    const COLORS = ["#bd97f0", "#906bc2", "#7b50b5", "#9897f0", "#6f6bc2"];

    return (
        <div className="w-full md:w-[48%] bg-stone-800 p-6 rounded-lg shadow-lg">
            <h3 className="md:text-xl font-semibold text-white mb-4">
                {title}
            </h3>
            <ResponsiveContainer width={width} height={height + 50}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="viewCount"
                        nameKey="page"
                        cx="50%"
                        cy="50%"
                        outerRadius={outerRadius}
                        fill="#8884d8"
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PieChartComponent;
