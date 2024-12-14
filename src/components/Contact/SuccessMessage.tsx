import React from "react";
import { CheckCircle } from "lucide-react";

export default function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 bg-white p-8 rounded-lg">
      <div className="animate-bounce">
        <CheckCircle className="w-16 h-16 text-green-500" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800">Message Sent!</h3>
      <p className="text-gray-600 text-center">
        Thank you for reaching out. I'll get back to you as soon as possible.
      </p>
    </div>
  );
}
