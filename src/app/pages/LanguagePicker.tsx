import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Check, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";

const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
];

export function LanguagePicker() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState("en");

  /* Load saved language on page open */

  useEffect(() => {
    const savedLanguage = localStorage.getItem("i18nextLng");

    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  const handleContinue = () => {
    navigate("/input");
  };

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);

    i18n.changeLanguage(languageCode);

    /* Save language for future sessions */

    localStorage.setItem("i18nextLng", languageCode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}

        <div className="text-center mb-10">

          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
            <Languages className="w-8 h-8 text-primary-foreground" />
          </div>

          <h1 className="text-4xl text-primary mb-3">
            {t("chooseLanguage")}
          </h1>

          <p className="text-muted-foreground">
            {t("selectLanguage")}
          </p>

        </div>

        {/* Language Grid */}

        <div className="grid grid-cols-2 gap-6 mb-10">

          {languages.map((language) => (

            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`
                relative h-44 rounded-2xl border-2
                flex flex-col items-center justify-center
                transition-all duration-200
                ${
                  selectedLanguage === language.code
                    ? "border-primary bg-primary/5 shadow-lg scale-105"
                    : "border-border bg-card hover:border-primary/50 hover:shadow-md"
                }
              `}
            >

              {/* Check Icon */}

              {selectedLanguage === language.code && (

                <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center">

                  <Check className="w-4 h-4 text-primary-foreground" />

                </div>

              )}

              {/* Language Text */}

              <div className="text-center">

                <div className="text-2xl mb-2 font-semibold">
                  {language.nativeName}
                </div>

                <div className="text-sm text-muted-foreground">
                  {language.name}
                </div>

              </div>

            </button>

          ))}

        </div>

        {/* Continue Button */}

        <div className="flex justify-center">

          <Button
            onClick={handleContinue}
            size="lg"
            className="h-14 px-14 bg-primary hover:bg-primary/90"
          >
            {t("continue")}
          </Button>

        </div>

      </div>
    </div>
  );
}