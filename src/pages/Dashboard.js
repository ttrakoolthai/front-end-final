import React from "react";
import { Scatter } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js";
import lynxHareData from "../data/lynx_hare.json";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title);

export default function Dashboard() {
    // Transform JSON into (hare, lynx) points
    const points = lynxHareData.map((d) => ({
        x: d.hare,
        y: d.lynx,
    }));

    const data = {
        datasets: [
            {
                label: "Lynx vs Hare (Phase Plot)",
                data: points,
                pointRadius: 3,
                pointBackgroundColor: "rgba(37, 99, 235, 0.8)", // blue
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Predator–Prey Phase Plot: Lynx vs Hare",
            },
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (ctx) =>
                        `Hare: ${ctx.parsed.x.toFixed(
                            2
                        )}, Lynx: ${ctx.parsed.y.toFixed(2)}`,
                },
            },
        },
        scales: {
            x: {
                type: "linear",
                title: {
                    display: true,
                    text: "Hare index",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Lynx index",
                },
            },
        },
    };

    return (
        <section>
            <h1>Phase Plot: Lynx vs Hare</h1>
            <p className="mt-2">
                Each point represents a year: hare index on the x-axis, lynx
                index on the y-axis. The overall shape shows the predator–prey
                cycle.
            </p>
            <div style={{ maxWidth: "700px", marginTop: "1.5rem" }}>
                <Scatter data={data} options={options} />
            </div>
        </section>
    );
}
