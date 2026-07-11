// EmailJS Credentials Configuration
// Replace these with your actual details from the EmailJS dashboard: https://www.emailjs.com/
export const emailConfig = {
  serviceId: "YOUR_SERVICE_ID",      // e.g. "service_xxxxxxx"
  templateId: "YOUR_TEMPLATE_ID",    // e.g. "template_xxxxxxx"
  publicKey: "YOUR_PUBLIC_KEY"       // e.g. "user_xxxxxxxxxxxxxxxx"
};
export const isConfigured = () => {
  return (
    emailConfig.serviceId !== "YOUR_SERVICE_ID" &&
    emailConfig.templateId !== "YOUR_TEMPLATE_ID" &&
    emailConfig.publicKey !== "YOUR_PUBLIC_KEY"
  );
};
