import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, User } from "lucide-react";

export default function EcommerceWireframe() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">ShopEase</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="border rounded-full pl-10 pr-4 py-2 w-64"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <Button variant="ghost"><ShoppingCart /></Button>
          <Button variant="ghost"><User /></Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="hidden md:block col-span-1 bg-white rounded-2xl shadow p-4">
          <h2 className="font-semibold mb-4">Categories</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Electronics</li>
            <li>Clothing</li>
            <li>Home & Living</li>
            <li>Beauty</li>
            <li>Sports</li>
          </ul>
        </aside>

        {/* Product Grid */}
        <section className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <Card key={id} className="rounded-2xl shadow hover:shadow-lg transition">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-40 h-40 bg-gray-200 rounded-xl mb-4"></div>
                <h3 className="font-semibold">Product {id}</h3>
                <p className="text-gray-500">$99.99</p>
                <Button className="mt-3 w-full">Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow p-4 text-center text-gray-600">
        © 2025 ShopEase. All rights reserved.
      </footer>
    </div>
  );
}
