"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [activeStep, setActiveStep] = useState(1);
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");

  const price = 69.00;
  const tax = price * 0.1; // 10% tax
  const subtotal = price * quantity;
  const discountAmount = subtotal * (discount / 100);
  const totalPrice = subtotal - discountAmount;
  const totalTax = totalPrice * 0.1; // Tax on discounted price
  const finalTotal = totalPrice + totalTax;

  const cryptoOptions = [
    {
      id: "bitcoin",
      name: "Bitcoin (BTC)",
      icon: "₿",
      address: "36ajLLhXgKnPnvsFd5UuxYQLjLrbqkGoTc"
    },
    {
      id: "ethereum",
      name: "Ethereum (ETH)",
      icon: "Ξ",
      address: "0xF214F801C42d520987Bed18B08C0D783257f44Ba"
    },
    {
      id: "usdc",
      name: "USD Coin (USDC)",
      icon: "⓾",
      address: "0x738DC2f258B2a2BF66C245F56Db6E5Cc5f42b4C6"
    },
    {
      id: "solana",
      name: "Solana (SOL)",
      icon: "◎",
      address: "3ad21Wh1oCD6ABLgzxBHzHEgtk7PAPv3iT4Y5oNHC7YS"
    },
  ];

  const validCoupons = [
    { code: "AIR45", discount: 45 },
    { code: "POD60", discount: 60 }
  ];

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleCryptoChange = (cryptoId: string) => {
    setSelectedCrypto(cryptoId);
  };

  const handleCouponInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCouponCode(e.target.value.toUpperCase());
    setCouponError("");
  };

  const applyCoupon = () => {
    if (!couponCode) {
      setCouponError("Please enter a coupon code");
      return;
    }

    const foundCoupon = validCoupons.find(
      coupon => coupon.code === couponCode
    );

    if (foundCoupon) {
      setAppliedCoupon(foundCoupon.code);
      setDiscount(foundCoupon.discount);
      setCouponError("");
      setCouponCode("");
    } else {
      setCouponError("Invalid coupon code");
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setDiscount(0);
  };

  const handleCompletePurchase = () => {
    // In a real application, you would submit order details to a backend
    // For now, we'll just navigate to a thank you page
    router.push("/checkout/thank-you");
  };

  const selectedWalletAddress = cryptoOptions.find(crypto => crypto.id === selectedCrypto)?.address;

  return (
    <div className="container max-w-7xl mx-auto">
      <Link href="/" className="inline-flex items-center text-white hover:text-lionpods-mint transition-colors mb-8">
        <svg
          className="mr-2"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6667 8H3.33334"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.00001 12.6667L3.33334 8.00004L8.00001 3.33337"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to product
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="mb-8 flex justify-between">
              <div className="flex flex-col items-center text-lionpods-mint">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${activeStep === 1 ? 'bg-lionpods-mint text-lionpods-gray-dark' : 'bg-lionpods-gray-dark text-gray-500'}`}>
                  1
                </div>
                <span className="text-xs">Contact</span>
              </div>
              <div className="flex flex-col items-center text-gray-500">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${activeStep === 2 ? 'bg-lionpods-mint text-lionpods-gray-dark' : 'bg-lionpods-gray-dark text-gray-500'}`}>
                  2
                </div>
                <span className="text-xs">Shipping</span>
              </div>
              <div className="flex flex-col items-center text-gray-500">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${activeStep === 3 ? 'bg-lionpods-mint text-lionpods-gray-dark' : 'bg-lionpods-gray-dark text-gray-500'}`}>
                  3
                </div>
                <span className="text-xs">Payment</span>
              </div>
            </div>

            {activeStep === 1 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center">Contact Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="firstName"
                        className="bg-lionpods-gray-dark border-white/10 text-white"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="lastName"
                        className="bg-lionpods-gray-dark border-white/10 text-white"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-lionpods-gray-dark border-white/10 text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1 flex items-center">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      className="bg-lionpods-gray-dark border-white/10 text-white"
                      placeholder="e.g., 555-123-4567"
                    />
                    <p className="text-xs text-gray-400 mt-1">Required for shipping and delivery updates</p>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center">Shipping Information</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="address"
                      className="bg-lionpods-gray-dark border-white/10 text-white"
                      placeholder="Enter your street address"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-1">
                        City <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="city"
                        className="bg-lionpods-gray-dark border-white/10 text-white"
                        placeholder="Enter your city"
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-300 mb-1">
                        ZIP Code <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="zipCode"
                        className="bg-lionpods-gray-dark border-white/10 text-white"
                        placeholder="Enter your ZIP code"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-300 mb-1">
                        State/Province <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="state"
                        className="bg-lionpods-gray-dark border-white/10 text-white"
                        placeholder="Enter your state"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-1">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="country"
                        className="bg-lionpods-gray-dark border-white/10 text-white"
                        placeholder="Enter your country"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center">Cryptocurrency Payment</h2>
                <div className="space-y-4">
                  <div className="mb-6">
                    <p className="text-sm text-gray-300 mb-3">
                      Select your preferred cryptocurrency payment method:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {cryptoOptions.map((crypto) => (
                        <div
                          key={crypto.id}
                          onClick={() => handleCryptoChange(crypto.id)}
                          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                            selectedCrypto === crypto.id
                              ? 'bg-lionpods-mint/10 border-lionpods-mint'
                              : 'bg-lionpods-gray-dark border-white/10 hover:border-white/30'
                          }`}
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3 text-xl">
                              {crypto.icon}
                            </div>
                            <span className="font-medium">{crypto.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-lionpods-mint/10 border border-lionpods-mint/20 rounded-lg">
                    <h3 className="font-medium text-lionpods-mint mb-2">Payment Instructions</h3>
                    <p className="text-sm text-gray-300 mb-3">
                      Send your payment to the wallet address below. Your order will process once your transaction is confirmed.
                    </p>

                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center justify-between text-sm bg-black/30 p-2 rounded">
                        <span className="text-gray-400">Selected payment method:</span>
                        <span className="font-medium text-white">
                          {cryptoOptions.find(c => c.id === selectedCrypto)?.name}
                        </span>
                      </div>

                      <div className="bg-black/30 p-3 rounded">
                        <p className="text-xs text-gray-400 mb-1">Wallet Address:</p>
                        <div className="flex items-center justify-between gap-2">
                          <div className="bg-black/50 p-2 rounded text-xs text-gray-200 font-mono overflow-x-auto whitespace-nowrap flex-1">
                            {selectedWalletAddress}
                          </div>
                          <button
                            onClick={() => navigator.clipboard.writeText(selectedWalletAddress || '')}
                            className="bg-lionpods-mint/20 hover:bg-lionpods-mint/30 text-lionpods-mint p-2 rounded text-xs transition-colors"
                          >
                            Copy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between">
              {activeStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  className="border-white/10 text-white hover:bg-white/5"
                  onClick={() => handleStepChange(activeStep - 1)}
                >
                  Back
                </Button>
              )}
              {activeStep < 3 ? (
                <Button
                  type="button"
                  className="py-3 px-6 bg-lionpods-mint text-lionpods-gray-dark rounded-lg font-medium hover:bg-lionpods-mint-light transition-colors ml-auto"
                  onClick={() => handleStepChange(activeStep + 1)}
                >
                  Continue
                </Button>
              ) : (
                <Button
                  type="button"
                  className="py-3 px-6 bg-lionpods-mint text-lionpods-gray-dark rounded-lg font-medium hover:bg-lionpods-mint-light transition-colors ml-auto"
                  onClick={handleCompletePurchase}
                >
                  Complete Purchase
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="glass-card rounded-2xl p-6 md:p-8 sticky top-24">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="w-20 h-20 bg-white/5 rounded-lg flex items-center justify-center">
                <Image
                  src="https://ext.same-assets.com/1493134636/1551746220.png"
                  alt="LionPods"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">LionPods</h3>
                <div className="flex items-center mt-1">
                  <div className="flex border border-white/10 rounded-md">
                    <button
                      onClick={decreaseQuantity}
                      className="w-8 h-8 flex items-center justify-center text-white hover:text-lionpods-mint hover:bg-white/5 transition-colors"
                    >
                      -
                    </button>
                    <div className="w-10 h-8 flex items-center justify-center border-x border-white/10">
                      {quantity}
                    </div>
                    <button
                      onClick={increaseQuantity}
                      className="w-8 h-8 flex items-center justify-center text-white hover:text-lionpods-mint hover:bg-white/5 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-right font-medium">${(price * quantity).toFixed(2)}</div>
            </div>

            {/* Coupon Code Section */}
            <div className="mb-6 pb-6 border-b border-white/10">
              {appliedCoupon ? (
                <div className="flex justify-between items-center bg-lionpods-mint/10 p-3 rounded-lg">
                  <div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-lionpods-mint mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="font-medium text-sm">{appliedCoupon}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{discount}% discount applied</p>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2">
                    <Input
                      value={couponCode}
                      onChange={handleCouponInput}
                      className="bg-lionpods-gray-dark border-white/10 text-white"
                      placeholder="Enter coupon code"
                    />
                    <Button
                      onClick={applyCoupon}
                      className="bg-lionpods-mint text-lionpods-gray-dark hover:bg-lionpods-mint-light whitespace-nowrap"
                    >
                      Apply
                    </Button>
                  </div>
                  {couponError && (
                    <p className="text-red-500 text-xs mt-2">{couponError}</p>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
              <div className="flex justify-between">
                <span className="text-gray-300">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-lionpods-mint">
                  <span>Discount ({discount}%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="text-gray-300">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Tax</span>
                <span>${totalTax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center font-medium text-lg mb-8">
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="mr-2 text-lionpods-mint flex-shrink-0 mt-1"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
                  <polyline points="15,9 10,15 7,12" />
                </svg>
                <span className="text-sm text-gray-300">
                  Free shipping on all orders. Estimated delivery: 3-5 business days
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="mr-2 text-lionpods-mint flex-shrink-0 mt-1"
                  width="16"
                  height="16"
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
                <span className="text-sm text-gray-300">
                  Secure cryptocurrency payment. Your data is protected
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="mr-2 text-lionpods-mint flex-shrink-0 mt-1"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                <span className="text-sm text-gray-300">
                  We accept multiple cryptocurrencies for secure, private transactions
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 mb-2 text-sm">Questions about your order or our product?</p>
              <a
                href="https://discord.gg/FsUvANDjNv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lionpods-mint hover:text-lionpods-mint-light transition-colors"
              >
                <svg
                  className="mr-2"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Join our Support Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
