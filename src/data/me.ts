import { FaGithub, FaLinkedin } from "react-icons/fa6";

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
                hash: "#about"
            },
            { 
                label: "Projetos.tsx",  
                hash: "#projects"
            },
            { 
                label: "Habilidades.tsx",  
                hash: "#skils"
            },
            { 
                label: "Contato.tsx",  
                hash: "#contact"
            },
        ]
    }
}