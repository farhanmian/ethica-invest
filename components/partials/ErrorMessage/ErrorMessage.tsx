import { useRouter } from "next/router";
import React from "react";

const ErrorMessage: React.FC<{ error: string }> = ({ error }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-center mb-2.5">{error}</h2>
      <h2 className="text-2xl font-semibold text-center mb-8">
        Please Reload the Page
      </h2>
      <button
        onClick={() => router.reload()}
        className="bg-gray-200 hover:bg-gray-50 text-black px-6 py-2 rounded font-semibold transition-all"
      >
        Reload
      </button>
    </div>
  );
};

export default ErrorMessage;
