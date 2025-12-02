


import React, { useState } from "react";
import {
  Clock,
  QrCode,
  AlertCircle,
  ThumbsDown,
  AlertTriangle,
  LayoutDashboard,
  ShoppingCart,
  Grid,
  MessageSquare,
  Star,
  AlertOctagon,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  Check,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [downloadedOrders, setDownloadedOrders] = useState({});
  const [ordersView, setOrdersView] = useState(null); // null, "processed", "unprocessed"

  const handleDownload = (id) => {
    setDownloadedOrders((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const orders = [
    { id: "ORD-001", name: "Premium Car Wash", owner: "Rajesh Kumar", vehicle: "DL-01-AB-1234", date: "2025-12-01 10:30 AM" },
    { id: "ORD-002", name: "Full Service", owner: "Priya Sharma", vehicle: "MH-02-CD-5678", date: "2025-12-01 11:15 AM" },
    { id: "ORD-003", name: "Interior Cleaning", owner: "Amit Patel", vehicle: "GJ-03-EF-9012", date: "2025-12-01 12:00 PM" },
    { id: "ORD-004", name: "Express Wash", owner: "Neha Singh", vehicle: "UP-04-GH-3456", date: "2025-12-01 01:45 PM" },
    { id: "ORD-005", name: "Deluxe Package", owner: "Suresh Reddy", vehicle: "TN-05-IJ-7890", date: "2025-12-01 02:30 PM" },
  ];

  // Charts Data
  const happyCustomersData = [
    { month: "Jan", customers: 1200 },
    { month: "Feb", customers: 1800 },
    { month: "Mar", customers: 2400 },
    { month: "Apr", customers: 2200 },
    { month: "May", customers: 2800 },
    { month: "Jun", customers: 3200 },
  ];

  const tempCustomerData = [
    { month: "Jan", customers: 450 },
    { month: "Feb", customers: 380 },
    { month: "Mar", customers: 520 },
    { month: "Apr", customers: 480 },
    { month: "May", customers: 600 },
    { month: "Jun", customers: 580 },
  ];

  const salesData = [
    { week: "Week 1", amount: 45000 },
    { week: "Week 2", amount: 52000 },
    { week: "Week 3", amount: 48000 },
    { week: "Week 4", amount: 58000 },
  ];

  const deleteRequestData = [
    { name: "Approved", value: 12, color: "#10b981" },
    { name: "Pending", value: 8, color: "#f59e0b" },
    { name: "Rejected", value: 5, color: "#ef4444" },
  ];

  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "orders", icon: ShoppingCart, label: "Orders" },
    { id: "qr", icon: Grid, label: "QR Management" },
    { id: "queries", icon: MessageSquare, label: "Customer Queries" },
    { id: "reviews", icon: Star, label: "Reviews" },
    { id: "issues", icon: AlertOctagon, label: "Issues / Priority" },
    { id: "reports", icon: FileText, label: "Reports" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  const StatCard = ({
    icon: Icon,
    title,
    value,
    change,
    subtitle,
    bgColor,
    iconColor,
  }) => (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6 flex items-start gap-4">
      <div className={`${bgColor} rounded-full p-3 sm:p-4`}>
        <Icon className={`${iconColor} w-6 h-6`} />
      </div>
      <div className="flex-1">
        <p className="text-gray-500 text-sm">{title}</p>
        <div className="flex items-center gap-2 mt-1">
          <h3 className="text-2xl sm:text-3xl font-bold">{value}</h3>
          <span
            className={`text-sm font-semibold ${
              change.startsWith("+") || change.startsWith("↑")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {change}
          </span>
        </div>
        <p className="text-gray-400 text-xs mt-1">{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute top-4 left-4 z-50 lg:hidden bg-white p-2 rounded shadow"
      >
        {sidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full bg-white shadow-lg w-64 transform transition-transform duration-300 z-40 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="p-6 border-b flex items-center gap-2">
          <h1 className="text-xl font-bold text-blue-600">Admin Panel</h1>
        </div>

        <nav className="flex-1 p-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setSidebarOpen(false);
                if (item.id === "orders") setOrdersView(null);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                currentPage === item.id
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <button className="flex items-center gap-3 px-8 py-4 text-red-500 hover:bg-red-50 border-t">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4 lg:p-6">
        {/* Header */}
        <header className="bg-white rounded-lg shadow-sm p-4 mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-1/2 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative text-xl">🔔</button>
            <span className="text-gray-700">👤 Admin User</span>
          </div>
        </header>

        {/* Dashboard */}
        {currentPage === "dashboard" && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1">
              Dashboard Overview
            </h2>
            <p className="text-gray-500 mb-4">
              Welcome back! Here's what's happening today.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              <StatCard
                icon={Clock}
                title="Total Order Pending"
                value="24"
                change="↓5%"
                subtitle="Orders awaiting action"
                bgColor="bg-blue-100"
                iconColor="text-blue-600"
              />
              <StatCard
                icon={QrCode}
                title="Total Unassigned QR"
                value="18"
                change="↑12%"
                subtitle="QR codes pending"
                bgColor="bg-yellow-100"
                iconColor="text-yellow-600"
              />
              <StatCard
                icon={AlertCircle}
                title="Unresolved Query"
                value="32"
                change="↑8%"
                subtitle="Customer queries"
                bgColor="bg-orange-100"
                iconColor="text-orange-600"
              />
              <StatCard
                icon={ThumbsDown}
                title="Negative Review"
                value="7"
                change="↓3%"
                subtitle="Requires attention"
                bgColor="bg-red-100"
                iconColor="text-red-600"
              />
              <StatCard
                icon={AlertTriangle}
                title="Priority Issue"
                value="5"
                change="↑2%"
                subtitle="Critical alerts"
                bgColor="bg-orange-100"
                iconColor="text-orange-600"
              />
            </div>

            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-1">Happy Customers</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={happyCustomersData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="customers"
                      stroke="#10b981"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-1">Temp Customer</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={tempCustomerData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="customers"
                      stroke="#f59e0b"
                      fill="#fbbf24"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Charts Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-1">Total Sale (Weekly)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-1">Delete Request</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={deleteRequestData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {deleteRequestData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Orders Page */}
        {currentPage === "orders" && (
          <div>
            <h1 className="text-3xl font-bold">Order Management</h1>
            <p className="text-gray-500 mb-6">Manage and track all your orders</p>

            {/* Top Cards - Clickable */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div 
                onClick={() => setOrdersView("unprocessed")}
                className={`p-6 bg-yellow-100 rounded-xl border-2 shadow cursor-pointer hover:shadow-lg transition ${
                  ordersView === "unprocessed" ? "border-yellow-500" : "border-blue-300"
                }`}
              >
                <h2 className="text-xl font-semibold flex items-center gap-3">
                  <Clock className="w-6 h-6" /> Unprocessed Orders
                </h2>
                <p className="text-gray-700">Click to view details</p>
                <div className="text-3xl font-bold text-right mt-2">24</div>
              </div>

              <div 
                onClick={() => setOrdersView("processed")}
                className={`p-6 bg-green-100 rounded-xl border-2 shadow cursor-pointer hover:shadow-lg transition ${
                  ordersView === "processed" ? "border-green-500" : "border-green-300"
                }`}
              >
                <h2 className="text-xl font-semibold flex items-center gap-3">
                  <Check className="w-6 h-6" /> Processed Orders
                </h2>
                <p className="text-gray-700">Click to view details</p>
                <div className="text-3xl font-bold text-right mt-2">156</div>
              </div>
            </div>

            {/* Show Processed Orders Table */}
            {ordersView === "processed" && (
              
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Left Form - Process Order Details */}
                <div className="bg-white p-6 rounded-xl shadow">
                  <h2 className="text-xl font-semibold mb-4">Process Order Details</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-600">Order ID</label>
                      <input type="text" defaultValue="ORD-001" className="w-full border rounded-lg px-3 py-2 mt-1" />
                    </div>

                    <div>
                      <label className="text-sm text-gray-600">Order Name</label>
                      <input type="text" defaultValue="Premium Car Wash" className="w-full border rounded-lg px-3 py-2 mt-1" />
                    </div>

                    <div>
                      <label className="text-sm text-gray-600">Owner Name</label>
                      <input type="text" defaultValue="Rajesh Kumar" className="w-full border rounded-lg px-3 py-2 mt-1" />
                    </div>

                    <div>
                      <label className="text-sm text-gray-600">Vehicle Number</label>
                      <input type="text" defaultValue="DL-01-AB-1234" className="w-full border rounded-lg px-3 py-2 mt-1" />
                    </div>

                    <div>
                      <label className="text-sm text-gray-600">Assigned QR Number</label>
                      <input type="text" defaultValue="QR-2025-001" className="w-full border rounded-lg px-3 py-2 mt-1" />
                    </div>

                    <div>
                      <label className="text-sm text-gray-600">Processed Date</label>
                      <input type="date" className="w-full border rounded-lg px-3 py-2 mt-1" />
                    </div>

                    <div>
                      <label className="text-sm text-gray-600">Status</label>
                      <select className="w-full border rounded-lg px-3 py-2 mt-1">
                        <option>Delivered</option>
                        <option>Out for Delivery</option>
                        <option>In Progress</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm text-gray-600">Tracking Link</label>
                      <input type="text" className="w-full border rounded-lg px-3 py-2 mt-1" placeholder="https://tracking..." />
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">Process Order</button>
                    <button className="bg-gray-300 px-5 py-2 rounded-lg hover:bg-gray-400">Clear</button>
                  </div>
                </div>

                {/* Right Form - Cancel Order */}
                <div className="bg-white p-6 border border-red-300 rounded-xl shadow">
                  <h2 className="text-xl font-semibold text-red-600 mb-4">Cancel an Order</h2>

                  <div>
                    <label className="text-sm text-gray-600">Order ID *</label>
                    <input type="text" className="w-full border rounded-lg px-3 py-2 mt-1" placeholder="Enter Order ID" />
                  </div>

                  <div className="mt-4">
                    <label className="text-sm text-gray-600">Cancellation Reason</label>
                    <select className="w-full border rounded-lg px-3 py-2 mt-1">
                      <option>Customer Request</option>
                      <option>Incorrect Order</option>
                      <option>Payment Issue</option>
                    </select>
                  </div>

                  <div className="mt-4">
                    <label className="text-sm text-gray-600">Additional Notes</label>
                    <textarea className="w-full border rounded-lg px-3 py-2 mt-1" rows="4" placeholder="Reason..."></textarea>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">Cancel Order</button>
                    <button className="bg-gray-300 px-5 py-2 rounded-lg hover:bg-gray-400">Clear</button>
                  </div>
                </div>
              </div>

             
            )}

            {/* Show Unprocessed Orders Forms */}
            {ordersView === "unprocessed" && (

              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-4">Processed Orders</h2>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="p-3">Order ID</th>
                      <th className="p-3">Order Name</th>
                      <th className="p-3">Owner Name</th>
                      <th className="p-3">Vehicle Number</th>
                      <th className="p-3">Order Date & Time</th>
                      <th className="p-3">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-b hover:bg-gray-50">
                        <td className="p-3 text-blue-600 font-semibold cursor-pointer">
                          {order.id}
                        </td>
                        <td className="p-3">{order.name}</td>
                        <td className="p-3">{order.owner}</td>
                        <td className="p-3">
                          <span className="bg-gray-100 px-3 py-1 rounded-full">
                            {order.vehicle}
                          </span>
                        </td>
                        <td className="p-3">{order.date}</td>
                        <td className="p-3">
                          {downloadedOrders[order.id] ? (
                            <button className="bg-green-500 text-white px-5 py-2 rounded-lg">
                              Processed ✓
                            </button>
                          ) : (
                            <button
                              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                              onClick={() => handleDownload(order.id)}
                            >
                              Download QR
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>


            )}
          </div>
        )}

        {/* Other Pages - Under Construction */}
        {currentPage !== "dashboard" && currentPage !== "orders" && (
          <div className="bg-white rounded-lg shadow p-8 text-center mt-10">
            <h2 className="text-2xl font-bold capitalize">{currentPage} Page</h2>
            <p className="text-gray-500">This page is under construction</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;