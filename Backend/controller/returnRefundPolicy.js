// controller/returnRefundPolicy.js

const returnRefundPolicy = {
  heading: "Return & Refund Policy",
  effectivedate: "2025-09-24",
  description:
    "We want you to be fully satisfied with your purchase. If for any reason you are not, you may request a return or refund in accordance with the terms below.",

  sections: [
    {
      title: "1. Eligibility for Returns",
      content:
        "Returns are accepted within 30 days of purchase provided the item is unused, in its original packaging, and accompanied by a valid receipt or proof of purchase.",
    },
    {
      title: "2. Refund Process",
      content:
        "Refunds will be issued to the original method of payment within 7–10 business days after we receive and inspect the returned product. In case of digital services, refund eligibility will depend on service usage and activation status.",
    },
    {
      title: "3. Non-Refundable Items",
      content:
        "Certain items and services are non-refundable, including:\n" +
        "• Digital goods, subscription fees, and downloadable content\n" +
        "• Customized or personalized products\n" +
        "• Services already rendered or partially used",
    },
    {
      title: "4. Damaged or Defective Items",
      content:
        "If you receive a damaged or defective item, please contact our support team within 48 hours of delivery. We may require photographic or video proof to initiate a replacement or refund.",
    },
    {
      title: "5. Late or Missing Refunds",
      content:
        "If you haven’t received your refund yet:\n" +
        "• Check your bank account again.\n" +
        "• Contact your credit card company or bank — it may take some time before your refund is officially posted.\n" +
        "• If you’ve done all of this and still haven’t received your refund, please contact us at support@digivahan.in.",
    },
    {
      title: "6. Cancellation Policy",
      content:
        "Orders for physical QR stickers or related products can be cancelled only before dispatch. Once shipped, the order cannot be cancelled. For digital services, cancellations are subject to service activation status.",
    },
    {
      title: "7. Contact Information",
      content:
        "For queries regarding returns or refunds, reach out to:\n" +
        "📧 support@digivahan.in\n" +
        "📞 +91-XXXXXXXXXX",
    },
  ],
};

// ✅ Controller function to send policy data
exports.ReturnRefundPolicy = (req, res) => {
  try {
    res.status(200).json(returnRefundPolicy);
  } catch (error) {
    console.error("Error while fetching Return & Refund Policy:", error);
    res
      .status(500)
      .json({ message: "Server error while fetching Return & Refund Policy" });
  }
};

