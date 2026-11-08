export default function MarketplacePage() {
  const items = [
    {
      id: 1,
      title: "iPhone 13 - Good Condition",
      price: "€380",
      location: "Berlin",
      category: "Electronics",
    },
    {
      id: 2,
      title: "Bicycle - City Bike",
      price: "€120",
      location: "Amsterdam",
      category: "Vehicles",
    },
    {
      id: 3,
      title: "Sofa Set - Almost New",
      price: "€250",
      location: "Vienna",
      category: "Furniture",
    },
    {
      id: 4,
      title: "Winter Jacket - Size M",
      price: "€45",
      location: "Munich",
      category: "Clothing",
    },
    {
      id: 5,
      title: "Laptop Stand + Mouse",
      price: "€35",
      location: "Berlin",
      category: "Electronics",
    },
    {
      id: 6,
      title: "Kitchen Table",
      price: "€80",
      location: "Hamburg",
      category: "Furniture",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-purple-600 text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Marketplace</h1>
          <p className="mt-2 text-purple-100">
            Buy and sell within the community
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Search + Filter */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8 flex gap-3">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Furniture</option>
            <option>Clothing</option>
            <option>Vehicles</option>
          </select>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
            Search
          </button>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
            >
              <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                No Image
              </div>
              <div className="p-4">
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                  {item.category}
                </span>
                <h2 className="font-semibold text-gray-800 mt-2">{item.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{item.location}</p>
                <div className="mt-3 flex justify-between items-center">
                  <p className="text-lg font-bold text-purple-600">{item.price}</p>
                  <button className="text-sm text-purple-600 hover:underline">
                    View →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}