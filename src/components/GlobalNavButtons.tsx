import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const GlobalNavButtons = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2">
      <Button
        type="button"
        variant="secondary"
        size="icon"
        className="shadow-lg"
        onClick={handleBack}
        aria-label="Go back"
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="secondary"
        size="icon"
        className="shadow-lg"
        onClick={() => navigate("/")}
        aria-label="Go home"
      >
        <Home className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default GlobalNavButtons;
