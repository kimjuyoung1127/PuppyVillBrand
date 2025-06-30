const galleryImages = [
    "/images/jason/gallery/1.jpg",
    "/images/jason/gallery/2.jpg",
    "/images/jason/gallery/3.jpg",
    "/images/jason/gallery/4.jpg",
    "/images/jason/gallery/5.jpg",
    "/images/jason/gallery/6.jpg",
    "/images/jason/gallery/7.jpg",
    "/images/jason/gallery/8.jpg",
    "/images/jason/gallery/9.jpg",
    "/images/jason/gallery/10.jpg",
    "/images/jason/gallery/11.jpg",
    "/images/jason/gallery/12.jpg",
    "/images/jason/gallery/13.jpg",
    "/images/jason/gallery/14.jpg",
    "/images/jason/gallery/15.jpg",
    "/images/jason/gallery/16.jpg",
    "/images/jason/gallery/17.jpg",
    "/images/jason/gallery/18.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">교육 갤러리</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image || "/images/placeholder.svg"}
                  alt={`교육 사진 ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-lg font-semibold">훈련 현장</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}