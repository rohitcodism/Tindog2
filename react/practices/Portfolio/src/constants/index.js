import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    python,
    cpp,
    canva,
    clogo,
    exlogo,
    winter,
    console,
    nft,
    sccselogo,
    iconz
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
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "UI Designer",
        icon: mobile,
    },
    {
        title: "DSA Enthusiast",
        icon: backend,
    },
    {
        title: "Freelancer",
        icon: creator,
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
        name: "Python",
        icon: python,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "C++",
        icon: cpp,
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
        name: "C",
        icon: clogo,
    },
    {
        name: "Express Js",
        icon: exlogo,
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
        name: "Canva",
        icon: canva,
    },
];

const experiences = [
    {
        title: "UI Designer",
        company_name: "SC CSE AOT",
        icon: sccselogo,
        iconBg: "#383E56",
        date: "March 2023 - Present",
        points: [
            "Designing interactive web applications and mobile applications using Figma and other softwares.",
            "As a UI Designer at Students Chapter CSE, my role involves creating visually appealing and intuitive user interfaces for various digital platforms.",
            "Collaborating with the development team and stakeholders, I design and prototype engaging user interfaces.",
            "I also collaborate with the marketing team to design visually appealing graphics and promotional materials.",
        ],
    },
    {
        title: "UI Designer",
        company_name: "Qbit",
        icon: iconz,
        iconBg: "#E6DEDD",
        date: "Mar 2023 - Present",
        points: [
            "I create visually captivating and user-centric interfaces for websites and applications, delivering engaging digital experiences.",
            "Collaborating closely with clients, I translate their design requirements into pixel-perfect UIs.",
            "Through wireframing, prototyping, and user testing, I iterate and refine designs to ensure optimal usability and a visually cohesive experience.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Qbit",
        icon: iconz,
        iconBg: "#383E56",
        date: "Apr 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with Qbit team members and designers and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    // {
    //     title: "Aspiring Data Scientist",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
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
        name: "Winter",
        description:
            "Landing page for a e-commerce website.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: winter,
        source_code_link: "https://github.com/rohitcodism/Weby/tree/main/Websites%20built/Winter",
    },
    {
        name: "Crypto Website Landing Page",
        description:
            "Landing page for a crypto website.",
        tags: [
            {
                name: "figma",
                color: "blue-text-gradient",
            }
        ],
        image: nft,
        source_code_link: "https://www.figma.com/file/br0Cs6WluWMo3WDGhiMiXx/Kryptoprototype?type=design&t=o2Z167YYoGxykvih-6",
    },
    {
        name: "Console",
        description:
            "Advertisement of a gaming console brand.",
        tags: [
            {
                name: "figma",
                color: "blue-text-gradient",
            }
        ],
        image: console,
        source_code_link: "https://www.figma.com/file/ouGRN0eG9iWSoBrw4WSnP7/CONSOLE?type=design&t=6e9EBDK3qqiZsyTD-6",
    }

];

export { services, technologies, experiences, testimonials, projects };