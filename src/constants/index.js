import { FaApple, FaGoogle, FaUber } from "react-icons/fa";
import { SiVercel, SiStripe, SiMeta, SiRazorpay, SiAtlassian } from "react-icons/si";
import { RxVercelLogo } from "react-icons/rx";
import { BiLogoEdge } from "react-icons/bi"

export const points = [
    "Well, hiring me comes with a complimentary package of unparalleled wit, a knack for turning challenges into well, still challenges but with a bit of humour, and a passion for delighting with everything I build.",

    "Jokes aside, I've worked among leading engineering teams in India. I also have experience across food-tech, ed-tech, and fin-tech domains.",

    "I am a quick learner, can work independently, and love a challenge.",

    "Just to remind you, I am a Full-stack engineer with expertise in React, TypeScript, and Node.js, specializing in building scalable, high-performance applications."
]

export const preferences = [
    {
        title: "Amazing work culture.",
        description:
            "It's fair to say I've been spoilt by the amazing work culture at my previous companies. I'd love to work at a place that values its employees and their well-being."
    },
    {
        title: "Remote first.",
        description:
            "I value the flexibility and comfort of working from anywhere. A company that supports remote work is a big plus for me."
    },
    {
        title: "Familiar tech stack.",
        description:
            "I believe in using the right tool for the right job, and so far I've been able to pick up new technologies fairly quickly."
    },
    {
        title: "Fair compensation.",
        description:
            "I won't lie, I love getting fairly paid for the work I do. But that's not my only incentive — my side projects are a testament to that."
    }
]


export const companies = [
    { name: "Apple", logo: FaApple, type: "hire", action: "Hire me for Apple" },
    { name: "Google", logo: FaGoogle, type: "hire", action: "Hire me for Google" },
    { name: "Vercel", logo: SiVercel, type: "hire", action: "Hire me for Vercel" },
    { name: "Stripe", logo: SiStripe, type: "hire", action: "Hire me for Stripe" },
    { name: "Meta", logo: SiMeta, type: "hire", action: "Hire me for Meta" },
    { name: "Uber", logo: FaUber, type: "hire", action: "Hire me for Uber" },
    { name: "Razorpay", logo: SiRazorpay, type: "hire", action: "Hire me for Razorpay" },
    { name: "Atlassian", logo: SiAtlassian, type: "hire", action: "Hire me for Atlassian" },
    { name: "Emerson", logo: BiLogoEdge, type: "worked", duration: "Aug 2021 — Dec 2025" },
    { name: "SCE", logo: RxVercelLogo, type: "worked", duration: "Jan 2026 — Present" },
];