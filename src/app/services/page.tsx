export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Document Translation",
      provider: "Maria Lopez",
      location: "Berlin",
      price: "From €25",
      category: "Translation",
    },
    {
      id: 2,
      title: "Airport Pickup",
      provider: "Ahmed Hassan",
      location: "Amsterdam",
      price: "€40 - €60",
      category: "Transport",
    },
    {
      id: 3,
      title: "CV & Cover Letter Help",
      provider: "Sophie Müller",
      location: "Vienna",
      price: "€30",
      category: "Career",
    },
    {
      id: 4,
      title: "Moving Help (2 people)",
      provider: "Team MoveEasy",
      location: "Munich",
      price: "€80 / hour",
      category: "Moving",
    },
    {
      id: 5,
      title: "German Language Tutoring",
      provider: "Thomas Berger",
      location: "Berlin",
      price: "€20 / hour",
      category: "Education",
    },
    {
      id: 6,
      title: "Apartment Cleaning",
      provider: "CleanPro",
      location: "Hamburg",
      price: "From €50",
      category: "Cleaning",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-orange-600 text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Local Services</h1>
          <p className="mt-2 text-orange-100">
            Find trusted help near you
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Search + Filter */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8 flex gap-3">
          <input
            type="text"
            placeholder="What service do you need?"
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>All Categories</option>
            <option>Translation</option>
            <option>Transport</option>
            <option>Career</option>
            <option>Moving</option>
            <option>Education</option>
            <option>Cleaning</option>
          </select>
          <button className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700">
            Search
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                {service.category}
              </span>
              <h2 className="font-semibold text-gray-800 mt-3 text-lg">
                {service.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{service.provider}</p>
              <p className="text-sm text-gray-500">{service.location}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="font-medium text-orange-600">{service.price}</p>
                <button className="text-sm text-orange-600 hover:underline font-medium">
                  Contact →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}