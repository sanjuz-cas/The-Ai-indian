
export default function Services() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
        <div>
          <h3 className="text-xl font-semibold">AI Platform Development</h3>
          <p>We create intelligent, scalable platforms that drive automation and insights.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Deep Learning Models</h3>
          <p>We design and deploy optimized neural networks for various tasks including vision, NLP, and more.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Data Preprocessing</h3>
          <p>We clean and prepare complex datasets for efficient training and deployment.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Model Architecture Guidance</h3>
          <p>We consult with teams to choose the right architectures and frameworks for their goals.</p>
        </div>
      </div>
    </section>
  );
}
