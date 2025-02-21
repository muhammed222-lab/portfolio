import React from "react";
import Link from "next/link";
import { Github, Tiktok, Linkedin } from "lucide-react"; // Import social icons
import Image from "next/image";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-300 py-6 mt-20 border-t border-gray-700 w-full mt-5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-4 mb-4 md:mb-0 text-sm">
          {[
            { href: "/about", title: "About" },
            { href: "/article", title: "Article" },
            { href: "/projects", title: "Projects" },
            { href: "/speaking", title: "Speaking" },
            { href: "/uses", title: "Uses" },
            { href: "/contact", title: "Contact" },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.href}
              title={link.title}
              className="text-gray-400 hover:text-[#00c8b3] transition duration-300"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Social Media Icons (Optional) */}
        <div className="flex gap-4 mb-4 md:mb-0">
          <a
            href="https://github.com/muhammed222-lab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-black transition duration-300"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.tiktok.com/@muhammed_olayemi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tiktok"
            className="text-gray-400 hover:text-black transition duration-300"
          >
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAbFBMVEUIAwP///8AAADu7u7v7+/6+vr29vbz8/ORkI////0IBAGenZ38//3l5eXKysqAf37d3d1QT0/U1NS4t7eJiInAwMAwLy+op6cZGBiuraxxcHBjYmKXl5c5OTk/Pj5ZWFlGRUUgICAREBAnJyYhV7XjAAALxUlEQVR4nL1cC5eqIBCOt9VaZmWb1lbb//+Pl4caLwWVvew527EUPofhm2GAWSGECAAEYQYAYNi8oPwDY8T/U/UdxpjfAFBxzn4ghKuubPifUfhvP7dzIR4l/KFPdUheUH976gKtsOd7PAiKif/5tqk4IgFj02PZWKgELlg1W9Q+NAAKe0DhlXr3/m26CyIvNFAKKGHFRYgI2gj8Rdz5cykYBX11LShZXdsQ0XtBfLcihFDGKP9gjNkX1ncEnOt3LKAPsHe9422pethQ3d134mIl3gEpwSKBlCLE1HcSNsKfG/Kr7DWnnwJlI/rxWshOa6tT8tHq5g0pJZGNB0D1DxJAtvepQtLFdd8SUZ3sJ6tuF5SQIC/qw77ovyP48q1Uez6s7ysjbhO+9lbIEYn5DlyA/B2OTyGlJaAErOexra4TSS8z40KjBB0U1kExVjzmd5wJ61EwpoPCOqgPJQi1B9pQ6C8A/y9AEZRxSMuEpMHKEBWayysXBNOPOf2CrRRp0J4nKDZolJHyuUyZbFTPkjKsUzSWiDT60kdfC6odfQoUw7flymTDuvFX7TutG33YpoSWa5EjKZA/UopJFk5bTQEsC0sMu7EyqJSaF2S3SqLgdoGrHfG11+uUjxKwFCIlt9/UYupRbYliAexSAvcShnkK12mIwIsK1miEp4Z4FZDmzyBJWA1w7Eb3Ydg+9Bl9tHhON73TUD0Lug4bZJ0S8r/GxFEdEFj7KaFzcxSjSq7lfVfcOaY/BrWCP4Vqr6Pz9gL0nieTpKG4lko5/TUmKSuqNd4jsXx0pCjz7/uuQ5UbNNoZZA8lgMd/kZNE1QAfJXQ9Kb0CdVEncwqCZQNr2bjQKdAhIe7oA9kCp9cqMc9kxG+QdZ4i19kmGD73ZjlEoILwSByeEjTaUqnwoEH5mi+oGzDLJUpU70KSuea294quPGDGqvk2GGacDPVyjHo/eGfYcodNSmD7BWQgQX1puMo4ocMTG5q2y1n5cYlj4EgK/caJSqqVFjMwFJ2x7yWeAQf1ZSrVO1JULz7Hcdzh1kenp0Xeiguqjg2EnJge29ElReMUcwKoXXR05qxPB1daCAQsGHl+UHlk/61gZcz7tNG3XehqOooOQLQ+wK3XILO8Sg9qFx1euyNm+eiCULlWLnQNPKC4wxH78B5I22L66Gjx3MUHqoyPRGKPQY4dvqOgvmxQ0Yq64aLSQckAR76IN4dBkWesqF55F2rpFJ0sF5QfFEA/saj2xA6aJQhk+HRKkFWkMwSh5SUscDeDoABq4rRd+mMSlJz3URTjJM4FBegtyjWGD0S1ODo9p4gbDIICoGi+I2AJC/ihBNCkiPmMgOKElVXB2QSfcPXTdm4ERag1haJ7Rl9fWLFt7tV7hHoglCa5jaNfU2AKgVLI8jFNgVeNEhabvWhQnCFGNAXWnzg6d3tSTIlHdSoOVJV3cXSy0ONMB4qPP0GaAlQCW5wI1Ib3XwcqUaw8haSgBMUYLRJFoxKAWsFC+ej0mg7UwtHH6zhS6aOzNITgAYVngKqp8NEJjvajp4LaHqeDahgRPnoxexZjxcYcndqqdYVJoO65HH2RsREPntej3u/rRzfj9ICCz+s0UCtYSlAzqJM31shFfVl2w6A2EFZHNAnUUcTRydSoBhfR/qwaWoP1ej0KSr5AVk4AdSLcHY6fL7ZPvU+WooyDkptxqtMuZ3GgGg4KgUlBTi6lAoBBUNbokz9sNmIPB/xtTttzgfmkdxxUBRDXqUmYqp3qt3UcKK19OTS+31VgrAtDMw2UGOJr0UczQPXIQm0IUCgaFIQ3AtauJRnRqfj3/bTCuI9exLoIEF4cPCFQM8wXLMiK7SL9c4HJ7wQkltSOrcSULw7UzdSkP5PUma5ifWHlE/4PUEdukCPXKp4iRvPllVWAp6aCOoNoUKWUgrf/JlBCUlCjnm56UFE6BV9oxNNN3H1cp6ICLkMMhYqyLHBqSdEViwAFv5FPnY77w/t3Ux2axIrOBKOH7xMhNhvU8WUvFadjdICDoODvzoFET65lTQQKR3kJ8Am+LDVnvnBkIjMjgmYRoE62gSHeqWISSXF/inB3OLj8BUtgFb8I0oCqgHCHQz66XDUxykDQPQklcB8dRcxm4IFaoPb+J9KAyvjEgQTtDNwTS1ADCxtJeIpbGRIxQ3Y2ZgzRbRqdUjPk0IqoY2MuA7uGUoBSsQRKUEDTHVDZgK+agqfgA8u9LnRAbwdBDY2MJJLai/gURjSweSce1NYCdZshqStFIo5O8+k65b/xaI2+Get1MKcqjg7GZ61cAHpZD4++nQNqave10WHxbzyOLlacDVD53W9lnlY0ZsYSsGpLrjhcx0E1FnkC/65iCzx3JaYHU+FVrjgwhgNMBX+Z1ZpfCaFtjaYv4HOWWvebTwP950SkfCTCHRzL6ZoeTIX1+rPXZdz8OXYGeKLcsLYFNWPw8fHbbj4llLBxUAe7OXdZH1ZuJH96KBwy8lnYJqNryPDleHkgN5b1oYqm2b03WaXqtbbTLDDPsphKFnJrJzIynum5YU7vdavtarvwuFGGd3v8icKyQ/UL4Xd12Cp1Mh155GezsWYeqN2Prva6BMwUdNYNVCl2x+Mu7/CYoKavjbU7OIy9LmO3323+DBbyPdXGQIjW5vY3Mu6/+LRqvEz3ELjb/dVKCrRHyIpR+oUwn4apiNsMqzfxKtbd/inQ7TQLiOowqQOJmFtM6z5uEdztb3nAgXFofaxk07UcIomk348uty8GRCVMQMSytSpznPMToF2J3+cpYi+R5Tx9TwGscs+ZUYRDG+0hnydGlTkHEjgTfrbrqzOjcuMuCC2ywd8oVHP2tMM3WLP+rJG+y5qFNtVCPtEPQeITthlygjvmPw2CMQs61bAJ8BX3HmZscoA1s4+o9KdrGQ26QBBuvVsgWki3GWffhZZbp2uNI/nhoPoGwkO7BcJdErnc551NgkcNgrEfXR5RoRFOEFe8bUFsVLSM2zfpqzCzT4OYB8RwlBfEW69vO60b0S5r5kLiLojqNOOAmHFyM2CY26KWz1+H/el2y/aH1+9sRNIQg+68aJcFAGhHVGTSj1iamXoSbLCaIwHr0JnRGLVKWOCNm92198yonoODJtqiF4dpT90EIN3ow3pKkxS7myMxPfgQ7o7ef449DZwZ/U+YDjlZW4kHtANixlnS5adVIjFVOfNkusEfMyN6UJ5DFndEnwFYhOmp0uMo36DNi2D66GYSh+gDSwswVXnfeODMaNfB+V9rO9cnPbOEc2ZUP4jfH8efEYebhOnBuuwNRuPE8NGdfAmT98VNgQRPBITzuiAnrwtlt7/K4sC9MubmdTF9dE8ajDYHx+TISRym++7L5XFq5HXp0lUpRcc6jZaH9MLibmLJnTEzgZHjDvdnRj15Xcht+RktC9P3jWJhg30pVNwzozol9FpHy5+UwoLwp2yFYyabMSjBl2hNT5gDGMvmnyx3ML2U60sNGzwn0RopIw9TBSHBpqRm3jZ/orW4/FPnBH3Ie+4cmX/KSKhCzf+fD4Iv1TJYEFYX/GUlcDFa+vwSldNMvgNdAktAooJuBvpjUqI1M/vb5TBrjsAfOlxyMCH7W8+onxwczOJ20F5QwsrmNRGX2EvflIyYqfGMuqmeKYzFJ1rrBUiKSz0to2B9KdoMSm51wURruiYZidawUQsDJL88v8PA5Kbq5zUnorvc6sxkEmNJHPoJhXCMWecla/EQdQNXr2PWvIbmoer7d5MJRDYX65nTCPM2jts4epeuR7vAfYBPZOuhKmGOrE+un1BUlJe6ctOmCJxVfS0LKRiqHu1c8La6LnhI+rqZXvdQVqXP1OJjNLusl+gjQICL3XGb7fe1LPt9tj3uCvVLVx3t+4l2eqHl55rko3u4RF3QfgyrdEMyfQZDREwqpSCI6vaeYWivxNQaTkEfXS5Jknbsq690B1pcafzLdNda3aeKuq37iekEzjoGNyrXWu0gDPnon3cAeHAM9wSLQL9YgKyu8TAMBm5/mInW/gHOLKDau/8aRwAAAABJRU5ErkJggg=="
              width={18}
              height={18}
              alt="tiktok image"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-olayemi-449950243"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-black transition duration-300"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-xs text-gray-500 text-center md:text-right">
          &copy; {currentYear} Muhammed Olayemi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
