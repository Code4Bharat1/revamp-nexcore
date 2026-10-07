"use client";

import React, { useEffect, useState } from "react";

const videos = [
  {
    title: "Employees",
    iconImage: "/images/odoo-videos-icons/icon-2.png", // Path for the icon image
    link: "https://www.youtube.com/embed/-jOAFm5SCx4?si=vlfgEHVz-lhknKrY",
    thumbnail: "/images/employees-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Timesheet",
    iconImage: "/images/odoo-videos-icons/icon-3.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/timesheet-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Manufacturing",
    iconImage: "/images/odoo-videos-icons/icon-4.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/manufacturing-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Surveys",
    iconImage: "/images/odoo-videos-icons/icon-5.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/surveys-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Point of Sale",
    iconImage: "/images/App images/icon-1.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Project",
    iconImage: "/images/odoo-videos-icons/icon-6.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Helpdesk",
    iconImage: "/images/odoo-videos-icons/icon-7.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Accounting",
    iconImage: "/images/odoo-videos-icons/icon-8.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Website",
    iconImage: "/images/odoo-videos-icons/icon-9.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Referrals",
    iconImage: "/images/odoo-videos-icons/icon-10.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Planning",
    iconImage: "/images/odoo-videos-icons/icon-11.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Spreadsheet (BI)",
    iconImage: "/images/odoo-videos-icons/icon-12.png",
    link: "/images/odoo-videos-icons/icon-12.png",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "SMS Marketing",
    iconImage: "/images/odoo-videos-icons/icon-13.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Social Marketing",
    iconImage: "/images/odoo-videos-icons/icon-14.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Field Service",
    iconImage: "/images/odoo-videos-icons/icon-15.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "eLearning",
    iconImage: "/images/odoo-videos-icons/icon-16.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Rental",
    iconImage: "/images/odoo-videos-icons/icon-17.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Events",
    iconImage: "/images/odoo-videos-icons/icon-18.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "IoT",
    iconImage: "/images/odoo-videos-icons/icon-19.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Documents",
    iconImage: "/images/odoo-videos-icons/icon-20.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "eCommerce",
    iconImage: "/images/odoo-videos-icons/icon-21.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Appointments",
    iconImage: "/images/odoo-videos-icons/icon-22.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "CRM",
    iconImage: "/images/odoo-videos-icons/icon-23.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Marketing Automation",
    iconImage: "/images/odoo-videos-icons/icon-24.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Studio",
    iconImage: "/images/odoo-videos-icons/icon-25.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Email Marketing",
    iconImage: "/images/odoo-videos-icons/icon-26.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Expenses",
    iconImage: "/images/odoo-videos-icons/icon-27.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Inventory",
    iconImage: "/images/odoo-videos-icons/icon-28.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Sign",
    iconImage: "/images/odoo-videos-icons/icon-29.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
  {
    title: "Sales",
    iconImage: "/images/odoo-videos-icons/icon-30.png",
    link: "https://www.youtube.com/embed/ZQmLMeP2G1Q?si=MMuh_a8iphrWoyry",
    thumbnail: "/images/pos-thumbnail.png",
    isYouTube: true,
  },
];

const VideoGrid = () => {
  const [visibleVideos, setVisibleVideos] = useState([]);
  const [modalVideo, setModalVideo] = useState(null);

  useEffect(() => {
    const videoContainers = document.querySelectorAll(".video-container");
    if (!videoContainers.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexStr = entry.target.getAttribute("data-index");
            if (indexStr !== null) {
              const idx = parseInt(indexStr, 10);
              setVisibleVideos((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        rootMargin: "80px",
        threshold: 0.1,
      }
    );

    videoContainers.forEach((container) => observer.observe(container));

    return () => observer.disconnect();
  }, []);

  const openModal = (videoLink) => {
    setModalVideo(videoLink);
  };

  const closeModal = () => {
    setModalVideo(null);
  };

  return (
    <div className="px-4 md:px-8 lg:px-32 bg-white min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            data-index={index}
            className={`video-container bg-white pb-4 flex flex-col relative transition-all duration-700 shadow-[rgba(0,0,15,0.1)_0px_2px_3px_0px] ${
              visibleVideos.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {video.isYouTube ? (
              <div
                className="relative w-full h-48 rounded-md cursor-pointer overflow-hidden group/thumb"
                onClick={() => openModal(video.link)}
              >
                <img
                  src={video.thumbnail}
                  alt={`${video.title} tutorial video preview`}
                  loading="lazy"
                  decoding="async"
                  width="360"
                  height="192"
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover/thumb:bg-black/60 transition-all duration-300">
                  <button
                    aria-label={`Play ${video.title} demonstration video`}
                    className="bg-black/70 rounded-xl px-4 py-2 flex items-center justify-center shadow-lg group-hover/thumb:scale-110 transition-transform duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${video.title} video resources`}
                className="flex flex-col items-center"
              >
                <span className="text-3xl mb-2">{video.icon}</span>
              </a>
            )}
            <div className="flex justify-between items-center mt-2 px-4">
              <div className="flex items-center gap-2">
                <img
                  src={video.iconImage}
                  alt={`${video.title} module icon`}
                  loading="lazy"
                  decoding="async"
                  width="32"
                  height="32"
                  className="w-8 h-8"
                />
                <p className="text-lg font-semibold">{video.title}</p>
              </div>
              <button
                aria-label={`Learn more details about ${video.title}`}
                className="bg-gray-200 text-sm px-3 py-1 rounded-md shadow hover:bg-gray-300 transition-colors"
              >
                More
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video Player Modal"
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
        >
          <div className="bg-white p-4 rounded-lg max-w-4xl w-full relative">
            <button
              aria-label="Close video player"
              className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full rounded-md"
                src={`${modalVideo}?autoplay=1&controls=1&rel=0`}
                title="Odoo Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGrid;
