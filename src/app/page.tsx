"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Power,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  MapPin,
  Users,
} from "lucide-react";
import { powerData } from "./data"; // keep your existing data module

/* ----------------------- Types (no `any`) ----------------------- */

type FeederStatus = "online" | "offline" | "maintenance" | "alarm";

interface Feeder {
  id: string;
  name: string;
  band: string;
  status: FeederStatus;
  voltage: number;
  current: number;
  load: number;
  availabilityHours: number;
  lastOutage: string;
  totalOutages: number;
  customers: number;
  location: string;
  parent33kV: string;
  injection: string;
  transformer: string;
}

/* types to match your powerData structure (minimal used fields) */
interface Feeder11k {
  name: string;
  band?: string | null;
}
interface Transformer {
  name: string;
  feeders11kV: Feeder11k[];
}
interface Injection {
  name: string;
  transformers: Transformer[];
}
interface Feeder33k {
  name: string;
  injections: Injection[];
}
interface BusinessUnit {
  businessUnit: string;
  feeders33kV: Feeder33k[];
}

/* ----------------------- Utility: typed powerData ----------------------- */
/* If your ./data already exports typed data, the `as` is fine and keeps lint happy. */
const units: BusinessUnit[] = powerData as BusinessUnit[];

/* ----------------------- Component ----------------------- */

type Role = "admin" | "businessUnit" | null;

const ElectricityDashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [role, setRole] = useState<Role>(null);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [feeders, setFeeders] = useState<Feeder[]>([]);

  /* ---- Random feeder factory (deterministic-ish for UI demo) ---- */
  const generateRandomFeederData = (
    name: string,
    band: string | null,
    location: string,
    parent33kV: string,
    injection: string,
    transformer: string
  ): Feeder => {
    const statuses: FeederStatus[] = ["online", "offline", "maintenance", "alarm"];
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    return {
      id: `${name.toUpperCase()}-11KV`,
      name: `${name} 11kV Feeder`,
      band: band ?? "Unknown",
      status,
      voltage: status === "online" ? 10.5 + Math.random() * 1 : 0,
      current: status === "online" ? 150 + Math.random() * 300 : 0,
      load: status === "online" ? Math.random() * 100 : 0,
      availabilityHours: 20 + Math.random() * 4,
      lastOutage: `${Math.floor(Math.random() * 7)} days ago`,
      totalOutages: Math.floor(Math.random() * 20),
      customers: 500 + Math.floor(Math.random() * 3000),
      location,
      parent33kV,
      injection,
      transformer,
    };
  };

  /* ---- Extract feeders for a business unit ---- */
  const extractUnitFeeders = (unitName: string): Feeder[] => {
    const unit = units.find((u) => u.businessUnit === unitName);
    if (!unit) return [];

    const result: Feeder[] = [];

    unit.feeders33kV.forEach((f33) =>
      f33.injections.forEach((inj) =>
        inj.transformers.forEach((tx) =>
          tx.feeders11kV.forEach((f11) => {
            result.push(
              generateRandomFeederData(
                f11.name,
                f11.band ?? "Unknown",
                unitName,
                f33.name,
                inj.name,
                tx.name
              )
            );
          })
        )
      )
    );

    return result;
  };

  /* ---- Build full-feeders list across all units (pre-signup overview needs it) ---- */
  const allFeeders = useMemo(() => {
    const arr: Feeder[] = [];
    units.forEach((u) => {
      arr.push(...extractUnitFeeders(u.businessUnit));
    });
    return arr;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // only run once on mount — demo data is static-ish

  /* ---- Stats computed from feeders arrays ---- */
  const statsFrom = (list: Feeder[]) => {
    const total = list.length;
    const online = list.filter((f) => f.status === "online").length;
    const offline = list.filter((f) => f.status === "offline").length;
    const maintenance = list.filter((f) => f.status === "maintenance").length;
    const alarm = list.filter((f) => f.status === "alarm").length;
    const customers = list.reduce((s, f) => s + f.customers, 0);
    return { total, online, offline, maintenance, alarm, customers };
  };

  const globalStats = useMemo(() => statsFrom(allFeeders), [allFeeders]);

  /* ---- Clock update ---- */
  useEffect(() => {
    setCurrentTime(new Date());
    const t = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  /* ---- Feeder realtime-ish simulation for currently selected unit ---- */
  useEffect(() => {
    // If a unit is selected, use its feeders (initial snapshot). For the demo we regenerate
    // per selectedUnit to fill `feeders`. If no selectedUnit do nothing.
    if (!selectedUnit) {
      setFeeders([]);
      return;
    }
    setFeeders(extractUnitFeeders(selectedUnit));

    const interval = setInterval(() => {
      setFeeders((prev) =>
        prev.map((f) =>
          f.status === "online"
            ? {
                ...f,
                voltage: Math.max(10.5, Math.min(11.5, f.voltage + (Math.random() - 0.5) * 0.2)),
                current: Math.max(0, f.current + (Math.random() - 0.5) * 20),
                load: Math.max(0, Math.min(100, f.load + (Math.random() - 0.5) * 5)),
              }
            : f
        )
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [selectedUnit]);

  /* ---- Handlers ---- */
  const handleSignIn = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === "admin") {
      setRole("admin");
      // default admin view is the first unit
      const firstUnit = units[0]?.businessUnit ?? null;
      setSelectedUnit(firstUnit);
      if (firstUnit) setFeeders(extractUnitFeeders(firstUnit));
    } else if (val) {
      setRole("businessUnit");
      setSelectedUnit(val);
      setFeeders(extractUnitFeeders(val));
    } else {
      setRole(null);
      setSelectedUnit(null);
      setFeeders([]);
    }
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const unit = e.target.value;
    setSelectedUnit(unit);
    setFeeders(extractUnitFeeders(unit));
  };

  /* ---- Small UI helpers ---- */
  const getStatusColor = (status: FeederStatus) => {
    switch (status) {
      case "online":
        return "text-green-600 bg-green-100";
      case "offline":
        return "text-red-600 bg-red-100";
      case "maintenance":
        return "text-yellow-600 bg-yellow-100";
      case "alarm":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };
  const getStatusIcon = (status: FeederStatus) => {
    switch (status) {
      case "online":
        return <CheckCircle className="w-5 h-5" />;
      case "offline":
        return <AlertTriangle className="w-5 h-5" />;
      case "maintenance":
        return <Clock className="w-5 h-5" />;
      case "alarm":
        return <AlertTriangle className="w-5 h-5" />;
      default:
        return <Power className="w-5 h-5" />;
    }
  };
  const getLoadColor = (load: number) =>
    load >= 95 ? "bg-red-500" : load >= 80 ? "bg-yellow-500" : "bg-green-500";
  const getBandColor = (band: string) => {
    if (band.includes("A")) return "bg-green-100 text-green-800 border-green-200";
    if (band.includes("B")) return "bg-blue-100 text-blue-800 border-blue-200";
    if (band.includes("C")) return "bg-purple-100 text-purple-800 border-purple-200";
    return "bg-gray-100 text-gray-800 border-gray-200";
  };

  /* ---- Derived stats for current selected unit (dashboard cards) ---- */
  const currentStats = useMemo(() => statsFrom(feeders), [feeders]);
  const avgAvailability =
    feeders.length > 0 ? feeders.reduce((s, f) => s + f.availabilityHours, 0) / feeders.length : 0;

  /* ----------------------- UI ----------------------- */

  if (!role) {
    /* -------- Pre-signup overview screen -------- */
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <header className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold">Ikeja Electric — Feeders Overview</h1>
                <p className="text-sm text-gray-600">
                  Global snapshot of all locations (preview before signup)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs text-gray-500">Local time</div>
                <div className="font-medium">{currentTime.toLocaleString()}</div>
              </div>

              <select
                onChange={handleSignIn}
                defaultValue=""
                aria-label="Sign in as"
                className="border rounded-md p-2 text-sm"
              >
                <option value="">Sign in as...</option>
                <option value="admin">Admin (choose location)</option>
                {units.map((u) => (
                  <option key={u.businessUnit} value={u.businessUnit}>
                    {u.businessUnit}
                  </option>
                ))}
              </select>
            </div>
          </header>

          {/* Global summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-sm text-gray-500">Total Feeders (all locations)</p>
              <p className="text-2xl font-bold text-gray-900">{globalStats.total}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-sm text-gray-500">Online Feeders</p>
              <p className="text-2xl font-bold text-green-600">{globalStats.online}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-sm text-gray-500">Offline Feeders</p>
              <p className="text-2xl font-bold text-red-600">{globalStats.offline}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-sm text-gray-500">Total Customers</p>
              <p className="text-2xl font-bold text-purple-600">
                {globalStats.customers.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Locations list with hover tooltips showing location-specific totals */}
          <section className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin /> Locations
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {units.map((u) => {
                const locFeeders = extractUnitFeeders(u.businessUnit);
                const s = statsFrom(locFeeders);
                return (
                  <div
                    key={u.businessUnit}
                    className="relative bg-gray-50 border rounded-md p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{u.businessUnit}</div>
                        <div className="text-xs text-gray-500">{s.total} feeders</div>
                      </div>

                      <div className="text-xs text-gray-500 text-right">
                        <div>Online: {s.online}</div>
                        <div>Offline: {s.offline}</div>
                      </div>
                    </div>

                    {/* Tooltip on hover (CSS only) */}
                    <div className="absolute top-2 right-2 group">
                      <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                        {/* small tooltip card */}
                        <div className="z-10 pointer-events-none absolute -top-1 right-0 w-56 transform translate-y-0">
                          <div className="p-3 rounded-md bg-white border shadow-sm text-xs">
                            <div className="font-semibold mb-1">{u.businessUnit} summary</div>
                            <div className="flex justify-between">
                              <div className="text-gray-500">Total</div>
                              <div className="font-medium">{s.total}</div>
                            </div>
                            <div className="flex justify-between">
                              <div className="text-gray-500">Online</div>
                              <div className="font-medium text-green-600">{s.online}</div>
                            </div>
                            <div className="flex justify-between">
                              <div className="text-gray-500">Offline</div>
                              <div className="font-medium text-red-600">{s.offline}</div>
                            </div>
                            <div className="flex justify-between">
                              <div className="text-gray-500">Customers</div>
                              <div className="font-medium">{s.customers.toLocaleString()}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover region (make tooltip visible by wrapping with group) */}
                    <div className="mt-3 text-xs text-gray-600 flex items-center justify-between">
                      <div>Click to preview</div>
                      <button
                        type="button"
                        onClick={() => {
                          // quick preview: set role to businessUnit preview (no real signup)
                          setRole("businessUnit");
                          setSelectedUnit(u.businessUnit);
                          setFeeders(extractUnitFeeders(u.businessUnit));
                        }}
                        className="text-sm px-2 py-1 rounded border text-blue-600"
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    );
  }

  /* ----------------------- Signed-in dashboard (admin or businessUnit) ----------------------- */
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Zap className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {selectedUnit ?? "All Locations"} UT - Ikeja Electric
              </h1>
              <p className="text-gray-600">11kV Feeder Availability Dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Admin: allow switching unit */}
            {role === "admin" && (
              <select
                value={selectedUnit ?? ""}
                onChange={handleUnitChange}
                className="border rounded-md p-2 text-sm"
                aria-label="Select business unit"
              >
                {units.map((u) => (
                  <option key={u.businessUnit} value={u.businessUnit}>
                    {u.businessUnit}
                  </option>
                ))}
              </select>
            )}

            <div className="text-sm text-gray-600">
              <div>{currentTime.toLocaleString()}</div>
              <div className="text-xs text-gray-500">{role === "admin" ? "Admin" : "Business Unit"}</div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <p className="text-sm text-gray-500">{selectedUnit ?? "Location"} Feeders</p>
            <p className="text-2xl font-bold text-gray-900">{feeders.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <p className="text-sm text-gray-500">Online Feeders</p>
            <p className="text-2xl font-bold text-green-600">{currentStats.online}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <p className="text-sm text-gray-500">Average Availability</p>
            <p className="text-2xl font-bold text-blue-600">{avgAvailability.toFixed(1)} hrs</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <p className="text-sm text-gray-500">Total Customers</p>
            <p className="text-2xl font-bold text-purple-600">
              {currentStats.customers.toLocaleString()}
            </p>
          </div>
        </div>

        {/* If businessUnit show a button to view full dashboard (you are already seeing it, but placeholder) */}
        {role === "businessUnit" && (
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-md bg-white border p-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-gray-600" />
              <div className="text-sm">
                Viewing <span className="font-medium">{selectedUnit}</span>
              </div>
            </div>

            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
              onClick={() => {
                /* In a real app, route to the full location dashboard page */
                // example: router.push(`/dashboard/${selectedUnit}`);
                // For demo we already display details below
                alert(`Open full dashboard for ${selectedUnit}`);
              }}
            >
              View full dashboard
            </button>
          </div>
        )}

        {/* Feeders grid (same as your earlier card design) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {feeders.map((feeder) => (
            <div key={feeder.id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="px-6 py-4 border-b bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{feeder.name}</h3>
                    <p className="text-sm text-gray-500">{feeder.id}</p>
                    <p className="text-xs text-gray-500">
                      {feeder.parent33kV} / {feeder.injection} / {feeder.transformer}
                    </p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getStatusColor(
                      feeder.status
                    )}`}
                  >
                    {getStatusIcon(feeder.status)}
                    <span className="capitalize">{feeder.status}</span>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium border ${getBandColor(
                    feeder.band
                  )}`}
                >
                  {feeder.band}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Availability (hrs)</span>
                    <span className="text-sm font-bold text-gray-900">
                      {feeder.availabilityHours.toFixed(1)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(feeder.availabilityHours / 24) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Load</span>
                    <span className="text-sm font-bold text-gray-900">{feeder.load.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getLoadColor(feeder.load)}`}
                      style={{ width: `${feeder.load}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Voltage (kV)</p>
                    <p className="text-lg font-bold text-gray-900">{feeder.voltage.toFixed(1)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Current (A)</p>
                    <p className="text-lg font-bold text-gray-900">{Math.round(feeder.current)}</p>
                  </div>
                </div>

                <div className="text-xs text-gray-500">
                  <p>Last Outage: {feeder.lastOutage}</p>
                  <p>Total Outages: {feeder.totalOutages}</p>
                  <p>Customers: {feeder.customers.toLocaleString()}</p>
                  <p>Location: {feeder.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectricityDashboard;
