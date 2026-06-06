import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

import {
  ArrowLeft,
  Send,
  Phone,
  Mail,
  MapPin,
  HelpCircle,
} from "lucide-react";

export function SupportPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message || "Failed to send message");
      }

    } catch (error) {
      console.error(error);
      alert("Server error. Please try again later.");
    }

    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const faqs = [
    {
      question: "How accurate are the crop recommendations?",
      answer:
        "Our AI models are trained on extensive agricultural data and achieve 98% accuracy. We continuously update our algorithms with real-time weather patterns, soil analysis, and market trends to provide you with the most reliable recommendations.",
    },
    {
      question: "What soil parameters do I need to measure?",
      answer:
        "You'll need to measure Nitrogen (N), Phosphorus (P), and Potassium (K) levels in mg/kg, soil pH level, and provide local climate data including rainfall, temperature, and humidity. Most agricultural testing labs can provide these measurements.",
    },
    {
      question: "How often should I update my soil data?",
      answer:
        "We recommend updating your soil data at least twice per growing season - once before planting and once mid-season. However, for optimal results, quarterly testing is ideal as soil composition can change with weather and farming practices.",
    },
    {
      question: "Can I use this for multiple farm locations?",
      answer:
        "Yes! You can add multiple farm locations to your account and get customized recommendations for each site. Each location can have different soil profiles and climate conditions.",
    },
    {
      question: "Is market data updated in real-time?",
      answer:
        "Our market prices are updated multiple times daily from verified commodity exchanges and local markets. Price trends reflect actual trading data to help you make informed selling decisions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="flex items-center justify-between mb-8">

          <Button
            variant="ghost"
            onClick={() => navigate("/market")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("back")}
          </Button>

          <div className="text-center flex-1">
            <h1 className="text-3xl text-primary">
              {t("supportCenter")}
            </h1>

            <p className="text-muted-foreground">
              {t("supportSubtitle")}
            </p>
          </div>

          <div className="w-20" />

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* FAQ */}

          <div className="lg:col-span-2 space-y-6">

            <Card className="p-6 border-border">

              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="w-5 h-5 text-primary" />
                <h2 className="text-xl text-primary">
                  {t("faqTitle")}
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full">

                {faqs.map((faq, index) => (

                  <AccordionItem key={index} value={`item-${index}`}>

                    <AccordionTrigger className="text-left hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>

                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>

                  </AccordionItem>

                ))}

              </Accordion>

            </Card>

            {/* Contact Form */}

            <Card className="p-6 border-border">

              <h2 className="text-xl text-primary mb-6">
                {t("contactUs")}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid md:grid-cols-2 gap-4">

                  <div className="space-y-2">

                    <Label htmlFor="name">{t("fullName")}</Label>

                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={t("enterName")}
                      required
                      className="h-11"
                    />

                  </div>

                  <div className="space-y-2">

                    <Label htmlFor="email">{t("emailAddress")}</Label>

                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="email@example.com"
                      required
                      className="h-11"
                    />

                  </div>

                </div>

                <div className="space-y-2">

                  <Label htmlFor="subject">{t("subject")}</Label>

                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder={t("subjectPlaceholder")}
                    required
                    className="h-11"
                  />

                </div>

                <div className="space-y-2">

                  <Label htmlFor="message">{t("message")}</Label>

                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={t("messagePlaceholder")}
                    required
                    rows={5}
                    className="resize-none"
                  />

                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 bg-primary hover:bg-primary/90 gap-2"
                >
                  <Send className="w-4 h-4" />
                  {loading ? "Sending..." : t("sendMessage")}
                </Button>

              </form>

            </Card>

          </div>

          {/* Contact Sidebar */}

          <div className="space-y-6">

            <Card className="p-6 border-border">

              <h3 className="text-lg text-primary mb-4">
                {t("getInTouch")}
              </h3>

              <p className="text-sm text-muted-foreground">
                {t("contactAnytime")}
              </p>

            </Card>

            <Card className="p-6 border-border bg-gradient-to-br from-primary/5 to-secondary/5">

              <h3 className="text-lg text-primary mb-4">
                {t("contactDetails")}
              </h3>

              <div className="space-y-4">

                <div className="flex items-start gap-3">

                  <Phone className="w-5 h-5 text-primary" />

                  <div>
                    <div className="font-medium">
                      {t("phoneSupport")}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      +91 98765 43210
                    </div>
                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <Mail className="w-5 h-5 text-primary" />

                  <div>
                    <div className="font-medium">
                      {t("emailSupport")}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      support@agritech.com
                    </div>
                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <MapPin className="w-5 h-5 text-primary" />

                  <div>
                    <div className="font-medium">
                      {t("officeLocation")}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      123 Agriculture Ave
                      <br />
                      Farm City, FC 12345
                    </div>
                  </div>

                </div>

              </div>

            </Card>

          </div>

        </div>

        {/* Logout */}

        <div className="mt-12 flex justify-center">

          <Button
            variant="destructive"
            className="w-48 h-11"
            onClick={handleLogout}
          >
            {t("logout")}
          </Button>

        </div>

      </div>
    </div>
  );
}