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
            image: "./images/1.jpeg",
            caption: "Sanmana - Event",
            link: "https://www.instagram.com/p/Cx3JK3nSUK9/?img_index=1"
        },
        {
            image: "./images/2.jpeg",
            caption: "Dance Event Coverage",
            link: "https://www.instagram.com/p/CxqRPLjS3kg/?img_index=3"
        },
        {
            image: "./images/3.jpg",
            caption: "Street style photography", 
            link: "https://www.instagram.com/p/Cw2iLYOvgHn/?img_index=2"
        },
        {
            image: "./images/4.jpeg",
            caption: "Siblings - Street Style",
            link: "https://www.instagram.com/p/CwpvrOdSrNX/?img_index=1"
        },
        {
            image: "./images/5.jpeg",
            caption: "Rain Drenched Nature's beauty",
            link: "https://www.instagram.com/p/Cwz8lclywlY/"
        },
        {
            image: "./images/6.jpeg",
            caption: "Concert - Mood Indigo(event) ",
            link: "https://www.instagram.com/p/Cwh8EbeyXOl/?img_index=1"
        },
        {
            image: "./images/7.jpeg",
            caption: "Event Potraits - Independence day",
            link: "https://www.instagram.com/p/Cv-EIn7yV3e/?img_index=1"
        }
        // Add more posts as needed
      ],
    projects: [
        {
            title: "Credit Card Fraud Detection System",
            category: "Machine Learning & Full-Stack",
            description: "A sophisticated web application built with Django that leverages machine learning to detect fraudulent credit card transactions in real-time. Combines advanced preprocessing techniques with an XGBoost model to accurately predict legitimate vs. fraudulent transactions.",
            image: "images/Credit Card Fraud Detection.png",
            tags: ["Django", "XGBoost", "Python", "Data Preprocessing", "Machine Learning", "Responsive Design"],
            github: "https://github.com/chaitra-adiga/credit_card_fraud",
        },
        {
            title: "Breast Cancer Detection System & Full-Stack",
            category: "Deep Learning",
            description: "Multi-output deep learning model for breast cancer detection published in IRJET. Processes both mammogram images and tabular clinical data for comprehensive diagnostics and accurate classification.",
            image: "images/End-to-End Breast Cancer Detection.png",
            tags: ["Deep Learning", "TensorFlow", "Medical Imaging", "Classification", "Research Paper"],
            paper: "https://www.irjet.net/volume12-issue2",
            paperInfo: "S.No:11",
            github: "https://github.com/chaitra-adiga/breast_cancer_detection",
        },
        {
            title: "Ingredient Decoder",
            category: "Gen AI & Full-Stack",
            description: "Web app that helps users understand what's in their food and beauty products by decoding ingredient lists. Features include barcode scanning, image upload for ingredient extraction, manual entry, and toxicity ratings for each ingredient.",
            image: "images/ingredient decoder.png",
            tags: ["Django", "Python", "Langchain", "LLMs", "AI/ML", "Barcode Scanning"],
            github: "https://github.com/chaitra-adiga/IngredientDecoder",
            status: "Ongoing"
        },
        {
            title: "Campus Connect",
            category: "Web Application",
            description: "A comprehensive platform connecting students, faculty and administrators to streamline campus communication, resource sharing, and event management. Simplifies academic processes and enhances the campus experience.",
            image: "images/campus connect.png",
            tags: ["Python", "Django","Bootstrap","Google O-Auth","Database Management", "Responsive Design", "UX/UI"],
            website: "https://campusconnect0.pythonanywhere.com/",
            video: "https://www.youtube.com/watch?v=Kn4v2icKECI",
            github:"https://github.com/chaitra-adiga/campus_connect"
        }
    ],
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/chaitra-adiga-1430ba295/",
      github: "https://github.com/chaitra-adiga",
      youtube: "https://www.youtube.com/@ChaitraAdiga-2003",
      email: "chaitraworkk@gmail.com"
    }
};