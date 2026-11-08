export default function CommunityPage() {
  const posts = [
    {
      id: 1,
      user: "Rahim from Bangladesh",
      location: "Berlin",
      time: "2 hours ago",
      content:
        "Anyone know a good Bengali restaurant near Neukölln? Looking for authentic food.",
      likes: 12,
      comments: 5,
    },
    {
      id: 2,
      user: "Anna",
      location: "Amsterdam",
      time: "5 hours ago",
      content:
        "I have an extra mattress. Giving it away for free if someone needs it this weekend.",
      likes: 24,
      comments: 8,
    },
    {
      id: 3,
      user: "Karim",
      location: "Vienna",
      time: "1 day ago",
      content:
        "Looking for people to practice German conversation. Beginner level. Anyone interested?",
      likes: 18,
      comments: 11,
    },
    {
      id: 4,
      user: "Sofia",
      location: "Munich",
      time: "1 day ago",
      content:
        "New to the city. Any recommendations for affordable gyms or sports groups?",
      likes: 9,
      comments: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-indigo-600 text-white py-10">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Community</h1>
          <p className="mt-2 text-indigo-100">
            Connect with people across Europe
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Create Post Box */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <textarea
            placeholder="Share something with the community..."
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            rows={3}
          ></textarea>
          <div className="mt-3 flex justify-end">
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700">
              Post
            </button>
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                  {post.user.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{post.user}</p>
                  <p className="text-sm text-gray-500">
                    {post.location} · {post.time}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed">{post.content}</p>

              <div className="mt-4 flex gap-6 text-sm text-gray-500">
                <button className="hover:text-indigo-600">
                  👍 {post.likes} Likes
                </button>
                <button className="hover:text-indigo-600">
                  💬 {post.comments} Comments
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}