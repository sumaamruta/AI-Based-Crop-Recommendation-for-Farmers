// import { useNavigate } from "react-router-dom";
// import { Button } from "../components/ui/button";
// import { Card } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import {
//   AreaChart,
//   Area,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { ArrowLeft, TrendingUp, TrendingDown, Minus, BarChart3, LineChart } from "lucide-react";

// // Mock data for 7-day price trends
// const priceData = [
//   { day: "Mon", wheat: 240, rice: 180, corn: 160 },
//   { day: "Tue", wheat: 245, rice: 185, corn: 165 },
//   { day: "Wed", wheat: 250, rice: 175, corn: 170 },
//   { day: "Thu", wheat: 255, rice: 190, corn: 168 },
//   { day: "Fri", wheat: 265, rice: 195, corn: 175 },
//   { day: "Sat", wheat: 270, rice: 200, corn: 180 },
//   { day: "Sun", wheat: 275, rice: 205, corn: 185 },
// ];

// // Mock data for 6-month comparison
// const monthlyData = [
//   { month: "Sep", price: 220 },
//   { month: "Oct", price: 235 },
//   { month: "Nov", price: 245 },
//   { month: "Dec", price: 250 },
//   { month: "Jan", price: 260 },
//   { month: "Feb", price: 275 },
// ];

// const crops = [
//   { name: "Wheat", price: 275, change: 15.9, status: "buy" },
//   { name: "Rice", price: 205, change: 13.9, status: "buy" },
//   { name: "Corn", price: 185, change: 15.6, status: "buy" },
//   { name: "Soybeans", price: 420, change: -2.3, status: "sell" },
//   { name: "Cotton", price: 195, change: 0.5, status: "hold" },
//   { name: "Barley", price: 165, change: 8.2, status: "buy" },
// ];

// export function MarketAnalysis() {
//   const navigate = useNavigate();

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "buy":
//         return "bg-green-100 text-green-800 border-green-300";
//       case "sell":
//         return "bg-red-100 text-red-800 border-red-300";
//       case "hold":
//         return "bg-yellow-100 text-yellow-800 border-yellow-300";
//       default:
//         return "bg-gray-100 text-gray-800 border-gray-300";
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case "buy":
//         return <TrendingUp className="w-3 h-3" />;
//       case "sell":
//         return <TrendingDown className="w-3 h-3" />;
//       case "hold":
//         return <Minus className="w-3 h-3" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <Button
//             variant="ghost"
//             onClick={() => navigate("/input")}
//             className="gap-2"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back
//           </Button>
//           <div className="text-center flex-1">
//             <h1 className="text-3xl text-primary">Market Analysis</h1>
//             <p className="text-muted-foreground">Real-time commodity price trends</p>
//           </div>
//           <Button
//             variant="outline"
//             onClick={() => navigate("/support")}
//             className="border-primary text-primary"
//           >
//             Support
//           </Button>
//         </div>

//         {/* Bento Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//           {/* 7-Day Price Trends - Large Area Chart */}
//           <Card className="lg:col-span-8 p-6 border-border">
//             <div className="flex items-center gap-2 mb-6">
//               <LineChart className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">7-Day Price Trends</h2>
//             </div>
//             <ResponsiveContainer width="100%" height={300}>
//               <AreaChart data={priceData}>
//                 <defs>
//                   <linearGradient id="colorWheat" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#2f5233" stopOpacity={0.3} />
//                     <stop offset="95%" stopColor="#2f5233" stopOpacity={0} />
//                   </linearGradient>
//                   <linearGradient id="colorRice" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#4a7c4e" stopOpacity={0.3} />
//                     <stop offset="95%" stopColor="#4a7c4e" stopOpacity={0} />
//                   </linearGradient>
//                   <linearGradient id="colorCorn" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#d4a574" stopOpacity={0.3} />
//                     <stop offset="95%" stopColor="#d4a574" stopOpacity={0} />
//                   </linearGradient>
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e8e3d9" />
//                 <XAxis dataKey="day" stroke="#6b7c6e" />
//                 <YAxis stroke="#6b7c6e" />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: "#ffffff",
//                     border: "1px solid #e8e3d9",
//                     borderRadius: "8px",
//                   }}
//                 />
//                 <Area
//                   type="monotone"
//                   dataKey="wheat"
//                   stroke="#2f5233"
//                   strokeWidth={2}
//                   fill="url(#colorWheat)"
//                 />
//                 <Area
//                   type="monotone"
//                   dataKey="rice"
//                   stroke="#4a7c4e"
//                   strokeWidth={2}
//                   fill="url(#colorRice)"
//                 />
//                 <Area
//                   type="monotone"
//                   dataKey="corn"
//                   stroke="#d4a574"
//                   strokeWidth={2}
//                   fill="url(#colorCorn)"
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//             <div className="flex justify-center gap-6 mt-4">
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#2f5233]" />
//                 <span className="text-sm text-muted-foreground">Wheat</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#4a7c4e]" />
//                 <span className="text-sm text-muted-foreground">Rice</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#d4a574]" />
//                 <span className="text-sm text-muted-foreground">Corn</span>
//               </div>
//             </div>
//           </Card>

//           {/* Quick Stats */}
//           <div className="lg:col-span-4 space-y-6">
//             <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">
//               <div className="text-sm text-muted-foreground mb-2">Average Price</div>
//               <div className="text-3xl text-primary mb-1">₹248</div>
//               <div className="flex items-center gap-1 text-sm text-green-600">
//                 <TrendingUp className="w-4 h-4" />
//                 <span>+12.5% this week</span>
//               </div>
//             </Card>

//             <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">
//               <div className="text-sm text-muted-foreground mb-2">Market Volume</div>
//               <div className="text-3xl text-primary mb-1">1.2M</div>
//               <div className="text-sm text-muted-foreground">tons traded today</div>
//             </Card>

//             <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">
//               <div className="text-sm text-muted-foreground mb-2">Active Traders</div>
//               <div className="text-3xl text-primary mb-1">8,547</div>
//               <div className="text-sm text-muted-foreground">online now</div>
//             </Card>
//           </div>

//           {/* 6-Month Comparison - Bar Chart */}
//           <Card className="lg:col-span-7 p-6 border-border">
//             <div className="flex items-center gap-2 mb-6">
//               <BarChart3 className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">6-Month Price Comparison</h2>
//             </div>
//             <ResponsiveContainer width="100%" height={280}>
//               <BarChart data={monthlyData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e8e3d9" />
//                 <XAxis dataKey="month" stroke="#6b7c6e" />
//                 <YAxis stroke="#6b7c6e" />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: "#ffffff",
//                     border: "1px solid #e8e3d9",
//                     borderRadius: "8px",
//                   }}
//                 />
//                 <Bar dataKey="price" fill="#2f5233" radius={[8, 8, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </Card>

//           {/* Buy/Sell/Hold Status Cards */}
//           <Card className="lg:col-span-5 p-6 border-border">
//             <h2 className="text-xl text-primary mb-4">Commodity Status</h2>
//             <div className="space-y-3">
//               {crops.map((crop) => (
//                 <div
//                   key={crop.name}
//                   className="flex items-center justify-between p-4 bg-accent/30 rounded-xl border border-border"
//                 >
//                   <div>
//                     <div className="font-medium text-foreground">{crop.name}</div>
//                     <div className="text-sm text-muted-foreground">₹{crop.price}/quintal</div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div
//                       className={`text-sm ${
//                         crop.change >= 0 ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       {crop.change >= 0 ? "+" : ""}
//                       {crop.change}%
//                     </div>
//                     <Badge
//                       className={`${getStatusColor(
//                         crop.status
//                       )} capitalize flex items-center gap-1`}
//                     >
//                       {getStatusIcon(crop.status)}
//                       {crop.status}
//                     </Badge>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }








// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Button } from "../components/ui/button";
// import { Card } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import {
//   AreaChart,
//   Area,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { ArrowLeft, TrendingUp, TrendingDown, Minus, BarChart3, LineChart } from "lucide-react";

// // Mock data for 7-day price trends
// const priceData = [
//   { day: "Mon", wheat: 240, rice: 180, corn: 160 },
//   { day: "Tue", wheat: 245, rice: 185, corn: 165 },
//   { day: "Wed", wheat: 250, rice: 175, corn: 170 },
//   { day: "Thu", wheat: 255, rice: 190, corn: 168 },
//   { day: "Fri", wheat: 265, rice: 195, corn: 175 },
//   { day: "Sat", wheat: 270, rice: 200, corn: 180 },
//   { day: "Sun", wheat: 275, rice: 205, corn: 185 },
// ];

// // Mock data for 6-month comparison
// const monthlyData = [
//   { month: "Sep", price: 220 },
//   { month: "Oct", price: 235 },
//   { month: "Nov", price: 245 },
//   { month: "Dec", price: 250 },
//   { month: "Jan", price: 260 },
//   { month: "Feb", price: 275 },
// ];

// const crops = [
//   { name: "Wheat", price: 275, change: 15.9, status: "buy" },
//   { name: "Rice", price: 205, change: 13.9, status: "buy" },
//   { name: "Corn", price: 185, change: 15.6, status: "buy" },
//   { name: "Soybeans", price: 420, change: -2.3, status: "sell" },
//   { name: "Cotton", price: 195, change: 0.5, status: "hold" },
//   { name: "Barley", price: 165, change: 8.2, status: "buy" },
// ];

// // STEP 2: Crop → Commodity mapping
// const cropMapping: any = {
//   rice: "Rice",
//   maize: "Maize",
//   cotton: "Cotton",
//   chickpea: "Gram",
//   pigeonpeas: "Arhar",
//   mungbean: "Green Gram",
//   blackgram: "Black Gram",
//   lentil: "Lentil",
//   kidneybeans: "Gram",
//   mothbeans: "Gram",
//   banana: "Banana",
//   mango: "Mango",
//   orange: "Orange",
//   papaya: "Papaya",
//   pomegranate: "Pomegranate",
//   grapes: "Grapes",
//   apple: "Apple",
//   watermelon: "Water Melon",
//   muskmelon: "Musk Melon",
//   coconut: "Coconut",
//   coffee: "Coffee",
//   jute: "Jute",
// };

// export function MarketAnalysis() {
//   const navigate = useNavigate();

//   // STEP 1: store predicted crop
//   const [predictedCrop, setPredictedCrop] = useState("");

//   // STEP 1: read predicted crop
//   useEffect(() => {
//     const crop = localStorage.getItem("recommendedCrop");
//     if (crop) {
//       setPredictedCrop(crop.toLowerCase());
//     }
//   }, []);

//   // STEP 2: convert predicted crop → commodity
//   const commodity = cropMapping[predictedCrop] || "Rice";

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "buy":
//         return "bg-green-100 text-green-800 border-green-300";
//       case "sell":
//         return "bg-red-100 text-red-800 border-red-300";
//       case "hold":
//         return "bg-yellow-100 text-yellow-800 border-yellow-300";
//       default:
//         return "bg-gray-100 text-gray-800 border-gray-300";
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case "buy":
//         return <TrendingUp className="w-3 h-3" />;
//       case "sell":
//         return <TrendingDown className="w-3 h-3" />;
//       case "hold":
//         return <Minus className="w-3 h-3" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <Button variant="ghost" onClick={() => navigate("/input")} className="gap-2">
//             <ArrowLeft className="w-4 h-4" />
//             Back
//           </Button>

//           <div className="text-center flex-1">
//             <h1 className="text-3xl text-primary">Market Analysis</h1>
//             <p className="text-muted-foreground">Real-time commodity price trends</p>
//           </div>

//           <Button
//             variant="outline"
//             onClick={() => navigate("/support")}
//             className="border-primary text-primary"
//           >
//             Support
//           </Button>
//         </div>

//         {/* Bento Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

//           {/* 7-Day Price Trends */}
//           <Card className="lg:col-span-8 p-6 border-border">
//             <div className="flex items-center gap-2 mb-6">
//               <LineChart className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">7-Day Price Trends</h2>
//             </div>

//             <ResponsiveContainer width="100%" height={300}>
//               <AreaChart data={priceData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e8e3d9" />
//                 <XAxis dataKey="day" stroke="#6b7c6e" />
//                 <YAxis stroke="#6b7c6e" />
//                 <Tooltip />

//                 <Area type="monotone" dataKey="wheat" stroke="#2f5233" fillOpacity={0.2} />
//                 <Area type="monotone" dataKey="rice" stroke="#4a7c4e" fillOpacity={0.2} />
//                 <Area type="monotone" dataKey="corn" stroke="#d4a574" fillOpacity={0.2} />
//               </AreaChart>
//             </ResponsiveContainer>
//           </Card>

//           {/* Quick Stats */}
//           <div className="lg:col-span-4 space-y-6">
//             <Card className="p-6">
//               <div className="text-sm text-muted-foreground mb-2">Average Price</div>
//               <div className="text-3xl text-primary mb-1">₹248</div>
//               <div className="flex items-center gap-1 text-sm text-green-600">
//                 <TrendingUp className="w-4 h-4" />
//                 +12.5% this week
//               </div>
//             </Card>

//             <Card className="p-6">
//               <div className="text-sm text-muted-foreground mb-2">Market Volume</div>
//               <div className="text-3xl text-primary mb-1">1.2M</div>
//               <div className="text-sm text-muted-foreground">tons traded today</div>
//             </Card>

//             <Card className="p-6">
//               <div className="text-sm text-muted-foreground mb-2">Active Traders</div>
//               <div className="text-3xl text-primary mb-1">8,547</div>
//               <div className="text-sm text-muted-foreground">online now</div>
//             </Card>
//           </div>

//           {/* Commodity Status */}
//           <Card className="lg:col-span-12 p-6 border-border">
//             <h2 className="text-xl text-primary mb-4">Commodity Status</h2>

//             <div className="space-y-3">
//               {crops.map((crop) => (
//                 <div
//                   key={crop.name}
//                   className="flex items-center justify-between p-4 bg-accent/30 rounded-xl border border-border"
//                 >
//                   <div>
//                     <div className="font-medium text-foreground">{crop.name}</div>
//                     <div className="text-sm text-muted-foreground">
//                       ₹{crop.price}/quintal
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <div
//                       className={`text-sm ${
//                         crop.change >= 0 ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       {crop.change >= 0 ? "+" : ""}
//                       {crop.change}%
//                     </div>

//                     <Badge
//                       className={`${getStatusColor(
//                         crop.status
//                       )} capitalize flex items-center gap-1`}
//                     >
//                       {getStatusIcon(crop.status)}
//                       {crop.status}
//                     </Badge>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Card>

//         </div>
//       </div>
//     </div>
//   );
// }




// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Button } from "../components/ui/button";
// import { Card } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import {
//   AreaChart,
//   Area,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { ArrowLeft, TrendingUp, TrendingDown, Minus, BarChart3, LineChart } from "lucide-react";

// // Mock data for 7-day price trends
// const priceData = [
//   { day: "Mon", wheat: 240, rice: 180, corn: 160 },
//   { day: "Tue", wheat: 245, rice: 185, corn: 165 },
//   { day: "Wed", wheat: 250, rice: 175, corn: 170 },
//   { day: "Thu", wheat: 255, rice: 190, corn: 168 },
//   { day: "Fri", wheat: 265, rice: 195, corn: 175 },
//   { day: "Sat", wheat: 270, rice: 200, corn: 180 },
//   { day: "Sun", wheat: 275, rice: 205, corn: 185 },
// ];

// // Mock data for 6-month comparison
// const monthlyData = [
//   { month: "Sep", price: 220 },
//   { month: "Oct", price: 235 },
//   { month: "Nov", price: 245 },
//   { month: "Dec", price: 250 },
//   { month: "Jan", price: 260 },
//   { month: "Feb", price: 275 },
// ];

// const crops = [
//   { name: "Wheat", price: 275, change: 15.9, status: "buy" },
//   { name: "Rice", price: 205, change: 13.9, status: "buy" },
//   { name: "Corn", price: 185, change: 15.6, status: "buy" },
//   { name: "Soybeans", price: 420, change: -2.3, status: "sell" },
//   { name: "Cotton", price: 195, change: 0.5, status: "hold" },
//   { name: "Barley", price: 165, change: 8.2, status: "buy" },
// ];

// // STEP 2: Crop → Commodity Mapping
// const cropMapping: any = {
//   rice: "Rice",
//   maize: "Maize",
//   cotton: "Cotton",
//   chickpea: "Gram",
//   pigeonpeas: "Arhar",
//   mungbean: "Green Gram",
//   blackgram: "Black Gram",
//   lentil: "Lentil",
//   kidneybeans: "Gram",
//   mothbeans: "Gram",
//   banana: "Banana",
//   mango: "Mango",
//   orange: "Orange",
//   papaya: "Papaya",
//   pomegranate: "Pomegranate",
//   grapes: "Grapes",
//   apple: "Apple",
//   watermelon: "Water Melon",
//   muskmelon: "Musk Melon",
//   coconut: "Coconut",
//   coffee: "Coffee",
//   jute: "Jute",
// };

// export function MarketAnalysis() {
//   const navigate = useNavigate();

//   // STEP 1
//   const [predictedCrop, setPredictedCrop] = useState("");

//   useEffect(() => {
//     const crop = localStorage.getItem("recommendedCrop");
//     if (crop) {
//       setPredictedCrop(crop.toLowerCase());
//     }
//   }, []);

//   // STEP 2
//   const commodity = cropMapping[predictedCrop] || "Rice";

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "buy":
//         return "bg-green-100 text-green-800 border-green-300";
//       case "sell":
//         return "bg-red-100 text-red-800 border-red-300";
//       case "hold":
//         return "bg-yellow-100 text-yellow-800 border-yellow-300";
//       default:
//         return "bg-gray-100 text-gray-800 border-gray-300";
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case "buy":
//         return <TrendingUp className="w-3 h-3" />;
//       case "sell":
//         return <TrendingDown className="w-3 h-3" />;
//       case "hold":
//         return <Minus className="w-3 h-3" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <Button variant="ghost" onClick={() => navigate("/input")} className="gap-2">
//             <ArrowLeft className="w-4 h-4" />
//             Back
//           </Button>

//           <div className="text-center flex-1">
//             <h1 className="text-3xl text-primary">Market Analysis</h1>
//             <p className="text-muted-foreground">
//               Real-time commodity price trends
//             </p>
//           </div>

//           <Button
//             variant="outline"
//             onClick={() => navigate("/support")}
//             className="border-primary text-primary"
//           >
//             Support
//           </Button>
//         </div>

//         {/* Bento Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

//           {/* 7-Day Price Trends */}
//           <Card className="lg:col-span-8 p-6 border-border">
//             <div className="flex items-center gap-2 mb-6">
//               <LineChart className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">7-Day Price Trends</h2>
//             </div>

//             <ResponsiveContainer width="100%" height={300}>
//               <AreaChart data={priceData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e8e3d9" />
//                 <XAxis dataKey="day" stroke="#6b7c6e" />
//                 <YAxis stroke="#6b7c6e" />
//                 <Tooltip />
//                 <Area type="monotone" dataKey="wheat" stroke="#2f5233" fillOpacity={0.3}/>
//                 <Area type="monotone" dataKey="rice" stroke="#4a7c4e" fillOpacity={0.3}/>
//                 <Area type="monotone" dataKey="corn" stroke="#d4a574" fillOpacity={0.3}/>
//               </AreaChart>
//             </ResponsiveContainer>
//           </Card>

//           {/* 6-Month Comparison */}
//           <Card className="lg:col-span-7 p-6 border-border">
//             <div className="flex items-center gap-2 mb-6">
//               <BarChart3 className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">6-Month Price Comparison</h2>
//             </div>

//             <ResponsiveContainer width="100%" height={280}>
//               <BarChart data={monthlyData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e8e3d9" />
//                 <XAxis dataKey="month" stroke="#6b7c6e" />
//                 <YAxis stroke="#6b7c6e" />
//                 <Tooltip />
//                 <Bar dataKey="price" fill="#2f5233" radius={[8,8,0,0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </Card>

//           {/* Commodity Status */}
//           <Card className="lg:col-span-5 p-6 border-border">
//             <h2 className="text-xl text-primary mb-4">Commodity Status</h2>

//             <div className="space-y-3">
//               {crops.map((crop) => (
//                 <div
//                   key={crop.name}
//                   className="flex items-center justify-between p-4 bg-accent/30 rounded-xl border border-border"
//                 >
//                   <div>
//                     <div className="font-medium text-foreground">{crop.name}</div>
//                     <div className="text-sm text-muted-foreground">
//                       ₹{crop.price}/quintal
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <div
//                       className={`text-sm ${
//                         crop.change >= 0 ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       {crop.change >= 0 ? "+" : ""}
//                       {crop.change}%
//                     </div>

//                     <Badge
//                       className={`${getStatusColor(crop.status)} capitalize flex items-center gap-1`}
//                     >
//                       {getStatusIcon(crop.status)}
//                       {crop.status}
//                     </Badge>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Card>

//         </div>
//       </div>
//     </div>
//   );
// }



// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Button } from "../components/ui/button";
// import { Card } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import {
//   AreaChart,
//   Area,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { ArrowLeft, TrendingUp, TrendingDown, Minus, BarChart3, LineChart } from "lucide-react";

// // Mock data for 7-day price trends
// const priceData = [
//   { day: "Mon", wheat: 240, rice: 180, corn: 160 },
//   { day: "Tue", wheat: 245, rice: 185, corn: 165 },
//   { day: "Wed", wheat: 250, rice: 175, corn: 170 },
//   { day: "Thu", wheat: 255, rice: 190, corn: 168 },
//   { day: "Fri", wheat: 265, rice: 195, corn: 175 },
//   { day: "Sat", wheat: 270, rice: 200, corn: 180 },
//   { day: "Sun", wheat: 275, rice: 205, corn: 185 },
// ];

// // Mock data for 6-month comparison
// const monthlyData = [
//   { month: "Sep", price: 220 },
//   { month: "Oct", price: 235 },
//   { month: "Nov", price: 245 },
//   { month: "Dec", price: 250 },
//   { month: "Jan", price: 260 },
//   { month: "Feb", price: 275 },
// ];

// const crops = [
//   { name: "Wheat", price: 275, change: 15.9, status: "buy" },
//   { name: "Rice", price: 205, change: 13.9, status: "buy" },
//   { name: "Corn", price: 185, change: 15.6, status: "buy" },
//   { name: "Soybeans", price: 420, change: -2.3, status: "sell" },
//   { name: "Cotton", price: 195, change: 0.5, status: "hold" },
//   { name: "Barley", price: 165, change: 8.2, status: "buy" },
// ];

// // Crop → Commodity Mapping
// const cropMapping: any = {
//   rice: "Rice",
//   maize: "Maize",
//   cotton: "Cotton",
//   chickpea: "Gram",
//   pigeonpeas: "Arhar",
//   mungbean: "Green Gram",
//   blackgram: "Black Gram",
//   lentil: "Lentil",
//   kidneybeans: "Gram",
//   mothbeans: "Gram",
//   banana: "Banana",
//   mango: "Mango",
//   orange: "Orange",
//   papaya: "Papaya",
//   pomegranate: "Pomegranate",
//   grapes: "Grapes",
//   apple: "Apple",
//   watermelon: "Water Melon",
//   muskmelon: "Musk Melon",
//   coconut: "Coconut",
//   coffee: "Coffee",
//   jute: "Jute",
// };

// export function MarketAnalysis() {
//   const navigate = useNavigate();

//   const [predictedCrop, setPredictedCrop] = useState("");

//   useEffect(() => {
//     const crop = localStorage.getItem("recommendedCrop");
//     if (crop) {
//       setPredictedCrop(crop.toLowerCase());
//     }
//   }, []);

//   const commodity = cropMapping[predictedCrop] || "Rice";

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "buy":
//         return "bg-green-100 text-green-800 border-green-300";
//       case "sell":
//         return "bg-red-100 text-red-800 border-red-300";
//       case "hold":
//         return "bg-yellow-100 text-yellow-800 border-yellow-300";
//       default:
//         return "bg-gray-100 text-gray-800 border-gray-300";
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case "buy":
//         return <TrendingUp className="w-3 h-3" />;
//       case "sell":
//         return <TrendingDown className="w-3 h-3" />;
//       case "hold":
//         return <Minus className="w-3 h-3" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <Button variant="ghost" onClick={() => navigate("/input")} className="gap-2">
//             <ArrowLeft className="w-4 h-4" />
//             Back
//           </Button>

//           <div className="text-center flex-1">
//             <h1 className="text-3xl text-primary">Market Analysis</h1>
//             <p className="text-muted-foreground">
//               Real-time commodity price trends
//             </p>
//           </div>

//           <Button
//             variant="outline"
//             onClick={() => navigate("/support")}
//             className="border-primary text-primary"
//           >
//             Support
//           </Button>
//         </div>

//         {/* Bento Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

//           {/* 7-Day Price Trends */}
//           <Card className="lg:col-span-8 p-6 border-border">
//             <div className="flex items-center gap-2 mb-6">
//               <LineChart className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">7-Day Price Trends</h2>
//             </div>

//             <ResponsiveContainer width="100%" height={300}>
//               <AreaChart data={priceData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e8e3d9" />
//                 <XAxis dataKey="day" stroke="#6b7c6e" />
//                 <YAxis stroke="#6b7c6e" />
//                 <Tooltip />
//                 <Area type="monotone" dataKey="wheat" stroke="#2f5233" fillOpacity={0.3}/>
//                 <Area type="monotone" dataKey="rice" stroke="#4a7c4e" fillOpacity={0.3}/>
//                 <Area type="monotone" dataKey="corn" stroke="#d4a574" fillOpacity={0.3}/>
//               </AreaChart>
//             </ResponsiveContainer>
//           </Card>

//           {/* Quick Stats */}
//           <div className="lg:col-span-4 space-y-6">
//             <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">
//               <div className="text-sm text-muted-foreground mb-2">Average Price</div>
//               <div className="text-3xl text-primary mb-1">₹248</div>
//               <div className="flex items-center gap-1 text-sm text-green-600">
//                 <TrendingUp className="w-4 h-4" />
//                 <span>+12.5% this week</span>
//               </div>
//             </Card>

//             <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">
//               <div className="text-sm text-muted-foreground mb-2">Market Volume</div>
//               <div className="text-3xl text-primary mb-1">1.2M</div>
//               <div className="text-sm text-muted-foreground">tons traded today</div>
//             </Card>

//             <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">
//               <div className="text-sm text-muted-foreground mb-2">Active Traders</div>
//               <div className="text-3xl text-primary mb-1">8,547</div>
//               <div className="text-sm text-muted-foreground">online now</div>
//             </Card>
//           </div>

//           {/* 6-Month Comparison */}
//           <Card className="lg:col-span-7 p-6 border-border">
//             <div className="flex items-center gap-2 mb-6">
//               <BarChart3 className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">6-Month Price Comparison</h2>
//             </div>

//             <ResponsiveContainer width="100%" height={280}>
//               <BarChart data={monthlyData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e8e3d9" />
//                 <XAxis dataKey="month" stroke="#6b7c6e" />
//                 <YAxis stroke="#6b7c6e" />
//                 <Tooltip />
//                 <Bar dataKey="price" fill="#2f5233" radius={[8,8,0,0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </Card>

//           {/* Commodity Status */}
//           <Card className="lg:col-span-5 p-6 border-border">
//             <h2 className="text-xl text-primary mb-4">Commodity Status</h2>

//             <div className="space-y-3">
//               {crops.map((crop) => (
//                 <div
//                   key={crop.name}
//                   className="flex items-center justify-between p-4 bg-accent/30 rounded-xl border border-border"
//                 >
//                   <div>
//                     <div className="font-medium text-foreground">{crop.name}</div>
//                     <div className="text-sm text-muted-foreground">
//                       ₹{crop.price}/quintal
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <div
//                       className={`text-sm ${
//                         crop.change >= 0 ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       {crop.change >= 0 ? "+" : ""}
//                       {crop.change}%
//                     </div>

//                     <Badge
//                       className={`${getStatusColor(crop.status)} capitalize flex items-center gap-1`}
//                     >
//                       {getStatusIcon(crop.status)}
//                       {crop.status}
//                     </Badge>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Card>

//         </div>
//       </div>
//     </div>
//   );
// }









// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Button } from "../components/ui/button";
// import { Card } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import {
//   AreaChart,
//   Area,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { ArrowLeft, TrendingUp, TrendingDown, Minus, BarChart3, LineChart } from "lucide-react";

// // Mock data for 7-day price trends
// const priceData = [
//   { day: "Mon", wheat: 240, rice: 180, corn: 160 },
//   { day: "Tue", wheat: 245, rice: 185, corn: 165 },
//   { day: "Wed", wheat: 250, rice: 175, corn: 170 },
//   { day: "Thu", wheat: 255, rice: 190, corn: 168 },
//   { day: "Fri", wheat: 265, rice: 195, corn: 175 },
//   { day: "Sat", wheat: 270, rice: 200, corn: 180 },
//   { day: "Sun", wheat: 275, rice: 205, corn: 185 },
// ];

// // Mock data for 6-month comparison
// const monthlyData = [
//   { month: "Sep", price: 220 },
//   { month: "Oct", price: 235 },
//   { month: "Nov", price: 245 },
//   { month: "Dec", price: 250 },
//   { month: "Jan", price: 260 },
//   { month: "Feb", price: 275 },
// ];

// const crops = [
//   { name: "Wheat", price: 275, change: 15.9, status: "buy" },
//   { name: "Rice", price: 205, change: 13.9, status: "buy" },
//   { name: "Corn", price: 185, change: 15.6, status: "buy" },
//   { name: "Soybeans", price: 420, change: -2.3, status: "sell" },
//   { name: "Cotton", price: 195, change: 0.5, status: "hold" },
//   { name: "Barley", price: 165, change: 8.2, status: "buy" },
// ];

// // Crop → Commodity Mapping
// const cropMapping: any = {
//   rice: "Rice",
//   maize: "Maize",
//   cotton: "Cotton",
//   chickpea: "Gram",
//   pigeonpeas: "Arhar",
//   mungbean: "Green Gram",
//   blackgram: "Black Gram",
//   lentil: "Lentil",
//   kidneybeans: "Gram",
//   mothbeans: "Gram",
//   banana: "Banana",
//   mango: "Mango",
//   orange: "Orange",
//   papaya: "Papaya",
//   pomegranate: "Pomegranate",
//   grapes: "Grapes",
//   apple: "Apple",
//   watermelon: "Water Melon",
//   muskmelon: "Musk Melon",
//   coconut: "Coconut",
//   coffee: "Coffee",
//   jute: "Jute",
// };

// export function MarketAnalysis() {
//   const navigate = useNavigate();

//   // STEP 1: store predicted crop
//   const [predictedCrop, setPredictedCrop] = useState("");

//   // STEP 1: read predicted crop from localStorage
//   useEffect(() => {
//     const crop = localStorage.getItem("recommendedCrop");
//     if (crop) {
//       setPredictedCrop(crop.toLowerCase());
//     }
//   }, []);

//   // STEP 2: convert crop → commodity
//   const commodity = cropMapping[predictedCrop] || "Rice";

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "buy":
//         return "bg-green-100 text-green-800 border-green-300";
//       case "sell":
//         return "bg-red-100 text-red-800 border-red-300";
//       case "hold":
//         return "bg-yellow-100 text-yellow-800 border-yellow-300";
//       default:
//         return "bg-gray-100 text-gray-800 border-gray-300";
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case "buy":
//         return <TrendingUp className="w-3 h-3" />;
//       case "sell":
//         return <TrendingDown className="w-3 h-3" />;
//       case "hold":
//         return <Minus className="w-3 h-3" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <Button
//             variant="ghost"
//             onClick={() => navigate("/input")}
//             className="gap-2"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back
//           </Button>

//           <div className="text-center flex-1">
//             <h1 className="text-3xl text-primary">
//               Market Analysis {predictedCrop && `— ${commodity}`}
//             </h1>
//             <p className="text-muted-foreground">
//               Real-time commodity price trends
//             </p>
//           </div>

//           <Button
//             variant="outline"
//             onClick={() => navigate("/support")}
//             className="border-primary text-primary"
//           >
//             Support
//           </Button>
//         </div>

//         {/* Bento Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

//           {/* 7-Day Price Trends */}
//           <Card className="lg:col-span-8 p-6 border-border">
//             <div className="flex items-center gap-2 mb-6">
//               <LineChart className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">7-Day Price Trends</h2>
//             </div>

//             <ResponsiveContainer width="100%" height={300}>
//               <AreaChart data={priceData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e8e3d9" />
//                 <XAxis dataKey="day" stroke="#6b7c6e" />
//                 <YAxis stroke="#6b7c6e" />
//                 <Tooltip />
//                 <Area type="monotone" dataKey="wheat" stroke="#2f5233" fillOpacity={0.3}/>
//                 <Area type="monotone" dataKey="rice" stroke="#4a7c4e" fillOpacity={0.3}/>
//                 <Area type="monotone" dataKey="corn" stroke="#d4a574" fillOpacity={0.3}/>
//               </AreaChart>
//             </ResponsiveContainer>
//           </Card>

//           {/* Quick Stats */}
//           <div className="lg:col-span-4 space-y-6">
//             <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">
//               <div className="text-sm text-muted-foreground mb-2">Average Price</div>
//               <div className="text-3xl text-primary mb-1">₹248</div>
//               <div className="flex items-center gap-1 text-sm text-green-600">
//                 <TrendingUp className="w-4 h-4" />
//                 <span>+12.5% this week</span>
//               </div>
//             </Card>

//             <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">
//               <div className="text-sm text-muted-foreground mb-2">Market Volume</div>
//               <div className="text-3xl text-primary mb-1">1.2M</div>
//               <div className="text-sm text-muted-foreground">tons traded today</div>
//             </Card>

//             <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">
//               <div className="text-sm text-muted-foreground mb-2">Active Traders</div>
//               <div className="text-3xl text-primary mb-1">8,547</div>
//               <div className="text-sm text-muted-foreground">online now</div>
//             </Card>
//           </div>

//           {/* 6-Month Comparison */}
//           <Card className="lg:col-span-7 p-6 border-border">
//             <div className="flex items-center gap-2 mb-6">
//               <BarChart3 className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">6-Month Price Comparison</h2>
//             </div>

//             <ResponsiveContainer width="100%" height={280}>
//               <BarChart data={monthlyData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e8e3d9" />
//                 <XAxis dataKey="month" stroke="#6b7c6e" />
//                 <YAxis stroke="#6b7c6e" />
//                 <Tooltip />
//                 <Bar dataKey="price" fill="#2f5233" radius={[8,8,0,0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </Card>

//           {/* Commodity Status */}
//           <Card className="lg:col-span-5 p-6 border-border">
//             <h2 className="text-xl text-primary mb-4">Commodity Status</h2>

//             <div className="space-y-3">
//               {crops.map((crop) => (
//                 <div
//                   key={crop.name}
//                   className="flex items-center justify-between p-4 bg-accent/30 rounded-xl border border-border"
//                 >
//                   <div>
//                     <div className="font-medium text-foreground">{crop.name}</div>
//                     <div className="text-sm text-muted-foreground">
//                       ₹{crop.price}/quintal
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <div
//                       className={`text-sm ${
//                         crop.change >= 0 ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       {crop.change >= 0 ? "+" : ""}
//                       {crop.change}%
//                     </div>

//                     <Badge
//                       className={`${getStatusColor(crop.status)} capitalize flex items-center gap-1`}
//                     >
//                       {getStatusIcon(crop.status)}
//                       {crop.status}
//                     </Badge>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Card>

//         </div>
//       </div>
//     </div>
//   );
// }






// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Button } from "../components/ui/button";
// import { Card } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import {
//   AreaChart,
//   Area,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { ArrowLeft, TrendingUp, TrendingDown, Minus, BarChart3, LineChart } from "lucide-react";

// // Mock data for 7-day price trends
// const priceData = [
//   { day: "Mon", wheat: 240, rice: 180, corn: 160 },
//   { day: "Tue", wheat: 245, rice: 185, corn: 165 },
//   { day: "Wed", wheat: 250, rice: 175, corn: 170 },
//   { day: "Thu", wheat: 255, rice: 190, corn: 168 },
//   { day: "Fri", wheat: 265, rice: 195, corn: 175 },
//   { day: "Sat", wheat: 270, rice: 200, corn: 180 },
//   { day: "Sun", wheat: 275, rice: 205, corn: 185 },
// ];

// // Mock data for 6-month comparison
// const monthlyData = [
//   { month: "Sep", price: 220 },
//   { month: "Oct", price: 235 },
//   { month: "Nov", price: 245 },
//   { month: "Dec", price: 250 },
//   { month: "Jan", price: 260 },
//   { month: "Feb", price: 275 },
// ];

// // Dataset crops
// const crops = [
//   { name: "Rice", price: 205, change: 13.9, status: "buy" },
//   { name: "Maize", price: 180, change: 6.1, status: "buy" },
//   { name: "Chickpea", price: 310, change: -1.2, status: "sell" },
//   { name: "Pigeonpeas", price: 295, change: 2.4, status: "buy" },
//   { name: "Mungbean", price: 240, change: 3.6, status: "buy" },
//   { name: "Blackgram", price: 260, change: 1.8, status: "buy" },
// ];

// // Crop → Commodity Mapping
// const cropMapping: any = {
//   rice: "Rice",
//   maize: "Maize",
//   cotton: "Cotton",
//   chickpea: "Chickpea",
//   pigeonpeas: "Pigeonpeas",
//   mungbean: "Mungbean",
//   blackgram: "Blackgram",
//   lentil: "Lentil",
//   kidneybeans: "Kidneybeans",
//   mothbeans: "Mothbeans",
//   banana: "Banana",
//   mango: "Mango",
//   orange: "Orange",
//   papaya: "Papaya",
//   pomegranate: "Pomegranate",
//   grapes: "Grapes",
//   apple: "Apple",
//   watermelon: "Watermelon",
//   muskmelon: "Muskmelon",
//   coconut: "Coconut",
//   coffee: "Coffee",
//   jute: "Jute",
// };

// export function MarketAnalysis() {
//   const navigate = useNavigate();

//   const [predictedCrop, setPredictedCrop] = useState("");

//   useEffect(() => {
//     const crop = localStorage.getItem("recommendedCrop");
//     if (crop) {
//       setPredictedCrop(crop.toLowerCase());
//     }
//   }, []);

//   const commodity = cropMapping[predictedCrop] || "";

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "buy":
//         return "bg-green-100 text-green-800 border-green-300";
//       case "sell":
//         return "bg-red-100 text-red-800 border-red-300";
//       case "hold":
//         return "bg-yellow-100 text-yellow-800 border-yellow-300";
//       default:
//         return "bg-gray-100 text-gray-800 border-gray-300";
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case "buy":
//         return <TrendingUp className="w-3 h-3" />;
//       case "sell":
//         return <TrendingDown className="w-3 h-3" />;
//       case "hold":
//         return <Minus className="w-3 h-3" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <Button variant="ghost" onClick={() => navigate("/input")} className="gap-2">
//             <ArrowLeft className="w-4 h-4" />
//             Back
//           </Button>

//           <div className="text-center flex-1">
//             <h1 className="text-3xl text-primary">
//               Market Analysis {commodity && `— ${commodity}`}
//             </h1>
//             <p className="text-muted-foreground">
//               Real-time commodity price trends
//             </p>
//           </div>

//           <Button
//             variant="outline"
//             onClick={() => navigate("/support")}
//             className="border-primary text-primary"
//           >
//             Support
//           </Button>
//         </div>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

//           {/* 7-Day Chart */}
//           <Card className="lg:col-span-8 p-6 border-border">
//             <div className="flex items-center gap-2 mb-6">
//               <LineChart className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">7-Day Price Trends</h2>
//             </div>

//             <ResponsiveContainer width="100%" height={300}>
//               <AreaChart data={priceData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e8e3d9" />
//                 <XAxis dataKey="day" stroke="#6b7c6e" />
//                 <YAxis stroke="#6b7c6e" />
//                 <Tooltip />
//                 <Area type="monotone" dataKey="wheat" stroke="#2f5233" fillOpacity={0.3}/>
//                 <Area type="monotone" dataKey="rice" stroke="#4a7c4e" fillOpacity={0.3}/>
//                 <Area type="monotone" dataKey="corn" stroke="#d4a574" fillOpacity={0.3}/>
//               </AreaChart>
//             </ResponsiveContainer>
//           </Card>

//           {/* Quick Stats */}
//           <div className="lg:col-span-4 space-y-6">
//             <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">
//               <div className="text-sm text-muted-foreground mb-2">Average Price</div>
//               <div className="text-3xl text-primary mb-1">₹248</div>
//               <div className="flex items-center gap-1 text-sm text-green-600">
//                 <TrendingUp className="w-4 h-4" />
//                 <span>+12.5% this week</span>
//               </div>
//             </Card>

//             <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">
//               <div className="text-sm text-muted-foreground mb-2">Market Volume</div>
//               <div className="text-3xl text-primary mb-1">1.2M</div>
//               <div className="text-sm text-muted-foreground">tons traded today</div>
//             </Card>

//             <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">
//               <div className="text-sm text-muted-foreground mb-2">Active Traders</div>
//               <div className="text-3xl text-primary mb-1">8,547</div>
//               <div className="text-sm text-muted-foreground">online now</div>
//             </Card>
//           </div>

//           {/* 6-Month Chart */}
//           <Card className="lg:col-span-7 p-6 border-border">
//             <div className="flex items-center gap-2 mb-6">
//               <BarChart3 className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">6-Month Price Comparison</h2>
//             </div>

//             <ResponsiveContainer width="100%" height={280}>
//               <BarChart data={monthlyData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e8e3d9" />
//                 <XAxis dataKey="month" stroke="#6b7c6e" />
//                 <YAxis stroke="#6b7c6e" />
//                 <Tooltip />
//                 <Bar dataKey="price" fill="#2f5233" radius={[8,8,0,0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </Card>

//           {/* Commodity Status */}
//           <Card className="lg:col-span-5 p-6 border-border">
//             <h2 className="text-xl text-primary mb-4">Commodity Status</h2>

//             <div className="space-y-3">
//               {crops.map((crop, index) => {

//                 const isPredicted =
//                   crop.name.toLowerCase() === commodity.toLowerCase();

//                 return (
//                   <div
//                     key={crop.name}
//                     className={`flex items-center justify-between p-4 rounded-xl border ${
//                       isPredicted
//                         ? "bg-green-50 border-green-400 shadow-md"
//                         : "bg-accent/30 border-border"
//                     }`}
//                   >
//                     <div>
//                       <div
//                         className={`${
//                           isPredicted
//                             ? "font-bold text-lg"
//                             : "font-medium"
//                         } text-foreground`}
//                       >
//                         {index + 1}. {crop.name}
//                       </div>

//                       <div className="text-sm text-muted-foreground">
//                         ₹{crop.price}/quintal
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <div
//                         className={`text-sm ${
//                           crop.change >= 0
//                             ? "text-green-600"
//                             : "text-red-600"
//                         }`}
//                       >
//                         {crop.change >= 0 ? "+" : ""}
//                         {crop.change}%
//                       </div>

//                       <Badge
//                         className={`${getStatusColor(
//                           crop.status
//                         )} capitalize flex items-center gap-1`}
//                       >
//                         {getStatusIcon(crop.status)}
//                         {crop.status}
//                       </Badge>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </Card>

//         </div>
//       </div>
//     </div>
//   );
// }









// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Button } from "../components/ui/button";
// import { Card } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import {
//   AreaChart,
//   Area,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { ArrowLeft, TrendingUp, TrendingDown, Minus, BarChart3, LineChart } from "lucide-react";

// // Mock data for 7-day price trends
// const priceData = [
//   { day: "Mon", wheat: 240, rice: 180, corn: 160 },
//   { day: "Tue", wheat: 245, rice: 185, corn: 165 },
//   { day: "Wed", wheat: 250, rice: 175, corn: 170 },
//   { day: "Thu", wheat: 255, rice: 190, corn: 168 },
//   { day: "Fri", wheat: 265, rice: 195, corn: 175 },
//   { day: "Sat", wheat: 270, rice: 200, corn: 180 },
//   { day: "Sun", wheat: 275, rice: 205, corn: 185 },
// ];

// // Mock data for 6-month comparison
// const monthlyData = [
//   { month: "Sep", price: 220 },
//   { month: "Oct", price: 235 },
//   { month: "Nov", price: 245 },
//   { month: "Dec", price: 250 },
//   { month: "Jan", price: 260 },
//   { month: "Feb", price: 275 },
// ];

// // Base crops
// const crops = [
//   { name: "Rice", price: 205, change: 13.9, status: "buy" },
//   { name: "Maize", price: 180, change: 6.1, status: "buy" },
//   { name: "Chickpea", price: 310, change: -1.2, status: "sell" },
//   { name: "Pigeonpeas", price: 295, change: 2.4, status: "buy" },
//   { name: "Mungbean", price: 240, change: 3.6, status: "buy" },
//   { name: "Blackgram", price: 260, change: 1.8, status: "buy" },
// ];

// // Crop → Commodity Mapping
// const cropMapping: any = {
//   rice: "Rice",
//   maize: "Maize",
//   cotton: "Cotton",
//   chickpea: "Chickpea",
//   pigeonpeas: "Pigeonpeas",
//   mungbean: "Mungbean",
//   blackgram: "Blackgram",
//   lentil: "Lentil",
//   kidneybeans: "Kidneybeans",
//   mothbeans: "Mothbeans",
//   banana: "Banana",
//   mango: "Mango",
//   orange: "Orange",
//   papaya: "Papaya",
//   pomegranate: "Pomegranate",
//   grapes: "Grapes",
//   apple: "Apple",
//   watermelon: "Watermelon",
//   muskmelon: "Muskmelon",
//   coconut: "Coconut",
//   coffee: "Coffee",
//   jute: "Jute",
// };

// export function MarketAnalysis() {
//   const navigate = useNavigate();
//   const [predictedCrop, setPredictedCrop] = useState("");

//   useEffect(() => {
//     const crop = localStorage.getItem("recommendedCrop");
//     if (crop) setPredictedCrop(crop.toLowerCase());
//   }, []);

//   const commodity = cropMapping[predictedCrop] || "";

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "buy":
//         return "bg-green-100 text-green-800 border-green-300";
//       case "sell":
//         return "bg-red-100 text-red-800 border-red-300";
//       case "hold":
//         return "bg-yellow-100 text-yellow-800 border-yellow-300";
//       default:
//         return "bg-gray-100 text-gray-800 border-gray-300";
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case "buy":
//         return <TrendingUp className="w-3 h-3" />;
//       case "sell":
//         return <TrendingDown className="w-3 h-3" />;
//       case "hold":
//         return <Minus className="w-3 h-3" />;
//       default:
//         return null;
//     }
//   };

//   // 🔹 Insert predicted crop if missing
//   let displayCrops = [...crops];

//   if (
//     commodity &&
//     !displayCrops.some(
//       (crop) => crop.name.toLowerCase() === commodity.toLowerCase()
//     )
//   ) {
//     displayCrops.unshift({
//       name: commodity,
//       price: 320,
//       change: 18.5,
//       status: "buy",
//     });
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <Button variant="ghost" onClick={() => navigate("/input")} className="gap-2">
//             <ArrowLeft className="w-4 h-4" />
//             Back
//           </Button>

//           <div className="text-center flex-1">
//             <h1 className="text-3xl text-primary">
//               Market Analysis {commodity && `— ${commodity}`}
//             </h1>
//             <p className="text-muted-foreground">
//               Real-time commodity price trends
//             </p>
//           </div>

//           <Button
//             variant="outline"
//             onClick={() => navigate("/support")}
//             className="border-primary text-primary"
//           >
//             Support
//           </Button>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

//           {/* 7-Day Chart */}
//           <Card className="lg:col-span-8 p-6 border-border">
//             <div className="flex items-center gap-2 mb-6">
//               <LineChart className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">7-Day Price Trends</h2>
//             </div>

//             <ResponsiveContainer width="100%" height={300}>
//               <AreaChart data={priceData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e8e3d9" />
//                 <XAxis dataKey="day" stroke="#6b7c6e" />
//                 <YAxis stroke="#6b7c6e" />
//                 <Tooltip />
//                 <Area type="monotone" dataKey="wheat" stroke="#2f5233" fillOpacity={0.3}/>
//                 <Area type="monotone" dataKey="rice" stroke="#4a7c4e" fillOpacity={0.3}/>
//                 <Area type="monotone" dataKey="corn" stroke="#d4a574" fillOpacity={0.3}/>
//               </AreaChart>
//             </ResponsiveContainer>
//           </Card>

//           {/* Quick Stats */}
//           <div className="lg:col-span-4 space-y-6">
//             <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">
//               <div className="text-sm text-muted-foreground mb-2">Average Price</div>
//               <div className="text-3xl text-primary mb-1">₹248</div>
//               <div className="flex items-center gap-1 text-sm text-green-600">
//                 <TrendingUp className="w-4 h-4" />
//                 <span>+12.5% this week</span>
//               </div>
//             </Card>

//             <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">
//               <div className="text-sm text-muted-foreground mb-2">Market Volume</div>
//               <div className="text-3xl text-primary mb-1">1.2M</div>
//               <div className="text-sm text-muted-foreground">tons traded today</div>
//             </Card>

//             <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">
//               <div className="text-sm text-muted-foreground mb-2">Active Traders</div>
//               <div className="text-3xl text-primary mb-1">8,547</div>
//               <div className="text-sm text-muted-foreground">online now</div>
//             </Card>
//           </div>

//           {/* 6-Month Chart */}
//           <Card className="lg:col-span-7 p-6 border-border">
//             <div className="flex items-center gap-2 mb-6">
//               <BarChart3 className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">6-Month Price Comparison</h2>
//             </div>

//             <ResponsiveContainer width="100%" height={280}>
//               <BarChart data={monthlyData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e8e3d9" />
//                 <XAxis dataKey="month" stroke="#6b7c6e" />
//                 <YAxis stroke="#6b7c6e" />
//                 <Tooltip />
//                 <Bar dataKey="price" fill="#2f5233" radius={[8,8,0,0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </Card>

//           {/* Commodity Status */}
//           <Card className="lg:col-span-5 p-6 border-border">
//             <h2 className="text-xl text-primary mb-4">Commodity Status</h2>

//             <div className="space-y-3">
//               {displayCrops.slice(0,6).map((crop, index) => {

//                 const isPredicted =
//                   crop.name.toLowerCase() === commodity.toLowerCase();

//                 return (
//                   <div
//                     key={crop.name}
//                     className={`flex items-center justify-between p-4 rounded-xl border ${
//                       isPredicted
//                         ? "bg-green-50 border-green-400 shadow-md"
//                         : "bg-accent/30 border-border"
//                     }`}
//                   >
//                     <div>
//                       <div className={`${isPredicted ? "font-bold text-lg" : "font-medium"} text-foreground`}>
//                         {index + 1}. {crop.name}
//                       </div>

//                       <div className="text-sm text-muted-foreground">
//                         ₹{crop.price}/quintal
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <div
//                         className={`text-sm ${
//                           crop.change >= 0
//                             ? "text-green-600"
//                             : "text-red-600"
//                         }`}
//                       >
//                         {crop.change >= 0 ? "+" : ""}
//                         {crop.change}%
//                       </div>

//                       <Badge
//                         className={`${getStatusColor(crop.status)} capitalize flex items-center gap-1`}
//                       >
//                         {getStatusIcon(crop.status)}
//                         {crop.status}
//                       </Badge>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </Card>

//         </div>
//       </div>
//     </div>
//   );
// }




// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Button } from "../components/ui/button";
// import { Card } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import {
//   AreaChart,
//   Area,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { ArrowLeft, TrendingUp, TrendingDown, Minus, BarChart3, LineChart } from "lucide-react";

// export function MarketAnalysis() {
//   const navigate = useNavigate();

//   const [predictedCrop, setPredictedCrop] = useState("");
//   const [marketData, setMarketData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const crop = localStorage.getItem("recommendedCrop");

//     if (!crop) return;

//     const lowerCrop = crop.toLowerCase();
//     setPredictedCrop(lowerCrop);

//     fetch(`http://localhost:8000/market/${lowerCrop}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setMarketData(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Market API error:", err);
//         setLoading(false);
//       });

//   }, []);

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "buy":
//         return "bg-green-100 text-green-800 border-green-300";
//       case "sell":
//         return "bg-red-100 text-red-800 border-red-300";
//       case "hold":
//         return "bg-yellow-100 text-yellow-800 border-yellow-300";
//       default:
//         return "bg-gray-100 text-gray-800 border-gray-300";
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case "buy":
//         return <TrendingUp className="w-3 h-3" />;
//       case "sell":
//         return <TrendingDown className="w-3 h-3" />;
//       case "hold":
//         return <Minus className="w-3 h-3" />;
//       default:
//         return null;
//     }
//   };

//   if (loading || !marketData) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Loading market data...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}

//         <div className="flex items-center justify-between mb-8">
//           <Button variant="ghost" onClick={() => navigate("/input")} className="gap-2">
//             <ArrowLeft className="w-4 h-4" />
//             Back
//           </Button>

//           <div className="text-center flex-1">
//             <h1 className="text-3xl text-primary">
//               Market Analysis — {predictedCrop.charAt(0).toUpperCase() + predictedCrop.slice(1)}
//             </h1>
//             <p className="text-muted-foreground">
//               Real-time commodity price trends
//             </p>
//           </div>

//           <Button
//             variant="outline"
//             onClick={() => navigate("/support")}
//             className="border-primary text-primary"
//           >
//             Support
//           </Button>
//         </div>

//         {/* Grid */}

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

//           {/* 7 Day Chart */}

//           <Card className="lg:col-span-8 p-6 border-border">

//             <div className="flex items-center gap-2 mb-6">
//               <LineChart className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">7-Day Price Trends</h2>
//             </div>

//             <ResponsiveContainer width="100%" height={300}>
//               <AreaChart data={marketData.price_trend}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e8e3d9" />
//                 <XAxis dataKey="day" stroke="#6b7c6e" />
//                 <YAxis stroke="#6b7c6e" />
//                 <Tooltip />
//                 <Area
//                   type="monotone"
//                   dataKey="price"
//                   stroke="#2f5233"
//                   fill="#2f5233"
//                   fillOpacity={0.25}
//                 />
//               </AreaChart>
//             </ResponsiveContainer>

//           </Card>

//           {/* Quick Stats */}

//           <div className="lg:col-span-4 space-y-6">

//             <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">

//               <div className="text-sm text-muted-foreground mb-2">
//                 Average Price
//               </div>

//               <div className="text-3xl text-primary mb-1">
//                 ₹{marketData.average_price}
//               </div>

//               <div className="flex items-center gap-1 text-sm text-green-600">
//                 <TrendingUp className="w-4 h-4" />
//                 <span>Live mandi average</span>
//               </div>

//             </Card>

//             <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">

//               <div className="text-sm text-muted-foreground mb-2">
//                 Market Volume
//               </div>

//               <div className="text-3xl text-primary mb-1">
//                 {marketData.market_volume}
//               </div>

//               <div className="text-sm text-muted-foreground">
//                 tons traded today
//               </div>

//             </Card>

//             <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">

//               <div className="text-sm text-muted-foreground mb-2">
//                 Active Traders
//               </div>

//               <div className="text-3xl text-primary mb-1">
//                 {marketData.active_traders}
//               </div>

//               <div className="text-sm text-muted-foreground">
//                 online now
//               </div>

//             </Card>

//           </div>

//           {/* 6 Month Chart */}

//           <Card className="lg:col-span-7 p-6 border-border">

//             <div className="flex items-center gap-2 mb-6">
//               <BarChart3 className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">6-Month Price Comparison</h2>
//             </div>

//             <ResponsiveContainer width="100%" height={280}>

//               <BarChart data={marketData.monthly_prices}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e8e3d9" />
//                 <XAxis dataKey="month" stroke="#6b7c6e" />
//                 <YAxis stroke="#6b7c6e" />
//                 <Tooltip />
//                 <Bar dataKey="price" fill="#2f5233" radius={[8,8,0,0]} />
//               </BarChart>

//             </ResponsiveContainer>

//           </Card>

//           {/* Commodity Status */}

//           <Card className="lg:col-span-5 p-6 border-border">

//             <h2 className="text-xl text-primary mb-4">
//               Commodity Status
//             </h2>

//             <div className="space-y-3">

//               {marketData.commodity_status.map((crop: any) => {

//                 const isPredicted = crop.recommended;

//                 return (
//                   <div
//                     key={crop.name}
//                     className={`flex items-center justify-between p-4 rounded-xl border ${
//                       isPredicted
//                         ? "bg-green-50 border-green-400 shadow-md"
//                         : "bg-accent/30 border-border"
//                     }`}
//                   >

//                     <div>

//                       <div
//                         className={`${
//                           isPredicted
//                             ? "font-bold text-lg"
//                             : "font-medium"
//                         } text-foreground`}
//                       >
//                         {crop.rank}. {crop.name}
//                       </div>

//                       <div className="text-sm text-muted-foreground">
//                         ₹{crop.price}/quintal
//                       </div>

//                     </div>

//                     <div className="flex items-center gap-3">

//                       <div
//                         className={`text-sm ${
//                           crop.change >= 0
//                             ? "text-green-600"
//                             : "text-red-600"
//                         }`}
//                       >
//                         {crop.change >= 0 ? "+" : ""}
//                         {crop.change}%
//                       </div>

//                       <Badge
//                         className={`${getStatusColor(
//                           crop.status
//                         )} capitalize flex items-center gap-1`}
//                       >
//                         {getStatusIcon(crop.status)}
//                         {crop.status}
//                       </Badge>

//                     </div>

//                   </div>
//                 );

//               })}

//             </div>

//           </Card>

//         </div>
//       </div>
//     </div>
//   );
// }





import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Minus,
  BarChart3,
  LineChart,
} from "lucide-react";

export function MarketAnalysis() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [predictedCrop, setPredictedCrop] = useState("");
  const [marketData, setMarketData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const crop = localStorage.getItem("recommendedCrop");

    if (!crop) return;

    const lowerCrop = crop.toLowerCase();
    setPredictedCrop(lowerCrop);

    fetch(`http://localhost:8000/market/${lowerCrop}`)
      .then((res) => res.json())
      .then((data) => {
        setMarketData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Market API error:", err);
        setLoading(false);
      });
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "buy":
        return "bg-green-100 text-green-800 border-green-300";
      case "sell":
        return "bg-red-100 text-red-800 border-red-300";
      case "hold":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "buy":
        return <TrendingUp className="w-3 h-3" />;
      case "sell":
        return <TrendingDown className="w-3 h-3" />;
      case "hold":
        return <Minus className="w-3 h-3" />;
      default:
        return null;
    }
  };

  if (loading || !marketData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {t("loadingMarket")}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex items-center justify-between mb-8">

          <Button
            variant="ghost"
            onClick={() => navigate("/input")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("back")}
          </Button>

          <div className="text-center flex-1">

            <h1 className="text-3xl text-primary">
              {t("marketAnalysis")} —{" "}
              {predictedCrop.charAt(0).toUpperCase() + predictedCrop.slice(1)}
            </h1>

            <p className="text-muted-foreground">
              {t("realTimeTrends")}
            </p>

          </div>

          <Button
            variant="outline"
            onClick={() => navigate("/support")}
            className="border-primary text-primary"
          >
            {t("support")}
          </Button>

        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* 7 Day Chart */}

          <Card className="lg:col-span-8 p-6 border-border">

            <div className="flex items-center gap-2 mb-6">
              <LineChart className="w-5 h-5 text-primary" />
              <h2 className="text-xl text-primary">
                {t("sevenDayTrend")}
              </h2>
            </div>

            <ResponsiveContainer width="100%" height={300}>

              <AreaChart data={marketData.price_trend}>

                <CartesianGrid strokeDasharray="3 3" stroke="#e8e3d9" />
                <XAxis dataKey="day" stroke="#6b7c6e" />
                <YAxis stroke="#6b7c6e" />
                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="price"
                  stroke="#2f5233"
                  fill="#2f5233"
                  fillOpacity={0.25}
                />

              </AreaChart>

            </ResponsiveContainer>

          </Card>

          {/* Quick Stats */}

          <div className="lg:col-span-4 space-y-6">

            <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">

              <div className="text-sm text-muted-foreground mb-2">
                {t("averagePrice")}
              </div>

              <div className="text-3xl text-primary mb-1">
                ₹{marketData.average_price}
              </div>

              <div className="flex items-center gap-1 text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span>{t("liveMandi")}</span>
              </div>

            </Card>

            <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">

              <div className="text-sm text-muted-foreground mb-2">
                {t("marketVolume")}
              </div>

              <div className="text-3xl text-primary mb-1">
                {marketData.market_volume}
              </div>

              <div className="text-sm text-muted-foreground">
                {t("tonsToday")}
              </div>

            </Card>

            <Card className="p-6 border-border bg-gradient-to-br from-card to-accent/30">

              <div className="text-sm text-muted-foreground mb-2">
                {t("activeTraders")}
              </div>

              <div className="text-3xl text-primary mb-1">
                {marketData.active_traders}
              </div>

              <div className="text-sm text-muted-foreground">
                {t("onlineNow")}
              </div>

            </Card>

          </div>

          {/* 6 Month Chart */}

          <Card className="lg:col-span-7 p-6 border-border">

            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-primary" />
              <h2 className="text-xl text-primary">
                {t("sixMonthComparison")}
              </h2>
            </div>

            <ResponsiveContainer width="100%" height={280}>

              <BarChart data={marketData.monthly_prices}>

                <CartesianGrid strokeDasharray="3 3" stroke="#e8e3d9" />
                <XAxis dataKey="month" stroke="#6b7c6e" />
                <YAxis stroke="#6b7c6e" />
                <Tooltip />

                <Bar
                  dataKey="price"
                  fill="#2f5233"
                  radius={[8, 8, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </Card>

          {/* Commodity Status */}

          <Card className="lg:col-span-5 p-6 border-border">

            <h2 className="text-xl text-primary mb-4">
              {t("commodityStatus")}
            </h2>

            <div className="space-y-3">

              {marketData.commodity_status.map((crop: any) => {

                const isPredicted = crop.recommended;

                return (
                  <div
                    key={crop.name}
                    className={`flex items-center justify-between p-4 rounded-xl border ${
                      isPredicted
                        ? "bg-green-50 border-green-400 shadow-md"
                        : "bg-accent/30 border-border"
                    }`}
                  >

                    <div>

                      <div
                        className={`${
                          isPredicted
                            ? "font-bold text-lg"
                            : "font-medium"
                        } text-foreground`}
                      >
                        {crop.rank}. {crop.name}
                      </div>

                      <div className="text-sm text-muted-foreground">
                        ₹{crop.price}/quintal
                      </div>

                    </div>

                    <div className="flex items-center gap-3">

                      <div
                        className={`text-sm ${
                          crop.change >= 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {crop.change >= 0 ? "+" : ""}
                        {crop.change}%
                      </div>

                      <Badge
                        className={`${getStatusColor(
                          crop.status
                        )} capitalize flex items-center gap-1`}
                      >
                        {getStatusIcon(crop.status)}
                        {crop.status}
                      </Badge>

                    </div>

                  </div>
                );

              })}

            </div>

          </Card>

        </div>
      </div>
    </div>
  );
}