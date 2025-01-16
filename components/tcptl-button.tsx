import Link from "next/link";

export const TCPTLButton = ({ description, className, url, children }) => {
  return (
    <Link className={className} href={url}>
      {description.isOutlined ? (
        <div className="py-3 px-8 border text-white border-white rounded-3xl text-xs font-medium cursor-pointer">
          {children}
        </div>
      ) : (
        <div className="py-3 px-8 bg-blue text-white rounded-3xl text-xs font-medium cursor-pointer">
          {children}
        </div>
      )}
    </Link>
  );
};
