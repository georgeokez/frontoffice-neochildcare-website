import { createProxyMiddleware } from "http-proxy-middleware";

export const config = {
  api: {
    bodyParser: false,
  },
};
export default createProxyMiddleware({
  target: "https://api.jiffix.com.ng/", //the data server
  changeOrigin: true,
});