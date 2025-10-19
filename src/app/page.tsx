"use client";

import React, { useState, useEffect } from "react";
import { Power, AlertTriangle, CheckCircle, Clock, Zap } from "lucide-react";
import { powerData } from "./data";

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
  location: string;
  parent33kV: string; // 33kV feeder name
  injection: string;
  transformer: string;
}

type Role = "admin" | "businessUnit" | null;

const ElectricityDashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [role, setRole] = useState<Role>(null);
  const [feeders, setFeeders] = useState<Feeder[]>([]);

  // ---- Generate Random Feeder Data ----
  const generateRandomFeederData = (
    name: string,
    band: string | null,
    location: string,
    parent33kV: string,
    injection: string,
    transformer: string
  ): Feeder => {
    const statuses: Feeder["status"][] = ["online", "offline", "maintenance", "alarm"];
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    return {
      id: `${name.toUpperCase()}-11KV`,
      name: `${name} 11kV Feeder`,
      band: `Band ${band ?? "Unknown"}`, // <-- Fix for null band
      status,
      voltage: status === "online" ? 10.5 + Math.random() * 1 : 0,
      current: status === "online" ? 150 + Math.random() * 300 : 0,
      load: status === "online" ? Math.random() * 100 : 0,
      availabilityHours: 20 + Math.random() * 4, // 20–24 hours
      lastOutage: `${Math.floor(Math.random() * 7)} days ago`,
      totalOutages: Math.floor(Math.random() * 20),
      customers: 500 + Math.floor(Math.random() * 3000),
      location,
      parent33kV,
      injection,
      transformer,
    };
  };

  // ---- Extract Feeders from Selected Unit ----
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
                f11.band ?? "Unknown", // <-- Fix for null band
                inj.name,
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

  // ---- Time Updates ----
  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // ---- Feeder Simulation ----
  useEffect(() => {
    const updateInterval = setInterval(() => {
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
    return () => clearInterval(updateInterval);
  }, []);

  // ---- Handle Sign In ----
  const handleSignIn = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "admin") {
      setRole("admin");
      setSelectedUnit(powerData[0].businessUnit);
      setFeeders(extractUnitFeeders(powerData[0].businessUnit));
    } else if (value) {
      setRole("businessUnit");
      setSelectedUnit(value);
      setFeeders(extractUnitFeeders(value));
    } else {
      setRole(null);
      setSelectedUnit(null);
      setFeeders([]);
    }
  };

  // ---- Handle Business Unit Change (Admin only) ----
  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const unit = e.target.value;
    setSelectedUnit(unit);
    setFeeders(extractUnitFeeders(unit));
  };

  // ---- Helpers ----
  const getStatusColor = (status: Feeder["status"]) => {
    switch (status) {
      case "online": return "text-green-600 bg-green-100";
      case "offline": return "text-red-600 bg-red-100";
      case "maintenance": return "text-yellow-600 bg-yellow-100";
      case "alarm": return "text-orange-600 bg-orange-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status: Feeder["status"]) => {
    switch (status) {
      case "online": return <CheckCircle className="w-5 h-5" />;
      case "offline": return <AlertTriangle className="w-5 h-5" />;
      case "maintenance": return <Clock className="w-5 h-5" />;
      case "alarm": return <AlertTriangle className="w-5 h-5" />;
      default: return <Power className="w-5 h-5" />;
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

  const totalCustomers = feeders.reduce((sum, f) => sum + f.customers, 0);
  const onlineFeeders = feeders.filter((f) => f.status === "online").length;
  const avgAvailability = feeders.length
    ? feeders.reduce((sum, f) => sum + f.availabilityHours, 0) / feeders.length
    : 0;

  // ---- Login Page ----
  if (!role)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-center">
          <h1 className="text-2xl font-bold mb-6">Ikeja Electric</h1>
          <select
            onChange={handleSignIn}
            defaultValue=""
            className="w-full border rounded-md p-2 mb-4"
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
      </div>
    );

  // ---- Dashboard ----
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <Zap className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {selectedUnit} UT - Ikeja Electric
            </h1>
            <p className="text-gray-600">11kV Feeder Availability Dashboard</p>
          </div>
        </div>

        {/* Admin: Switch Unit */}
        {role === "admin" && (
          <select
            value={selectedUnit || ""}
            onChange={handleUnitChange}
            className="border rounded-md p-2 text-sm"
          >
            {powerData.map((unit) => (
              <option key={unit.businessUnit} value={unit.businessUnit}>
                {unit.businessUnit}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <p className="text-sm text-gray-500">{selectedUnit} Feeders</p>
          <p className="text-2xl font-bold text-gray-900">{feeders.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <p className="text-sm text-gray-500">Online Feeders</p>
          <p className="text-2xl font-bold text-green-600">{onlineFeeders}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <p className="text-sm text-gray-500">Average Availability</p>
          <p className="text-2xl font-bold text-blue-600">
            {avgAvailability.toFixed(1)} hrs
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <p className="text-sm text-gray-500">Total Customers</p>
          <p className="text-2xl font-bold text-purple-600">
            {totalCustomers.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Feeders Grid */}
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
                  ></div>
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
  );
};

export default ElectricityDashboard;
