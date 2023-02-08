import React from "react";
import styles from "./ErrorMessage.module.css";
import { useRouter } from "next/router";

const ErrorMessage: React.FC<{ error: string }> = ({ error }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center p-5">
      <h2 className={`${styles.messageHeading} mb-2.5`}>{error}</h2>
      <h2 className={`text-2xl ${styles.text} mb-8`}>Please Reload the Page</h2>
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
