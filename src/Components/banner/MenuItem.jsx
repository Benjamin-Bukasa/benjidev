const MenuItem = ({ icon, text, style }) => {
  return (
    <div className={style}>
      <div className="">{icon}</div>
      <p className="text-[12px]">{text}</p>
    </div>
  );
};

export default MenuItem;
