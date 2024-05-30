import UAParser from "ua-parser-js";

function isMobile() {

  const parser = new UAParser();
  const result = parser.getResult();

  console.log("📺 This is running on a ", result.device.type || result.device.model, "device.")

   return result.device.type === "mobile";
}

export default isMobile;
