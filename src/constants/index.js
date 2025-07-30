import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    tigercat,
    sheridan,
    carrent,
    jobit,
    tripguide,
    threejs,
    indoor,
    taz,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full Stack Developer",
        icon: creator,
    },
    {
        title: ".NET Developer",
        icon: backend,
    },
    {
        title: "React Developer",
        icon: web,
    },
    {
        title: "Mobile App Developer",
        icon: mobile,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Web Applications Developer",
        company_name: "Tigercat Industries Inc.",
        icon: tigercat,
        iconBg: "#383E56",
        date: "October 2022 - July 2025",
        points: [
            "Led full-stack development of enterprise applications serving 200+ users with C#/.NET Core and JavaScript",
            "Designed and optimized SQL databases, improving system performance by 40%",
            "Built responsive web interfaces using HTML5, CSS3, React, and Angular",
            "Collaborated with cross-functional teams including engineers and business stakeholders",
            "Developed RESTful APIs with JSON/XML for seamless application integration",
            "Mentored junior developers through code reviews and pair programming",
            "Deployed cross-platform mobile application using React Native",
            "Implemented CI/CD pipelines with Azure DevOps for automated testing and deployment",
            "Established security protocols and maintained high code quality standards",
            "Delivered 3+ major software releases on schedule using agile methodologies"
        ],
    },
    {
        title: "Computer Programming",
        company_name: "Sheridan College",
        icon: sheridan,
        iconBg: "#E6DEDD",
        date: "October 2020 - April 2022",
        points: [
            "Web Development with HTML, CSS, JavaScript, and frameworks",
            "Database Design and SQL programming",
            "Object-oriented programming and design patterns",
            "Version control and team collaboration"
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Paris Indoor Soccer League",
        description:
            "A comprehensive sports league management platform built with React and modern web technologies for seamless member experience, featuring user management and live updates.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "nextjs",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: indoor,
        live_link: "https://paris-indoor-soccer.vercel.app",
        source_code_link: "https://github.com/carvnich/paris-indoor-soccer",
    },
    {
        name: "TAZ Contracting",
        description:
            "A sleek business website showcasing professional construction services with modern design, user-friendly navigation, and comprehensive service portfolio presentation.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: taz,
        live_link: "https://taz-contracting.vercel.app",
        source_code_link: "https://github.com/carvnich/TAZContracting",
    },
    // {
    //     name: "Trip Guide",
    //     description:
    //         "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //     tags: [
    //         {
    //             name: "react",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "supabase",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "tailwind",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: tripguide,
    //     live_link: "https://github.com/",
    //     source_code_link: "https://github.com/",
    // },
];

export {services, technologies, experiences, testimonials, projects};
