// config.js
window.portfolioConfig = {
    profileImage: "./images/profile.png",
    // videos: [
    //   {
    //     title: "Campus Connect - Demo under 1 minute",
    //     youtubeId: "Kn4v2icKECI"
    //   }
    //],
    instagramPosts: [
      {
          image: "./images/instagram1.jpg", // Ensure the path is correct
          caption: "Nature Photography",
          link: "https://www.instagram.com/_chasing_chaitra_/" // Your Instagram profile link
      },
      {
          image: "./images/instagram2.jpg", // Ensure the path is correct
          caption: "Event Coverage",
          link: "https://www.instagram.com/_chasing_chaitra_/" // Your Instagram profile link
      }
      // Add more posts as needed
  ],
    projects: [
        {
            title: "Credit Card Fraud Detection System",
            category: "Machine Learning",
            description: "A sophisticated web application built with Django that leverages machine learning to detect fraudulent credit card transactions in real-time. Combines advanced preprocessing techniques with an XGBoost model to accurately predict legitimate vs. fraudulent transactions.",
            image: "images/credit-card-fraud.png",
            tags: ["Django", "XGBoost", "Python", "Data Preprocessing", "Machine Learning", "Responsive Design"],
            live: "https://github.com/chaitra-adiga/credit_card_fraud",
        },
        {
            title: "Breast Cancer Detection System",
            category: "Deep Learning",
            description: "Multi-output deep learning model for breast cancer detection published in IRJET. Processes both mammogram images and tabular clinical data for comprehensive diagnostics and accurate classification.",
            image: "images/breast-cancer-detection.png",
            tags: ["Deep Learning", "TensorFlow", "Medical Imaging", "Classification", "Research Paper"],
            paper: "https://www.irjet.net/volume12-issue2",
            paperInfo: "S.No:11"
        },
        {
            title: "Ingredient Decoder",
            category: "Web Application",
            description: "Web app that helps users understand what's in their food and beauty products by decoding ingredient lists. Features include barcode scanning, image upload for ingredient extraction, manual entry, and toxicity ratings for each ingredient.",
            image: "images/ingredient-decoder.png",
            tags: ["Django", "Python", "Langchain", "LLMs", "AI/ML", "Barcode Scanning"],
            live: "",
            status: "Ongoing"
        },
        {
            title: "Campus Connect",
            category: "Web Application",
            description: "A comprehensive platform connecting students, faculty and administrators to streamline campus communication, resource sharing, and event management. Simplifies academic processes and enhances the campus experience.",
            image: "images/campus-connect.png",
            tags: ["Python", "Django", "Database Management", "Responsive Design", "UX/UI"],
            live: "https://campusconnect0.pythonanywhere.com/",
            video: "https://www.youtube.com/watch?v=Kn4v2icKECI"
        }
    ],
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/chaitra-adiga-1430ba295/",
      github: "https://github.com/chaitra-adiga",
      youtube: "https://www.youtube.com/@ChaitraAdiga-2003",
      email: "chaitraworkk@gmail.com"
    }
};