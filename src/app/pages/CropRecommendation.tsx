// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { Button } from "../components/ui/button";
// import { Card } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";

// import {
//   RadarChart,
//   Radar,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
//   ResponsiveContainer,
//   Legend,
//   Tooltip,
// } from "recharts";

// import {
//   ArrowLeft,
//   TrendingUp,
//   Sparkles,
//   CheckCircle2,
// } from "lucide-react";

// /* ---------------- Crop Images ---------------- */

// import appleImg from "../../assets/crops/apple.png";
// import bananaImg from "../../assets/crops/banana.png";
// import blackgramImg from "../../assets/crops/blackgram.png";
// import chickpeaImg from "../../assets/crops/chickpea.png";
// import coconutImg from "../../assets/crops/coconut.png";
// import coffeeImg from "../../assets/crops/coffee.png";
// import cottonImg from "../../assets/crops/cotton.png";
// import grapesImg from "../../assets/crops/grapes.png";
// import juteImg from "../../assets/crops/jute.png";
// import kidneybeansImg from "../../assets/crops/kidneybeans.png";
// import lentilsImg from "../../assets/crops/lentils.png";
// import maizeImg from "../../assets/crops/maize.png";
// import mangoImg from "../../assets/crops/mango.png";
// import mothbeansImg from "../../assets/crops/mothbeans.png";
// import mungbeanImg from "../../assets/crops/mungbean.png";
// import muskmelonImg from "../../assets/crops/muskmelon.png";
// import orangeImg from "../../assets/crops/orange.png";
// import papayaImg from "../../assets/crops/papaya.png";
// import pigeonpeasImg from "../../assets/crops/pigeonpeas.png";
// import pomegranateImg from "../../assets/crops/pomegranate.png";
// import riceImg from "../../assets/crops/rice.png";
// import watermelonImg from "../../assets/crops/watermelon.png";

// /* ---------------- Crop Image Map ---------------- */

// const cropImages: Record<string, string> = {
//   apple: appleImg,
//   banana: bananaImg,
//   blackgram: blackgramImg,
//   chickpea: chickpeaImg,
//   coconut: coconutImg,
//   coffee: coffeeImg,
//   cotton: cottonImg,
//   grapes: grapesImg,
//   jute: juteImg,
//   kidneybeans: kidneybeansImg,
//   lentil: lentilsImg,
//   maize: maizeImg,
//   mango: mangoImg,
//   mothbeans: mothbeansImg,
//   mungbean: mungbeanImg,
//   muskmelon: muskmelonImg,
//   orange: orangeImg,
//   papaya: papayaImg,
//   pigeonpeas: pigeonpeasImg,
//   pomegranate: pomegranateImg,
//   rice: riceImg,
//   watermelon: watermelonImg,
// };

// /* ---------------- Ideal Conditions ---------------- */

// const idealConditions = {
//   nitrogen: 90,
//   phosphorus: 75,
//   potassium: 85,
//   ph: 90,
//   rainfall: 92,
//   temperature: 85,
// };

// export function CropRecommendation() {
//   const navigate = useNavigate();

//   const [crop, setCrop] = useState<string>("");

//   const [soilData, setSoilData] = useState({
//     nitrogen: 0,
//     phosphorus: 0,
//     potassium: 0,
//     ph: 0,
//     rainfall: 0,
//     temperature: 0,
//   });

//   /* ---------------- Load Data ---------------- */

//   useEffect(() => {
//     const predictedCrop = localStorage.getItem("recommendedCrop");

//     if (predictedCrop) {
//       setCrop(predictedCrop.toLowerCase());
//     }

//     const storedSoil = localStorage.getItem("soilData");

//     if (storedSoil) {
//       setSoilData(JSON.parse(storedSoil));
//     }
//   }, []);

//   /* ---------------- Select Crop Image ---------------- */

//   const imageSrc = cropImages[crop] ?? riceImg;

//   /* ---------------- Radar Chart Data ---------------- */

//   const radarData = [
//     {
//       metric: "Nitrogen",
//       yourSoil: soilData.nitrogen,
//       idealConditions: idealConditions.nitrogen,
//     },
//     {
//       metric: "Phosphorus",
//       yourSoil: soilData.phosphorus,
//       idealConditions: idealConditions.phosphorus,
//     },
//     {
//       metric: "Potassium",
//       yourSoil: soilData.potassium,
//       idealConditions: idealConditions.potassium,
//     },
//     {
//       metric: "pH Level",
//       yourSoil: soilData.ph,
//       idealConditions: idealConditions.ph,
//     },
//     {
//       metric: "Rainfall",
//       yourSoil: soilData.rainfall,
//       idealConditions: idealConditions.rainfall,
//     },
//     {
//       metric: "Temperature",
//       yourSoil: soilData.temperature,
//       idealConditions: idealConditions.temperature,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-4 md:p-8">
//       <div className="max-w-6xl mx-auto">

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
//             <h1 className="text-3xl text-primary font-semibold">
//               Crop Recommendation
//             </h1>
//             <p className="text-muted-foreground">
//               AI-powered analysis results
//             </p>
//           </div>

//           <div className="w-20" />
//         </div>

//         {/* Crop Hero */}
//         <Card className="overflow-hidden border-border mb-8 shadow-xl">
//           <div className="grid md:grid-cols-2">

//             <div className="relative h-64 md:h-auto">
//               <img
//                 src={imageSrc}
//                 alt={crop}
//                 className="w-full h-full object-cover"
//               />

//               {crop && (
//                 <div className="absolute top-4 right-4">
//                   <Badge className="bg-primary text-primary-foreground px-4 py-2 text-lg shadow-lg border-0">
//                     <Sparkles className="w-4 h-4 mr-1" />
//                     Recommended
//                   </Badge>
//                 </div>
//               )}
//             </div>

//             <div className="p-8 bg-gradient-to-br from-card to-accent/20">
//               <h2 className="text-4xl text-primary mb-2 capitalize">
//                 {crop || "Rice"}
//               </h2>

//               <p className="text-muted-foreground italic">
//                 AI Predicted Crop
//               </p>

//               <div className="space-y-3 mt-4">
//                 <div className="flex gap-2">
//                   <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
//                   <p>
//                     Based on your soil nutrients and climate data, this crop
//                     is predicted to perform best in your field conditions.
//                   </p>
//                 </div>

//                 <div className="flex gap-2">
//                   <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
//                   <p>
//                     The recommendation is generated using a trained machine
//                     learning model analyzing multiple agricultural parameters.
//                   </p>
//                 </div>

//                 <div className="flex gap-2">
//                   <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
//                   <p>
//                     Consider local farming practices and seasonal conditions
//                     before finalizing crop selection.
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </Card>

//         {/* Soil Compatibility */}
//         <h2 className="text-xl text-primary font-semibold mb-4">
//           Soil Compatibility Analysis
//         </h2>

//         <div className="grid md:grid-cols-2 gap-6 mb-8">

//           {/* Radar Chart */}
//           <Card className="p-6 border-border">
//             <h3 className="text-lg text-primary mb-4">
//               Soil Metrics Comparison
//             </h3>

//             <ResponsiveContainer width="100%" height={320}>
//               <RadarChart data={radarData}>
//                 <PolarGrid />
//                 <PolarAngleAxis dataKey="metric" />
//                 <PolarRadiusAxis domain={[0, 100]} />

//                 <Radar
//                   name="Your Soil"
//                   dataKey="yourSoil"
//                   stroke="#2f5233"
//                   fill="#2f5233"
//                   fillOpacity={0.3}
//                 />

//                 <Radar
//                   name="Ideal Conditions"
//                   dataKey="idealConditions"
//                   stroke="#d4a574"
//                   fill="#d4a574"
//                   fillOpacity={0.3}
//                 />

//                 <Legend />
//                 <Tooltip />
//               </RadarChart>
//             </ResponsiveContainer>
//           </Card>

//           {/* Parameter Analysis */}
//           <Card className="p-6 border-border">
//             <h3 className="text-lg text-primary mb-4">
//               Parameter Analysis
//             </h3>

//             <div className="space-y-3">
//               {radarData.map((param) => (
//                 <div
//                   key={param.metric}
//                   className="flex justify-between bg-accent/30 px-4 py-2 rounded-lg"
//                 >
//                   <span className="text-muted-foreground">
//                     {param.metric}
//                   </span>
//                   <span className="font-semibold">
//                     {param.yourSoil}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 bg-muted/40 p-3 rounded-lg text-sm text-muted-foreground">
//               These environmental conditions closely match the predicted crop
//               requirements.
//             </div>
//           </Card>

//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">

//           <Button
//             onClick={() => navigate("/market")}
//             size="lg"
//             className="h-14 px-8 gap-2"
//           >
//             <TrendingUp className="w-5 h-5" />
//             View Market Trends
//           </Button>

//         </div>

//       </div>
//     </div>
//   );
// }







import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

import {
  ArrowLeft,
  TrendingUp,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

/* ---------------- Crop Images ---------------- */

import appleImg from "../../assets/crops/apple.png";
import bananaImg from "../../assets/crops/banana.png";
import blackgramImg from "../../assets/crops/blackgram.png";
import chickpeaImg from "../../assets/crops/chickpea.png";
import coconutImg from "../../assets/crops/coconut.png";
import coffeeImg from "../../assets/crops/coffee.png";
import cottonImg from "../../assets/crops/cotton.png";
import grapesImg from "../../assets/crops/grapes.png";
import juteImg from "../../assets/crops/jute.png";
import kidneybeansImg from "../../assets/crops/kidneybeans.png";
import lentilsImg from "../../assets/crops/lentils.png";
import maizeImg from "../../assets/crops/maize.png";
import mangoImg from "../../assets/crops/mango.png";
import mothbeansImg from "../../assets/crops/mothbeans.png";
import mungbeanImg from "../../assets/crops/mungbean.png";
import muskmelonImg from "../../assets/crops/muskmelon.png";
import orangeImg from "../../assets/crops/orange.png";
import papayaImg from "../../assets/crops/papaya.png";
import pigeonpeasImg from "../../assets/crops/pigeonpeas.png";
import pomegranateImg from "../../assets/crops/pomegranate.png";
import riceImg from "../../assets/crops/rice.png";
import watermelonImg from "../../assets/crops/watermelon.png";

/* ---------------- Crop Image Map ---------------- */

const cropImages: Record<string, string> = {
  apple: appleImg,
  banana: bananaImg,
  blackgram: blackgramImg,
  chickpea: chickpeaImg,
  coconut: coconutImg,
  coffee: coffeeImg,
  cotton: cottonImg,
  grapes: grapesImg,
  jute: juteImg,
  kidneybeans: kidneybeansImg,
  lentil: lentilsImg,
  maize: maizeImg,
  mango: mangoImg,
  mothbeans: mothbeansImg,
  mungbean: mungbeanImg,
  muskmelon: muskmelonImg,
  orange: orangeImg,
  papaya: papayaImg,
  pigeonpeas: pigeonpeasImg,
  pomegranate: pomegranateImg,
  rice: riceImg,
  watermelon: watermelonImg,
};

/* ---------------- Ideal Conditions ---------------- */

const idealConditions = {
  nitrogen: 90,
  phosphorus: 75,
  potassium: 85,
  ph: 90,
  rainfall: 92,
  temperature: 85,
};

export function CropRecommendation() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [crop, setCrop] = useState<string>("");

  const [soilData, setSoilData] = useState({
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0,
    ph: 0,
    rainfall: 0,
    temperature: 0,
  });

  useEffect(() => {
    const predictedCrop = localStorage.getItem("recommendedCrop");

    if (predictedCrop) {
      setCrop(predictedCrop.toLowerCase());
    }

    const storedSoil = localStorage.getItem("soilData");

    if (storedSoil) {
      setSoilData(JSON.parse(storedSoil));
    }
  }, []);

  const imageSrc = cropImages[crop] ?? riceImg;

  const radarData = [
    {
      metric: "Nitrogen",
      yourSoil: soilData.nitrogen,
      idealConditions: idealConditions.nitrogen,
    },
    {
      metric: "Phosphorus",
      yourSoil: soilData.phosphorus,
      idealConditions: idealConditions.phosphorus,
    },
    {
      metric: "Potassium",
      yourSoil: soilData.potassium,
      idealConditions: idealConditions.potassium,
    },
    {
      metric: "pH Level",
      yourSoil: soilData.ph,
      idealConditions: idealConditions.ph,
    },
    {
      metric: "Rainfall",
      yourSoil: soilData.rainfall,
      idealConditions: idealConditions.rainfall,
    },
    {
      metric: "Temperature",
      yourSoil: soilData.temperature,
      idealConditions: idealConditions.temperature,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">

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
            <h1 className="text-3xl text-primary font-semibold">
              {t("cropRecommendation")}
            </h1>

            <p className="text-muted-foreground">
              {t("aiAnalysis")}
            </p>
          </div>

          <div className="w-20" />
        </div>

        {/* Crop Hero */}

        <Card className="overflow-hidden border-border mb-8 shadow-xl">
          <div className="grid md:grid-cols-2">

            <div className="relative h-64 md:h-auto">
              <img
                src={imageSrc}
                alt={crop}
                className="w-full h-full object-cover"
              />

              {crop && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground px-4 py-2 text-lg shadow-lg border-0">
                    <Sparkles className="w-4 h-4 mr-1" />
                    {t("recommended")}
                  </Badge>
                </div>
              )}
            </div>

            <div className="p-8 bg-gradient-to-br from-card to-accent/20">
              <h2 className="text-4xl text-primary mb-2 capitalize">
                {crop || "Rice"}
              </h2>

              <p className="text-muted-foreground italic">
                {t("aiPredictedCrop")}
              </p>

              <div className="space-y-3 mt-4">

                <div className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <p>{t("reason1")}</p>
                </div>

                <div className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <p>{t("reason2")}</p>
                </div>

                <div className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <p>{t("reason3")}</p>
                </div>

              </div>
            </div>

          </div>
        </Card>

        {/* Soil Compatibility */}

        <h2 className="text-xl text-primary font-semibold mb-4">
          {t("soilCompatibility")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">

          <Card className="p-6 border-border">
            <h3 className="text-lg text-primary mb-4">
              {t("soilMetrics")}
            </h3>

            <ResponsiveContainer width="100%" height={320}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis domain={[0, 100]} />

                <Radar
                  name="Your Soil"
                  dataKey="yourSoil"
                  stroke="#2f5233"
                  fill="#2f5233"
                  fillOpacity={0.3}
                />

                <Radar
                  name="Ideal Conditions"
                  dataKey="idealConditions"
                  stroke="#d4a574"
                  fill="#d4a574"
                  fillOpacity={0.3}
                />

                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 border-border">

            <h3 className="text-lg text-primary mb-4">
              {t("parameterAnalysis")}
            </h3>

            <div className="space-y-3">
              {radarData.map((param) => (
                <div
                  key={param.metric}
                  className="flex justify-between bg-accent/30 px-4 py-2 rounded-lg"
                >
                  <span className="text-muted-foreground">
                    {param.metric}
                  </span>
                  <span className="font-semibold">
                    {param.yourSoil}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-muted/40 p-3 rounded-lg text-sm text-muted-foreground">
              {t("soilMatch")}
            </div>

          </Card>

        </div>

        {/* Button */}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Button
            onClick={() => navigate("/market")}
            size="lg"
            className="h-14 px-8 gap-2"
          >
            <TrendingUp className="w-5 h-5" />
            {t("viewMarketTrends")}
          </Button>

        </div>

      </div>
    </div>
  );
}