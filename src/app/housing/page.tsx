export default function HousingPage() {
  const housings = [
    {
      id: 1,
      title: "Nice Room in Shared Apartment",
      location: "Berlin, Germany",
      price: "€550 / month",
      type: "Private Room",
      available: "From 1 December",
    },
    {
      id: 2,
      title: "Studio Apartment near Center",
      location: "Amsterdam, Netherlands",
      price: "€1,150 / month",
      type: "Studio",
      available: "Immediately",
    },
    {
      id: 3,
      title: "1 Bedroom Flat",
      location: "Vienna, Austria",
      price: "€980 / month",
      type: "Apartment",
      available: "From 15 December",
    },
    {
      id: 4,
      title: "Room for Student",
      location: "Munich, Germany",
      price: "€480 / month",
      type: "Private Room",
      available: "Immediately",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Find Housing in Europe</h1>
          <p className="mt-2 text-green-100">
            Rooms, apartments and shared housing across Europe
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Search Box */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8 flex gap-3">
          <input
            type="text"
            placeholder="City or area..."
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>All Types</option>
            <option>Private Room</option>
            <option>Studio</option>
            <option>Apartment</option>
          </select>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
            Search
          </button>
        </div>

        {/* Housing List */}
        <div className="space-y-4">
          {housings.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mt-1">{item.location}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.available}</p>
                </div>
                <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                  {item.type}
                </span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-green-600 font-medium text-lg">{item.price}</p>
                <button className="text-green-600 hover:underline font-medium">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}