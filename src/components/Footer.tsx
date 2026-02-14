import Link from "next/link";
import { Shield, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="flex items-center gap-2 text-base text-gray-600">
            Hecho con <Heart className="h-5 w-5 fill-pulp-orange text-pulp-orange" /> en Honduras
          </p>
          
          <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm text-green-700">
            <Shield className="h-4 w-4" />
            No vendemos tus datos
          </div>

          <p className="text-sm text-gray-500">
            Un proyecto de{" "}
            <Link
              href="https://dogma.systems"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-pulp-orange hover:underline"
            >
              Dogma Systems
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
