export default function JobsPage() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechNova",
      location: "Berlin, Germany",
      type: "Full-time",
      salary: "€45,000 - €60,000",
    },
    {
      id: 2,
      title: "Warehouse Worker",
      company: "Euro Logistics",
      location: "Amsterdam, Netherlands",
      type: "Full-time",
      salary: "€2,200 / month",
    },
    {
      id: 3,
      title: "Customer Support (Remote)",
      company: "HelpDesk EU",
      location: "Remote - Europe",
      type: "Part-time",
      salary: "€15 - €18 / hour",
    },
    {
      id: 4,
      title: "Nurse",
      company: "City Hospital",
      location: "Vienna, Austria",
      type: "Full-time",
      salary: "€3,200 / month",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Find Jobs in Europe</h1>
          <p className="mt-2 text-blue-100">
            Discover opportunities across Europe
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Search Box */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8 flex gap-3">
          <input
            type="text"
            placeholder="Job title or keyword..."
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Location (e.g. Berlin)"
            className="w-48 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Job List */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {job.title}
                  </h2>
                  <p className="text-gray-600 mt-1">{job.company}</p>
                  <p className="text-sm text-gray-500 mt-1">{job.location}</p>
                </div>
                <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                  {job.type}
                </span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-green-600 font-medium">{job.salary}</p>
                <button className="text-blue-600 hover:underline font-medium">
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