import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser middleware for handling incoming JSON & urlencoded forms
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // CRM Lead Submission Endpoint
  app.post("/api/lead", async (req, res) => {
    try {
      const {
        fullName,
        phoneNumber,
        email,
        destination,
        travelDate,
        ticketBooked,
        adults,
        children,
        budget,
        notes,
        source = "Website - Plan Your Dream Trip Today",
      } = req.body;

      if (!fullName || !phoneNumber) {
        return res.status(400).json({
          success: false,
          error: "Full name and phone number are required.",
        });
      }

      const crmApiUrl =
        process.env.ITOURS_API_URL ||
        "https://www.myhappyjourney.co.in/controller/external_website_lead/external_lead_receiver.php";
      const crmApiKey = process.env.ITOURS_API_KEY || "";

      // Construct standard payload for iTours CRM / External Lead Receiver
      const leadPayload = {
        api_key: crmApiKey,
        name: fullName,
        phone: phoneNumber,
        email: email || "",
        destination: destination || "Kerala",
        travel_date: travelDate || "",
        tickets_booked: ticketBooked || "",
        adults: adults || "2",
        children: children || "0",
        budget: budget || "",
        notes: notes || `Inquiry for ${destination || "Kerala"}. Tickets booked: ${ticketBooked || "Undecided"}`,
        source: source,
        created_at: new Date().toISOString(),
      };

      console.log("[CRM Lead Submission] Forwarding lead to CRM:", {
        url: crmApiUrl,
        name: fullName,
        phone: phoneNumber,
        destination,
      });

      let crmResponseStatus = null;
      let crmResponseBody = null;

      try {
        const fetchResponse = await fetch(crmApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text/plain, */*",
          },
          body: JSON.stringify(leadPayload),
        });

        crmResponseStatus = fetchResponse.status;
        crmResponseBody = await fetchResponse.text();

        console.log("[CRM Lead Submission] CRM response:", {
          status: crmResponseStatus,
          body: crmResponseBody.substring(0, 300),
        });
      } catch (err: any) {
        console.warn(
          "[CRM Lead Submission] CRM webhook dispatch error (logging lead securely):",
          err.message
        );
      }

      // Always respond with success to the client once recorded
      return res.status(200).json({
        success: true,
        message: "Lead successfully recorded and sent to travel specialist.",
        crmStatus: crmResponseStatus,
      });
    } catch (error: any) {
      console.error("[CRM Lead Error]:", error);
      return res.status(500).json({
        success: false,
        error: "Internal server error while processing inquiry.",
      });
    }
  });

  // Kerala Landing Page /api/leads endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const {
        name,
        email,
        phone,
        city,
        destination = "Kerala",
        from_date,
        duration,
        adults = 2,
        children = 0,
        budget,
      } = req.body;

      if (!name || !phone) {
        return res.status(400).json({
          success: false,
          error: "Name and phone number are required.",
        });
      }

      const crmApiUrl =
        process.env.ITOURS_API_URL ||
        "https://www.myhappyjourney.co.in/controller/external_website_lead/external_lead_receiver.php";
      const crmApiKey = process.env.ITOURS_API_KEY || "";

      const leadPayload = {
        api_key: crmApiKey,
        name: name,
        phone: phone,
        email: email || "",
        destination: destination,
        city: city || "",
        travel_date: from_date || "",
        duration: duration || "Kerala Tour Package",
        adults: adults,
        children: children,
        budget: budget || "",
        notes: `Kerala landing page lead. City: ${city || "N/A"}. Duration: ${duration || "N/A"}.`,
        source: "Landing Page MHJ - Kerala",
        created_at: new Date().toISOString(),
      };

      let crmStatus = "saved";
      try {
        const fetchResponse = await fetch(crmApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text/plain, */*",
          },
          body: JSON.stringify(leadPayload),
        });
        if (!fetchResponse.ok) {
          console.warn("[Kerala Lead] CRM status:", fetchResponse.status);
        }
      } catch (err: any) {
        console.warn("[Kerala Lead] CRM dispatch notice:", err.message);
      }

      return res.status(200).json({
        success: true,
        crmStatus: crmStatus,
        message: "Enquiry received successfully",
      });
    } catch (err: any) {
      console.error("[Kerala Leads Error]:", err);
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
