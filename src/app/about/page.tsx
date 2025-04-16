export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">Hakkımda</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Yazılım geliştirme tutkum ve deneyimlerim
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Merhaba, Ben Bartu Uzungün 👋
          </h2>
          <p className="text-gray-600 mb-4">
            2 yıldır yazılım geliştirme alanında çalışıyorum. Modern web
            teknolojileri ve kullanıcı deneyimi konularında uzmanlaşmış bir
            yazılım geliştiriciyim.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Uzmanlık Alanlarım
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Frontend Geliştirme
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Backend Geliştirme
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Node.js</li>
                <li>Python</li>
                <li>RESTful APIs</li>
                <li>Database Design</li>
              </ul>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Eğitim</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  İstinye Üniversitesi
                </h3>
                <p className="text-gray-600">Bilgisayar Teknolojisi • 2024</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              İş Deneyimi
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  [Şirket Adı]
                </h3>
                <p className="text-gray-600 font-medium">
                  [Pozisyon] • [Tarih Aralığı]
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>[Önemli başarı veya sorumluluk 1]</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Hobiler ve İlgi Alanları
          </h2>
          <p className="text-gray-600">
            [Burada kişisel ilgi alanlarınızdan ve hobilerinizden bahsedin. Bu,
            sizi daha yakından tanımak isteyenler için iyi bir fırsat olabilir.]
          </p>
        </section>
      </div>
    </div>
  );
}
