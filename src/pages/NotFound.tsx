import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
        <p className="mt-6 text-sm text-gray-500 max-w-md mx-auto">
          This is a product of VeeIntellix M3 IT Solutions Pty Ltd. To get your own website,
          kindly contact us at veerambaufx@gmail.com or WhatsApp 0849773199.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
