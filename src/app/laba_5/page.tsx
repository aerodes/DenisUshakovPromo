"use client";

import React from "react";

const styles = {
  root: {
    maxWidth: 800,
    margin: "40px auto",
    padding: 32,
    background: "#fafbfc",
    border: "1px solid #e2e4e8",
    borderRadius: 12,
    fontFamily: "Segoe UI, Arial, sans-serif",
    color: "#222",
    boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
  },
  h1: {
    fontSize: 32,
    marginBottom: 16,
    fontWeight: 700
  },
  h2: {
    fontSize: 22,
    margin: "38px 0 10px 0"
  },
  ol: {
    paddingLeft: 22,
    fontSize: 18,
    lineHeight: 1.6
  },
  li: {
    padding: "12px 0",
    borderBottom: "1px dotted #dae0e8"
  },
  answer: {
    background: "#f1f9fd",
    margin: "6px 0 2px 0",
    padding: "6px 14px",
    borderRadius: 6,
    fontWeight: 500,
    color: "#1864ab",
    display: "inline-block"
  },
  note: {
    fontSize: 15,
    color: "#666",
    marginTop: 18
  }
};

function log10(val: number) {
  return Math.log(val) / Math.LN10;
}

const WirelessLabAll = () => {
  // Задание 1
  const freq1 = 2442; // МГц
  const dist1 = 0.1; // км (100м)
  const lbf1 = 32.45 + 20 * log10(dist1) + 20 * log10(freq1);

  // Задание 2
  const freq2 = 5320;
  const dist2 = 0.2;
  const lbf2 = 32.45 + 20 * log10(dist2) + 20 * log10(freq2);

  // Задание 3
  // Формула: R = 17.32 * sqrt(S1*S2 / (F*D))
  const D3 = 15; //км
  const F3 = 2.437; //ГГц
  const S1_3 = 7; //до препятствия
  const S2_3 = D3 - S1_3;
  const R3 = 17.32 * Math.sqrt((S1_3 * S2_3) / (F3 * D3));

  // Задание 4
  // Hант = 13.86 * sqrt(D / F) (для 80% зоны Френеля)
  const D4 = 4; //км
  const F4 = 5.48; //ГГц
  const H4 = 13.86 * Math.sqrt(D4 / F4);

  // Задание 5
  // Прямая: 20 (dBm) - Lbf >= -68 (dBm) => Lbf <= 88
  // Формула: log10(D) = (Lbf - 32.45 - 20*log10(F))/20
  const Pt5 = 20; // dBm
  const F5 = 2412; // МГц, Wi-Fi 2.4 ГГц
  const S_300 = -68;
  const S_1 = -88;

  const LbfMax_300 = Pt5 - S_300; //88
  const logD_300 = (LbfMax_300 - 32.45 - 20 * log10(F5)) / 20;
  const D5_300 = Math.pow(10, logD_300);

  const LbfMax_1 = Pt5 - S_1; //108
  const logD_1 = (LbfMax_1 - 32.45 - 20 * log10(F5)) / 20;
  const D5_1 = Math.pow(10, logD_1);

  // Задание 6
  const Pt6 = 22; // dBm
  const S6 = -68; // dBm
  const F6 = 5480; // МГц
  const LbfMax6 = Pt6 - S6; //90
  const logD6 = (LbfMax6 - 32.45 - 20 * log10(F6)) / 20;
  const D6 = Math.pow(10, logD6);

  // Задание 7
  // DAP-3662 и DWA-182, 7км, 2422 МГц, мин. скорость (чувств. -88), усил. 8+2 dBi
  const D7 = 7;
  const F7 = 2422;
  const Pt7_t = 20; // dBm, DAP-3662
  const Pt7_c = 19; // dBm, DWA-182
  const Gt7 = 8; // dBi, точка доступа
  const Gc7 = 2; // dBi, клиент
  const Sens7 = -88; // dBm

  const Lbf7 = 32.45 + 20 * log10(D7) + 20 * log10(F7);

  // DAP-3662 → DWA-182:
  const Pr7_1 = Pt7_t + Gt7 + Gc7 - Lbf7;

  // DWA-182 → DAP-3662:
  const Pr7_2 = Pt7_c + Gc7 + Gt7 - Lbf7;

  // Анализ для задания 7
  const conclusion7 =
    Pr7_1 >= Sens7 && Pr7_2 >= Sens7
      ? "Связь на минимальной скорости возможна, но вплотную к порогу чувствительности. Рекомендуется использовать дополнительные антенны с большим усилением для запаса по мощности сигнала."
      : "Энергетический потенциал линии недостаточен для стабильной работы на 7 км без усиления антенн или замены оборудования.";

  return (
    <div style={styles.root}>
      <h1 style={styles.h1}>Решение лабораторной работы №5</h1>
      <ol style={styles.ol}>
        <li style={styles.li}>
          <b>
            Потери в свободном пространстве для 802.11n (7 канал, 2442 МГц, 100 м):
          </b>
          <div style={styles.answer}>
            {lbf1.toFixed(2)} дБ
          </div>
        </li>
        <li style={styles.li}>
          <b>
            Потери в свободном пространстве для 802.11n–802.11ac (64 канал, 5320 МГц, 200 м):
          </b>
          <div style={styles.answer}>
            {lbf2.toFixed(2)} дБ
          </div>
        </li>
        <li style={styles.li}>
          <b>
            Радиус первой зоны Френеля (расстояние 15 км, S1 = 7 км, частота 2,437 ГГц):
          </b>
          <div style={styles.answer}>
            {R3.toFixed(2)} м
          </div>
        </li>
        <li style={styles.li}>
          <b>
            Минимальная высота установки антенн (80% зоны; 4 км; 5,48 ГГц):
          </b>
          <div style={styles.answer}>
            {H4.toFixed(2)} м
          </div>
        </li>
        <li style={styles.li}>
          <b>
            Макс. расстояние для DAP-2310 и DWA-160 при 300 Мбит/с:
          </b>
          <div style={styles.answer}>
            {D5_300.toFixed(2)} км
          </div>
          <b>
            при 1 Мбит/с:
          </b>
          <div style={styles.answer}>
            {D5_1.toFixed(2)} км
          </div>
        </li>
        <li style={styles.li}>
          <b>
            Макс. расстояние для DAP-2660 и DWA-182 на максимальной скорости (5 ГГц):
          </b>
          <div style={styles.answer}>
            {D6.toFixed(2)} км
          </div>
        </li>
        <li style={styles.li}>
          <b>
            Оценка работы канала 7 км (2422 МГц, min скорость) между DAP-3662 и DWA-182:
          </b>
          <div>
            Потери в свободном пространстве:{" "}
            <span style={styles.answer}>{Lbf7.toFixed(2)} дБ</span>
          </div>
          <div>
            DAP-3662 → DWA-182: уровень сигнала <span style={styles.answer}>{Pr7_1.toFixed(2)} дБм</span>
          </div>
          <div>
            DWA-182 → DAP-3662: уровень сигнала <span style={styles.answer}>{Pr7_2.toFixed(2)} дБм</span>
          </div>
          <div style={{paddingTop:2}}>
            <b>Вывод:</b> {conclusion7}
          </div>
        </li>
      </ol>
      <div style={styles.note}>
        Формулы и подходы взяты из методических материалов лабораторной работы. Уточнение параметров некоторых устройств поможет повысить точность расчетов.
      </div>
    </div>
  );
};

export default WirelessLabAll;