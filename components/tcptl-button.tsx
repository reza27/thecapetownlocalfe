import Link from "next/link";

export const TCPTLButton = ({
  fontSize = 12,
  xPadding = 32,
  yPadding = 12,
  description,
  className,
  url,
  children,
}) => {
  return (
    <Link className={className} href={url}>
      {description.isOutlined ? (
        <div
          className="py-3 px-8 border text-white border-white rounded-3xl text-xs font-medium cursor-pointer"
          style={{
            fontSize: fontSize,
            paddingBottom: yPadding,
            paddingTop: yPadding,
            paddingLeft: xPadding,
            paddingRight: xPadding,
          }}
        >
          {children}
        </div>
      ) : (
        <div
          className="py-3 px-8 bg-blue text-white rounded-3xl text-xs font-medium cursor-pointer"
          style={{
            fontSize: fontSize,
            paddingBottom: yPadding,
            paddingTop: yPadding,
            paddingLeft: xPadding,
            paddingRight: xPadding,
          }}
        >
          {children}
        </div>
      )}
    </Link>
  );
};
