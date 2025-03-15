import { CiUser } from "react-icons/ci";
import { FaProjectDiagram } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";

export const data = {
    sidebar: {
        links: [
            {
                name: 'Github',
                href: 'https://github.com/raik-casimiro',
                icon: FaGithub
            },
            {
                name: 'Linkedin',
                href: 'https://www.linkedin.com/in/raik-casimiro/',
                icon: FaLinkedin 
            }
        ]
    },
    header: {
        pages: [
            { 
                label: "Sobre_mim.tsx",  
                hash: "#about",
                icon: CiUser 
            },
            { 
                label: "Projetos.tsx",  
                hash: "#projects",
                icon: FaProjectDiagram 
            },
            { 
                label: "Contato.tsx",  
                hash: "#contact",
                icon: MdContactMail 
            },
        ]
    }
}