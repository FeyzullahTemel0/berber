type DemoFrameProps = {
  admin?: boolean;
};

export function DemoFrame({ admin = false }: DemoFrameProps) {
  const source = admin ? "/kara-demo.html#yonetim" : "/kara-demo.html";

  return (
    <iframe
      className="demo-frame"
      src={source}
      title={admin ? "KARA Barber Studio yönetim paneli demosu" : "KARA Barber Studio"}
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
}
