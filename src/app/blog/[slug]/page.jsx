

"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function BlogDetail() {
  const { slug } = useParams();
  const blogSlug = Array.isArray(slug) ? slug[0] : slug;
  const [blog, setBlog] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (!blogSlug) return;
    const getBlog = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/blogs/slug/${blogSlug}`);
        setBlog(res.data.blog || res.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getBlog();
  }, [blogSlug]);

  if (!blog) {
    return (
      <>
        <style>{`
          .loading-wrap { }
          .skeleton-hero {
            height: 320px;
            background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
            background-size: 200% 100%;
            animation: shimmer 1.4s infinite;
          }
          .skeleton-block {
            border-radius: 10px;
            background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
            background-size: 200% 100%;
            animation: shimmer 1.4s infinite;
          }
          @keyframes shimmer {
            0%   { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
        <div className="loading-wrap">
          <Navbar />
          <div className="skeleton-hero" />
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
            <div className="skeleton-block" style={{ height: 320, borderRadius: 16, marginBottom: 8 }} />
            <div className="skeleton-block" style={{ height: 14, width: "90%" }} />
            <div className="skeleton-block" style={{ height: 14, width: "75%" }} />
            <div className="skeleton-block" style={{ height: 14, width: "82%" }} />
            <div className="skeleton-block" style={{ height: 14, width: "60%" }} />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        .detail-wrap { }

        /* Hero */
        .detail-hero {
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
          padding: 100px 24px 80px;
          text-align: center;
        }

        /* Category badge */
        .category-badge {
          display: inline-block;
          background: rgba(255,255,255,0.13);
          border: 1px solid rgba(255,255,255,0.2);
          color: #bfdbfe;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 14px;
          border-radius: 999px;
          margin-bottom: 18px;
        }

        /* Featured image */
        .featured-img {
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.10);
          margin-bottom: 48px;
          display: block;
          max-height: 480px;
          object-fit: cover;
          animation: fadeUp 0.5s ease both;
        }

        /* Content area */
        .content-body {
          animation: fadeUp 0.5s ease 0.1s both;
        }

        /* Tags */
        .tag-pill {
          display: inline-block;
          background: #eff6ff;
          color: #1e40af;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 5px 14px;
          border-radius: 999px;
          transition: background 0.2s;
        }
        .tag-pill:hover { background: #dbeafe; }

        /* FAQ */
        .faq-item {
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          transition: box-shadow 0.2s;
        }
        .faq-item:hover { box-shadow: 0 2px 12px rgba(37,99,235,0.08); }
        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: #f8fafc;
          border: none;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #0f172a;
          text-align: left;
          gap: 12px;
          transition: background 0.2s, color 0.2s;
        }
        .faq-question.open { background: #eff6ff; color: #2563eb; }
        .faq-icon {
          flex-shrink: 0;
          width: 22px; height: 22px;
          border-radius: 50%;
          background: #e2e8f0;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.9rem;
          transition: background 0.2s, transform 0.25s;
        }
        .faq-question.open .faq-icon {
          background: #2563eb;
          color: #fff;
          transform: rotate(45deg);
        }
        .faq-answer {
          padding: 0 20px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.7;
        }
        .faq-answer.open {
          max-height: 400px;
          padding: 14px 20px 18px;
        }

        /* CTA */
        .cta-box {
          background: linear-gradient(135deg, #1e3a8a 0%, #4f46e5 100%);
          border-radius: 20px;
          padding: 52px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-box::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 80% 30%, rgba(255,255,255,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-btn {
          display: inline-block;
          margin-top: 24px;
          background: #fff;
          color: #1e40af;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 12px 28px;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .cta-btn:hover { background: #eff6ff; transform: translateY(-2px); }

        /* Divider */
        .section-divider {
          width: 40px; height: 3px;
          background: linear-gradient(90deg, #2563eb, #f97316);
          border-radius: 2px;
          margin-bottom: 24px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="detail-wrap">
        <Navbar />

        {/* ── HERO ── */}
        <div className="detail-hero">
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div className="category-badge">{blog.category || "Technology"}</div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginBottom: 16,
              }}
            >
              {blog.title}
            </h1>
            <p style={{ color: "#93c5fd", fontSize: "0.9rem", fontWeight: 500 }}>
              {new Date(blog.createdAt).toDateString()}
            </p>
          </div>
        </div>

        {/* ── CONTENT ── */}
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "56px 24px" }}>

          {/* Featured Image */}
          <img
            src={blog.featuredImage ? `${BASE_URL}${blog.featuredImage}` : "/default.jpg"}
            alt={blog.title}
            className="featured-img"
          />

          {/* Blog Body */}
          <div
            className="content-body prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Tags */}
          {blog.tags?.length > 0 && (
            <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {blog.tags.map((tag, i) => (
                <span key={i} className="tag-pill">#{tag}</span>
              ))}
            </div>
          )}

          {/* Divider */}
          {blog.faq?.length > 0 && (
            <hr style={{ margin: "52px 0 0", border: "none", borderTop: "1px solid #e2e8f0" }} />
          )}

          {/* FAQ */}
          {blog.faq?.length > 0 && (
            <div style={{ marginTop: 48 }}>
              <div className="section-divider" />
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", marginBottom: 20, letterSpacing: "-0.01em" }}>
                Frequently Asked Questions
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {blog.faq.map((f, i) => (
                  <div key={i} className="faq-item">
                    <button
                      className={`faq-question ${openFaq === i ? "open" : ""}`}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span>{f.question}</span>
                      <span className="faq-icon">{openFaq === i ? "−" : "+"}</span>
                    </button>
                    <div className={`faq-answer ${openFaq === i ? "open" : ""}`}>
                      {f.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div style={{ marginTop: 64 }}>
            <div className="cta-box">
              <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#fff", marginBottom: 10, letterSpacing: "-0.01em" }}>
                Need IT Solutions for Your Business?
              </h3>
              <p style={{ color: "#bfdbfe", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: 420, margin: "0 auto" }}>
                Contact our experts and grow your business with cutting-edge technology.
              </p>
              <a href="/contactus" className="cta-btn">Get Started →</a>
            </div>
          </div>

        </div>

        <Footer />
      </div>
    </>
  );
}
