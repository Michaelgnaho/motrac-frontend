"use client";
import Image from "next/image";
import { useState } from "react";
import type { ComponentType } from "react";
type Client = {
  icon: ComponentType<{ size?: number }>;
  image: string;
  name: string;
  description?: string;
};

export default function ClientCard({ client }: { client: Client }) {
  const [imageError, setImageError] = useState(false);
  const IconComponent = client.icon;

  return (
    <div className="bg-white border border-gray-100 shadow-md rounded-xl overflow-hidden hover:border-[#F23B11] transition-colors relative">
      {/* Image Space */}
      <div className="relative w-full h-48">
        {!imageError ? (
          <Image
            src={client.image}
            alt={client.name}
            className="w-full h-full object-cover"
            width={400}
            height={300}
            onError={() => setImageError(true)}
          />
        ) : null}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-4 rounded-full">
            <IconComponent size={32} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
        <p className="text-gray-700 text-sm leading-relaxed mt-2">
          {client.description}
        </p>
      </div>
    </div>
  );
}
