export const TCPLButton = ({ description, className, url }) => {
  return (
    <a className={className} href={url}>
      {description.isOutlined ? (
        <div className="py-3 px-8 border text-white border-white rounded-3xl text-xs font-medium cursor-pointer">
          {description.buttonText}
        </div>
      ) : (
        <div className="py-3 px-8 bg-blue text-white rounded-3xl text-xs font-medium cursor-pointer">
          {description.buttonText}
        </div>
      )}
    </a>
  );
};
