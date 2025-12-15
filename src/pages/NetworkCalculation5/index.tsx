"use client";

import { useState } from "react";

type SubnetInput = {
    name: string;
    hosts: number;
};

type SubnetResult = {
    name: string;
    network: string;
    cidr: number;
    mask: string;
    gateway: string;
    minHost: string;
    maxHost: string;
    dhcpRange: string;
    broadcast: string;
    total: number;
    free: number;
};

export default function SubnetPlanner() {
    const [base, setBase] = useState("192.168.10.0/24");
    const [input, setInput] = useState(
        "Office,50\nWiFi,20\nCameras,10"
    );
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<SubnetResult[]>([]);

    function ipToInt(ip: string): number {
        return ip.split(".").reduce((acc, o) => (acc << 8) + Number(o), 0);
    }

    function intToIp(n: number): string {
        return [
            (n >>> 24) & 255,
            (n >>> 16) & 255,
            (n >>> 8) & 255,
            n & 255,
        ].join(".");
    }

    function cidrToMask(cidr: number): string {
        const mask = cidr === 0 ? 0 : (~0 << (32 - cidr)) >>> 0;
        return intToIp(mask);
    }

    function requiredCidr(hosts: number): number {
        const needed = hosts + 2; // network + broadcast
        const bits = Math.ceil(Math.log2(needed));
        return 32 - bits;
    }

    function validateIp(ip: string): boolean {
        const parts = ip.split(".");
        return (
            parts.length === 4 &&
            parts.every((p) => {
                const n = Number(p);
                return n >= 0 && n <= 255 && p !== "";
            })
        );
    }

    const calculate = () => {
        try {
            setError(null);
            setResult([]);

            const [baseIp, baseCidrStr] = base.split("/");
            const baseCidr = Number(baseCidrStr);

            if (!validateIp(baseIp) || isNaN(baseCidr)) {
                throw new Error("Некорректный исходный адрес");
            }

            const baseNetwork = ipToInt(baseIp);
            const baseSize = 2 ** (32 - baseCidr);
            const baseEnd = baseNetwork + baseSize - 1;

            const subnets: SubnetInput[] = input
                .split("\n")
                .map((line) => {
                    const [name, hosts] = line.split(",");
                    return {
                        name: name?.trim() || "Subnet",
                        hosts: Number(hosts),
                    };
                })
                .sort((a, b) => b.hosts - a.hosts);

            if (subnets.some((s) => s.hosts <= 0 || isNaN(s.hosts))) {
                throw new Error("Ошибка в описании подсетей");
            }

            let current = baseNetwork;
            const calculated: SubnetResult[] = [];

            for (const s of subnets) {
                const cidr = requiredCidr(s.hosts);
                if (cidr < baseCidr) {
                    throw new Error(
                        `Подсеть "${s.name}" превышает размер исходной сети`
                    );
                }

                const block = 2 ** (32 - cidr);
                const network = current;
                const broadcast = network + block - 1;

                if (broadcast > baseEnd) {
                    throw new Error("Недостаточно адресов для разбиения");
                }

                const gateway = network + 1;
                const minHost = gateway + 1;
                const maxHost = broadcast - 1;

                calculated.push({
                    name: s.name,
                    network: intToIp(network),
                    cidr,
                    mask: cidrToMask(cidr),
                    gateway: intToIp(gateway),
                    minHost: intToIp(minHost),
                    maxHost: intToIp(maxHost),
                    dhcpRange: `${intToIp(minHost)} – ${intToIp(maxHost)}`,
                    broadcast: intToIp(broadcast),
                    total: block,
                    free: block - s.hosts - 2,
                });

                current += block;
            }

            setResult(calculated);
        } catch (e: any) {
            setError(e.message);
        }
    };

    return (
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
            <h1>Планирование подсетей IPv4</h1>

            <section>
                <label>Исходная сеть</label>
                <input
                    placeholder="x.x.x.x/x"
                    value={base}
                    onChange={(e) => setBase(e.target.value)}
                    style={{ width: "100%" }}
                />
            </section>

            <section style={{ marginTop: 16 }}>
                <label>Подсети (имя, хосты)</label>
                <textarea
                    placeholder="Имя подсети, кол-во хостов"
                    rows={5}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{ width: "100%", fontFamily: "monospace" }}
                    // onKeyDown={(e) => }
                />
            </section>

            <button style={{ marginTop: 16 }} onClick={calculate}>
                Рассчитать
            </button>

            {error && (
                <div style={{ color: "red", marginTop: 16 }}>
                    Ошибка: {error}
                </div>
            )}

            {result.length > 0 && (
                <table
                    style={{
                        marginTop: 24,
                        width: "100%",
                        borderCollapse: "collapse",
                    }}
                >
                    <thead>
                        <tr>
                            <th>Имя</th>
                            <th>Сеть</th>
                            <th>Маска</th>
                            <th>Gateway</th>
                            <th>DHCP</th>
                            <th>Broadcast</th>
                            <th>Свободно</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((s, i) => (
                            <tr key={i}>
                                <td>{s.name}</td>
                                <td>
                                    {s.network}/{s.cidr}
                                </td>
                                <td>{s.mask}</td>
                                <td>{s.gateway}</td>
                                <td>{s.dhcpRange}</td>
                                <td>{s.broadcast}</td>
                                <td>{s.free}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
