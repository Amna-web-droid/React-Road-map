import React, { useState } from "react";

const FiverrGigForm = () => {
  // 1. Single State Object for all form fields
  const [formData, setFormData] = useState({
    title: "",
    category: "Web Development",
    price: "",
    description: "",
  });

  // State to hold submitted gigs list
  const [submittedGig, setSubmittedGig] = useState(null);

  // 2. Smart Universal Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 3. Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.price ||
      !formData.description.trim()
    ) {
      alert("Please fill in all the required fields!");
      return;
    }

    setSubmittedGig(formData);
  };

  // Reset Form
  const handleReset = () => {
    setFormData({
      title: "",
      category: "Web Development",
      price: "",
      description: "",
    });
    setSubmittedGig(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-black text-gray-800">
          🚀 Create a New Fiverr Gig
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Concept 07: Controlled Inputs & Dynamic Preview
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* --- FORM SECTION --- */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            ✏️ Gig Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input 1: Gig Title */}
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                Gig Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. I will build responsive React apps"
                className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm transition-all"
              />
            </div>

            {/* Input 2: Category */}
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm bg-white transition-all"
              >
                <option value="Web Development">Web Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>

            {/* Input 3: Price */}
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                Starting Price ($)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="50"
                className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm transition-all"
              />
            </div>

            {/* Input 4: Description */}
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                Gig Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                placeholder="Describe what services you offer in detail..."
                className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm transition-all"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="w-1/2 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-sm rounded-xl transition-all active:scale-95"
              >
                Clear
              </button>
              <button
                type="submit"
                className="w-1/2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md shadow-emerald-100 transition-all active:scale-95"
              >
                Publish Gig
              </button>
            </div>
          </form>
        </div>

        {/* --- LIVE CARD PREVIEW SECTION --- */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              👁️ Real-time Card Preview
            </h2>

            {/* Fiverr Styled Card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition-all">
              {/* Fake Cover Image Banner */}
              <div className="h-32 bg-linear-to-r from-emerald-500 to-teal-700 flex items-center justify-center text-white font-black text-lg p-4 text-center">
                {formData.category}
              </div>

              <div className="p-5">
                {/* Seller Info */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs">
                    AM
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800">
                      Amna Mushtaq
                    </h4>
                    <span className="text-[10px] text-emerald-600 font-semibold">
                      Level 2 Seller ★ 5.0
                    </span>
                  </div>
                </div>

                {/* Dynamic Title */}
                <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 min-h-10">
                  {formData.title || (
                    <span className="text-gray-300 italic">
                      Your Gig title will appear here...
                    </span>
                  )}
                </h3>

                {/* Dynamic Description */}
                <p className="text-xs text-gray-500 mt-2 line-clamp-2 min-h-8">
                  {formData.description || (
                    <span className="text-gray-300 italic">
                      Gig description preview...
                    </span>
                  )}
                </p>

                <hr className="my-4 border-gray-100" />

                {/* Price Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-400 uppercase">
                    STARTING AT
                  </span>
                  <span className="text-lg font-black text-gray-900">
                    ${formData.price || "0"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Success Box after Submission */}
          {submittedGig && (
            <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs animate-fadeIn">
              <p className="font-bold">🎉 Gig Published Successfully!</p>
              <p className="mt-1">
                Your gig is now live on Fiverr demo portal.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FiverrGigForm;
