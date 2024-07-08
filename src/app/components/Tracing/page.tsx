"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import Tsc from "../../../tsc.jpeg";
import Todo from "../../../Todo.png";
import Heritage from "../../../Heritege.jpg";
import Christmas from "../../../Christmas.webp";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="pt-4">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-teal-200">{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height={1000}
                  width={1000}
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
              {item.githubLink && (
                <div className="py-4">
                  <button className="rounded-xl border border-white p-4">
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      View on GitHub
                    </a>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "TSC Website",
    description: (
      <>
        <p>
          The Special Character Website is a modern and dynamic platform built
          using Next.js, designed to serve as a comprehensive resource for
          finding, copying, and utilizing special characters, symbols, and
          emojis. The website features a visually appealing homepage, organized
          sections for various character categories, detailed character pages
          with one-click copy functionality, and a robust search feature. Users
          can also save their favorite characters for quick access.
          Additionally, the site includes a blog with informative articles and
          tutorials, and a contact form for user feedback. Technologies like
          Next.js, Tailwind CSS, and React ensure a responsive, SEO-friendly,
          and performant user experience. Key challenges included ensuring
          correct character rendering across browsers and optimizing the site
          for SEO and performance, all of which were effectively addressed.
          Future enhancements may include user accounts, a mobile app, and
          advanced analytics to further improve user engagement and site
          functionality. This project demonstrates the power of Next.js in
          creating a fast, efficient, and user-friendly platform for digital
          communication and content creation.
        </p>
      </>
    ),
    badge: "Next.js",
    image: Tsc,
    githubLink: "https://github.com/special-char/spechialchar-web",
  },
  {
    title: "Todo-App",
    description: (
      <>
        <p>
          The Todo App is a task management platform built with Next.js,
          designed to help users organize and track daily activities. It
          features a user-friendly interface for creating, editing, and deleting
          tasks, along with categorization, deadlines, and priority labels. The
          app's responsive design ensures seamless use across devices. Using
          Next.js for server-side rendering, it offers fast performance and SEO
          optimization. Tailwind CSS provides a modern look, while React
          enhances interactivity. Key features include task filtering, search,
          progress tracking, and user authentication for secure data
          persistence. Future enhancements may include collaboration, calendar
          integration, and advanced analytics. This project showcases Next.js's
          capability in creating efficient, user-centric task management
          solutions.
        </p>
      </>
    ),
    badge: "Next.js",
    image: Todo,
    githubLink: "https://github.com/harsh999111/Todo_next.js",
  },
  {
    title: "Heritage",
    description: (
      <>
        <p>
          The Heritage Description Website is a Next.js-based platform designed
          to showcase and preserve cultural and historical sites. It features a
          visually appealing homepage, detailed descriptions, high-quality
          images, and visitor information for each heritage site. The site is
          organized into categories and includes an interactive map and search
          functionality. Next.js ensures fast performance and SEO optimization,
          while Tailwind CSS provides a responsive design. React enhances
          interactivity. Additional features include a blog, contact form, and
          user accounts for saving favorite sites. Future plans may include
          virtual tours and educational resources, demonstrating Next.js's
          effectiveness in heritage preservation.
        </p>
      </>
    ),
    badge: "Next.js",
    image: Heritage,
    githubLink: "https://github.com/harsh999111/Heritage-1",
  },
  {
    title: "The Christmas",
    description: (
      <>
        <p>
          The Christmas App is a platform built with HTML, CSS, and JavaScript,
          designed to celebrate and share the joy of Christmas. It features a
          festive interface for creating and sharing Christmas greetings, along
          with an advent calendar, holiday recipes, and event listings. The
          app's responsive design ensures seamless use across devices. Key
          features include a countdown to Christmas, holiday music playlist,
          and user authentication for personalized experiences. Future
          enhancements may include social sharing, wish lists, and virtual
          gatherings. This project showcases the capability of basic web
          technologies in creating engaging and festive user experiences.
        </p>
      </>
    ),
    badge: "HTML, CSS, JavaScript",
    image: Christmas,
    githubLink: "https://github.com/harsh999111/Heritage-1",
  },
];
