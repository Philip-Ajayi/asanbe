"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Power,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  Users,
  Database,
} from "lucide-react";

/**
 * Self-contained sample data (replace with your real ./data import if you want)
 * Structure matches what your original extractor expects: an array of business units,
 * each with feeders33kV -> injections -> transformers -> feeders11kV.
 */
const powerData = [
  {
    businessUnit: "Ikeja West",
    feeders33kV: [
      {
        name: "33kV-A",
        injections: [
          {
            name: "Inj-1",
            transformers: [
              {
                name: "TX-A1",
                feeders11kV: [
                  { name: "Feeder-1", band: "A" },
                  { name: "Feeder-2", band: "B" },
                ],
              },
              {
                name: "TX-A2",
                feeders11kV: [{ name: "Feeder-3", band: "C" }],
              },
            ],
          },
          {
            name: "Inj-2",
            transformers: [
              {
                name: "TX-A3",
                feeders11kV: [{ name: "Feeder-4", band: "A" }],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    businessUnit: "Ikeja East",
    feeders33kV: [
      {
        name: "33kV-B",
        injections: [
          {
            name: "Inj-3",
            transformers: [
              {
                name: "TX-B1",
                feeders11kV: [
                  { name: "Feeder-5", band: "A" },
                  { name: "Feeder-6", band: "B" },
                  { name: "Feeder-7", band: "C" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

/* --------------------
   Types
   -------------------- */
interface Feeder {
  id: string;
  name: string;
  band: string;
  status: "online" | "offline" | "maintenance" | "alarm";
  voltage: number;
  current: number;
  load: number;
  availabilityHours: number; // in hours
  lastOutage: string;
  totalOutages: number;
  customers: number;
  location: string; // business unit
  parent33kV: string; // 33kV feeder name
  injection: string;
  transformer: string;
}

type Role = "admin" | "businessUnit" | null;

/* --------------------
   Utilities / generators
   -------------------- */
const randomFrom = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

const generateRandomFeederData = (
  name: string,
  band: string | null,
  location: string,
  parent33kV: string,
  injection: string,
  transformer: string
): Feeder => {
  const statuses: Feeder["status"][] = ["online", "offline", "maintenance", "alarm"];
  const status = randomFrom(statuses);

  return {
    id: `${name.toUpperCase()}-11KV-${Math.floor(Math.random() * 10000)}`,
    name: `${name} 11kV Feeder`,
    band: `Band ${band ?? "Unknown"}`,
    status,
    voltage: status === "online" ? 10.5 + Math.random() * 1 : 0,
    current: status === "online" ? 150 + Math.random() * 300 : 0,
    load: status === "online" ? Math.random() * 100 : 0,
    availabilityHours: 20 + Math.random() * 4, // 20–24 hours
    lastOutage: `${Math.floor(Math.random() * 30)} days ago`,
    totalOutages: Math.floor(Math.random() * 20),
    customers: 200 + Math.floor(Math.random() * 2000),
    location,
    parent33kV,
    injection,
    transformer,
  };
};

const extractUnitFeeders = (unitName: string): Feeder[] => {
  const unit = powerData.find((u) => u.businessUnit === unitName);
  if (!unit) return [];

  const feeders: Feeder[] = [];
  unit.feeders33kV.forEach((f33) =>
    f33.injections.forEach((inj) =>
      inj.transformers.forEach((tx) =>
        tx.feeders11kV.forEach((f11) => {
          feeders.push(
            generateRandomFeederData(
              f11.name,
              (f11 as any).band ?? "Unknown",
              unit.businessUnit,
              f33.name,
              inj.name,
              tx.name
            )
          );
        })
      )
    )
  );
  return feeders;
};

/* --------------------
   Component
   -------------------- */
const ElectricityDashboard: React.FC = () => {
  // state
  const [role, setRole] = useState<Role>(null);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [unitFeedersMap, setUnitFeedersMap] = useState<Record<string, Feeder[]>>({});
  const [showFullDashboardForUnit, setShowFullDashboardForUnit] = useState(false);
  const [hoveredUnit, setHoveredUnit] = useState<string | null>(null);

  // On mount: generate feeders for each business unit and cache them.
  useEffect(() => {
    const map: Record<string, Feeder[]> = {};
    powerData.forEach((unit) => {
      map[unit.businessUnit] = extractUnitFeeders(unit.businessUnit);
    });
    setUnitFeedersMap(map);
  }, []);

  // Derived all feeders across all units
  const allFeeders = useMemo(
    () => Object.values(unitFeedersMap).flat(),
    [unitFeedersMap]
  );

  // Aggregates across all locations
  const totalFeedersAll = allFeeders.length;
  const onlineFeedersAll = allFeeders.filter((f) => f.status === "online").length;
  const inactiveFeedersAll = totalFeedersAll - onlineFeedersAll;

  // Helpers for unit-level aggregates
  const unitAggregates = (unitName: string) => {
    const feeders = unitFeedersMap[unitName] ?? [];
    const total = feeders.length;
    const online = feeders.filter((f) => f.status === "online").length;
    const inactive = total - online;
    const customers = feeders.reduce((s, f) => s + f.customers, 0);
    const avgAvailability = feeders.length
      ? feeders.reduce((s, f) => s + f.availabilityHours, 0) / feeders.length
      : 0;
    return { feeders, total, online, inactive, customers, avgAvailability };
  };

  // UI helpers (colors + icons)
  const getStatusColor = (status: Feeder["status"]) => {
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

  const getStatusIcon = (status: Feeder["status"]) => {
    switch (status) {
      case "online":
        return <CheckCircle className="w-4 h-4" />;
      case "offline":
        return <AlertTriangle className="w-4 h-4" />;
      case "maintenance":
        return <Clock className="w-4 h-4" />;
      case "alarm":
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Power className="w-4 h-4" />;
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

  /* --------------------
     Event handlers
     -------------------- */
  const handleSignIn = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "admin") {
      setRole("admin");
      // default admin view: choose first unit but not forced; show selection control
      setSelectedUnit(null);
      setShowFullDashboardForUnit(false);
      return;
    }
    if (value) {
      // Signing in as a business unit (specific location)
      setRole("businessUnit");
      setSelectedUnit(value);
      setShowFullDashboardForUnit(false);
      return;
    }
    setRole(null);
    setSelectedUnit(null);
    setShowFullDashboardForUnit(false);
  };

  const handleAdminUnitSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUnit(e.target.value);
    setShowFullDashboardForUnit(true); // admin chooses a unit => show full dashboard for it
  };

  /* --------------------
     RENDER: Login/Pre-signin Overview
     -------------------- */
  if (!role) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <header className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold">Feeder Overview (Public Preview)</h1>
                <p className="text-sm text-gray-600">View totals across all locations before signup</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center gap-3">
              <select
                onChange={handleSignIn}
                defaultValue=""
                className="border rounded-md p-2 text-sm"
              >
                <option value="">Sign in as...</option>
                <option value="admin">Admin</option>
                {powerData.map((unit) => (
                  <option key={unit.businessUnit} value={unit.businessUnit}>
                    {unit.businessUnit}
                  </option>
                ))}
              </select>
            </div>
          </header>

          {/* Overall totals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border flex items-center">
              <Database className="w-6 h-6 mr-3 text-gray-700" />
              <div>
                <p className="text-xs text-gray-500">Total Feeders (all locations)</p>
                <p className="text-2xl font-bold">{totalFeedersAll}</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
              <div>
                <p className="text-xs text-gray-500">Online Feeders</p>
                <p className="text-2xl font-bold text-green-600">{onlineFeedersAll}</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3 text-red-600" />
              <div>
                <p className="text-xs text-gray-500">Inactive Feeders</p>
                <p className="text-2xl font-bold text-red-600">{inactiveFeedersAll}</p>
              </div>
            </div>
          </div>

          {/* Locations list with hover tooltips */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Locations (hover to preview)</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {powerData.map((unit) => {
                const agg = unitAggregates(unit.businessUnit);
                return (
                  <div
                    key={unit.businessUnit}
                    className="relative bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition"
                    onMouseEnter={() => setHoveredUnit(unit.businessUnit)}
                    onMouseLeave={() => setHoveredUnit(null)}
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      /* clicking while not signed in will just select sign-in value; user must sign in */
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{unit.businessUnit}</h3>
                        <p className="text-xs text-gray-500">Click Sign-in to join as this unit</p>
                      </div>
                      <div className="text-sm text-gray-700">{agg.total} feeders</div>
                    </div>

                    {/* tooltip/popover on hover */}
                    <div
                      className={`absolute z-10 top-4 left-4 w-64 p-3 rounded-md shadow-lg bg-white border text-sm transform transition-opacity duration-150 pointer-events-none ${
                        hoveredUnit === unit.businessUnit ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden={hoveredUnit !== unit.businessUnit}
                    >
                      <p className="text-xs text-gray-500 mb-2">Preview</p>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-700">Total feeders</span>
                        <strong>{agg.total}</strong>
                      </div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-700">Online</span>
                        <strong className="text-green-600">{agg.online}</strong>
                      </div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-700">Inactive</span>
                        <strong className="text-red-600">{agg.inactive}</strong>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-500">Avg availability</span>
                        <span className="text-xs font-medium">{agg.avgAvailability.toFixed(1)} hrs</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 text-sm text-gray-500">
              Tip: sign in as <strong>Admin</strong> to pick a location and see its full dashboard, or
              sign in as a specific location to view that location's dashboard after authentication.
            </div>
          </section>
        </div>
      </div>
    );
  }

  /* --------------------
     RENDER: Signed-in views (Admin or Business Unit)
     -------------------- */
  // If admin and no selected unit yet, show admin with selector & global overview
  if (role === "admin" && !selectedUnit) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <header className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold">Admin - Select Location</h1>
                <p className="text-sm text-gray-600">Pick a business unit to view its dashboard</p>
              </div>
            </div>

            <div>
              <select
                onChange={handleAdminUnitSelect}
                defaultValue=""
                className="border rounded-md p-2 text-sm"
              >
                <option value="">Choose a location...</option>
                {powerData.map((unit) => (
                  <option key={unit.businessUnit} value={unit.businessUnit}>
                    {unit.businessUnit}
                  </option>
                ))}
              </select>
            </div>
          </header>

          {/* Global admin totals at top */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-sm text-gray-500">Total Feeders (all locations)</p>
              <p className="text-2xl font-bold">{totalFeedersAll}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-sm text-gray-500">Online Feeders</p>
              <p className="text-2xl font-bold text-green-600">{onlineFeedersAll}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-sm text-gray-500">Inactive Feeders</p>
              <p className="text-2xl font-bold text-red-600">{inactiveFeedersAll}</p>
            </div>
          </div>

          {/* Small per-location summary for admin to choose visually */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {powerData.map((unit) => {
              const agg = unitAggregates(unit.businessUnit);
              return (
                <div
                  key={unit.businessUnit}
                  className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition cursor-pointer"
                  onClick={() => {
                    setSelectedUnit(unit.businessUnit);
                    setShowFullDashboardForUnit(true);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{unit.businessUnit}</h3>
                    <div className="text-xs text-gray-500">{agg.total} feeders</div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <div>
                      <p className="text-xs text-gray-500">Online</p>
                      <p className="font-semibold text-green-600">{agg.online}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Inactive</p>
                      <p className="font-semibold text-red-600">{agg.inactive}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Avg avail</p>
                      <p className="font-semibold">{agg.avgAvailability.toFixed(1)}h</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // If businessUnit signed-in, show summary for that unit + button to see full dashboard
  if (role === "businessUnit" && selectedUnit) {
    const agg = unitAggregates(selectedUnit);
    const feeders = agg.feeders;

    if (!showFullDashboardForUnit) {
      // show summary + button
      return (
        <div className="min-h-screen bg-gray-50 p-8">
          <div className="max-w-4xl mx-auto">
            <header className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-purple-600" />
                <div>
                  <h1 className="text-2xl font-bold">{selectedUnit} - Overview</h1>
                  <p className="text-sm text-gray-600">Signed in as Business Unit</p>
                </div>
              </div>

              <div>
                <button
                  className="px-4 py-2 rounded-md border bg-white hover:shadow-sm"
                  onClick={() => {
                    setShowFullDashboardForUnit(true);
                  }}
                >
                  View full dashboard
                </button>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-sm text-gray-500">Total Feeders</p>
                <p className="text-2xl font-bold">{agg.total}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-sm text-gray-500">Online Feeders</p>
                <p className="text-2xl font-bold text-green-600">{agg.online}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-sm text-gray-500">Inactive Feeders</p>
                <p className="text-2xl font-bold text-red-600">{agg.inactive}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-sm text-gray-500">Small sample list of feeders</p>
              <ul className="mt-3 space-y-2">
                {feeders.slice(0, 5).map((f) => (
                  <li key={f.id} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{f.name}</div>
                      <div className="text-xs text-gray-500">{f.id}</div>
                    </div>
                    <div className="text-xs flex items-center space-x-2">
                      <span className={`${getStatusColor(f.status)} px-2 py-1 rounded-full`}>
                        {f.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-sm text-gray-500">
                Want the full interactive dashboard? Click "View full dashboard".
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  /* --------------------
     RENDER: Full dashboard for a specific unit (admin-selected or business unit chose)
     -------------------- */
  if (selectedUnit) {
    const { feeders, total, online, customers, avgAvailability } = unitAggregates(selectedUnit);

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold">{selectedUnit} UT - Feeder Dashboard</h1>
                <p className="text-sm text-gray-600">11kV Feeder overview</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {role === "admin" && (
                <select
                  value={selectedUnit}
                  onChange={(e) => {
                    setSelectedUnit(e.target.value);
                  }}
                  className="border rounded-md p-2 text-sm"
                >
                  {powerData.map((unit) => (
                    <option key={unit.businessUnit} value={unit.businessUnit}>
                      {unit.businessUnit}
                    </option>
                  ))}
                </select>
              )}
              <button
                className="px-3 py-2 rounded-md border bg-white"
                onClick={() => {
                  // Return to pre-signin-like admin selection (if admin) or unit summary (if businessUnit)
                  if (role === "admin") {
                    setSelectedUnit(null);
                    setShowFullDashboardForUnit(false);
                    setRole("admin");
                  } else {
                    setShowFullDashboardForUnit(false);
                  }
                }}
              >
                Back
              </button>
            </div>
          </div>

          {/* Summary cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-sm text-gray-500">{selectedUnit} Feeders</p>
              <p className="text-2xl font-bold text-gray-900">{total}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-sm text-gray-500">Online Feeders</p>
              <p className="text-2xl font-bold text-green-600">{online}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-sm text-gray-500">Average Availability</p>
              <p className="text-2xl font-bold text-blue-600">{avgAvailability.toFixed(1)} hrs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-sm text-gray-500">Total Customers</p>
              <p className="text-2xl font-bold text-purple-600">{customers.toLocaleString()}</p>
            </div>
          </div>

          {/* Feeders grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {feeders.map((feeder) => (
              <div
                key={feeder.id}
                className="bg-white rounded-lg shadow-sm border overflow-hidden"
              >
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
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Load</span>
                      <span className="text-sm font-bold text-gray-900">
                        {feeder.load.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getLoadColor(feeder.load)}`}
                        style={{ width: `${feeder.load}%` }}
                      ></div>
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
  }

  // fallback
  return null;
};

export default ElectricityDashboard;
