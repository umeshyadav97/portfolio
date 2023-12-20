import StropeAI from "@local/assets/images/backgrounds/strope.jpg"
import Customer from "@local/assets/images/backgrounds/customer.jpg"
import Simplee from "@local/assets/images/backgrounds/simplee.jpg"
import Seller from "@local/assets/images/backgrounds/seller.jpg"
export function useProjectController() {
  const projectDeatils = [
    {
      image: StropeAI,
      name: "Strope.AI",
      url: "https://strope.ai",
      techStack: "HTML,CSS,Javascript,React Js,Next Js,Redux,Mui",
      descprition:
        "Strope AI, a user-friendly model, streamlines app development by allowing users to select a category that best fits their app. After understanding user preferences, it guides them to a template selection page, where they can customize features based on the chosen template. The model then computes the estimated cost and development time for the selected features, providing a comprehensive overview for efficient decision-making."
    },
    {
      image: Customer,
      name: "NFX Customer ",
      url: "https://dev.customer.nfx-seller.foxlabs.in/",
      techStack: "HTML,CSS,Javascript,React Js,Next Js,Redux,Mui",
      descprition:
        "NFX E-commerce project is a robust online marketplace designed to revolutionize your shopping experience. With a user-friendly interface, customers can effortlessly browse an extensive range of products, make secure transactions, and enjoy personalized recommendations. The platform ensures a seamless shopping journey, incorporating features like real-time inventory updates, secure payment gateways, and a responsive customer support system. From dynamic product listings to a smooth checkout process, our E-commerce project is tailored for both merchants and consumers, promising a convenient and enjoyable online shopping environment. "
    },
    {
      image: Simplee,
      name: "Simplee",
      url: "https://dev.investor.simplee.foxlabs.in/auth/login",
      techStack: "HTML,CSS,Javascript,React Js,Next Js,Redux,Mui",
      descprition:
        "Simplee is a comprehensive real estate business project with dual panels for Admin and Investors. The Investor panel offers key features such as property distribution, sponsorship options, and banking functionalities. Investors can seamlessly invest in properties or acquire equity on the platform, enhancing their portfolio. The banking feature facilitates easy fund management, allowing users to add or transfer money securely between entities. Simplee provides a user-friendly interface that empowers investors to make informed decisions and actively participate in the dynamic real estate market."
    },
    {
      image: Seller,
      name: "NFX Seller",
      url: "https://dev.nfx-seller.foxlabs.in",
      techStack: "HTML,CSS,Javascript,React Js,Next Js,Redux,Mui",
      descprition:
        "NFX seller panel is a powerful tool for merchants, providing a centralized hub for managing their online business. Sellers can efficiently add, update, and organize product listings, ensuring a dynamic and attractive storefront. The panel offers real-time analytics, enabling sellers to track sales performance and customer behavior for informed decision-making. Additionally, order management features streamline the fulfillment process, while integrated communication tools facilitate direct interaction with customers. With secure payment processing and inventory management capabilities, the E-commerce seller panel empowers merchants to optimize their operations and enhance the overall customer shopping experience."
    }
  ]
  return { projectDeatils }
}
