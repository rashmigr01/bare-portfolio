import { Check, Copy } from "lucide-react";

const CopyButton = ({
  handleCopy,
  code,
  blockId,
  isCopied,
}: {
  handleCopy: (code: string, blockId: string) => void;
  code: string;
  blockId: string;
  isCopied: boolean;
}) => {
  return (
    <button
      onClick={() => handleCopy(code, blockId)}
      className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-800 transition-colors"
    >
      {isCopied ? (
        <div className="relative group flex items-center gap-1">
          <Check className="size-3" />
          Copied!
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-200 group-hover:w-full" />
        </div>
      ) : (
        <div className="relative group cursor-pointer flex items-center gap-1">
          <Copy className="size-3" />
          Copy
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-200 group-hover:w-full" />
        </div>
      )}
    </button>
  );
};

export { CopyButton };
