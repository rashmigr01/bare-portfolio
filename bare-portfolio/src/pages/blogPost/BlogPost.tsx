import { useParams, useNavigate } from "react-router";
import { ArrowUpLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { BLOG_POSTS, CITY, COUNTRY } from "../../../config/info";
import { LiveClock, CopyButton } from "../../components";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogPost = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  const blogPost = BLOG_POSTS.find(post => post.id === Number(blogId));

  useEffect(() => {
    if (blogPost) {
      const filePath = `/blogPosts/${blogPost.filePath}`;

      fetch(filePath)
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to fetch markdown content");
          }
          return response.text();
        })
        .then(content => {
          setMarkdownContent(content);
        })
        .catch(err => {
          console.error("Error fetching markdown:", err);
        });
    }
  }, [blogPost]);

  const handleCopy = async (code: string, blockId: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedStates(prev => ({ ...prev, [blockId]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [blockId]: false }));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const renderTitle = () => {
    if (!blogPost) {
      return <h1 className="text-2xl">Blog Post Not Found</h1>;
    }

    return (
      <div className="flex flex-col items-start gap-2 justify-start flex-wrap">
        <h1 className="text-2xl">{blogPost.title}</h1>
        <div className="flex items-center gap-2 justify-start flex-wrap">
          {blogPost.tags?.map(tag => (
            <span
              key={tag}
              className="text-xs rounded-full border border-gray-200 p-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const renderBody = () => {
    if (!blogPost) {
      return (
        <p className="text-gray-600">
          The blog post you're looking for doesn't exist.
        </p>
      );
    }

    return (
      <div className="markdown-content">
        <ReactMarkdown
          components={{
            code({ className, children }) {
              const match = /language-(\w+)/.exec(className || "");
              if (match) {
                const language = match[1];
                const codeString = String(children).replace(/\n$/, "");
                const blockId = `${language}-${codeString.slice(0, 20)}`;
                const isCopied = copiedStates[blockId];

                return (
                  <div className="relative mb-4">
                    <div className="flex items-center justify-between bg-gray-100 py-2 rounded-t-lg border-b border-gray-200">
                      <span className="text-xs font-mono text-gray-600 uppercase tracking-wide">
                        {language}
                      </span>
                      <CopyButton
                        handleCopy={handleCopy}
                        code={codeString}
                        blockId={blockId}
                        isCopied={isCopied}
                      />
                    </div>
                    <SyntaxHighlighter
                      language={language}
                      style={oneLight}
                      customStyle={{
                        borderRadius: "0 0 0.5rem 0.5rem",
                        padding: "1rem",
                        margin: "0",
                      }}
                    >
                      {codeString}
                    </SyntaxHighlighter>
                  </div>
                );
              }
              return <code className={className}>{children}</code>;
            },
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
    );
  };

  const goBack = () => navigate(-1) || navigate("/");

  return (
    <div className="bg-white text-black font-mono py-8 px-16 min-h-screen flex flex-col">
      <header className="mb-4">
        <button
          onClick={goBack}
          className="text-xs text-gray-600 flex items-center gap-1 relative group w-fit mb-4"
        >
          Go back
          <ArrowUpLeft className="size-4" />
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-200 group-hover:w-full" />
        </button>
        {renderTitle()}
      </header>

      <main className="flex-1 flex items-center justify-center">
        {renderBody()}
      </main>

      <footer className="text-xs text-right mt-4">
        <LiveClock />
        <p>
          {CITY}, {COUNTRY}
        </p>
      </footer>
    </div>
  );
};

export default BlogPost;
