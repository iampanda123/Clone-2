"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  const router = useRouter();
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    // Generate a random order number
    const randomOrderNumber = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
    setOrderNumber(`LP-${randomOrderNumber}`);
  }, []);

  return (
    <div className="container max-w-3xl mx-auto py-20 px-6">
      <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
        <div className="w-20 h-20 rounded-full bg-lionpods-mint/20 text-lionpods-mint flex items-center justify-center mx-auto mb-6">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You for Your Order!</h1>

        <p className="text-gray-300 mb-6">
          Your order #{orderNumber} has been placed successfully. You will receive an email confirmation shortly with your order details.
        </p>

        <div className="glass-card p-6 mb-8 rounded-xl bg-black/20">
          <h2 className="text-lg font-semibold mb-4 text-lionpods-mint">Payment Instructions</h2>
          <p className="text-gray-300 mb-4">
            Please complete your cryptocurrency payment within 24 hours to ensure prompt processing of your order. You will receive an email with detailed payment instructions.
          </p>
          <p className="text-gray-300">
            Your order will be shipped as soon as your payment is confirmed on the blockchain.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-lionpods-mint text-lionpods-gray-dark hover:bg-lionpods-mint-light"
          >
            <Link href="/">
              Return to Home
            </Link>
          </Button>

          <Button
            variant="outline"
            className="border-white/10 hover:bg-white/5"
            onClick={() => window.open('mailto:support@lionpods.com')}
          >
            Contact Support
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-medium mb-4">What's Next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-lionpods-mint/10 text-lionpods-mint flex items-center justify-center mb-3">
                <svg
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
              <h4 className="font-medium mb-2">Payment Processing</h4>
              <p className="text-sm text-gray-400 text-center">
                Your payment will be verified on the blockchain network
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-lionpods-mint/10 text-lionpods-mint flex items-center justify-center mb-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M21 12H3M12 3v18" />
                </svg>
              </div>
              <h4 className="font-medium mb-2">Order Packaging</h4>
              <p className="text-sm text-gray-400 text-center">
                Your LionPods will be carefully packaged and prepared for shipping
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-lionpods-mint/10 text-lionpods-mint flex items-center justify-center mb-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
                  <polyline points="15,9 10,15 7,12" />
                </svg>
              </div>
              <h4 className="font-medium mb-2">Fast Delivery</h4>
              <p className="text-sm text-gray-400 text-center">
                Your order will be delivered to you within 3-5 business days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
