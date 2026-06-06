// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import { Label } from "../components/ui/label";
// import { Slider } from "../components/ui/slider";
// import { Card } from "../components/ui/card";
// import { ArrowLeft, ArrowRight, Beaker, Droplets, ThermometerSun, Wind } from "lucide-react";

// export function InputForm() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     nitrogen: 50,
//     phosphorus: 50,
//     potassium: 50,
//     pH: 6.5,
//     rainfall: 100,
//     temperature: 25,
//     humidity: 70,
//   });

//   const updateField = (field: string, value: number) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://127.0.0.1:8000/predict", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           nitrogen: formData.nitrogen,
//           phosphorus: formData.phosphorus,
//           potassium: formData.potassium,
//           temperature: formData.temperature,
//           humidity: formData.humidity,
//           ph: formData.pH,
//           rainfall: formData.rainfall,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // save prediction for next page
//         localStorage.setItem("recommendedCrop", data.recommended_crop);

//         // go to recommendation page
//         navigate("/recommendation");
//       } else {
//         alert("Prediction failed");
//       }
//     } catch (error) {
//       alert("Server connection failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-4 md:p-8">
//       <div className="max-w-4xl mx-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <Button
//             variant="ghost"
//             onClick={() => navigate("/language")}
//             className="gap-2"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back
//           </Button>

//           <div className="text-center flex-1">
//             <h1 className="text-3xl text-primary">Soil & Climate Data</h1>
//             <p className="text-muted-foreground">
//               Enter your farm metrics for analysis
//             </p>
//           </div>

//           <div className="w-20" />
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">

//           {/* Soil Section */}
//           <Card className="p-6 border-border">
//             <div className="flex items-center gap-2 mb-6">
//               <Beaker className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">Soil Nutrients (mg/kg)</h2>
//             </div>

//             <div className="space-y-6">

//               {/* Nitrogen */}
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <Label>Nitrogen (N)</Label>
//                   <Input
//                     type="number"
//                     value={formData.nitrogen}
//                     onChange={(e) =>
//                       updateField("nitrogen", Number(e.target.value))
//                     }
//                     className="w-24 h-10 text-center"
//                     min="0"
//                     max="200"
//                   />
//                 </div>

//                 <Slider
//                   value={[formData.nitrogen]}
//                   onValueChange={(v) => updateField("nitrogen", v[0])}
//                   min={0}
//                   max={200}
//                   step={1}
//                 />
//               </div>

//               {/* Phosphorus */}
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <Label>Phosphorus (P)</Label>
//                   <Input
//                     type="number"
//                     value={formData.phosphorus}
//                     onChange={(e) =>
//                       updateField("phosphorus", Number(e.target.value))
//                     }
//                     className="w-24 h-10 text-center"
//                   />
//                 </div>

//                 <Slider
//                   value={[formData.phosphorus]}
//                   onValueChange={(v) => updateField("phosphorus", v[0])}
//                   min={0}
//                   max={200}
//                   step={1}
//                 />
//               </div>

//               {/* Potassium */}
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <Label>Potassium (K)</Label>
//                   <Input
//                     type="number"
//                     value={formData.potassium}
//                     onChange={(e) =>
//                       updateField("potassium", Number(e.target.value))
//                     }
//                     className="w-24 h-10 text-center"
//                   />
//                 </div>

//                 <Slider
//                   value={[formData.potassium]}
//                   onValueChange={(v) => updateField("potassium", v[0])}
//                   min={0}
//                   max={200}
//                   step={1}
//                 />
//               </div>

//               {/* pH */}
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <Label>pH Level</Label>
//                   <Input
//                     type="number"
//                     value={formData.pH}
//                     onChange={(e) =>
//                       updateField("pH", Number(e.target.value))
//                     }
//                     className="w-24 h-10 text-center"
//                     step="0.1"
//                   />
//                 </div>

//                 <Slider
//                   value={[formData.pH]}
//                   onValueChange={(v) => updateField("pH", v[0])}
//                   min={0}
//                   max={14}
//                   step={0.1}
//                 />
//               </div>
//             </div>
//           </Card>

//           {/* Climate Section */}
//           <Card className="p-6 border-border">
//             <div className="flex items-center gap-2 mb-6">
//               <ThermometerSun className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">Climate Data</h2>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">

//               <div className="space-y-3">
//                 <Label>Rainfall (mm)</Label>
//                 <Input
//                   type="number"
//                   value={formData.rainfall}
//                   onChange={(e) =>
//                     updateField("rainfall", Number(e.target.value))
//                   }
//                 />
//               </div>

//               <div className="space-y-3">
//                 <Label>Temperature (°C)</Label>
//                 <Input
//                   type="number"
//                   value={formData.temperature}
//                   onChange={(e) =>
//                     updateField("temperature", Number(e.target.value))
//                   }
//                 />
//               </div>

//               <div className="space-y-3">
//                 <Label>Humidity (%)</Label>
//                 <Input
//                   type="number"
//                   value={formData.humidity}
//                   onChange={(e) =>
//                     updateField("humidity", Number(e.target.value))
//                   }
//                 />
//               </div>

//             </div>
//           </Card>

//           {/* Submit */}
//           <div className="flex justify-end pt-4">
//             <Button
//               type="submit"
//               size="lg"
//               className="h-14 px-8 bg-primary hover:bg-primary/90 gap-2"
//             >
//               Analyze Data
//               <ArrowRight className="w-5 h-5" />
//             </Button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import { Label } from "../components/ui/label";
// import { Slider } from "../components/ui/slider";
// import { Card } from "../components/ui/card";
// import { ArrowLeft, ArrowRight, Beaker, ThermometerSun } from "lucide-react";

// export function InputForm() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     nitrogen: 50,
//     phosphorus: 50,
//     potassium: 50,
//     pH: 6.5,
//     rainfall: 100,
//     temperature: 25,
//     humidity: 70,
//   });

//   const updateField = (field: string, value: number) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       /* ---------------- SAVE INPUT DATA FOR NEXT PAGE ---------------- */

//       const soilData = {
//         nitrogen: formData.nitrogen,
//         phosphorus: formData.phosphorus,
//         potassium: formData.potassium,
//         ph: formData.pH,
//         rainfall: formData.rainfall,
//         temperature: formData.temperature,
//       };

//       localStorage.setItem("soilData", JSON.stringify(soilData));

//       /* ---------------- SEND DATA TO BACKEND ---------------- */

//       const response = await fetch("http://127.0.0.1:8000/predict", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           nitrogen: formData.nitrogen,
//           phosphorus: formData.phosphorus,
//           potassium: formData.potassium,
//           temperature: formData.temperature,
//           humidity: formData.humidity,
//           ph: formData.pH,
//           rainfall: formData.rainfall,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         /* ---------------- SAVE PREDICTED CROP ---------------- */

//         localStorage.setItem("recommendedCrop", data.recommended_crop);

//         /* ---------------- NAVIGATE ---------------- */

//         navigate("/recommendation");
//       } else {
//         alert("Prediction failed");
//       }
//     } catch (error) {
//       alert("Server connection failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-4 md:p-8">
//       <div className="max-w-4xl mx-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <Button
//             variant="ghost"
//             onClick={() => navigate("/language")}
//             className="gap-2"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back
//           </Button>

//           <div className="text-center flex-1">
//             <h1 className="text-3xl text-primary">Soil & Climate Data</h1>
//             <p className="text-muted-foreground">
//               Enter your farm metrics for analysis
//             </p>
//           </div>

//           <div className="w-20" />
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">

//           {/* Soil Section */}
//           <Card className="p-6 border-border">
//             <div className="flex items-center gap-2 mb-6">
//               <Beaker className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">Soil Nutrients (mg/kg)</h2>
//             </div>

//             <div className="space-y-6">

//               {/* Nitrogen */}
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <Label>Nitrogen (N)</Label>
//                   <Input
//                     type="number"
//                     value={formData.nitrogen}
//                     onChange={(e) =>
//                       updateField("nitrogen", Number(e.target.value))
//                     }
//                     className="w-24 h-10 text-center"
//                     min="0"
//                     max="200"
//                   />
//                 </div>

//                 <Slider
//                   value={[formData.nitrogen]}
//                   onValueChange={(v) => updateField("nitrogen", v[0])}
//                   min={0}
//                   max={200}
//                   step={1}
//                 />
//               </div>

//               {/* Phosphorus */}
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <Label>Phosphorus (P)</Label>
//                   <Input
//                     type="number"
//                     value={formData.phosphorus}
//                     onChange={(e) =>
//                       updateField("phosphorus", Number(e.target.value))
//                     }
//                     className="w-24 h-10 text-center"
//                   />
//                 </div>

//                 <Slider
//                   value={[formData.phosphorus]}
//                   onValueChange={(v) => updateField("phosphorus", v[0])}
//                   min={0}
//                   max={200}
//                   step={1}
//                 />
//               </div>

//               {/* Potassium */}
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <Label>Potassium (K)</Label>
//                   <Input
//                     type="number"
//                     value={formData.potassium}
//                     onChange={(e) =>
//                       updateField("potassium", Number(e.target.value))
//                     }
//                     className="w-24 h-10 text-center"
//                   />
//                 </div>

//                 <Slider
//                   value={[formData.potassium]}
//                   onValueChange={(v) => updateField("potassium", v[0])}
//                   min={0}
//                   max={200}
//                   step={1}
//                 />
//               </div>

//               {/* pH */}
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <Label>pH Level</Label>
//                   <Input
//                     type="number"
//                     value={formData.pH}
//                     onChange={(e) =>
//                       updateField("pH", Number(e.target.value))
//                     }
//                     className="w-24 h-10 text-center"
//                     step="0.1"
//                   />
//                 </div>

//                 <Slider
//                   value={[formData.pH]}
//                   onValueChange={(v) => updateField("pH", v[0])}
//                   min={0}
//                   max={14}
//                   step={0.1}
//                 />
//               </div>

//             </div>
//           </Card>

//           {/* Climate Section */}
//           <Card className="p-6 border-border">
//             <div className="flex items-center gap-2 mb-6">
//               <ThermometerSun className="w-5 h-5 text-primary" />
//               <h2 className="text-xl text-primary">Climate Data</h2>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">

//               <div className="space-y-3">
//                 <Label>Rainfall (mm)</Label>
//                 <Input
//                   type="number"
//                   value={formData.rainfall}
//                   onChange={(e) =>
//                     updateField("rainfall", Number(e.target.value))
//                   }
//                 />
//               </div>

//               <div className="space-y-3">
//                 <Label>Temperature (°C)</Label>
//                 <Input
//                   type="number"
//                   value={formData.temperature}
//                   onChange={(e) =>
//                     updateField("temperature", Number(e.target.value))
//                   }
//                 />
//               </div>

//               <div className="space-y-3">
//                 <Label>Humidity (%)</Label>
//                 <Input
//                   type="number"
//                   value={formData.humidity}
//                   onChange={(e) =>
//                     updateField("humidity", Number(e.target.value))
//                   }
//                 />
//               </div>

//             </div>
//           </Card>

//           {/* Submit */}
//           <div className="flex justify-end pt-4">
//             <Button
//               type="submit"
//               size="lg"
//               className="h-14 px-8 bg-primary hover:bg-primary/90 gap-2"
//             >
//               Analyze Data
//               <ArrowRight className="w-5 h-5" />
//             </Button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Slider } from "../components/ui/slider";
import { Card } from "../components/ui/card";
import { ArrowLeft, ArrowRight, Beaker, ThermometerSun } from "lucide-react";

export function InputForm() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    nitrogen: 50,
    phosphorus: 50,
    potassium: 50,
    pH: 6.5,
    rainfall: 100,
    temperature: 25,
    humidity: 70,
  });

  const updateField = (field: string, value: number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      /* SAVE INPUT DATA */

      const soilData = {
        nitrogen: formData.nitrogen,
        phosphorus: formData.phosphorus,
        potassium: formData.potassium,
        ph: formData.pH,
        rainfall: formData.rainfall,
        temperature: formData.temperature,
      };

      localStorage.setItem("soilData", JSON.stringify(soilData));

      /* SEND DATA TO BACKEND */

      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nitrogen: formData.nitrogen,
          phosphorus: formData.phosphorus,
          potassium: formData.potassium,
          temperature: formData.temperature,
          humidity: formData.humidity,
          ph: formData.pH,
          rainfall: formData.rainfall,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("recommendedCrop", data.recommended_crop);
        navigate("/recommendation");
      } else {
        alert("Prediction failed");
      }
    } catch (error) {
      alert("Server connection failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}

        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/language")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("back")}
          </Button>

          <div className="text-center flex-1">
            <h1 className="text-3xl text-primary">
              {t("soilClimateTitle")}
            </h1>

            <p className="text-muted-foreground">
              {t("soilClimateDescription")}
            </p>
          </div>

          <div className="w-20" />
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Soil Section */}

          <Card className="p-6 border-border">
            <div className="flex items-center gap-2 mb-6">
              <Beaker className="w-5 h-5 text-primary" />
              <h2 className="text-xl text-primary">
                {t("soilNutrients")}
              </h2>
            </div>

            <div className="space-y-6">

              {/* Nitrogen */}

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label>{t("nitrogen")}</Label>

                  <Input
                    type="number"
                    value={formData.nitrogen}
                    onChange={(e) =>
                      updateField("nitrogen", Number(e.target.value))
                    }
                    className="w-24 h-10 text-center"
                    min="0"
                    max="200"
                  />
                </div>

                <Slider
                  value={[formData.nitrogen]}
                  onValueChange={(v) => updateField("nitrogen", v[0])}
                  min={0}
                  max={200}
                  step={1}
                />
              </div>

              {/* Phosphorus */}

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label>{t("phosphorus")}</Label>

                  <Input
                    type="number"
                    value={formData.phosphorus}
                    onChange={(e) =>
                      updateField("phosphorus", Number(e.target.value))
                    }
                    className="w-24 h-10 text-center"
                  />
                </div>

                <Slider
                  value={[formData.phosphorus]}
                  onValueChange={(v) => updateField("phosphorus", v[0])}
                  min={0}
                  max={200}
                  step={1}
                />
              </div>

              {/* Potassium */}

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label>{t("potassium")}</Label>

                  <Input
                    type="number"
                    value={formData.potassium}
                    onChange={(e) =>
                      updateField("potassium", Number(e.target.value))
                    }
                    className="w-24 h-10 text-center"
                  />
                </div>

                <Slider
                  value={[formData.potassium]}
                  onValueChange={(v) => updateField("potassium", v[0])}
                  min={0}
                  max={200}
                  step={1}
                />
              </div>

              {/* pH */}

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label>{t("phLevel")}</Label>

                  <Input
                    type="number"
                    value={formData.pH}
                    onChange={(e) =>
                      updateField("pH", Number(e.target.value))
                    }
                    className="w-24 h-10 text-center"
                    step="0.1"
                  />
                </div>

                <Slider
                  value={[formData.pH]}
                  onValueChange={(v) => updateField("pH", v[0])}
                  min={0}
                  max={14}
                  step={0.1}
                />
              </div>

            </div>
          </Card>

          {/* Climate Section */}

          <Card className="p-6 border-border">
            <div className="flex items-center gap-2 mb-6">
              <ThermometerSun className="w-5 h-5 text-primary" />
              <h2 className="text-xl text-primary">
                {t("climateData")}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="space-y-3">
                <Label>{t("rainfall")}</Label>

                <Input
                  type="number"
                  value={formData.rainfall}
                  onChange={(e) =>
                    updateField("rainfall", Number(e.target.value))
                  }
                />
              </div>

              <div className="space-y-3">
                <Label>{t("temperature")}</Label>

                <Input
                  type="number"
                  value={formData.temperature}
                  onChange={(e) =>
                    updateField("temperature", Number(e.target.value))
                  }
                />
              </div>

              <div className="space-y-3">
                <Label>{t("humidity")}</Label>

                <Input
                  type="number"
                  value={formData.humidity}
                  onChange={(e) =>
                    updateField("humidity", Number(e.target.value))
                  }
                />
              </div>

            </div>
          </Card>

          {/* Submit */}

          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              size="lg"
              className="h-14 px-8 bg-primary hover:bg-primary/90 gap-2"
            >
              {t("analyzeData")}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

        </form>
      </div>
    </div>
  );
}