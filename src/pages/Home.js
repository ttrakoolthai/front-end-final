import React from "react";

export default function Home() {
    return (
        <section>
            <h1>Lotka–Volterra Predator–Prey Dashboard</h1>

            <p className="mt-3">
                This project analyzes the historic interaction between the
                snowshoe hare and the Canada lynx using real Hudson Bay Company
                data.
            </p>

            <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">
                    Imported historic dataset (1845–1935)
                </li>
                <li className="list-group-item">React Router navigation</li>
                <li className="list-group-item">Interactive dashboard pages</li>
                <li className="list-group-item">
                    Charts and ecological analysis (coming soon)
                </li>
            </ul>

            <p className="mt-3">
                Use the navigation bar to begin exploring the data.
            </p>
        </section>
    );
}
