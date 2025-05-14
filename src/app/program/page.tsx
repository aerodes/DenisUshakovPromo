"use client";

import React, { useEffect, useState } from "react";

export default function LinkBudgetCalculator() {
    useEffect(() => {
        document.title = "Программа";
        const link: HTMLLinkElement =
            document.querySelector("link[rel~='icon']") || document.createElement("link");
        link.rel = "icon";
        link.href = "/favicons/book.ico";
        document.head.appendChild(link);
    }, []);

    const [distance, setDistance] = useState(1); // км
    const [frequency, setFrequency] = useState(2400); // МГц
    const [powerTx, setPowerTx] = useState(20); // dBm
    const [gainTx, setGainTx] = useState(10); // dBi
    const [gainRx, setGainRx] = useState(2); // dBi
    const [sensitivity, setSensitivity] = useState(-88); // dBm

    // Потери в свободном пространстве (Lbf)
    const Lbf = 32.45 + 20 * Math.log10(Number(distance)) + 20 * Math.log10(Number(frequency));
    // Энергетический потенциал (Pr)
    const Pr = Number(powerTx) + Number(gainTx) + Number(gainRx) - Lbf;

    return (
        <div
            style={{
                maxWidth: 470,
                margin: "42px auto",
                background: "#fafbfc",
                border: "1px solid #e3e7ea",
                borderRadius: 12,
                padding: 28,
                fontFamily: "Segoe UI, Arial, sans-serif",
            }}
        >
            <h2 style={{ textAlign: "center", fontWeight: 700 }}>
                Калькулятор линии беспроводной связи
            </h2>
            <form
                style={{
                    display: "grid",
                    gap: 14,
                    fontSize: 16,
                }}
                onSubmit={(e) => e.preventDefault()}
            >
                <label>
                    Расстояние, км: <br />
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={distance}
                        onChange={(e) => setDistance(Number(e.target.value))}
                        style={{ width: 80 }}
                    />
                </label>
                <label>
                    Частота, МГц: <br />
                    <input
                        type="number"
                        step="1"
                        min="0"
                        value={frequency}
                        onChange={(e) => setFrequency(Number(e.target.value))}
                        style={{ width: 80 }}
                    />
                </label>
                <label>
                    Мощность передатчика, dBm: <br />
                    <input
                        type="number"
                        value={powerTx}
                        onChange={(e) => setPowerTx(Number(e.target.value))}
                        style={{ width: 80 }}
                    />
                </label>
                <label>
                    Усиление антенны передатчика, dBi:
                    <br />
                    <input
                        type="number"
                        value={gainTx}
                        onChange={(e) => setGainTx(Number(e.target.value))}
                        style={{ width: 80 }}
                    />
                </label>
                <label>
                    Усиление антенны приемника, dBi:
                    <br />
                    <input
                        type="number"
                        value={gainRx}
                        onChange={(e) => setGainRx(Number(e.target.value))}
                        style={{ width: 80 }}
                    />
                </label>
                <label>
                    Чувствительность приемника, dBm:
                    <br />
                    <input
                        type="number"
                        value={sensitivity}
                        onChange={(e) => setSensitivity(Number(e.target.value))}
                        style={{ width: 80 }}
                    />
                </label>
            </form>
            <div
                style={{
                    padding: "18px 0 3px 0",
                    textAlign: "left",
                    marginTop: 14,
                    borderTop: "1px solid #e3e7ea",
                }}
            >
                <p>
                    <b>Потери в свободном пространстве:</b> {Lbf.toFixed(2)} дБ
                </p>
                <p>
                    <b>Ожидаемый уровень сигнала на входе приемника:</b> {Pr.toFixed(2)} dBm
                </p>
                <p>
                    <b>Чувствительность приемника:</b> {sensitivity} dBm
                </p>
                <div
                    style={{
                        background: Pr >= sensitivity ? "#e6fae2" : "#fdeaea",
                        color: Pr >= sensitivity ? "#176a12" : "#a12222",
                        margin: "8px 0",
                        padding: "9px 12px",
                        fontWeight: "bold",
                        borderRadius: 7,
                    }}
                >
                    {Pr >= sensitivity
                        ? "Связь возможна (энергетический потенциал достаточен)"
                        : "Связь невозможна — недостаточный энергетический потенциал"}
                </div>
            </div>
        </div>
    );
}
