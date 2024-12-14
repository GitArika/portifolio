import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="flex items-start space-x-4">
        <Mail className="w-6 h-6 text-blue-500 mt-1" />
        <div>
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="text-gray-600">ariel.se@icloud.com</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 text-blue-500 mt-1" />
        <div>
          <h3 className="text-lg font-semibold">Phone</h3>
          <p className="text-gray-600">+55 (11) 94988-0392</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <MapPin className="w-6 h-6 text-blue-500 mt-1" />
        <div>
          <h3 className="text-lg font-semibold">Location</h3>
          <p className="text-gray-600">São Paulo, BR</p>
        </div>
      </div>
    </div>
  );
}
