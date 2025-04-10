import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-lionpods-mint/20 text-lionpods-mint">
                Premium Sound Experience
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Immerse in{" "}
              <span className="text-lionpods-mint">Crystal Clear</span> Sound
            </h1>
            <p className="text-gray-300 mb-8">
              Experience music like never before with LionPods. Active noise
              cancellation, spatial audio, and premium sound quality in a sleek,
              comfortable design.
            </p>
            <Link
              href="/checkout"
              className="inline-flex items-center rounded-md text-sm font-medium h-12 px-6 py-3 bg-lionpods-mint text-lionpods-gray hover:bg-lionpods-mint-light transition-colors"
            >
              Buy Now
              <svg
                className="ml-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66675 8H13.3334"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.33325 4L13.3333 8L9.33325 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-lionpods-mint/20 to-transparent flex items-center justify-center">
              <Image
                src="https://ext.same-assets.com/1572215979/2620546229.png"
                alt="LionPods"
                width={350}
                height={350}
                className="object-contain z-10"
              />
              <div className="absolute top-12 right-12 w-4 h-4 rounded-full bg-lionpods-mint"></div>
              <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-lionpods-mint"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-lionpods-mint/20 text-lionpods-mint mb-4">
            Cutting-Edge Technology
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Advanced Features for an Unparalleled Experience
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            LionPods combine innovative technology with sleek design to deliver
            exceptional audio quality and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-2xl flex flex-col items-start">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-lionpods-mint/20 text-lionpods-mint mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18.84 12.25 1 23.5V1l17.84 11.25a1 1 0 0 1 0 1.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Active Noise Cancellation
            </h3>
            <p className="text-gray-300">
              Block out external noise for immersive listening experience with
              advanced ANC technology.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col items-start">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-lionpods-mint/20 text-lionpods-mint mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">24-Hour Battery Life</h3>
            <p className="text-gray-300">
              Up to 6 hours of listening time, with an additional 18 hours from
              the charging case.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col items-start">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-lionpods-mint/20 text-lionpods-mint mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12 2 12" />
                <path d="M14 12 11 12" />
                <path d="M22 12 19 12" />
                <path d="M6 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                <path d="M17 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Seamless Connection</h3>
            <p className="text-gray-300">
              Bluetooth 5.2 for stable, long-range connections and easy device
              switching.
            </p>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section id="specs" className="py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical Details
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Premium Specifications for Audiophiles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-lionpods-mint">
              Audio Specifications
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Driver Size</span>
                <span className="font-medium">11mm Custom Dynamic</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Frequency Response</span>
                <span className="font-medium">20Hz - 20,000Hz</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Active Noise Cancellation</span>
                <span className="font-medium">Up to 30dB Reduction</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Spatial Audio</span>
                <span className="font-medium">Dynamic Head Tracking</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Sound Modes</span>
                <span className="font-medium">ANC, Transparent, Normal</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-lionpods-mint">
              Battery & Power
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Earbuds Battery Life</span>
                <span className="font-medium">Up to 6 Hours (ANC On)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Case Battery Life</span>
                <span className="font-medium">Additional 18 Hours</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Total Playtime</span>
                <span className="font-medium">24 Hours</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Charging Time</span>
                <span className="font-medium">1.5 Hours</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Quick Charge</span>
                <span className="font-medium">10 Min for 1 Hour Playback</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section id="purchase" className="py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Premium Audio Experience
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            LionPods - Elevate Your Sound
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-lionpods-mint/20 to-transparent flex items-center justify-center">
              <Image
                src="https://ext.same-assets.com/1572215979/2620546229.png"
                alt="LionPods"
                width={350}
                height={350}
                className="object-contain z-10"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="glass-card p-8 rounded-2xl h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-2">LionPods</h3>
              <p className="text-3xl font-bold text-lionpods-mint mb-6">$69USD</p>
              <p className="text-gray-300 mb-6">
                Enhanced features for the ultimate audio experience
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="mr-2 text-lionpods-mint"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3334 4L6.00008 11.3333L2.66675 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Advanced Noise Cancellation</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 text-lionpods-mint"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3334 4L6.00008 11.3333L2.66675 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>24 Hours Total Battery Life</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 text-lionpods-mint"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3334 4L6.00008 11.3333L2.66675 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Spatial Audio with Head Tracking</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 text-lionpods-mint"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3334 4L6.00008 11.3333L2.66675 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Customizable EQ Settings</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 text-lionpods-mint"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3334 4L6.00008 11.3333L2.66675 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Wireless Charging Case</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 text-lionpods-mint"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3334 4L6.00008 11.3333L2.66675 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>1-Year Warranty</span>
                </li>
              </ul>

              <Link
                href="/checkout"
                className="mt-auto inline-flex items-center justify-center rounded-md text-sm font-medium h-12 px-6 py-3 w-full bg-lionpods-mint text-lionpods-gray hover:bg-lionpods-mint-light transition-colors"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl mb-4">Have questions about LionPods?</p>
          <a
            href="https://discord.gg/FsUvANDjNv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-lionpods-mint hover:text-lionpods-mint-light transition-colors"
          >
            <svg
              className="mr-2"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            Join our Support Discord
          </a>
        </div>
      </section>
    </div>
  );
}
